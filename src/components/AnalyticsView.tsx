import React, { useMemo, useState, useEffect } from 'react';
import {
  UserStats,
  ExamSessionResult,
  CEQuestion,
  DailyTasksStatus,
  DailyActivityRecord
} from '../types';
import { SUBTOPICS_BY_AREA } from '../data/questions';
import {
  Flame,
  ArrowRight,
  Target,
  Sparkles,
  Zap,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Award,
  BookOpen,
  ChevronRight,
  CheckSquare,
  RotateCcw,
  Calendar,
  Layers
} from 'lucide-react';
import {
  hasCheckedInToday,
  performDailyCheckIn,
  getTimeUntilMidnight,
  getDailyTasks,
  getDailyQuestionsAnswered,
  getLast7DaysActivity,
  getTodayDateString
} from '../utils/storage';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';

interface AnalyticsViewProps {
  stats: UserStats;
  history: ExamSessionResult[];
  questions: CEQuestion[];
  onPracticeWeakArea: (subtopic: string) => void;
  onRetakePastExam: (result: ExamSessionResult) => void;
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({
  stats,
  history,
  questions,
  onPracticeWeakArea,
  onRetakePastExam
}) => {
  // Daily Activity & Tasks State
  const [dailyTasks, setDailyTasks] = useState<DailyTasksStatus>(getDailyTasks);
  const [todayQuestionsAnswered, setTodayQuestionsAnswered] = useState<number>(getDailyQuestionsAnswered);
  const [activityHistory, setActivityHistory] = useState<DailyActivityRecord[]>(getLast7DaysActivity);

  useEffect(() => {
    const handleDailyUpdate = () => {
      setDailyTasks(getDailyTasks());
      setTodayQuestionsAnswered(getDailyQuestionsAnswered());
      setActivityHistory(getLast7DaysActivity());
    };
    window.addEventListener('cele_daily_tasks_updated', handleDailyUpdate);
    return () => {
      window.removeEventListener('cele_daily_tasks_updated', handleDailyUpdate);
    };
  }, []);

  const maxQuestionsInWeek = useMemo(() => {
    return Math.max(15, ...activityHistory.map(a => a.questionsAnswered));
  }, [activityHistory]);

  // Official PRC CELE Board Exam Weights: PSAD: 35%, HPGE: 30%, MSTE: 35%
  const prcWeights = {
    PSAD: 0.35,
    HPGE: 0.30,
    MSTE: 0.35
  };

  // Compute Area Accuracies
  const psadAcc = stats.areaStats.PSAD.total > 0 ? (stats.areaStats.PSAD.correct / stats.areaStats.PSAD.total) * 100 : 0;
  const hpgeAcc = stats.areaStats.HPGE.total > 0 ? (stats.areaStats.HPGE.correct / stats.areaStats.HPGE.total) * 100 : 0;
  const msteAcc = stats.areaStats.MSTE.total > 0 ? (stats.areaStats.MSTE.correct / stats.areaStats.MSTE.total) * 100 : 0;

  // Projected Weighted Board Rating
  const projectedRating = useMemo(() => {
    if (stats.totalQuestionsAnswered === 0) return 0;
    const weighted = (psadAcc * prcWeights.PSAD) + (hpgeAcc * prcWeights.HPGE) + (msteAcc * prcWeights.MSTE);
    return Math.round(weighted * 10) / 10;
  }, [psadAcc, hpgeAcc, msteAcc, stats.totalQuestionsAnswered]);

  // PRC Board Passing Criteria Evaluation
  const boardReadiness = useMemo(() => {
    if (stats.totalQuestionsAnswered < 15) {
      return {
        status: 'Baseline Required',
        description: 'Complete at least 15 mock questions to generate smart predictive metrics.',
        color: 'text-stone-500 dark:text-stone-400',
        bg: 'bg-stone-100 dark:bg-stone-800 border-stone-200 dark:border-stone-700',
        badge: 'Collecting Data'
      };
    }

    const hasSubFifty = (stats.areaStats.PSAD.total >= 5 && psadAcc < 50) ||
                        (stats.areaStats.HPGE.total >= 5 && hpgeAcc < 50) ||
                        (stats.areaStats.MSTE.total >= 5 && msteAcc < 50);

    if (projectedRating >= 88 && !hasSubFifty) {
      return {
        status: 'Topnotcher Tier',
        description: 'Projected in the Top 10 CELE Licensure ranking! Consistent mastery across all 3 board domains.',
        color: 'text-orange-600 dark:text-orange-400',
        bg: 'bg-orange-50 dark:bg-orange-950/40 border-orange-300 dark:border-orange-800/60',
        badge: 'Top 10 Contender'
      };
    }

    if (projectedRating >= 70 && !hasSubFifty) {
      return {
        status: 'Exam Ready — Passing',
        description: 'Surpassing the 70% passing threshold with no subject below the 50% conditionality rule.',
        color: 'text-emerald-600 dark:text-emerald-400',
        bg: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800/60',
        badge: 'Likely to Pass'
      };
    }

    if (projectedRating >= 70 && hasSubFifty) {
      return {
        status: 'Conditional Warning',
        description: 'Overall grade exceeds 70%, but at least one domain is below the mandatory 50% PRC threshold.',
        color: 'text-amber-600 dark:text-amber-400',
        bg: 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800/60',
        badge: '50% Rule Risk'
      };
    }

    return {
      status: 'Intensive Review Recommended',
      description: 'Projected rating currently below 70%. Focus on high-yield Table of Specifications (TOS) subtopics below.',
      color: 'text-rose-600 dark:text-rose-400',
      bg: 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800/60',
      badge: 'Needs Reinforcement'
    };
  }, [projectedRating, psadAcc, hpgeAcc, msteAcc, stats]);

  // Average Time per Question
  const avgSecondsPerQ = useMemo(() => {
    if (history.length === 0) return 0;
    const totalTime = history.reduce((sum, h) => sum + h.timeSpentSeconds, 0);
    const totalQ = history.reduce((sum, h) => sum + h.totalQuestions, 0);
    return totalQ > 0 ? Math.round(totalTime / totalQ) : 0;
  }, [history]);

  // Subtopic breakdown
  const subtopicData = useMemo(() => {
    return Object.entries(stats.subtopicStats).map(([subtopic, data]) => {
      const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
      return {
        subtopic,
        total: data.total,
        correct: data.correct,
        percentage: pct
      };
    });
  }, [stats.subtopicStats]);

  const weakSubtopics = useMemo(() => {
    return subtopicData
      .filter(item => item.total >= 3 && item.percentage < 70)
      .sort((a, b) => a.percentage - b.percentage);
  }, [subtopicData]);

  const strongSubtopics = useMemo(() => {
    return subtopicData
      .filter(item => item.total >= 3 && item.percentage >= 80)
      .sort((a, b) => b.percentage - a.percentage);
  }, [subtopicData]);

  // AI-Examiner Diagnostic Insights
  const diagnosticInsights = useMemo(() => {
    const list: { title: string; desc: string; type: 'success' | 'warning' | 'info' }[] = [];

    if (stats.totalQuestionsAnswered < 10) {
      list.push({
        title: 'Diagnostic Baseline in Progress',
        desc: 'Take full 50-item mock board assessments to calibrate subject-level variance analysis.',
        type: 'info'
      });
      return list;
    }

    // Pacing Analysis
    if (avgSecondsPerQ > 0) {
      if (avgSecondsPerQ <= 60) {
        list.push({
          title: `Rapid Pace (${avgSecondsPerQ}s / question)`,
          desc: 'Well within the official 108s PRC limit. Ensure you double-check calculation items to minimize unforced errors.',
          type: 'success'
        });
      } else if (avgSecondsPerQ > 108) {
        list.push({
          title: `Pacing Warning (${avgSecondsPerQ}s / question)`,
          desc: 'Averaging slower than the 108s per question PRC limit. Practice speed drilling formulas in Flashcard mode.',
          type: 'warning'
        });
      }
    }

    // Domain Specific Diagnostics
    if (stats.areaStats.PSAD.total >= 5 && psadAcc < 70) {
      list.push({
        title: 'PSAD Reinforcement Priority',
        desc: 'Structural Analysis & Design is below 70%. Focus on NSCP 2015 Chapter 4 flexure formulas and beam shear equations.',
        type: 'warning'
      });
    }

    if (stats.areaStats.HPGE.total >= 5 && hpgeAcc < 70) {
      list.push({
        title: 'HPGE Soil Mechanics Priority',
        desc: 'Hydraulics & Geotech requires attention. Focus on soil phase relationships, permeability, and Mohr-Coulomb shear strength.',
        type: 'warning'
      });
    }

    if (stats.areaStats.MSTE.total >= 5 && msteAcc < 70) {
      list.push({
        title: 'MSTE Surveying & Highway Priority',
        desc: 'Transportation and surveying errors need review. Drill sight distance equations, superelevation, and levelling balancing.',
        type: 'warning'
      });
    }

    if (strongSubtopics.length > 0) {
      list.push({
        title: `Core Strength: ${strongSubtopics[0].subtopic}`,
        desc: `High accuracy of ${strongSubtopics[0].percentage}% demonstrated. Bank this mastery and redirect time to weaker modules.`,
        type: 'success'
      });
    }

    return list;
  }, [stats, psadAcc, hpgeAcc, msteAcc, avgSecondsPerQ, strongSubtopics]);

  return (
    <div className="max-w-5xl mx-auto w-full my-6 p-4 sm:p-6 lg:p-8 space-y-8 text-stone-900 dark:text-stone-100 transition-colors">
      
      {/* Smart Predictive Readiness Hero */}
      <div className={`rounded-3xl p-6 sm:p-8 border shadow-xs transition-all ${boardReadiness.bg}`}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-white/80 dark:bg-stone-900/80 rounded-full text-xs font-bold font-mono tracking-wider uppercase border border-stone-200 dark:border-stone-700 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />
                <span>Smart Board Readiness</span>
              </span>
              <span className={`text-xs font-bold ${boardReadiness.color}`}>
                {boardReadiness.badge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {boardReadiness.status}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 max-w-xl leading-relaxed">
              {boardReadiness.description}
            </p>
          </div>

          {/* Big Grade Projection Badge */}
          <div className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xs flex items-center space-x-5 shrink-0 self-stretch sm:self-auto justify-center">
            <div className="text-center">
              <div className="text-xs text-stone-500 dark:text-stone-400 font-bold uppercase tracking-wider mb-0.5">
                Projected Rating
              </div>
              <div className="text-3xl sm:text-4xl font-black font-mono text-orange-600 dark:text-orange-400">
                {projectedRating > 0 ? `${projectedRating}%` : '—'}
              </div>
              <div className="text-[11px] text-stone-500 dark:text-stone-400 font-mono mt-0.5">
                Passing Cutoff: 70.0%
              </div>
            </div>

            <div className="h-12 w-px bg-stone-200 dark:bg-stone-700" />

            <div className="text-center">
              <div className="text-xs text-stone-500 dark:text-stone-400 font-bold uppercase tracking-wider mb-0.5">
                Average Pace
              </div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-stone-800 dark:text-stone-200">
                {avgSecondsPerQ > 0 ? `${avgSecondsPerQ}s` : '—'}
              </div>
              <div className="text-[11px] text-stone-500 dark:text-stone-400 font-mono mt-0.5">
                Max Allowed: 108s
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Overview Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-5 shadow-xs interactive-card">
          <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            Overall Accuracy
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-orange-600 dark:text-orange-400 font-mono mt-1">
            {stats.overallAccuracy}%
          </div>
          <span className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 block">
            {stats.totalCorrect} / {stats.totalQuestionsAnswered} answered
          </span>
        </div>

        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-5 shadow-xs interactive-card">
          <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            Exams Completed
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-mono mt-1">
            {stats.totalExamsCompleted}
          </div>
          <span className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 block">
            Sessions evaluated
          </span>
        </div>

        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-5 shadow-xs interactive-card">
          <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            Mastered Terms
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-mono mt-1">
            {stats.flashcardsMastered}
          </div>
          <span className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 block">
            of 400 total cards
          </span>
        </div>

        <div
          onClick={() => {
            if (!hasCheckedInToday()) {
              const res = performDailyCheckIn();
              if (res.isNewCheckIn) {
                soundManager.playStreak(res.streak.currentStreak);
                confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
              }
            }
          }}
          className={`bg-white dark:bg-stone-900 border rounded-3xl p-5 shadow-xs transition flex flex-col justify-between ${
            !hasCheckedInToday()
              ? 'border-orange-500/80 ring-2 ring-orange-500/20 cursor-pointer hover:border-orange-500 hover:shadow-md'
              : 'border-stone-200 dark:border-stone-800'
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                Study Streak
              </span>
              {!hasCheckedInToday() ? (
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
            <div className="text-2xl sm:text-3xl font-extrabold text-orange-600 dark:text-orange-400 font-mono mt-1 flex items-center space-x-1">
              <Flame className="w-6 h-6 fill-current text-orange-500" />
              <span>{stats.streakDays}d</span>
            </div>
          </div>
          {!hasCheckedInToday() ? (
            <div className="mt-2 text-xs font-bold text-orange-600 dark:text-orange-400 flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Click to Check In</span>
            </div>
          ) : (
            <span className="text-xs text-stone-500 dark:text-stone-400 mt-1 block">
              Checked in • Reappears after midnight
            </span>
          )}
        </div>
      </div>

      {/* Daily Tasks Today & 7-Day Activity Chart */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 dark:border-stone-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-orange-500/10 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 border border-orange-500/20">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-stone-900 dark:text-stone-100">
                Daily Study Activity & Tasks
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                7-day rolling timeline of practice questions answered and daily task completion
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs text-stone-500 dark:text-stone-400">Today:</span>
            <span className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 font-mono font-bold text-xs border border-orange-200 dark:border-orange-800">
              {todayQuestionsAnswered} Questions Answered
            </span>
          </div>
        </div>

        {/* Today's 3 Tasks Checklist Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className={`p-3.5 rounded-2xl border flex items-center justify-between text-xs transition ${
            dailyTasks.reviewedFlashcards
              ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold'
              : 'bg-stone-50 dark:bg-stone-800/40 border-stone-200 dark:border-stone-700/60 text-stone-600 dark:text-stone-400'
          }`}>
            <div className="flex items-center space-x-2.5">
              <RotateCcw className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span>Review Flashcards</span>
            </div>
            {dailyTasks.reviewedFlashcards ? (
              <span className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Done</span>
              </span>
            ) : (
              <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500">Pending</span>
            )}
          </div>

          <div className={`p-3.5 rounded-2xl border flex items-center justify-between text-xs transition ${
            dailyTasks.learnedNew
              ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold'
              : 'bg-stone-50 dark:bg-stone-800/40 border-stone-200 dark:border-stone-700/60 text-stone-600 dark:text-stone-400'
          }`}>
            <div className="flex items-center space-x-2.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Learn Something New</span>
            </div>
            {dailyTasks.learnedNew ? (
              <span className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Done</span>
              </span>
            ) : (
              <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500">Pending</span>
            )}
          </div>

          <div className={`p-3.5 rounded-2xl border flex items-center justify-between text-xs transition ${
            dailyTasks.tookMockExam
              ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold'
              : 'bg-stone-50 dark:bg-stone-800/40 border-stone-200 dark:border-stone-700/60 text-stone-600 dark:text-stone-400'
          }`}>
            <div className="flex items-center space-x-2.5">
              <Target className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <span>Take Mock Exams</span>
            </div>
            {dailyTasks.tookMockExam ? (
              <span className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Done</span>
              </span>
            ) : (
              <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500">Pending</span>
            )}
          </div>
        </div>

        {/* 7-Day Activity Chart */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider block">
            7-Day Practice Volume & Tasks Log
          </span>

          <div className="bg-stone-50 dark:bg-stone-800/40 border border-stone-200/80 dark:border-stone-700/60 rounded-2xl p-5">
            <div className="grid grid-cols-7 gap-2 sm:gap-4 items-end h-44 pt-6 pb-2">
              {activityHistory.map((item, idx) => {
                const isToday = idx === activityHistory.length - 1;
                const d = new Date(item.date + 'T00:00:00');
                const dayLabel = isToday ? 'Today' : d.toLocaleDateString('en-US', { weekday: 'short' });
                const dateNum = d.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' });
                const heightPct = Math.max(8, Math.min(100, Math.round((item.questionsAnswered / maxQuestionsInWeek) * 100)));
                const completedTasks = (item.tasks.reviewedFlashcards ? 1 : 0) +
                                       (item.tasks.learnedNew ? 1 : 0) +
                                       (item.tasks.tookMockExam ? 1 : 0);

                return (
                  <div key={idx} className="flex flex-col items-center h-full justify-end space-y-2 group">
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-stone-600 dark:text-stone-300">
                      {item.questionsAnswered}
                    </span>

                    <div className="w-full max-w-[42px] bg-stone-200 dark:bg-stone-700/60 rounded-xl h-28 flex items-end p-1 overflow-hidden">
                      <div
                        className={`w-full rounded-lg transition-all duration-500 ${
                          isToday
                            ? 'bg-gradient-to-t from-orange-600 to-amber-500 shadow-sm'
                            : item.questionsAnswered > 0
                            ? 'bg-gradient-to-t from-orange-500/80 to-amber-400/80'
                            : 'bg-stone-300 dark:bg-stone-600'
                        }`}
                        style={{ height: `${heightPct}%` }}
                      />
                    </div>

                    <div className="text-center">
                      <span className={`block text-[10px] sm:text-xs font-bold leading-tight ${
                        isToday ? 'text-orange-600 dark:text-orange-400' : 'text-stone-700 dark:text-stone-300'
                      }`}>
                        {dayLabel}
                      </span>
                      <span className="block text-[9px] font-mono text-stone-400 dark:text-stone-500">
                        {dateNum}
                      </span>
                      {completedTasks > 0 ? (
                        <span className="inline-block mt-1 px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400">
                          {completedTasks}/3
                        </span>
                      ) : (
                        <span className="inline-block mt-1 w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-700" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* AI-Examiner Diagnostic Insights */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center space-x-2">
          <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          <h3 className="text-base font-extrabold uppercase tracking-wider">
            Examiner Diagnostic Insights
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
          {diagnosticInsights.map((diag, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border text-xs sm:text-sm space-y-1 transition ${
                diag.type === 'success'
                  ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/60 text-emerald-950 dark:text-emerald-200'
                  : diag.type === 'warning'
                  ? 'bg-rose-50/70 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800/60 text-rose-950 dark:text-rose-200'
                  : 'bg-stone-50 dark:bg-stone-800/50 border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200'
              }`}
            >
              <div className="font-bold flex items-center space-x-2">
                {diag.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                {diag.type === 'warning' && <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />}
                {diag.type === 'info' && <Clock className="w-4 h-4 text-stone-500 shrink-0" />}
                <span>{diag.title}</span>
              </div>
              <p className="text-xs opacity-90 leading-relaxed pl-6">{diag.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Area Breakdown with Official PRC Weights */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider">
              PRC Board Domain Weights
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              Official weights applied in the Philippine Civil Engineering Licensure Exam
            </p>
          </div>
          <div className="text-xs font-mono text-stone-500 dark:text-stone-400">
            Passing: ≥70% Average · ≥50% per Domain
          </div>
        </div>

        <div className="space-y-5">
          {([
            { key: 'PSAD', weight: '35%', title: 'Structural Analysis & Design (Mechanics, RC, Steel, Seismic NSCP)' },
            { key: 'HPGE', weight: '30%', title: 'Hydraulics & Geotechnical Engineering (Fluids, Soils, Foundations)' },
            { key: 'MSTE', weight: '35%', title: 'Math, Surveying & Transportation (Geometry, Highway, Safety, CPM)' }
          ] as const).map(({ key, weight, title }) => {
            const data = stats.areaStats[key];
            const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
            const isPassing = pct >= 70;
            const isConditionRisk = data.total > 0 && pct < 50;

            return (
              <div key={key} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                  <div>
                    <span className="font-extrabold text-orange-600 dark:text-orange-400 font-mono text-sm mr-2">
                      {key}
                    </span>
                    <span className="font-semibold text-stone-800 dark:text-stone-200">{title}</span>
                    <span className="ml-2 px-2 py-0.5 bg-stone-100 dark:bg-stone-800 rounded text-[11px] font-mono text-stone-500 dark:text-stone-400">
                      Weight: {weight}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 font-mono self-end sm:self-auto">
                    <span className="text-stone-500 dark:text-stone-400">
                      {data.correct}/{data.total}
                    </span>
                    <span
                      className={`font-black text-sm ${
                        isConditionRisk
                          ? 'text-rose-600 dark:text-rose-400'
                          : isPassing
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-stone-700 dark:text-stone-300'
                      }`}
                    >
                      {pct}%
                    </span>
                  </div>
                </div>

                <div className="w-full h-3 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden relative">
                  {/* Passing 70% threshold tick */}
                  <div className="absolute top-0 bottom-0 left-[70%] w-0.5 bg-stone-400 dark:bg-stone-600 z-10 opacity-70" title="70% Passing Threshold" />
                  {/* 50% conditionality rule tick */}
                  <div className="absolute top-0 bottom-0 left-[50%] w-0.5 bg-rose-400/60 dark:bg-rose-500/60 z-10" title="50% Minimum Threshold" />
                  
                  <div
                    className={`h-full transition-all duration-700 rounded-full ${
                      pct >= 70
                        ? 'bg-gradient-to-r from-orange-500 to-emerald-500'
                        : pct >= 50
                        ? 'bg-orange-500'
                        : data.total > 0
                        ? 'bg-rose-500'
                        : 'bg-stone-300 dark:bg-stone-700'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Areas Needing Improvement (<70%) with 1-Click Launch */}
      {weakSubtopics.length > 0 && (
        <div className="bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
              <h3 className="text-base font-extrabold text-rose-700 dark:text-rose-400 uppercase tracking-wider">
                Targeted Improvement Queue (&lt;70%)
              </h3>
            </div>
            <span className="text-xs font-mono text-rose-600 dark:text-rose-400">
              {weakSubtopics.length} modules need drill
            </span>
          </div>

          <div className="space-y-3">
            {weakSubtopics.map(item => (
              <div
                key={item.subtopic}
                className="bg-white dark:bg-stone-900 border border-rose-200 dark:border-rose-900/50 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs interactive-card"
              >
                <div>
                  <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">{item.subtopic}</h4>
                  <div className="text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5">
                    Current Accuracy: <span className="text-rose-600 dark:text-rose-400 font-bold">{item.percentage}%</span> ({item.correct}/{item.total} correct)
                  </div>
                </div>

                <button
                  onClick={() => onPracticeWeakArea(item.subtopic)}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl transition flex items-center space-x-1.5 self-start sm:self-auto shadow-xs interactive-btn"
                >
                  <Target className="w-3.5 h-3.5" />
                  <span>Launch Targeted Drill</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Strengths (≥80%) */}
      {strongSubtopics.length > 0 && (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-base font-extrabold uppercase tracking-wider text-stone-800 dark:text-stone-200">
              Validated Domain Strengths (≥80%)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {strongSubtopics.map(item => (
              <div
                key={item.subtopic}
                className="bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 p-3.5 rounded-2xl flex items-center justify-between text-xs"
              >
                <span className="font-semibold text-stone-800 dark:text-stone-200 truncate mr-2">{item.subtopic}</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-black text-sm">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Assessment History */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-extrabold uppercase tracking-wider">
            Assessment History Log
          </h3>
          <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
            {history.length} sessions recorded
          </span>
        </div>

        {history.length === 0 ? (
          <div className="text-center py-10 bg-stone-50 dark:bg-stone-800/40 rounded-2xl border border-stone-200 dark:border-stone-700 text-stone-400 text-xs">
            No mock board tests completed yet. Start an exam from the Mock Exam tab!
          </div>
        ) : (
          <div className="space-y-3">
            {history.slice(0, 8).map(session => (
              <div
                key={session.id}
                className="bg-stone-50 dark:bg-stone-800/60 p-4 rounded-2xl border border-stone-200 dark:border-stone-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs interactive-card"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-extrabold text-orange-600 dark:text-orange-400 font-mono text-sm">{session.area}</span>
                    <span>·</span>
                    <span className="font-semibold text-stone-800 dark:text-stone-200">{session.totalQuestions} Questions</span>
                    <span>·</span>
                    <span className="text-stone-500 dark:text-stone-400">{new Date(session.timestamp).toLocaleDateString()}</span>
                  </div>
                  <div className="text-stone-500 dark:text-stone-400 mt-1 font-mono">
                    Time: {Math.floor(session.timeSpentSeconds / 60)}m {session.timeSpentSeconds % 60}s · Pace: {Math.round(session.timeSpentSeconds / session.totalQuestions)}s/item
                  </div>
                </div>

                <div className="flex items-center space-x-4 self-end sm:self-auto">
                  <div className="text-right">
                    <div
                      className={`text-lg font-black font-mono ${
                        session.percentage >= 70 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
                      }`}
                    >
                      {session.percentage}%
                    </div>
                  </div>

                  <button
                    onClick={() => onRetakePastExam(session)}
                    className="px-3 py-1.5 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 rounded-xl hover:text-orange-600 dark:hover:text-orange-400 font-semibold transition flex items-center space-x-1"
                    title="Retake Exam"
                  >
                    <span>Retake</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
