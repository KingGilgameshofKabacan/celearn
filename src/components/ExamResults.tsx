import React, { useState, useEffect } from 'react';
import {
  CEQuestion,
  ExamSessionResult
} from '../types';
import {
  RotateCcw,
  Printer,
  ArrowRight
} from 'lucide-react';
import { soundManager } from '../utils/audio';

interface ExamResultsProps {
  result: ExamSessionResult;
  questions: CEQuestion[];
  onRetakeAll: () => void;
  onRetakeMissed: () => void;
  onNewExam: () => void;
}

export const ExamResults: React.FC<ExamResultsProps> = ({
  result,
  questions,
  onRetakeAll,
  onRetakeMissed,
  onNewExam
}) => {
  const [reviewFilter, setReviewFilter] = useState<'ALL' | 'INCORRECT' | 'FLAGGED'>('ALL');

  const questionMap = new Map<number, CEQuestion>();
  questions.forEach(q => questionMap.set(q.id, q));

  const total = result.totalQuestions;
  const correct = result.correctAnswers;
  const incorrect = total - correct;
  const percentage = result.percentage;
  const isPassed = percentage >= 70;

  useEffect(() => {
    if (isPassed) {
      soundManager.playPassed();
    } else {
      soundManager.playFailed();
    }
  }, [isPassed]);

  const areaBreakdown: Record<string, { total: number; correct: number }> = {};
  result.questionIds.forEach(qid => {
    const q = questionMap.get(qid);
    if (!q) return;

    if (!areaBreakdown[q.area]) {
      areaBreakdown[q.area] = { total: 0, correct: 0 };
    }
    areaBreakdown[q.area].total++;
    if (result.userAnswers[qid] === q.answer) {
      areaBreakdown[q.area].correct++;
    }
  });

  const formatDuration = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="max-w-4xl mx-auto w-full my-6 p-4 sm:p-6 lg:p-8 space-y-6">
      
      {/* Score Card */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl overflow-hidden shadow-xs text-stone-900 dark:text-stone-100 transition-colors">
        <div className="p-6 sm:p-8 border-b border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                  isPassed
                    ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400'
                    : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-400'
                }`}
              >
                {isPassed ? 'Passed (≥70%)' : 'Needs Review (<70%)'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Assessment Results
              </h2>
            </div>

            <div className="flex items-center space-x-6 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 p-4 rounded-2xl shadow-xs">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black font-mono">
                  {correct} / {total}
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400 uppercase font-bold mt-0.5">
                  Score
                </div>
              </div>
              <div className="h-10 w-px bg-stone-200 dark:bg-stone-700" />
              <div className="text-center">
                <div
                  className={`text-3xl sm:text-4xl font-black font-mono ${
                    isPassed ? 'text-orange-600 dark:text-orange-400' : 'text-rose-600 dark:text-rose-400'
                  }`}
                >
                  {percentage}%
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400 uppercase font-bold mt-0.5">
                  Accuracy
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 text-center text-xs bg-white dark:bg-stone-900">
          <div>
            <span className="text-stone-500 dark:text-stone-400 uppercase font-bold">Total Items</span>
            <div className="text-lg font-bold font-mono mt-1">{total}</div>
          </div>
          <div>
            <span className="text-stone-500 dark:text-stone-400 uppercase font-bold">Time Taken</span>
            <div className="text-lg font-bold font-mono mt-1">{formatDuration(result.timeSpentSeconds)}</div>
          </div>
          <div>
            <span className="text-stone-500 dark:text-stone-400 uppercase font-bold">Passing Benchmark</span>
            <div className="text-lg font-bold font-mono text-orange-600 dark:text-orange-400 mt-1">70%</div>
          </div>
          <div>
            <span className="text-stone-500 dark:text-stone-400 uppercase font-bold">Incorrect</span>
            <div className="text-lg font-bold font-mono text-rose-600 dark:text-rose-400 mt-1">{incorrect}</div>
          </div>
        </div>
      </div>

      {/* Area Breakdown */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xs text-stone-900 dark:text-stone-100 transition-colors">
        <h3 className="text-base font-bold uppercase tracking-wider">
          Area Breakdown
        </h3>
        <div className="space-y-3">
          {Object.entries(areaBreakdown).map(([areaKey, stat]) => {
            const areaPct = Math.round((stat.correct / stat.total) * 100);
            return (
              <div key={areaKey} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span>{areaKey}</span>
                  <span className="font-mono text-stone-600 dark:text-stone-400">
                    {stat.correct}/{stat.total} ({areaPct}%)
                  </span>
                </div>
                <div className="w-full h-2 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${areaPct >= 70 ? 'bg-orange-600 dark:bg-orange-500' : 'bg-rose-500'}`}
                    style={{ width: `${areaPct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Question Review List */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs text-stone-900 dark:text-stone-100 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
          <h3 className="text-base font-bold uppercase tracking-wider">
            Review Questions
          </h3>

          {/* Filter Pills */}
          <div className="flex items-center space-x-1.5 bg-stone-100 dark:bg-stone-800 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setReviewFilter('ALL')}
              className={`px-3 py-1.5 rounded-lg transition ${
                reviewFilter === 'ALL'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              All ({total})
            </button>
            <button
              onClick={() => setReviewFilter('INCORRECT')}
              className={`px-3 py-1.5 rounded-lg transition ${
                reviewFilter === 'INCORRECT'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              Incorrect ({incorrect})
            </button>
            <button
              onClick={() => setReviewFilter('FLAGGED')}
              className={`px-3 py-1.5 rounded-lg transition ${
                reviewFilter === 'FLAGGED'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              Flagged ({result.flaggedIds.length})
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {result.questionIds
            .filter(qid => {
              const userAns = result.userAnswers[qid];
              const q = questionMap.get(qid);
              if (!q) return false;
              const isCorrect = userAns === q.answer;
              const isFlagged = result.flaggedIds.includes(qid);

              if (reviewFilter === 'INCORRECT' && isCorrect) return false;
              if (reviewFilter === 'FLAGGED' && !isFlagged) return false;
              return true;
            })
            .map((qid, idx) => {
              const q = questionMap.get(qid)!;
              const userAns = result.userAnswers[qid];
              const isCorrect = userAns === q.answer;

              // Red tint requirement for incorrect items
              const cardClass = isCorrect
                ? 'bg-stone-50/70 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 p-5 rounded-2xl space-y-3'
                : 'bg-rose-50/80 dark:bg-rose-950/40 border-2 border-rose-300 dark:border-rose-800 p-5 rounded-2xl space-y-3 text-rose-950 dark:text-rose-100';

              return (
                <div key={qid} className={cardClass}>
                  <div className="flex items-start justify-between gap-3 border-b border-stone-200/60 dark:border-stone-700 pb-2.5 text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold font-mono">#{idx + 1}</span>
                      <span>·</span>
                      <span className="font-bold">{q.area}</span>
                      <span className="text-stone-500 dark:text-stone-400 hidden sm:inline">{q.subtopic}</span>
                    </div>

                    <span
                      className={`px-2 py-0.5 rounded-md text-xs font-bold ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-400'
                          : 'bg-rose-600 text-white font-extrabold'
                      }`}
                    >
                      {isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>

                  <p className="font-bold text-sm sm:text-base leading-snug">
                    {q.question}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                    <div
                      className={`p-3 rounded-xl border ${
                        isCorrect
                          ? 'bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700'
                          : 'bg-rose-100/80 dark:bg-rose-900/40 border-rose-300 dark:border-rose-700 text-rose-900 dark:text-rose-200 font-bold'
                      }`}
                    >
                      <span className="block text-[10px] uppercase opacity-75 mb-0.5">Your Choice:</span>
                      <span>{userAns || 'None'}</span>
                    </div>

                    <div className="p-3 rounded-xl border bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 font-bold text-stone-900 dark:text-stone-100">
                      <span className="block text-[10px] text-orange-600 dark:text-orange-400 uppercase mb-0.5">Correct Answer:</span>
                      <span>{q.answer}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/70 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700/80 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    <strong className="text-stone-900 dark:text-stone-100 block mb-0.5">Note:</strong>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-2 no-print">
        <div className="flex flex-wrap gap-2.5">
          {incorrect > 0 && (
            <button
              onClick={onRetakeMissed}
              className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-bold rounded-xl transition flex items-center space-x-1.5 shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Missed ({incorrect})</span>
            </button>
          )}

          <button
            onClick={onRetakeAll}
            className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs sm:text-sm font-bold rounded-xl transition flex items-center space-x-1.5"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake All</span>
          </button>

          <button
            onClick={onNewExam}
            className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-bold rounded-xl transition flex items-center space-x-1.5 shadow-xs"
          >
            <span>New Exam</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={() => window.print()}
          className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 text-xs sm:text-sm font-bold rounded-xl transition flex items-center space-x-1.5"
        >
          <Printer className="w-4 h-4" />
          <span>Print</span>
        </button>
      </div>

    </div>
  );
};
