import {
  ExamSessionResult,
  FlashcardProgress,
  AchievementBadge,
  UserStats,
  CEQuestion,
  StreakData,
  ThemeId,
  DEFAULT_THEME_ID,
  DailyTasksStatus,
  DailyActivityRecord,
  FlashcardItemProgress,
  FlashcardMasteryStatus
} from '../types';
import { INITIAL_ACHIEVEMENTS } from '../data/achievements';
import { CE_QUESTIONS_MASTER } from '../data/questions';
import confetti from 'canvas-confetti';
import { soundManager } from './audio';

const STORAGE_KEYS = {
  EXAM_HISTORY: 'cele_exam_history_v1',
  FLASHCARD_PROGRESS: 'cele_flashcard_progress_v1',
  ACHIEVEMENTS: 'cele_achievements_v1',
  THEME: 'cele_theme_mode_v1',
  ACTIVE_THEME: 'cele_active_theme_id',
  SOUND_VOLUME: 'cele_sound_volume_v1',
  SOUND_MUTED: 'cele_sound_muted_v1',
  DISTRACTION_FREE: 'cele_distraction_free_v1',
  BOOKMARKS: 'cele_bookmarks_v1',
  USER_PROFILE: 'cele_user_profile_v1',
  STREAK: 'cele_streak_v1',
  CUSTOM_QUESTIONS: 'cele_custom_questions_v1',
  DAILY_TASKS: 'cele_daily_tasks_v1',
  DAILY_ACTIVITY: 'cele_daily_activity_v1',
  FORMULA_BOOKMARKS: 'cele_formula_bookmarks_v1',
  FORMULA_PROGRESS: 'cele_formula_progress_v1'
};

export const DEFAULT_USER_PROFILE = {
  name: 'Engr. Dave',
  targetRank: 'Top 1 (CELE Topnotcher)',
  targetExamDate: '2026-11-15'
};

export const getUserProfile = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    return raw ? JSON.parse(raw) : DEFAULT_USER_PROFILE;
  } catch {
    return DEFAULT_USER_PROFILE;
  }
};

export const saveUserProfile = (profile: { name: string; targetRank: string; targetExamDate: string }): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  } catch (e) {
    console.error('Failed to save user profile', e);
  }
};

export const getExamHistory = (): ExamSessionResult[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.EXAM_HISTORY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveExamResult = (result: ExamSessionResult): void => {
  try {
    const history = getExamHistory();
    history.unshift(result);
    // Keep last 50 sessions
    localStorage.setItem(STORAGE_KEYS.EXAM_HISTORY, JSON.stringify(history.slice(0, 50)));
  } catch (e) {
    console.error('Failed to save exam result', e);
  }
};

export const getFlashcardProgress = (): FlashcardProgress => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FLASHCARD_PROGRESS);
    if (!raw) return {};
    const parsed: FlashcardProgress = JSON.parse(raw);
    const now = Date.now();
    let hasChanges = false;

    // Self-healing migration: heal previously reviewed cards that were answered today or missing dueDate
    Object.keys(parsed).forEach(k => {
      const qid = Number(k);
      const item = parsed[qid];
      if (item && item.reviewCount && item.reviewCount > 0) {
        // If it was reviewed in the last 24 hours and dueDate is missing or in the past
        if (item.lastReviewed && now - item.lastReviewed < 24 * 60 * 60 * 1000) {
          if (!item.dueDate || item.dueDate <= now) {
            const interval = item.interval && item.interval > 0 ? item.interval : 1;
            item.interval = interval;
            item.dueDate = now + interval * 24 * 60 * 60 * 1000;
            hasChanges = true;
          }
        }
      }
    });

    if (hasChanges) {
      localStorage.setItem(STORAGE_KEYS.FLASHCARD_PROGRESS, JSON.stringify(parsed));
    }
    return parsed;
  } catch {
    return {};
  }
};

export const updateFlashcardStatus = (
  questionId: number,
  status: FlashcardMasteryStatus,
  intervalDays?: number
): FlashcardProgress => {
  const current = getFlashcardProgress();
  const prev = current[questionId] || {
    status: 'unstudied',
    lastReviewed: 0,
    reviewCount: 0,
    interval: 0,
    dueDate: 0,
    timesGraduated: 0
  };

  const nextInterval = intervalDays !== undefined
    ? intervalDays
    : (prev.interval && prev.interval > 0 ? prev.interval : (status === 'mastered' ? 3 : 1));
  const now = Date.now();
  const nextDueDate = now + nextInterval * 24 * 60 * 60 * 1000;

  current[questionId] = {
    ...prev,
    status,
    lastReviewed: now,
    reviewCount: (prev.reviewCount || 0) + 1,
    interval: nextInterval,
    dueDate: nextDueDate,
    timesGraduated: status === 'mastered' ? (prev.timesGraduated || 0) + 1 : (prev.timesGraduated || 0)
  };

  try {
    localStorage.setItem(STORAGE_KEYS.FLASHCARD_PROGRESS, JSON.stringify(current));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cele_flashcard_progress_updated', { detail: current }));
    }
  } catch (e) {
    console.error('Failed to save flashcard progress', e);
  }

  return current;
};

export const getAchievements = (): AchievementBadge[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
    if (!raw) return INITIAL_ACHIEVEMENTS;
    const stored: AchievementBadge[] = JSON.parse(raw);
    // Merge with any new definitions
    return INITIAL_ACHIEVEMENTS.map(initial => {
      const found = stored.find(s => s.id === initial.id);
      return found ? { ...initial, ...found } : initial;
    });
  } catch {
    return INITIAL_ACHIEVEMENTS;
  }
};

export const evaluateAchievements = (
  latestExam?: ExamSessionResult,
  allQuestions?: CEQuestion[]
): { achievements: AchievementBadge[]; newlyUnlocked: AchievementBadge[] } => {
  const history = getExamHistory();
  const flashcards = getFlashcardProgress();
  const currentAchievements = getAchievements();
  const newlyUnlocked: AchievementBadge[] = [];

  // Calculate Aggregates
  const totalExams = history.length;
  let totalQuestionsAnswered = 0;
  let totalCorrect = 0;
  let psadCorrect = 0;
  let hpgeCorrect = 0;
  let msteCorrect = 0;
  const answeredQuestionIds = new Set<number>();

  history.forEach(session => {
    totalQuestionsAnswered += session.totalQuestions;
    totalCorrect += session.correctAnswers;
    session.questionIds.forEach(id => answeredQuestionIds.add(id));

    if (allQuestions) {
      session.questionIds.forEach(qid => {
        const q = allQuestions.find(item => item.id === qid);
        if (q && session.userAnswers[qid] === q.answer) {
          if (q.area === 'PSAD') psadCorrect++;
          if (q.area === 'HPGE') hpgeCorrect++;
          if (q.area === 'MSTE') msteCorrect++;
        }
      });
    }
  });

  const masteredFlashcards = Object.values(flashcards).filter(f => f.status === 'mastered').length;

  const updatedAchievements = currentAchievements.map(badge => {
    let progress = badge.currentProgress;
    let unlocked = !!badge.unlockedAt;

    switch (badge.id) {
      case 'first_exam':
        progress = totalExams;
        if (progress >= 1 && !unlocked) unlocked = true;
        break;
      case 'topnotcher':
        if (latestExam && latestExam.totalQuestions >= 50 && latestExam.percentage >= 90) {
          progress = latestExam.percentage;
          if (!unlocked) unlocked = true;
        } else {
          progress = Math.max(progress, latestExam ? latestExam.percentage : 0);
        }
        break;
      case 'structural_master':
        progress = psadCorrect;
        if (progress >= 25 && !unlocked) unlocked = true;
        break;
      case 'hydraulics_prodigy':
        progress = hpgeCorrect;
        if (progress >= 25 && !unlocked) unlocked = true;
        break;
      case 'mste_vanguard':
        progress = msteCorrect;
        if (progress >= 25 && !unlocked) unlocked = true;
        break;
      case 'century_reviewer':
        progress = totalQuestionsAnswered;
        if (progress >= 100 && !unlocked) unlocked = true;
        break;
      case 'flashcard_virtuoso':
        progress = masteredFlashcards;
        if (progress >= 30 && !unlocked) unlocked = true;
        break;
      case 'night_owl':
        const hour = new Date().getHours();
        if (hour >= 21 || hour <= 4) {
          progress = 1;
          if (!unlocked) unlocked = true;
        }
        break;
      case 'iron_will':
        if (latestExam && latestExam.totalQuestions >= 20 && latestExam.percentage === 100) {
          progress = 100;
          if (!unlocked) unlocked = true;
        }
        break;
      case 'speed_demon':
        if (latestExam && latestExam.totalQuestions >= 20 && latestExam.timeSpentSeconds <= 600 && latestExam.percentage >= 80) {
          progress = 1;
          if (!unlocked) unlocked = true;
        }
        break;
      case 'study_streak_3': {
        const streakObj = getStreakData();
        progress = streakObj.currentStreak;
        if (progress >= 3 && !unlocked) unlocked = true;
        break;
      }
      case 'grand_master_400':
        progress = answeredQuestionIds.size;
        if (progress >= 200 && !unlocked) unlocked = true;
        break;
      default:
        break;
    }

    const wasUnlocked = !!badge.unlockedAt;
    const nowUnlocked = unlocked;
    const updatedBadge: AchievementBadge = {
      ...badge,
      currentProgress: progress,
      unlockedAt: wasUnlocked ? badge.unlockedAt : nowUnlocked ? Date.now() : undefined
    };

    if (!wasUnlocked && nowUnlocked) {
      newlyUnlocked.push(updatedBadge);
    }

    return updatedBadge;
  });

  try {
    localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(updatedAchievements));
  } catch (e) {
    console.error('Failed to save achievements', e);
  }

  // Fire celebratory confetti & sound if new achievements were unlocked
  if (newlyUnlocked.length > 0) {
    soundManager.playBadge();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  return { achievements: updatedAchievements, newlyUnlocked };
};

export const getUserStats = (allQuestions: CEQuestion[]): UserStats => {
  const history = getExamHistory();
  const flashcards = getFlashcardProgress();

  let totalQuestionsAnswered = 0;
  let totalCorrect = 0;
  const areaStats = {
    PSAD: { total: 0, correct: 0 },
    HPGE: { total: 0, correct: 0 },
    MSTE: { total: 0, correct: 0 }
  };
  const subtopicStats: Record<string, { total: number; correct: number }> = {};

  history.forEach(session => {
    totalQuestionsAnswered += session.totalQuestions;
    totalCorrect += session.correctAnswers;

    session.questionIds.forEach(qid => {
      const q = allQuestions.find(item => item.id === qid);
      if (q) {
        const isCorrect = session.userAnswers[qid] === q.answer;
        areaStats[q.area].total++;
        if (isCorrect) areaStats[q.area].correct++;

        if (!subtopicStats[q.subtopic]) {
          subtopicStats[q.subtopic] = { total: 0, correct: 0 };
        }
        subtopicStats[q.subtopic].total++;
        if (isCorrect) subtopicStats[q.subtopic].correct++;
      }
    });
  });

  const overallAccuracy =
    totalQuestionsAnswered > 0 ? Math.round((totalCorrect / totalQuestionsAnswered) * 100) : 0;

  const flashcardsMastered = Object.values(flashcards).filter(f => f.status === 'mastered').length;
  const flashcardsReviewed = Object.keys(flashcards).length;

  const streak = getStreakData();

  return {
    totalExamsCompleted: history.length,
    totalQuestionsAnswered,
    totalCorrect,
    overallAccuracy,
    streakDays: streak.currentStreak,
    lastStudyDate: streak.lastCheckInDate || (history[0] ? new Date(history[0].timestamp).toLocaleDateString() : 'None'),
    flashcardsMastered,
    flashcardsReviewed,
    areaStats,
    subtopicStats
  };
};

export const getBookmarks = (): number[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const toggleBookmark = (questionId: number): number[] => {
  const bookmarks = getBookmarks();
  const index = bookmarks.indexOf(questionId);
  if (index > -1) {
    bookmarks.splice(index, 1);
  } else {
    bookmarks.push(questionId);
  }
  try {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
  } catch (e) {
    console.error('Failed to save bookmarks', e);
  }
  return bookmarks;
};

export const getThemeMode = (): 'dark' | 'light' => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {
    // fallback
  }
  return 'dark'; // High-contrast midnight theme by default as requested!
};

export const saveThemeMode = (mode: 'dark' | 'light'): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, mode);
  } catch (e) {
    console.error('Failed to save theme mode', e);
  }
};

export const getActiveThemeId = (): ThemeId => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.ACTIVE_THEME);
    if (
      saved === 'midnight-strategist' ||
      saved === 'zen-scholar' ||
      saved === 'cyber-engineer' ||
      saved === 'academic-classic' ||
      saved === 'sunrise-momentum' ||
      saved === 'deep-work'
    ) {
      return saved as ThemeId;
    }
  } catch {
    // fallback
  }
  return DEFAULT_THEME_ID;
};

export const saveActiveThemeId = (id: ThemeId): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_THEME, id);
    soundManager.setTheme(id);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cele_theme_changed', { detail: id }));
    }
  } catch (e) {
    console.error('Failed to save active theme', e);
  }
};

export const getSoundVolume = (): number => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.SOUND_VOLUME);
    if (saved !== null) {
      const parsed = parseFloat(saved);
      if (!isNaN(parsed) && parsed >= 0 && parsed <= 1) return parsed;
    }
  } catch {}
  return 0.8;
};

export const saveSoundVolume = (vol: number): void => {
  try {
    const clamped = Math.max(0, Math.min(1, vol));
    localStorage.setItem(STORAGE_KEYS.SOUND_VOLUME, String(clamped));
    soundManager.setVolume(clamped);
  } catch (e) {
    console.error('Failed to save sound volume', e);
  }
};

export const getSoundMuted = (): boolean => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.SOUND_MUTED);
    if (saved !== null) return saved === 'true';
  } catch {}
  return false;
};

export const saveSoundMuted = (muted: boolean): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.SOUND_MUTED, String(muted));
    soundManager.setMuted(muted);
  } catch (e) {
    console.error('Failed to save sound mute state', e);
  }
};

export const getDistractionFree = (): boolean => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.DISTRACTION_FREE);
    if (saved !== null) return saved === 'true';
  } catch {}
  return false;
};

export const saveDistractionFree = (df: boolean): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.DISTRACTION_FREE, String(df));
  } catch (e) {
    console.error('Failed to save distraction free mode', e);
  }
};

export const resetThemeAndSoundSettings = (): void => {
  try {
    saveActiveThemeId(DEFAULT_THEME_ID);
    saveSoundVolume(0.8);
    saveSoundMuted(false);
    saveDistractionFree(false);
    soundManager.resetSettings();
  } catch (e) {
    console.error('Failed to reset theme and sound settings', e);
  }
};

// Daily Streak Engine & Midnight Transition Utilities
export const getLocalDateString = (d: Date = new Date()): string => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getYesterdayDateString = (d: Date = new Date()): string => {
  const yesterday = new Date(d);
  yesterday.setDate(yesterday.getDate() - 1);
  return getLocalDateString(yesterday);
};

export const getTimeUntilMidnight = (): { hours: number; minutes: number; formatted: string } => {
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
  const diffMs = Math.max(0, tomorrow.getTime() - now.getTime());
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  return { hours, minutes, formatted: `${hours}h ${minutes}m` };
};

export const getStreakData = (): StreakData => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.STREAK);
    if (raw) {
      const data: StreakData = JSON.parse(raw);
      const today = getLocalDateString();
      const yesterday = getYesterdayDateString();

      // If user checked in today or yesterday, consecutive streak is valid
      if (data.lastCheckInDate === today || data.lastCheckInDate === yesterday) {
        return data;
      }
      // If last check-in is older than yesterday, streak has lapsed back to 0
      if (data.lastCheckInDate && data.lastCheckInDate !== today && data.lastCheckInDate !== yesterday) {
        return {
          ...data,
          currentStreak: 0
        };
      }
      return data;
    }
  } catch (e) {
    console.error('Failed to get streak data', e);
  }
  return {
    currentStreak: 0,
    lastCheckInDate: null,
    checkInHistory: [],
    bestStreak: 0
  };
};

export const hasCheckedInToday = (): boolean => {
  const streak = getStreakData();
  const today = getLocalDateString();
  return streak.lastCheckInDate === today;
};

export const performDailyCheckIn = (): { streak: StreakData; isNewCheckIn: boolean } => {
  const current = getStreakData();
  const today = getLocalDateString();
  const yesterday = getYesterdayDateString();

  if (current.lastCheckInDate === today) {
    return { streak: current, isNewCheckIn: false };
  }

  // Consecutive streak calculation
  const newStreak = (current.lastCheckInDate === yesterday && current.currentStreak > 0)
    ? current.currentStreak + 1
    : 1;

  const historySet = new Set(current.checkInHistory || []);
  historySet.add(today);
  const updatedHistory = Array.from(historySet).sort();

  const updatedData: StreakData = {
    currentStreak: newStreak,
    lastCheckInDate: today,
    checkInHistory: updatedHistory,
    bestStreak: Math.max(current.bestStreak || 0, newStreak)
  };

  try {
    localStorage.setItem(STORAGE_KEYS.STREAK, JSON.stringify(updatedData));
  } catch (e) {
    console.error('Failed to save streak data', e);
  }

  // Evaluate achievements with updated streak
  evaluateAchievements();

  // Broadcast event across applet so all active components sync immediately
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('cele_streak_updated', { detail: updatedData }));
  }

  return { streak: updatedData, isNewCheckIn: true };
};

// ==========================================
// Custom & Recently Added Questions / Terms
// ==========================================

// Cached lookup sets for the authentic built-in data bank (582 CELE questions)
const MASTER_BANK_ANSWERS = new Set<string>();
const MASTER_BANK_PROMPTS = new Set<string>();

const initMasterBankLookup = () => {
  if (MASTER_BANK_ANSWERS.size === 0 && CE_QUESTIONS_MASTER.length > 0) {
    CE_QUESTIONS_MASTER.forEach(q => {
      const a = q.answer.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
      if (a) MASTER_BANK_ANSWERS.add(a);
      const p = q.question.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
      if (p) MASTER_BANK_PROMPTS.add(p);
    });
  }
};

/**
 * Detects whether a given question, answer term, or prompt is already in the data bank
 */
export const isInDataBank = (item: CEQuestion | { answer?: string; question?: string; id?: number } | string): boolean => {
  initMasterBankLookup();

  if (typeof item === 'string') {
    const norm = item.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    return MASTER_BANK_ANSWERS.has(norm);
  }

  // Check built-in ID range (1 to CE_QUESTIONS_MASTER.length)
  if (item.id !== undefined && item.id >= 1 && item.id <= CE_QUESTIONS_MASTER.length) {
    const candidate = CE_QUESTIONS_MASTER[item.id - 1];
    if (candidate && candidate.id === item.id) return true;
  }

  if (item.answer) {
    const normAnswer = item.answer.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (normAnswer && MASTER_BANK_ANSWERS.has(normAnswer)) return true;
  }

  if (item.question) {
    const normPrompt = item.question.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    if (normPrompt.length > 10 && MASTER_BANK_PROMPTS.has(normPrompt)) return true;
  }

  return false;
};

export const getCustomQuestions = (): CEQuestion[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CUSTOM_QUESTIONS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to get custom questions', e);
    return [];
  }
};

export const saveCustomQuestions = (questions: CEQuestion[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.CUSTOM_QUESTIONS, JSON.stringify(questions));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cele_custom_questions_updated', { detail: questions }));
    }
  } catch (e) {
    console.error('Failed to save custom questions', e);
  }
};

export const addCustomQuestions = (newQuestions: CEQuestion[]): CEQuestion[] => {
  const current = getCustomQuestions();
  const existingPrompts = new Set(current.map(q => q.question.toLowerCase().trim()));
  const now = Date.now();
  const stampedNew = newQuestions.map(q => ({
    ...q,
    addedAt: q.addedAt || now,
    isCustom: true
  }));
  const filteredNew = stampedNew.filter(q => !existingPrompts.has(q.question.toLowerCase().trim()));
  const merged = [...current, ...filteredNew];
  saveCustomQuestions(merged);
  return merged;
};

export const deleteCustomQuestion = (id: number): CEQuestion[] => {
  const current = getCustomQuestions();
  const filtered = current.filter(q => q.id !== id);
  saveCustomQuestions(filtered);
  return filtered;
};

/**
 * Detects all terms added by users excluding those already in the data bank.
 * Sorted with most recent first.
 */
export const getRecentlyAddedQuestions = (): CEQuestion[] => {
  const custom = getCustomQuestions();
  // Filter out any questions that are already in the data bank
  const userAdded = custom.filter(q => !isInDataBank(q));

  return userAdded.sort((a, b) => {
    const timeA = (a as any).addedAt || a.id || 0;
    const timeB = (b as any).addedAt || b.id || 0;
    return timeB - timeA;
  });
};

/**
 * Deletes selected terms from custom questions
 */
export const deleteSelectedCustomQuestions = (idsToDelete: number[]): CEQuestion[] => {
  const toDeleteSet = new Set(idsToDelete);
  const current = getCustomQuestions();
  const updated = current.filter(q => !toDeleteSet.has(q.id));
  saveCustomQuestions(updated);
  return updated;
};

/**
 * Deletes all recently added user terms (excluding data bank)
 */
export const deleteAllRecentlyAdded = (): CEQuestion[] => {
  const recentlyAdded = getRecentlyAddedQuestions();
  const recentIds = new Set(recentlyAdded.map(q => q.id));
  const current = getCustomQuestions();
  const remaining = current.filter(q => !recentIds.has(q.id));
  saveCustomQuestions(remaining);
  return remaining;
};

export const clearCustomQuestions = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.CUSTOM_QUESTIONS);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cele_custom_questions_updated', { detail: [] }));
    }
  } catch (e) {
    console.error('Failed to clear custom questions', e);
  }
};

// ==========================================
// DAILY TASKS & DAILY ACTIVITY TRACKING
// ==========================================

export const getTodayDateString = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getDailyTasks = (dateStr: string = getTodayDateString()): DailyTasksStatus => {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEYS.DAILY_TASKS}_${dateStr}`);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load daily tasks', e);
  }
  return {
    reviewedFlashcards: false,
    learnedNew: false,
    tookMockExam: false
  };
};

export const setDailyTaskCompleted = (
  task: keyof DailyTasksStatus,
  completed: boolean = true,
  dateStr: string = getTodayDateString()
): DailyTasksStatus => {
  try {
    const current = getDailyTasks(dateStr);
    current[task] = completed;
    localStorage.setItem(`${STORAGE_KEYS.DAILY_TASKS}_${dateStr}`, JSON.stringify(current));
    
    // Also update in DAILY_ACTIVITY record
    const allActivity = getAllDailyActivity();
    if (!allActivity[dateStr]) {
      allActivity[dateStr] = {
        date: dateStr,
        questionsAnswered: 0,
        tasks: current
      };
    } else {
      allActivity[dateStr].tasks = current;
    }
    localStorage.setItem(STORAGE_KEYS.DAILY_ACTIVITY, JSON.stringify(allActivity));

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cele_daily_tasks_updated', { detail: { date: dateStr, tasks: current } }));
    }
    return current;
  } catch (e) {
    console.error('Failed to save daily task', e);
    return getDailyTasks(dateStr);
  }
};

export const getAllDailyActivity = (): Record<string, DailyActivityRecord> => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.DAILY_ACTIVITY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

export const incrementDailyQuestionsAnswered = (
  count: number = 1,
  dateStr: string = getTodayDateString()
): number => {
  try {
    const allActivity = getAllDailyActivity();
    const tasks = getDailyTasks(dateStr);
    const existing = allActivity[dateStr] || {
      date: dateStr,
      questionsAnswered: 0,
      tasks
    };

    existing.questionsAnswered = (existing.questionsAnswered || 0) + count;
    existing.tasks = tasks;
    allActivity[dateStr] = existing;

    localStorage.setItem(STORAGE_KEYS.DAILY_ACTIVITY, JSON.stringify(allActivity));

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cele_daily_tasks_updated', {
        detail: { date: dateStr, count: existing.questionsAnswered, tasks }
      }));
    }
    return existing.questionsAnswered;
  } catch (e) {
    console.error('Failed to increment daily questions answered', e);
    return 0;
  }
};

export const getDailyQuestionsAnswered = (dateStr: string = getTodayDateString()): number => {
  const allActivity = getAllDailyActivity();
  return allActivity[dateStr]?.questionsAnswered || 0;
};

export const getLast7DaysActivity = (): DailyActivityRecord[] => {
  const records: DailyActivityRecord[] = [];
  const allActivity = getAllDailyActivity();

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;
    
    const record = allActivity[dateStr] || {
      date: dateStr,
      questionsAnswered: 0,
      tasks: getDailyTasks(dateStr)
    };
    records.push(record);
  }

  return records;
};

// ==========================================
// SPACED REPETITION QUEUE & INTERVAL PROGRESSION
// ==========================================

export const getNextStackedInterval = (
  currentInterval: number | undefined,
  isPerfect: boolean
): number => {
  if (!currentInterval || currentInterval <= 0) {
    return isPerfect ? 3 : 1;
  }
  if (currentInterval < 3) return isPerfect ? 7 : 3;
  if (currentInterval < 7) return isPerfect ? 14 : 7;
  if (currentInterval < 14) return isPerfect ? 30 : 14;
  if (currentInterval < 30) return isPerfect ? 60 : 30;
  return isPerfect ? Math.round(currentInterval * 2.5) : Math.round(currentInterval * 2);
};

export const scheduleGraduatedFlashcard = (
  questionId: number,
  isPerfect: boolean
): FlashcardItemProgress => {
  const progress = getFlashcardProgress();
  const prev = progress[questionId] || {
    status: 'unstudied',
    lastReviewed: 0,
    reviewCount: 0,
    interval: 0,
    dueDate: 0,
    timesGraduated: 0
  };

  const nextInterval = getNextStackedInterval(prev.interval, isPerfect);
  const now = Date.now();
  const nextDueDate = now + nextInterval * 24 * 60 * 60 * 1000;

  const updatedItem: FlashcardItemProgress = {
    status: 'mastered',
    lastReviewed: now,
    reviewCount: (prev.reviewCount || 0) + 1,
    interval: nextInterval,
    dueDate: nextDueDate,
    timesGraduated: (prev.timesGraduated || 0) + 1
  };

  progress[questionId] = updatedItem;

  try {
    localStorage.setItem(STORAGE_KEYS.FLASHCARD_PROGRESS, JSON.stringify(progress));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cele_flashcard_progress_updated', { detail: progress }));
    }
  } catch (e) {
    console.error('Failed to save graduated flashcard', e);
  }

  return updatedItem;
};

export const isCardDue = (item?: FlashcardItemProgress): boolean => {
  if (!item || !item.reviewCount || item.reviewCount === 0) return false;
  
  const now = Date.now();
  // If card was reviewed within the last 18 hours, it has already been answered today!
  if (item.lastReviewed && now - item.lastReviewed < 18 * 60 * 60 * 1000) {
    return false;
  }

  if (item.dueDate && item.dueDate > 0) {
    return item.dueDate <= now;
  }

  return true;
};

export const isCardNew = (item?: FlashcardItemProgress): boolean => {
  return !item || !item.reviewCount || item.reviewCount === 0;
};

export const getDueCards = (
  questions: CEQuestion[],
  progress: FlashcardProgress
): CEQuestion[] => {
  return questions.filter(q => isCardDue(progress[q.id]));
};

export const getNewCards = (
  questions: CEQuestion[],
  progress: FlashcardProgress
): CEQuestion[] => {
  return questions.filter(q => isCardNew(progress[q.id]));
};

// ==========================================
// FORMULAS STORAGE & PROGRESS
// ==========================================

export const getFormulaBookmarks = (): string[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FORMULA_BOOKMARKS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const toggleFormulaBookmark = (formulaId: string): string[] => {
  const current = getFormulaBookmarks();
  const exists = current.includes(formulaId);
  const updated = exists ? current.filter(id => id !== formulaId) : [...current, formulaId];
  try {
    localStorage.setItem(STORAGE_KEYS.FORMULA_BOOKMARKS, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to toggle formula bookmark', e);
  }
  return updated;
};

export const getFormulaProgress = (): Record<string, FlashcardItemProgress> => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FORMULA_PROGRESS);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

export const updateFormulaStatus = (
  formulaId: string,
  status: FlashcardMasteryStatus
): Record<string, FlashcardItemProgress> => {
  const current = getFormulaProgress();
  const prev = current[formulaId] || {
    status: 'unstudied',
    lastReviewed: 0,
    reviewCount: 0,
    interval: 0,
    dueDate: 0,
    timesGraduated: 0
  };

  const nextInterval = status === 'mastered' ? (prev.interval ? prev.interval * 2 : 3) : 1;
  const now = Date.now();
  const nextDueDate = now + nextInterval * 24 * 60 * 60 * 1000;

  current[formulaId] = {
    ...prev,
    status,
    lastReviewed: now,
    reviewCount: (prev.reviewCount || 0) + 1,
    interval: nextInterval,
    dueDate: nextDueDate,
    timesGraduated: status === 'mastered' ? (prev.timesGraduated || 0) + 1 : (prev.timesGraduated || 0)
  };

  try {
    localStorage.setItem(STORAGE_KEYS.FORMULA_PROGRESS, JSON.stringify(current));
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cele_formula_progress_updated', { detail: current }));
    }
  } catch (e) {
    console.error('Failed to save formula progress', e);
  }

  return current;
};

/**
 * iOS Safari & WebKit Persistent Storage Optimizer
 * Requests durable storage from WebKit / Blink to prevent the 7-day automatic
 * local storage / IndexedDB purge under Safari's Intelligent Tracking Prevention (ITP).
 */
export const requestPersistentStorage = async (): Promise<boolean> => {
  if (typeof window === 'undefined' || !navigator.storage || !navigator.storage.persist) {
    return false;
  }
  try {
    const isAlreadyPersisted = await navigator.storage.persisted();
    if (isAlreadyPersisted) {
      return true;
    }
    const isPersisted = await navigator.storage.persist();
    return isPersisted;
  } catch (err) {
    console.warn('Storage persist request caught error:', err);
    return false;
  }
};
