import React, { useEffect, useState } from 'react';
import {
  CEQuestion,
  FeedbackMode,
  ExamConfig
} from '../types';
import {
  Clock,
  Flag,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Send,
  Volume2,
  VolumeX,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Flame,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { BottleCapIcon } from './BottleCapIcon';
import { soundManager } from '../utils/audio';
import {
  incrementDailyQuestionsAnswered,
  saveActiveExamSession,
  clearActiveExamSession
} from '../utils/storage';

interface ExamActiveProps {
  questions: CEQuestion[];
  currentIndex: number;
  setCurrentIndex: (idx: number) => void;
  userAnswers: Record<number, string>;
  setUserAnswers: React.Dispatch<React.SetStateAction<Record<number, string>>>;
  flaggedIds: number[];
  setFlaggedIds: React.Dispatch<React.SetStateAction<number[]>>;
  feedbackMode: FeedbackMode;
  timeLimitMinutes: number;
  onFinishExam: (timeSpentSeconds: number) => void;
  config?: ExamConfig;
  initialSecondsRemaining?: number;
  initialSecondsElapsed?: number;
}

export const ExamActive: React.FC<ExamActiveProps> = ({
  questions,
  currentIndex,
  setCurrentIndex,
  userAnswers,
  setUserAnswers,
  flaggedIds,
  setFlaggedIds,
  feedbackMode,
  timeLimitMinutes,
  onFinishExam,
  config,
  initialSecondsRemaining,
  initialSecondsElapsed
}) => {
  const currentQ = questions[currentIndex];
  const [secondsRemaining, setSecondsRemaining] = useState<number>(() => {
    if (initialSecondsRemaining !== undefined && initialSecondsRemaining >= 0) {
      return initialSecondsRemaining;
    }
    return timeLimitMinutes * 60;
  });
  const [secondsElapsed, setSecondsElapsed] = useState<number>(() => {
    if (initialSecondsElapsed !== undefined && initialSecondsElapsed >= 0) {
      return initialSecondsElapsed;
    }
    return 0;
  });
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [isTimerMinimized, setIsTimerMinimized] = useState<boolean>(false);

  // Auto-persist active exam state to localStorage so examinees can resume if interrupted
  useEffect(() => {
    if (!questions || questions.length === 0) return;
    saveActiveExamSession({
      id: 'active_exam_session',
      timestamp: Date.now(),
      config: config || {
        area: 'ALL',
        subtopic: 'ALL',
        difficulty: 'ALL',
        count: questions.length,
        timeLimitMinutes,
        feedbackMode
      },
      questions,
      currentIndex,
      userAnswers,
      flaggedIds,
      secondsRemaining,
      secondsElapsed
    });
  }, [
    config,
    questions,
    currentIndex,
    userAnswers,
    flaggedIds,
    secondsRemaining,
    secondsElapsed,
    timeLimitMinutes,
    feedbackMode
  ]);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed(prev => prev + 1);
      if (timeLimitMinutes > 0) {
        setSecondsRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            soundManager.playWrong();
            clearActiveExamSession();
            onFinishExam(timeLimitMinutes * 60);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLimitMinutes, onFinishExam]);

  // Comprehensive Global Keyboard shortcuts in ExamActive
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if focus is inside text input, textarea, or contentEditable
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      // If submit confirmation modal is active, Enter submits and Escape cancels
      if (showSubmitModal) {
        if (e.key === 'Enter') {
          e.preventDefault();
          setShowSubmitModal(false);
          onFinishExam(secondsElapsed);
        } else if (e.key === 'Escape') {
          e.preventDefault();
          setShowSubmitModal(false);
        }
        return;
      }

      // Number keys 1-4 and Numpad keys 1-4 to select answers
      const numKeys = ['1', '2', '3', '4'];
      const numpadKeys: Record<string, number> = {
        Numpad1: 0,
        Numpad2: 1,
        Numpad3: 2,
        Numpad4: 3
      };
      // Letter keys A-D to select answers
      const letterKeys: Record<string, number> = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        A: 0,
        B: 1,
        C: 2,
        D: 3
      };

      if (currentQ) {
        let optionIndex: number | null = null;
        if (numKeys.includes(e.key)) {
          optionIndex = parseInt(e.key, 10) - 1;
        } else if (e.code in numpadKeys) {
          optionIndex = numpadKeys[e.code];
        } else if (e.key in letterKeys) {
          optionIndex = letterKeys[e.key];
        }

        if (optionIndex !== null && currentQ.choices[optionIndex] !== undefined) {
          e.preventDefault();
          handleSelectOption(currentQ.choices[optionIndex]);
          return;
        }
      }

      // ArrowRight: Next question
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (currentIndex < questions.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setShowSubmitModal(true);
        }
        return;
      }

      // ArrowLeft: Previous question
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
        return;
      }

      // Spacebar: Advance to next question (or finish) without scrolling the page
      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        if (currentIndex < questions.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setShowSubmitModal(true);
        }
        return;
      }

      // Key 'f' or 'F': Toggle Flag
      if ((e.key === 'f' || e.key === 'F') && currentQ) {
        e.preventDefault();
        toggleFlag();
        return;
      }

      // Key 'c' or 'C': Clear answer
      if ((e.key === 'c' || e.key === 'C') && currentQ) {
        e.preventDefault();
        clearCurrentAnswer();
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    currentIndex,
    questions,
    showSubmitModal,
    currentQ,
    feedbackMode,
    userAnswers,
    currentStreak,
    secondsElapsed
  ]);

  // Web Speech API
  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToSpeak = `${currentQ.question}. Option A, ${currentQ.choices[0]}. Option B, ${currentQ.choices[1]}. Option C, ${currentQ.choices[2]}. Option D, ${currentQ.choices[3]}.`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleSelectOption = (choice: string) => {
    if (feedbackMode === 'immediate' && userAnswers[currentQ.id] !== undefined) {
      return;
    }
    const isFirstTime = userAnswers[currentQ.id] === undefined;
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: choice
    }));

    if (isFirstTime) {
      incrementDailyQuestionsAnswered(1);
    }

    if (feedbackMode === 'immediate') {
      const isCorrect = choice === currentQ.answer;
      if (isCorrect) {
        const nextStreak = currentStreak + 1;
        setCurrentStreak(nextStreak);
        if (nextStreak >= 3) {
          soundManager.playStreak(nextStreak);
        } else {
          soundManager.playCorrect();
        }
      } else {
        setCurrentStreak(0);
        soundManager.playWrong();
      }
    } else {
      // In delayed feedback (mock exam), play gentle water drop tone on answer bubble selection
      soundManager.playWaterDrop();
    }
  };

  const clearCurrentAnswer = () => {
    if (feedbackMode === 'immediate') return;
    setUserAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentQ.id];
      return copy;
    });
  };

  const toggleFlag = () => {
    setFlaggedIds(prev =>
      prev.includes(currentQ.id) ? prev.filter(id => id !== currentQ.id) : [...prev, currentQ.id]
    );
  };

  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = questions.length - answeredCount;
  const progressPercentage = questions.length > 0 ? (answeredCount / questions.length) * 100 : 0;
  const isFlagged = flaggedIds.includes(currentQ.id);
  const selectedAnswer = userAnswers[currentQ.id];

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex flex-col space-y-6">
      
      {/* Thin Animated Horizontal Progress Bar (Pinned at top of ExamActive session) */}
      <div
        className="sticky top-16 -mt-6 -mx-4 sm:-mx-6 lg:-mx-8 z-30 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200/60 dark:border-stone-800/60 transition-colors shadow-xs"
        role="progressbar"
        aria-valuenow={answeredCount}
        aria-valuemin={0}
        aria-valuemax={questions.length}
        aria-label={`${unansweredCount} questions remaining out of ${questions.length}`}
        title={`${unansweredCount} questions remaining in this session (${Math.round(progressPercentage)}% completed)`}
      >
        {/* Thin 3px Progress Track with animated gradient fill */}
        <div className="relative h-1 sm:h-1.5 w-full bg-stone-100 dark:bg-stone-800/80 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 transition-all duration-500 ease-out relative"
            style={{ width: `${progressPercentage}%` }}
          >
            {/* Luminous Shimmer Effect */}
            <div className="absolute inset-0 bg-white/25 animate-pulse" />
          </div>
        </div>

        {/* Compact Remaining Questions Tracker Line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-stone-500 dark:text-stone-400">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-orange-600 dark:text-orange-400 tabular-nums">
              {answeredCount}/{questions.length} Answered
            </span>
            <span className="text-stone-300 dark:text-stone-700">·</span>
            <span className="tabular-nums font-semibold text-stone-700 dark:text-stone-300">
              {unansweredCount} {unansweredCount === 1 ? 'Question' : 'Questions'} Remaining
            </span>
          </div>
          <span className="tabular-nums font-bold text-stone-700 dark:text-stone-300">
            {Math.round(progressPercentage)}%
          </span>
        </div>
      </div>

      {/* Top Status Bar */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-4 flex items-center justify-between shadow-xs text-stone-800 dark:text-stone-200 transition-colors relative overflow-hidden">
        {/* Subtle top indicator bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-stone-100 dark:bg-stone-800">
          <div
            className="h-full bg-orange-500 transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <span className="font-mono font-bold text-stone-600 dark:text-stone-400">
            Item <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">{currentIndex + 1}</span> of{' '}
            <span className="font-bold">{questions.length}</span>
          </span>
          <span className="text-stone-300 dark:text-stone-700">·</span>
          <span className="text-stone-500 dark:text-stone-400 hidden sm:inline tabular-nums">
            Answered: {answeredCount}
          </span>
          <span className="text-stone-300 dark:text-stone-700 hidden sm:inline">·</span>
          <span className="text-orange-600 dark:text-orange-400 font-bold tabular-nums">
            {unansweredCount} Left
          </span>
          {currentStreak >= 2 && feedbackMode === 'immediate' && (
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-600 dark:text-amber-300 font-bold flex items-center space-x-1 animate-pulse font-mono text-xs">
              <BottleCapIcon className="w-3.5 h-3.5 text-amber-500" />
              <span>{currentStreak} Streak!</span>
            </span>
          )}
        </div>

        <div className="flex items-center space-x-3">
          {/* Timer Display */}
          <div
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border font-mono font-bold text-xs sm:text-sm tabular-nums ${
              timeLimitMinutes > 0 && secondsRemaining <= 120
                ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-400 text-rose-600 dark:text-rose-400 animate-pulse'
                : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300'
            }`}
          >
            <Clock className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            <span>
              {timeLimitMinutes > 0 ? formatTime(secondsRemaining) : `${formatTime(secondsElapsed)} (Untimed)`}
            </span>
          </div>

          {/* Finish Button */}
          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs sm:text-sm font-bold transition shadow-xs flex items-center space-x-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Finish</span>
          </button>
        </div>
      </div>

      {/* Dual Pane Assessment Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Pane: Question */}
        <div className="lg:col-span-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[420px] shadow-xs text-stone-900 dark:text-stone-100 transition-colors">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-stone-200 dark:border-stone-800 text-xs">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-lg bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-400 font-bold">
                  {currentQ.area}
                </span>
                <span className="text-stone-400 font-medium">·</span>
                <span className="text-stone-600 dark:text-stone-300 font-medium truncate max-w-[200px] sm:max-w-none">
                  {currentQ.subtopic}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={handleSpeak}
                  title="Read aloud"
                  className={`p-1.5 rounded-lg border text-xs transition ${
                    isSpeaking
                      ? 'bg-orange-100 dark:bg-orange-950 border-orange-400 text-orange-600'
                      : 'bg-stone-100 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400'
                  }`}
                >
                  {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <button
                  type="button"
                  onClick={toggleFlag}
                  className={`px-2.5 py-1 rounded-lg border text-xs font-semibold transition flex items-center space-x-1 ${
                    isFlagged
                      ? 'bg-amber-100 dark:bg-amber-950/60 border-amber-300 text-amber-700 dark:text-amber-400'
                      : 'bg-stone-100 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400'
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  <span>{isFlagged ? 'Flagged' : 'Flag'}</span>
                </button>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold leading-relaxed mb-6">
              {currentQ.question}
            </h3>
          </div>

          {/* Immediate Feedback Box */}
          {feedbackMode === 'immediate' && selectedAnswer !== undefined && (
            <div
              className={`mt-4 p-4 rounded-2xl border text-xs sm:text-sm transition-all ${
                selectedAnswer === currentQ.answer
                  ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                  : 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
              }`}
            >
              <div className="flex items-center space-x-2 font-bold mb-1">
                {selectedAnswer === currentQ.answer ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Correct</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                    <span>Incorrect. Answer: {currentQ.answer}</span>
                  </>
                )}
              </div>
              <p className="mt-1 leading-relaxed text-stone-600 dark:text-stone-300">
                {currentQ.explanation}
              </p>
            </div>
          )}

          <div className="pt-4 border-t border-stone-200 dark:border-stone-800 text-xs text-stone-500 dark:text-stone-400 flex items-center justify-between">
            <span>Item #{currentQ.id}</span>
            <span className="hidden sm:inline">Keys 1-4 to select · Arrow keys to navigate</span>
          </div>
        </div>

        {/* Right Pane: Options */}
        <div className="lg:col-span-6 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[420px] shadow-xs text-stone-900 dark:text-stone-100 transition-colors">
          <div>
            <div className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-4">
              Select Answer
            </div>

            <div className="space-y-3">
              {currentQ.choices.map((choice, idx) => {
                const choiceLetter = String.fromCharCode(65 + idx);
                const isSelected = selectedAnswer === choice;
                const isCorrect = choice === currentQ.answer;

                let btnStyle = 'w-full p-4 rounded-2xl text-left border transition flex items-start space-x-3.5 text-sm font-medium ';

                if (feedbackMode === 'immediate' && selectedAnswer !== undefined) {
                  if (isCorrect) {
                    btnStyle += 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                  } else if (isSelected && !isCorrect) {
                    btnStyle += 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200 font-bold';
                  } else {
                    btnStyle += 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-400 opacity-50';
                  }
                } else {
                  if (isSelected) {
                    btnStyle += 'bg-orange-50 dark:bg-orange-950/50 border-orange-500 text-orange-900 dark:text-orange-200 font-bold ring-1 ring-orange-500';
                  } else {
                    btnStyle += 'bg-stone-50/70 hover:bg-stone-100 dark:bg-stone-800/60 dark:hover:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200';
                  }
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(choice)}
                    className={btnStyle}
                    title={`Option ${choiceLetter} (Press ${idx + 1} or ${choiceLetter})`}
                  >
                    <div className="flex items-center space-x-1 shrink-0 mt-0.5">
                      <span className="w-7 h-7 rounded-lg bg-stone-200/80 dark:bg-stone-700 flex items-center justify-center font-bold text-xs text-stone-800 dark:text-stone-200">
                        {choiceLetter}
                      </span>
                      <kbd className="hidden sm:inline-block px-1 py-0.5 text-[10px] font-mono font-bold rounded bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-700 leading-none">
                        {idx + 1}
                      </kbd>
                    </div>
                    <span className="flex-1 leading-snug pt-0.5">{choice}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Keyboard Shortcuts Hint Bar */}
          <div className="hidden sm:flex items-center justify-between text-[11px] font-mono text-stone-500 dark:text-stone-400 pt-3 px-1 border-t border-stone-100 dark:border-stone-800/60 mt-4">
            <div className="flex items-center space-x-2">
              <span className="font-sans text-[10px] uppercase font-bold text-stone-400 dark:text-stone-500">Shortcuts:</span>
              <kbd className="px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-bold">1–4</kbd>
              <span>Select</span>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <kbd className="px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-bold">Space / →</kbd>
              <span>Next</span>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <kbd className="px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-bold">←</kbd>
              <span>Prev</span>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <kbd className="px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-bold">F</kbd>
              <span>Flag</span>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between mt-4">
            <button
              type="button"
              onClick={clearCurrentAnswer}
              disabled={selectedAnswer === undefined || feedbackMode === 'immediate'}
              className="text-xs text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 disabled:opacity-30 flex items-center space-x-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setCurrentIndex(currentIndex - 1)}
                disabled={currentIndex === 0}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 disabled:opacity-40 text-stone-700 dark:text-stone-300 text-xs sm:text-sm font-semibold rounded-xl transition flex items-center space-x-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (currentIndex < questions.length - 1) {
                    setCurrentIndex(currentIndex + 1);
                  } else {
                    setShowSubmitModal(true);
                  }
                }}
                className="px-5 py-2 bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-bold rounded-xl transition flex items-center space-x-1 shadow-xs"
              >
                <span>{currentIndex === questions.length - 1 ? 'Finish' : 'Next'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Question Navigation Tray */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-5 shadow-xs transition-colors">
        <div className="flex items-center justify-between mb-3 text-xs">
          <div className="flex items-center space-x-4">
            <span className="font-bold text-stone-700 dark:text-stone-300 uppercase">
              Question Navigator
            </span>
            <div className="flex items-center space-x-3 text-stone-500 dark:text-stone-400">
              <span className="flex items-center space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-stone-200 dark:bg-stone-700 inline-block" />
                <span>Unanswered</span>
              </span>
              <span className="flex items-center space-x-1 text-orange-600 dark:text-orange-400">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-600 inline-block" />
                <span>Answered</span>
              </span>
            </div>
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="text-orange-600 dark:text-orange-400 font-bold hover:underline hidden sm:inline"
          >
            Submit &rarr;
          </button>
        </div>

        <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto pt-1 pb-1">
          {questions.map((q, idx) => {
            const isAnswered = userAnswers[q.id] !== undefined;
            const isItemFlagged = flaggedIds.includes(q.id);
            const isActive = idx === currentIndex;

            let btnClass = 'w-9 h-9 rounded-xl text-xs font-bold transition relative flex items-center justify-center border ';

            if (isActive) {
              btnClass += 'ring-2 ring-orange-500 font-black ';
            }

            if (isAnswered) {
              btnClass += 'bg-orange-600 text-white border-orange-600 ';
            } else {
              btnClass += 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:bg-stone-200 ';
            }

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={btnClass}
              >
                {idx + 1}
                {isItemFlagged && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 border-2 border-white dark:border-stone-900 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Persistent Non-Intrusive Floating Countdown Timer HUD (Appears only during active exams) */}
      <aside
        aria-label="Active Exam Persistent Countdown Timer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 no-print select-none"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        {isTimerMinimized ? (
          /* Minimized Compact Chip */
          <button
            type="button"
            onClick={() => setIsTimerMinimized(false)}
            title="Expand countdown timer HUD"
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full border shadow-lg backdrop-blur-md transition-all cursor-pointer ${
              timeLimitMinutes > 0 && secondsRemaining <= 120
                ? 'bg-rose-500 text-white border-rose-400 shadow-rose-500/30 animate-pulse'
                : timeLimitMinutes > 0 && secondsRemaining <= 300
                ? 'bg-amber-500 text-white border-amber-400 shadow-amber-500/25'
                : 'bg-white/95 dark:bg-stone-900/95 border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 shadow-stone-900/10 dark:shadow-black/40'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-orange-500 dark:text-orange-400" />
            <span className="font-mono font-bold text-xs sm:text-sm tabular-nums tracking-tight">
              {timeLimitMinutes > 0 ? formatTime(secondsRemaining) : formatTime(secondsElapsed)}
            </span>
            <Maximize2 className="w-3 h-3 opacity-60 ml-0.5" />
          </button>
        ) : (
          /* Full Non-Intrusive Floating HUD Pill */
          <div
            className={`flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl border shadow-lg backdrop-blur-md transition-all duration-200 ${
              timeLimitMinutes > 0 && secondsRemaining <= 120
                ? 'bg-rose-500/95 dark:bg-rose-600/95 border-rose-400 text-white shadow-rose-500/30 animate-pulse'
                : timeLimitMinutes > 0 && secondsRemaining <= 300
                ? 'bg-amber-500/90 dark:bg-amber-600/90 border-amber-300 text-white shadow-amber-500/25'
                : 'bg-white/95 dark:bg-stone-900/95 border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-100 shadow-stone-900/10 dark:shadow-black/40'
            }`}
          >
            {/* Clock Icon with Warning indicator */}
            <div className="relative flex items-center justify-center shrink-0">
              <Clock
                className={`w-4 h-4 ${
                  timeLimitMinutes > 0 && secondsRemaining <= 300
                    ? 'text-white'
                    : 'text-orange-500 dark:text-orange-400'
                }`}
              />
              {timeLimitMinutes > 0 && secondsRemaining <= 120 && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-ping" />
              )}
            </div>

            {/* Time Display with Tabular Numerics for jump-free ticking */}
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-75 leading-none">
                {timeLimitMinutes > 0
                  ? secondsRemaining <= 120
                    ? 'Time Expiring'
                    : 'Time Remaining'
                  : 'Elapsed Time'}
              </span>
              <span className="font-mono font-bold text-sm sm:text-base tracking-tight tabular-nums leading-tight mt-0.5">
                {timeLimitMinutes > 0 ? formatTime(secondsRemaining) : formatTime(secondsElapsed)}
              </span>
            </div>

            {/* Progress Pill: Answered of Total */}
            <div className="hidden xs:flex items-center px-2 py-0.5 rounded-md font-mono text-[11px] font-bold tabular-nums border border-current/20 bg-current/5">
              <span>
                {answeredCount}/{questions.length}
              </span>
            </div>

            {/* Quick Finish Button */}
            <button
              type="button"
              onClick={() => setShowSubmitModal(true)}
              title="Submit assessment"
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition flex items-center space-x-1 cursor-pointer shrink-0 ${
                timeLimitMinutes > 0 && secondsRemaining <= 300
                  ? 'bg-white text-rose-700 hover:bg-stone-100 shadow-xs'
                  : 'bg-orange-600 hover:bg-orange-500 text-white shadow-xs'
              }`}
            >
              <span>Finish</span>
            </button>

            {/* Minimize Toggle */}
            <button
              type="button"
              onClick={() => setIsTimerMinimized(true)}
              title="Minimize timer"
              className="p-1 rounded-lg opacity-60 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 transition cursor-pointer shrink-0"
              aria-label="Minimize timer HUD"
            >
              <Minimize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </aside>

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl max-w-md w-full p-6 shadow-2xl text-stone-900 dark:text-stone-100">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Submit Assessment?</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 mt-2">
                Answered <strong className="text-stone-900 dark:text-stone-100">{answeredCount}</strong> of{' '}
                <strong className="text-stone-900 dark:text-stone-100">{questions.length}</strong> items.
                {unansweredCount > 0 && (
                  <span className="block text-orange-600 dark:text-orange-400 font-bold mt-1">
                    {unansweredCount} items remaining unanswered.
                  </span>
                )}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="w-full py-2.5 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 font-bold text-sm rounded-xl transition"
              >
                Continue
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowSubmitModal(false);
                  clearActiveExamSession();
                  onFinishExam(secondsElapsed);
                }}
                className="w-full py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm rounded-xl transition shadow-xs"
              >
                Submit Now
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
