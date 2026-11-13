export type CompanionId =
  | 'vault-dweller'
  | 'dogmeat'
  | 'codsworth'
  | 'eyebot'
  | 'deathclaw'
  | 'liberty-prime';

export type SuitColorId =
  | 'vault-cobalt'
  | 'overseer-gold'
  | 'reactor-crimson'
  | 'hydroponics-emerald'
  | 'stealth-slate';

export type HairStyleId = 'quiff' | 'spiky' | 'bob' | 'buzz';

export type HairColorId = 'blonde' | 'raven' | 'auburn' | 'silver' | 'nuka-cherry';

export type SkinToneId = 'fair' | 'tan' | 'deep' | 'ghoul';

export type AccessoryId = 'none' | 'hardhat' | 'goggles' | 'glasses' | 'party-hat';

export type VaultNumberId = '101' | '111' | '76' | '33' | '13';

export interface DwellerAppearance {
  suitColor: SuitColorId;
  vaultNumber: VaultNumberId;
  hairStyle: HairStyleId;
  hairColor: HairColorId;
  skinTone: SkinToneId;
  accessory: AccessoryId;
}

export interface VaultAvatarConfig {
  companion: CompanionId;
  dweller: DwellerAppearance;
  patrolEnabled: boolean;
}

export interface AvatarScreenPosition {
  x: number;
  y: number;
  isCustomPlaced: boolean;
}

export const DEFAULT_AVATAR_CONFIG: VaultAvatarConfig = {
  companion: 'vault-dweller',
  dweller: {
    suitColor: 'vault-cobalt',
    vaultNumber: '101',
    hairStyle: 'quiff',
    hairColor: 'blonde',
    skinTone: 'fair',
    accessory: 'none'
  },
  patrolEnabled: true
};

export interface CompanionOption {
  id: CompanionId;
  name: string;
  role: string;
  origin: string;
  perk: string;
  accentHex: string;
}

export const COMPANION_OPTIONS: CompanionOption[] = [
  {
    id: 'vault-dweller',
    name: 'Vault Dweller',
    role: 'Licensed CE Candidate',
    origin: 'Vault-Tec Sector 101',
    perk: 'Full appearance & jumpsuit customization',
    accentHex: '#FBC02D'
  },
  {
    id: 'dogmeat',
    name: 'Dogmeat',
    role: 'Loyal K-9 Pathfinder',
    origin: 'Red Rocket Truck Stop',
    perk: 'Sniffs out PSAD traps & boosts morale',
    accentHex: '#DC2626'
  },
  {
    id: 'codsworth',
    name: 'Codsworth',
    role: 'Mr. Handy Unit',
    origin: 'Sanctuary Hills',
    perk: 'Precision MSTE & calculus butler',
    accentHex: '#38BDF8'
  },
  {
    id: 'eyebot',
    name: 'ED-E Eyebot',
    role: 'Recon Telemetry Probe',
    origin: 'Mojave Wasteland',
    perk: 'High-frequency HPGE formula radar',
    accentHex: '#22C55E'
  },
  {
    id: 'deathclaw',
    name: 'Mini Deathclaw',
    role: 'Tamed Bunker Mascot',
    origin: 'Quarry Junction',
    perk: 'Crushes structural shear calculations',
    accentHex: '#F59E0B'
  },
  {
    id: 'liberty-prime',
    name: 'Mini Liberty Prime',
    role: 'Mark II Exam Defender',
    origin: 'Citadel Hangar',
    perk: 'Annihilates board exam failure odds',
    accentHex: '#60A5FA'
  }
];

export const SUIT_COLOR_PRESETS: Record<
  SuitColorId,
  { label: string; main: string; dark: string; trim: string; text: string }
> = {
  'vault-cobalt': {
    label: 'Vault Cobalt',
    main: '#1D4ED8',
    dark: '#1E3A8A',
    trim: '#FACC15',
    text: '#FEF08A'
  },
  'overseer-gold': {
    label: 'Overseer Navy',
    main: '#1E293B',
    dark: '#0F172A',
    trim: '#F59E0B',
    text: '#FDE68A'
  },
  'reactor-crimson': {
    label: 'Reactor Crimson',
    main: '#B91C1C',
    dark: '#7F1D1D',
    trim: '#FBBF24',
    text: '#FEF3C7'
  },
  'hydroponics-emerald': {
    label: 'Hydroponics Green',
    main: '#047857',
    dark: '#064E3B',
    trim: '#A3E635',
    text: '#ECFCCB'
  },
  'stealth-slate': {
    label: 'Recon Stealth',
    main: '#334155',
    dark: '#1E293B',
    trim: '#38BDF8',
    text: '#E0F2FE'
  }
};

export const HAIR_COLOR_PRESETS: Record<HairColorId, { label: string; fill: string; brow: string }> = {
  blonde: { label: 'Vault Blonde', fill: '#FACC15', brow: '#854D0E' },
  raven: { label: 'Raven Black', fill: '#1E293B', brow: '#0F172A' },
  auburn: { label: 'Wasteland Auburn', fill: '#B45309', brow: '#78350F' },
  silver: { label: 'Silver Fox', fill: '#CBD5E1', brow: '#64748B' },
  'nuka-cherry': { label: 'Nuka Cherry', fill: '#E11D48', brow: '#881337' }
};

export const SKIN_TONE_PRESETS: Record<SkinToneId, { label: string; fill: string; cheek: string }> = {
  fair: { label: 'Fair', fill: '#FED7AA', cheek: '#FCA5A5' },
  tan: { label: 'Warm Tan', fill: '#E2A77C', cheek: '#F87171' },
  deep: { label: 'Deep Espresso', fill: '#8D5524', cheek: '#C2410C' },
  ghoul: { label: 'Glowing Ghoul', fill: '#A3E635', cheek: '#4D7C0F' }
};

export const VAULT_NUMBER_OPTIONS: VaultNumberId[] = ['101', '111', '76', '33', '13'];

export const HAIR_STYLE_OPTIONS: { id: HairStyleId; label: string }[] = [
  { id: 'quiff', label: 'Classic Swoop' },
  { id: 'spiky', label: 'Wasteland Spike' },
  { id: 'bob', label: 'Lab Bob' },
  { id: 'buzz', label: 'Bunker Buzz' }
];

export const ACCESSORY_OPTIONS: { id: AccessoryId; label: string }[] = [
  { id: 'none', label: 'Standard' },
  { id: 'hardhat', label: 'CE Hardhat' },
  { id: 'goggles', label: 'Field Goggles' },
  { id: 'glasses', label: 'Overseer Specs' },
  { id: 'party-hat', label: 'Vault Party Hat' }
];
