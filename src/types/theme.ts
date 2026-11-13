export type ThemeId =
  | 'vault-tec'
  | 'nuka-cola'
  | 'power-armor'
  | 'radaway-medbay';

export type CrtIntensity = 'subtle' | 'classic' | 'strong';

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
  sectorLabel: string;
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
    id: 'vault-tec',
    name: 'Vault-Tec Overseer',
    sectorLabel: 'Control Room · Vault 101',
    tagline: 'Vault 101 Licensure Terminal & Pip-Boy OS',
    personality: 'Resilient, tactical, atomic-age engineering discipline, and unwavering survival grit.',
    description:
      'Vault-Tec iconic cobalt navy, hazard yellow accents, phosphor green Pip-Boy telemetry meters, and mechanical relay acoustics tailored for the CELE Wasteland grind.',
    bestSuitedFor:
      'Endurance calculations, timed G.O.A.T. mock assessments, S.P.E.C.I.A.L. civil engineering mastery, and daily vault survival drills.',
    appearance:
      'Vault cobalt blue & bunker steel, hazard gold indicators, and Pip-Boy terminal phosphor green telemetry.',
    soundPackTitle: 'Pip-Boy Relay & Geiger Engine',
    soundPackDescription:
      'Vintage vacuum-tube relay clicks, mechanical switchgear toggles, retro terminal chirps, and authentic bottle cap rewards.',
    isDarkBase: true,
    colors: {
      primary: '#FBC02D',
      primaryHover: '#F59E0B',
      secondary: '#22C55E',
      canvasBg: '#080E1E',
      cardSurface: '#0E1B38',
      elevatedSurface: '#162852',
      border: '#2B447A',
      textPrimary: '#F8FAFC',
      textMuted: '#93C5FD',
      accent: '#FBC02D',
      accentSoft: 'rgba(251, 192, 45, 0.18)',
      swatches: [
        { name: 'Vault Cobalt', hex: '#080E1E' },
        { name: 'Console Slate', hex: '#0E1B38' },
        { name: 'Vault-Tec Gold', hex: '#FBC02D' },
        { name: 'Pip-Boy Green', hex: '#22C55E' },
        { name: 'Bunker Steel', hex: '#2B447A' }
      ]
    },
    previewCard: {
      statValue: '100% G.O.A.T.',
      statLabel: 'Reactor & Structural Integrity',
      badgeText: 'OVERSEER DECK',
      actionText: 'Start Vault Drill'
    }
  },
  {
    id: 'nuka-cola',
    name: 'Nuka-Cola Bottler',
    sectorLabel: 'Bottling Plant · Sector Nuka',
    tagline: 'Nuka-Cola Quantum Fizz & Atomic Diner',
    personality: 'High-voltage optimism, retro-atomic soda fountain flair, and sparkling sprint energy.',
    description:
      'Crisp Nuka-Cherry lacquer, warm carbonated mahogany panels, sparkling Quantum cyan accents, and retro bottle-cap diner acoustics to energize study sprints.',
    bestSuitedFor:
      'Rapid flashcard queues, timed 20-item subject speed drills, daily streak momentum, and beating personal high scores.',
    appearance:
      'Deep Cherry mahogany canvas, vibrant Nuka coral-red highlights, Quantum ice cyan, and warm diner cream.',
    soundPackTitle: 'Nuka-Fountain Pop & Fizz',
    soundPackDescription:
      'Crisp bottle-cap pops, bubbly Quantum fizz chimes, and cheerful soda-counter reward bells.',
    isDarkBase: true,
    colors: {
      primary: '#FB7185',
      primaryHover: '#F43F5E',
      secondary: '#22D3EE',
      canvasBg: '#16090B',
      cardSurface: '#241014',
      elevatedSurface: '#33161C',
      border: '#5E2630',
      textPrimary: '#FFF5F5',
      textMuted: '#FDA4AF',
      accent: '#22D3EE',
      accentSoft: 'rgba(251, 113, 133, 0.18)',
      swatches: [
        { name: 'Cola Espresso', hex: '#16090B' },
        { name: 'Cherry Lacquer', hex: '#241014' },
        { name: 'Nuka Fizz', hex: '#FB7185' },
        { name: 'Quantum Cyan', hex: '#22D3EE' },
        { name: 'Chrome Rim', hex: '#5E2630' }
      ]
    },
    previewCard: {
      statValue: '240 Caps',
      statLabel: 'Quantum Bottling Quota',
      badgeText: 'NUKA BOTTLER',
      actionText: 'Open Cap Sprint'
    }
  },
  {
    id: 'power-armor',
    name: 'Brotherhood Armory',
    sectorLabel: 'Weapon & Armor Workshop · T-60 Bay',
    tagline: 'T-60 Power Armor HUD & Fusion Core Forge',
    personality: 'Armored focus, heavy structural fortitude, pressurized precision, and steel-plate resolve.',
    description:
      'Burnished gunmetal steel plating, Brotherhood T-60 tactical amber-orange HUD visors, and industrial hydraulic sound synthesis crafted for heavy structural engineering.',
    bestSuitedFor:
      'Reinforced concrete & steel calculations, PSAD structural synthesis, geotechnical bearing problems, and full board simulations.',
    appearance:
      'Gunmetal forge steel, welded plate borders, fusion-core amber orange, and tactical tungsten highlights.',
    soundPackTitle: 'Hydraulic Piston & Fusion Core',
    soundPackDescription:
      'Heavy pneumatic armor locks, industrial metallic relays, and deep fusion-reactor startup chords.',
    isDarkBase: true,
    colors: {
      primary: '#FB923C',
      primaryHover: '#F97316',
      secondary: '#FBBF24',
      canvasBg: '#0E1116',
      cardSurface: '#161B22',
      elevatedSurface: '#212832',
      border: '#364150',
      textPrimary: '#F1F5F9',
      textMuted: '#94A3B8',
      accent: '#FBBF24',
      accentSoft: 'rgba(251, 146, 60, 0.18)',
      swatches: [
        { name: 'Forge Gunmetal', hex: '#0E1116' },
        { name: 'T-60 Plate', hex: '#161B22' },
        { name: 'Fusion Orange', hex: '#FB923C' },
        { name: 'Reactor Amber', hex: '#FBBF24' },
        { name: 'Welded Steel', hex: '#364150' }
      ]
    },
    previewCard: {
      statValue: '98% Armor',
      statLabel: 'PSAD Steel & Concrete Bay',
      badgeText: 'T-60 ARMORY',
      actionText: 'Deploy Armor Drill'
    }
  },
  {
    id: 'radaway-medbay',
    name: 'Medbay & Science Lab',
    sectorLabel: 'Medbay · RadAway & Stimpak Wing',
    tagline: 'Stimpak Bio-Monitor & RadAway Synthesis Lab',
    personality: 'Clinical precision, calm analytical stamina, and clean radiation-free reading focus.',
    description:
      'Sterile deep bio-lab slate, soothing bioluminescent mint diagnostics, RadAway amber accents, and gentle acoustic bio-monitors for sustained memory retention.',
    bestSuitedFor:
      'Deep glossary review, NSCP 2015 code memorization, hydraulics formula drills, and steady daily study streak recovery.',
    appearance:
      'Deep bio-lab obsidian green, phosphor mint readouts, RadAway amber highlights, and clean laboratory borders.',
    soundPackTitle: 'Stimpak Bio-Monitor & Lab Chime',
    soundPackDescription:
      'Clean clinical monitor pulses, soft fluid-synthesis chimes, and calm bio-recovery confirmation tones.',
    isDarkBase: true,
    colors: {
      primary: '#34D399',
      primaryHover: '#10B981',
      secondary: '#FBBF24',
      canvasBg: '#071512',
      cardSurface: '#0D221D',
      elevatedSurface: '#14312A',
      border: '#234E43',
      textPrimary: '#ECFDF5',
      textMuted: '#6EE7B7',
      accent: '#FBBF24',
      accentSoft: 'rgba(52, 211, 153, 0.18)',
      swatches: [
        { name: 'Bio-Lab Slate', hex: '#071512' },
        { name: 'Medbay Surface', hex: '#0D221D' },
        { name: 'Phosphor Mint', hex: '#34D399' },
        { name: 'RadAway Amber', hex: '#FBBF24' },
        { name: 'Sterile Grid', hex: '#234E43' }
      ]
    },
    previewCard: {
      statValue: '0 RADS',
      statLabel: 'Hydraulics & Formula Clarity',
      badgeText: 'MEDBAY WING',
      actionText: 'Open Lab Deck'
    }
  }
];

export const DEFAULT_THEME_ID: ThemeId = 'vault-tec';

export interface ActivePalette {
  canvasBg: string;
  cardSurface: string;
  elevatedSurface: string;
  border: string;
  primary: string;
  primaryHover: string;
  onPrimary: string;
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
    case 'nuka-cola':
      return isDark
        ? {
            canvasBg: '#16090B',
            cardSurface: '#241014',
            elevatedSurface: '#33161C',
            border: '#5E2630',
            primary: '#FB7185',
            primaryHover: '#F43F5E',
            onPrimary: '#16090B',
            secondary: '#22D3EE',
            textPrimary: '#FFF5F5',
            textMuted: '#FDA4AF',
            accent: '#22D3EE',
            accentSoft: 'rgba(251, 113, 133, 0.18)',
            headerBg: 'rgba(36, 16, 20, 0.96)',
            footerBg: 'rgba(22, 9, 11, 0.96)'
          }
        : {
            canvasBg: '#FFF8F6',
            cardSurface: '#FFFFFF',
            elevatedSurface: '#FEECEB',
            border: '#F5C2BE',
            primary: '#DC2626',
            primaryHover: '#B91C1C',
            onPrimary: '#FFFFFF',
            secondary: '#0284C7',
            textPrimary: '#1F1215',
            textMuted: '#6B4248',
            accent: '#0284C7',
            accentSoft: 'rgba(220, 38, 38, 0.11)',
            headerBg: 'rgba(255, 255, 255, 0.96)',
            footerBg: 'rgba(255, 248, 246, 0.96)'
          };

    case 'power-armor':
      return isDark
        ? {
            canvasBg: '#0E1116',
            cardSurface: '#161B22',
            elevatedSurface: '#212832',
            border: '#364150',
            primary: '#FB923C',
            primaryHover: '#F97316',
            onPrimary: '#110A04',
            secondary: '#FBBF24',
            textPrimary: '#F1F5F9',
            textMuted: '#94A3B8',
            accent: '#FBBF24',
            accentSoft: 'rgba(251, 146, 60, 0.18)',
            headerBg: 'rgba(22, 27, 34, 0.96)',
            footerBg: 'rgba(14, 17, 22, 0.96)'
          }
        : {
            canvasBg: '#F3F5F8',
            cardSurface: '#FFFFFF',
            elevatedSurface: '#E5E9F0',
            border: '#CBD5E1',
            primary: '#C2410C',
            primaryHover: '#9A3412',
            onPrimary: '#FFFFFF',
            secondary: '#334155',
            textPrimary: '#0F172A',
            textMuted: '#475569',
            accent: '#B45309',
            accentSoft: 'rgba(194, 65, 12, 0.11)',
            headerBg: 'rgba(255, 255, 255, 0.96)',
            footerBg: 'rgba(243, 245, 248, 0.96)'
          };

    case 'radaway-medbay':
      return isDark
        ? {
            canvasBg: '#071512',
            cardSurface: '#0D221D',
            elevatedSurface: '#14312A',
            border: '#234E43',
            primary: '#34D399',
            primaryHover: '#10B981',
            onPrimary: '#052018',
            secondary: '#FBBF24',
            textPrimary: '#ECFDF5',
            textMuted: '#6EE7B7',
            accent: '#FBBF24',
            accentSoft: 'rgba(52, 211, 153, 0.18)',
            headerBg: 'rgba(13, 34, 29, 0.96)',
            footerBg: 'rgba(7, 21, 18, 0.96)'
          }
        : {
            canvasBg: '#F2FBF8',
            cardSurface: '#FFFFFF',
            elevatedSurface: '#E3F5EE',
            border: '#B8E3D4',
            primary: '#047857',
            primaryHover: '#065F46',
            onPrimary: '#FFFFFF',
            secondary: '#D97706',
            textPrimary: '#062C22',
            textMuted: '#3F6258',
            accent: '#D97706',
            accentSoft: 'rgba(4, 120, 87, 0.11)',
            headerBg: 'rgba(255, 255, 255, 0.96)',
            footerBg: 'rgba(242, 251, 248, 0.96)'
          };

    case 'vault-tec':
    default:
      return isDark
        ? {
            canvasBg: '#080E1E',
            cardSurface: '#0E1B38',
            elevatedSurface: '#162852',
            border: '#2B447A',
            primary: '#FBC02D',
            primaryHover: '#F59E0B',
            onPrimary: '#080E1E',
            secondary: '#22C55E',
            textPrimary: '#F8FAFC',
            textMuted: '#93C5FD',
            accent: '#FBC02D',
            accentSoft: 'rgba(251, 192, 45, 0.18)',
            headerBg: 'rgba(14, 27, 56, 0.96)',
            footerBg: 'rgba(8, 14, 30, 0.96)'
          }
        : {
            canvasBg: '#F0F4FA',
            cardSurface: '#FFFFFF',
            elevatedSurface: '#E2ECF9',
            border: '#BFDBFE',
            primary: '#1E40AF',
            primaryHover: '#1D4ED8',
            onPrimary: '#FFFFFF',
            secondary: '#D97706',
            textPrimary: '#0F172A',
            textMuted: '#475569',
            accent: '#D97706',
            accentSoft: 'rgba(217, 119, 6, 0.12)',
            headerBg: 'rgba(255, 255, 255, 0.96)',
            footerBg: 'rgba(240, 244, 250, 0.96)'
          };
  }
};
