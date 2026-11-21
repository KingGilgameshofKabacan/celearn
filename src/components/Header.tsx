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
  Clock,
  ChevronRight,
  Palette,
  Mail,
  Sigma,
  ShieldCheck,
  LogIn,
  Cloud,
  RefreshCw,
  LogOut,
  Trophy
} from 'lucide-react';
import { CeLearnLogo } from './CeLearnLogo';
import { BottleCapIcon } from './BottleCapIcon';
import { soundManager } from '../utils/audio';
import { vaultJukebox, JukeboxState } from '../utils/jukeboxPlayer';
import { VaultJukeboxDrawerPlayer } from './VaultJukeboxDrawerPlayer';
import {
  getStreakData,
  hasCheckedInToday,
  performDailyCheckIn,
  getBottleCaps
} from '../utils/storage';
import confetti from 'canvas-confetti';
import { StreakData } from '../types';
import { PWAInstallButton } from './PWAInstallButton';
import { JsonBackupTile } from './JsonBackupTile';
import { useFirebaseAuth } from '../contexts/FirebaseAuthContext';

export type AppTab = 'home' | 'exam' | 'flashcards' | 'formulas' | 'dictionary' | 'rankings' | 'analytics' | 'achievements' | 'themes';

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
  const [jukeboxState, setJukeboxState] = useState<JukeboxState>(() => vaultJukebox.getState());
  const { user, syncStatus, openLoginModal, signInWithGoogle, signOutDweller, syncNow } = useFirebaseAuth();

  useEffect(() => {
    const handleJukebox = (e: Event) => {
      const custom = e as CustomEvent<JukeboxState>;
      if (custom.detail) setJukeboxState(custom.detail);
      else setJukeboxState(vaultJukebox.getState());
    };
    window.addEventListener('cele_jukebox_state', handleJukebox);
    return () => window.removeEventListener('cele_jukebox_state', handleJukebox);
  }, []);

  useEffect(() => {
    const update = () => {
      setStreak(getStreakData());
      setCheckedInToday(hasCheckedInToday());
      setCaps(getBottleCaps());
      setSoundEnabled(soundManager.isEnabled());
      setJukeboxState(vaultJukebox.getState());
    };
    update();
    const interval = setInterval(update, 10000);
    const handleEvent = () => update();
    window.addEventListener('cele_streak_updated', handleEvent);
    window.addEventListener('cele_caps_updated', handleEvent);
    window.addEventListener('cele_sound_updated', handleEvent);
    window.addEventListener('cele_backup_restored', handleEvent);
    return () => {
      clearInterval(interval);
      window.removeEventListener('cele_streak_updated', handleEvent);
      window.removeEventListener('cele_caps_updated', handleEvent);
      window.removeEventListener('cele_sound_updated', handleEvent);
      window.removeEventListener('cele_backup_restored', handleEvent);
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
      id: 'formulas',
      label: 'Formulas',
      desc: 'HPGE, PSAD & MSTE equations, cropped figures & Fallout flashcards',
      icon: <Sigma className="w-4 h-4" />
    },
    {
      id: 'dictionary',
      label: 'Vault Glossary',
      desc: 'TOS board review syllabus & technical records',
      icon: <Search className="w-4 h-4" />
    },
    {
      id: 'rankings',
      label: 'Rankings',
      desc: 'Dweller dashboard, Top 5 trophies & daily/weekly/monthly standings',
      icon: <Trophy className="w-4 h-4" />
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
    <header className="sticky top-0 z-40 border-b transition-colors bg-white/95 dark:bg-[#0A1128]/95 backdrop-blur-md border-stone-200 dark:border-[#2A437E] text-stone-800 dark:text-stone-100 no-print pt-safe pl-safe pr-safe">
      <div data-header-inner className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-3">
        
        {/* Brand: Vault-Tec // CELEARN Overseer Terminal */}
        <div className="flex items-center shrink-0">
          <button
            onClick={() => handleTabClick('home')}
            className="flex items-center space-x-2.5 text-left focus:outline-none group interactive-btn whitespace-nowrap shrink-0 cursor-pointer"
          >
            <CeLearnLogo size={34} className="group-hover:scale-105 transition-transform shrink-0" />
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-black text-base sm:text-lg tracking-tight text-stone-900 dark:text-amber-400 group-hover:text-amber-500 transition-colors whitespace-nowrap">
                  VAULT-TEC
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-600 dark:text-amber-300 font-extrabold border border-amber-500/30 whitespace-nowrap">
                  101
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-wider uppercase text-blue-600 dark:text-sky-300 font-semibold -mt-0.5 hidden xl:block whitespace-nowrap">
                CELE Overseer Terminal
              </span>
            </div>
          </button>
        </div>

        {/* Desktop & Tablet Landscape Quick Nav (Single-line clean layout without pushing actions offscreen) */}
        <nav className="hidden lg:flex items-center space-x-1 overflow-x-auto no-scrollbar min-w-0">
          {navItems.map(item => {
            const isActive = activeTab === item.id;
            const hideOnMediumLg =
              item.id === 'analytics' || item.id === 'achievements' || item.id === 'themes';
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`${hideOnMediumLg ? 'hidden xl:flex' : 'flex'} px-2.5 py-2 rounded-xl text-xs font-semibold transition-all duration-150 items-center space-x-1.5 interactive-btn whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/40 shadow-xs'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-amber-300 hover:bg-stone-100 dark:hover:bg-[#162852]'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Actions Zone: Bottle Caps, Daily Morale/Streak, Sound, Theme & Menu */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
          
          {/* Bottle Caps Currency Counter */}
          <button
            onClick={() => {
              soundManager.playCapsJingle();
            }}
            title={`Vault Bottle Caps: ${caps.toLocaleString()} Caps earned from study quotas.`}
            className="flex items-center space-x-1.5 text-xs font-mono px-2.5 py-1.5 rounded-xl border bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/40 text-amber-600 dark:text-amber-300 transition interactive-btn cursor-pointer shadow-xs whitespace-nowrap min-h-[38px]"
            aria-label="Vault Bottle Caps"
          >
            <BottleCapIcon className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="font-extrabold tracking-tight tabular-nums">{caps.toLocaleString()}</span>
            <span className="text-[10px] uppercase font-bold text-amber-500/80 hidden sm:inline">Caps</span>
          </button>

          {/* PWA Install Button */}
          <PWAInstallButton variant="compact" />

          {/* Vault Morale / Daily Streak Indicator */}
          <button
            onClick={handleHeaderStreakClick}
            title={
              checkedInToday
                ? `Vault Morale: ${streak.currentStreak} Days Survived. Ration claimed today (Resets at 00:00).`
                : 'Claim Daily Ration & Boost Vault Morale (+50 Caps)!'
            }
            className={`flex items-center space-x-1.5 text-xs font-mono px-2.5 py-1.5 rounded-xl border transition interactive-btn whitespace-nowrap min-h-[38px] ${
              !checkedInToday
                ? 'bg-amber-500/15 border-amber-500/50 text-amber-600 dark:text-amber-300 hover:bg-amber-500/25 shadow-xs cursor-pointer'
                : 'bg-stone-100 dark:bg-[#101F42] border-stone-200 dark:border-[#2A437E] text-stone-600 dark:text-stone-300'
            }`}
            aria-label="Daily Vault Morale Status"
          >
            <BottleCapIcon className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="font-bold tabular-nums">{streak.currentStreak}d</span>
            {!checkedInToday ? (
              <span className="hidden sm:inline text-[9px] bg-amber-500 text-stone-950 px-1.5 py-0.5 rounded-md font-sans uppercase font-black tracking-wider">
                +50c
              </span>
            ) : (
              <span className="text-emerald-500 text-[11px] font-bold" title="Ration claimed">✓</span>
            )}
          </button>

          {/* Day / Night Theme Switcher */}
          <button
            onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
            title={`Switch to ${themeMode === 'dark' ? 'Day (Light)' : 'Night (Dark)'} mode`}
            className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 transition interactive-btn flex items-center justify-center cursor-pointer min-h-[38px] min-w-[38px]"
            aria-label="Toggle theme mode"
          >
            {themeMode === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-stone-700" />
            )}
          </button>

          {/* Vault Cloud Dweller Login / Account Trigger */}
          <button
            type="button"
            onClick={openLoginModal}
            title={
              user
                ? `Vault Cloud Account: ${user.displayName || user.email}`
                : 'Sign in with Google for Vault Cloud Sync'
            }
            className={`flex items-center space-x-1.5 text-xs font-mono px-2.5 py-1.5 rounded-xl border transition interactive-btn cursor-pointer whitespace-nowrap min-h-[38px] ${
              user
                ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/25'
                : 'bg-amber-500/15 border-amber-500/40 text-amber-700 dark:text-amber-300 hover:bg-amber-500/25'
            }`}
            aria-label={user ? 'Vault Cloud Account' : 'Vault Login'}
          >
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || 'Dweller'}
                referrerPolicy="no-referrer"
                className="w-5 h-5 rounded-full object-cover border border-emerald-400 shrink-0"
              />
            ) : user ? (
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            ) : (
              <LogIn className="w-4 h-4 text-amber-500 shrink-0" />
            )}
            <span className="hidden sm:inline font-bold max-w-[90px] truncate">
              {user ? (user.displayName?.split(' ')[0] || 'Dweller') : 'Vault Login'}
            </span>
          </button>

          {/* Hamburger Icon Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 sm:p-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white active:scale-95 font-bold transition interactive-btn flex items-center justify-center shadow-sm cursor-pointer min-h-[40px] min-w-[40px]"
            aria-label="Open main menu and jukebox"
            title="Main Menu & Jukebox"
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
            <div className="w-screen max-w-sm sm:max-w-md bg-white dark:bg-stone-900 border-l border-stone-200 dark:border-stone-800 shadow-2xl flex flex-col h-full max-h-dvh z-10 overflow-hidden pt-safe pb-safe pr-safe">
              
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
              <div className="p-4 sm:p-5 space-y-6 flex-1 overflow-y-auto overscroll-contain">

                {/* Section -1: Vault-Tec Cloud Account & Security Clearance */}
                <div className="rounded-2xl border border-amber-500/40 bg-stone-50 dark:bg-[#080E1E] overflow-hidden shadow-xs">
                  <div className="h-1.5 w-full vault-tec-hazard-stripe-sm" />
                  <div className="p-3.5 space-y-2.5">
                    {user ? (
                      <>
                        <div className="flex items-center justify-between gap-2.5">
                          <div className="flex items-center space-x-2.5 min-w-0">
                            {user.photoURL ? (
                              <img
                                src={user.photoURL}
                                alt={user.displayName || 'Vault Dweller'}
                                referrerPolicy="no-referrer"
                                className="w-9 h-9 rounded-xl object-cover border border-emerald-400 shrink-0"
                              />
                            ) : (
                              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-500 shrink-0">
                                <ShieldCheck className="w-5 h-5" />
                              </div>
                            )}
                            <div className="min-w-0">
                              <p className="text-xs font-extrabold text-stone-900 dark:text-white truncate">
                                {user.displayName || 'Verified Dweller'}
                              </p>
                              <p className="text-[10px] font-mono text-stone-500 dark:text-sky-300 truncate">
                                {user.email}
                              </p>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              setIsMenuOpen(false);
                              openLoginModal();
                            }}
                            className="px-2 py-1 rounded-lg bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30 cursor-pointer shrink-0"
                          >
                            {syncStatus === 'syncing' ? 'Syncing' : 'Dossier'}
                          </button>
                        </div>

                        <div className="flex items-center gap-2 pt-0.5">
                          <button
                            type="button"
                            onClick={syncNow}
                            disabled={syncStatus === 'syncing'}
                            className="flex-1 py-1.5 px-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-[#080E1E] text-[11px] font-black flex items-center justify-center space-x-1.5 transition cursor-pointer"
                          >
                            <RefreshCw className={`w-3.5 h-3.5 ${syncStatus === 'syncing' ? 'animate-spin' : ''}`} />
                            <span>{syncStatus === 'syncing' ? 'Syncing...' : 'Sync Now'}</span>
                          </button>
                          <button
                            type="button"
                            onClick={signOutDweller}
                            className="py-1.5 px-3 rounded-xl bg-white dark:bg-[#162852] border border-stone-200 dark:border-[#2B447A] text-stone-700 dark:text-stone-200 text-[11px] font-bold flex items-center space-x-1 transition cursor-pointer"
                          >
                            <LogOut className="w-3.5 h-3.5" />
                            <span>Sign Out</span>
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex items-center space-x-1.5 text-amber-600 dark:text-amber-400">
                            <Cloud className="w-3.5 h-3.5 shrink-0" />
                            <span className="text-[11px] font-mono font-extrabold uppercase tracking-wider">
                              Vault Cloud Uplink
                            </span>
                          </div>
                          <p className="text-[11px] text-stone-600 dark:text-stone-300 mt-0.5 leading-snug">
                            Sync Bottle Caps, exams &amp; flashcards with Google.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setIsMenuOpen(false);
                            void signInWithGoogle();
                          }}
                          className="px-3 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#080E1E] text-xs font-black flex items-center space-x-1.5 transition shadow-xs cursor-pointer shrink-0"
                        >
                          <LogIn className="w-3.5 h-3.5" />
                          <span>Sign In</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Section 0: Vault-Tec Jukebox Player (Cassette & Vinyl Deck) */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider px-1">
                    <span>Vault Jukebox</span>
                    <span className="text-[10px] text-amber-500 font-mono font-bold">Cassette & Vinyl</span>
                  </div>
                  <VaultJukeboxDrawerPlayer />
                </div>

                {/* Section 1: Main Menu */}
                <div className="space-y-2.5 pt-2 border-t border-stone-200 dark:border-stone-800">
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
                          className={`w-full p-3 rounded-2xl text-left transition flex items-center justify-between group interactive-btn cursor-pointer ${
                            isActive
                              ? 'bg-orange-500/10 dark:bg-orange-950/60 border-2 border-orange-500 text-orange-900 dark:text-orange-200 shadow-sm'
                              : 'bg-stone-50 hover:bg-stone-100 dark:bg-stone-800/60 dark:hover:bg-stone-800 text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-stone-700/80 hover:border-stone-300 dark:hover:border-stone-600'
                          }`}
                        >
                          <div className="flex items-center space-x-3 min-w-0">
                            <div className={`p-2 rounded-xl shrink-0 transition-colors ${
                              isActive
                                ? 'bg-orange-500 text-white shadow-xs'
                                : 'bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 group-hover:bg-orange-500 group-hover:text-white'
                            }`}>
                              {item.icon}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center space-x-2">
                                <span className="font-bold text-sm text-stone-900 dark:text-stone-100">
                                  {item.label}
                                </span>
                                {isActive && (
                                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-orange-500 text-white uppercase tracking-wider">
                                    Active
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-stone-600 dark:text-stone-400 truncate mt-0.5">
                                {item.desc}
                              </p>
                            </div>
                          </div>

                          <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                            isActive ? 'text-orange-600 dark:text-orange-400' : 'text-stone-400 group-hover:translate-x-1'
                          }`} />
                        </button>
                      );
                    })}

                    {/* Contact Us: Redirects to Email */}
                    <a
                      href="mailto:franicholas119@gmail.com"
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full p-3 rounded-2xl text-left transition flex items-center justify-between group interactive-btn cursor-pointer bg-stone-50 hover:bg-stone-100 dark:bg-stone-800/60 dark:hover:bg-stone-800 text-stone-900 dark:text-stone-100 border border-stone-200 dark:border-stone-700/80 hover:border-orange-400 shadow-xs"
                    >
                      <div className="flex items-center space-x-3 min-w-0">
                        <div className="p-2 rounded-xl shrink-0 transition-colors bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="font-bold text-sm text-stone-900 dark:text-stone-100">
                            Contact Us
                          </span>
                        </div>
                      </div>

                      <ChevronRight className="w-4 h-4 shrink-0 transition-transform text-stone-400 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>

                {/* Section 2: Quick Utilities */}
                <div className="space-y-2.5 pt-3 border-t border-stone-200 dark:border-stone-800">
                  <div className="text-xs font-bold text-stone-400 dark:text-stone-500 uppercase tracking-wider px-1 flex items-center justify-between">
                    <span>Quick Utilities</span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-bold">100% Offline Ready</span>
                  </div>

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
                        <Clock className="w-4 h-4 text-amber-500" />
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
                      <Palette className="w-4 h-4 text-amber-500" />
                      <span className="font-bold">Skins, Companion & Audio</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300 font-mono text-[10px] font-bold">
                      4 Vault Packs
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

                  {/* Small JSON Backup Export / Import below Theme */}
                  <JsonBackupTile variant="compact" />
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
