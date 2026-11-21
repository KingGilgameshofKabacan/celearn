import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';
import { ThemeId } from '../types/theme';
import {
  CELE_MOTIVATIONAL_QUOTES,
  CeleMotivationalQuote,
  getDailyQuote
} from '../data/motivationalQuotes';
import { soundManager } from '../utils/audio';
import { FalloutThemeIcon } from './FalloutThemeIcons';

interface DailyMotivationalQuoteCardProps {
  themeId?: ThemeId;
  themeMode?: 'dark' | 'light';
  className?: string;
}

export const DailyMotivationalQuoteCard: React.FC<DailyMotivationalQuoteCardProps> = ({
  themeId = 'vault-tec',
  className = ''
}) => {
  const todayQuote = useMemo(() => getDailyQuote(), []);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(() => {
    const idx = CELE_MOTIVATIONAL_QUOTES.findIndex(q => q.id === todayQuote.id);
    return idx >= 0 ? idx : 0;
  });
  const [copied, setCopied] = useState<boolean>(false);
  const copiedTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
    };
  }, []);

  const activeQuote: CeleMotivationalQuote =
    CELE_MOTIVATIONAL_QUOTES[currentQuoteIndex] || todayQuote;
  const isTodayQuote = activeQuote.id === todayQuote.id;

  const handleNextQuote = () => {
    soundManager.playClick();
    setCurrentQuoteIndex(prev => (prev + 1) % CELE_MOTIVATIONAL_QUOTES.length);
  };

  const handleResetToToday = () => {
    soundManager.playClick();
    const idx = CELE_MOTIVATIONAL_QUOTES.findIndex(q => q.id === todayQuote.id);
    setCurrentQuoteIndex(idx >= 0 ? idx : 0);
  };

  const handleCopy = async () => {
    const textToCopy = `“${activeQuote.quote}” — ${activeQuote.author}`;
    let ok = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
        ok = true;
      }
    } catch {
      ok = false;
    }

    if (!ok && typeof document !== 'undefined') {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        ok = document.execCommand('copy');
        document.body.removeChild(textarea);
      } catch {
        ok = false;
      }
    }

    if (ok) {
      soundManager.playCorrect();
      setCopied(true);
      if (copiedTimerRef.current) clearTimeout(copiedTimerRef.current);
      copiedTimerRef.current = setTimeout(() => setCopied(false), 2000);
    }
  };

  // Fallout Shelter room-tailored typography and visual accents
  const themeStyles = useMemo(() => {
    switch (themeId) {
      case 'nuka-cola':
        return {
          badge: 'Nuka-Cola Bottling Dispatch',
          quoteClass:
            'font-sans text-base sm:text-lg font-bold tracking-tight text-stone-900 dark:text-rose-100 leading-relaxed',
          authorClass:
            'font-mono text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-cyan-300',
          containerBorder: 'border-stone-200 dark:border-[#5E2630]',
          iconBg: 'bg-rose-500/15 dark:bg-rose-500/20 text-rose-600 dark:text-rose-300',
          quoteMarkColor: 'text-rose-500/20 dark:text-cyan-400/20'
        };
      case 'power-armor':
        return {
          badge: 'Brotherhood T-60 Armory Codex',
          quoteClass:
            'font-mono text-base sm:text-lg font-semibold tracking-tight text-stone-900 dark:text-stone-100 leading-relaxed',
          authorClass:
            'font-mono text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-amber-400',
          containerBorder: 'border-stone-200 dark:border-[#364150]',
          iconBg: 'bg-orange-500/15 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400',
          quoteMarkColor: 'text-orange-500/20 dark:text-amber-400/20'
        };
      case 'radaway-medbay':
        return {
          badge: 'Vault Medbay Stimpak Log',
          quoteClass:
            'font-sans text-base sm:text-lg font-medium tracking-normal text-stone-900 dark:text-emerald-100 leading-relaxed',
          authorClass:
            'font-mono text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400',
          containerBorder: 'border-stone-200 dark:border-[#234E43]',
          iconBg: 'bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300',
          quoteMarkColor: 'text-emerald-500/20 dark:text-emerald-400/20'
        };
      case 'vault-tec':
      default:
        return {
          badge: 'Vault 101 Overseer Motivation',
          quoteClass:
            'font-mono text-base sm:text-lg font-bold tracking-tight text-stone-900 dark:text-amber-200 leading-relaxed',
          authorClass:
            'font-mono text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400',
          containerBorder: 'border-stone-200 dark:border-[#2B447A]',
          iconBg: 'bg-amber-500/15 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400',
          quoteMarkColor: 'text-amber-500/20 dark:text-amber-400/20'
        };
    }
  }, [themeId]);

  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-5 sm:p-6 shadow-xs border transition-all duration-200 bg-white dark:bg-[#0E1B38] ${themeStyles.containerBorder} ${className}`}
    >
      {/* Background Decorative Large Quotation Glyph */}
      <div
        className={`absolute -bottom-4 right-4 text-7xl sm:text-8xl select-none pointer-events-none font-serif leading-none opacity-20 ${themeStyles.quoteMarkColor}`}
        aria-hidden="true"
      >
        ”
      </div>

      <div className="relative z-10 flex flex-col justify-between gap-4">
        {/* Top Header Row: Badge, Date & Action Controls */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center space-x-2.5">
            <div className={`p-1.5 sm:p-2 rounded-xl shrink-0 ${themeStyles.iconBg}`}>
              <FalloutThemeIcon themeId={themeId} className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-2 flex-wrap text-xs">
              <span className="font-mono font-extrabold tracking-wider uppercase text-stone-700 dark:text-stone-200">
                {themeStyles.badge}
              </span>
              {isTodayQuote && (
                <>
                  <span className="text-stone-400 dark:text-stone-600" aria-hidden="true">·</span>
                  <span className="font-mono font-bold text-amber-600 dark:text-amber-400">
                    Daily Pick
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Action Buttons: Copy Quote & Next Quote */}
          <div className="flex items-center space-x-1.5 ml-auto">
            {!isTodayQuote && (
              <button
                type="button"
                onClick={handleResetToToday}
                title="Return to today's scheduled quote"
                className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition cursor-pointer"
              >
                Today
              </button>
            )}

            <button
              type="button"
              onClick={handleCopy}
              title="Copy quote to clipboard"
              className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-xs font-medium text-stone-600 dark:text-stone-300 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 transition flex items-center space-x-1 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="hidden sm:inline text-emerald-600 dark:text-emerald-400 font-bold">
                    Copied
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleNextQuote}
              title="Read next motivational quote"
              className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-xs font-medium text-stone-600 dark:text-stone-300 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 transition flex items-center space-x-1 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Next</span>
            </button>
          </div>
        </div>

        {/* Center: The Motivational Quote Text */}
        <div className="pl-1 sm:pl-2">
          <blockquote className="space-y-2">
            <p className={themeStyles.quoteClass}>“{activeQuote.quote}”</p>
            <footer className="flex items-center space-x-2 pt-1">
              <span className="text-stone-400 dark:text-stone-600 font-light">—</span>
              <cite className={`${themeStyles.authorClass} not-italic`}>{activeQuote.author}</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};
