import React, { useState, useEffect } from 'react';
import {
  UserProfile,
  UserStats,
  ExamSessionResult,
  CEQuestion,
  StreakData,
  DailyTasksStatus
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
  Sigma
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

interface HomeScreenProps {
  profile: UserProfile;
  onUpdateProfile: (updated: UserProfile) => void;
  stats: UserStats;
  totalQuestionsCount: number;
  onNavigateTab: (tab: 'exam' | 'flashcards' | 'formulas' | 'dictionary' | 'analytics' | 'achievements' | 'themes') => void;
  onStartQuickExam: (area: 'ALL' | 'PSAD' | 'HPGE' | 'MSTE') => void;
  onStartDueFlashcards?: () => void;
  onStartNewFlashcardsSetup?: () => void;
  dueCardsCount?: number;
  newCardsCount?: number;
  onOpenPdfScanner?: () => void;
  onOpenRecentlyAdded?: () => void;
  recentlyAddedCount?: number;
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
  recentlyAddedCount = 0
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

  // Countdown calculations
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number }>({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const target = new Date(profile.targetExamDate).getTime();
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 60000);
    return () => clearInterval(interval);
  }, [profile.targetExamDate]);

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
      
      {/* Target Board Countdown & Profile Hero */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          {/* Left: User & Target Rank */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 font-bold text-xs rounded-full border border-orange-200 dark:border-orange-900/40 uppercase tracking-wider">
                CELE Candidate
              </span>
              <button
                onClick={() => setIsEditingProfile(true)}
                className="text-xs text-stone-500 hover:text-orange-600 dark:text-stone-400 dark:hover:text-orange-400 flex items-center space-x-1"
                title="Edit candidate profile"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight">
              {profile.name}
            </h1>

            <div className="flex items-center space-x-2 text-stone-600 dark:text-stone-300 text-sm sm:text-base font-medium">
              <Trophy className="w-5 h-5 text-orange-600 dark:text-orange-500 shrink-0" />
              <span>Target Rank:</span>
              <span className="font-bold text-orange-600 dark:text-orange-400">{profile.targetRank}</span>
            </div>
          </div>

          {/* Right: Days Before CELE Countdown Card */}
          <div className="bg-orange-50/70 dark:bg-orange-950/40 border border-orange-200/80 dark:border-orange-900/50 rounded-2xl p-5 sm:p-6 text-center min-w-[280px]">
            <div className="text-xs font-bold text-orange-800 dark:text-orange-300 uppercase tracking-wider mb-2 flex items-center justify-center space-x-1.5">
              <Calendar className="w-4 h-4 text-orange-600" />
              <span>Days Before CELE</span>
            </div>

            <div className="flex items-baseline justify-center space-x-3">
              <div>
                <span className="text-4xl sm:text-5xl font-black text-stone-900 dark:text-stone-100 font-mono tabular-nums tracking-tight">
                  {timeLeft.days}
                </span>
                <span className="block text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase mt-0.5">
                  Days
                </span>
              </div>
              <span className="text-2xl text-stone-400 font-mono font-light">:</span>
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-200 font-mono tabular-nums">
                  {timeLeft.hours}
                </span>
                <span className="block text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase mt-0.5">
                  Hours
                </span>
              </div>
              <span className="text-2xl text-stone-400 font-mono font-light">:</span>
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-stone-800 dark:text-stone-200 font-mono tabular-nums">
                  {timeLeft.minutes}
                </span>
                <span className="block text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase mt-0.5">
                  Mins
                </span>
              </div>
            </div>

            <div className="mt-3 text-xs text-stone-500 dark:text-stone-400 border-t border-orange-200/50 dark:border-orange-900/40 pt-2">
              Exam Date: <strong className="text-stone-700 dark:text-stone-300">{profile.targetExamDate}</strong>
            </div>
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

      {/* Daily Streak Check-in Action Banner (Only appears when user has not checked in today; disappears after clicking, and will ONLY reappear after midnight) */}
      {!checkedInToday && (
        <div className="bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/5 dark:from-orange-950/40 dark:via-amber-950/30 dark:to-stone-900 border-2 border-orange-500/40 rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 transition-all">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-md">
              <Flame className="w-7 h-7 fill-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 bg-orange-500/20 text-orange-700 dark:text-orange-300 font-bold text-[10px] uppercase tracking-wider rounded-md">
                  Daily Review Streak
                </span>
                <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                  Check in everyday
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-stone-900 dark:text-stone-100 mt-0.5">
                {streakData.currentStreak === 0
                  ? 'Start Your CELE Study Streak Today!'
                  : `Keep your ${streakData.currentStreak}-day study streak alive!`}
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                Click here to check in for today. After you click, this check-in prompt will disappear and will only reappear after midnight.
              </p>
            </div>
          </div>

          <button
            onClick={handleStreakCheckIn}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 active:scale-95 text-white font-extrabold text-sm rounded-2xl shadow-md flex items-center justify-center space-x-2 transition shrink-0 cursor-pointer"
          >
            <Flame className="w-4 h-4 fill-white" />
            <span>Click to Check In (+1 Day)</span>
          </button>
        </div>
      )}

      {/* Overview Metric Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-5 rounded-2xl shadow-xs">
          <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase">
            Accuracy Rate
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-orange-600 dark:text-orange-500 font-mono tabular-nums mt-1">
            {stats.overallAccuracy}%
          </div>
          <div className="text-xs text-stone-500 dark:text-stone-400 mt-1 tabular-nums">
            {stats.totalCorrect} / {stats.totalQuestionsAnswered} correct
          </div>
        </div>

        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-5 rounded-2xl shadow-xs">
          <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase">
            Mock Exams
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-mono tabular-nums mt-1">
            {stats.totalExamsCompleted}
          </div>
          <div className="text-xs text-stone-500 dark:text-stone-400 mt-1">
            Completed tests
          </div>
        </div>

        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-5 rounded-2xl shadow-xs">
          <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase">
            Flashcards Mastered
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-mono tabular-nums mt-1">
            {stats.flashcardsMastered}
          </div>
          <div className="text-xs text-stone-500 dark:text-stone-400 mt-1 tabular-nums">
            of {totalQuestionsCount} items ({masteryPercentage}%)
          </div>
        </div>

        {/* Study Streak Card */}
        <div
          onClick={!checkedInToday ? handleStreakCheckIn : undefined}
          className={`bg-white dark:bg-stone-900 border p-5 rounded-2xl shadow-xs transition flex flex-col justify-between ${
            !checkedInToday
              ? 'border-orange-500/80 ring-2 ring-orange-500/20 cursor-pointer hover:border-orange-500 hover:shadow-md'
              : 'border-stone-200 dark:border-stone-800'
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase">
                Study Streak
              </span>
              {!checkedInToday ? (
                <span className="px-2 py-0.5 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full animate-pulse">
                  Check In
                </span>
              ) : (
                <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold rounded-full flex items-center space-x-0.5">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Checked In</span>
                </span>
              )}
            </div>

            <div className="text-2xl sm:text-3xl font-extrabold text-orange-600 dark:text-orange-500 font-mono tabular-nums mt-1 flex items-center space-x-1">
              <Flame className="w-6 h-6 fill-current text-orange-600 dark:text-orange-500" />
              <span>{streakData.currentStreak} Days</span>
            </div>
          </div>

          {!checkedInToday ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleStreakCheckIn();
              }}
              className="mt-2.5 w-full py-1.5 px-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 active:scale-95 text-white font-bold text-xs rounded-xl shadow-xs flex items-center justify-center space-x-1.5 transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Click to Check In</span>
            </button>
          ) : (
            <div className="text-[11px] text-stone-500 dark:text-stone-400 mt-2 flex items-center space-x-1">
              <span>Reappears after midnight</span>
              <span className="font-mono text-stone-400 dark:text-stone-500">({timeToMidnight.formatted})</span>
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
      {/* TASKS TODAY SECTION                                      */}
      {/* ======================================================== */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="p-2.5 rounded-2xl bg-orange-500/10 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 border border-orange-500/20">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2.5">
                <h2 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
                  Tasks Today
                </h2>
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
                  {todayFormatted}
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                Complete daily study objectives to maintain recall and steady exam momentum
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

      {/* Core Study Modules Hub */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
            Study Modes
          </h2>
          <span className="text-xs text-stone-500 dark:text-stone-400">
            Select a mode to continue reviewing
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          
          {/* Mock Exam Card */}
          <div
            onClick={() => onNavigateTab('exam')}
            className="group cursor-pointer bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-orange-500 dark:hover:border-orange-500 rounded-2xl p-6 transition shadow-xs hover:shadow-md flex flex-col justify-between interactive-card"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/70 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition">
                Mock Exam Simulator
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Customizable timed assessments with immediate or delayed feedback and score reports.
              </p>
            </div>

            <div className="pt-6 flex items-center text-xs font-bold text-orange-600 dark:text-orange-400">
              <span>Start Assessment</span>
              <ArrowRight className="w-4 h-4 ml-1 transition group-hover:translate-x-1" />
            </div>
          </div>

          {/* Flashcards Card */}
          <div
            onClick={() => onNavigateTab('flashcards')}
            className="group cursor-pointer bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-orange-500 dark:hover:border-orange-500 rounded-2xl p-6 transition shadow-xs hover:shadow-md flex flex-col justify-between interactive-card"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition">
                Flashcards
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Flip card deck & spaced repetition queue for all {totalQuestionsCount} questions.
              </p>
            </div>

            <div className="pt-6 flex items-center text-xs font-bold text-orange-600 dark:text-orange-400">
              <span>Open Flashcards</span>
              <ArrowRight className="w-4 h-4 ml-1 transition group-hover:translate-x-1" />
            </div>
          </div>

          {/* Formulas Card */}
          <div
            onClick={() => onNavigateTab('formulas')}
            className="group cursor-pointer bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-orange-500 dark:hover:border-orange-500 rounded-2xl p-6 transition shadow-xs hover:shadow-md flex flex-col justify-between interactive-card"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/70 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold">
                <Sigma className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition">
                Formulas Suite
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Civil Engineering formulas, calculator shortcuts, and flip / repetition review modes.
              </p>
            </div>

            <div className="pt-6 flex items-center text-xs font-bold text-orange-600 dark:text-orange-400">
              <span>Explore Formulas</span>
              <ArrowRight className="w-4 h-4 ml-1 transition group-hover:translate-x-1" />
            </div>
          </div>

          {/* Terminology Explorer Card */}
          <div
            onClick={() => onNavigateTab('dictionary')}
            className="group cursor-pointer bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-orange-500 dark:hover:border-orange-500 rounded-2xl p-6 transition shadow-xs hover:shadow-md flex flex-col justify-between interactive-card"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 flex items-center justify-center font-bold">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition">
                Terminology
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Searchable dictionary of civil engineering terms, formulas, and code references.
              </p>
            </div>

            <div className="pt-6 flex items-center text-xs font-bold text-orange-600 dark:text-orange-400">
              <span>Explore Dictionary</span>
              <ArrowRight className="w-4 h-4 ml-1 transition group-hover:translate-x-1" />
            </div>
          </div>

          {/* Scan PDF Reviewer Card */}
          <div
            onClick={onOpenPdfScanner || (() => onNavigateTab('dictionary'))}
            className="group cursor-pointer bg-gradient-to-br from-orange-500/10 to-amber-500/10 dark:from-orange-950/40 dark:to-amber-950/30 border border-orange-500/30 hover:border-orange-500 rounded-2xl p-6 transition shadow-xs hover:shadow-md flex flex-col justify-between interactive-card"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold shadow-xs">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition">
                  Scan Reviewer
                </h3>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Import terms and definitions from PDF or TXT directly into your study bank.
              </p>
            </div>

            <div className="pt-6 flex items-center text-xs font-bold text-orange-600 dark:text-orange-400">
              <span>Scan Reviewer</span>
              <ArrowRight className="w-4 h-4 ml-1 transition group-hover:translate-x-1" />
            </div>
          </div>

        </div>
      </div>

      {/* Quick Launch by Subject Area */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
            Quick Practice by Area
          </h3>
          <span className="text-xs text-stone-500 dark:text-stone-400">
            20-question speed drills
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={() => onStartQuickExam('PSAD')}
            className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-orange-500 dark:hover:border-orange-500 bg-stone-50/60 dark:bg-stone-800/50 hover:bg-white dark:hover:bg-stone-800 text-left transition flex items-center justify-between"
          >
            <div>
              <span className="font-bold text-sm text-stone-900 dark:text-stone-100 block">
                PSAD Drill
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400">
                Structures & Materials
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-orange-600 dark:text-orange-400" />
          </button>

          <button
            onClick={() => onStartQuickExam('HPGE')}
            className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-orange-500 dark:hover:border-orange-500 bg-stone-50/60 dark:bg-stone-800/50 hover:bg-white dark:hover:bg-stone-800 text-left transition flex items-center justify-between"
          >
            <div>
              <span className="font-bold text-sm text-stone-900 dark:text-stone-100 block">
                HPGE Drill
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400">
                Hydraulics & Geotechnical
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-orange-600 dark:text-orange-400" />
          </button>

          <button
            onClick={() => onStartQuickExam('MSTE')}
            className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-orange-500 dark:hover:border-orange-500 bg-stone-50/60 dark:bg-stone-800/50 hover:bg-white dark:hover:bg-stone-800 text-left transition flex items-center justify-between"
          >
            <div>
              <span className="font-bold text-sm text-stone-900 dark:text-stone-100 block">
                MSTE Drill
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400">
                Math, Surveying & Transpo
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-orange-600 dark:text-orange-400" />
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
