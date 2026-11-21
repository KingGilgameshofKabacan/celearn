import React, { useMemo } from 'react';
import {
  CEArea,
  ExamConfig,
  CEQuestion,
  ActiveExamSession
} from '../types';
import {
  CE_AREAS,
  AREA_FULL_NAMES,
  SUBTOPICS_BY_AREA
} from '../data/questions';
import {
  Play,
  Sigma,
  X
} from 'lucide-react';

interface ExamSetupProps {
  questions: CEQuestion[];
  config: ExamConfig;
  setConfig: React.Dispatch<React.SetStateAction<ExamConfig>>;
  onStartExam: () => void;
  onQuickPreset: (preset: Partial<ExamConfig>) => void;
  interruptedSession?: ActiveExamSession | null;
  onResumeSession?: () => void;
  onDiscardSession?: () => void;
}

export const ExamSetup: React.FC<ExamSetupProps> = ({
  questions,
  config,
  setConfig,
  onStartExam,
  onQuickPreset,
  interruptedSession,
  onResumeSession,
  onDiscardSession
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
      if (config.formulaOnly && !q.isFormula && !(q.reference || '').includes('Formulas PDF')) return false;
      return true;
    }).length;
  }, [questions, config.area, config.subtopic, config.difficulty, config.formulaOnly]);

  const formulaCounts = useMemo(() => {
    const counts = { PSAD: 0, HPGE: 0, MSTE: 0, ALL: 0 };
    questions.forEach(q => {
      if (q.isFormula || (q.reference || '').includes('Formulas PDF')) {
        counts.ALL += 1;
        if (q.area === 'PSAD' || q.area === 'HPGE' || q.area === 'MSTE') {
          counts[q.area] += 1;
        }
      }
    });
    return counts;
  }, [questions]);

  const { areaCounts, subtopicCounts } = useMemo(() => {
    const aCounts: Record<CEArea, number> = { PSAD: 0, HPGE: 0, MSTE: 0 };
    const sCountsAll: Record<string, number> = {};
    const sCountsByArea: Record<CEArea, Record<string, number>> = { PSAD: {}, HPGE: {}, MSTE: {} };
    for (const q of questions) {
      if (q.area === 'PSAD' || q.area === 'HPGE' || q.area === 'MSTE') {
        aCounts[q.area] += 1;
        sCountsAll[q.subtopic] = (sCountsAll[q.subtopic] || 0) + 1;
        sCountsByArea[q.area][q.subtopic] = (sCountsByArea[q.area][q.subtopic] || 0) + 1;
      }
    }
    return {
      areaCounts: aCounts,
      subtopicCounts: config.area === 'ALL' ? sCountsAll : sCountsByArea[config.area]
    };
  }, [questions, config.area]);

  const effectiveCount = matchingQuestionsCount === 0 ? 0 : Math.min(config.count, matchingQuestionsCount);

  return (
    <div className="max-w-4xl mx-auto w-full my-6 p-4 sm:p-6 lg:p-8 space-y-6">

      {/* Resume Interrupted Session Card */}
      {interruptedSession && (
        <div className="bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-orange-500/5 dark:from-orange-950/50 dark:via-amber-950/40 dark:to-stone-900 border-2 border-orange-500/50 rounded-3xl p-6 sm:p-7 shadow-sm transition-all flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-orange-500 text-white animate-pulse">
                Unfinished Exam Found
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                {new Date(interruptedSession.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
              Resume Your Interrupted Assessment
            </h3>

            <p className="text-xs text-stone-600 dark:text-stone-300 max-w-xl leading-relaxed">
              You have an active exam session with{' '}
              <strong className="text-stone-900 dark:text-stone-100 font-mono">
                {Object.keys(interruptedSession.userAnswers).length} of {interruptedSession.questions.length} answered
              </strong>{' '}
              ({interruptedSession.config.area === 'ALL' ? 'All Areas' : interruptedSession.config.area}). Resuming will restore your exact questions, answers, and remaining time.
            </p>

            <div className="flex items-center space-x-3 text-xs font-mono text-stone-500 dark:text-stone-400 pt-1">
              <span>Item {interruptedSession.currentIndex + 1} of {interruptedSession.questions.length}</span>
              <span>·</span>
              <span>
                {interruptedSession.config.timeLimitMinutes === 0
                  ? `Untimed (${Math.floor(interruptedSession.secondsElapsed / 60)}m elapsed)`
                  : interruptedSession.secondsRemaining < 60
                    ? '<1 min left'
                    : `${Math.floor(interruptedSession.secondsRemaining / 60)} mins left`}
              </span>
              {interruptedSession.flaggedIds.length > 0 && (
                <>
                  <span>·</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">
                    {interruptedSession.flaggedIds.length} Flagged
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            {onDiscardSession && (
              <button
                type="button"
                onClick={onDiscardSession}
                className="px-4 py-2.5 text-xs font-semibold text-stone-600 hover:text-rose-600 dark:text-stone-400 dark:hover:text-rose-400 transition cursor-pointer"
              >
                Discard
              </button>
            )}

            {onResumeSession && (
              <button
                type="button"
                onClick={onResumeSession}
                className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs sm:text-sm font-extrabold rounded-2xl shadow-md flex items-center space-x-2 transition cursor-pointer active:scale-95"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Resume Last Session</span>
              </button>
            )}
          </div>
        </div>
      )}
      
      {/* Setup Card (Vault-Tec G.O.A.T. Console) */}
      <div className="bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm text-stone-900 dark:text-stone-100 transition-colors relative overflow-hidden">
        {/* Vault Hazard Chevrons Top Accent */}
        <div className="h-2 w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] vault-tec-hazard-stripe -mt-6 -mx-6 sm:-mt-8 sm:-mx-8 mb-6" />

        {/* Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-[#2B447A] pb-5">
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-black tracking-tight font-mono text-stone-900 dark:text-amber-400">
                G.O.A.T. Assessment Setup
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-500 dark:text-amber-300 font-extrabold border border-amber-500/30 uppercase">
                Vault-Tec PRC Standard
              </span>
            </div>
            <div className="text-xs text-stone-500 dark:text-sky-300 mt-1 font-mono">
              Generalized Occupational Aptitude Test for Civil Engineers · {matchingQuestionsCount} items available
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
                  feedbackMode: 'delayed',
                  formulaOnly: false
                })
              }
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition cursor-pointer"
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
                  feedbackMode: 'delayed',
                  formulaOnly: false
                })
              }
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition cursor-pointer"
            >
              HPGE (50Q)
            </button>
            <button
              onClick={() =>
                onQuickPreset({
                  area: 'PSAD',
                  subtopic: 'ALL',
                  difficulty: 'ALL',
                  count: formulaCounts.PSAD || 43,
                  timeLimitMinutes: 45,
                  feedbackMode: 'immediate',
                  formulaOnly: true
                })
              }
              data-keep-color={config.formulaOnly && config.area === 'PSAD' ? true : undefined}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition flex items-center space-x-1 cursor-pointer ${
                config.formulaOnly && config.area === 'PSAD'
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs'
                  : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/35'
              }`}
            >
              <Sigma className="w-3.5 h-3.5" />
              <span>PSAD Formulas</span>
            </button>
            <button
              onClick={() =>
                onQuickPreset({
                  area: 'HPGE',
                  subtopic: 'ALL',
                  difficulty: 'ALL',
                  count: formulaCounts.HPGE || 44,
                  timeLimitMinutes: 45,
                  feedbackMode: 'immediate',
                  formulaOnly: true
                })
              }
              data-keep-color={config.formulaOnly && config.area === 'HPGE' ? true : undefined}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition flex items-center space-x-1 cursor-pointer ${
                config.formulaOnly && config.area === 'HPGE'
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs'
                  : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/35'
              }`}
            >
              <Sigma className="w-3.5 h-3.5" />
              <span>HPGE Formulas</span>
            </button>
            <button
              onClick={() =>
                onQuickPreset({
                  area: 'MSTE',
                  subtopic: 'ALL',
                  difficulty: 'ALL',
                  count: formulaCounts.MSTE || 49,
                  timeLimitMinutes: 45,
                  feedbackMode: 'immediate',
                  formulaOnly: true
                })
              }
              data-keep-color={config.formulaOnly && config.area === 'MSTE' ? true : undefined}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition flex items-center space-x-1 cursor-pointer ${
                config.formulaOnly && config.area === 'MSTE'
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs'
                  : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/35'
              }`}
            >
              <Sigma className="w-3.5 h-3.5" />
              <span>MSTE Formulas</span>
            </button>
            <button
              onClick={() =>
                onQuickPreset({
                  area: 'ALL',
                  subtopic: 'ALL',
                  difficulty: 'ALL',
                  count: 100,
                  timeLimitMinutes: 60,
                  feedbackMode: 'immediate',
                  formulaOnly: true
                })
              }
              data-keep-color={config.formulaOnly && config.area === 'ALL' ? true : undefined}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition flex items-center space-x-1 cursor-pointer ${
                config.formulaOnly && config.area === 'ALL'
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-xs'
                  : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/35'
              }`}
            >
              <Sigma className="w-3.5 h-3.5" />
              <span>All Formulas</span>
            </button>
            <button
              onClick={() =>
                onQuickPreset({
                  area: 'MSTE',
                  subtopic: 'ALL',
                  difficulty: 'ALL',
                  count: 50,
                  timeLimitMinutes: 45,
                  feedbackMode: 'delayed',
                  formulaOnly: false
                })
              }
              className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition cursor-pointer"
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
                  feedbackMode: 'delayed',
                  formulaOnly: false
                })
              }
              className="px-3 py-1.5 text-xs font-bold rounded-xl bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/50 transition cursor-pointer"
            >
              Full Mock (100Q)
            </button>
          </div>
        </div>

        {/* Active Formula-Only Indicator */}
        {config.formulaOnly && (
          <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <div className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-300 font-bold">
              <Sigma className="w-4 h-4 shrink-0" />
              <span>
                {config.area === 'ALL' ? 'HPGE, PSAD & MSTE Formulas' : `${config.area} Formulas`} Focus Active — drawing from the{' '}
                {config.area === 'ALL' ? 'HPGE, PSAD & MSTE' : config.area} Formula question bank ({matchingQuestionsCount} items available)
              </span>
            </div>
            <button
              type="button"
              onClick={() => setConfig(prev => ({ ...prev, formulaOnly: false }))}
              className="px-2.5 py-1 rounded-lg bg-stone-900/10 dark:bg-white/10 hover:bg-rose-500/20 text-stone-700 dark:text-stone-200 font-bold flex items-center space-x-1 transition cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear Filter</span>
            </button>
          </div>
        )}

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
              const areaCount = areaCounts[areaKey] || 0;
              return (
                <button
                  key={areaKey}
                  type="button"
                  onClick={() =>
                    setConfig(prev => ({
                      ...prev,
                      area: areaKey,
                      subtopic: 'ALL'
                    }))
                  }
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
              const count = subtopicCounts[sub] || 0;
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
              onChange={(e) => setConfig(prev => ({ ...prev, count: parseInt(e.target.value, 10) }))}
              className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-orange-500 outline-none transition text-stone-900 dark:text-stone-100"
            >
              <option value="10">10 Items</option>
              <option value="20">20 Items</option>
              <option value="50">50 Items</option>
              <option value="100">100 Items</option>
              <option value="140">140 Items</option>
              {![10, 20, 50, 100, 140, 999999].includes(config.count) && (
                <option value={config.count}>{config.count} Items</option>
              )}
              <option value="999999">All Available ({matchingQuestionsCount} Max)</option>
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
        <div className="pt-4 border-t border-stone-200 dark:border-[#2B447A] flex items-center justify-between">
          <div className="text-xs text-stone-500 dark:text-sky-300 font-mono">
            Selected: <strong className="text-amber-500 dark:text-amber-400">{effectiveCount}</strong> assessment items
          </div>

          <button
            type="button"
            onClick={onStartExam}
            disabled={matchingQuestionsCount === 0}
            className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 disabled:opacity-40 text-stone-950 font-black rounded-2xl shadow-sm transition flex items-center space-x-2 text-sm font-mono cursor-pointer active:scale-95"
          >
            <span>Initiate G.O.A.T. Protocol</span>
            <Play className="w-4 h-4 fill-stone-950" />
          </button>
        </div>

      </div>

    </div>
  );
};
