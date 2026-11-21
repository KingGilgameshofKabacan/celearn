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
  isFormula?: boolean;
  addedAt?: number;
  isCustom?: boolean;
  latex?: string;
  diagramSrc?: string;
  diagramAlt?: string;
}

export type HPGEFormulaDomain = 'Hydraulics & Fluid Mechanics' | 'Geotechnical Engineering';

export type PSADFormulaDomain =
  | 'Engineering Mechanics'
  | 'Reinforced Concrete Design'
  | 'Theory of Structures'
  | 'Strength of Materials'
  | 'Steel & Prestressed Concrete'
  | 'Earthquake Engineering';

export type MSTEFormulaDomain =
  | 'Trigonometry & Geometry'
  | 'Analytic Geometry & Algebra'
  | 'Probability & Statistics'
  | 'Surveying & Earthworks'
  | 'Highway, Transpo & Ports'
  | 'Engineering Economy'
  | 'Calculus, DE & Vector Analysis'
  | 'Construction & Engineering Physics';

export type FormulaDomain = HPGEFormulaDomain | PSADFormulaDomain | MSTEFormulaDomain;

export interface FormulaVariable {
  symbol: string;
  meaning: string;
}

export interface FormulaEquationItem {
  label: string;
  latex: string;
  condition?: string;
}

export interface FormulaTable {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface FormulaDiagram {
  src: string;
  caption: string;
  alt: string;
}

export interface CEFormula {
  id: string;
  area: CEArea;
  domain: FormulaDomain;
  topic: string;
  examSubtopic: string;
  title: string;
  pageRef: number;
  latex: string;
  secondaryEquations?: FormulaEquationItem[];
  variables?: FormulaVariable[];
  notes?: string[];
  diagrams?: FormulaDiagram[];
  tables?: FormulaTable[];
  flashcardPrompt: string;
  flashcardHint?: string;
  difficulty: DifficultyLevel;
}

export type StudyMode = 'flashcard' | 'repetition';

export type FeedbackMode = 'immediate' | 'delayed';

export interface ExamConfig {
  area: 'ALL' | CEArea;
  subtopic: 'ALL' | string;
  difficulty: 'ALL' | DifficultyLevel;
  count: number;
  timeLimitMinutes: number; // 0 for untimed
  feedbackMode: FeedbackMode;
  formulaOnly?: boolean;
}

export interface ActiveExamSession {
  id: string;
  timestamp: number;
  config: ExamConfig;
  questions: CEQuestion[];
  currentIndex: number;
  userAnswers: Record<number, string>;
  flaggedIds: number[];
  secondsRemaining: number;
  secondsElapsed: number;
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
export type SRSRating = 'again' | 'hard' | 'good' | 'easy';

export interface FlashcardItemProgress {
  status: FlashcardMasteryStatus;
  lastReviewed: number;
  reviewCount: number;
  interval?: number; // In days: 1, 3, 7, 14, 30, etc.
  dueDate?: number; // Timestamp when due for review
  easeFactor?: number; // SM-2 / Vaia Ease Factor (default 2.5)
  repetitions?: number; // Consecutive successful reviews
  lapses?: number; // Times rated 'again'
  lastRating?: SRSRating;
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
export * from './avatar';
