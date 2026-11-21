import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Award, CheckCircle2, Sparkles, Target, Flame } from 'lucide-react';
import { StreakData, DailyTasksStatus, DailyActivityRecord } from '../types';
import {
  getStreakData,
  hasCheckedInToday,
  performDailyCheckIn,
  getDailyQuestionsAnswered,
  getDailyStudyGoal,
  saveDailyStudyGoal,
  getLast7DaysActivity,
  getDailyTasks,
  getTimeUntilMidnight,
  getLocalDateString,
  hasCelebratedGoalToday,
  markGoalCelebratedToday
} from '../utils/storage';
import { soundManager } from '../utils/audio';
import { BottleCapIcon } from './BottleCapIcon';
import { VaultApprovalSeal } from './FalloutThemeIcons';

interface StudyStreakCardProps {
  onStreakExtended?: (newStreakDays: number) => void;
}

const GOAL_PRESETS = [10, 15, 25];

export const StudyStreakCard: React.FC<StudyStreakCardProps> = ({ onStreakExtended }) => {
  const [streakData, setStreakData] = useState<StreakData>(getStreakData);
  const [checkedInToday, setCheckedInToday] = useState<boolean>(hasCheckedInToday);
  const [questionsToday, setQuestionsToday] = useState<number>(getDailyQuestionsAnswered);
  const [dailyGoal, setDailyGoal] = useState<number>(getDailyStudyGoal);
  const [dailyTasks, setDailyTasks] = useState<DailyTasksStatus>(getDailyTasks);
  const [weekActivity, setWeekActivity] = useState<DailyActivityRecord[]>(getLast7DaysActivity);
  const [timeToMidnight, setTimeToMidnight] = useState(getTimeUntilMidnight);
  const [isCelebrating, setIsCelebrating] = useState<boolean>(false);

  const celebrateTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const completedTasksCount =
    (dailyTasks.reviewedFlashcards ? 1 : 0) +
    (dailyTasks.learnedNew ? 1 : 0) +
    (dailyTasks.tookMockExam ? 1 : 0);

  const goalMet = questionsToday >= dailyGoal || completedTasksCount >= 3;
  const progressRatio = Math.min(100, Math.round((questionsToday / Math.max(1, dailyGoal)) * 100));

  const triggerFalloutCelebration = (withSound: boolean = true) => {
    setIsCelebrating(true);
    if (withSound) {
      soundManager.playGoalReached();
      setTimeout(() => soundManager.playCapsJingle(), 260);
    }
    try {
      confetti({
        particleCount: 65,
        spread: 75,
        origin: { y: 0.55 },
        colors: ['#FBC02D', '#22C55E', '#38BDF8', '#FB923C']
      });
    } catch {}

    if (celebrateTimerRef.current) clearTimeout(celebrateTimerRef.current);
    celebrateTimerRef.current = setTimeout(() => {
      setIsCelebrating(false);
    }, 6500);
  };

  useEffect(() => {
    const syncAll = () => {
      setStreakData(getStreakData());
      setCheckedInToday(hasCheckedInToday());
      setQuestionsToday(getDailyQuestionsAnswered());
      setDailyGoal(getDailyStudyGoal());
      setDailyTasks(getDailyTasks());
      setWeekActivity(getLast7DaysActivity());
      setTimeToMidnight(getTimeUntilMidnight());
    };

    syncAll();
    const interval = setInterval(syncAll, 10000);
    window.addEventListener('cele_streak_updated', syncAll);
    window.addEventListener('cele_daily_tasks_updated', syncAll);
    window.addEventListener('cele_daily_goal_updated', syncAll);
    window.addEventListener('cele_backup_restored', syncAll);

    return () => {
      clearInterval(interval);
      if (celebrateTimerRef.current) clearTimeout(celebrateTimerRef.current);
      window.removeEventListener('cele_streak_updated', syncAll);
      window.removeEventListener('cele_daily_tasks_updated', syncAll);
      window.removeEventListener('cele_daily_goal_updated', syncAll);
      window.removeEventListener('cele_backup_restored', syncAll);
    };
  }, []);

  // Automatically trigger Fallout celebration & extend consecutive streak when Daily Study Goal is met
  useEffect(() => {
    if (goalMet && !hasCelebratedGoalToday()) {
      markGoalCelebratedToday();
      if (!hasCheckedInToday()) {
        const res = performDailyCheckIn();
        setStreakData(res.streak);
        setCheckedInToday(true);
        if (onStreakExtended && res.isNewCheckIn) {
          onStreakExtended(res.streak.currentStreak);
        }
      }
      triggerFalloutCelebration(true);
    }
  }, [goalMet, onStreakExtended]);

  const handleClaimRation = () => {
    const result = performDailyCheckIn();
    setStreakData(result.streak);
    setCheckedInToday(true);
    setWeekActivity(getLast7DaysActivity());
    if (result.isNewCheckIn) {
      triggerFalloutCelebration(true);
      onStreakExtended?.(result.streak.currentStreak);
    }
  };

  const handleChangeGoal = (target: number) => {
    soundManager.playClick();
    const saved = saveDailyStudyGoal(target);
    setDailyGoal(saved);
  };

  const todayStr = getLocalDateString();
  const checkInSet = new Set(streakData.checkInHistory || []);
  const showFalloutBanner = isCelebrating || goalMet;

  return (
    <section
      aria-label="Study Streak"
      className="bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] rounded-3xl p-5 sm:p-7 shadow-xs space-y-5 relative overflow-hidden"
    >
      {/* Animated Scanline Sweep when Goal is Met */}
      {isCelebrating && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 streak-scan-sweep opacity-55"
        />
      )}

      {/* Header Row */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start space-x-3.5">
          <div className="p-2.5 rounded-2xl bg-amber-500/15 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 shrink-0">
            <BottleCapIcon className="w-6 h-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black text-stone-900 dark:text-stone-100 font-mono tracking-tight">
                Study Streak
              </h2>
              <span
                className={`inline-flex items-center space-x-1 text-[11px] font-bold font-mono px-2 py-0.5 rounded-md border ${
                  goalMet
                    ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/35'
                    : checkedInToday
                    ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/35'
                    : 'bg-stone-100 dark:bg-[#162852] text-stone-600 dark:text-stone-300 border-stone-200 dark:border-[#2B447A]'
                }`}
              >
                {goalMet ? (
                  <>
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Daily Goal Met</span>
                  </>
                ) : checkedInToday ? (
                  <>
                    <Flame className="w-3 h-3" />
                    <span>Ration Active</span>
                  </>
                ) : (
                  <>
                    <Target className="w-3 h-3" />
                    <span>Daily Target Open</span>
                  </>
                )}
              </span>
            </div>
            <p className="text-xs text-stone-500 dark:text-stone-300 mt-0.5">
              Consecutive survival log · Complete your daily study goal to earn Vault Approval &amp; Bottle Caps
            </p>
          </div>
        </div>

        {/* Consecutive Counters + Goal Preset Selector */}
        <div className="flex flex-wrap items-center gap-3 self-start sm:self-auto">
          <div className="flex items-center space-x-3 bg-stone-50 dark:bg-[#162852] border border-stone-200 dark:border-[#2B447A] rounded-2xl px-3.5 py-2">
            <div>
              <span className="block text-[10px] font-mono text-stone-500 dark:text-stone-400">
                Current
              </span>
              <span className="text-lg font-black font-mono tabular-nums text-amber-600 dark:text-amber-400">
                {streakData.currentStreak}d
              </span>
            </div>
            <div className="h-7 w-px bg-stone-200 dark:bg-[#2B447A]" />
            <div>
              <span className="block text-[10px] font-mono text-stone-500 dark:text-stone-400">
                Best Record
              </span>
              <span className="text-lg font-black font-mono tabular-nums text-stone-900 dark:text-stone-100">
                {streakData.bestStreak}d
              </span>
            </div>
          </div>

          <div
            className="flex items-center p-1 rounded-xl bg-stone-100 dark:bg-[#162852] border border-stone-200 dark:border-[#2B447A]"
            role="group"
            aria-label="Daily study goal target"
          >
            {GOAL_PRESETS.map(target => {
              const active = dailyGoal === target;
              return (
                <button
                  key={target}
                  type="button"
                  onClick={() => handleChangeGoal(target)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-orange-600 text-white shadow-xs'
                      : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100'
                  }`}
                >
                  {target} items
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fallout Theme Goal-Met Celebration Animation Stage */}
      {showFalloutBanner && (
        <div
          className={`relative z-10 rounded-2xl border p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all ${
            isCelebrating
              ? 'border-amber-400 bg-amber-500/15 dark:bg-[#162852] shadow-lg'
              : 'border-emerald-500/40 bg-emerald-50/70 dark:bg-[#13293D]/80'
          }`}
        >
          <div className="flex items-center space-x-4">
            {/* Rotating Vault Gear + Vault Boy Approval Emblem */}
            <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
              <div
                aria-hidden="true"
                className={`absolute inset-0 rounded-full border-2 border-dashed border-amber-400/60 ${
                  isCelebrating ? 'streak-gear-spin' : ''
                }`}
              />
              <VaultApprovalSeal
                className={`w-14 h-14 relative z-10 ${isCelebrating ? 'streak-seal-pop' : ''}`}
              />
              {isCelebrating && (
                <>
                  <BottleCapIcon className="w-4 h-4 text-amber-400 absolute -top-1 -right-1 streak-cap-float" />
                  <BottleCapIcon
                    className="w-3.5 h-3.5 text-emerald-400 absolute -bottom-1 -left-1 streak-cap-float"
                  />
                </>
              )}
            </div>

            <div className="space-y-1 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-mono font-black uppercase tracking-wider text-amber-600 dark:text-amber-300 flex items-center space-x-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Vault-Tec Daily Quota Cleared</span>
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-extrabold text-stone-900 dark:text-stone-100 font-mono">
                {streakData.currentStreak} Consecutive {streakData.currentStreak === 1 ? 'Day' : 'Days'} · Fallout Bunker Approved!
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-300">
                {questionsToday} items completed today ({completedTasksCount}/3 directives cleared). Next midnight cycle in{' '}
                <span className="font-mono font-bold tabular-nums">{timeToMidnight.formatted}</span>.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => triggerFalloutCelebration(true)}
            className="px-3.5 py-2 rounded-xl border border-amber-500/40 bg-white dark:bg-[#0E1B38] hover:bg-amber-500/10 text-xs font-mono font-bold text-amber-700 dark:text-amber-300 flex items-center space-x-1.5 transition shrink-0 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Replay Celebration</span>
          </button>
        </div>
      )}

      {/* Daily Progress Meter + Action */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
        <div className="md:col-span-8 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="font-bold text-stone-700 dark:text-stone-200">
              Daily Study Goal Progress
            </span>
            <span className="font-extrabold tabular-nums text-amber-600 dark:text-amber-400">
              {questionsToday} / {dailyGoal} items ({progressRatio}%)
            </span>
          </div>

          <div className="h-3 w-full rounded-full bg-stone-100 dark:bg-[#080E1E] border border-stone-200 dark:border-[#2B447A] overflow-hidden p-0.5">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                goalMet
                  ? 'bg-gradient-to-r from-emerald-500 via-amber-400 to-emerald-400'
                  : 'bg-gradient-to-r from-amber-500 to-yellow-400'
              }`}
              style={{ width: `${Math.max(questionsToday > 0 ? 6 : 0, progressRatio)}%` }}
            />
          </div>

          <div className="flex flex-wrap items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 font-mono gap-2">
            <span>
              Vault Quotas: <strong className="text-stone-800 dark:text-stone-200 tabular-nums">{completedTasksCount}/3</strong>
            </span>
            <span>
              {goalMet
                ? 'Target met — consecutive streak secured!'
                : `${Math.max(0, dailyGoal - questionsToday)} more items or complete 3 quotas to trigger Fallout celebration`}
            </span>
          </div>
        </div>

        <div className="md:col-span-4 flex justify-end">
          {!checkedInToday ? (
            <button
              type="button"
              onClick={handleClaimRation}
              className="w-full py-2.5 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center space-x-2 transition cursor-pointer whitespace-nowrap"
            >
              <BottleCapIcon className="w-4 h-4 shrink-0" />
              <span>Extend Streak (+50 Caps)</span>
            </button>
          ) : (
            <div className="w-full py-2.5 px-4 rounded-xl bg-stone-50 dark:bg-[#162852] border border-stone-200 dark:border-[#2B447A] text-xs font-mono font-bold text-stone-700 dark:text-stone-200 flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Checked In · Reset {timeToMidnight.formatted}</span>
            </div>
          )}
        </div>
      </div>

      {/* 7-Day Consecutive Streak Strip */}
      <div className="relative z-10 pt-2 border-t border-stone-200 dark:border-[#2B447A]/80">
        <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 dark:text-stone-400 mb-2.5">
          <span className="font-bold uppercase tracking-wider">7-Day Survival Timeline</span>
          <span className="tabular-nums">Total Check-Ins: {streakData.checkInHistory.length}</span>
        </div>

        <div className="grid grid-cols-7 gap-1.5 sm:gap-2.5">
          {weekActivity.map(dayRec => {
            const isToday = dayRec.date === todayStr;
            const dateObj = new Date(`${dayRec.date}T12:00:00`);
            const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(dateObj);
            const hasActivity =
              checkInSet.has(dayRec.date) ||
              dayRec.questionsAnswered > 0 ||
              dayRec.tasks.reviewedFlashcards ||
              dayRec.tasks.learnedNew ||
              dayRec.tasks.tookMockExam;
            const dayGoalDone = dayRec.questionsAnswered >= dailyGoal;

            return (
              <div
                key={dayRec.date}
                title={`${dayRec.date}: ${dayRec.questionsAnswered} items studied`}
                className={`rounded-xl p-2 flex flex-col items-center justify-center text-center border transition ${
                  dayGoalDone
                    ? 'bg-emerald-500/15 border-emerald-500/45 text-emerald-700 dark:text-emerald-300'
                    : hasActivity
                    ? 'bg-amber-500/15 border-amber-500/45 text-amber-700 dark:text-amber-300'
                    : isToday
                    ? 'bg-stone-100 dark:bg-[#162852] border-amber-400/60 text-stone-800 dark:text-stone-200'
                    : 'bg-stone-50/70 dark:bg-[#080E1E]/60 border-stone-200 dark:border-[#2B447A]/60 text-stone-400 dark:text-stone-500'
                }`}
              >
                <span className="text-[10px] font-mono font-bold uppercase">
                  {isToday ? 'Today' : dayName}
                </span>
                <div className="my-1">
                  {dayGoalDone ? (
                    <CheckCircle2 className="w-4 h-4 mx-auto text-emerald-500" />
                  ) : hasActivity ? (
                    <BottleCapIcon className="w-4 h-4 mx-auto text-amber-500" />
                  ) : (
                    <div className="w-4 h-4 mx-auto rounded-full border border-dashed border-current opacity-45" />
                  )}
                </div>
                <span className="text-[10px] font-mono tabular-nums font-bold">
                  {dayRec.questionsAnswered}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
