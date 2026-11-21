import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Edit3, Volume2, VolumeX, Cpu, RefreshCw } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface FlipClockCountdownProps {
  targetExamDate: string;
  onEditDate?: () => void;
  className?: string;
}

type ClockMode = 'flip' | 'digital';

interface SingleUnitProps {
  value: string;
  label: string;
  mode: ClockMode;
  prevValue?: string;
}

/**
 * Individual Animated Flip Card Unit
 * Features a split mechanical plate with center groove slit and 3D folding animations
 */
const FlipCardUnit: React.FC<SingleUnitProps> = ({ value, label, mode, prevValue = value }) => {
  const [isFlipping, setIsFlipping] = useState(false);
  const [displayedValue, setDisplayedValue] = useState(value);
  const [backValue, setBackValue] = useState(value);
  const prevValRef = useRef(value);

  useEffect(() => {
    if (value !== prevValRef.current) {
      setBackValue(value);
      setIsFlipping(true);

      const timer = setTimeout(() => {
        setDisplayedValue(value);
        setIsFlipping(false);
        prevValRef.current = value;
      }, 450);

      return () => clearTimeout(timer);
    }
  }, [value]);

  if (mode === 'digital') {
    return (
      <div className="flex flex-col items-center">
        {/* Pip-Boy Phosphor Digital Tile */}
        <div className="relative group">
          <div className="w-14 sm:w-16 md:w-20 h-16 sm:h-18 md:h-22 rounded-2xl bg-black border border-emerald-500/50 shadow-[0_0_18px_rgba(34,197,94,0.22)] flex items-center justify-center overflow-hidden transition-all duration-200">
            {/* Pip-Boy CRT Scanline Grid */}
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_bottom,rgba(34,197,94,0.3)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

            {/* Glowing Accent Top Bar */}
            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-80" />

            {/* Glowing Pip-Boy Phosphor Numerals */}
            <span className="font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] tabular-nums tracking-wider relative z-10 select-none">
              {value}
            </span>

            {/* Subtle Horizon Reflection */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-500/10 to-transparent pointer-events-none" />
          </div>
        </div>

        <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-emerald-500 dark:text-emerald-400 mt-1.5 font-mono">
          {label}
        </span>
      </div>
    );
  }

  // Mechanical Split-Flap Clock Mode
  return (
    <div className="flex flex-col items-center">
      <div className="relative flip-perspective select-none">
        {/* Main Split-Flap Tile */}
        <div className="w-14 sm:w-16 md:w-20 h-16 sm:h-18 md:h-22 relative rounded-xl bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 border border-stone-800 shadow-[0_6px_16px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col justify-between">
          
          {/* Static Upper Half */}
          <div className="w-full h-1/2 bg-gradient-to-b from-stone-800/90 to-stone-900/95 flex items-end justify-center overflow-hidden border-b border-black/60 relative">
            <span className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-stone-100 tabular-nums tracking-tight translate-y-[50%]">
              {isFlipping ? backValue : displayedValue}
            </span>
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
          </div>

          {/* Static Lower Half */}
          <div className="w-full h-1/2 bg-gradient-to-b from-stone-900 to-stone-950 flex items-start justify-center overflow-hidden relative">
            <span className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-stone-200 tabular-nums tracking-tight -translate-y-[50%]">
              {displayedValue}
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>

          {/* Animated Falling Upper Flap */}
          {isFlipping && (
            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-stone-800 to-stone-900 flex items-end justify-center overflow-hidden border-b border-black/80 flip-card-top-half animate-flip-top z-20">
              <span className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-stone-200 tabular-nums tracking-tight translate-y-[50%]">
                {displayedValue}
              </span>
            </div>
          )}

          {/* Animated Unfolding Lower Flap */}
          {isFlipping && (
            <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-b from-stone-900 to-stone-950 flex items-start justify-center overflow-hidden flip-card-bottom-half animate-flip-bottom z-30 shadow-lg">
              <span className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-stone-100 tabular-nums tracking-tight -translate-y-[50%]">
                {backValue}
              </span>
            </div>
          )}

          {/* Horizontal Split Hinge Line */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-black/80 z-40 pointer-events-none" />

          {/* Left Mechanical Notch Rivet */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-2 rounded-r-sm bg-stone-700/80 border-y border-r border-stone-600/50 z-40" />

          {/* Right Mechanical Notch Rivet */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-2 rounded-l-sm bg-stone-700/80 border-y border-l border-stone-600/50 z-40" />
        </div>
      </div>

      <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-stone-600 dark:text-stone-400 mt-1.5 font-mono">
        {label}
      </span>
    </div>
  );
};

export const FlipClockCountdown: React.FC<FlipClockCountdownProps> = ({
  targetExamDate,
  onEditDate,
  className = ''
}) => {
  const [clockMode, setClockMode] = useState<ClockMode>('flip');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  // Time state: Days, Hours, Minutes, Seconds
  const [time, setTime] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  // Ticking audio ref (optional subtle click)
  useEffect(() => {
    const parseTargetTime = (dateStr: string): number => {
      const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr.trim());
      if (match) {
        const y = parseInt(match[1], 10);
        const m = parseInt(match[2], 10) - 1;
        const d = parseInt(match[3], 10);
        const localTime = new Date(y, m, d, 0, 0, 0, 0).getTime();
        if (!Number.isNaN(localTime)) return localTime;
      }
      const parsed = new Date(dateStr).getTime();
      return Number.isNaN(parsed) ? Date.now() : parsed;
    };

    const calculateTime = () => {
      const targetTime = parseTargetTime(targetExamDate);
      const now = Date.now();
      const diffMs = Math.max(0, targetTime - now);

      const totalSec = Math.floor(diffMs / 1000);

      const d = Math.floor(totalSec / (3600 * 24));
      const h = Math.floor((totalSec % (3600 * 24)) / 3600);
      const m = Math.floor((totalSec % 3600) / 60);
      const s = Math.floor(totalSec % 60);

      // Pad with leading zeros
      const padDays = d >= 100 ? String(d) : String(d).padStart(2, '0');
      const padHours = String(h).padStart(2, '0');
      const padMins = String(m).padStart(2, '0');
      const padSecs = String(s).padStart(2, '0');

      setTime({
        days: padDays,
        hours: padHours,
        minutes: padMins,
        seconds: padSecs
      });

      if (soundEnabled && totalSec > 0) {
        soundManager.playClick();
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetExamDate, soundEnabled]);

  const toggleMode = () => {
    soundManager.playClick();
    setClockMode(prev => prev === 'flip' ? 'digital' : 'flip');
  };

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
    soundManager.playClick();
  };

  // Format date readable (e.g. November 15, 2026)
  const formattedTargetDate = (() => {
    try {
      const [year, month, day] = targetExamDate.split('-');
      const d = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      return targetExamDate;
    }
  })();

  return (
    <div
      className={`relative bg-gradient-to-b from-stone-50 via-orange-50/30 to-amber-50/20 dark:from-stone-900/90 dark:via-stone-900 dark:to-stone-950 border border-orange-200/80 dark:border-stone-800 rounded-3xl p-5 sm:p-6 shadow-sm overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-stone-200/60 dark:border-stone-800">
        {/* Live Radar Pulse Indicator */}
        <div className="flex items-center space-x-2">
          <div className="relative flex items-center justify-center w-2.5 h-2.5">
            <span className="absolute w-full h-full rounded-full bg-amber-500 opacity-75 live-radar-ping" />
            <span className="relative w-2 h-2 rounded-full bg-amber-500" />
          </div>
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono">
            G.O.A.T. Exam Lockout Countdown
          </span>
        </div>

        {/* Quick Controls: Mode Switch & Sound Toggle */}
        <div className="flex items-center space-x-1.5">
          {/* Aesthetic Mode Toggle */}
          <button
            onClick={toggleMode}
            type="button"
            className="p-1.5 rounded-xl border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 transition text-[10px] font-bold flex items-center space-x-1"
            title={`Switch to ${clockMode === 'flip' ? 'Cyber Digital OLED' : 'Mechanical Flip Clock'}`}
            aria-label="Toggle clock aesthetic mode"
          >
            {clockMode === 'flip' ? (
              <>
                <Cpu className="w-3.5 h-3.5 text-orange-500" />
                <span className="hidden sm:inline">OLED</span>
              </>
            ) : (
              <>
                <RefreshCw className="w-3.5 h-3.5 text-orange-500" />
                <span className="hidden sm:inline">Flip</span>
              </>
            )}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            type="button"
            className={`p-1.5 rounded-xl border transition ${
              soundEnabled
                ? 'bg-orange-500/10 border-orange-500/40 text-orange-600 dark:text-orange-400'
                : 'border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400'
            }`}
            title={soundEnabled ? 'Mute ticking audio' : 'Enable mechanical ticking audio'}
            aria-label="Toggle countdown tick audio"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Clock Face: Days : Hours : Minutes : Seconds */}
      <div className="flex items-center justify-center space-x-1.5 sm:space-x-3 py-1">
        {/* DAYS */}
        <FlipCardUnit value={time.days} label="Days" mode={clockMode} />

        {/* Pulsing Colon Separator */}
        <div className="flex flex-col space-y-2 pb-4">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 digital-colon-dot" />
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 digital-colon-dot" />
        </div>

        {/* HOURS */}
        <FlipCardUnit value={time.hours} label="Hours" mode={clockMode} />

        {/* Pulsing Colon Separator */}
        <div className="flex flex-col space-y-2 pb-4">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 digital-colon-dot" />
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 digital-colon-dot" />
        </div>

        {/* MINUTES */}
        <FlipCardUnit value={time.minutes} label="Mins" mode={clockMode} />

        {/* Pulsing Colon Separator */}
        <div className="flex flex-col space-y-2 pb-4">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 digital-colon-dot" />
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 digital-colon-dot" />
        </div>

        {/* SECONDS (Live Ticking) */}
        <FlipCardUnit value={time.seconds} label="Secs" mode={clockMode} />
      </div>

      {/* Bottom Footer: Target Date Badge & Edit Link */}
      <div className="mt-4 pt-2.5 border-t border-stone-200/50 dark:border-stone-800/80 flex items-center justify-between text-xs text-stone-600 dark:text-stone-400">
        <div className="flex items-center space-x-1.5 truncate">
          <Calendar className="w-3.5 h-3.5 text-orange-500 shrink-0" />
          <span className="truncate">
            Target: <strong className="text-stone-800 dark:text-stone-200">{formattedTargetDate}</strong>
          </span>
        </div>

        {onEditDate && (
          <button
            onClick={onEditDate}
            className="text-[11px] font-bold text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 flex items-center space-x-1 shrink-0 ml-2 hover:underline cursor-pointer"
            title="Change target CELE board exam date"
          >
            <Edit3 className="w-3 h-3" />
            <span>Change</span>
          </button>
        )}
      </div>
    </div>
  );
};
