import React, { useState, useMemo } from 'react';
import { Quote, Sparkles, Copy, Check, RefreshCw } from 'lucide-react';
import { ThemeId } from '../types/theme';
import {
  CELE_MOTIVATIONAL_QUOTES,
  CeleMotivationalQuote,
  getDailyQuote
} from '../data/motivationalQuotes';
import { soundManager } from '../utils/audio';

interface DailyMotivationalQuoteCardProps {
  themeId?: ThemeId;
  themeMode?: 'dark' | 'light';
  className?: string;
}

export const DailyMotivationalQuoteCard: React.FC<DailyMotivationalQuoteCardProps> = ({
  themeId = 'sunrise-momentum',
  themeMode = 'dark',
  className = ''
}) => {
  const todayQuote = useMemo(() => getDailyQuote(), []);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(() => {
    return CELE_MOTIVATIONAL_QUOTES.findIndex(q => q.id === todayQuote.id);
  });
  const [copied, setCopied] = useState<boolean>(false);

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

  const handleCopy = () => {
    const textToCopy = `“${activeQuote.quote}” — ${activeQuote.author}`;
    navigator.clipboard?.writeText(textToCopy);
    soundManager.playCorrect();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Theme-tailored typography and visual accents
  const themeStyles = useMemo(() => {
    switch (themeId) {
      case 'academic-classic':
        return {
          badge: 'CLASSICAL STUDY MAXIM',
          quoteClass: 'font-serif italic font-normal text-lg sm:text-xl leading-relaxed text-stone-900 dark:text-stone-100',
          authorClass: 'font-serif text-xs font-semibold tracking-wider uppercase text-amber-800 dark:text-amber-300',
          containerBorder: 'border-l-4 border-l-[#C59B27] dark:border-l-[#C59B27]',
          iconBg: 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400',
          quoteMarkColor: 'text-[#C59B27]/25 dark:text-[#C59B27]/30'
        };
      case 'zen-scholar':
        return {
          badge: 'DAILY CONTEMPLATION',
          quoteClass: 'font-serif italic font-normal text-lg sm:text-xl leading-relaxed text-stone-800 dark:text-stone-200',
          authorClass: 'font-sans text-xs font-medium tracking-wide text-emerald-800 dark:text-emerald-400',
          containerBorder: 'border-l-4 border-l-emerald-600 dark:border-l-emerald-500',
          iconBg: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300',
          quoteMarkColor: 'text-emerald-700/20 dark:text-emerald-400/25'
        };
      case 'cyber-engineer':
        return {
          badge: 'DAILY PROTOCOL // 0xCELE',
          quoteClass: 'font-mono text-base sm:text-lg font-medium tracking-tight text-cyan-950 dark:text-cyan-100 leading-relaxed',
          authorClass: 'font-mono text-xs font-semibold tracking-widest uppercase text-cyan-600 dark:text-cyan-400',
          containerBorder: 'border-l-4 border-l-cyan-500 dark:border-l-cyan-400',
          iconBg: 'bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400',
          quoteMarkColor: 'text-cyan-500/25 dark:text-cyan-400/30'
        };
      case 'midnight-strategist':
        return {
          badge: 'COMMAND DIRECTIVE',
          quoteClass: 'font-sans text-base sm:text-lg font-semibold tracking-tight text-stone-900 dark:text-stone-100 leading-snug',
          authorClass: 'font-mono text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400',
          containerBorder: 'border-l-4 border-l-sky-500 dark:border-l-sky-400',
          iconBg: 'bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400',
          quoteMarkColor: 'text-sky-500/25 dark:text-sky-400/30'
        };
      case 'deep-work':
        return {
          badge: 'FOCUS PRINCIPLE',
          quoteClass: 'font-mono text-sm sm:text-base font-medium tracking-normal text-zinc-900 dark:text-zinc-100 leading-relaxed',
          authorClass: 'font-mono text-xs uppercase tracking-widest text-zinc-600 dark:text-zinc-400 font-semibold',
          containerBorder: 'border-l-4 border-l-zinc-500 dark:border-l-zinc-400',
          iconBg: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300',
          quoteMarkColor: 'text-zinc-500/20 dark:text-zinc-400/20'
        };
      case 'sunrise-momentum':
      default:
        return {
          badge: 'DAILY CELE MOTIVATION',
          quoteClass: 'font-sans text-base sm:text-lg font-extrabold tracking-tight text-stone-900 dark:text-stone-100 leading-snug',
          authorClass: 'font-sans text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400',
          containerBorder: 'border-l-4 border-l-orange-500 dark:border-l-orange-400',
          iconBg: 'bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400',
          quoteMarkColor: 'text-orange-500/25 dark:text-orange-400/30'
        };
    }
  }, [themeId]);

  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-5 sm:p-6 shadow-xs border transition-all duration-200 bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 ${themeStyles.containerBorder} ${className}`}
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
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-2 flex-wrap">
              <span className="text-[10px] sm:text-xs font-extrabold tracking-wider uppercase text-stone-700 dark:text-stone-300">
                {themeStyles.badge}
              </span>
              {isTodayQuote && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-100 dark:bg-orange-950/70 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-900/50">
                  Today's Pick
                </span>
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
                  <span className="hidden sm:inline text-emerald-600 dark:text-emerald-400 font-bold">Copied</span>
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
            <p className={themeStyles.quoteClass}>
              “{activeQuote.quote}”
            </p>
            <footer className="flex items-center space-x-2 pt-1">
              <span className="text-stone-400 dark:text-stone-600 font-light">—</span>
              <cite className={`${themeStyles.authorClass} not-italic`}>
                {activeQuote.author}
              </cite>
            </footer>
          </blockquote>
        </div>

      </div>
    </div>
  );
};
