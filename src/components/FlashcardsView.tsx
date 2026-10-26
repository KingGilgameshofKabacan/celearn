import React, { useState, useEffect, useMemo } from 'react';
import {
  CEQuestion,
  CEArea,
  FlashcardProgress,
  FlashcardMasteryStatus,
  StudyMode
} from '../types';
import {
  CE_AREAS,
  SUBTOPICS_BY_AREA
} from '../data/questions';
import {
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Volume2,
  VolumeX,
  Bookmark,
  Check,
  RotateCw,
  RotateCcw,
  Eye,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight,
  Clock,
  Award,
  AlertCircle,
  HelpCircle,
  BookOpen,
  Filter,
  CheckSquare,
  LogOut,
  X,
  Home
} from 'lucide-react';
import { soundManager } from '../utils/audio';
import {
  scheduleGraduatedFlashcard,
  incrementDailyQuestionsAnswered,
  setDailyTaskCompleted,
  isCardDue,
  isCardNew,
  getDueCards,
  getNewCards
} from '../utils/storage';
import confetti from 'canvas-confetti';

interface FlashcardsViewProps {
  questions: CEQuestion[];
  flashcardProgress: FlashcardProgress;
  onUpdateStatus: (qid: number, status: FlashcardMasteryStatus) => void;
  bookmarks: number[];
  onToggleBookmark: (qid: number) => void;
  initialMode?: 'setup' | 'due' | 'new';
  onNavigateHome?: () => void;
}

interface SessionQueueItem {
  question: CEQuestion;
  timesOk: number;
  timesGood: number;
  selectedAnswer: string | null;
  isAnswered: boolean;
  isCorrect: boolean;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  questions,
  flashcardProgress,
  onUpdateStatus,
  bookmarks,
  onToggleBookmark,
  initialMode = 'setup',
  onNavigateHome
}) => {
  // Mode state: 'setup' | 'session' | 'completed'
  const [viewState, setViewState] = useState<'setup' | 'session' | 'completed'>('setup');
  
  // Setup flow selections (3 sequential dropdowns)
  const [selectedArea, setSelectedArea] = useState<'ALL' | CEArea>('ALL');
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>('ALL');
  const [selectedCount, setSelectedCount] = useState<number | 'ALL'>(20);
  const [cardFilterType, setCardFilterType] = useState<'all' | 'new' | 'due'>('all');

  // Active study mode: 'flashcard' | 'repetition'
  const [studyMode, setStudyMode] = useState<StudyMode>('flashcard');
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [cardSessionIndex, setCardSessionIndex] = useState<number>(0);

  // Active session queue
  const [sessionQueue, setSessionQueue] = useState<SessionQueueItem[]>([]);
  const [sessionType, setSessionType] = useState<'due' | 'new' | 'custom'>('custom');
  const [initialQueueSize, setInitialQueueSize] = useState<number>(0);
  const [graduatedCount, setGraduatedCount] = useState<number>(0);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [showExitConfirm, setShowExitConfirm] = useState<boolean>(false);

  // Available subtopics based on selected area
  const availableSubtopics = useMemo(() => {
    if (selectedArea === 'ALL') {
      return Object.values(SUBTOPICS_BY_AREA).flat();
    }
    return SUBTOPICS_BY_AREA[selectedArea] || [];
  }, [selectedArea]);

  // When area changes, reset subtopic if not valid
  useEffect(() => {
    if (selectedArea !== 'ALL' && selectedSubtopic !== 'ALL') {
      const valid = SUBTOPICS_BY_AREA[selectedArea]?.includes(selectedSubtopic);
      if (!valid) {
        setSelectedSubtopic('ALL');
      }
    }
  }, [selectedArea, selectedSubtopic]);

  // Handle external launch mode triggers
  useEffect(() => {
    if (initialMode === 'due') {
      // Immediately start session with Due cards
      const due = getDueCards(questions, flashcardProgress);
      if (due.length > 0) {
        startSessionWithCards(due.slice(0, 30), 'due');
      } else {
        // If none due, prompt in setup mode with due filter
        setCardFilterType('due');
        setViewState('setup');
      }
    } else if (initialMode === 'new') {
      setCardFilterType('new');
      setViewState('setup');
    }
  }, [initialMode]);

  // Matching questions for current setup selection
  const matchingQuestions = useMemo(() => {
    return questions.filter(q => {
      if (selectedArea !== 'ALL' && q.area !== selectedArea) return false;
      if (selectedSubtopic !== 'ALL' && q.subtopic !== selectedSubtopic) return false;

      const progressItem = flashcardProgress[q.id];
      if (cardFilterType === 'new') {
        if (!isCardNew(progressItem)) return false;
      } else if (cardFilterType === 'due') {
        if (!isCardDue(progressItem)) return false;
      }

      return true;
    });
  }, [questions, selectedArea, selectedSubtopic, cardFilterType, flashcardProgress]);

  // Start session helper
  const startSessionWithCards = (cards: CEQuestion[], type: 'due' | 'new' | 'custom') => {
    if (cards.length === 0) return;

    // Shuffle cards uniformly for natural flow
    const shuffled = [...cards].sort(() => Math.random() - 0.5);

    const queueItems: SessionQueueItem[] = shuffled.map(q => ({
      question: q,
      timesOk: 0,
      timesGood: 0,
      selectedAnswer: null,
      isAnswered: false,
      isCorrect: false
    }));

    setSessionQueue(queueItems);
    setInitialQueueSize(queueItems.length);
    setGraduatedCount(0);
    setSessionType(type);
    setIsFlipped(false);
    setViewState('session');
    soundManager.playStartSession();
  };

  const handleStartSession = () => {
    let pool = matchingQuestions;
    if (pool.length === 0) return;

    const count = selectedCount === 'ALL' ? pool.length : Math.min(selectedCount, pool.length);
    const selected = pool.slice(0, count);
    startSessionWithCards(selected, cardFilterType === 'due' ? 'due' : cardFilterType === 'new' ? 'new' : 'custom');
  };

  // Current active card in the sessionQueue is always at index 0
  const currentItem = sessionQueue[0] || null;
  const currentCard = currentItem?.question || null;
  const isBookmarked = currentCard ? bookmarks.includes(currentCard.id) : false;

  // Handle option selection
  const handleSelectOption = (choice: string) => {
    if (!currentItem || currentItem.isAnswered) return;

    const isCorrect = choice === currentCard?.answer;
    
    // Update current item in queue
    setSessionQueue(prev => {
      if (prev.length === 0) return prev;
      const updated = [...prev];
      updated[0] = {
        ...updated[0],
        selectedAnswer: choice,
        isAnswered: true,
        isCorrect
      };
      return updated;
    });

    if (isCorrect) {
      soundManager.playCorrect();
    } else {
      soundManager.playWrong();
    }
  };

  // Text to speech for current card
  const handleSpeak = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!('speechSynthesis' in window) || !currentCard) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToRead = currentItem?.isAnswered
      ? `Term: ${currentCard.answer}. Definition: ${currentCard.question}. ${currentCard.explanation}`
      : `Question: ${currentCard.question}. Choices: Option A, ${currentCard.choices[0]}. Option B, ${currentCard.choices[1]}. Option C, ${currentCard.choices[2]}. Option D, ${currentCard.choices[3]}.`;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Spaced repetition queue manipulation when rating button is clicked
  const handleRate = (rating: 'bad' | 'ok' | 'good' | 'perfect') => {
    if (!currentItem || !currentItem.isAnswered || !currentCard) return;

    // Track total daily questions answered
    incrementDailyQuestionsAnswered(1);

    const card = { ...currentItem };
    const qid = card.question.id;

    // Remove the current card from index 0
    const newQueue = [...sessionQueue];
    newQueue.shift();

    let wasGraduated = false;

    switch (rating) {
      case 'bad': {
        // Bad: The user forgot it entirely.
        // Re-insert this exact card into the sessionQueue array exactly 4 positions away from current index
        // (so it appears after 4 other cards). If fewer than 4 remaining, goes to end.
        card.selectedAnswer = null;
        card.isAnswered = false;
        card.isCorrect = false;

        const insertIndex = Math.min(4, newQueue.length);
        newQueue.splice(insertIndex, 0, card);
        soundManager.playClick();
        break;
      }

      case 'ok': {
        // Ok (1st time): The user struggled. Push this card to the very end of the current sessionQueue.
        // Ok (2nd time): The user still struggled. Push it to the end of the queue again. (Stays in today queue until Good or Perfect).
        card.timesOk += 1;
        card.selectedAnswer = null;
        card.isAnswered = false;
        card.isCorrect = false;

        newQueue.push(card);
        soundManager.playClick();
        break;
      }

      case 'good': {
        // Good (1st time): The user got it, but needs reinforcement. Push this card to the very end of current sessionQueue.
        // Good (2nd time): The user has learned it for today. Remove it from sessionQueue. Schedule for next day (Date + 1 day).
        if (card.timesGood === 0) {
          card.timesGood = 1;
          card.selectedAnswer = null;
          card.isAnswered = false;
          card.isCorrect = false;

          newQueue.push(card);
          soundManager.playClick();
        } else {
          // 2nd Good: Graduated!
          scheduleGraduatedFlashcard(qid, false);
          wasGraduated = true;
          setGraduatedCount(prev => prev + 1);
          soundManager.playCompleteTask();
        }
        break;
      }

      case 'perfect': {
        // Perfect: The card was too easy. Immediately remove from sessionQueue and schedule for future review (stacked interval).
        scheduleGraduatedFlashcard(qid, true);
        wasGraduated = true;
        setGraduatedCount(prev => prev + 1);
        soundManager.playCompleteTopic();
        break;
      }
    }

    setSessionQueue(newQueue);

    // If queue is now empty, session is complete!
    if (newQueue.length === 0) {
      handleCompleteSession();
    }
  };

  // Flip action for traditional Flashcard Mode
  const handleFlipCard = () => {
    setIsFlipped(prev => !prev);
    soundManager.playCardFlip();
  };

  // Rating in Flashcard Mode: Needs Review (repeats at end of current session)
  const handleRateNeedsReview = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (!currentItem || !currentCard) return;
    incrementDailyQuestionsAnswered(1);
    soundManager.playClick();

    const newQueue = [...sessionQueue];
    const card = newQueue.shift()!;
    card.selectedAnswer = null;
    card.isAnswered = false;
    card.isCorrect = false;
    newQueue.push(card);

    setIsFlipped(false);
    setCardSessionIndex(prev => prev + 1);
    setSessionQueue(newQueue);
  };

  // Rating in Flashcard Mode: Mastered (graduates card)
  const handleRateMastered = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (!currentItem || !currentCard) return;
    incrementDailyQuestionsAnswered(1);
    soundManager.playCompleteTask();

    const qid = currentCard.id;
    scheduleGraduatedFlashcard(qid, false);
    setGraduatedCount(prev => prev + 1);

    const newQueue = [...sessionQueue];
    newQueue.shift();

    setIsFlipped(false);
    setCardSessionIndex(prev => prev + 1);
    setSessionQueue(newQueue);

    if (newQueue.length === 0) {
      handleCompleteSession();
    }
  };

  const handleCompleteSession = () => {
    setViewState('completed');
    soundManager.playCompleteSession();

    // Mark today's task as complete
    if (sessionType === 'due') {
      setDailyTaskCompleted('reviewedFlashcards', true);
    } else if (sessionType === 'new') {
      setDailyTaskCompleted('learnedNew', true);
    } else {
      setDailyTaskCompleted('reviewedFlashcards', true);
      setDailyTaskCompleted('learnedNew', true);
    }

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleOpenExitConfirm = () => {
    soundManager.playClick();
    setShowExitConfirm(true);
  };

  const handleConfirmExitToSetup = () => {
    soundManager.playClick();
    setShowExitConfirm(false);
    setViewState('setup');
    setSessionQueue([]);
    setIsFlipped(false);
  };

  const handleConfirmExitToHome = () => {
    soundManager.playClick();
    setShowExitConfirm(false);
    setSessionQueue([]);
    setViewState('setup');
    setIsFlipped(false);
    if (onNavigateHome) {
      onNavigateHome();
    }
  };

  const handleCancelExit = () => {
    soundManager.playClick();
    setShowExitConfirm(false);
  };

  // Keyboard shortcut listener for options (A, B, C, D) / Flip (Space/F), ratings (1, 2, 3, 4 / R, M), and Escape for Exit
  useEffect(() => {
    if (viewState !== 'session') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape toggles exit confirmation
      if (e.key === 'Escape') {
        e.preventDefault();
        setShowExitConfirm(prev => !prev);
        return;
      }

      // If confirm modal is active, Enter confirms exit to setup
      if (showExitConfirm) {
        if (e.key === 'Enter') {
          handleConfirmExitToSetup();
        }
        return;
      }

      if (!currentItem) return;

      const key = e.key.toUpperCase();

      if (studyMode === 'flashcard') {
        if (e.key === ' ' || key === 'F') {
          e.preventDefault();
          handleFlipCard();
        } else if (isFlipped) {
          if (e.key === '1' || key === 'R') handleRateNeedsReview();
          if (e.key === '2' || key === 'M') handleRateMastered();
        }
      } else {
        if (!currentItem.isAnswered) {
          if (key === 'A' && currentCard?.choices[0]) handleSelectOption(currentCard.choices[0]);
          if (key === 'B' && currentCard?.choices[1]) handleSelectOption(currentCard.choices[1]);
          if (key === 'C' && currentCard?.choices[2]) handleSelectOption(currentCard.choices[2]);
          if (key === 'D' && currentCard?.choices[3]) handleSelectOption(currentCard.choices[3]);
        } else {
          if (e.key === '1' || key === 'B') handleRate('bad');
          if (e.key === '2' || key === 'O') handleRate('ok');
          if (e.key === '3' || key === 'G') handleRate('good');
          if (e.key === '4' || key === 'P') handleRate('perfect');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewState, studyMode, isFlipped, currentItem, currentCard, showExitConfirm]);

  // =========================================================================
  // RENDER: SETUP VIEW (Step 2 Dropdowns Flow)
  // =========================================================================
  if (viewState === 'setup') {
    return (
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-8 space-y-8">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 dark:from-amber-950/40 dark:via-orange-950/30 dark:to-stone-900 border border-orange-500/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-md">
              <Layers className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                Interactive Study System
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 tracking-tight mt-0.5">
                Spaced Repetition Flashcards
              </h1>
              <p className="text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-xl">
                Master authentic civil engineering terminologies and Table of Specifications (TOS) definitions with smart Leitner spaced repetition.
              </p>
            </div>
          </div>

          {onNavigateHome && (
            <button
              onClick={onNavigateHome}
              className="px-4 py-2 text-xs font-bold rounded-xl border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 transition"
            >
              Back to Dashboard
            </button>
          )}
        </div>

        {/* Quick Task Shortcuts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => {
              const due = getDueCards(questions, flashcardProgress);
              if (due.length > 0) {
                startSessionWithCards(due.slice(0, 30), 'due');
              } else {
                setCardFilterType('due');
              }
            }}
            className={`p-4 rounded-2xl border text-left transition flex items-center justify-between cursor-pointer ${
              cardFilterType === 'due'
                ? 'bg-orange-50 dark:bg-orange-950/40 border-orange-500 ring-2 ring-orange-500/20'
                : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-orange-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">Review Due Cards</h4>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  {getDueCards(questions, flashcardProgress).length} cards scheduled for today
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-orange-600 dark:text-orange-400">Select</span>
          </button>

          <button
            onClick={() => setCardFilterType('new')}
            className={`p-4 rounded-2xl border text-left transition flex items-center justify-between cursor-pointer ${
              cardFilterType === 'new'
                ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 ring-2 ring-amber-500/20'
                : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-amber-300'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100">Learn Something New</h4>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  {getNewCards(questions, flashcardProgress).length} unstudied cards available
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400">Select</span>
          </button>
        </div>

        {/* Study Mode Selector: Flashcard Mode vs Repetition Mode */}
        <div className="space-y-3">
          <label className="block text-xs font-bold text-stone-600 dark:text-stone-400 uppercase tracking-wider">
            Select Study Mode
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 1. Flashcard Mode */}
            <button
              type="button"
              onClick={() => setStudyMode('flashcard')}
              className={`p-5 rounded-2xl border text-left transition flex items-start space-x-4 cursor-pointer ${
                studyMode === 'flashcard'
                  ? 'bg-orange-50/70 dark:bg-orange-950/40 border-orange-500 ring-2 ring-orange-500/20 shadow-xs'
                  : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-orange-300'
              }`}
            >
              <div className={`p-3 rounded-2xl shrink-0 ${
                studyMode === 'flashcard'
                  ? 'bg-orange-500 text-white shadow-xs'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-500'
              }`}>
                <RotateCw className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h3 className="text-base font-extrabold text-stone-900 dark:text-stone-100">
                    Flashcard Mode
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300">
                    Traditional Flip
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Flip card to reveal the term and TOS definition behind. Rate as "Mastered" or "Needs Review".
                </p>
              </div>
            </button>

            {/* 2. Repetition Mode */}
            <button
              type="button"
              onClick={() => setStudyMode('repetition')}
              className={`p-5 rounded-2xl border text-left transition flex items-start space-x-4 cursor-pointer ${
                studyMode === 'repetition'
                  ? 'bg-amber-50/70 dark:bg-amber-950/40 border-amber-500 ring-2 ring-amber-500/20 shadow-xs'
                  : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-amber-300'
              }`}
            >
              <div className={`p-3 rounded-2xl shrink-0 ${
                studyMode === 'repetition'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-500'
              }`}>
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h3 className="text-base font-extrabold text-stone-900 dark:text-stone-100">
                    Repetition Mode
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                    Spaced Quiz
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Multiple-choice options with Bad, Ok, Good, Perfect ratings. Cards get repeated until graduated.
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* The 3 Sequential Dropdowns Form */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">Custom Study Configuration</h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">Select area, subtopic, and session volume to build your sessionQueue</p>
            </div>
            <span className="px-3 py-1 bg-stone-100 dark:bg-stone-800 rounded-full text-xs font-mono font-bold text-stone-600 dark:text-stone-300">
              {matchingQuestions.length} Matches
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* 1. Dropdown 1: Select Area */}
            <div>
              <label className="block text-xs font-bold text-stone-600 dark:text-stone-400 uppercase tracking-wider mb-2">
                1. Select Area
              </label>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value as any)}
                className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xl px-4 py-3 text-sm font-semibold text-stone-900 dark:text-stone-100 outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="ALL">All Board Areas (PSAD, HPGE, MSTE)</option>
                <option value="PSAD">PSAD — Structural Analysis & Design</option>
                <option value="HPGE">HPGE — Hydraulics & Geotechnical</option>
                <option value="MSTE">MSTE — Math, Surveying & Transportation</option>
              </select>
            </div>

            {/* 2. Dropdown 2: Select Subtopic */}
            <div>
              <label className="block text-xs font-bold text-stone-600 dark:text-stone-400 uppercase tracking-wider mb-2">
                2. Select Subtopic
              </label>
              <select
                value={selectedSubtopic}
                onChange={(e) => setSelectedSubtopic(e.target.value)}
                className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xl px-4 py-3 text-sm font-semibold text-stone-900 dark:text-stone-100 outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="ALL">All Subtopics ({availableSubtopics.length})</option>
                {availableSubtopics.map((sub, i) => (
                  <option key={i} value={sub}>{sub}</option>
                ))}
              </select>
            </div>

            {/* 3. Dropdown 3: Select Number of Terms */}
            <div>
              <label className="block text-xs font-bold text-stone-600 dark:text-stone-400 uppercase tracking-wider mb-2">
                3. Number of Terms
              </label>
              <select
                value={selectedCount}
                onChange={(e) => setSelectedCount(e.target.value === 'ALL' ? 'ALL' : Number(e.target.value))}
                className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 rounded-xl px-4 py-3 text-sm font-semibold text-stone-900 dark:text-stone-100 outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value={10}>10 Terms (Quick Session)</option>
                <option value={20}>20 Terms (Recommended)</option>
                <option value={50}>50 Terms (Intensive)</option>
                <option value="ALL">All Available Terms</option>
              </select>
            </div>
          </div>

          {/* Filter Type Pills */}
          <div>
            <label className="block text-xs font-bold text-stone-600 dark:text-stone-400 uppercase tracking-wider mb-2">
              Target Card Status
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setCardFilterType('all')}
                className={`py-2 px-3 rounded-xl text-xs font-bold border transition ${
                  cardFilterType === 'all'
                    ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 border-transparent shadow-xs'
                    : 'bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700'
                }`}
              >
                All Cards
              </button>
              <button
                type="button"
                onClick={() => setCardFilterType('new')}
                className={`py-2 px-3 rounded-xl text-xs font-bold border transition ${
                  cardFilterType === 'new'
                    ? 'bg-amber-600 text-white border-transparent shadow-xs'
                    : 'bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700'
                }`}
              >
                New Cards Only
              </button>
              <button
                type="button"
                onClick={() => setCardFilterType('due')}
                className={`py-2 px-3 rounded-xl text-xs font-bold border transition ${
                  cardFilterType === 'due'
                    ? 'bg-orange-600 text-white border-transparent shadow-xs'
                    : 'bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700'
                }`}
              >
                Due for Review Only
              </button>
            </div>
          </div>

          {/* Start Button */}
          <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
            <div className="text-xs text-stone-500 dark:text-stone-400">
              Queue will load <strong className="text-stone-900 dark:text-stone-100 font-bold">
                {selectedCount === 'ALL' ? matchingQuestions.length : Math.min(Number(selectedCount), matchingQuestions.length)}
              </strong> items for spaced repetition
            </div>
            <button
              onClick={handleStartSession}
              disabled={matchingQuestions.length === 0}
              className={`px-8 py-3.5 rounded-2xl font-bold text-sm shadow-md transition flex items-center space-x-2 ${
                matchingQuestions.length > 0
                  ? 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white cursor-pointer active:scale-95'
                  : 'bg-stone-200 dark:bg-stone-800 text-stone-400 dark:text-stone-600 cursor-not-allowed'
              }`}
            >
              <span>Start Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // RENDER: SESSION VIEW (Card UI & Spaced Repetition Queue Interaction)
  // =========================================================================
  if (viewState === 'session' && currentItem && currentCard) {
    const queueLength = sessionQueue.length;
    const progressPercent = Math.min(100, Math.round((graduatedCount / Math.max(1, initialQueueSize)) * 100));

    return (
      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
        
        {/* Top Session Progress Bar */}
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-4 shadow-xs flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={handleOpenExitConfirm}
              className="px-3 py-1.5 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-300 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 dark:hover:border-rose-800 text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer shadow-xs active:scale-95"
              title="Exit study session"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Exit</span>
            </button>
            <div className="text-xs font-mono font-bold text-stone-600 dark:text-stone-400">
              In Queue: <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">{queueLength}</span>
              <span className="text-stone-400 dark:text-stone-600 ml-2">·</span>
              <span className="ml-2 text-emerald-600 dark:text-emerald-400">Graduated: {graduatedCount}</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-36 sm:w-48 bg-stone-100 dark:bg-stone-800 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-orange-500 to-emerald-500 h-full transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {studyMode === 'flashcard' ? (
          /* ================================================================= */
          /* MODE 1: FLASHCARD MODE (Fluid 60 FPS 3D Flipping Card)            */
          /* ================================================================= */
          <div key={`${currentCard.id}-${cardSessionIndex}`} className="perspective-stage w-full">
            <div className={`card-3d-flipper card-3d-grid ${isFlipped ? 'is-flipped' : ''}`}>
              
              {/* CARD FRONT FACE */}
              <div className="card-3d-face card-3d-front bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all space-y-6 text-stone-900 dark:text-stone-100 flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Card Meta Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-4">
                    <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-800">
                        {currentCard.area}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 truncate max-w-[200px]">
                        {currentCard.subtopic}
                      </span>
                      <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500">
                        Difficulty: {currentCard.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1.5">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSpeak();
                        }}
                        className="p-2 rounded-xl text-stone-500 hover:text-orange-600 hover:bg-stone-100 dark:hover:bg-stone-800 transition"
                        title="Read aloud"
                      >
                        {isSpeaking ? <VolumeX className="w-4 h-4 text-orange-600" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleBookmark(currentCard.id);
                        }}
                        className={`p-2 rounded-xl transition ${
                          isBookmarked
                            ? 'text-orange-600 bg-orange-50 dark:bg-orange-950/60'
                            : 'text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                        }`}
                        title="Bookmark term"
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Question / Prompt */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider block">
                      Definition & Concept Prompt:
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-stone-100 leading-relaxed">
                      {currentCard.question}
                    </h2>
                  </div>

                  {currentCard.reference && (
                    <div className="text-xs text-stone-500 dark:text-stone-400 italic">
                      TOS Reference: {currentCard.reference}
                    </div>
                  )}
                </div>

                {/* Tactile Flip Action Banner */}
                <button
                  type="button"
                  onClick={handleFlipCard}
                  className="w-full mt-6 py-7 px-4 rounded-2xl border-2 border-dashed border-orange-300 dark:border-orange-800/80 bg-orange-50/50 dark:bg-orange-950/20 hover:bg-orange-100/60 dark:hover:bg-orange-950/40 text-orange-700 dark:text-orange-300 font-bold text-sm transition flex flex-col items-center justify-center space-y-2 cursor-pointer group active:scale-[0.99] shadow-xs"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-md group-hover:rotate-180 transition-transform duration-500">
                    <RotateCw className="w-5 h-5" />
                  </div>
                  <span className="tracking-wide">Click or Tap to Flip Card & Reveal Term</span>
                  <span className="text-[11px] font-mono text-orange-500/80 dark:text-orange-400/80">[Press Space or F]</span>
                </button>
              </div>

              {/* CARD BACK FACE */}
              <div className="card-3d-face card-3d-back bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all space-y-6 text-stone-900 dark:text-stone-100 flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Back Meta Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-4">
                    <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-800">
                        {currentCard.area}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 truncate max-w-[200px]">
                        {currentCard.subtopic}
                      </span>
                      <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500">
                        Difficulty: {currentCard.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={handleFlipCard}
                        className="px-2.5 py-1 rounded-xl text-xs font-bold text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/40 border border-orange-200 dark:border-orange-800 transition flex items-center space-x-1 cursor-pointer"
                        title="Flip back to prompt"
                      >
                        <RotateCw className="w-3.5 h-3.5" />
                        <span>Flip Back</span>
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSpeak();
                        }}
                        className="p-2 rounded-xl text-stone-500 hover:text-orange-600 hover:bg-stone-100 dark:hover:bg-stone-800 transition"
                        title="Read aloud"
                      >
                        {isSpeaking ? <VolumeX className="w-4 h-4 text-orange-600" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleBookmark(currentCard.id);
                        }}
                        className={`p-2 rounded-xl transition ${
                          isBookmarked
                            ? 'text-orange-600 bg-orange-50 dark:bg-orange-950/60'
                            : 'text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                        }`}
                        title="Bookmark term"
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Revealed Term Box */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/5 border border-orange-500/30">
                    <span className="text-[11px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider block">
                      Answer Term:
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-stone-100 mt-1">
                      {currentCard.answer}
                    </h2>
                  </div>

                  {/* Explanation & Board Context */}
                  <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-2">
                    <div className="flex items-center space-x-2 text-xs font-bold text-stone-700 dark:text-stone-300">
                      <BookOpen className="w-4 h-4 text-orange-500" />
                      <span>Explanation & Board Context:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                      {currentCard.explanation}
                    </p>
                    {currentCard.reference && (
                      <div className="text-[11px] text-stone-400 dark:text-stone-500 italic pt-1 border-t border-stone-200/50 dark:border-stone-700/50">
                        Ref: {currentCard.reference}
                      </div>
                    )}
                  </div>
                </div>

                {/* Rating Buttons in Flashcard Mode: Mastered or Needs Review */}
                <div className="pt-4 border-t border-stone-100 dark:border-stone-800 space-y-2">
                  <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider block text-center">
                    Rate your recall for this term:
                  </span>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Needs Review */}
                    <button
                      type="button"
                      onClick={(e) => handleRateNeedsReview(e)}
                      className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-900/60 hover:bg-rose-100 dark:hover:bg-rose-900/50 text-rose-800 dark:text-rose-300 transition text-center shadow-xs cursor-pointer active:scale-95 flex flex-col items-center justify-center space-y-1 relative z-20"
                    >
                      <div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900 text-rose-600 dark:text-rose-300 flex items-center justify-center">
                        <RotateCcw className="w-4 h-4" />
                      </div>
                      <div className="font-extrabold text-sm sm:text-base">Needs Review</div>
                      <div className="text-[10px] text-rose-600 dark:text-rose-400 leading-tight">
                        Keep studying (repeats at end of session)
                      </div>
                      <span className="text-[9px] font-mono text-rose-400">[Press 1 or R]</span>
                    </button>

                    {/* Mastered */}
                    <button
                      type="button"
                      onClick={(e) => handleRateMastered(e)}
                      className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-900/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 transition text-center shadow-xs cursor-pointer active:scale-95 flex flex-col items-center justify-center space-y-1 relative z-20"
                    >
                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="font-extrabold text-sm sm:text-base">Mastered</div>
                      <div className="text-[10px] text-emerald-600 dark:text-emerald-400 leading-tight">
                        Learned! Graduate & schedule future review
                      </div>
                      <span className="text-[9px] font-mono text-emerald-400">[Press 2 or M]</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* ================================================================= */
          /* MODE 2: REPETITION MODE (Multiple-Choice Leitner Queue UI)        */
          /* ================================================================= */
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 shadow-md space-y-6 text-stone-900 dark:text-stone-100 relative">
            {/* Card Meta Header */}
            <div className="flex items-center justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-4">
              <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-800">
                  {currentCard.area}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 truncate max-w-[200px]">
                  {currentCard.subtopic}
                </span>
                <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500">
                  Difficulty: {currentCard.difficulty}
                </span>
              </div>

              <div className="flex items-center space-x-1.5">
                <button
                  type="button"
                  onClick={handleSpeak}
                  className="p-2 rounded-xl text-stone-500 hover:text-orange-600 hover:bg-stone-100 dark:hover:bg-stone-800 transition"
                  title="Read aloud"
                >
                  {isSpeaking ? <VolumeX className="w-4 h-4 text-orange-600" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={() => onToggleBookmark(currentCard.id)}
                  className={`p-2 rounded-xl transition ${
                    isBookmarked
                      ? 'text-orange-600 bg-orange-50 dark:bg-orange-950/60'
                      : 'text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                  }`}
                  title="Bookmark term"
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {/* Question / Term Definition at Top of Card */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider block">
                  Identify the Term or Concept:
                </span>
                <h2 className="text-lg sm:text-xl font-bold leading-relaxed text-stone-900 dark:text-stone-100">
                  {currentCard.question}
                </h2>
              </div>

              {/* Multiple-Choice Options */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider block">
                  Select the correct term:
                </span>

                <div className="grid grid-cols-1 gap-2.5">
                  {currentCard.choices.map((choice, idx) => {
                    const letter = ['A', 'B', 'C', 'D'][idx];
                    const isSelected = currentItem.selectedAnswer === choice;
                    const isCorrect = choice === currentCard.answer;

                    let btnStyle = 'bg-stone-50 dark:bg-stone-800/80 border-stone-200 dark:border-stone-700 hover:border-orange-400 hover:bg-orange-50/50 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200';

                    if (currentItem.isAnswered) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold ring-2 ring-emerald-500/20';
                      } else if (isSelected && !isCorrect) {
                        btnStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-200 font-bold ring-2 ring-rose-500/20';
                      } else {
                        btnStyle = 'bg-stone-50/50 dark:bg-stone-800/40 border-stone-200 dark:border-stone-800 text-stone-400 dark:text-stone-600';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={currentItem.isAnswered}
                        onClick={() => handleSelectOption(choice)}
                        className={`w-full p-4 rounded-2xl border text-left transition flex items-center justify-between gap-3 text-sm font-medium ${btnStyle} ${
                          !currentItem.isAnswered ? 'cursor-pointer active:scale-98' : 'cursor-default'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                            currentItem.isAnswered && isCorrect
                              ? 'bg-emerald-500 text-white'
                              : currentItem.isAnswered && isSelected && !isCorrect
                              ? 'bg-rose-500 text-white'
                              : 'bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300'
                          }`}>
                            {letter}
                          </span>
                          <span>{choice}</span>
                        </div>

                        {currentItem.isAnswered && isCorrect && (
                          <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Explanation & Reference revealed upon answer */}
              {currentItem.isAnswered && (
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-2 animate-fade-in">
                  <div className="flex items-center space-x-2 text-xs font-bold text-stone-700 dark:text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Correct Term: <strong>{currentCard.answer}</strong></span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    {currentCard.explanation}
                  </p>
                  {currentCard.reference && (
                    <div className="text-[11px] text-stone-400 dark:text-stone-500 italic pt-1 border-t border-stone-200/50 dark:border-stone-700/50">
                      Ref: {currentCard.reference}
                    </div>
                  )}
                </div>
              )}

              {/* Rating Buttons revealed immediately after user selects an answer */}
              {currentItem.isAnswered && (
                <div className="pt-4 border-t border-stone-100 dark:border-stone-800 space-y-3">
                  <div className="text-center">
                    <span className="text-xs font-bold text-stone-600 dark:text-stone-400 uppercase tracking-wider">
                      How well did you know this term? (Rate to proceed)
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {/* 1. Bad */}
                    <button
                      onClick={() => handleRate('bad')}
                      className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-900/60 hover:bg-rose-100 dark:hover:bg-rose-900/50 text-rose-800 dark:text-rose-300 transition text-center shadow-xs cursor-pointer active:scale-95"
                    >
                      <div className="font-extrabold text-sm sm:text-base">Bad</div>
                      <div className="text-[10px] text-rose-600 dark:text-rose-400 mt-0.5 leading-tight">
                        Forgot (repeats in 4 cards)
                      </div>
                      <span className="text-[9px] font-mono text-rose-400 block mt-1">[Key 1]</span>
                    </button>

                    {/* 2. Ok */}
                    <button
                      onClick={() => handleRate('ok')}
                      className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-900/60 hover:bg-amber-100 dark:hover:bg-amber-900/50 text-amber-800 dark:text-amber-300 transition text-center shadow-xs cursor-pointer active:scale-95"
                    >
                      <div className="font-extrabold text-sm sm:text-base">Ok</div>
                      <div className="text-[10px] text-amber-600 dark:text-amber-400 mt-0.5 leading-tight">
                        Struggled (repeats at end)
                      </div>
                      <span className="text-[9px] font-mono text-amber-400 block mt-1">[Key 2]</span>
                    </button>

                    {/* 3. Good */}
                    <button
                      onClick={() => handleRate('good')}
                      className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-300 dark:border-blue-900/60 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-800 dark:text-blue-300 transition text-center shadow-xs cursor-pointer active:scale-95"
                    >
                      <div className="font-extrabold text-sm sm:text-base">Good</div>
                      <div className="text-[10px] text-blue-600 dark:text-blue-400 mt-0.5 leading-tight">
                        {currentItem.timesGood === 0 ? 'Got it (1 more to graduate)' : 'Learned (+1 day interval)'}
                      </div>
                      <span className="text-[9px] font-mono text-blue-400 block mt-1">[Key 3]</span>
                    </button>

                    {/* 4. Perfect */}
                    <button
                      onClick={() => handleRate('perfect')}
                      className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-900/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 transition text-center shadow-xs cursor-pointer active:scale-95"
                    >
                      <div className="font-extrabold text-sm sm:text-base">Perfect</div>
                      <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5 leading-tight">
                        Too easy (graduates & stacks)
                      </div>
                      <span className="text-[9px] font-mono text-emerald-400 block mt-1">[Key 4]</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Interactive In-App Confirmation Modal Dialog when clicking Exit */}
        {showExitConfirm && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-modal-title"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
            onClick={handleCancelExit}
          >
            <div
              className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl space-y-5 text-stone-900 dark:text-stone-100 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={handleCancelExit}
                className="absolute top-5 right-5 p-2 rounded-xl text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title & Icon */}
              <div className="flex items-start space-x-4 pr-6">
                <div className="p-3 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 shrink-0 shadow-xs">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 id="exit-modal-title" className="text-lg font-extrabold text-stone-900 dark:text-stone-100 leading-snug">
                    Exit Flashcard Session?
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    Are you sure you want to leave this session? Any cards you have already graduated today are safely preserved in your spaced repetition memory.
                  </p>
                </div>
              </div>

              {/* Session Stats Summary */}
              <div className="bg-stone-50 dark:bg-stone-800/70 rounded-2xl p-4 text-xs space-y-2 border border-stone-200/60 dark:border-stone-700/60">
                <div className="flex justify-between items-center text-stone-700 dark:text-stone-300 font-semibold">
                  <span className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Graduated cards today:</span>
                  </span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
                    {graduatedCount} cards saved
                  </span>
                </div>
                <div className="flex justify-between items-center text-stone-700 dark:text-stone-300 font-semibold">
                  <span className="flex items-center space-x-1.5">
                    <Layers className="w-4 h-4 text-orange-500" />
                    <span>Remaining in active queue:</span>
                  </span>
                  <span className="font-mono font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/60 px-2 py-0.5 rounded-md border border-orange-200 dark:border-orange-800">
                    {sessionQueue.length} cards
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 dark:text-stone-400 pt-1 leading-normal">
                  Exiting resets only the uncompleted cards currently in this session.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleConfirmExitToSetup}
                  className="w-full py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm transition shadow-sm cursor-pointer flex items-center justify-center space-x-2 active:scale-95"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Yes, Exit to Flashcard Setup</span>
                </button>

                {onNavigateHome && (
                  <button
                    type="button"
                    onClick={handleConfirmExitToHome}
                    className="w-full py-2.5 px-4 rounded-xl border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 font-bold text-xs transition cursor-pointer flex items-center justify-center space-x-2 active:scale-95"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>Exit to Home Dashboard</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleCancelExit}
                  className="w-full py-2.5 px-4 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 font-bold text-xs transition cursor-pointer active:scale-95"
                >
                  Cancel (Keep Studying)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // RENDER: COMPLETED VIEW
  // =========================================================================
  return (
    <div className="max-w-xl mx-auto w-full px-4 sm:px-6 py-12 text-center space-y-6">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-8 shadow-xl space-y-6 text-stone-900 dark:text-stone-100">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center mx-auto shadow-lg">
          <Award className="w-10 h-10" />
        </div>

        <div className="space-y-1">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
            Session Completed
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Outstanding Review Session!
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 max-w-sm mx-auto">
            You successfully cleared your flashcard queue. Graduated cards have been scheduled with continuous stacked intervals in localStorage.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 py-3 border-y border-stone-100 dark:border-stone-800">
          <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60">
            <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase">Cards Graduated</span>
            <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono mt-1">
              {graduatedCount}
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60">
            <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase">Task Status</span>
            <div className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-2 flex items-center justify-center space-x-1 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Marked Done</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => setViewState('setup')}
            className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm transition shadow-sm cursor-pointer"
          >
            Study More Terms
          </button>
          {onNavigateHome && (
            <button
              onClick={onNavigateHome}
              className="px-6 py-3 rounded-xl border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 font-bold text-xs sm:text-sm transition cursor-pointer"
            >
              Return to Home Dashboard
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
