export type ThemeId =
  | 'midnight-strategist'
  | 'zen-scholar'
  | 'cyber-engineer'
  | 'academic-classic'
  | 'sunrise-momentum'
  | 'deep-work';

export interface ThemeColorPalette {
  primary: string;
  primaryHover: string;
  secondary: string;
  canvasBg: string;
  cardSurface: string;
  elevatedSurface: string;
  border: string;
  textPrimary: string;
  textMuted: string;
  accent: string;
  accentSoft: string;
  swatches: { name: string; hex: string }[];
}

export interface PersonalityTheme {
  id: ThemeId;
  name: string;
  tagline: string;
  personality: string;
  description: string;
  bestSuitedFor: string;
  appearance: string;
  soundPackTitle: string;
  soundPackDescription: string;
  isDarkBase: boolean;
  colors: ThemeColorPalette;
  previewCard: {
    statValue: string;
    statLabel: string;
    badgeText: string;
    actionText: string;
  };
}

export const THEMES_DATA: PersonalityTheme[] = [
  {
    id: 'midnight-strategist',
    name: 'Midnight Strategist',
    tagline: 'Engineering Command Center',
    personality: 'Disciplined, analytical, ambitious, and focused.',
    description:
      'Dark, low-glare surfaces with precise typography, structured data cards, and crisp borders designed for sustained cognitive endurance.',
    bestSuitedFor: 'Long study sessions, structural calculations, detailed analytics, and timed mock-board practice.',
    appearance: 'Deep navy and graphite canvas, cool blue focal accents, and restrained silver borders.',
    soundPackTitle: 'Acoustic Pulse Engine',
    soundPackDescription: 'Muted digital clicks, soft sine confirmation tones, subtle electronic pulses, and a calm completion chime.',
    isDarkBase: true,
    colors: {
      primary: '#38BDF8',
      primaryHover: '#0284C7',
      secondary: '#60A5FA',
      canvasBg: '#0A0F1D',
      cardSurface: '#0F172A',
      elevatedSurface: '#1E293B',
      border: '#334155',
      textPrimary: '#F8FAFC',
      textMuted: '#94A3B8',
      accent: '#38BDF8',
      accentSoft: 'rgba(56, 189, 248, 0.12)',
      swatches: [
        { name: 'Deep Navy', hex: '#0A0F1D' },
        { name: 'Graphite Deck', hex: '#0F172A' },
        { name: 'Cool Blue', hex: '#38BDF8' },
        { name: 'Restrained Silver', hex: '#94A3B8' },
        { name: 'Ice White', hex: '#F8FAFC' }
      ]
    },
    previewCard: {
      statValue: '94.2%',
      statLabel: 'PSAD Structural Readiness',
      badgeText: 'COMMAND DECK',
      actionText: 'Execute Simulation'
    }
  },
  {
    id: 'zen-scholar',
    name: 'Zen Scholar',
    tagline: 'Serene Sanctuary for Deep Reading',
    personality: 'Calm, thoughtful, patient, and consistent.',
    description:
      'Soft natural surfaces, generous spacing, rounded cards, and readable typography creating a peaceful environment for steady daily mastery.',
    bestSuitedFor: 'Reading, revision, formula memorization, and steady daily habit progression.',
    appearance: 'Sage green, warm ivory, muted stone, and calm earthy accents.',
    soundPackTitle: 'Natural Wood & Temple Bell',
    soundPackDescription: 'Gentle wooden taps, soft resonant bell tones, and quiet organic completion cues.',
    isDarkBase: false,
    colors: {
      primary: '#2D5A43',
      primaryHover: '#1E3E2E',
      secondary: '#4A7C59',
      canvasBg: '#F5F7F2',
      cardSurface: '#FFFFFF',
      elevatedSurface: '#EBF0E6',
      border: '#D5DFD1',
      textPrimary: '#1E2D24',
      textMuted: '#607266',
      accent: '#3E6B52',
      accentSoft: 'rgba(62, 107, 82, 0.12)',
      swatches: [
        { name: 'Sage Green', hex: '#3E6B52' },
        { name: 'Warm Ivory', hex: '#F5F7F2' },
        { name: 'Soft Surface', hex: '#EBF0E6' },
        { name: 'Muted Stone', hex: '#607266' },
        { name: 'Forest Deep', hex: '#1E2D24' }
      ]
    },
    previewCard: {
      statValue: '88 Terms',
      statLabel: 'Hydraulics Mastered',
      badgeText: 'PEACEFUL STUDY',
      actionText: 'Review Quietly'
    }
  },
  {
    id: 'cyber-engineer',
    name: 'Cyber Engineer',
    tagline: 'Futuristic HUD & Telemetry Console',
    personality: 'Tech-oriented, curious, competitive, and energized by futuristic interfaces.',
    description:
      'Technical panels, luminous progress meters, high-tech grid styling, and responsive micro-animations for high-tempo engineering problem-solving.',
    bestSuitedFor: 'Tracking performance metrics, speed drills, computational problem-solving, and leaderboard challenges.',
    appearance: 'Near-black canvas, electric cyan, violet neon highlights, and technical hairline grids.',
    soundPackTitle: 'Synthetic Cybernetic HUD',
    soundPackDescription: 'Futuristic UI blips, synthetic modulated confirmation tones, subtle frequency sweeps, and distinct completion cues.',
    isDarkBase: true,
    colors: {
      primary: '#06B6D4',
      primaryHover: '#0891B2',
      secondary: '#8B5CF6',
      canvasBg: '#050811',
      cardSurface: '#0B1120',
      elevatedSurface: '#111C35',
      border: '#1E293B',
      textPrimary: '#F1F5F9',
      textMuted: '#64748B',
      accent: '#06B6D4',
      accentSoft: 'rgba(6, 182, 212, 0.15)',
      swatches: [
        { name: 'Near Black', hex: '#050811' },
        { name: 'Electric Cyan', hex: '#06B6D4' },
        { name: 'Synthetic Violet', hex: '#8B5CF6' },
        { name: 'HUD Border', hex: '#1E293B' },
        { name: 'Luminous Text', hex: '#F1F5F9' }
      ]
    },
    previewCard: {
      statValue: '280 BPM',
      statLabel: 'Calculation Speed Index',
      badgeText: 'TELEMETRY ACTIVE',
      actionText: 'Engage Drill'
    }
  },
  {
    id: 'academic-classic',
    name: 'Academic Classic',
    tagline: 'Prestigious Institutional Notebook',
    personality: 'Traditional, organized, detail-oriented, and academically disciplined.',
    description:
      'Warm paper-inspired surfaces, elegant typography, orderly tables, and refined gold and burgundy accents evoking classical engineering scholarship.',
    bestSuitedFor: 'Organized syllabus revision, reference materials, structured notes, and official board syllabus tracking.',
    appearance: 'Warm parchment cream, imperial burgundy, forest green, and refined antique gold.',
    soundPackTitle: 'Tactile Parchment & Brass',
    soundPackDescription: 'Subtle page-turn-inspired pops, soft mechanical typewriter clicks, and polished orchestral notification chimes.',
    isDarkBase: false,
    colors: {
      primary: '#6B1D28',
      primaryHover: '#4E141D',
      secondary: '#1B4332',
      canvasBg: '#FAF7F2',
      cardSurface: '#FFFFFF',
      elevatedSurface: '#F3ECE0',
      border: '#E2D5C3',
      textPrimary: '#2B231D',
      textMuted: '#786858',
      accent: '#C59B27',
      accentSoft: 'rgba(197, 155, 39, 0.15)',
      swatches: [
        { name: 'Imperial Burgundy', hex: '#6B1D28' },
        { name: 'Forest Green', hex: '#1B4332' },
        { name: 'Antique Gold', hex: '#C59B27' },
        { name: 'Parchment Cream', hex: '#FAF7F2' },
        { name: 'Warm Ink', hex: '#2B231D' }
      ]
    },
    previewCard: {
      statValue: 'Vol. III',
      statLabel: 'Geotechnical Syllabus',
      badgeText: 'CLASSICAL ARCHIVE',
      actionText: 'Open Ledger'
    }
  },
  {
    id: 'sunrise-momentum',
    name: 'Sunrise Momentum',
    tagline: 'Dawn Motivation & Habit Ignition',
    personality: 'Optimistic, energetic, action-oriented, and motivated by visible progress.',
    description:
      'Welcoming warm surfaces, prominent daily goals, clear action buttons, and encouraging progress celebrations that spark daily exam habits.',
    bestSuitedFor: 'Daily routines, study streaks, milestone celebrations, and building unbreakable candidate momentum.',
    appearance: 'Warm cream, sunrise coral, amber, and balanced orange accents.',
    soundPackTitle: 'Morning Spark & Marimba',
    soundPackDescription: 'Upbeat ascending confirmation notes, cheerful task-completion sounds, light percussive cues, and a positive completion jingle.',
    isDarkBase: false,
    colors: {
      primary: '#EA580C',
      primaryHover: '#C2410C',
      secondary: '#F97316',
      canvasBg: '#FFFDF9',
      cardSurface: '#FFFFFF',
      elevatedSurface: '#FFF6EC',
      border: '#FED7AA',
      textPrimary: '#1C1917',
      textMuted: '#78716C',
      accent: '#EA580C',
      accentSoft: 'rgba(234, 88, 12, 0.12)',
      swatches: [
        { name: 'Sunrise Orange', hex: '#EA580C' },
        { name: 'Amber Glow', hex: '#F97316' },
        { name: 'Morning Coral', hex: '#FB923C' },
        { name: 'Warm Cream', hex: '#FFFDF9' },
        { name: 'Slate Core', hex: '#1C1917' }
      ]
    },
    previewCard: {
      statValue: '14 Days',
      statLabel: 'Continuous Board Streak',
      badgeText: 'MOMENTUM PEAK',
      actionText: 'Ignite Session'
    }
  },
  {
    id: 'deep-work',
    name: 'Deep Work Minimalist',
    tagline: 'Zero-Distraction Monastic Slate',
    personality: 'Independent, practical, highly focused, and easily distracted by unnecessary interface elements.',
    description:
      'Minimal cards, strong whitespace, compact navigation, and understated progress indicators tailored for high-intensity problem solving.',
    bestSuitedFor: 'Demanding calculations, focused study timers, distraction-free reading, and timed mock-board simulations.',
    appearance: 'Monochrome charcoal, off-white, slate gray, and one restrained neutral accent.',
    soundPackTitle: 'Whisper-Soft Felt Clicks',
    soundPackDescription: 'Ultra-quiet micro-clicks, soft whisper confirmation tones, and muted completion cues.',
    isDarkBase: true,
    colors: {
      primary: '#71717A',
      primaryHover: '#52525B',
      secondary: '#A1A1AA',
      canvasBg: '#121214',
      cardSurface: '#18181B',
      elevatedSurface: '#27272A',
      border: '#3F3F46',
      textPrimary: '#FAFAFA',
      textMuted: '#A1A1AA',
      accent: '#E4E4E7',
      accentSoft: 'rgba(244, 244, 245, 0.10)',
      swatches: [
        { name: 'Monochrome Charcoal', hex: '#121214' },
        { name: 'Zinc Surface', hex: '#18181B' },
        { name: 'Mid Gray', hex: '#71717A' },
        { name: 'Off-White', hex: '#FAFAFA' },
        { name: 'Restrained Slate', hex: '#3F3F46' }
      ]
    },
    previewCard: {
      statValue: '45:00',
      statLabel: 'Uninterrupted Focus Block',
      badgeText: 'DEEP FOCUS',
      actionText: 'Begin Deep Work'
    }
  }
];

export const DEFAULT_THEME_ID: ThemeId = 'sunrise-momentum';

export interface ActivePalette {
  canvasBg: string;
  cardSurface: string;
  elevatedSurface: string;
  border: string;
  primary: string;
  primaryHover: string;
  secondary: string;
  textPrimary: string;
  textMuted: string;
  accent: string;
  accentSoft: string;
  headerBg: string;
  footerBg: string;
}

export const getThemePalette = (themeId: ThemeId, mode: 'dark' | 'light'): ActivePalette => {
  const isDark = mode === 'dark';
  switch (themeId) {
    case 'midnight-strategist':
      return isDark
        ? {
            canvasBg: '#0A0F1D',
            cardSurface: '#0F172A',
            elevatedSurface: '#1E293B',
            border: '#24344D',
            primary: '#38BDF8',
            primaryHover: '#0284C7',
            secondary: '#60A5FA',
            textPrimary: '#F8FAFC',
            textMuted: '#94A3B8',
            accent: '#38BDF8',
            accentSoft: 'rgba(56, 189, 248, 0.15)',
            headerBg: 'rgba(15, 23, 42, 0.95)',
            footerBg: 'rgba(10, 15, 29, 0.95)'
          }
        : {
            canvasBg: '#F0F4F8',
            cardSurface: '#FFFFFF',
            elevatedSurface: '#E2E8F0',
            border: '#CBD5E1',
            primary: '#0284C7',
            primaryHover: '#0369A1',
            secondary: '#2563EB',
            textPrimary: '#0F172A',
            textMuted: '#475569',
            accent: '#0284C7',
            accentSoft: 'rgba(2, 132, 199, 0.12)',
            headerBg: 'rgba(255, 255, 255, 0.95)',
            footerBg: 'rgba(240, 244, 248, 0.95)'
          };
    case 'zen-scholar':
      return isDark
        ? {
            canvasBg: '#111A14',
            cardSurface: '#18241D',
            elevatedSurface: '#223328',
            border: '#2C4033',
            primary: '#52B788',
            primaryHover: '#40916C',
            secondary: '#74C69D',
            textPrimary: '#F5F7F2',
            textMuted: '#95D5B2',
            accent: '#52B788',
            accentSoft: 'rgba(82, 183, 136, 0.20)',
            headerBg: 'rgba(24, 36, 29, 0.95)',
            footerBg: 'rgba(17, 26, 20, 0.95)'
          }
        : {
            canvasBg: '#F5F7F2',
            cardSurface: '#FFFFFF',
            elevatedSurface: '#EBF0E6',
            border: '#D5DFD1',
            primary: '#2D5A43',
            primaryHover: '#1E3E2E',
            secondary: '#4A7C59',
            textPrimary: '#1E2D24',
            textMuted: '#526659',
            accent: '#3E6B52',
            accentSoft: 'rgba(45, 90, 67, 0.12)',
            headerBg: 'rgba(255, 255, 255, 0.95)',
            footerBg: 'rgba(245, 247, 242, 0.95)'
          };
    case 'cyber-engineer':
      return isDark
        ? {
            canvasBg: '#050811',
            cardSurface: '#0B1120',
            elevatedSurface: '#111C35',
            border: '#1E293B',
            primary: '#06B6D4',
            primaryHover: '#0891B2',
            secondary: '#8B5CF6',
            textPrimary: '#F1F5F9',
            textMuted: '#94A3B8',
            accent: '#06B6D4',
            accentSoft: 'rgba(6, 182, 212, 0.18)',
            headerBg: 'rgba(11, 17, 32, 0.95)',
            footerBg: 'rgba(5, 8, 17, 0.95)'
          }
        : {
            canvasBg: '#F0F9FF',
            cardSurface: '#FFFFFF',
            elevatedSurface: '#E0F2FE',
            border: '#BAE6FD',
            primary: '#0891B2',
            primaryHover: '#0E7490',
            secondary: '#7C3AED',
            textPrimary: '#0F172A',
            textMuted: '#475569',
            accent: '#0891B2',
            accentSoft: 'rgba(8, 145, 178, 0.12)',
            headerBg: 'rgba(255, 255, 255, 0.95)',
            footerBg: 'rgba(240, 249, 255, 0.95)'
          };
    case 'academic-classic':
      return isDark
        ? {
            canvasBg: '#171312',
            cardSurface: '#211C1A',
            elevatedSurface: '#2C2522',
            border: '#423832',
            primary: '#D4A373',
            primaryHover: '#C59B27',
            secondary: '#C59B27',
            textPrimary: '#FAF7F2',
            textMuted: '#B8A898',
            accent: '#D4A373',
            accentSoft: 'rgba(212, 163, 115, 0.18)',
            headerBg: 'rgba(33, 28, 26, 0.95)',
            footerBg: 'rgba(23, 19, 18, 0.95)'
          }
        : {
            canvasBg: '#FAF7F2',
            cardSurface: '#FFFFFF',
            elevatedSurface: '#F3ECE0',
            border: '#E2D5C3',
            primary: '#6B1D28',
            primaryHover: '#4E141D',
            secondary: '#1B4332',
            textPrimary: '#2B231D',
            textMuted: '#786858',
            accent: '#C59B27',
            accentSoft: 'rgba(107, 29, 40, 0.10)',
            headerBg: 'rgba(255, 255, 255, 0.95)',
            footerBg: 'rgba(250, 247, 242, 0.95)'
          };
    case 'sunrise-momentum':
      return isDark
        ? {
            canvasBg: '#141210',
            cardSurface: '#1C1815',
            elevatedSurface: '#27221E',
            border: '#3D332B',
            primary: '#F97316',
            primaryHover: '#EA580C',
            secondary: '#FB923C',
            textPrimary: '#FAF6F0',
            textMuted: '#A8A29E',
            accent: '#F97316',
            accentSoft: 'rgba(249, 115, 22, 0.18)',
            headerBg: 'rgba(28, 24, 21, 0.95)',
            footerBg: 'rgba(20, 18, 16, 0.95)'
          }
        : {
            canvasBg: '#FFFDF9',
            cardSurface: '#FFFFFF',
            elevatedSurface: '#FFF6EC',
            border: '#FED7AA',
            primary: '#EA580C',
            primaryHover: '#C2410C',
            secondary: '#F97316',
            textPrimary: '#1C1917',
            textMuted: '#78716C',
            accent: '#EA580C',
            accentSoft: 'rgba(234, 88, 12, 0.12)',
            headerBg: 'rgba(255, 255, 255, 0.95)',
            footerBg: 'rgba(255, 253, 249, 0.95)'
          };
    case 'deep-work':
    default:
      return isDark
        ? {
            canvasBg: '#101012',
            cardSurface: '#17171A',
            elevatedSurface: '#232328',
            border: '#32323A',
            primary: '#A1A1AA',
            primaryHover: '#D4D4D8',
            secondary: '#71717A',
            textPrimary: '#FAFAFA',
            textMuted: '#A1A1AA',
            accent: '#E4E4E7',
            accentSoft: 'rgba(161, 161, 170, 0.16)',
            headerBg: 'rgba(23, 23, 26, 0.95)',
            footerBg: 'rgba(16, 16, 18, 0.95)'
          }
        : {
            canvasBg: '#F4F4F5',
            cardSurface: '#FFFFFF',
            elevatedSurface: '#E4E4E7',
            border: '#D4D4D8',
            primary: '#3F3F46',
            primaryHover: '#27272A',
            secondary: '#52525B',
            textPrimary: '#18181B',
            textMuted: '#71717A',
            accent: '#3F3F46',
            accentSoft: 'rgba(63, 63, 70, 0.12)',
            headerBg: 'rgba(255, 255, 255, 0.95)',
            footerBg: 'rgba(244, 244, 245, 0.95)'
          };
  }
};

