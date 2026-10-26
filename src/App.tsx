import React, { useState, useEffect, useMemo } from 'react';
import {
  CEQuestion,
  ExamConfig,
  ExamSessionResult,
  FlashcardProgress,
  FlashcardMasteryStatus,
  UserProfile
} from './types';
import { CE_QUESTIONS_MASTER } from './data/questions';
import {
  getExamHistory,
  saveExamResult,
  getFlashcardProgress,
  updateFlashcardStatus,
  getAchievements,
  evaluateAchievements,
  getUserStats,
  getBookmarks,
  toggleBookmark,
  getThemeMode,
  saveThemeMode,
  getUserProfile,
  saveUserProfile,
  getCustomQuestions,
  addCustomQuestions,
  getRecentlyAddedQuestions,
  deleteSelectedCustomQuestions,
  deleteAllRecentlyAdded,
  deleteCustomQuestion,
  getActiveThemeId,
  saveActiveThemeId,
  getDistractionFree,
  saveDistractionFree,
  resetThemeAndSoundSettings,
  getDueCards,
  getNewCards,
  setDailyTaskCompleted,
  incrementDailyQuestionsAnswered,
  requestPersistentStorage
} from './utils/storage';
import { Header, AppTab } from './components/Header';
import { HomeScreen } from './components/HomeScreen';
import { ExamSetup } from './components/ExamSetup';
import { ExamActive } from './components/ExamActive';
import { ExamResults } from './components/ExamResults';
import { FlashcardsView } from './components/FlashcardsView';
import { FormulasView } from './components/FormulasView';
import { DictionaryView } from './components/DictionaryView';
import { AnalyticsView } from './components/AnalyticsView';
import { AchievementsView } from './components/AchievementsView';
import { ThemesView } from './components/ThemesView';
import { ThemeId, THEMES_DATA, DEFAULT_THEME_ID, getThemePalette } from './types/theme';
import { soundManager } from './utils/audio';
import { WaterRippleEffect } from './components/WaterRippleEffect';
import { LiveBackground } from './components/LiveBackground';
import { PdfScannerModal } from './components/PdfScannerModal';
import { RecentlyAddedModal } from './components/RecentlyAddedModal';
import { MoreAppsModal } from './components/MoreAppsModal';
import { AlertTriangle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [examStage, setExamStage] = useState<'setup' | 'active' | 'results'>('setup');
  
  // Theme state: Day (light) vs Night (dark)
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>(getThemeMode);

  // Personality Themes and Sound Packs
  const [activeThemeId, setActiveThemeId] = useState<ThemeId>(getActiveThemeId);
  const [previewThemeId, setPreviewThemeId] = useState<ThemeId | null>(null);
  const [isDistractionFree, setIsDistractionFree] = useState<boolean>(getDistractionFree);

  // User Profile
  const [profile, setProfile] = useState<UserProfile>(getUserProfile);

  // Exam Configuration
  const [config, setConfig] = useState<ExamConfig>({
    area: 'ALL',
    subtopic: 'ALL',
    difficulty: 'ALL',
    count: 50,
    timeLimitMinutes: 45,
    feedbackMode: 'delayed'
  });

  // Active exam session variables
  const [activeQuestions, setActiveQuestions] = useState<CEQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [flaggedIds, setFlaggedIds] = useState<number[]>([]);
  const [latestResult, setLatestResult] = useState<ExamSessionResult | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [pendingTabSwitch, setPendingTabSwitch] = useState<AppTab | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 3500);
  };

  const handleTabSwitchRequest = (tab: AppTab) => {
    if (examStage === 'active' && tab !== 'exam') {
      setPendingTabSwitch(tab);
    } else {
      setActiveTab(tab);
    }
  };

  // Persistent stats
  const [flashcardProgress, setFlashcardProgress] = useState<FlashcardProgress>(getFlashcardProgress);
  const [achievements, setAchievements] = useState(getAchievements);
  const [bookmarks, setBookmarks] = useState<number[]>(getBookmarks);
  const [examHistory, setExamHistory] = useState<ExamSessionResult[]>(getExamHistory);

  // True Fisher-Yates (Knuth) uniform shuffle to prevent repeating items
  const fisherYatesShuffle = <T,>(array: T[]): T[] => {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  // Request persistent IndexedDB / localStorage on iOS Safari & modern browsers
  useEffect(() => {
    requestPersistentStorage();
  }, []);

  // Synchronize theme with <html> and <body> elements
  useEffect(() => {
    saveThemeMode(themeMode);
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark');
      document.body.setAttribute('data-theme', 'dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      document.body.classList.remove('dark');
      document.body.setAttribute('data-theme', 'light');
      document.documentElement.style.colorScheme = 'light';
    }
  }, [themeMode]);

  // Synchronize personality theme, day/night mode, and distraction-free mode
  useEffect(() => {
    const effectiveTheme = previewThemeId || activeThemeId;
    const palette = getThemePalette(effectiveTheme, themeMode);

    document.documentElement.setAttribute('data-personality-theme', effectiveTheme);
    document.body.setAttribute('data-personality-theme', effectiveTheme);
    document.documentElement.setAttribute('data-distraction-free', String(isDistractionFree));
    document.body.setAttribute('data-distraction-free', String(isDistractionFree));

    // Dynamically inject CSS variables onto document.documentElement for instant synchronization
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty('--theme-canvas-bg', palette.canvasBg);
    rootStyle.setProperty('--theme-card-bg', palette.cardSurface);
    rootStyle.setProperty('--theme-card-elevated', palette.elevatedSurface);
    rootStyle.setProperty('--theme-border', palette.border);
    rootStyle.setProperty('--theme-primary', palette.primary);
    rootStyle.setProperty('--theme-primary-hover', palette.primaryHover);
    rootStyle.setProperty('--theme-primary-soft', palette.accentSoft);
    rootStyle.setProperty('--theme-text-primary', palette.textPrimary);
    rootStyle.setProperty('--theme-text-muted', palette.textMuted);
    rootStyle.setProperty('--theme-accent', palette.accent);
    rootStyle.setProperty('--theme-header-bg', palette.headerBg);
    rootStyle.setProperty('--theme-footer-bg', palette.footerBg);

    // Also update document.body background
    document.body.style.backgroundColor = palette.canvasBg;
    document.body.style.color = palette.textPrimary;

    soundManager.setTheme(effectiveTheme);
  }, [activeThemeId, previewThemeId, isDistractionFree, themeMode]);

  const handleApplyTheme = (id: ThemeId) => {
    saveActiveThemeId(id);
    setActiveThemeId(id);
    setPreviewThemeId(null);
    soundManager.playGoalReached(id);
    const themeObj = THEMES_DATA.find(t => t.id === id);
    showToast(`Applied ${themeObj?.name || 'Theme'}`);
  };

  const handlePreviewTheme = (id: ThemeId | null) => {
    setPreviewThemeId(id);
    if (id) {
      soundManager.previewSoundPack(id);
    }
  };

  const handleToggleDistractionFree = (enabled: boolean) => {
    saveDistractionFree(enabled);
    setIsDistractionFree(enabled);
    soundManager.playClick();
    showToast(enabled ? 'Distraction-free mode enabled' : 'Distraction-free mode disabled');
  };

  const handleResetThemeDefaults = () => {
    resetThemeAndSoundSettings();
    setActiveThemeId(DEFAULT_THEME_ID);
    setPreviewThemeId(null);
    setIsDistractionFree(false);
    soundManager.playCompleteTask(DEFAULT_THEME_ID);
    showToast('Theme and sound settings restored to defaults');
  };

  // Streak update synchronization
  const [streakVersion, setStreakVersion] = useState<number>(0);
  const [customQuestions, setCustomQuestions] = useState<CEQuestion[]>(getCustomQuestions);
  const [isPdfScannerOpen, setIsPdfScannerOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleStreakUpdate = () => {
      setStreakVersion(v => v + 1);
    };
    window.addEventListener('cele_streak_updated', handleStreakUpdate);
    return () => {
      window.removeEventListener('cele_streak_updated', handleStreakUpdate);
    };
  }, []);

  useEffect(() => {
    const handleCustomUpdate = () => {
      setCustomQuestions(getCustomQuestions());
    };
    window.addEventListener('cele_custom_questions_updated', handleCustomUpdate);
    return () => {
      window.removeEventListener('cele_custom_questions_updated', handleCustomUpdate);
    };
  }, []);

  useEffect(() => {
    const handleProgressUpdate = () => {
      setFlashcardProgress(getFlashcardProgress());
    };
    window.addEventListener('cele_flashcard_progress_updated', handleProgressUpdate);
    return () => {
      window.removeEventListener('cele_flashcard_progress_updated', handleProgressUpdate);
    };
  }, []);

  // Combined active question pool: authentic TOS master + custom scanned terms
  const allQuestions = useMemo(() => {
    return [...CE_QUESTIONS_MASTER, ...customQuestions];
  }, [customQuestions]);

  const [isRecentlyAddedOpen, setIsRecentlyAddedOpen] = useState<boolean>(false);
  const [isMoreAppsOpen, setIsMoreAppsOpen] = useState<boolean>(false);

  // Detect all terms added by users excluding those already in the data bank
  const recentlyAddedQuestions = useMemo(() => {
    return getRecentlyAddedQuestions();
  }, [customQuestions]);

  const handleDeleteSelectedRecentlyAdded = (ids: number[]) => {
    const updated = deleteSelectedCustomQuestions(ids);
    setCustomQuestions(updated);
  };

  const handleDeleteAllRecentlyAdded = () => {
    const updated = deleteAllRecentlyAdded();
    setCustomQuestions(updated);
  };

  const handleDeleteSingleCustomTerm = (id: number) => {
    const updated = deleteCustomQuestion(id);
    setCustomQuestions(updated);
  };

  // Derived user stats
  const userStats = useMemo(() => {
    return getUserStats(allQuestions);
  }, [examHistory, flashcardProgress, streakVersion, allQuestions]);

  // Total mastered flashcards
  const masteredCount = useMemo(() => {
    return Object.values(flashcardProgress).filter(p => p.status === 'mastered').length;
  }, [flashcardProgress]);

  // Spaced Repetition Due and New card counts for Tasks Today
  const dueCardsCount = useMemo(() => {
    return getDueCards(allQuestions, flashcardProgress).length;
  }, [allQuestions, flashcardProgress]);

  const newCardsCount = useMemo(() => {
    return getNewCards(allQuestions, flashcardProgress).length;
  }, [allQuestions, flashcardProgress]);

  const [flashcardsInitialMode, setFlashcardsInitialMode] = useState<'setup' | 'due' | 'new'>('setup');

  const handleStartDueFlashcards = () => {
    setFlashcardsInitialMode('due');
    setActiveTab('flashcards');
  };

  const handleStartNewFlashcardsSetup = () => {
    setFlashcardsInitialMode('new');
    setActiveTab('flashcards');
  };

  // Handle profile update
  const handleUpdateProfile = (updated: UserProfile) => {
    setProfile(updated);
    saveUserProfile(updated);
  };

  // Start Exam with Fisher-Yates uniform shuffle
  const handleStartExam = () => {
    let pool = allQuestions.filter(q => {
      if (config.area !== 'ALL' && q.area !== config.area) return false;
      if (config.subtopic !== 'ALL' && q.subtopic !== config.subtopic) return false;
      if (config.difficulty !== 'ALL' && q.difficulty !== config.difficulty) return false;
      return true;
    });

    if (pool.length === 0) {
      showToast('No questions matched selected criteria. Loading all items in area.');
      pool = allQuestions.filter(q => config.area === 'ALL' || q.area === config.area);
    }

    const shuffled = fisherYatesShuffle(pool);
    const finalSelection = shuffled.slice(0, Math.min(config.count, shuffled.length));

    setActiveQuestions(finalSelection);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setFlaggedIds([]);
    setExamStage('active');
  };

  // Quick preset trigger
  const handleQuickPreset = (preset: Partial<ExamConfig>) => {
    setConfig(prev => ({ ...prev, ...preset }));
  };

  // Start Quick Exam from Home Screen
  const handleStartQuickExam = (area: 'ALL' | 'PSAD' | 'HPGE' | 'MSTE') => {
    setConfig({
      area,
      subtopic: 'ALL',
      difficulty: 'ALL',
      count: 20,
      timeLimitMinutes: 25,
      feedbackMode: 'delayed'
    });
    setActiveTab('exam');
    setExamStage('setup');
  };

  // Finish exam
  const handleFinishExam = (timeSpentSeconds: number) => {
    let correctCount = 0;
    activeQuestions.forEach(q => {
      if (userAnswers[q.id] === q.answer) {
        correctCount++;
      }
    });

    const percentage = Math.round((correctCount / activeQuestions.length) * 100);
    const result: ExamSessionResult = {
      id: `exam_${Date.now()}`,
      timestamp: Date.now(),
      area: config.area,
      subtopic: config.subtopic,
      difficulty: config.difficulty,
      totalQuestions: activeQuestions.length,
      correctAnswers: correctCount,
      percentage,
      timeSpentSeconds,
      timeLimitMinutes: config.timeLimitMinutes,
      userAnswers: { ...userAnswers },
      flaggedIds: [...flaggedIds],
      questionIds: activeQuestions.map(q => q.id),
      passed: percentage >= 70
    };

    saveExamResult(result);
    setLatestResult(result);
    setExamHistory(getExamHistory());

    // Mark daily task completed and track questions answered
    setDailyTaskCompleted('tookMockExam', true);
    incrementDailyQuestionsAnswered(activeQuestions.length);

    const { achievements: updatedBadges } = evaluateAchievements(result, CE_QUESTIONS_MASTER);
    setAchievements(updatedBadges);

    setExamStage('results');
  };

  // Retake missed questions only
  const handleRetakeMissed = () => {
    if (!latestResult) return;
    const missedQuestions = activeQuestions.filter(
      q => latestResult.userAnswers[q.id] !== q.answer
    );

    if (missedQuestions.length === 0) {
      showToast('All questions answered correctly! Starting new assessment.');
      setExamStage('setup');
      return;
    }

    setActiveQuestions(missedQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setFlaggedIds([]);
    setExamStage('active');
  };

  // Retake full exam
  const handleRetakeAll = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setFlaggedIds([]);
    setExamStage('active');
  };

  // Practice specific weak area from analytics
  const handlePracticeWeakArea = (subtopic: string) => {
    const matchedArea = CE_QUESTIONS_MASTER.find(q => q.subtopic === subtopic)?.area || 'ALL';
    setConfig({
      area: matchedArea,
      subtopic: subtopic,
      difficulty: 'ALL',
      count: 20,
      timeLimitMinutes: 25,
      feedbackMode: 'immediate'
    });
    setActiveTab('exam');
    setExamStage('setup');
  };

  // Retake past exam from history
  const handleRetakePastExam = (pastResult: ExamSessionResult) => {
    const qMap = new Map<number, CEQuestion>();
    CE_QUESTIONS_MASTER.forEach(q => qMap.set(q.id, q));
    const loadedQuestions = pastResult.questionIds
      .map(id => qMap.get(id))
      .filter((q): q is CEQuestion => q !== undefined);

    if (loadedQuestions.length === 0) return;
    setActiveQuestions(loadedQuestions);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setFlaggedIds([]);
    setConfig(prev => ({
      ...prev,
      area: pastResult.area,
      subtopic: pastResult.subtopic,
      timeLimitMinutes: pastResult.timeLimitMinutes
    }));
    setActiveTab('exam');
    setExamStage('active');
  };

  // Update flashcard status
  const handleUpdateFlashcardStatus = (qid: number, status: FlashcardMasteryStatus) => {
    const updated = updateFlashcardStatus(qid, status);
    setFlashcardProgress({ ...updated });
    const { achievements: updatedBadges } = evaluateAchievements(undefined, CE_QUESTIONS_MASTER);
    setAchievements(updatedBadges);
  };

  // Toggle bookmark
  const handleToggleBookmark = (qid: number) => {
    const updated = toggleBookmark(qid);
    setBookmarks([...updated]);
  };

  return (
    <div
      data-theme-root
      className="min-h-screen min-h-dvh flex flex-col font-sans transition-colors selection:bg-orange-500 selection:text-white relative"
      style={{
        backgroundColor: 'var(--theme-canvas-bg, #FAF6F0)',
        color: 'var(--theme-text-primary, #1C1917)'
      }}
    >
      {/* Live Background with Moving Multi-Colored Shapes Hovering in Background */}
      <LiveBackground distractionFree={isDistractionFree} />

      {/* Water Ripple Waves Effect Triggered on Touching/Clicking Buttons, Pages, Cards */}
      <WaterRippleEffect />

      <div className="relative z-10 min-h-screen min-h-dvh flex flex-col">
        {/* Top Header with Progressively Collapsing Menu */}
        <Header
          activeTab={activeTab}
          setActiveTab={handleTabSwitchRequest}
          themeMode={themeMode}
          setThemeMode={setThemeMode}
          masteredCount={masteredCount}
          totalCount={allQuestions.length}
          isExamInProgress={examStage === 'active'}
          onOpenRecentlyAdded={() => setIsRecentlyAddedOpen(true)}
          recentlyAddedCount={recentlyAddedQuestions.length}
          onOpenMoreApps={() => setIsMoreAppsOpen(true)}
        />

        {/* Main Body Stage */}
        <main className="flex-1 flex flex-col pb-safe">
          {activeTab === 'home' && (
            <HomeScreen
              profile={profile}
              onUpdateProfile={handleUpdateProfile}
              stats={userStats}
              totalQuestionsCount={allQuestions.length}
              onNavigateTab={handleTabSwitchRequest}
              onStartQuickExam={handleStartQuickExam}
              onStartDueFlashcards={handleStartDueFlashcards}
              onStartNewFlashcardsSetup={handleStartNewFlashcardsSetup}
              dueCardsCount={dueCardsCount}
              newCardsCount={newCardsCount}
              onOpenPdfScanner={() => setIsPdfScannerOpen(true)}
              onOpenRecentlyAdded={() => setIsRecentlyAddedOpen(true)}
              recentlyAddedCount={recentlyAddedQuestions.length}
              onOpenMoreApps={() => setIsMoreAppsOpen(true)}
            />
          )}

        {activeTab === 'exam' && (
          <>
            {examStage === 'setup' && (
              <ExamSetup
                questions={allQuestions}
                config={config}
                setConfig={setConfig}
                onStartExam={handleStartExam}
                onQuickPreset={handleQuickPreset}
              />
            )}

            {examStage === 'active' && (
              <ExamActive
                questions={activeQuestions}
                currentIndex={currentQuestionIndex}
                setCurrentIndex={setCurrentQuestionIndex}
                userAnswers={userAnswers}
                setUserAnswers={setUserAnswers}
                flaggedIds={flaggedIds}
                setFlaggedIds={setFlaggedIds}
                feedbackMode={config.feedbackMode}
                timeLimitMinutes={config.timeLimitMinutes}
                onFinishExam={handleFinishExam}
              />
            )}

            {examStage === 'results' && latestResult && (
              <ExamResults
                result={latestResult}
                questions={allQuestions}
                onRetakeAll={handleRetakeAll}
                onRetakeMissed={handleRetakeMissed}
                onNewExam={() => setExamStage('setup')}
              />
            )}
          </>
        )}

        {activeTab === 'flashcards' && (
          <FlashcardsView
            questions={allQuestions}
            flashcardProgress={flashcardProgress}
            onUpdateStatus={handleUpdateFlashcardStatus}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
            initialMode={flashcardsInitialMode}
            onNavigateHome={() => setActiveTab('home')}
          />
        )}

        {activeTab === 'formulas' && (
          <FormulasView onNavigateHome={() => setActiveTab('home')} />
        )}

        {activeTab === 'dictionary' && (
          <DictionaryView
            questions={allQuestions}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
            onOpenPdfScanner={() => setIsPdfScannerOpen(true)}
            onOpenRecentlyAdded={() => setIsRecentlyAddedOpen(true)}
            recentlyAddedCount={recentlyAddedQuestions.length}
            onDeleteCustomTerm={handleDeleteSingleCustomTerm}
          />
        )}

        {activeTab === 'analytics' && (
          <AnalyticsView
            stats={userStats}
            history={examHistory}
            questions={allQuestions}
            onPracticeWeakArea={handlePracticeWeakArea}
            onRetakePastExam={handleRetakePastExam}
          />
        )}

        {activeTab === 'achievements' && (
          <AchievementsView achievements={achievements} />
        )}

        {activeTab === 'themes' && (
          <ThemesView
            currentThemeId={activeThemeId}
            previewThemeId={previewThemeId}
            onApplyTheme={handleApplyTheme}
            onPreviewTheme={handlePreviewTheme}
            isDistractionFree={isDistractionFree}
            onToggleDistractionFree={handleToggleDistractionFree}
            onResetDefaults={handleResetThemeDefaults}
            themeMode={themeMode}
            setThemeMode={setThemeMode}
          />
        )}
      </main>

      {/* PDF Scanner & Terminology Importer Modal */}
      <PdfScannerModal
        isOpen={isPdfScannerOpen}
        onClose={() => setIsPdfScannerOpen(false)}
        onAddTerms={(newTerms) => {
          const updated = addCustomQuestions(newTerms);
          setCustomQuestions(updated);
        }}
        existingCount={allQuestions.length}
      />

      {/* Recently Added Terms Manager Modal */}
      <RecentlyAddedModal
        isOpen={isRecentlyAddedOpen}
        onClose={() => setIsRecentlyAddedOpen(false)}
        recentlyAddedQuestions={recentlyAddedQuestions}
        onDeleteSelected={handleDeleteSelectedRecentlyAdded}
        onDeleteAll={handleDeleteAllRecentlyAdded}
        onOpenScanner={() => {
          setIsRecentlyAddedOpen(false);
          setIsPdfScannerOpen(true);
        }}
        dataBankCount={CE_QUESTIONS_MASTER.length}
      />

      {/* More Apps Modal */}
      <MoreAppsModal
        isOpen={isMoreAppsOpen}
        onClose={() => setIsMoreAppsOpen(false)}
      />

      {/* Confirmation Dialog for Leaving Active Exam (No window.confirm!) */}
      {pendingTabSwitch && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl max-w-sm w-full p-6 shadow-2xl text-stone-900 dark:text-stone-100 space-y-4">
            <div className="flex items-center space-x-3 text-orange-600 dark:text-orange-400">
              <div className="p-2 rounded-xl bg-orange-500/10">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold">Exam In Progress</h3>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              An assessment session is currently active. Leaving now will discard your current progress. Do you want to leave or stay?
            </p>
            <div className="flex items-center justify-end space-x-2 pt-2">
              <button
                onClick={() => setPendingTabSwitch(null)}
                className="px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold hover:bg-stone-200 dark:hover:bg-stone-700 transition"
              >
                Stay in Exam
              </button>
              <button
                onClick={() => {
                  const target = pendingTabSwitch;
                  setPendingTabSwitch(null);
                  setActiveTab(target);
                  setExamStage('setup');
                }}
                className="px-4 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition shadow-xs"
              >
                Leave Exam
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Non-blocking Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-2xl bg-stone-900/95 dark:bg-stone-100/95 text-white dark:text-stone-900 text-xs font-bold shadow-2xl border border-stone-700 dark:border-stone-300 flex items-center space-x-2">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Footer - Middle Center */}
      <footer className="border-t border-stone-200 dark:border-stone-800 py-6 text-xs text-stone-500 dark:text-stone-400 no-print transition-colors bg-white/70 dark:bg-stone-900/70 backdrop-blur-sm text-center">
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-center font-medium">
          <span>CELEARN V1.0 • Created by DFBuildsStuffs</span>
        </div>
      </footer>
      </div>

    </div>
  );
}
