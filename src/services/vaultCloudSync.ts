import { User } from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';
import {
  AchievementBadge,
  CEQuestion,
  DailyActivityRecord,
  ExamSessionResult,
  FlashcardItemProgress,
  FlashcardProgress,
  StreakData,
  UserProfile,
  VaultAvatarConfig
} from '../types';
import { CrtIntensity, ThemeId } from '../types/theme';
import {
  DEFAULT_AVATAR_CONFIG,
  SkinToneId,
  SuitColorId,
  HairColorId,
  CompanionId
} from '../types/avatar';
import {
  DEFAULT_USER_PROFILE,
  getAchievements,
  getActiveThemeId,
  getAllDailyActivity,
  getAvatarConfig,
  getBookmarks,
  getBottleCaps,
  getCrtEnabled,
  getCrtIntensity,
  getCustomQuestions,
  getDailyStudyGoal,
  getDistractionFree,
  getDwellerDashboardMetrics,
  getExamHistory,
  getFlashcardProgress,
  getFormulaBookmarks,
  getFormulaProgress,
  getLeaderboardNickname,
  getLeaderboardVisibility,
  getLocalDateString,
  getSoundMuted,
  getSoundVolume,
  getStreakData,
  getThemeMode,
  getTodayDateString,
  getUserProfile,
  getYesterdayDateString
} from '../utils/storage';
import { INITIAL_ACHIEVEMENTS } from '../data/achievements';
import { soundManager } from '../utils/audio';

const VALID_ID_REGEX = /^[a-zA-Z0-9_-]+$/;
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const WEEK_REGEX = /^\d{4}-W\d{2}$/;
const MONTH_REGEX = /^\d{4}-\d{2}$/;
const VALID_THEME_IDS: ThemeId[] = ['vault-tec', 'nuka-cola', 'power-armor', 'radaway-medbay'];
const VALID_CRT_INTENSITIES: CrtIntensity[] = ['subtle', 'classic', 'strong'];
const VALID_AREAS = ['ALL', 'PSAD', 'HPGE', 'MSTE'] as const;
const VALID_DIFFICULTIES = ['ALL', 'Easy', 'Medium', 'Hard'] as const;

const clampString = (val: unknown, maxLen: number, fallback = ''): string => {
  if (typeof val !== 'string') return fallback;
  const trimmed = val.trim();
  if (trimmed.length === 0) return fallback;
  return trimmed.slice(0, maxLen);
};

const clampInt = (val: unknown, min: number, max: number, fallback: number): number => {
  const num = typeof val === 'number' ? Math.trunc(val) : Number.parseInt(String(val), 10);
  if (!Number.isFinite(num)) return fallback;
  return Math.max(min, Math.min(max, num));
};

const clampNumber = (val: unknown, min: number, max: number, fallback: number): number => {
  const num = typeof val === 'number' ? val : Number(val);
  if (!Number.isFinite(num)) return fallback;
  return Math.max(min, Math.min(max, num));
};

const sanitizeId = (raw: string, prefix: string): string => {
  const cleaned = raw.replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 120);
  if (cleaned.length > 0 && VALID_ID_REGEX.test(cleaned)) {
    return cleaned;
  }
  return `${prefix}_${Date.now()}`;
};

// Recursively remove undefined values from plain objects/arrays while preserving
// Firestore FieldValue sentinels (e.g. serverTimestamp()), Dates, etc.
function stripUndefined<T>(input: T): T {
  if (Array.isArray(input)) {
    return input.map(item => stripUndefined(item)) as unknown as T;
  }
  if (input !== null && typeof input === 'object') {
    const proto = Object.getPrototypeOf(input);
    if (proto !== Object.prototype && proto !== null) {
      return input;
    }
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(input as Record<string, unknown>)) {
      if (v !== undefined) {
        out[k] = stripUndefined(v);
      }
    }
    return out as T;
  }
  return input;
}

function buildDwellerProfilePayload(user: User, includeCreatedAt: boolean): Record<string, unknown> {
  const profile = getUserProfile();
  const streak = getStreakData();
  const avatar = getAvatarConfig();
  const activeTheme = getActiveThemeId();
  const crtIntensity = getCrtIntensity();
  const themeMode = getThemeMode();

  const safeDate = DATE_REGEX.test(profile.targetExamDate || '')
    ? profile.targetExamDate
    : DEFAULT_USER_PROFILE.targetExamDate;

  const fallbackDweller = clampString(user.displayName, 80, DEFAULT_USER_PROFILE.name);
  const dwellerName = clampString(profile.name, 80, fallbackDweller);

  const payload: Record<string, unknown> = {
    ownerId: user.uid,
    email: clampString(user.email, 254, 'dweller@vault101.local'),
    displayName: typeof user.displayName === 'string' ? user.displayName.slice(0, 120) : '',
    photoURL: typeof user.photoURL === 'string' ? user.photoURL.slice(0, 500) : '',
    dwellerName,
    targetRank: clampString(profile.targetRank, 120, DEFAULT_USER_PROFILE.targetRank),
    targetExamDate: safeDate,
    bottleCaps: clampInt(getBottleCaps(), 0, 10000000, 150),
    dailyStudyGoal: clampInt(getDailyStudyGoal(), 5, 200, 15),
    themeMode: themeMode === 'light' ? 'light' : 'dark',
    activeThemeId: VALID_THEME_IDS.includes(activeTheme) ? activeTheme : 'vault-tec',
    crtEnabled: Boolean(getCrtEnabled()),
    crtIntensity: VALID_CRT_INTENSITIES.includes(crtIntensity) ? crtIntensity : 'subtle',
    isDistractionFree: Boolean(getDistractionFree()),
    soundMuted: Boolean(getSoundMuted()),
    soundVolume: clampNumber(getSoundVolume(), 0, 1, 0.8),
    streakCurrent: clampInt(streak.currentStreak, 0, 10000, 0),
    streakBest: clampInt(streak.bestStreak, 0, 10000, 0),
    streakLastCheckInDate:
      typeof streak.lastCheckInDate === 'string' && DATE_REGEX.test(streak.lastCheckInDate)
        ? streak.lastCheckInDate
        : '',
    streakHistory: Array.isArray(streak.checkInHistory)
      ? streak.checkInHistory
          .filter((d): d is string => typeof d === 'string' && DATE_REGEX.test(d))
          .slice(-2000)
      : [],
    avatarCompanion: clampString(avatar.companion, 40, DEFAULT_AVATAR_CONFIG.companion),
    avatarSuitColor: clampString(avatar.dweller?.suitColor, 40, DEFAULT_AVATAR_CONFIG.dweller.suitColor),
    avatarVaultNumber: clampString(avatar.dweller?.vaultNumber, 16, DEFAULT_AVATAR_CONFIG.dweller.vaultNumber),
    avatarHairStyle: clampString(avatar.dweller?.hairStyle, 40, DEFAULT_AVATAR_CONFIG.dweller.hairStyle),
    avatarHairColor: clampString(avatar.dweller?.hairColor, 40, DEFAULT_AVATAR_CONFIG.dweller.hairColor),
    avatarSkinTone: clampString(avatar.dweller?.skinTone, 40, DEFAULT_AVATAR_CONFIG.dweller.skinTone),
    avatarAccessory: clampString(avatar.dweller?.accessory, 40, DEFAULT_AVATAR_CONFIG.dweller.accessory),
    updatedAt: serverTimestamp()
  };

  if (includeCreatedAt) {
    payload.createdAt = serverTimestamp();
  }

  return payload;
}

function buildStudyProgressPayload(
  user: User,
  includeCreatedAt: boolean,
  flashcardProgressOverride?: FlashcardProgress
): Record<string, unknown> {
  const bookmarks = getBookmarks()
    .map(id => Math.trunc(Number(id)))
    .filter(id => Number.isFinite(id) && id >= 0)
    .slice(0, 5000);

  const formulaBookmarks = getFormulaBookmarks()
    .filter((id): id is string => typeof id === 'string' && id.trim().length > 0)
    .map(id => id.trim().slice(0, 120))
    .slice(0, 1000);

  const rawFlashcards = flashcardProgressOverride ?? getFlashcardProgress();
  const flashcardProgress: Record<string, FlashcardItemProgress> = {};
  Object.entries(rawFlashcards)
    .slice(0, 5000)
    .forEach(([k, val]) => {
      if (val && typeof val === 'object') {
        flashcardProgress[String(k)] = stripUndefined(val);
      }
    });

  const rawFormulas = getFormulaProgress();
  const formulaProgress: Record<string, FlashcardItemProgress> = {};
  Object.entries(rawFormulas)
    .slice(0, 1000)
    .forEach(([k, val]) => {
      if (val && typeof val === 'object') {
        formulaProgress[String(k)] = stripUndefined(val);
      }
    });

  const rawDaily = getAllDailyActivity();
  const dailyActivity: Record<string, DailyActivityRecord> = {};
  Object.entries(rawDaily)
    .slice(-1500)
    .forEach(([dateKey, rec]) => {
      if (DATE_REGEX.test(dateKey) && rec && typeof rec === 'object') {
        dailyActivity[dateKey] = stripUndefined(rec);
      }
    });

  const achievements = getAchievements()
    .slice(0, 100)
    .map(b =>
      stripUndefined({
        id: b.id,
        currentProgress: Number.isFinite(b.currentProgress) ? b.currentProgress : 0,
        unlockedAt: typeof b.unlockedAt === 'number' ? b.unlockedAt : null
      })
    );

  const payload: Record<string, unknown> = {
    ownerId: user.uid,
    bookmarks,
    formulaBookmarks,
    flashcardProgress,
    formulaProgress,
    dailyActivity,
    achievements,
    updatedAt: serverTimestamp()
  };

  if (includeCreatedAt) {
    payload.createdAt = serverTimestamp();
  }

  return payload;
}

function buildExamSessionPayload(
  user: User,
  session: ExamSessionResult,
  includeCreatedAt: boolean
): { sessionId: string; payload: Record<string, unknown> } {
  const sessionId = sanitizeId(session.id || `exam_${session.timestamp || Date.now()}`, 'exam');
  const safeAnswers: Record<string, string> = {};
  if (session.userAnswers && typeof session.userAnswers === 'object') {
    Object.entries(session.userAnswers)
      .slice(0, 500)
      .forEach(([qid, ans]) => {
        if (typeof ans === 'string') {
          safeAnswers[String(qid)] = ans.slice(0, 500);
        }
      });
  }

  const flaggedIds = Array.isArray(session.flaggedIds)
    ? session.flaggedIds
        .map(id => Math.trunc(Number(id)))
        .filter(id => Number.isFinite(id))
        .slice(0, 500)
    : [];

  const questionIds = Array.isArray(session.questionIds)
    ? session.questionIds
        .map(id => Math.trunc(Number(id)))
        .filter(id => Number.isFinite(id))
        .slice(0, 500)
    : [];

  const area = (VALID_AREAS as readonly string[]).includes(session.area) ? session.area : 'ALL';
  const difficulty = (VALID_DIFFICULTIES as readonly string[]).includes(session.difficulty)
    ? session.difficulty
    : 'ALL';

  const payload: Record<string, unknown> = {
    ownerId: user.uid,
    sessionId,
    timestamp: clampInt(session.timestamp, 0, Number.MAX_SAFE_INTEGER, Date.now()),
    area,
    subtopic: clampString(session.subtopic, 160, 'ALL'),
    difficulty,
    totalQuestions: clampInt(session.totalQuestions, 0, 500, questionIds.length),
    correctAnswers: clampInt(session.correctAnswers, 0, 500, 0),
    percentage: clampNumber(session.percentage, 0, 100, 0),
    timeSpentSeconds: clampInt(session.timeSpentSeconds, 0, 86400, 0),
    timeLimitMinutes: clampInt(session.timeLimitMinutes, 0, 1440, 0),
    userAnswers: safeAnswers,
    flaggedIds,
    questionIds,
    passed: Boolean(session.passed),
    updatedAt: serverTimestamp()
  };

  if (includeCreatedAt) {
    payload.createdAt = serverTimestamp();
  }

  return { sessionId, payload };
}

function buildCustomQuestionPayload(
  user: User,
  q: CEQuestion,
  includeCreatedAt: boolean
): { docId: string; payload: Record<string, unknown> } {
  const questionId = clampInt(q.id, 1, Number.MAX_SAFE_INTEGER, Date.now());
  const docId = sanitizeId(`q_${questionId}`, 'q');
  const area = q.area === 'PSAD' || q.area === 'HPGE' || q.area === 'MSTE' ? q.area : 'PSAD';
  const difficulty =
    q.difficulty === 'Easy' || q.difficulty === 'Medium' || q.difficulty === 'Hard'
      ? q.difficulty
      : 'Medium';
  const choices =
    Array.isArray(q.choices) && q.choices.length > 0
      ? q.choices.map(c => clampString(c, 500, 'Option')).slice(0, 10)
      : [clampString(q.answer, 500, 'Answer')];

  const payload: Record<string, unknown> = {
    ownerId: user.uid,
    questionId,
    area,
    subtopic: clampString(q.subtopic, 160, 'General'),
    difficulty,
    question: clampString(q.question, 2000, 'Question'),
    answer: clampString(q.answer, 1000, choices[0]),
    choices,
    explanation: typeof q.explanation === 'string' ? q.explanation.slice(0, 3000) : '',
    reference: typeof q.reference === 'string' ? q.reference.slice(0, 300) : '',
    addedAt: clampInt(q.addedAt, 0, Number.MAX_SAFE_INTEGER, Date.now()),
    updatedAt: serverTimestamp()
  };

  if (includeCreatedAt) {
    payload.createdAt = serverTimestamp();
  }

  return { docId, payload };
}

function mergeFlashcardMaps<T extends FlashcardItemProgress>(
  localMap: Record<string, T>,
  cloudMap: Record<string, T>
): Record<string, T> {
  const merged: Record<string, T> = { ...cloudMap };
  for (const [key, localItem] of Object.entries(localMap)) {
    const cloudItem = merged[key];
    if (!cloudItem) {
      merged[key] = localItem;
      continue;
    }
    const localScore = (localItem.reviewCount || 0) * 10000000000000 + (localItem.lastReviewed || 0);
    const cloudScore = (cloudItem.reviewCount || 0) * 10000000000000 + (cloudItem.lastReviewed || 0);
    merged[key] = localScore >= cloudScore ? localItem : cloudItem;
  }
  return merged;
}

function mergeStreak(localStreak: StreakData, cloudData: Record<string, unknown>): StreakData {
  const cloudHistory = Array.isArray(cloudData.streakHistory)
    ? cloudData.streakHistory.filter((d): d is string => typeof d === 'string' && DATE_REGEX.test(d))
    : [];
  const unionHistory = Array.from(new Set([...(localStreak.checkInHistory || []), ...cloudHistory])).sort();

  const cloudBest = typeof cloudData.streakBest === 'number' ? cloudData.streakBest : 0;
  const cloudCurrent = typeof cloudData.streakCurrent === 'number' ? cloudData.streakCurrent : 0;
  const cloudLast =
    typeof cloudData.streakLastCheckInDate === 'string' && cloudData.streakLastCheckInDate.length > 0
      ? cloudData.streakLastCheckInDate
      : null;

  const today = getLocalDateString();
  const yesterday = getYesterdayDateString();
  const lastFromHistory = unionHistory.length > 0 ? unionHistory[unionHistory.length - 1] : null;
  const candidates = [localStreak.lastCheckInDate, cloudLast, lastFromHistory].filter(
    (d): d is string => typeof d === 'string' && d.length > 0
  );
  const latestCheckIn = candidates.sort().pop() || null;

  let currentStreak = 0;
  if (latestCheckIn === today || latestCheckIn === yesterday) {
    // Recompute consecutive run from unionHistory if available
    if (unionHistory.length > 0 && unionHistory[unionHistory.length - 1] === latestCheckIn) {
      let count = 1;
      for (let i = unionHistory.length - 2; i >= 0; i--) {
        const prev = new Date(`${unionHistory[i]}T00:00:00`);
        const next = new Date(`${unionHistory[i + 1]}T00:00:00`);
        const diffDays = Math.round((next.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) count++;
        else break;
      }
      currentStreak = Math.max(count, localStreak.currentStreak || 0, cloudCurrent);
    } else {
      currentStreak = Math.max(localStreak.currentStreak || 0, cloudCurrent);
    }
  }

  return {
    currentStreak,
    lastCheckInDate: latestCheckIn,
    checkInHistory: unionHistory,
    bestStreak: Math.max(localStreak.bestStreak || 0, cloudBest, currentStreak)
  };
}

function broadcastAllLocalSyncEvents(): void {
  if (typeof window === 'undefined') return;
  soundManager.syncFromStorage();
  const dispatch = (name: string, detail?: unknown) =>
    window.dispatchEvent(new CustomEvent(name, detail !== undefined ? { detail } : undefined));

  dispatch('cele_backup_restored', { source: 'cloud-sync' });
  dispatch('cele_streak_updated', getStreakData());
  dispatch('cele_caps_updated', getBottleCaps());
  dispatch('cele_daily_goal_updated', getDailyStudyGoal());
  dispatch('cele_custom_questions_updated', getCustomQuestions());
  dispatch('cele_flashcard_progress_updated', getFlashcardProgress());
  dispatch('cele_formula_progress_updated', getFormulaProgress());
  dispatch('cele_formula_bookmarks_updated', getFormulaBookmarks());
  dispatch('cele_avatar_updated', getAvatarConfig());
  dispatch('cele_theme_changed', getActiveThemeId());
}

export function isCloudOfflineBypassActive(): boolean {
  try {
    return (
      typeof sessionStorage !== 'undefined' &&
      sessionStorage.getItem('cele_cloud_sync_offline_mode') === '1'
    );
  } catch {
    return false;
  }
}

let cloudSyncQueue: Promise<void> = Promise.resolve();

function enqueueCloudSync<T>(task: () => Promise<T>): Promise<T> {
  const run = cloudSyncQueue.then(task, task);
  cloudSyncQueue = run.then(
    () => undefined,
    () => undefined
  );
  return run;
}

const syncedExamKeysByUid = new Map<string, Set<string>>();
const syncedCustomKeysByUid = new Map<string, Set<string>>();

async function ensureParentDwellerDoc(user: User): Promise<void> {
  const userPath = `users/${user.uid}`;
  const userRef = doc(db, 'users', user.uid);
  try {
    const snap = await getDoc(userRef);
    if (!snap.exists()) {
      await setDoc(userRef, buildDwellerProfilePayload(user, true));
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, userPath);
  }
}

/**
 * Ensures parent /users/{uid} and /users/{uid}/studyProgress/main exist,
 * merges cloud data non-destructively with local storage, and persists merged snapshot.
 */
async function syncVaultOnSignInInternal(user: User): Promise<void> {
  if (!user.emailVerified) {
    throw new Error('Google email must be verified to enable Vault Cloud Sync.');
  }

  const userPath = `users/${user.uid}`;
  const userRef = doc(db, 'users', user.uid);
  const progressPath = `users/${user.uid}/studyProgress/main`;
  const progressRef = doc(db, 'users', user.uid, 'studyProgress', 'main');

  let userSnap;
  try {
    userSnap = await getDoc(userRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, userPath);
  }

  if (!userSnap.exists()) {
    // First-time cloud registration for this Dweller: upload local snapshot
    const localProfile = getUserProfile();
    if (localProfile.name === DEFAULT_USER_PROFILE.name && user.displayName) {
      localStorage.setItem(
        'cele_user_profile_v1',
        JSON.stringify({
          ...localProfile,
          name: clampString(user.displayName, 80, DEFAULT_USER_PROFILE.name)
        })
      );
      broadcastAllLocalSyncEvents();
    }

    try {
      await setDoc(userRef, buildDwellerProfilePayload(user, true));
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, userPath);
    }

    try {
      await setDoc(progressRef, buildStudyProgressPayload(user, true));
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, progressPath);
    }

    // Upload local exam history, custom questions & public leaderboard standing
    await syncSubcollectionsToCloud(user);
    await syncLeaderboardEntryInternal(user);
    return;
  }

  // Existing cloud profile: fetch progress + examSessions + customQuestions and merge
  const cloudUser = userSnap.data() as Record<string, unknown>;

  let progressSnap;
  try {
    progressSnap = await getDoc(progressRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, progressPath);
  }

  const sessionsPath = `users/${user.uid}/examSessions`;
  let cloudSessions: ExamSessionResult[] = [];
  try {
    const qSessions = query(
      collection(db, 'users', user.uid, 'examSessions'),
      where('ownerId', '==', user.uid),
      limit(50)
    );
    const sessionsSnap = await getDocs(qSessions);
    cloudSessions = sessionsSnap.docs.map(d => {
      const data = d.data();
      return {
        id: String(data.sessionId || d.id),
        timestamp: Number(data.timestamp || 0),
        area: (data.area || 'ALL') as ExamSessionResult['area'],
        subtopic: String(data.subtopic || 'ALL'),
        difficulty: (data.difficulty || 'ALL') as ExamSessionResult['difficulty'],
        totalQuestions: Number(data.totalQuestions || 0),
        correctAnswers: Number(data.correctAnswers || 0),
        percentage: Number(data.percentage || 0),
        timeSpentSeconds: Number(data.timeSpentSeconds || 0),
        timeLimitMinutes: Number(data.timeLimitMinutes || 0),
        userAnswers: (data.userAnswers || {}) as Record<number, string>,
        flaggedIds: Array.isArray(data.flaggedIds) ? (data.flaggedIds as number[]) : [],
        questionIds: Array.isArray(data.questionIds) ? (data.questionIds as number[]) : [],
        passed: Boolean(data.passed)
      };
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, sessionsPath);
  }

  const customPath = `users/${user.uid}/customQuestions`;
  let cloudCustomQuestions: CEQuestion[] = [];
  try {
    const qCustom = query(
      collection(db, 'users', user.uid, 'customQuestions'),
      where('ownerId', '==', user.uid),
      limit(200)
    );
    const customSnap = await getDocs(qCustom);
    cloudCustomQuestions = customSnap.docs.map(d => {
      const data = d.data();
      return {
        id: Number(data.questionId || 0),
        area: (data.area || 'PSAD') as CEQuestion['area'],
        subtopic: String(data.subtopic || 'General'),
        difficulty: (data.difficulty || 'Medium') as CEQuestion['difficulty'],
        question: String(data.question || ''),
        answer: String(data.answer || ''),
        choices: Array.isArray(data.choices) ? (data.choices as string[]) : [],
        explanation: String(data.explanation || ''),
        reference: data.reference ? String(data.reference) : undefined,
        addedAt: Number(data.addedAt || Date.now()),
        isCustom: true
      };
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, customPath);
  }

  // Merge profile & preferences
  const localProfile = getUserProfile();
  const cloudDwellerName = clampString(cloudUser.dwellerName, 80, '');
  const mergedProfile: UserProfile = {
    name:
      localProfile.name === DEFAULT_USER_PROFILE.name && cloudDwellerName
        ? cloudDwellerName
        : localProfile.name !== DEFAULT_USER_PROFILE.name
          ? localProfile.name
          : clampString(user.displayName, 80, DEFAULT_USER_PROFILE.name),
    targetRank:
      localProfile.targetRank === DEFAULT_USER_PROFILE.targetRank &&
      typeof cloudUser.targetRank === 'string' &&
      cloudUser.targetRank.trim()
        ? cloudUser.targetRank.trim()
        : localProfile.targetRank,
    targetExamDate:
      localProfile.targetExamDate === DEFAULT_USER_PROFILE.targetExamDate &&
      typeof cloudUser.targetExamDate === 'string' &&
      DATE_REGEX.test(cloudUser.targetExamDate)
        ? cloudUser.targetExamDate
        : localProfile.targetExamDate
  };

  const mergedCaps = Math.max(
    getBottleCaps(),
    typeof cloudUser.bottleCaps === 'number' ? cloudUser.bottleCaps : 0
  );

  const mergedStreak = mergeStreak(getStreakData(), cloudUser);

  const localAvatar = getAvatarConfig();
  const mergedAvatar: VaultAvatarConfig = {
    ...localAvatar,
    companion: (cloudUser.avatarCompanion as CompanionId) || localAvatar.companion,
    dweller: {
      ...localAvatar.dweller,
      suitColor: (cloudUser.avatarSuitColor as SuitColorId) || localAvatar.dweller.suitColor,
      vaultNumber: String(
        cloudUser.avatarVaultNumber || localAvatar.dweller.vaultNumber
      ) as VaultAvatarConfig['dweller']['vaultNumber'],
      hairStyle: String(
        cloudUser.avatarHairStyle || localAvatar.dweller.hairStyle
      ) as VaultAvatarConfig['dweller']['hairStyle'],
      hairColor: (cloudUser.avatarHairColor as HairColorId) || localAvatar.dweller.hairColor,
      skinTone: (cloudUser.avatarSkinTone as SkinToneId) || localAvatar.dweller.skinTone,
      accessory: String(
        cloudUser.avatarAccessory || localAvatar.dweller.accessory
      ) as VaultAvatarConfig['dweller']['accessory']
    }
  };

  // Persist merged profile, caps, streak, avatar, theme to localStorage
  localStorage.setItem('cele_user_profile_v1', JSON.stringify(mergedProfile));
  localStorage.setItem('cele_bottle_caps_v1', String(mergedCaps));
  localStorage.setItem('cele_streak_v1', JSON.stringify(mergedStreak));
  localStorage.setItem('cele_avatar_config_v1', JSON.stringify(mergedAvatar));
  if (typeof cloudUser.dailyStudyGoal === 'number') {
    localStorage.setItem(
      'cele_daily_study_goal_v1',
      String(clampInt(cloudUser.dailyStudyGoal, 5, 200, 15))
    );
  }
  if (cloudUser.themeMode === 'dark' || cloudUser.themeMode === 'light') {
    localStorage.setItem('cele_theme_mode_v1', cloudUser.themeMode);
  }
  if (VALID_THEME_IDS.includes(cloudUser.activeThemeId as ThemeId)) {
    localStorage.setItem('cele_active_theme_id', String(cloudUser.activeThemeId));
  }
  if (typeof cloudUser.crtEnabled === 'boolean') {
    localStorage.setItem('cele_crt_enabled_v1', String(cloudUser.crtEnabled));
  }
  if (VALID_CRT_INTENSITIES.includes(cloudUser.crtIntensity as CrtIntensity)) {
    localStorage.setItem('cele_crt_intensity_v1', String(cloudUser.crtIntensity));
  }
  if (typeof cloudUser.isDistractionFree === 'boolean') {
    localStorage.setItem('cele_distraction_free_v1', String(cloudUser.isDistractionFree));
  }

  // Merge StudyProgress
  if (progressSnap && progressSnap.exists()) {
    const cloudProg = progressSnap.data();

    const cloudBookmarks = Array.isArray(cloudProg.bookmarks)
      ? cloudProg.bookmarks.filter((n): n is number => typeof n === 'number')
      : [];
    const mergedBookmarks = Array.from(new Set([...getBookmarks(), ...cloudBookmarks]));

    const cloudFormulaBookmarks = Array.isArray(cloudProg.formulaBookmarks)
      ? cloudProg.formulaBookmarks.filter((s): s is string => typeof s === 'string')
      : [];
    const mergedFormulaBookmarks = Array.from(
      new Set([...getFormulaBookmarks(), ...cloudFormulaBookmarks])
    );

    const localFc = getFlashcardProgress() as unknown as Record<string, FlashcardItemProgress>;
    const cloudFc = (cloudProg.flashcardProgress || {}) as Record<string, FlashcardItemProgress>;
    const mergedFc = mergeFlashcardMaps(localFc, cloudFc) as unknown as FlashcardProgress;

    const localFormulaProg = getFormulaProgress();
    const cloudFormulaProg = (cloudProg.formulaProgress || {}) as Record<string, FlashcardItemProgress>;
    const mergedFormulaProg = mergeFlashcardMaps(localFormulaProg, cloudFormulaProg);

    const localDaily = getAllDailyActivity();
    const cloudDaily = (cloudProg.dailyActivity || {}) as Record<string, DailyActivityRecord>;
    const mergedDaily: Record<string, DailyActivityRecord> = { ...cloudDaily };
    for (const [dateKey, rec] of Object.entries(localDaily)) {
      const existing = mergedDaily[dateKey];
      if (!existing) {
        mergedDaily[dateKey] = rec;
      } else {
        mergedDaily[dateKey] = {
          date: dateKey,
          questionsAnswered: Math.max(rec.questionsAnswered || 0, existing.questionsAnswered || 0),
          tasks: {
            reviewedFlashcards: Boolean(
              rec.tasks?.reviewedFlashcards || existing.tasks?.reviewedFlashcards
            ),
            learnedNew: Boolean(rec.tasks?.learnedNew || existing.tasks?.learnedNew),
            tookMockExam: Boolean(rec.tasks?.tookMockExam || existing.tasks?.tookMockExam)
          }
        };
      }
    }

    const todayStr = getTodayDateString();
    if (mergedDaily[todayStr]?.tasks) {
      localStorage.setItem(`cele_daily_tasks_${todayStr}`, JSON.stringify(mergedDaily[todayStr].tasks));
    }

    const localAch = getAchievements();
    const cloudAchList = Array.isArray(cloudProg.achievements)
      ? (cloudProg.achievements as Array<{ id: string; currentProgress?: number; unlockedAt?: number | null }>)
      : [];
    const mergedAch: AchievementBadge[] = INITIAL_ACHIEVEMENTS.map(init => {
      const loc = localAch.find(a => a.id === init.id);
      const cld = cloudAchList.find(a => a.id === init.id);
      const progress = Math.max(loc?.currentProgress || 0, cld?.currentProgress || 0);
      const unlockedTimes = [loc?.unlockedAt, cld?.unlockedAt].filter(
        (t): t is number => typeof t === 'number' && t > 0
      );
      return {
        ...init,
        currentProgress: progress,
        unlockedAt: unlockedTimes.length > 0 ? Math.min(...unlockedTimes) : undefined
      };
    });

    localStorage.setItem('cele_bookmarks_v1', JSON.stringify(mergedBookmarks));
    localStorage.setItem('cele_formula_bookmarks_v1', JSON.stringify(mergedFormulaBookmarks));
    localStorage.setItem('cele_flashcard_progress_v1', JSON.stringify(mergedFc));
    localStorage.setItem('cele_formula_progress_v1', JSON.stringify(mergedFormulaProg));
    localStorage.setItem('cele_daily_activity_v1', JSON.stringify(mergedDaily));
    localStorage.setItem('cele_achievements_v1', JSON.stringify(mergedAch));
  }

  // Merge Exam History
  const localHistory = getExamHistory();
  const examMap = new Map<string, ExamSessionResult>();
  [...cloudSessions, ...localHistory].forEach(sess => {
    if (sess && sess.id) {
      examMap.set(sess.id, sess);
    }
  });
  const mergedHistory = Array.from(examMap.values())
    .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0))
    .slice(0, 50);
  localStorage.setItem('cele_exam_history_v1', JSON.stringify(mergedHistory));

  // Merge Custom Questions
  const localCustom = getCustomQuestions();
  const customMap = new Map<number, CEQuestion>();
  [...cloudCustomQuestions, ...localCustom].forEach(q => {
    if (q && typeof q.id === 'number') {
      customMap.set(q.id, q);
    }
  });
  const mergedCustom = Array.from(customMap.values()).sort(
    (a, b) => (a.addedAt || a.id) - (b.addedAt || b.id)
  );
  localStorage.setItem('cele_custom_questions_v1', JSON.stringify(mergedCustom));

  // Pre-seed seen keys only for sessions/custom questions already fetched from cloud
  // so any local-only offline exams or custom terms still upload after merge.
  const seenSessions = new Set<string>(
    cloudSessions.map(s => sanitizeId(s.id || `exam_${s.timestamp || 0}`, 'exam'))
  );
  syncedExamKeysByUid.set(user.uid, seenSessions);

  const seenCustom = new Set<string>(
    cloudCustomQuestions.map(q => sanitizeId(`q_${clampInt(q.id, 1, Number.MAX_SAFE_INTEGER, 1)}`, 'q'))
  );
  syncedCustomKeysByUid.set(user.uid, seenCustom);

  // Refresh UI cleanly
  broadcastAllLocalSyncEvents();

  // Push merged state back to Firestore so both local & cloud stay synchronized
  await pushVaultChangesToCloudInternal(user, {
    includeProfile: true,
    includeProgress: true,
    syncExams: true,
    syncCustom: true,
    syncLeaderboard: true
  });
}

export function syncVaultOnSignIn(user: User): Promise<void> {
  return enqueueCloudSync(() => syncVaultOnSignInInternal(user));
}

async function syncSubcollectionsToCloud(
  user: User,
  options: {
    forceAll?: boolean;
    syncExams?: boolean;
    syncCustom?: boolean;
    examHistoryOverride?: ExamSessionResult[];
    customQuestionsOverride?: CEQuestion[];
  } = {}
): Promise<void> {
  const {
    forceAll = false,
    syncExams = true,
    syncCustom = true,
    examHistoryOverride,
    customQuestionsOverride
  } = options;

  if (syncExams) {
    let seenSessions = syncedExamKeysByUid.get(user.uid);
    if (!seenSessions) {
      seenSessions = new Set<string>();
      syncedExamKeysByUid.set(user.uid, seenSessions);
    }

    const history = (examHistoryOverride ?? getExamHistory()).slice(0, 50);
    for (const session of history) {
      const { sessionId, payload } = buildExamSessionPayload(user, session, true);
      if (!forceAll && seenSessions.has(sessionId)) continue;

      const path = `users/${user.uid}/examSessions/${sessionId}`;
      const ref = doc(db, 'users', user.uid, 'examSessions', sessionId);
      try {
        const existingSnap = await getDoc(ref);
        if (existingSnap.exists()) {
          const updateData = buildExamSessionPayload(user, session, false).payload;
          await updateDoc(ref, updateData);
        } else {
          await setDoc(ref, payload);
        }
        seenSessions.add(sessionId);
      } catch (error) {
        handleFirestoreError(error, OperationType.WRITE, path);
      }
    }
  }

  if (syncCustom) {
    let seenCustom = syncedCustomKeysByUid.get(user.uid);
    if (!seenCustom) {
      seenCustom = new Set<string>();
      syncedCustomKeysByUid.set(user.uid, seenCustom);
    }

    const customQuestions = (customQuestionsOverride ?? getCustomQuestions()).slice(0, 200);
    for (const q of customQuestions) {
      const { docId, payload } = buildCustomQuestionPayload(user, q, true);
      if (!forceAll && seenCustom.has(docId)) continue;

      const path = `users/${user.uid}/customQuestions/${docId}`;
      const ref = doc(db, 'users', user.uid, 'customQuestions', docId);
      try {
        const existingSnap = await getDoc(ref);
        if (existingSnap.exists()) {
          const updateData = buildCustomQuestionPayload(user, q, false).payload;
          await updateDoc(ref, updateData);
        } else {
          await setDoc(ref, payload);
        }
        seenCustom.add(docId);
      } catch (error) {
        handleFirestoreError(error, OperationType.WRITE, path);
      }
    }
  }
}

export interface PushVaultChangesOptions {
  includeProfile?: boolean;
  includeProgress?: boolean;
  syncExams?: boolean;
  syncCustom?: boolean;
  syncLeaderboard?: boolean;
  forceSubcollections?: boolean;
  flashcardProgressOverride?: FlashcardProgress;
  examHistoryOverride?: ExamSessionResult[];
  customQuestionsOverride?: CEQuestion[];
}

async function pushVaultChangesToCloudInternal(
  user: User,
  options: PushVaultChangesOptions = {}
): Promise<void> {
  if (!user.emailVerified) return;

  const {
    includeProfile = true,
    includeProgress = true,
    syncExams = false,
    syncCustom = false,
    syncLeaderboard = true,
    forceSubcollections = false,
    flashcardProgressOverride,
    examHistoryOverride,
    customQuestionsOverride
  } = options;

  const needsParentDoc =
    includeProgress || syncExams || syncCustom || forceSubcollections;

  if (includeProfile) {
    const userPath = `users/${user.uid}`;
    const userRef = doc(db, 'users', user.uid);
    try {
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        await updateDoc(userRef, buildDwellerProfilePayload(user, false));
      } else {
        await setDoc(userRef, buildDwellerProfilePayload(user, true));
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, userPath);
    }
  } else if (needsParentDoc) {
    await ensureParentDwellerDoc(user);
  }

  if (includeProgress) {
    const progressPath = `users/${user.uid}/studyProgress/main`;
    const progressRef = doc(db, 'users', user.uid, 'studyProgress', 'main');
    try {
      const progressSnap = await getDoc(progressRef);
      if (progressSnap.exists()) {
        await updateDoc(
          progressRef,
          buildStudyProgressPayload(user, false, flashcardProgressOverride)
        );
      } else {
        await setDoc(
          progressRef,
          buildStudyProgressPayload(user, true, flashcardProgressOverride)
        );
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, progressPath);
    }
  }

  if (syncExams || syncCustom || forceSubcollections) {
    await syncSubcollectionsToCloud(user, {
      forceAll: forceSubcollections,
      syncExams: syncExams || forceSubcollections,
      syncCustom: syncCustom || forceSubcollections,
      examHistoryOverride,
      customQuestionsOverride
    });
  }

  if (syncLeaderboard) {
    await syncLeaderboardEntryInternal(user);
  }
}

export function pushVaultChangesToCloud(
  user: User,
  options: PushVaultChangesOptions = {}
): Promise<void> {
  return enqueueCloudSync(() => pushVaultChangesToCloudInternal(user, options));
}

// ==========================================
// PUBLIC LEADERBOARD STANDINGS (ZERO-PII)
// ==========================================

export interface LeaderboardEntry {
  ownerId: string;
  isPublic: boolean;
  nickname: string;
  photoURL: string;
  avatarCompanion: string;
  avatarSuitColor: string;
  avatarVaultNumber: string;
  targetRank: string;
  streakCurrent: number;
  streakBest: number;
  bottleCaps: number;
  tasksCompletedTotal: number;
  questionsAnsweredTotal: number;
  masteredCards: number;
  examsCompleted: number;
  accuracyPercent: number;
  compositeScore: number;
  dailyKey: string;
  dailyQuestions: number;
  dailyTasks: number;
  dailyScore: number;
  weeklyKey: string;
  weeklyQuestions: number;
  weeklyTasks: number;
  weeklyScore: number;
  monthlyKey: string;
  monthlyQuestions: number;
  monthlyTasks: number;
  monthlyScore: number;
  updatedAtMs?: number;
}

export function buildLocalLeaderboardEntry(user: User | null): LeaderboardEntry {
  const profile = getUserProfile();
  const avatar = getAvatarConfig();
  const metrics = getDwellerDashboardMetrics();
  const fallbackName = clampString(profile.name, 40, DEFAULT_USER_PROFILE.name);
  const nickname = clampString(getLeaderboardNickname(), 40, fallbackName);

  const safeDailyKey = DATE_REGEX.test(metrics.dailyKey) ? metrics.dailyKey : getTodayDateString();
  const safeWeeklyKey = WEEK_REGEX.test(metrics.weeklyKey) ? metrics.weeklyKey : '2026-W01';
  const safeMonthlyKey = MONTH_REGEX.test(metrics.monthlyKey) ? metrics.monthlyKey : safeDailyKey.slice(0, 7);

  return {
    ownerId: user?.uid || 'local-dweller',
    isPublic: Boolean(getLeaderboardVisibility()),
    nickname,
    photoURL: typeof user?.photoURL === 'string' ? user.photoURL.slice(0, 500) : '',
    avatarCompanion: clampString(avatar.companion, 40, DEFAULT_AVATAR_CONFIG.companion),
    avatarSuitColor: clampString(avatar.dweller?.suitColor, 40, DEFAULT_AVATAR_CONFIG.dweller.suitColor),
    avatarVaultNumber: clampString(avatar.dweller?.vaultNumber, 16, DEFAULT_AVATAR_CONFIG.dweller.vaultNumber),
    targetRank: clampString(profile.targetRank, 120, DEFAULT_USER_PROFILE.targetRank),
    streakCurrent: clampInt(metrics.streakCurrent, 0, 10000, 0),
    streakBest: clampInt(metrics.streakBest, 0, 10000, 0),
    bottleCaps: clampInt(metrics.bottleCaps, 0, 10000000, 0),
    tasksCompletedTotal: clampInt(metrics.tasksCompletedTotal, 0, 100000, 0),
    questionsAnsweredTotal: clampInt(metrics.questionsAnsweredTotal, 0, 500000, 0),
    masteredCards: clampInt(metrics.masteredCards, 0, 20000, 0),
    examsCompleted: clampInt(metrics.examsCompleted, 0, 10000, 0),
    accuracyPercent: clampNumber(metrics.accuracyPercent, 0, 100, 0),
    compositeScore: clampInt(metrics.compositeScore, 0, 200000000, 0),
    dailyKey: safeDailyKey,
    dailyQuestions: clampInt(metrics.dailyQuestions, 0, 10000, 0),
    dailyTasks: clampInt(metrics.dailyTasks, 0, 10, 0),
    dailyScore: clampInt(metrics.dailyScore, 0, 1000000, 0),
    weeklyKey: safeWeeklyKey,
    weeklyQuestions: clampInt(metrics.weeklyQuestions, 0, 100000, 0),
    weeklyTasks: clampInt(metrics.weeklyTasks, 0, 100, 0),
    weeklyScore: clampInt(metrics.weeklyScore, 0, 10000000, 0),
    monthlyKey: safeMonthlyKey,
    monthlyQuestions: clampInt(metrics.monthlyQuestions, 0, 500000, 0),
    monthlyTasks: clampInt(metrics.monthlyTasks, 0, 500, 0),
    monthlyScore: clampInt(metrics.monthlyScore, 0, 50000000, 0),
    updatedAtMs: Date.now()
  };
}

function buildLeaderboardPayload(user: User, includeCreatedAt: boolean): Record<string, unknown> {
  const entry = buildLocalLeaderboardEntry(user);
  const { updatedAtMs: _ignored, ...cleanEntry } = entry;
  const payload: Record<string, unknown> = {
    ...cleanEntry,
    ownerId: user.uid,
    updatedAt: serverTimestamp()
  };
  if (includeCreatedAt) {
    payload.createdAt = serverTimestamp();
  }
  return payload;
}

async function syncLeaderboardEntryInternal(user: User): Promise<void> {
  if (!user.emailVerified) return;

  const entryPath = `leaderboard/${user.uid}`;
  const entryRef = doc(db, 'leaderboard', user.uid);
  try {
    const snap = await getDoc(entryRef);
    if (snap.exists()) {
      await updateDoc(entryRef, buildLeaderboardPayload(user, false));
    } else {
      await setDoc(entryRef, buildLeaderboardPayload(user, true));
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, entryPath);
  }
}

export function syncLeaderboardEntry(user: User): Promise<void> {
  return enqueueCloudSync(() => syncLeaderboardEntryInternal(user));
}

function mapDocToLeaderboardEntry(id: string, data: Record<string, unknown>): LeaderboardEntry {
  const rawUpdated = data.updatedAt as { toMillis?: () => number } | undefined;
  return {
    ownerId: typeof data.ownerId === 'string' ? data.ownerId : id,
    isPublic: Boolean(data.isPublic),
    nickname: typeof data.nickname === 'string' && data.nickname.trim() ? data.nickname.trim() : 'Vault Dweller',
    photoURL: typeof data.photoURL === 'string' ? data.photoURL : '',
    avatarCompanion: typeof data.avatarCompanion === 'string' ? data.avatarCompanion : DEFAULT_AVATAR_CONFIG.companion,
    avatarSuitColor: typeof data.avatarSuitColor === 'string' ? data.avatarSuitColor : DEFAULT_AVATAR_CONFIG.dweller.suitColor,
    avatarVaultNumber: typeof data.avatarVaultNumber === 'string' ? data.avatarVaultNumber : DEFAULT_AVATAR_CONFIG.dweller.vaultNumber,
    targetRank: typeof data.targetRank === 'string' ? data.targetRank : DEFAULT_USER_PROFILE.targetRank,
    streakCurrent: Number(data.streakCurrent || 0),
    streakBest: Number(data.streakBest || 0),
    bottleCaps: Number(data.bottleCaps || 0),
    tasksCompletedTotal: Number(data.tasksCompletedTotal || 0),
    questionsAnsweredTotal: Number(data.questionsAnsweredTotal || 0),
    masteredCards: Number(data.masteredCards || 0),
    examsCompleted: Number(data.examsCompleted || 0),
    accuracyPercent: Number(data.accuracyPercent || 0),
    compositeScore: Number(data.compositeScore || 0),
    dailyKey: typeof data.dailyKey === 'string' ? data.dailyKey : '',
    dailyQuestions: Number(data.dailyQuestions || 0),
    dailyTasks: Number(data.dailyTasks || 0),
    dailyScore: Number(data.dailyScore || 0),
    weeklyKey: typeof data.weeklyKey === 'string' ? data.weeklyKey : '',
    weeklyQuestions: Number(data.weeklyQuestions || 0),
    weeklyTasks: Number(data.weeklyTasks || 0),
    weeklyScore: Number(data.weeklyScore || 0),
    monthlyKey: typeof data.monthlyKey === 'string' ? data.monthlyKey : '',
    monthlyQuestions: Number(data.monthlyQuestions || 0),
    monthlyTasks: Number(data.monthlyTasks || 0),
    monthlyScore: Number(data.monthlyScore || 0),
    updatedAtMs: typeof rawUpdated?.toMillis === 'function' ? rawUpdated.toMillis() : undefined
  };
}

export async function fetchLeaderboardEntries(currentUser: User | null): Promise<LeaderboardEntry[]> {
  if (!currentUser) {
    return [buildLocalLeaderboardEntry(null)];
  }

  const entries: LeaderboardEntry[] = [];
  const seenUids = new Set<string>();

  try {
    const q = query(collection(db, 'leaderboard'), where('isPublic', '==', true), limit(100));
    const snap = await getDocs(q);
    snap.docs.forEach(d => {
      const mapped = mapDocToLeaderboardEntry(d.id, d.data() as Record<string, unknown>);
      seenUids.add(mapped.ownerId);
      entries.push(mapped);
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, 'leaderboard');
  }

  // Ensure current user appears in standings even when their visibility is set to private
  if (!seenUids.has(currentUser.uid)) {
    const ownPath = `leaderboard/${currentUser.uid}`;
    try {
      const ownSnap = await getDoc(doc(db, 'leaderboard', currentUser.uid));
      if (ownSnap.exists()) {
        entries.push(mapDocToLeaderboardEntry(ownSnap.id, ownSnap.data() as Record<string, unknown>));
        seenUids.add(currentUser.uid);
      } else {
        entries.push(buildLocalLeaderboardEntry(currentUser));
        seenUids.add(currentUser.uid);
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, ownPath);
    }
  }

  // Merge fresh local metrics for the signed-in user's own row so edits/tasks reflect immediately
  const localSelf = buildLocalLeaderboardEntry(currentUser);
  return entries.map(item => (item.ownerId === currentUser.uid ? { ...item, ...localSelf } : item));
}

