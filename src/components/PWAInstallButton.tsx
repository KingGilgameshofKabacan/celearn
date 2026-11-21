import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Download, CheckCircle2, Share, PlusSquare, HelpCircle, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'compact' | 'full' | 'banner';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  className = '',
  variant = 'compact'
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState<boolean>(false);
  const [installSuccess, setInstallSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (!showIOSGuide) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowIOSGuide(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [showIOSGuide]);

  // If already installed and running in standalone window, don't clutter the UI
  if (isInstalled && !installSuccess) {
    return null;
  }

  const handleInstallClick = async () => {
    const success = await install();
    if (success) {
      setInstallSuccess(true);
      setTimeout(() => setInstallSuccess(false), 5000);
    }
  };

  if (installSuccess) {
    return (
      <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
        <CheckCircle2 className="w-4 h-4" />
        <span>Installed! Ready offline</span>
      </div>
    );
  }

  // Variant: Banner (e.g. for Home screen or Offline blackout preparation)
  if (variant === 'banner') {
    return (
      <div className={`p-4 rounded-2xl border bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/5 dark:from-orange-950/40 dark:via-amber-950/30 dark:to-stone-900 border-orange-500/40 ${className}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start space-x-3">
            <div className="p-2.5 rounded-xl bg-orange-500 text-white shadow-sm shrink-0 mt-0.5">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                <span>Install CELEARN for Instant Offline Review</span>
                <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-extrabold uppercase bg-orange-500/20 text-orange-600 dark:text-orange-400">
                  Blackout Ready
                </span>
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5 leading-relaxed">
                Review all PSAD, HPGE, MSTE terms, 3D flashcards, and mock exams without Wi-Fi, electricity, or mobile data.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            {isInstallable && (
              <button
                type="button"
                onClick={handleInstallClick}
                className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-bold text-xs shadow-sm transition flex items-center space-x-1.5 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Install App</span>
              </button>
            )}

            {isIOS && (
              <button
                type="button"
                onClick={() => setShowIOSGuide(true)}
                className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-bold text-xs shadow-sm transition flex items-center space-x-1.5 cursor-pointer"
              >
                <Share className="w-4 h-4" />
                <span>Install on iPhone</span>
              </button>
            )}

            {!isInstallable && !isIOS && (
              <button
                type="button"
                onClick={() => setShowIOSGuide(true)}
                className="px-3 py-2 rounded-xl border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 font-semibold text-xs transition flex items-center space-x-1.5 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-orange-500" />
                <span>How to Install</span>
              </button>
            )}
          </div>
        </div>

        {/* Modal / Guide */}
        {showIOSGuide && typeof document !== 'undefined' && createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-start sm:items-center justify-center bg-stone-950/70 backdrop-blur-xs p-4 pl-safe pr-safe overflow-y-auto"
            role="dialog"
            aria-modal="true"
            onClick={() => setShowIOSGuide(false)}
          >
            <div
              className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 space-y-4 my-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-xl bg-orange-500/15 text-orange-600 dark:text-orange-400">
                    <Download className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold">Install CELEARN</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 cursor-pointer"
                  aria-label="Close install guide"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs text-stone-600 dark:text-stone-300 space-y-2.5 leading-relaxed bg-stone-50 dark:bg-stone-800/60 p-4 rounded-2xl border border-stone-200 dark:border-stone-700">
                <p className="font-semibold text-stone-900 dark:text-stone-100">
                  To install and study during blackouts without internet:
                </p>
                <div className="flex items-start space-x-2">
                  <span className="font-mono font-bold text-orange-600">1.</span>
                  <span>
                    Tap the <strong>Share</strong> button <Share className="w-3.5 h-3.5 inline mx-0.5 text-orange-500" /> in Safari or your browser menu.
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-mono font-bold text-orange-600">2.</span>
                  <span>
                    Scroll down and tap <strong>Add to Home Screen</strong> <PlusSquare className="w-3.5 h-3.5 inline mx-0.5 text-orange-500" />.
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-mono font-bold text-orange-600">3.</span>
                  <span>
                    Tap <strong>Add</strong> at top right. Launch CELEARN anytime from your home screen!
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>,
          document.body
        )}
      </div>
    );
  }

  // Variant: Compact (For Header / Navbar)
  if (isInstallable) {
    return (
      <button
        type="button"
        onClick={handleInstallClick}
        title="Install CELEARN as an app for 100% offline study"
        className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-bold text-xs shadow-xs transition interactive-btn cursor-pointer ${className}`}
      >
        <Download className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Install App</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          type="button"
          onClick={() => setShowIOSGuide(true)}
          title="Install CELEARN on your iPhone / iPad"
          className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 font-semibold text-xs transition interactive-btn cursor-pointer ${className}`}
        >
          <Download className="w-3.5 h-3.5 text-orange-500" />
          <span className="hidden sm:inline">Install PWA</span>
        </button>

        {showIOSGuide && typeof document !== 'undefined' && createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-start sm:items-center justify-center bg-stone-950/70 backdrop-blur-xs p-4 pl-safe pr-safe overflow-y-auto"
            role="dialog"
            aria-modal="true"
            onClick={() => setShowIOSGuide(false)}
          >
            <div
              className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 space-y-4 my-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-xl bg-orange-500/15 text-orange-600 dark:text-orange-400">
                    <Download className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold">Install on iPhone / iPad</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 cursor-pointer"
                  aria-label="Close install guide"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs text-stone-600 dark:text-stone-300 space-y-2.5 leading-relaxed bg-stone-50 dark:bg-stone-800/60 p-4 rounded-2xl border border-stone-200 dark:border-stone-700">
                <p className="font-semibold text-stone-900 dark:text-stone-100">
                  Full offline access during blackouts:
                </p>
                <div className="flex items-start space-x-2">
                  <span className="font-mono font-bold text-orange-600">1.</span>
                  <span>Tap <strong>Share</strong> in Safari toolbar.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-mono font-bold text-orange-600">2.</span>
                  <span>Tap <strong>Add to Home Screen</strong>.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-mono font-bold text-orange-600">3.</span>
                  <span>Tap <strong>Add</strong> to launch offline anytime.</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="w-full py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>,
          document.body
        )}
      </>
    );
  }

  return null;
};
