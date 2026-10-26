import React, { useMemo } from 'react';
import {
  CEArea,
  ExamConfig,
  CEQuestion
} from '../types';
import {
  CE_AREAS,
  AREA_FULL_NAMES,
  SUBTOPICS_BY_AREA
} from '../data/questions';
import {
  Play
} from 'lucide-react';

interface ExamSetupProps {
  questions: CEQuestion[];
  config: ExamConfig;
  setConfig: React.Dispatch<React.SetStateAction<ExamConfig>>;
  onStartExam: () => void;
  onQuickPreset: (preset: Partial<ExamConfig>) => void;
}

export const ExamSetup: React.FC<ExamSetupProps> = ({
  questions,
  config,
  setConfig,
  onStartExam,
  onQuickPreset
}) => {
  const availableSubtopics = useMemo(() => {
    if (config.area === 'ALL') {
      return Object.values(SUBTOPICS_BY_AREA).flat();
    }
    return SUBTOPICS_BY_AREA[config.area] || [];
  }, [config.area]);

  const matchingQuestionsCount = useMemo(() => {
    return questions.filter(q => {
      if (config.area !== 'ALL' && q.area !== config.area) return false;
      if (config.subtopic !== 'ALL' && q.subtopic !== config.subtopic) return false;
      if (config.difficulty !== 'ALL' && q.difficulty !== config.difficulty) return false;
      return true;
    }).length;
  }, [questions, config.area, config.subtopic, config.difficulty]);

  const effectiveCount = Math.min(config.count, matchingQuestionsCount || 1);

  return (
    <div className="max-w-4xl mx-auto w-full my-6 p-4 sm:p-6 lg:p-8 space-y-6">
      
      {/* Setup Card */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs text-stone-900 dark:text-stone-100 transition-colors">
        
        {/* Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Mock Exam Setup
            </h2>
            <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
              {matchingQuestionsCount} items available in bank
            </div>
          </div>

          {/* Quick Presets */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() =>
                onQuickPreset({
                  area: 'PSAD',
                  subtopic: 'ALL',
                  difficulty: 'ALL',
                  count: 50,
                  timeLimitMinutes: 45,
                  feedbackMode: 'delayed'
                })
              }
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition"
            >
              PSAD (50Q)
            </button>
            <button
              onClick={() =>
                onQuickPreset({
                  area: 'HPGE',
                  subtopic: 'ALL',
                  difficulty: 'ALL',
                  count: 50,
                  timeLimitMinutes: 45,
                  feedbackMode: 'delayed'
                })
              }
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition"
            >
              HPGE (50Q)
            </button>
            <button
              onClick={() =>
                onQuickPreset({
                  area: 'MSTE',
                  subtopic: 'ALL',
                  difficulty: 'ALL',
                  count: 50,
                  timeLimitMinutes: 45,
                  feedbackMode: 'delayed'
                })
              }
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition"
            >
              MSTE (50Q)
            </button>
            <button
              onClick={() =>
                onQuickPreset({
                  area: 'ALL',
                  subtopic: 'ALL',
                  difficulty: 'ALL',
                  count: 100,
                  timeLimitMinutes: 75,
                  feedbackMode: 'delayed'
                })
              }
              className="px-3 py-1.5 text-xs font-bold rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/50 transition"
            >
              Full Mock (100Q)
            </button>
          </div>
        </div>

        {/* 1. Area Selection */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400">
            Area
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button
              type="button"
              onClick={() => setConfig(prev => ({ ...prev, area: 'ALL', subtopic: 'ALL' }))}
              className={`p-3.5 rounded-2xl text-left border transition ${
                config.area === 'ALL'
                  ? 'bg-orange-50 dark:bg-orange-950/50 border-orange-500 text-orange-900 dark:text-orange-200 font-bold ring-1 ring-orange-500'
                  : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-stone-300'
              }`}
            >
              <div className="text-sm font-bold">All Areas</div>
              <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">{questions.length} Questions</div>
            </button>

            {CE_AREAS.map(areaKey => {
              const isSelected = config.area === areaKey;
              const areaCount = questions.filter(q => q.area === areaKey).length;
              return (
                <button
                  key={areaKey}
                  type="button"
                  onClick={() => setConfig(prev => ({ ...prev, area: areaKey, subtopic: 'ALL' }))}
                  className={`p-3.5 rounded-2xl text-left border transition ${
                    isSelected
                      ? 'bg-orange-50 dark:bg-orange-950/50 border-orange-500 text-orange-900 dark:text-orange-200 font-bold ring-1 ring-orange-500'
                      : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-stone-300'
                  }`}
                >
                  <div className="text-sm font-bold flex justify-between">
                    <span>{areaKey}</span>
                    <span className="text-xs font-mono text-orange-600 dark:text-orange-400">{areaCount}Q</span>
                  </div>
                  <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 truncate">
                    {AREA_FULL_NAMES[areaKey]}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Subtopic */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400">
            Subtopic
          </label>
          <select
            value={config.subtopic}
            onChange={(e) => setConfig(prev => ({ ...prev, subtopic: e.target.value }))}
            className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-orange-500 outline-none transition text-stone-900 dark:text-stone-100"
          >
            <option value="ALL">All Subtopics ({config.area})</option>
            {availableSubtopics.map(sub => {
              const count = questions.filter(q => {
                if (config.area !== 'ALL' && q.area !== config.area) return false;
                return q.subtopic === sub;
              }).length;
              return (
                <option key={sub} value={sub}>
                  {sub} ({count} items)
                </option>
              );
            })}
          </select>
        </div>

        {/* 3 & 4. Difficulty & Count */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400">
              Difficulty
            </label>
            <select
              value={config.difficulty}
              onChange={(e) => setConfig(prev => ({ ...prev, difficulty: e.target.value as any }))}
              className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-orange-500 outline-none transition text-stone-900 dark:text-stone-100"
            >
              <option value="ALL">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400">
              Items
            </label>
            <select
              value={config.count}
              onChange={(e) => setConfig(prev => ({ ...prev, count: parseInt(e.target.value) }))}
              className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-orange-500 outline-none transition text-stone-900 dark:text-stone-100"
            >
              <option value="10">10 Items</option>
              <option value="20">20 Items</option>
              <option value="50">50 Items</option>
              <option value="100">100 Items</option>
              <option value="140">140 Items</option>
              <option value="400">All Available ({matchingQuestionsCount} Max)</option>
            </select>
          </div>
        </div>

        {/* 5 & 6. Time Limit & Feedback Mode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400">
              Time Limit
            </label>
            <select
              value={config.timeLimitMinutes}
              onChange={(e) => setConfig(prev => ({ ...prev, timeLimitMinutes: parseInt(e.target.value) }))}
              className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-orange-500 outline-none transition text-stone-900 dark:text-stone-100"
            >
              <option value="10">10 Minutes</option>
              <option value="25">25 Minutes</option>
              <option value="45">45 Minutes</option>
              <option value="75">75 Minutes</option>
              <option value="120">120 Minutes</option>
              <option value="0">Untimed</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400">
              Feedback Mode
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setConfig(prev => ({ ...prev, feedbackMode: 'immediate' }))}
                className={`py-3 px-3 rounded-xl border text-xs font-bold transition text-center ${
                  config.feedbackMode === 'immediate'
                    ? 'bg-orange-50 dark:bg-orange-950/50 border-orange-500 text-orange-700 dark:text-orange-400 ring-1 ring-orange-500'
                    : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400'
                }`}
              >
                Immediate
              </button>
              <button
                type="button"
                onClick={() => setConfig(prev => ({ ...prev, feedbackMode: 'delayed' }))}
                className={`py-3 px-3 rounded-xl border text-xs font-bold transition text-center ${
                  config.feedbackMode === 'delayed'
                    ? 'bg-orange-50 dark:bg-orange-950/50 border-orange-500 text-orange-700 dark:text-orange-400 ring-1 ring-orange-500'
                    : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400'
                }`}
              >
                Exam Mode
              </button>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
          <div className="text-xs text-stone-500 dark:text-stone-400">
            Selected: <strong className="text-orange-600 dark:text-orange-400">{effectiveCount}</strong> questions
          </div>

          <button
            type="button"
            onClick={onStartExam}
            disabled={matchingQuestionsCount === 0}
            className="px-8 py-3.5 bg-orange-600 hover:bg-orange-500 disabled:opacity-40 text-white font-bold rounded-2xl shadow-sm transition flex items-center space-x-2 text-sm"
          >
            <span>Start Assessment</span>
            <Play className="w-4 h-4 fill-current" />
          </button>
        </div>

      </div>

    </div>
  );
};
