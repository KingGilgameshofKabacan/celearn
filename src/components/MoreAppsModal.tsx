import React from 'react';
import { X, ExternalLink, Sparkles } from 'lucide-react';

/**
 * CELE Grind Tracker Icon:
 * Orange-Yellow Square with smooth edges and a black hardhat logo in the middle.
 */
export const CeleGrindTrackerIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className = ''
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
  >
    <defs>
      <linearGradient id="grindTrackerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="50%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    {/* Smooth-edged Orange-Yellow Square */}
    <rect width="64" height="64" rx="16" fill="url(#grindTrackerGrad)" />
    
    {/* Black Hardhat Construction Logo */}
    {/* Main Dome */}
    <path
      d="M17 33.5 C17 21 23 15 32 15 C41 15 47 21 47 33.5 C47 34.5 45.5 35.5 44 35.5 L20 35.5 C18.5 35.5 17 34.5 17 33.5 Z"
      fill="#111827"
    />
    {/* Raised Center Rib / Crest */}
    <path
      d="M30 15 C30 15 31.2 13.5 32 13.5 C32.8 13.5 34 15 34 15 L34 34.5 L30 34.5 Z"
      fill="#1F2937"
    />
    {/* Hardhat Visor Brim */}
    <path
      d="M12 34.5 C12 33.5 14 32.5 18 32.5 L46 32.5 C50 32.5 52 33.5 52 34.5 C53 36.5 51 38.5 48 38.5 L16 38.5 C13 38.5 11 36.5 12 34.5 Z"
      fill="#111827"
    />
    {/* Hardhat Underbrim Shadow */}
    <path
      d="M14 38.5 C18 41 46 41 50 38.5 L48 40.5 C44 43 20 43 16 40.5 Z"
      fill="#030712"
    />
  </svg>
);

/**
 * CELE Board Engine Icon:
 * Orange Square with smooth edges and a Greek symbol theta (θ) in the middle.
 */
export const CeleBoardEngineIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className = ''
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
  >
    <defs>
      <linearGradient id="boardEngineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    {/* Smooth-edged Orange Square */}
    <rect width="64" height="64" rx="16" fill="url(#boardEngineGrad)" />

    {/* Greek Symbol Theta (θ / Θ) in the middle */}
    <ellipse
      cx="32"
      cy="32"
      rx="14"
      ry="18.5"
      stroke="white"
      strokeWidth="4.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Central Horizontal Bar across Theta */}
    <line
      x1="18"
      y1="32"
      x2="46"
      y2="32"
      stroke="white"
      strokeWidth="4.5"
      strokeLinecap="round"
    />
  </svg>
);

export interface MoreAppItem {
  id: string;
  name: string;
  description: string;
  url: string;
  tag: string;
  icon: React.ReactNode;
}

export const MORE_CELE_APPS: MoreAppItem[] = [
  {
    id: 'grind-tracker',
    name: 'CELE Grind Tracker',
    description: 'Track daily study hours, pomodoro sprints, syllabus checklist progress, and exam countdowns.',
    url: 'https://cele-grind-tracker.ai.studio/',
    tag: 'Study & Time Tracking',
    icon: <CeleGrindTrackerIcon size={48} />
  },
  {
    id: 'board-engine',
    name: 'CELE Board Engine',
    description: 'Solve realistic CELE computational board problems, engineering design drills, and formulas.',
    url: 'https://cele-board-engine.ai.studio/',
    tag: 'Problem-Solving Engine',
    icon: <CeleBoardEngineIcon size={48} />
  }
];

interface MoreAppsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MoreAppsModal: React.FC<MoreAppsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl text-stone-900 dark:text-stone-100 my-6 space-y-5 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
          <div>
            <h3 className="text-xl font-extrabold tracking-tight">More Apps</h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              Civil Engineering Licensure Examination suite
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Apps List */}
        <div className="space-y-3.5">
          {MORE_CELE_APPS.map((app) => (
            <a
              key={app.id}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-800/40 hover:bg-white dark:hover:bg-stone-800 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-200 shadow-xs hover:shadow-md interactive-card"
            >
              <div className="flex items-start space-x-3.5">
                <div className="group-hover:scale-105 transition-transform">
                  {app.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors flex items-center gap-1.5">
                      <span>{app.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-orange-500 transition-colors shrink-0" />
                    </h4>
                    <span className="text-[10px] font-semibold text-stone-500 dark:text-stone-400 bg-stone-200/70 dark:bg-stone-700/60 px-2 py-0.5 rounded-md shrink-0 hidden sm:inline">
                      {app.tag}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
                    {app.description}
                  </p>
                  <div className="mt-2.5 flex items-center text-[11px] font-bold text-orange-600 dark:text-orange-400 font-mono">
                    <span>Open app</span>
                    <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-2 text-center">
          <p className="text-[11px] text-stone-400 dark:text-stone-500">
            All apps run seamlessly in Google AI Studio
          </p>
        </div>

      </div>
    </div>
  );
};
