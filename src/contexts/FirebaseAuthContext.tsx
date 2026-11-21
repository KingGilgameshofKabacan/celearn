import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { onAuthStateChanged, signInWithPopup, signOut, User } from 'firebase/auth';
import { auth, ensureFirestoreReachable, googleProvider, isFirestoreBackendOffline } from '../firebase';
import {
  isCloudOfflineBypassActive,
  pushVaultChangesToCloud,
  syncVaultOnSignIn
} from '../services/vaultCloudSync';
import { soundManager } from '../utils/audio';

export type CloudSyncStatus = 'idle' | 'syncing' | 'synced' | 'offline' | 'error';

interface FirebaseAuthContextValue {
  user: User | null;
  isAuthReady: boolean;
  isSigningIn: boolean;
  syncStatus: CloudSyncStatus;
  lastSyncedAt: number | null;
  authError: string | null;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  signInWithGoogle: () => Promise<void>;
  signOutDweller: () => Promise<void>;
  syncNow: () => Promise<void>;
  clearAuthError: () => void;
}

const FirebaseAuthContext = createContext<FirebaseAuthContextValue | null>(null);

export const FirebaseAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthReady, setIsAuthReady] = useState<boolean>(false);
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [syncStatus, setSyncStatus] = useState<CloudSyncStatus>('idle');
  const [lastSyncedAt, setLastSyncedAt] = useState<number | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  // Prevent circular sync push right after syncVaultOnSignIn writes merged cloud state to localStorage
  const isApplyingRemoteRef = useRef<boolean>(false);
  const syncTimerRef = useRef<number | null>(null);
  const pendingOptionsRef = useRef<{
    includeProfile: boolean;
    includeProgress: boolean;
    syncExams: boolean;
    syncCustom: boolean;
    syncLeaderboard: boolean;
  }>({
    includeProfile: false,
    includeProgress: false,
    syncExams: false,
    syncCustom: false,
    syncLeaderboard: false
  });
  // Capture fatal Firestore permission/quota errors so ErrorBoundary catches them cleanly on render
  const [fatalFirestoreError, setFatalFirestoreError] = useState<Error | null>(null);

  if (fatalFirestoreError) {
    throw fatalFirestoreError;
  }

  const clearOfflineBypass = (): void => {
    try {
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.removeItem('cele_cloud_sync_offline_mode');
      }
    } catch {
      // Ignore
    }
  };

  const broadcastCloudSynced = (): void => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('cele_cloud_synced', { detail: { syncedAt: Date.now() } })
      );
    }
  };

  const isTransientOfflineMessage = (msg: string): boolean => {
    const lower = msg.toLowerCase();
    return (
      lower.includes('client is offline') ||
      lower.includes('could not reach cloud firestore') ||
      lower.includes('code=unavailable') ||
      lower.includes('network-request-failed')
    );
  };

  const runCloudSyncOnSignIn = useCallback(async (firebaseUser: User) => {
    if (isCloudOfflineBypassActive() || isFirestoreBackendOffline()) {
      setSyncStatus('offline');
      return;
    }

    const reachable = await ensureFirestoreReachable();
    if (!reachable) {
      setSyncStatus('offline');
      return;
    }

    setSyncStatus('syncing');
    isApplyingRemoteRef.current = true;
    try {
      await syncVaultOnSignIn(firebaseUser);
      setSyncStatus('synced');
      setLastSyncedAt(Date.now());
      setAuthError(null);
      broadcastCloudSynced();
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      if (isTransientOfflineMessage(message)) {
        setSyncStatus('offline');
      } else if (message.includes('"operationType"')) {
        setFatalFirestoreError(err instanceof Error ? err : new Error(message));
      } else {
        setSyncStatus('error');
        setAuthError(message);
      }
    } finally {
      window.setTimeout(() => {
        isApplyingRemoteRef.current = false;
      }, 300);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, firebaseUser => {
      setUser(firebaseUser);
      setIsAuthReady(true);

      if (firebaseUser) {
        void runCloudSyncOnSignIn(firebaseUser);
      } else {
        setSyncStatus('idle');
        setLastSyncedAt(null);
      }
    });

    return () => unsubscribe();
  }, [runCloudSyncOnSignIn]);

  const flushPendingSync = useCallback(async () => {
    const currentUser = auth.currentUser;
    if (!currentUser || !isAuthReady) return;
    if (isCloudOfflineBypassActive() || isFirestoreBackendOffline()) {
      setSyncStatus('offline');
      return;
    }

    const reachable = await ensureFirestoreReachable();
    if (!reachable) {
      setSyncStatus('offline');
      return;
    }

    const opts = { ...pendingOptionsRef.current };
    pendingOptionsRef.current = {
      includeProfile: false,
      includeProgress: false,
      syncExams: false,
      syncCustom: false,
      syncLeaderboard: false
    };

    if (
      !opts.includeProfile &&
      !opts.includeProgress &&
      !opts.syncExams &&
      !opts.syncCustom &&
      !opts.syncLeaderboard
    ) {
      return;
    }

    setSyncStatus('syncing');
    try {
      await pushVaultChangesToCloud(currentUser, opts);
      setSyncStatus('synced');
      setLastSyncedAt(Date.now());
      setAuthError(null);
      broadcastCloudSynced();
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      if (isTransientOfflineMessage(message)) {
        setSyncStatus('offline');
      } else if (message.includes('"operationType"')) {
        setFatalFirestoreError(err instanceof Error ? err : new Error(message));
      } else {
        setSyncStatus('error');
      }
    }
  }, [isAuthReady]);

  const scheduleCloudPush = useCallback(
    (patch: {
      includeProfile?: boolean;
      includeProgress?: boolean;
      syncExams?: boolean;
      syncCustom?: boolean;
      syncLeaderboard?: boolean;
    }) => {
      if (!auth.currentUser || !isAuthReady || isApplyingRemoteRef.current) return;

      pendingOptionsRef.current = {
        includeProfile: pendingOptionsRef.current.includeProfile || Boolean(patch.includeProfile),
        includeProgress: pendingOptionsRef.current.includeProgress || Boolean(patch.includeProgress),
        syncExams: pendingOptionsRef.current.syncExams || Boolean(patch.syncExams),
        syncCustom: pendingOptionsRef.current.syncCustom || Boolean(patch.syncCustom),
        syncLeaderboard: pendingOptionsRef.current.syncLeaderboard || Boolean(patch.syncLeaderboard)
      };

      if (syncTimerRef.current !== null) {
        window.clearTimeout(syncTimerRef.current);
      }
      syncTimerRef.current = window.setTimeout(() => {
        syncTimerRef.current = null;
        void flushPendingSync();
      }, 1500);
    },
    [flushPendingSync, isAuthReady]
  );

  const triggerImmediateCompletionSync = useCallback(
    (patch: {
      includeProfile?: boolean;
      includeProgress?: boolean;
      syncExams?: boolean;
      syncCustom?: boolean;
      syncLeaderboard?: boolean;
    }) => {
      if (!auth.currentUser || !isAuthReady) return;

      if (syncTimerRef.current !== null) {
        window.clearTimeout(syncTimerRef.current);
        syncTimerRef.current = null;
      }

      pendingOptionsRef.current = {
        includeProfile: pendingOptionsRef.current.includeProfile || Boolean(patch.includeProfile),
        includeProgress: pendingOptionsRef.current.includeProgress || Boolean(patch.includeProgress),
        syncExams: pendingOptionsRef.current.syncExams || Boolean(patch.syncExams),
        syncCustom: pendingOptionsRef.current.syncCustom || Boolean(patch.syncCustom),
        syncLeaderboard: pendingOptionsRef.current.syncLeaderboard || Boolean(patch.syncLeaderboard)
      };

      void flushPendingSync();
    },
    [flushPendingSync, isAuthReady]
  );

  // Auto-sync exam & flashcard drills strictly after finishing and submitting,
  // plus explicit settings/profile/custom-question edits outside active drills.
  useEffect(() => {
    const onProfileOrSettings = () =>
      scheduleCloudPush({ includeProfile: true, syncLeaderboard: true });
    const onLeaderboardOnly = () => scheduleCloudPush({ syncLeaderboard: true });
    const onCustomQuestions = () => scheduleCloudPush({ syncCustom: true });
    const onBackupRestored = () =>
      scheduleCloudPush({
        includeProfile: true,
        includeProgress: true,
        syncExams: true,
        syncCustom: true,
        syncLeaderboard: true
      });
    const onExamSubmitted = () =>
      triggerImmediateCompletionSync({
        includeProfile: true,
        includeProgress: true,
        syncExams: true,
        syncLeaderboard: true
      });
    const onFlashcardDrillCompleted = () =>
      triggerImmediateCompletionSync({
        includeProfile: true,
        includeProgress: true,
        syncLeaderboard: true
      });
    const onOnline = () => {
      if (auth.currentUser) {
        void runCloudSyncOnSignIn(auth.currentUser);
      }
    };

    window.addEventListener('cele_profile_updated', onProfileOrSettings);
    window.addEventListener('cele_streak_updated', onProfileOrSettings);
    window.addEventListener('cele_avatar_updated', onProfileOrSettings);
    window.addEventListener('cele_theme_changed', onProfileOrSettings);
    window.addEventListener('cele_theme_mode_changed', onProfileOrSettings);
    window.addEventListener('cele_daily_goal_updated', onProfileOrSettings);
    window.addEventListener('cele_sound_updated', onProfileOrSettings);
    window.addEventListener('cele_crt_updated', onProfileOrSettings);

    window.addEventListener('cele_exam_submitted', onExamSubmitted);
    window.addEventListener('cele_flashcard_drill_completed', onFlashcardDrillCompleted);
    window.addEventListener('cele_custom_questions_updated', onCustomQuestions);
    window.addEventListener('cele_leaderboard_updated', onLeaderboardOnly);
    window.addEventListener('cele_backup_restored', onBackupRestored);
    window.addEventListener('online', onOnline);

    return () => {
      if (syncTimerRef.current !== null) {
        window.clearTimeout(syncTimerRef.current);
      }
      window.removeEventListener('cele_profile_updated', onProfileOrSettings);
      window.removeEventListener('cele_streak_updated', onProfileOrSettings);
      window.removeEventListener('cele_avatar_updated', onProfileOrSettings);
      window.removeEventListener('cele_theme_changed', onProfileOrSettings);
      window.removeEventListener('cele_theme_mode_changed', onProfileOrSettings);
      window.removeEventListener('cele_daily_goal_updated', onProfileOrSettings);
      window.removeEventListener('cele_sound_updated', onProfileOrSettings);
      window.removeEventListener('cele_crt_updated', onProfileOrSettings);

      window.removeEventListener('cele_exam_submitted', onExamSubmitted);
      window.removeEventListener('cele_flashcard_drill_completed', onFlashcardDrillCompleted);
      window.removeEventListener('cele_custom_questions_updated', onCustomQuestions);
      window.removeEventListener('cele_leaderboard_updated', onLeaderboardOnly);
      window.removeEventListener('cele_backup_restored', onBackupRestored);
      window.removeEventListener('online', onOnline);
    };
  }, [runCloudSyncOnSignIn, scheduleCloudPush, triggerImmediateCompletionSync]);

  const signInWithGoogle = useCallback(async () => {
    clearOfflineBypass();
    setAuthError(null);
    setIsSigningIn(true);
    try {
      soundManager.playClick();
      const credential = await signInWithPopup(auth, googleProvider);
      if (credential.user) {
        soundManager.playGoalReached();
      }
    } catch (err: unknown) {
      soundManager.playError();
      const firebaseErr = err as { code?: string; message?: string };
      if (firebaseErr?.code === 'auth/popup-closed-by-user') {
        setAuthError('Sign-in popup was closed before completion. Try again when ready.');
      } else if (firebaseErr?.code === 'auth/popup-blocked') {
        setAuthError('Browser blocked the Google sign-in popup. Please allow popups for this site and retry.');
      } else if (firebaseErr?.code === 'auth/network-request-failed') {
        setAuthError('Network offline. Connect to the internet to authenticate your Vault Dweller ID.');
      } else {
        setAuthError(firebaseErr?.message || 'Unable to authenticate with Google.');
      }
    } finally {
      setIsSigningIn(false);
    }
  }, []);

  const signOutDweller = useCallback(async () => {
    clearOfflineBypass();
    setAuthError(null);
    try {
      soundManager.playClick();
      if (syncTimerRef.current !== null) {
        window.clearTimeout(syncTimerRef.current);
        syncTimerRef.current = null;
      }
      await signOut(auth);
      setSyncStatus('idle');
      setLastSyncedAt(null);
    } catch (err) {
      soundManager.playError();
      setAuthError(err instanceof Error ? err.message : 'Failed to sign out.');
    }
  }, []);

  const syncNow = useCallback(async () => {
    clearOfflineBypass();
    const currentUser = auth.currentUser;
    if (!currentUser) return;
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      setSyncStatus('offline');
      setAuthError('Device is offline. Cloud sync will resume automatically when online.');
      return;
    }

    setAuthError(null);
    setSyncStatus('syncing');
    soundManager.playClick();

    const reachable = await ensureFirestoreReachable(true);
    if (!reachable) {
      soundManager.playError();
      setSyncStatus('offline');
      setAuthError('Cloud Firestore backend is currently unreachable. Progress remains safely stored locally.');
      return;
    }

    try {
      await pushVaultChangesToCloud(currentUser, {
        includeProfile: true,
        includeProgress: true,
        syncExams: true,
        syncCustom: true,
        syncLeaderboard: true,
        forceSubcollections: true
      });
      setSyncStatus('synced');
      setLastSyncedAt(Date.now());
      soundManager.playCompleteTask();
      broadcastCloudSynced();
    } catch (err) {
      soundManager.playError();
      const message = err instanceof Error ? err.message : String(err);
      if (isTransientOfflineMessage(message)) {
        setSyncStatus('offline');
        setAuthError('Cloud Firestore backend is currently unreachable. Progress remains safely stored locally.');
      } else if (message.includes('"operationType"')) {
        setFatalFirestoreError(err instanceof Error ? err : new Error(message));
      } else {
        setSyncStatus('error');
        setAuthError(message);
      }
    }
  }, []);

  return (
    <FirebaseAuthContext.Provider
      value={{
        user,
        isAuthReady,
        isSigningIn,
        syncStatus,
        lastSyncedAt,
        authError,
        isLoginModalOpen,
        openLoginModal: () => {
          setAuthError(null);
          setIsLoginModalOpen(true);
        },
        closeLoginModal: () => setIsLoginModalOpen(false),
        signInWithGoogle,
        signOutDweller,
        syncNow,
        clearAuthError: () => setAuthError(null)
      }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export const useFirebaseAuth = (): FirebaseAuthContextValue => {
  const ctx = useContext(FirebaseAuthContext);
  if (!ctx) {
    throw new Error('useFirebaseAuth must be used inside FirebaseAuthProvider');
  }
  return ctx;
};
