import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  CheckCircle2,
  Cloud,
  CloudOff,
  Loader2,
  LogOut,
  RefreshCw,
  ShieldCheck,
  X,
  AlertCircle
} from 'lucide-react';
import { useFirebaseAuth } from '../contexts/FirebaseAuthContext';
import { getAvatarConfig, getBottleCaps, getExamHistory, getFlashcardProgress, getStreakData } from '../utils/storage';
import { VaultAvatarSprite } from './VaultAvatarSprite';
import { BottleCapIcon } from './BottleCapIcon';

const VaultGearBadge: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="4" />
    <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 3" />
    {/* Gear Teeth */}
    <rect x="29" y="2" width="6" height="8" rx="1.5" fill="currentColor" />
    <rect x="29" y="54" width="6" height="8" rx="1.5" fill="currentColor" />
    <rect x="2" y="29" width="8" height="6" rx="1.5" fill="currentColor" />
    <rect x="54" y="29" width="8" height="6" rx="1.5" fill="currentColor" />
    <path d="M12 12l5.5 5.5M46.5 46.5L52 52M52 12l-5.5 5.5M17.5 46.5L12 52" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    <circle cx="32" cy="32" r="6" fill="currentColor" />
  </svg>
);

const GoogleLogoIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96z"
    />
  </svg>
);

export const FalloutLoginModal: React.FC = () => {
  const {
    user,
    isAuthReady,
    isSigningIn,
    syncStatus,
    lastSyncedAt,
    authError,
    isLoginModalOpen,
    closeLoginModal,
    signInWithGoogle,
    signOutDweller,
    syncNow
  } = useFirebaseAuth();

  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [user?.photoURL]);

  useEffect(() => {
    if (!isLoginModalOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLoginModal();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isLoginModalOpen, closeLoginModal]);

  if (!isLoginModalOpen || typeof document === 'undefined') {
    return null;
  }

  const caps = getBottleCaps();
  const examCount = getExamHistory().length;
  const masteredCount = Object.values(getFlashcardProgress()).filter(
    item => item.status === 'mastered'
  ).length;
  const streak = getStreakData();
  const avatarConfig = getAvatarConfig();

  const formatLastSynced = (ts: number | null) => {
    if (!ts) return 'Ready to sync';
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      month: 'short',
      day: 'numeric'
    }).format(new Date(ts));
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-stone-950/75 backdrop-blur-sm flex items-start sm:items-center justify-center p-4 pl-safe pr-safe overflow-y-auto font-sans"
      role="dialog"
      aria-modal="true"
      aria-labelledby="vault-login-heading"
    >
      <div
        className="fixed inset-0"
        onClick={closeLoginModal}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-md my-auto rounded-3xl bg-white dark:bg-[#0E1B38] border-2 border-amber-500/60 dark:border-amber-400/50 shadow-2xl overflow-hidden text-stone-900 dark:text-stone-100 vault-panel-rivets">
        {/* Authentic Vault-Tec Hazard Stripe Top Bezel */}
        <div className="h-3 w-full vault-tec-hazard-stripe" />

        {/* Terminal Header */}
        <div className="px-6 pt-5 pb-4 border-b border-stone-200 dark:border-[#2B447A] flex items-center justify-between gap-3 bg-stone-50/80 dark:bg-[#080E1E]/60">
          <div className="flex items-center space-x-3 min-w-0">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/15 dark:bg-amber-400/15 border border-amber-500/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
              <VaultGearBadge className="w-7 h-7" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                Vault-Tec Security Clearance
              </p>
              <h2
                id="vault-login-heading"
                className="text-lg font-black font-mono tracking-tight text-stone-900 dark:text-white truncate"
              >
                {user ? 'Dweller Cloud Dossier' : 'Vault Cloud Uplink'}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={closeLoginModal}
            className="p-2 rounded-xl text-stone-500 hover:text-stone-900 dark:text-sky-300 dark:hover:text-amber-300 hover:bg-stone-200/70 dark:hover:bg-[#162852] transition cursor-pointer shrink-0"
            aria-label="Close Vault login dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {!isAuthReady ? (
            <div className="py-10 flex flex-col items-center justify-center space-y-3 text-center">
              <Loader2 className="w-7 h-7 animate-spin text-amber-500" />
              <p className="text-xs font-mono text-stone-600 dark:text-sky-300">
                Connecting to Vault-Tec Auth Relay...
              </p>
            </div>
          ) : user ? (
            <>
              {/* Authenticated Dweller Identity Frame */}
              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-[#080E1E] border border-stone-200 dark:border-[#2B447A] flex items-center space-x-3.5 relative overflow-hidden">
                {user.photoURL && !imgError ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || 'Vault Dweller'}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-400 shadow-sm shrink-0"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-[#162852] border-2 border-amber-400 flex items-center justify-center overflow-hidden shrink-0">
                    <VaultAvatarSprite config={avatarConfig} className="w-12 h-14" />
                  </div>
                )}

                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Verified Dweller
                    </span>
                  </div>
                  <p className="text-base font-black text-stone-900 dark:text-white truncate">
                    {user.displayName || 'Vault 101 Engineer'}
                  </p>
                  <p className="text-xs font-mono text-stone-600 dark:text-sky-300 truncate">
                    {user.email}
                  </p>
                </div>
              </div>

              {/* Cloud Sync Readout */}
              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-[#080E1E]/80 border border-stone-200 dark:border-[#2B447A] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-stone-600 dark:text-sky-300 flex items-center space-x-1.5">
                    {syncStatus === 'syncing' ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-500" />
                    ) : syncStatus === 'offline' ? (
                      <CloudOff className="w-3.5 h-3.5 text-stone-400" />
                    ) : (
                      <Cloud className="w-3.5 h-3.5 text-emerald-500" />
                    )}
                    <span>
                      {syncStatus === 'syncing'
                        ? 'Synchronizing Vault...'
                        : syncStatus === 'offline'
                          ? 'Offline (Cached Locally)'
                          : syncStatus === 'error'
                            ? 'Sync Retry Needed'
                            : 'Cloud Sync Active'}
                    </span>
                  </span>
                  <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400">
                    {formatLastSynced(lastSyncedAt)}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] text-center">
                    <div className="text-sm font-black font-mono text-amber-600 dark:text-amber-400 flex items-center justify-center space-x-1">
                      <BottleCapIcon className="w-3.5 h-3.5 text-amber-500" />
                      <span>{caps.toLocaleString()}</span>
                    </div>
                    <div className="text-[10px] font-mono text-stone-500 dark:text-sky-300 mt-0.5">
                      Caps
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] text-center">
                    <div className="text-sm font-black font-mono text-emerald-600 dark:text-emerald-400">
                      {masteredCount}
                    </div>
                    <div className="text-[10px] font-mono text-stone-500 dark:text-sky-300 mt-0.5">
                      Mastered
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] text-center">
                    <div className="text-sm font-black font-mono text-stone-900 dark:text-white">
                      {examCount} · {streak.currentStreak}d
                    </div>
                    <div className="text-[10px] font-mono text-stone-500 dark:text-sky-300 mt-0.5">
                      Exams · Streak
                    </div>
                  </div>
                </div>
              </div>

              {authError && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/40 text-red-700 dark:text-red-300 text-xs flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{authError}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={syncNow}
                  disabled={syncStatus === 'syncing'}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-stone-950 text-xs font-black flex items-center justify-center space-x-2 transition shadow-sm cursor-pointer"
                >
                  <RefreshCw className={`w-4 h-4 ${syncStatus === 'syncing' ? 'animate-spin' : ''}`} />
                  <span>{syncStatus === 'syncing' ? 'Syncing...' : 'Sync Now'}</span>
                </button>
                <button
                  type="button"
                  onClick={signOutDweller}
                  className="py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-[#162852] dark:hover:bg-[#1e356b] border border-stone-200 dark:border-[#2B447A] text-stone-800 dark:text-stone-100 text-xs font-bold flex items-center justify-center space-x-1.5 transition cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Pip-Boy Phosphor Terminal Intro Screen */}
              <div className="p-4 rounded-2xl bg-[#071512] border border-emerald-500/40 text-emerald-400 font-mono space-y-2.5 relative overflow-hidden">
                <div className="vault-crt-overlay absolute inset-0" aria-hidden="true" />
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-amber-300 font-bold">
                    <span>RobCo Terminal Link</span>
                    <span>Vault 101</span>
                  </div>
                  <p className="text-xs leading-relaxed text-emerald-300">
                    Authenticate your Dweller ID with Google to back up Bottle Caps, G.O.A.T. mock exams, S.P.E.C.I.A.L. flashcards, and pinned formulas across devices.
                  </p>
                  <div className="pt-1 flex items-center space-x-2 text-[11px] text-emerald-400/90">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Existing local progress merges automatically on sign-in</span>
                  </div>
                </div>
              </div>

              {/* Local Device Data Preview */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2.5 rounded-xl bg-stone-50 dark:bg-[#080E1E] border border-stone-200 dark:border-[#2B447A] text-center">
                  <div className="text-sm font-black font-mono text-amber-600 dark:text-amber-400 flex items-center justify-center space-x-1">
                    <BottleCapIcon className="w-3.5 h-3.5 text-amber-500" />
                    <span>{caps.toLocaleString()}</span>
                  </div>
                  <div className="text-[10px] font-mono text-stone-500 dark:text-sky-300 mt-0.5">
                    Local Caps
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-stone-50 dark:bg-[#080E1E] border border-stone-200 dark:border-[#2B447A] text-center">
                  <div className="text-sm font-black font-mono text-emerald-600 dark:text-emerald-400">
                    {masteredCount}
                  </div>
                  <div className="text-[10px] font-mono text-stone-500 dark:text-sky-300 mt-0.5">
                    Mastered
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-stone-50 dark:bg-[#080E1E] border border-stone-200 dark:border-[#2B447A] text-center">
                  <div className="text-sm font-black font-mono text-stone-900 dark:text-white">
                    {examCount}
                  </div>
                  <div className="text-[10px] font-mono text-stone-500 dark:text-sky-300 mt-0.5">
                    Exams
                  </div>
                </div>
              </div>

              {authError && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/40 text-red-700 dark:text-red-300 text-xs flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{authError}</span>
                </div>
              )}

              <div className="space-y-2.5 pt-1">
                <button
                  type="button"
                  onClick={signInWithGoogle}
                  disabled={isSigningIn}
                  className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-[#080E1E] font-black text-sm flex items-center justify-center space-x-2.5 shadow-md transition interactive-btn cursor-pointer"
                >
                  {isSigningIn ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-xs shrink-0">
                        <GoogleLogoIcon className="w-3.5 h-3.5" />
                      </span>
                      <span>Sign in with Google</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={closeLoginModal}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-[#162852] dark:hover:bg-[#1e356b] border border-stone-200 dark:border-[#2B447A] text-stone-700 dark:text-sky-200 text-xs font-bold transition cursor-pointer"
                >
                  Continue Offline
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};
