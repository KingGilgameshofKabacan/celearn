export type CEArea = 'PSAD' | 'HPGE' | 'MSTE';

export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

export interface CEQuestion {
  id: number;
  area: CEArea;
  subtopic: string;
  difficulty: DifficultyLevel;
  question: string;
  answer: string;
  choices: string[];
  explanation: string;
  reference?: string;
  addedAt?: number;
  isCustom?: boolean;
}

export type StudyMode = 'flashcard' | 'repetition';

export interface FormulaVariable {
  symbol: string;
  name: string;
  unit?: string;
}

export interface CEFormula {
  id: string;
  name: string;
  area: CEArea;
  subtopic: string;
  difficulty: DifficultyLevel;
  formula: string;
  latex?: string;
  variables: FormulaVariable[];
  description: string;
  shortcutsAndTips: string[];
  choices: string[];
  correctChoice: string;
}

export type FeedbackMode = 'immediate' | 'delayed';

export interface ExamConfig {
  area: 'ALL' | CEArea;
  subtopic: 'ALL' | string;
  difficulty: 'ALL' | DifficultyLevel;
  count: number;
  timeLimitMinutes: number; // 0 for untimed
  feedbackMode: FeedbackMode;
}

export interface ExamSessionResult {
  id: string;
  timestamp: number;
  area: 'ALL' | CEArea;
  subtopic: 'ALL' | string;
  difficulty: 'ALL' | DifficultyLevel;
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
  timeSpentSeconds: number;
  timeLimitMinutes: number;
  userAnswers: Record<number, string>;
  flaggedIds: number[];
  questionIds: number[];
  passed: boolean;
}

export type FlashcardMasteryStatus = 'unstudied' | 'learning' | 'mastered';

export interface FlashcardItemProgress {
  status: FlashcardMasteryStatus;
  lastReviewed: number;
  reviewCount: number;
  interval?: number; // In days: 1, 3, 7, 14, 30, etc.
  dueDate?: number; // Timestamp when due for review
  timesGraduated?: number;
}

export interface FlashcardProgress {
  [questionId: number]: FlashcardItemProgress;
}

export interface DailyTasksStatus {
  reviewedFlashcards: boolean;
  learnedNew: boolean;
  tookMockExam: boolean;
}

export interface DailyActivityRecord {
  date: string; // 'YYYY-MM-DD'
  questionsAnswered: number;
  tasks: DailyTasksStatus;
}

export interface AchievementBadge {
  id: string;
  title: string;
  description: string;
  category: 'mastery' | 'streak' | 'accuracy' | 'volume';
  icon: string;
  unlockedAt?: number;
  requirement: number;
  currentProgress: number;
  unit: string;
}

export interface UserProfile {
  name: string;
  targetRank: string;
  targetExamDate: string; // YYYY-MM-DD
}

export interface StreakData {
  currentStreak: number;
  lastCheckInDate: string | null;
  checkInHistory: string[];
  bestStreak: number;
}

export interface UserStats {
  totalExamsCompleted: number;
  totalQuestionsAnswered: number;
  totalCorrect: number;
  overallAccuracy: number;
  streakDays: number;
  lastStudyDate: string;
  flashcardsMastered: number;
  flashcardsReviewed: number;
  areaStats: {
    PSAD: { total: number; correct: number };
    HPGE: { total: number; correct: number };
    MSTE: { total: number; correct: number };
  };
  subtopicStats: Record<string, { total: number; correct: number }>;
}

export * from './theme';
