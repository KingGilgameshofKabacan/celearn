import React, { useState, useEffect } from 'react';
import {
  UserProfile,
  UserStats,
  ExamSessionResult,
  CEQuestion,
  StreakData,
  DailyTasksStatus,
  ActiveExamSession
} from '../types';
import {
  Calendar,
  Trophy,
  Flame,
  Target,
  ArrowRight,
  BookOpen,
  Sparkles,
  Search,
  CheckCircle2,
  Clock,
  Edit3,
  Check,
  Zap,
  BarChart2,
  FileText,
  CheckSquare,
  RotateCcw,
  Brain,
  Layers,
  ChevronRight,
  Play
} from 'lucide-react';
import {
  getStreakData,
  hasCheckedInToday,
  performDailyCheckIn,
  getTimeUntilMidnight,
  getDailyTasks,
  getTodayDateString
} from '../utils/storage';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';
import { ThemeId } from '../types/theme';
import { DailyMotivationalQuoteCard } from './DailyMotivationalQuoteCard';
import { BottleCapIcon } from './BottleCapIcon';
import { PWAInstallButton } from './PWAInstallButton';
import { FlipClockCountdown } from './FlipClockCountdown';

interface HomeScreenProps {
  profile: UserProfile;
  onUpdateProfile: (updated: UserProfile) => void;
  stats: UserStats;
  totalQuestionsCount: number;
  onNavigateTab: (tab: 'exam' | 'flashcards' | 'dictionary' | 'analytics' | 'achievements' | 'themes') => void;
  onStartQuickExam: (area: 'ALL' | 'PSAD' | 'HPGE' | 'MSTE') => void;
  onStartDueFlashcards?: () => void;
  onStartNewFlashcardsSetup?: () => void;
  dueCardsCount?: number;
  newCardsCount?: number;
  onOpenPdfScanner?: () => void;
  onOpenRecentlyAdded?: () => void;
  recentlyAddedCount?: number;
  themeId?: ThemeId;
  themeMode?: 'dark' | 'light';
  interruptedSession?: ActiveExamSession | null;
  onResumeExamSession?: () => void;
  onDiscardExamSession?: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  profile,
  onUpdateProfile,
  stats,
  totalQuestionsCount,
  onNavigateTab,
  onStartQuickExam,
  onStartDueFlashcards,
  onStartNewFlashcardsSetup,
  dueCardsCount = 0,
  newCardsCount = 0,
  onOpenPdfScanner,
  onOpenRecentlyAdded,
  recentlyAddedCount = 0,
  themeId,
  themeMode,
  interruptedSession,
  onResumeExamSession,
  onDiscardExamSession
}) => {
  const [isEditingProfile, setIsEditingProfile] = useState<boolean>(false);
  const [editName, setEditName] = useState<string>(profile.name);
  const [editRank, setEditRank] = useState<string>(profile.targetRank);
  const [editDate, setEditDate] = useState<string>(profile.targetExamDate);

  // Daily Tasks State & Sync
  const [dailyTasks, setDailyTasks] = useState<DailyTasksStatus>(getDailyTasks);

  useEffect(() => {
    const handleDailyTasksUpdated = () => {
      setDailyTasks(getDailyTasks());
    };
    window.addEventListener('cele_daily_tasks_updated', handleDailyTasksUpdated);
    return () => {
      window.removeEventListener('cele_daily_tasks_updated', handleDailyTasksUpdated);
    };
  }, []);

  const completedTasksCount = (dailyTasks.reviewedFlashcards ? 1 : 0) +
                              (dailyTasks.learnedNew ? 1 : 0) +
                              (dailyTasks.tookMockExam ? 1 : 0);

  const todayFormatted = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date());

  // Daily Streak State & Midnight Synchronization
  const [streakData, setStreakData] = useState<StreakData>(getStreakData);
  const [checkedInToday, setCheckedInToday] = useState<boolean>(hasCheckedInToday);
  const [timeToMidnight, setTimeToMidnight] = useState(getTimeUntilMidnight);
  const [streakCelebration, setStreakCelebration] = useState<{ streakDays: number } | null>(null);

  useEffect(() => {
    const updateStreakStatus = () => {
      setStreakData(getStreakData());
      setCheckedInToday(hasCheckedInToday());
      setTimeToMidnight(getTimeUntilMidnight());
    };

    updateStreakStatus();
    // Check periodically so the moment midnight strikes, check-in button automatically reappears
    const interval = setInterval(updateStreakStatus, 10000);

    const handleStreakEvent = () => {
      updateStreakStatus();
    };
    window.addEventListener('cele_streak_updated', handleStreakEvent);

    return () => {
      clearInterval(interval);
      window.removeEventListener('cele_streak_updated', handleStreakEvent);
    };
  }, []);

  const handleStreakCheckIn = () => {
    const result = performDailyCheckIn();
    setStreakData(result.streak);
    setCheckedInToday(true);

    if (result.isNewCheckIn) {
      soundManager.playStreak(result.streak.currentStreak);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      setStreakCelebration({ streakDays: result.streak.currentStreak });
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile({
      name: editName.trim() || 'Examinee',
      targetRank: editRank.trim() || 'Top 1',
      targetExamDate: editDate || '2026-11-15'
    });
    setIsEditingProfile(false);
  };

  const masteryPercentage = Math.round((stats.flashcardsMastered / totalQuestionsCount) * 100);

  return (
    <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
      
      {/* Target Board Countdown & Profile Hero (Vault-Tec Overseer Console) */}
      <div className="bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden transition-colors">
        {/* Vault Hazard Chevrons Accent Bar */}
        <div className="h-2.5 w-[calc(100%+3rem)] sm:w-[calc(100%+5rem)] vault-tec-hazard-stripe -mt-6 -mx-6 sm:-mt-10 sm:-mx-10 mb-6" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          {/* Left: User & Target Rank */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 bg-amber-500/15 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 font-extrabold text-xs rounded-full border border-amber-500/30 uppercase tracking-wider flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>Vault 101 Overseer Directive</span>
              </span>
              <button
                onClick={() => setIsEditingProfile(true)}
                className="text-xs text-stone-500 hover:text-amber-600 dark:text-sky-300 dark:hover:text-amber-400 flex items-center space-x-1 transition"
                title="Edit Dweller & Overseer credentials"
              >
                <Edit3 className="w-3.5 h-3.5 text-amber-500" />
                <span>Edit Dweller</span>
              </button>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-amber-400 tracking-tight font-mono">
              {profile.name}
            </h1>

            <div className="flex items-center space-x-2 text-stone-600 dark:text-stone-300 text-sm sm:text-base font-medium">
              <Trophy className="w-5 h-5 text-amber-500 shrink-0" />
              <span>Target Standing:</span>
              <span className="font-extrabold text-amber-600 dark:text-amber-300 font-mono">{profile.targetRank}</span>
            </div>
          </div>

          {/* Right: Live Mechanical Split-Flap & Pip-Boy Digital Countdown Clock */}
          <div className="w-full md:w-auto shrink-0 flex justify-center md:justify-end">
            <FlipClockCountdown
              targetExamDate={profile.targetExamDate}
              onEditDate={() => setIsEditingProfile(true)}
              className="w-full max-w-sm sm:max-w-md md:max-w-none md:min-w-[340px] lg:min-w-[380px]"
            />
          </div>

        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditingProfile && (
        <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl max-w-md w-full p-6 shadow-2xl text-stone-900 dark:text-stone-100">
            <h3 className="text-lg font-bold mb-4">Edit Candidate Profile</h3>
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-600 dark:text-stone-400 uppercase mb-1">
                  Candidate Name
                </label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="e.g. Engr. Dave"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-600 dark:text-stone-400 uppercase mb-1">
                  Target Board Standing
                </label>
                <input
                  type="text"
                  value={editRank}
                  onChange={(e) => setEditRank(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="e.g. Top 1, Top 10, Licensed Engineer"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-600 dark:text-stone-400 uppercase mb-1">
                  Target CELE Exam Date
                </label>
                <input
                  type="date"
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-orange-500 outline-none"
                  required
                />
              </div>

              <div className="flex space-x-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsEditingProfile(false)}
                  className="flex-1 py-2.5 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 font-bold text-sm rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm rounded-xl transition shadow-sm"
                >
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Resume Interrupted Exam Session Banner */}
      {interruptedSession && (
        <div className="bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-orange-500/5 dark:from-orange-950/50 dark:via-amber-950/40 dark:to-stone-900 border-2 border-orange-500/60 rounded-3xl p-5 sm:p-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all">
          <div className="flex items-start sm:items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
              <Play className="w-6 h-6 fill-white ml-0.5" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 bg-orange-500 text-white font-extrabold text-[10px] uppercase tracking-wider rounded-md">
                  Active Session
                </span>
                <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                  {interruptedSession.config.area === 'ALL' ? 'Full Mock Board' : `${interruptedSession.config.area} Drill`}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-stone-900 dark:text-stone-100">
                You have an unfinished assessment in progress!
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300">
                Left off at Item {interruptedSession.currentIndex + 1} of {interruptedSession.questions.length} · {Object.keys(interruptedSession.userAnswers).length} answered · {Math.floor(interruptedSession.secondsRemaining / 60)} mins remaining
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2.5 w-full md:w-auto shrink-0 justify-end">
            {onDiscardExamSession && (
              <button
                type="button"
                onClick={onDiscardExamSession}
                className="px-3 py-2 text-xs font-semibold text-stone-500 hover:text-rose-600 dark:text-stone-400 dark:hover:text-rose-400 transition cursor-pointer"
              >
                Discard
              </button>
            )}

            {onResumeExamSession && (
              <button
                type="button"
                onClick={onResumeExamSession}
                className="w-full md:w-auto px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 active:scale-95 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md flex items-center justify-center space-x-2 transition cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Resume Last Session</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* PWA Install & Blackout Readiness Banner */}
      <PWAInstallButton variant="banner" />

      {/* Daily Motivational Quote (Changes every day, styled according to the user's selected theme) */}
      <DailyMotivationalQuoteCard themeId={themeId} themeMode={themeMode} />

      {/* Vault Daily Ration Dispenser (Claim Caps & Morale) */}
      {!checkedInToday && (
        <div className="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-amber-500/5 dark:from-[#162852] dark:via-[#101F42] dark:to-[#080E1E] border-2 border-amber-500/50 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 transition-all">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center shrink-0 shadow-md">
              <BottleCapIcon className="w-7 h-7 text-stone-950 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 bg-amber-500/20 text-amber-700 dark:text-amber-300 font-extrabold text-[10px] uppercase tracking-wider rounded-md border border-amber-500/30">
                  Vault-Tec Ration Dispenser
                </span>
                <span className="text-xs text-stone-500 dark:text-sky-300 font-mono">
                  +50 Caps Allowance
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-stone-900 dark:text-amber-300 mt-0.5 font-mono">
                {streakData.currentStreak === 0
                  ? 'Initiate Your Vault Survival Log!'
                  : `Maintain Vault Morale: Day ${streakData.currentStreak} in the Wasteland`}
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300">
                Log your daily study presence to claim 50 Bottle Caps and sustain shelter morale. Resets automatically at 00:00 midnight.
              </p>
            </div>
          </div>

          <button
            onClick={handleStreakCheckIn}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 active:scale-95 text-stone-950 font-black text-sm rounded-2xl shadow-md flex items-center justify-center space-x-2 transition shrink-0 cursor-pointer font-mono"
          >
            <BottleCapIcon className="w-4 h-4 text-stone-950" />
            <span>Dispense Ration (+50 Caps)</span>
          </button>
        </div>
      )}

      {/* Overview Metric Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] p-5 rounded-2xl shadow-xs">
          <span className="text-xs font-bold text-stone-500 dark:text-sky-300 uppercase font-mono tracking-wider">
            G.O.A.T. Accuracy
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400 font-mono tabular-nums mt-1">
            {stats.overallAccuracy}%
          </div>
          <div className="text-xs text-stone-500 dark:text-stone-400 mt-1 tabular-nums font-mono">
            {stats.totalCorrect} / {stats.totalQuestionsAnswered} items verified
          </div>
        </div>

        <div className="bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] p-5 rounded-2xl shadow-xs">
          <span className="text-xs font-bold text-stone-500 dark:text-sky-300 uppercase font-mono tracking-wider">
            Simulations Logged
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-mono tabular-nums mt-1">
            {stats.totalExamsCompleted}
          </div>
          <div className="text-xs text-stone-500 dark:text-stone-400 mt-1 font-mono">
            Full mock board runs
          </div>
        </div>

        <div className="bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] p-5 rounded-2xl shadow-xs">
          <span className="text-xs font-bold text-stone-500 dark:text-sky-300 uppercase font-mono tracking-wider">
            S.P.E.C.I.A.L. Mastered
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-emerald-400 font-mono tabular-nums mt-1">
            {stats.flashcardsMastered}
          </div>
          <div className="text-xs text-stone-500 dark:text-stone-400 mt-1 tabular-nums font-mono">
            of {totalQuestionsCount} items ({masteryPercentage}%)
          </div>
        </div>

        {/* Vault Morale / Study Streak Card */}
        <div
          onClick={!checkedInToday ? handleStreakCheckIn : undefined}
          className={`bg-white dark:bg-[#0E1B38] border p-5 rounded-2xl shadow-xs transition flex flex-col justify-between ${
            !checkedInToday
              ? 'border-amber-500 ring-2 ring-amber-500/20 cursor-pointer hover:shadow-md'
              : 'border-stone-200 dark:border-[#2B447A]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-500 dark:text-sky-300 uppercase font-mono tracking-wider">
                Vault Morale
              </span>
              {!checkedInToday ? (
                <span className="px-2 py-0.5 bg-amber-500 text-stone-950 text-[10px] font-black uppercase tracking-wider rounded-full animate-pulse font-mono">
                  +50 Caps
                </span>
              ) : (
                <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold rounded-full flex items-center space-x-0.5">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Ration Claimed</span>
                </span>
              )}
            </div>

            <div className="text-2xl sm:text-3xl font-extrabold text-amber-600 dark:text-amber-400 font-mono tabular-nums mt-1 flex items-center space-x-1">
              <Flame className="w-6 h-6 fill-current text-amber-500" />
              <span>{streakData.currentStreak} Days</span>
            </div>
          </div>

          {!checkedInToday ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleStreakCheckIn();
              }}
              className="mt-2.5 w-full py-1.5 px-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 active:scale-95 text-stone-950 font-black text-xs rounded-xl shadow-xs flex items-center justify-center space-x-1.5 transition cursor-pointer font-mono"
            >
              <Sparkles className="w-3.5 h-3.5 text-stone-950" />
              <span>Claim +50 Caps</span>
            </button>
          ) : (
            <div className="text-[11px] text-stone-500 dark:text-stone-400 mt-2 flex items-center space-x-1 font-mono">
              <span>Next ration in:</span>
              <span className="text-amber-500 font-bold">({timeToMidnight.formatted})</span>
            </div>
          )}
        </div>
      </div>

      {/* Recently Added Terms Banner */}
      {recentlyAddedCount > 0 && onOpenRecentlyAdded && (
        <div className="bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/5 dark:from-orange-950/40 dark:via-amber-950/30 dark:to-stone-900 border border-orange-500/25 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-stone-900 dark:text-stone-100 shadow-xs">
          <div className="flex items-center space-x-3.5">
            <div className="p-2.5 rounded-xl bg-orange-500 text-white shadow-xs shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="text-sm sm:text-base font-bold">Recently Added Terms</h4>
                <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300 border border-orange-300 dark:border-orange-800">
                  {recentlyAddedCount} {recentlyAddedCount === 1 ? 'term' : 'terms'}
                </span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                Review, select to delete, or delete all recently added terms (built-in data bank is preserved).
              </p>
            </div>
          </div>
          <button
            onClick={onOpenRecentlyAdded}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-orange-600 hover:bg-orange-500 text-white transition flex items-center space-x-1.5 shadow-xs shrink-0 self-end sm:self-auto"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Manage Terms</span>
          </button>
        </div>
      )}

      {/* ======================================================== */}
      {/* S.P.E.C.I.A.L. CIVIL ENGINEERING ATTRIBUTES MATRIX       */}
      {/* ======================================================== */}
      <div className="bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] rounded-3xl p-6 sm:p-7 shadow-xs space-y-5 relative overflow-hidden">
        {/* Subtle scanline overlay */}
        <div className="absolute inset-0 vault-crt-overlay opacity-30 pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div className="flex items-center space-x-3.5">
            <div className="p-2.5 rounded-2xl bg-amber-500/15 dark:bg-amber-500/20 text-amber-500 border border-amber-500/30">
              <Zap className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <div className="flex items-center space-x-2.5">
                <h2 className="text-lg sm:text-xl font-black text-stone-900 dark:text-amber-400 font-mono tracking-tight">
                  S.P.E.C.I.A.L. Engineering Matrix
                </h2>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 uppercase">
                  Pip-Boy Telemetry
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-sky-300 mt-0.5">
                Board exam attribute calibration according to the official CE Licensure Table of Specifications
              </p>
            </div>
          </div>

          <div className="text-xs font-mono font-bold text-amber-500 dark:text-amber-300 self-start sm:self-auto bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/30">
            Vault 101 Clearance: LEVEL 1
          </div>
        </div>

        {/* 7 S.P.E.C.I.A.L. Attribute Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 relative z-10">
          {(() => {
            const getAreaAccuracy = (area: 'PSAD' | 'HPGE' | 'MSTE', fallback: number = 75) => {
              const stat = stats.areaStats?.[area];
              if (stat && stat.total > 0) {
                return Math.round((stat.correct / stat.total) * 100);
              }
              return stats.overallAccuracy > 0 ? stats.overallAccuracy : fallback;
            };

            return [
              {
                letter: 'S',
                name: 'Structures',
                domain: 'PSAD (Structural)',
                value: getAreaAccuracy('PSAD', 75),
                desc: 'Steel, Concrete & Timber'
              },
              {
                letter: 'P',
                name: 'Precision',
                domain: 'MSTE (Surveying)',
                value: getAreaAccuracy('MSTE', 70),
                desc: 'Leveling, Curves & Geodetics'
              },
              {
                letter: 'E',
                name: 'Endurance',
                domain: 'HPGE (Geotech)',
                value: getAreaAccuracy('HPGE', 78),
                desc: 'Soil Mechanics & Bearing'
              },
              {
                letter: 'C',
                name: 'Construction',
                domain: 'MSTE (Management)',
                value: getAreaAccuracy('MSTE', 80),
                desc: 'CPM/PERT & Ethics'
              },
              {
                letter: 'I',
                name: 'Intelligence',
                domain: 'MSTE (Math)',
                value: getAreaAccuracy('MSTE', 72),
                desc: 'Calculus, Physics & Stats'
              },
              {
                letter: 'A',
                name: 'Aquatics',
                domain: 'HPGE (Hydraulics)',
                value: getAreaAccuracy('HPGE', 74),
                desc: 'Fluid Dynamics & Weirs'
              },
              {
                letter: 'L',
                name: 'Licensure',
                domain: 'Board Probability',
                value: stats.overallAccuracy > 0 ? stats.overallAccuracy : 85,
                desc: 'Top 1 Aptitude Index'
              }
            ];
          })().map(attr => (
            <div
              key={attr.letter}
              className="bg-stone-50 dark:bg-[#162852]/80 border border-stone-200 dark:border-[#2B447A] rounded-2xl p-3 flex flex-col justify-between hover:border-amber-400 transition group"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-6 h-6 rounded-lg bg-amber-500 text-stone-950 font-black text-xs flex items-center justify-center font-mono shadow-xs">
                    {attr.letter}
                  </span>
                  <span className="text-xs font-mono font-extrabold text-emerald-400">
                    {attr.value}%
                  </span>
                </div>
                <div className="font-bold text-xs text-stone-900 dark:text-stone-100 group-hover:text-amber-400 transition truncate">
                  {attr.name}
                </div>
                <div className="text-[10px] text-stone-500 dark:text-sky-300/80 truncate font-mono">
                  {attr.domain}
                </div>
              </div>

              {/* Pip-Boy Phosphor Progress Bar */}
              <div className="mt-2.5">
                <div className="h-1.5 w-full bg-stone-200 dark:bg-stone-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, Math.max(10, attr.value))}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* VAULT MAINTENANCE QUOTAS SECTION                         */}
      {/* ======================================================== */}
      <div className="bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] rounded-3xl p-6 sm:p-7 shadow-xs space-y-5">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="p-2.5 rounded-2xl bg-amber-500/15 dark:bg-amber-500/20 text-amber-500 border border-amber-500/30">
              <CheckSquare className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <div className="flex items-center space-x-2.5">
                <h2 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-amber-400 font-mono tracking-tight">
                  Vault Maintenance Quotas
                </h2>
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-[#162852] text-stone-600 dark:text-sky-300 border border-stone-200 dark:border-[#2B447A]">
                  {todayFormatted}
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-300 mt-0.5">
                Complete daily maintenance directives to preserve radiation defense and exam conditioning
              </p>
            </div>
          </div>

          {/* Progress Pill */}
          <div className="flex items-center space-x-3 self-start sm:self-auto">
            <div className="text-right">
              <span className="text-xs font-bold text-stone-800 dark:text-stone-200 block">
                {completedTasksCount} of 3 Completed
              </span>
              <span className="text-[10px] text-stone-500 dark:text-stone-400">
                {completedTasksCount === 3 ? '🎉 All tasks done!' : 'Daily Target'}
              </span>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center font-mono font-extrabold text-sm border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200">
              {Math.round((completedTasksCount / 3) * 100)}%
            </div>
          </div>
        </div>

        {/* 3 Actionable Task Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Task 1: Review Flashcards */}
          <div
            onClick={() => {
              if (onStartDueFlashcards) onStartDueFlashcards();
              else onNavigateTab('flashcards');
            }}
            className={`p-5 rounded-2xl border transition flex flex-col justify-between cursor-pointer group ${
              dailyTasks.reviewedFlashcards
                ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/60 shadow-xs'
                : 'bg-stone-50/70 dark:bg-stone-800/50 border-stone-200 dark:border-stone-700/80 hover:border-orange-400 hover:shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-xl ${
                  dailyTasks.reviewedFlashcards
                    ? 'bg-emerald-500 text-white'
                    : 'bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400'
                }`}>
                  <RotateCcw className="w-4 h-4" />
                </div>

                {dailyTasks.reviewedFlashcards ? (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Done</span>
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold font-mono bg-orange-100 dark:bg-orange-950/70 text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-800">
                    {dueCardsCount > 0 ? `${dueCardsCount} Due` : '0 Due'}
                  </span>
                )}
              </div>

              <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition">
                Review Flashcards
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                Bypasses setup flow and immediately starts a session using only cards scheduled for review today or earlier.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-200/60 dark:border-stone-700/60 flex items-center justify-between text-xs font-bold text-orange-600 dark:text-orange-400">
              <span>{dailyTasks.reviewedFlashcards ? 'Review Again' : 'Start Due Review'}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </div>
          </div>

          {/* Task 2: Learn Something New */}
          <div
            onClick={() => {
              if (onStartNewFlashcardsSetup) onStartNewFlashcardsSetup();
              else onNavigateTab('flashcards');
            }}
            className={`p-5 rounded-2xl border transition flex flex-col justify-between cursor-pointer group ${
              dailyTasks.learnedNew
                ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/60 shadow-xs'
                : 'bg-stone-50/70 dark:bg-stone-800/50 border-stone-200 dark:border-stone-700/80 hover:border-amber-400 hover:shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-xl ${
                  dailyTasks.learnedNew
                    ? 'bg-emerald-500 text-white'
                    : 'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400'
                }`}>
                  <Sparkles className="w-4 h-4" />
                </div>

                {dailyTasks.learnedNew ? (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Done</span>
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold font-mono bg-amber-100 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                    {newCardsCount} Unstudied
                  </span>
                )}
              </div>

              <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition">
                Learn Something New
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                Opens the setup flow to pick a board topic and pull only fresh terms with zero review history.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-200/60 dark:border-stone-700/60 flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400">
              <span>{dailyTasks.learnedNew ? 'Learn More' : 'Pick Topic & Start'}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </div>
          </div>

          {/* Task 3: Take Mock Exams */}
          <div
            onClick={() => onNavigateTab('exam')}
            className={`p-5 rounded-2xl border transition flex flex-col justify-between cursor-pointer group ${
              dailyTasks.tookMockExam
                ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/60 shadow-xs'
                : 'bg-stone-50/70 dark:bg-stone-800/50 border-stone-200 dark:border-stone-700/80 hover:border-orange-400 hover:shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-xl ${
                  dailyTasks.tookMockExam
                    ? 'bg-emerald-500 text-white'
                    : 'bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400'
                }`}>
                  <Target className="w-4 h-4" />
                </div>

                {dailyTasks.tookMockExam ? (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Done</span>
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold font-mono bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300">
                    Timed TOS
                  </span>
                )}
              </div>

              <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition">
                Take Mock Exams
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                Complete a timed board assessment. Submitting and grading your exam logs your daily performance.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-200/60 dark:border-stone-700/60 flex items-center justify-between text-xs font-bold text-orange-600 dark:text-orange-400">
              <span>{dailyTasks.tookMockExam ? 'Take Another Exam' : 'Launch Simulator'}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </div>
          </div>

        </div>

      </div>

      {/* Core Study Modules Hub (Vault-Tec Training Hub) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-bold text-stone-900 dark:text-amber-400 font-mono tracking-tight">
              Vault-Tec Training Protocols
            </h2>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-500 dark:text-amber-300 font-extrabold border border-amber-500/30 uppercase">
              Operational
            </span>
          </div>
          <span className="text-xs text-stone-500 dark:text-sky-300 font-mono">
            Select directive to proceed
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Mock Exam Card */}
          <div
            onClick={() => onNavigateTab('exam')}
            className="group cursor-pointer bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] hover:border-amber-400 dark:hover:border-amber-400 rounded-2xl p-6 transition shadow-xs hover:shadow-md flex flex-col justify-between interactive-card"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 dark:bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold border border-amber-500/30">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-400 transition font-mono">
                G.O.A.T. Simulator
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Generalized Occupational Aptitude Test for Civil Engineers with timed PRC-TOS board calibrations.
              </p>
            </div>

            <div className="pt-6 flex items-center text-xs font-bold text-amber-600 dark:text-amber-400 font-mono">
              <span>Initiate G.O.A.T.</span>
              <ArrowRight className="w-4 h-4 ml-1 transition group-hover:translate-x-1" />
            </div>
          </div>

          {/* Flashcards Card */}
          <div
            onClick={() => onNavigateTab('flashcards')}
            className="group cursor-pointer bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] hover:border-amber-400 dark:hover:border-amber-400 rounded-2xl p-6 transition shadow-xs hover:shadow-md flex flex-col justify-between interactive-card"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold border border-emerald-500/30">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-400 transition font-mono">
                S.P.E.C.I.A.L. Deck
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Pip-Boy 3D card deck & spaced repetition queue for all {totalQuestionsCount} technical questions.
              </p>
            </div>

            <div className="pt-6 flex items-center text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
              <span>Engage Training Deck</span>
              <ArrowRight className="w-4 h-4 ml-1 transition group-hover:translate-x-1" />
            </div>
          </div>

          {/* Terminology Explorer Card */}
          <div
            onClick={() => onNavigateTab('dictionary')}
            className="group cursor-pointer bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] hover:border-amber-400 dark:hover:border-amber-400 rounded-2xl p-6 transition shadow-xs hover:shadow-md flex flex-col justify-between interactive-card"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 dark:bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold border border-blue-500/30">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-400 transition font-mono">
                Vault Glossary
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Classified technical archives of civil engineering principles, NSCP specs, and formula registries.
              </p>
            </div>

            <div className="pt-6 flex items-center text-xs font-bold text-sky-500 dark:text-sky-300 font-mono">
              <span>Access Archives</span>
              <ArrowRight className="w-4 h-4 ml-1 transition group-hover:translate-x-1" />
            </div>
          </div>

          {/* Scan PDF Reviewer Card */}
          <div
            onClick={onOpenPdfScanner || (() => onNavigateTab('dictionary'))}
            className="group cursor-pointer bg-gradient-to-br from-amber-500/10 to-yellow-500/10 dark:from-[#162852] dark:to-[#0E1B38] border border-amber-500/30 hover:border-amber-400 rounded-2xl p-6 transition shadow-xs hover:shadow-md flex flex-col justify-between interactive-card"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold shadow-xs">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-400 transition font-mono">
                  Scan Blueprints
                </h3>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Import technical documents, notes, and question sets directly into Vault local storage.
              </p>
            </div>

            <div className="pt-6 flex items-center text-xs font-bold text-amber-600 dark:text-amber-400 font-mono">
              <span>Import Blueprints</span>
              <ArrowRight className="w-4 h-4 ml-1 transition group-hover:translate-x-1" />
            </div>
          </div>

        </div>
      </div>

      {/* Quick Launch by Subject Area */}
      <div className="bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-stone-900 dark:text-amber-400 font-mono">
            Vault Area Integrity Drills
          </h3>
          <span className="text-xs text-stone-500 dark:text-sky-300 font-mono">
            20-question speed tests
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={() => onStartQuickExam('PSAD')}
            className="p-4 rounded-xl border border-stone-200 dark:border-[#2B447A] hover:border-amber-400 dark:hover:border-amber-400 bg-stone-50/60 dark:bg-[#162852]/60 hover:bg-white dark:hover:bg-[#162852] text-left transition flex items-center justify-between cursor-pointer"
          >
            <div>
              <span className="font-bold text-sm text-stone-900 dark:text-stone-100 block font-mono">
                PSAD Structural Drill
              </span>
              <span className="text-xs text-stone-500 dark:text-sky-300">
                Reinforced Concrete, Steel & Timber
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-amber-500" />
          </button>

          <button
            onClick={() => onStartQuickExam('HPGE')}
            className="p-4 rounded-xl border border-stone-200 dark:border-[#2B447A] hover:border-amber-400 dark:hover:border-amber-400 bg-stone-50/60 dark:bg-[#162852]/60 hover:bg-white dark:hover:bg-[#162852] text-left transition flex items-center justify-between cursor-pointer"
          >
            <div>
              <span className="font-bold text-sm text-stone-900 dark:text-stone-100 block font-mono">
                HPGE Conduits Drill
              </span>
              <span className="text-xs text-stone-500 dark:text-sky-300">
                Hydraulics, Pipes & Soil Mechanics
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-amber-500" />
          </button>

          <button
            onClick={() => onStartQuickExam('MSTE')}
            className="p-4 rounded-xl border border-stone-200 dark:border-[#2B447A] hover:border-amber-400 dark:hover:border-amber-400 bg-stone-50/60 dark:bg-[#162852]/60 hover:bg-white dark:hover:bg-[#162852] text-left transition flex items-center justify-between cursor-pointer"
          >
            <div>
              <span className="font-bold text-sm text-stone-900 dark:text-stone-100 block font-mono">
                MSTE Surveying Drill
              </span>
              <span className="text-xs text-stone-500 dark:text-sky-300">
                Mathematics, Surveying & Transpo
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-amber-500" />
          </button>
        </div>
      </div>

      {/* Streak Check-In Celebration Modal */}
      {streakCelebration && (
        <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 border border-orange-500/30 rounded-3xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-gradient-to-tr from-orange-500 to-amber-400 rounded-2xl mx-auto flex items-center justify-center shadow-lg text-white">
              <Flame className="w-9 h-9 fill-white" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                Daily Check-In Recorded!
              </span>
              <h3 className="text-2xl font-black text-stone-900 dark:text-stone-100 font-mono mt-1">
                {streakCelebration.streakDays} Day Streak 🔥
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-2">
                Great dedication, Engineer! Your streak has been updated. Next check-in will reappear right after midnight.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => setStreakCelebration(null)}
                className="w-full py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm rounded-xl transition shadow-xs cursor-pointer"
              >
                Continue Reviewing
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
