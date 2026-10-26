import { AchievementBadge } from '../types';

export const INITIAL_ACHIEVEMENTS: AchievementBadge[] = [
  {
    id: 'first_exam',
    title: 'First Step to the License',
    description: 'Complete your first practice examination session in any area.',
    category: 'volume',
    icon: 'GraduationCap',
    requirement: 1,
    currentProgress: 0,
    unit: 'exams'
  },
  {
    id: 'topnotcher',
    title: 'Board Topnotcher',
    description: 'Score 90% or higher on an assessment with at least 50 questions.',
    category: 'accuracy',
    icon: 'Trophy',
    requirement: 90,
    currentProgress: 0,
    unit: '%'
  },
  {
    id: 'structural_master',
    title: 'Structural Maestro',
    description: 'Answer 25 PSAD questions correctly across sessions.',
    category: 'mastery',
    icon: 'Building2',
    requirement: 25,
    currentProgress: 0,
    unit: 'correct'
  },
  {
    id: 'hydraulics_prodigy',
    title: 'Hydraulics & Geotech Prodigy',
    description: 'Answer 25 HPGE questions correctly across sessions.',
    category: 'mastery',
    icon: 'Waves',
    requirement: 25,
    currentProgress: 0,
    unit: 'correct'
  },
  {
    id: 'mste_vanguard',
    title: 'MSTE Vanguard',
    description: 'Answer 25 MSTE questions correctly across sessions.',
    category: 'mastery',
    icon: 'Compass',
    requirement: 25,
    currentProgress: 0,
    unit: 'correct'
  },
  {
    id: 'century_reviewer',
    title: 'Century Reviewer',
    description: 'Answer 100 questions in total across all practice sessions.',
    category: 'volume',
    icon: 'BookOpen',
    requirement: 100,
    currentProgress: 0,
    unit: 'items'
  },
  {
    id: 'flashcard_virtuoso',
    title: 'Flashcard Virtuoso',
    description: 'Master at least 30 terms in the Flashcard Studio.',
    category: 'mastery',
    icon: 'Sparkles',
    requirement: 30,
    currentProgress: 0,
    unit: 'mastered'
  },
  {
    id: 'night_owl',
    title: 'Midnight Blueprint',
    description: 'Complete a study assessment after 9:00 PM in dark mode.',
    category: 'streak',
    icon: 'Moon',
    requirement: 1,
    currentProgress: 0,
    unit: 'session'
  },
  {
    id: 'iron_will',
    title: 'Flawless Examination',
    description: 'Achieve a perfect 100% score on any assessment of 20+ questions.',
    category: 'accuracy',
    icon: 'Award',
    requirement: 100,
    currentProgress: 0,
    unit: '%'
  },
  {
    id: 'speed_demon',
    title: 'Pacing Veteran',
    description: 'Complete a 20+ question assessment under 10 minutes with >80% accuracy.',
    category: 'accuracy',
    icon: 'Zap',
    requirement: 1,
    currentProgress: 0,
    unit: 'session'
  },
  {
    id: 'study_streak_3',
    title: 'Consistent Reviewer',
    description: 'Maintain a 3-day consecutive study streak.',
    category: 'streak',
    icon: 'Flame',
    requirement: 3,
    currentProgress: 0,
    unit: 'days'
  },
  {
    id: 'grand_master_400',
    title: 'Master of All 400 Terms',
    description: 'Review and attempt questions across all 400 CELE master items.',
    category: 'volume',
    icon: 'Crown',
    requirement: 200,
    currentProgress: 0,
    unit: 'unique items'
  }
];
