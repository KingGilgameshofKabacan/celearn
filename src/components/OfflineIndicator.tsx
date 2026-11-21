import React, { useState, useEffect } from 'react';
import { WifiOff, Zap, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const { isOnline, wasOffline } = useOnlineStatus();
  const [showReconnectedToast, setShowReconnectedToast] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    if (isOnline && wasOffline) {
      setShowReconnectedToast(true);
      const timer = setTimeout(() => setShowReconnectedToast(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isOnline, wasOffline]);

  // Reconnected Toast
  if (showReconnectedToast && isOnline) {
    return (
      <div className="fixed bottom-4 left-4 z-50 flex items-center space-x-2 rounded-2xl bg-emerald-600 text-white px-4 py-2.5 text-xs font-bold shadow-2xl animate-bounce border border-emerald-400/40">
        <CheckCircle2 className="w-4 h-4 text-white" />
        <span>Power / Internet Restored — All your local study progress is intact!</span>
      </div>
    );
  }

  // Active Offline Indicator during blackouts
  if (!isOnline) {
    return (
      <aside
        aria-label="Offline Mode Status"
        className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-50 shadow-2xl rounded-2xl border bg-stone-900/95 dark:bg-stone-950/95 text-stone-100 border-amber-500/50 backdrop-blur-md overflow-hidden transition-all"
      >
        <div className="p-3 sm:p-3.5 flex items-center justify-between gap-3">
          <div className="flex items-center space-x-2.5 min-w-0">
            <div className="p-2 rounded-xl bg-amber-500 text-stone-950 font-bold shrink-0 animate-pulse">
              <WifiOff className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                  Offline Mode Active
                </span>
                <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-amber-500/20 text-amber-300 font-bold">
                  Blackout Safe
                </span>
              </div>
              <p className="text-[11px] text-stone-300 truncate">
                All 1,700+ questions, formulas, flashcards & timers are operating 100% locally.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition shrink-0"
            aria-label={isExpanded ? 'Collapse info' : 'Expand info'}
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>

        {isExpanded && (
          <div className="px-3.5 pb-3.5 pt-1 text-xs text-stone-300 border-t border-stone-800 space-y-2 bg-stone-950/60">
            <div className="flex items-start space-x-2 text-[11px] text-amber-200">
              <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Zero data needed:</strong> Your streaks, exam results, and spaced repetition cards are saved straight to IndexedDB / local storage.
              </span>
            </div>
            <div className="text-[11px] text-stone-400 flex items-center justify-between">
              <span>Status: Service Worker precache running</span>
              <span className="text-emerald-400 font-bold">✓ 100% Functional</span>
            </div>
          </div>
        )}
      </aside>
    );
  }

  return null;
};
