import React, { useEffect, useState } from 'react';
import {
  CEQuestion,
  FeedbackMode
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
  Flame
} from 'lucide-react';
import { soundManager } from '../utils/audio';
import { incrementDailyQuestionsAnswered } from '../utils/storage';

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
  onFinishExam
}) => {
  const currentQ = questions[currentIndex];
  const [secondsRemaining, setSecondsRemaining] = useState<number>(timeLimitMinutes * 60);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [currentStreak, setCurrentStreak] = useState<number>(0);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed(prev => prev + 1);
      if (timeLimitMinutes > 0) {
        setSecondsRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            soundManager.playWrong();
            onFinishExam(timeLimitMinutes * 60);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLimitMinutes, onFinishExam]);

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showSubmitModal) return;

      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (['1', '2', '3', '4'].includes(e.key) && currentQ) {
        const optIndex = parseInt(e.key) - 1;
        if (currentQ.choices[optIndex]) {
          handleSelectOption(currentQ.choices[optIndex]);
        }
      } else if (e.key.toLowerCase() === 'f' && currentQ) {
        toggleFlag();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, questions, showSubmitModal, currentQ]);

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
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = questions.length - answeredCount;
  const isFlagged = flaggedIds.includes(currentQ.id);
  const selectedAnswer = userAnswers[currentQ.id];

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex flex-col space-y-6">
      
      {/* Top Status Bar */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-4 flex items-center justify-between shadow-xs text-stone-800 dark:text-stone-200 transition-colors">
        <div className="flex items-center space-x-3 text-xs">
          <span className="font-mono font-bold text-stone-600 dark:text-stone-400">
            Item <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">{currentIndex + 1}</span> of{' '}
            <span className="font-bold">{questions.length}</span>
          </span>
          <span className="text-stone-300 dark:text-stone-700">·</span>
          <span className="text-stone-500 dark:text-stone-400 hidden sm:inline">
            Answered: {answeredCount}
          </span>
          {currentStreak >= 2 && feedbackMode === 'immediate' && (
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950/70 border border-orange-300 dark:border-orange-800 text-orange-700 dark:text-orange-400 font-bold flex items-center space-x-1 animate-pulse">
              <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
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
                  >
                    <span className="w-7 h-7 rounded-lg bg-stone-200/80 dark:bg-stone-700 flex items-center justify-center font-bold text-xs text-stone-800 dark:text-stone-200 shrink-0 mt-0.5">
                      {choiceLetter}
                    </span>
                    <span className="flex-1 leading-snug pt-0.5">{choice}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between mt-6">
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
