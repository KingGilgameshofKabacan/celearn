import { User } from 'firebase/auth';
import { auth, ensureFirestoreReachable, isFirestoreBackendOffline } from '../firebase';
import { CEQuestion, ExamSessionResult, FlashcardProgress } from '../types';
import {
  isCloudOfflineBypassActive,
  pushVaultChangesToCloud,
  PushVaultChangesOptions
} from './vaultCloudSync';

export const DEFAULT_SYNC_DEBOUNCE_MS = 2000;

export interface SyncUserProgressOptions {
  /** Authenticated Firebase User instance (defaults to auth.currentUser) */
  user?: User | null;
  /** Optional explicit user ID assertion to guarantee owner-scoped writes */
  userId?: string;
  /** Local exam history snapshot to sync (defaults to stored history) */
  examHistory?: ExamSessionResult[];
  /** Local flashcard SRS progress map to sync (defaults to stored progress) */
  flashcardProgress?: FlashcardProgress;
  /** Local custom questions array to sync (defaults to stored custom questions) */
  customQuestions?: CEQuestion[];
  /** Selective domain flags */
  includeProfile?: boolean;
  includeProgress?: boolean;
  syncExams?: boolean;
  syncCustom?: boolean;
  syncLeaderboard?: boolean;
  forceSubcollections?: boolean;
}

export interface SyncUserProgressResult {
  synced: boolean;
  userId: string | null;
  syncedAt: number | null;
  skippedReason?: 'unauthenticated' | 'user-mismatch' | 'email-unverified' | 'offline';
}

/**
 * Robustly pushes local CELEARN state (exam history, flashcard progress,
 * custom questions, and leaderboard summary) to Firestore under the
 * authenticated user's UID while respecting offline guards, schema rules,
 * and serialized cloud queueing.
 */
export async function syncUserProgressToFirestore(
  userOrOptions?: User | string | SyncUserProgressOptions,
  extraOptions: Omit<SyncUserProgressOptions, 'user' | 'userId'> = {}
): Promise<SyncUserProgressResult> {
  let resolvedOptions: SyncUserProgressOptions;

  if (typeof userOrOptions === 'string') {
    resolvedOptions = { ...extraOptions, userId: userOrOptions };
  } else if (userOrOptions && typeof userOrOptions === 'object' && 'uid' in userOrOptions) {
    resolvedOptions = { ...extraOptions, user: userOrOptions as User };
  } else {
    resolvedOptions = { ...(userOrOptions as SyncUserProgressOptions | undefined), ...extraOptions };
  }

  const activeUser = resolvedOptions.user ?? auth.currentUser;
  if (!activeUser || !activeUser.uid) {
    return {
      synced: false,
      userId: null,
      syncedAt: null,
      skippedReason: 'unauthenticated'
    };
  }

  if (resolvedOptions.userId && resolvedOptions.userId !== activeUser.uid) {
    return {
      synced: false,
      userId: activeUser.uid,
      syncedAt: null,
      skippedReason: 'user-mismatch'
    };
  }

  if (!activeUser.emailVerified) {
    return {
      synced: false,
      userId: activeUser.uid,
      syncedAt: null,
      skippedReason: 'email-unverified'
    };
  }

  if (
    isCloudOfflineBypassActive() ||
    isFirestoreBackendOffline() ||
    !(await ensureFirestoreReachable())
  ) {
    return {
      synced: false,
      userId: activeUser.uid,
      syncedAt: null,
      skippedReason: 'offline'
    };
  }

  const hasExplicitSlices =
    resolvedOptions.includeProfile !== undefined ||
    resolvedOptions.includeProgress !== undefined ||
    resolvedOptions.syncExams !== undefined ||
    resolvedOptions.syncCustom !== undefined;

  const pushOptions: PushVaultChangesOptions = {
    includeProfile: resolvedOptions.includeProfile ?? false,
    includeProgress:
      resolvedOptions.includeProgress ??
      (hasExplicitSlices ? Boolean(resolvedOptions.flashcardProgress) : true),
    syncExams:
      resolvedOptions.syncExams ??
      (hasExplicitSlices ? Boolean(resolvedOptions.examHistory) : true),
    syncCustom:
      resolvedOptions.syncCustom ??
      (hasExplicitSlices ? Boolean(resolvedOptions.customQuestions) : true),
    syncLeaderboard: resolvedOptions.syncLeaderboard ?? true,
    forceSubcollections: Boolean(resolvedOptions.forceSubcollections),
    flashcardProgressOverride: resolvedOptions.flashcardProgress,
    examHistoryOverride: resolvedOptions.examHistory,
    customQuestionsOverride: resolvedOptions.customQuestions
  };

  await pushVaultChangesToCloud(activeUser, pushOptions);

  const syncedAt = Date.now();
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('cele_cloud_synced', { detail: { syncedAt } }));
  }

  return {
    synced: true,
    userId: activeUser.uid,
    syncedAt
  };
}

let pendingSyncTimer: number | null = null;
let accumulatedOptions: SyncUserProgressOptions = {};

/**
 * Cancels any pending debounced progress sync timer.
 */
export function cancelPendingUserProgressSync(): void {
  if (pendingSyncTimer !== null && typeof window !== 'undefined') {
    window.clearTimeout(pendingSyncTimer);
    pendingSyncTimer = null;
  }
  accumulatedOptions = {};
}

/**
 * Coalesces high-frequency local state mutations (e.g. rapid flashcard ratings
 * or custom question edits) and pushes the merged dirty slices after delayMs.
 */
export function scheduleUserProgressSync(
  options: SyncUserProgressOptions,
  delayMs: number = DEFAULT_SYNC_DEBOUNCE_MS,
  onFatalError?: (err: Error) => void
): void {
  if (typeof window === 'undefined') return;

  accumulatedOptions = {
    user: options.user ?? accumulatedOptions.user,
    userId: options.userId ?? accumulatedOptions.userId,
    examHistory: options.examHistory ?? accumulatedOptions.examHistory,
    flashcardProgress: options.flashcardProgress ?? accumulatedOptions.flashcardProgress,
    customQuestions: options.customQuestions ?? accumulatedOptions.customQuestions,
    includeProfile: Boolean(accumulatedOptions.includeProfile || options.includeProfile),
    includeProgress: Boolean(accumulatedOptions.includeProgress || options.includeProgress),
    syncExams: Boolean(accumulatedOptions.syncExams || options.syncExams),
    syncCustom: Boolean(accumulatedOptions.syncCustom || options.syncCustom),
    syncLeaderboard:
      options.syncLeaderboard ?? accumulatedOptions.syncLeaderboard ?? true,
    forceSubcollections: Boolean(
      accumulatedOptions.forceSubcollections || options.forceSubcollections
    )
  };

  if (pendingSyncTimer !== null) {
    window.clearTimeout(pendingSyncTimer);
  }

  pendingSyncTimer = window.setTimeout(() => {
    const payload = { ...accumulatedOptions };
    accumulatedOptions = {};
    pendingSyncTimer = null;

    void syncUserProgressToFirestore(payload).catch(err => {
      const error = err instanceof Error ? err : new Error(String(err));
      if (error.message.includes('"operationType"') && onFatalError) {
        onFatalError(error);
      } else {
        console.warn('Debounced user progress sync failed:', error);
      }
    });
  }, delayMs);
}
