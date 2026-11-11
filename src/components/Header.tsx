import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Home,
  GraduationCap,
  Sparkles,
  Search,
  BarChart2,
  Award,
  Sun,
  Moon,
  Menu,
  X,
  Volume2,
  VolumeX,
  Flame,
  Clock,
  ChevronRight,
  Palette,
  Mail
} from 'lucide-react';
import { CeLearnLogo } from './CeLearnLogo';
import { BottleCapIcon } from './BottleCapIcon';
import { soundManager } from '../utils/audio';
import {
  getStreakData,
  hasCheckedInToday,
  performDailyCheckIn,
  getBottleCaps
} from '../utils/storage';
import confetti from 'canvas-confetti';
import { StreakData } from '../types';
import { PWAInstallButton } from './PWAInstallButton';

export type AppTab = 'home' | 'exam' | 'flashcards' | 'dictionary' | 'analytics' | 'achievements' | 'themes';

interface HeaderProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
  themeMode: 'dark' | 'light';
  setThemeMode: (mode: 'dark' | 'light') => void;
  masteredCount: number;
  totalCount: number;
  isExamInProgress: boolean;
  onOpenRecentlyAdded?: () => void;
  recentlyAddedCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  themeMode,
  setThemeMode,
  masteredCount,
  totalCount,
  isExamInProgress: _isExamInProgress,
  onOpenRecentlyAdded,
  recentlyAddedCount = 0
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(() => soundManager.isEnabled());
  const [streak, setStreak] = useState<StreakData>(getStreakData);
  const [checkedInToday, setCheckedInToday] = useState<boolean>(hasCheckedInToday);
  const [caps, setCaps] = useState<number>(getBottleCaps);

  useEffect(() => {
    const update = () => {
      setStreak(getStreakData());
      setCheckedInToday(hasCheckedInToday());
      setCaps(getBottleCaps());
    };
    update();
    const interval = setInterval(update, 10000);
    const handleEvent = () => update();
    window.addEventListener('cele_streak_updated', handleEvent);
    window.addEventListener('cele_caps_updated', handleEvent);
    return () => {
      clearInterval(interval);
      window.removeEventListener('cele_streak_updated', handleEvent);
      window.removeEventListener('cele_caps_updated', handleEvent);
    };
  }, []);

  // Close hamburger menu on Escape key
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const handleHeaderStreakClick = () => {
    if (!checkedInToday) {
      const result = performDailyCheckIn();
      setStreak(result.streak);
      setCheckedInToday(true);
      if (result.isNewCheckIn) {
        soundManager.playStreak(result.streak.currentStreak);
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.1 }
        });
      }
    }
  };

  const handleToggleSound = () => {
    const next = soundManager.toggle();
    setSoundEnabled(next);
  };

  // Full Site Catalog of Pages (Vault-Tec Overseer Edition)
  const navItems: { id: AppTab; label: string; desc: string; icon: React.ReactNode }[] = [
    {
      id: 'home',
      label: 'Overseer Deck',
      desc: 'Vault 101 Status, G.O.A.T. countdown & directives',
      icon: <Home className="w-4 h-4" />
    },
    {
      id: 'exam',
      label: 'G.O.A.T. Exam',
      desc: 'Generalized Occupational Aptitude Test for Civil Engineers',
      icon: <GraduationCap className="w-4 h-4" />
    },
    {
      id: 'flashcards',
      label: 'S.P.E.C.I.A.L. Deck',
      desc: 'Interactive 3D terms & spaced repetition memory',
      icon: <Sparkles className="w-4 h-4" />
    },
    {
      id: 'dictionary',
      label: 'Vault Glossary',
      desc: 'TOS board review syllabus & technical records',
      icon: <Search className="w-4 h-4" />
    },
    {
      id: 'analytics',
      label: 'Telemetry',
      desc: 'Syllabus readiness & board probability metrics',
      icon: <BarChart2 className="w-4 h-4" />
    },
    {
      id: 'achievements',
      label: 'Commendations',
      desc: 'Milestones & CELE topnotcher ranks',
      icon: <Award className="w-4 h-4" />
    },
    {
      id: 'themes',
      label: 'Terminal Skins',
      desc: 'Pip-Boy & Overseer personality styles',
      icon: <Palette className="w-4 h-4" />
    }
  ];

  const handleTabClick = (tab: AppTab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b transition-colors bg-white/95 dark:bg-[#0A1128]/95 backdrop-blur-md border-stone-200 dark:border-[#2A437E] text-stone-800 dark:text-stone-100 no-print pt-safe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        
        {/* Brand: Vault-Tec // CELEARN Overseer Terminal */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleTabClick('home')}
            className="flex items-center space-x-2.5 text-left focus:outline-none group interactive-btn"
          >
            <CeLearnLogo size={36} className="group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-black text-lg sm:text-xl tracking-tight text-stone-900 dark:text-amber-400 group-hover:text-amber-500 transition-colors">
                  VAULT-TEC
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-500 dark:text-amber-300 font-extrabold border border-amber-500/30">
                  101
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-wider uppercase text-blue-600 dark:text-sky-300 font-semibold -mt-1 hidden sm:block">
                CELE Overseer Terminal
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Quick Nav */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map(item => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center space-x-1.5 interactive-btn ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/40 shadow-xs'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-amber-300 hover:bg-stone-100 dark:hover:bg-[#162852]'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
          <a
            href="mailto:franicholas119@gmail.com"
            title="Contact Overseer Council"
            className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 flex items-center space-x-1.5 interactive-btn text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-[#162852]"
          >
            <Mail className="w-4 h-4 text-amber-500" />
            <span>Contact</span>
          </a>
        </nav>

        {/* Actions Zone: Bottle Caps, Daily Morale/Streak, Sound, Theme & Menu */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          
          {/* Bottle Caps Currency Counter */}
          <button
            onClick={() => {
              soundManager.playCapsJingle();
            }}
            title={`Vault Bottle Caps: ${caps.toLocaleString()} Caps earned from study quotas. Click to inspect.`}
            className="flex items-center space-x-1.5 text-xs font-mono px-2.5 py-1.5 rounded-xl border bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/40 text-amber-600 dark:text-amber-300 transition interactive-btn cursor-pointer shadow-xs"
            aria-label="Vault Bottle Caps"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M12 5v2M12 17v2M5 12h2M17 12h2M7 7l1.5 1.5M15.5 15.5l1.5 1.5M7 17l1.5-1.5M15.5 8.5l1.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.4" />
            </svg>
            <span className="font-extrabold tracking-tight">{caps.toLocaleString()}</span>
            <span className="text-[10px] uppercase font-bold text-amber-500/80 hidden sm:inline">Caps</span>
          </button>

          {/* PWA Install Button */}
          <PWAInstallButton variant="compact" />

          {/* Recently Added Terms Button */}
          {onOpenRecentlyAdded && (
            <button
              onClick={onOpenRecentlyAdded}
              title="Vault Blueprint Archives"
              className="hidden lg:flex items-center space-x-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-xl border bg-stone-100 hover:bg-stone-200 dark:bg-[#101F42] dark:hover:bg-[#182C5B] border-stone-200 dark:border-[#2A437E] text-stone-700 dark:text-stone-300 transition interactive-btn"
            >
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span className="hidden xl:inline">Blueprints</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 font-mono">
                {recentlyAddedCount}
              </span>
            </button>
          )}

          {/* Vault Morale / Daily Streak Indicator */}
          <button
            onClick={handleHeaderStreakClick}
            title={
              checkedInToday
                ? `Vault Morale: ${streak.currentStreak} Days Survived. Ration claimed today (Resets at 00:00).`
                : 'Claim Daily Ration & Boost Vault Morale (+50 Caps)!'
            }
            className={`flex items-center space-x-1.5 text-xs font-mono px-2.5 py-1.5 rounded-xl border transition interactive-btn ${
              !checkedInToday
                ? 'bg-amber-500/15 border-amber-500/50 text-amber-600 dark:text-amber-300 hover:bg-amber-500/25 shadow-xs animate-pulse cursor-pointer'
                : 'bg-stone-100 dark:bg-[#101F42] border-stone-200 dark:border-[#2A437E] text-stone-600 dark:text-stone-300'
            }`}
            aria-label="Daily Vault Morale Status"
          >
            <BottleCapIcon className="w-4 h-4 text-amber-500" />
            <span className="font-bold">{streak.currentStreak}d</span>
            {!checkedInToday ? (
              <span className="hidden sm:inline text-[9px] bg-amber-500 text-stone-950 px-1.5 py-0.5 rounded-md font-sans uppercase font-black tracking-wider">
                Claim +50c
              </span>
            ) : (
              <span className="text-emerald-500 text-[11px] font-bold" title="Ration claimed">✓</span>
            )}
          </button>

          {/* Day / Night Theme Switcher */}
          <button
            onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
            title={`Switch to ${themeMode === 'dark' ? 'Day (Light)' : 'Night (Dark)'} mode`}
            className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 transition interactive-btn flex items-center space-x-1.5 cursor-pointer"
            aria-label="Toggle theme mode"
          >
            {themeMode === 'dark' ? (
              <Sun className="w-4 h-4 text-orange-400" />
            ) : (
              <Moon className="w-4 h-4 text-stone-700" />
            )}
          </button>

          {/* Hamburger Icon Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 sm:p-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold transition interactive-btn flex items-center justify-center shadow-sm cursor-pointer"
            aria-label="Menu"
            title="Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Slide-over Hamburger Catalog Menu Drawer rendered in Portal to escape header containing block */}
      {isMenuOpen && typeof document !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999] overflow-hidden text-stone-900 dark:text-stone-100 font-sans" role="dialog" aria-modal="true">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm transition-opacity duration-200 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-out drawer panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-4 sm:pl-10">
            <div className="w-screen max-w-sm sm:max-w-md bg-white dark:bg-stone-900 border-l border-stone-200 dark:border-stone-800 shadow-2xl flex flex-col h-full z-10 overflow-hidden pt-safe pb-safe">
              
              {/* Drawer Header */}
              <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between shrink-0 bg-stone-50/90 dark:bg-stone-900/90">
                <div className="flex items-center space-x-3">
                  <CeLearnLogo size={34} />
                  <div>
                    <h3 className="text-base font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
                      Site Catalog
                    </h3>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400">
                      CELEARN Reviewer Navigation
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition cursor-pointer"
                  aria-label="Close catalog menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body: Fully scrollable catalog */}
              <div className="p-4 sm:p-5 space-y-6 flex-1 overflow-y-auto">
                
                {/* Section 1: Main Menu */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold text-stone-400 dark:text-stone-500 uppercase tracking-wider px-1">
                    <span>Main Menu</span>
                  </div>

                  <div className="space-y-2">
                    {navItems.map(item => {
                      const isActive = activeTab === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleTabClick(item.id)}
                          className={`w-full p-3.5 rounded-2xl text-left transition flex items-center justify-between group interactive-btn cursor-pointer ${
                            isActive
                              ? 'bg-orange-500/10 dark:bg-orange-950/60 border-2 border-orange-500 text-orange-900 dark:text-orange-200 shadow-sm'
                              : 'bg-stone-50 hover:bg-stone-100 dark:bg-stone-800/60 dark:hover:bg-stone-800 text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-stone-700/80 hover:border-stone-300 dark:hover:border-stone-600'
                          }`}
                        >
                          <div className="flex items-center space-x-3.5 min-w-0">
                            <div className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                              isActive
                                ? 'bg-orange-500 text-white shadow-xs'
                                : 'bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 group-hover:bg-orange-500 group-hover:text-white'
                            }`}>
                              {item.icon}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center space-x-2">
                                <span className="font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                                  {item.label}
                                </span>
                                {isActive && (
                                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-orange-500 text-white uppercase tracking-wider">
                                    Current
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-stone-600 dark:text-stone-400 truncate mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </div>

                          <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                            isActive ? 'text-orange-600 dark:text-orange-400' : 'text-stone-400 group-hover:translate-x-1 group-hover:text-orange-500'
                          }`} />
                        </button>
                      );
                    })}

                    {/* Contact Us: Redirects to Email */}
                    <a
                      href="mailto:franicholas119@gmail.com"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full p-3.5 rounded-2xl text-left transition flex items-center justify-between group interactive-btn cursor-pointer bg-stone-50 hover:bg-stone-100 dark:bg-stone-800/60 dark:hover:bg-stone-800 text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-stone-700/80 hover:border-orange-400 dark:hover:border-orange-500 shadow-xs"
                    >
                      <div className="flex items-center space-x-3.5 min-w-0">
                        <div className="p-2.5 rounded-xl shrink-0 transition-colors bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 group-hover:bg-orange-500 group-hover:text-white">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400">
                            Contact Us
                          </span>
                        </div>
                      </div>

                      <ChevronRight className="w-4 h-4 shrink-0 transition-transform text-stone-400 group-hover:translate-x-1 group-hover:text-orange-500" />
                    </a>
                  </div>
                </div>

                {/* Section 2: Quick Utilities */}
                <div className="space-y-2.5 pt-3 border-t border-stone-200 dark:border-stone-800">
                  <div className="text-xs font-bold text-stone-400 dark:text-stone-500 uppercase tracking-wider px-1 flex items-center justify-between">
                    <span>Quick Utilities</span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-bold">100% Offline Ready</span>
                  </div>

                  {/* Offline App Install Banner in Menu */}
                  <div className="pt-0.5 pb-1">
                    <PWAInstallButton variant="banner" />
                  </div>

                  {onOpenRecentlyAdded && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsMenuOpen(false);
                        onOpenRecentlyAdded();
                      }}
                      className="w-full p-3 rounded-xl bg-stone-50 dark:bg-stone-800/60 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs font-semibold text-stone-800 dark:text-stone-200 transition flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center space-x-2.5">
                        <Clock className="w-4 h-4 text-orange-500" />
                        <span className="font-bold">Recently Added Terms</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300 font-mono text-[10px] font-bold">
                        {recentlyAddedCount} items
                      </span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleTabClick('themes');
                    }}
                    className={`w-full p-3 rounded-xl border text-xs font-semibold transition flex items-center justify-between cursor-pointer ${
                      activeTab === 'themes'
                        ? 'bg-orange-500/10 dark:bg-orange-950/60 border-orange-500 text-orange-900 dark:text-orange-200'
                        : 'bg-stone-50 dark:bg-stone-800/60 hover:bg-stone-100 dark:hover:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5">
                      <Palette className="w-4 h-4 text-orange-500" />
                      <span className="font-bold">Personality Themes & Sounds</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300 font-mono text-[10px] font-bold">
                      6 Packs
                    </span>
                  </button>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-xs">
                    <span className="text-stone-700 dark:text-stone-300 font-medium">Sound Effects</span>
                    <button
                      type="button"
                      onClick={handleToggleSound}
                      className="px-3 py-1.5 rounded-lg font-bold bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-600 flex items-center space-x-1.5 cursor-pointer"
                    >
                      {soundEnabled ? (
                        <>
                          <Volume2 className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                          <span>ON</span>
                        </>
                      ) : (
                        <>
                          <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                          <span>OFF</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-xs">
                    <span className="text-stone-700 dark:text-stone-300 font-medium">Theme Mode</span>
                    <button
                      type="button"
                      onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
                      className="px-3 py-1.5 rounded-lg font-bold bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-600 flex items-center space-x-1.5 cursor-pointer"
                    >
                      {themeMode === 'dark' ? (
                        <>
                          <Sun className="w-3.5 h-3.5 text-orange-400" />
                          <span>Day Mode</span>
                        </>
                      ) : (
                        <>
                          <Moon className="w-3.5 h-3.5 text-stone-600" />
                          <span>Night Mode</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-stone-200 dark:border-stone-800 text-center shrink-0 bg-stone-50/90 dark:bg-stone-900/90 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                <span className="font-mono text-[11px]">
                  CELEARN V1.0 Reviewer
                </span>
                <span className="font-mono text-[11px] text-amber-600 dark:text-amber-400 font-bold flex items-center space-x-1">
                  <BottleCapIcon className="w-3.5 h-3.5 text-amber-500" />
                  <span>Vault Morale: {streak.currentStreak}d</span>
                </span>
              </div>

            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};
