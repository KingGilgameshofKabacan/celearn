import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Check,
  CheckCircle2,
  Cloud,
  Edit3,
  Eye,
  EyeOff,
  Flame,
  HelpCircle,
  LogIn,
  RefreshCw,
  Search,
  Sparkles,
  Trophy,
  Users
} from 'lucide-react';
import { UserProfile } from '../types';
import {
  CompanionId,
  DEFAULT_AVATAR_CONFIG,
  SuitColorId,
  VaultAvatarConfig,
  VaultNumberId
} from '../types/avatar';
import { useFirebaseAuth } from '../contexts/FirebaseAuthContext';
import { ensureFirestoreReachable, isFirestoreBackendOffline } from '../firebase';
import {
  buildLocalLeaderboardEntry,
  fetchLeaderboardEntries,
  isCloudOfflineBypassActive,
  LeaderboardEntry
} from '../services/vaultCloudSync';
import {
  getAvatarConfig,
  getIsoWeekKey,
  getLeaderboardNickname,
  getLeaderboardVisibility,
  getMonthKey,
  getTodayDateString,
  saveLeaderboardNickname,
  saveLeaderboardVisibility
} from '../utils/storage';
import { soundManager } from '../utils/audio';
import { BottleCapIcon } from './BottleCapIcon';
import { VaultAvatarSprite } from './VaultAvatarSprite';
import { RANK_TROPHY_TITLES, VaultRankTrophy } from './VaultRankTrophies';

export type RankingPeriod = 'daily' | 'weekly' | 'monthly' | 'all-time';
export type RankingMetric =
  | 'overall'
  | 'streak'
  | 'tasks'
  | 'caps'
  | 'mastery'
  | 'questions';

interface UserDashboardRankingsViewProps {
  profile: UserProfile;
}

const VALID_COMPANIONS: CompanionId[] = [
  'vault-dweller',
  'dogmeat',
  'codsworth',
  'eyebot',
  'deathclaw',
  'liberty-prime'
];

const VALID_SUITS: SuitColorId[] = [
  'vault-cobalt',
  'overseer-gold',
  'reactor-crimson',
  'hydroponics-emerald',
  'stealth-slate'
];

const VALID_VAULT_NUMS: VaultNumberId[] = ['101', '111', '76', '33', '13'];

function buildEntryAvatarConfig(entry: LeaderboardEntry): VaultAvatarConfig {
  const companion = VALID_COMPANIONS.includes(entry.avatarCompanion as CompanionId)
    ? (entry.avatarCompanion as CompanionId)
    : DEFAULT_AVATAR_CONFIG.companion;
  const suitColor = VALID_SUITS.includes(entry.avatarSuitColor as SuitColorId)
    ? (entry.avatarSuitColor as SuitColorId)
    : DEFAULT_AVATAR_CONFIG.dweller.suitColor;
  const vaultNumber = VALID_VAULT_NUMS.includes(entry.avatarVaultNumber as VaultNumberId)
    ? (entry.avatarVaultNumber as VaultNumberId)
    : DEFAULT_AVATAR_CONFIG.dweller.vaultNumber;

  return {
    companion,
    dweller: {
      ...DEFAULT_AVATAR_CONFIG.dweller,
      suitColor,
      vaultNumber
    },
    patrolEnabled: false
  };
}

interface PeriodSnapshot {
  score: number;
  tasks: number;
  questions: number;
  streakValue: number;
}

function getPeriodSnapshot(
  entry: LeaderboardEntry,
  period: RankingPeriod,
  currentDailyKey: string,
  currentWeeklyKey: string,
  currentMonthlyKey: string
): PeriodSnapshot {
  if (period === 'daily') {
    const isFresh = entry.dailyKey === currentDailyKey;
    return {
      score: isFresh ? entry.dailyScore : 0,
      tasks: isFresh ? entry.dailyTasks : 0,
      questions: isFresh ? entry.dailyQuestions : 0,
      streakValue: entry.streakCurrent
    };
  }
  if (period === 'weekly') {
    const isFresh = entry.weeklyKey === currentWeeklyKey;
    return {
      score: isFresh ? entry.weeklyScore : 0,
      tasks: isFresh ? entry.weeklyTasks : 0,
      questions: isFresh ? entry.weeklyQuestions : 0,
      streakValue: entry.streakCurrent
    };
  }
  if (period === 'monthly') {
    const isFresh = entry.monthlyKey === currentMonthlyKey;
    return {
      score: isFresh ? entry.monthlyScore : 0,
      tasks: isFresh ? entry.monthlyTasks : 0,
      questions: isFresh ? entry.monthlyQuestions : 0,
      streakValue: entry.streakBest
    };
  }
  return {
    score: entry.compositeScore,
    tasks: entry.tasksCompletedTotal,
    questions: entry.questionsAnsweredTotal,
    streakValue: entry.streakBest
  };
}

function getSortMetricValue(
  entry: LeaderboardEntry,
  snapshot: PeriodSnapshot,
  metric: RankingMetric,
  period: RankingPeriod
): number {
  switch (metric) {
    case 'overall':
      return snapshot.score;
    case 'streak':
      return period === 'all-time' || period === 'monthly'
        ? entry.streakBest
        : entry.streakCurrent;
    case 'tasks':
      return snapshot.tasks;
    case 'caps':
      return entry.bottleCaps;
    case 'mastery':
      return entry.masteredCards;
    case 'questions':
      return snapshot.questions;
  }
}

export const UserDashboardRankingsView: React.FC<UserDashboardRankingsViewProps> = ({
  profile
}) => {
  const { user, openLoginModal, syncStatus, syncNow } = useFirebaseAuth();

  const [localAvatar, setLocalAvatar] = useState<VaultAvatarConfig>(getAvatarConfig);
  const [myNickname, setMyNickname] = useState<string>(getLeaderboardNickname);
  const [isEditingMyNick, setIsEditingMyNick] = useState<boolean>(false);
  const [myNickDraft, setMyNickDraft] = useState<string>(getLeaderboardNickname);
  const [isPublic, setIsPublic] = useState<boolean>(getLeaderboardVisibility);

  const [period, setPeriod] = useState<RankingPeriod>('weekly');
  const [metric, setMetric] = useState<RankingMetric>('overall');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [fatalRenderError, setFatalRenderError] = useState<Error | null>(null);

  if (fatalRenderError) {
    throw fatalRenderError;
  }

  const refreshLocalMetrics = useCallback(() => {
    setLocalAvatar(getAvatarConfig());
    const nick = getLeaderboardNickname();
    setMyNickname(nick);
    setIsPublic(getLeaderboardVisibility());
  }, []);

  const loadLeaderboard = useCallback(async () => {
    setIsLoading(true);
    setFetchError(null);
    if (!user || isCloudOfflineBypassActive() || isFirestoreBackendOffline()) {
      setEntries([buildLocalLeaderboardEntry(user)]);
      setIsLoading(false);
      return;
    }
    const reachable = await ensureFirestoreReachable();
    if (!reachable) {
      setEntries([buildLocalLeaderboardEntry(user)]);
      setFetchError('Cloud leaderboard is offline. Showing your local Vault standing.');
      setIsLoading(false);
      return;
    }
    try {
      const list = await fetchLeaderboardEntries(user);
      setEntries(list);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      const lower = message.toLowerCase();
      if (
        lower.includes('client is offline') ||
        lower.includes('could not reach cloud firestore') ||
        lower.includes('code=unavailable')
      ) {
        setEntries([buildLocalLeaderboardEntry(user)]);
        setFetchError('Cloud leaderboard is offline. Showing your local Vault standing.');
      } else if (message.includes('"operationType"')) {
        setFatalRenderError(err instanceof Error ? err : new Error(message));
      } else {
        setFetchError(message || 'Unable to load leaderboard standings.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    refreshLocalMetrics();
    void loadLeaderboard();
  }, [refreshLocalMetrics, loadLeaderboard]);

  useEffect(() => {
    const onLocalChange = () => {
      refreshLocalMetrics();
      void loadLeaderboard();
    };

    window.addEventListener('cele_streak_updated', onLocalChange);
    window.addEventListener('cele_exam_submitted', onLocalChange);
    window.addEventListener('cele_flashcard_drill_completed', onLocalChange);
    window.addEventListener('cele_cloud_synced', onLocalChange);
    window.addEventListener('cele_profile_updated', onLocalChange);
    window.addEventListener('cele_avatar_updated', onLocalChange);
    window.addEventListener('cele_leaderboard_updated', onLocalChange);
    window.addEventListener('cele_backup_restored', onLocalChange);

    return () => {
      window.removeEventListener('cele_streak_updated', onLocalChange);
      window.removeEventListener('cele_exam_submitted', onLocalChange);
      window.removeEventListener('cele_flashcard_drill_completed', onLocalChange);
      window.removeEventListener('cele_cloud_synced', onLocalChange);
      window.removeEventListener('cele_profile_updated', onLocalChange);
      window.removeEventListener('cele_avatar_updated', onLocalChange);
      window.removeEventListener('cele_leaderboard_updated', onLocalChange);
      window.removeEventListener('cele_backup_restored', onLocalChange);
    };
  }, [refreshLocalMetrics, loadLeaderboard]);

  const currentDailyKey = getTodayDateString();
  const currentWeeklyKey = getIsoWeekKey();
  const currentMonthlyKey = getMonthKey();
  const selfUid = user?.uid || 'local-dweller';

  const rankedEntries = useMemo(() => {
    const withComputed = entries.map(entry => {
      const snapshot = getPeriodSnapshot(
        entry,
        period,
        currentDailyKey,
        currentWeeklyKey,
        currentMonthlyKey
      );
      const primaryValue = getSortMetricValue(entry, snapshot, metric, period);
      return {
        entry,
        snapshot,
        primaryValue
      };
    });

    withComputed.sort((a, b) => {
      if (b.primaryValue !== a.primaryValue) return b.primaryValue - a.primaryValue;
      if (b.entry.compositeScore !== a.entry.compositeScore) {
        return b.entry.compositeScore - a.entry.compositeScore;
      }
      if (b.entry.streakBest !== a.entry.streakBest) {
        return b.entry.streakBest - a.entry.streakBest;
      }
      return b.entry.bottleCaps - a.entry.bottleCaps;
    });

    return withComputed.map((item, idx) => ({
      ...item,
      rank: idx + 1
    }));
  }, [entries, period, metric, currentDailyKey, currentWeeklyKey, currentMonthlyKey]);

  const myRankedRow = useMemo(
    () => rankedEntries.find(r => r.entry.ownerId === selfUid) || null,
    [rankedEntries, selfUid]
  );

  const topFive = useMemo(() => rankedEntries.slice(0, 5), [rankedEntries]);

  const filteredRows = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return rankedEntries;
    return rankedEntries.filter(
      r =>
        r.entry.nickname.toLowerCase().includes(q) ||
        r.entry.targetRank.toLowerCase().includes(q)
    );
  }, [rankedEntries, searchQuery]);

  const handleSaveMyNickname = (e: React.FormEvent) => {
    e.preventDefault();
    const saved = saveLeaderboardNickname(myNickDraft);
    setMyNickname(saved);
    setMyNickDraft(saved);
    setIsEditingMyNick(false);
    soundManager.playCompleteTask();
    if (user) {
      void syncNow().then(() => loadLeaderboard());
    }
  };

  const handleToggleVisibility = () => {
    const next = saveLeaderboardVisibility(!isPublic);
    setIsPublic(next);
    soundManager.playClick();
    if (user) {
      void syncNow().then(() => loadLeaderboard());
    }
  };

  const formatPrimaryMetricLabel = (val: number): string => {
    if (metric === 'caps') return `${val.toLocaleString()} Caps`;
    if (metric === 'streak') return `${val}d Streak`;
    if (metric === 'tasks') return `${val} Tasks`;
    if (metric === 'mastery') return `${val} Cards`;
    if (metric === 'questions') return `${val.toLocaleString()} Items`;
    return `${val.toLocaleString()} pts`;
  };

  const periodCaption =
    period === 'daily'
      ? `Daily Standing (${currentDailyKey})`
      : period === 'weekly'
        ? `Weekly Standing (${currentWeeklyKey})`
        : period === 'monthly'
          ? `Monthly Standing (${currentMonthlyKey})`
          : 'All-Time Vault Standing';

  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
      {/* ================================================================ */}
      {/* DWELLER IDENTITY & LEADERBOARD PROFILE HEADER                    */}
      {/* ================================================================ */}
      <section className="bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] rounded-3xl overflow-hidden shadow-xs">
        <div className="h-2 w-full vault-tec-hazard-stripe-sm" />

        <div className="p-6 sm:p-7">
          {/* Identity & Actions Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4 sm:gap-5 min-w-0">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={myNickname}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-amber-400 shrink-0 shadow-xs"
                />
              ) : (
                <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-2xl bg-stone-50 dark:bg-[#162852] border border-stone-200 dark:border-[#2B447A] flex items-center justify-center shrink-0 overflow-hidden">
                  <VaultAvatarSprite config={localAvatar} className="w-16 h-20" />
                </div>
              )}

              <div className="min-w-0 flex-1 space-y-1.5">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500 dark:text-sky-300">
                  <span className="font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    Dweller Command Dashboard
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate">{profile.targetRank}</span>
                  {myRankedRow && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="font-bold text-stone-800 dark:text-amber-300 tabular-nums">
                        Rank #{myRankedRow.rank} of {rankedEntries.length}
                      </span>
                    </>
                  )}
                </div>

                {isEditingMyNick ? (
                  <form
                    onSubmit={handleSaveMyNickname}
                    className="flex flex-wrap items-center gap-2 pt-1"
                  >
                    <input
                      type="text"
                      value={myNickDraft}
                      onChange={e => setMyNickDraft(e.target.value)}
                      maxLength={40}
                      placeholder="Your leaderboard nickname"
                      autoFocus
                      className="bg-stone-50 dark:bg-[#080E1E] border border-amber-500/60 rounded-xl px-3 py-1.5 text-sm font-bold text-stone-900 dark:text-white outline-none focus:ring-2 focus:ring-amber-400 min-w-[180px]"
                      required
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#080E1E] text-xs font-black flex items-center space-x-1 transition cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>Save</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditingMyNick(false);
                        setMyNickDraft(myNickname);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-[#162852] text-stone-600 dark:text-stone-300 text-xs font-bold transition cursor-pointer whitespace-nowrap shrink-0"
                    >
                      Cancel
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-amber-400 tracking-tight font-mono truncate">
                      {myNickname}
                    </h1>
                    <button
                      type="button"
                      onClick={() => {
                        setMyNickDraft(myNickname);
                        setIsEditingMyNick(true);
                        soundManager.playClick();
                      }}
                      className="px-2.5 py-1 rounded-lg border border-stone-200 dark:border-[#2B447A] bg-stone-50 hover:bg-stone-100 dark:bg-[#162852] dark:hover:bg-[#1D356B] text-stone-700 dark:text-stone-200 text-xs font-semibold flex items-center space-x-1 transition cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-amber-500" />
                      <span>Edit Nickname</span>
                    </button>
                  </div>
                )}

                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Review your personal exam streaks, bottle caps, completed tasks, and live standing against other CELE Dwellers.
                </p>
              </div>
            </div>

            {/* Right Controls: Visibility Toggle & Sync/Login */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={handleToggleVisibility}
                title={
                  isPublic
                    ? 'Your nickname and stats are visible on public rankings'
                    : 'Your stats are hidden from other users'
                }
                className={`px-3 py-2 rounded-xl border text-xs font-bold flex items-center space-x-1.5 transition cursor-pointer whitespace-nowrap shrink-0 ${
                  isPublic
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20'
                    : 'bg-stone-100 dark:bg-[#162852] border-stone-200 dark:border-[#2B447A] text-stone-600 dark:text-stone-300'
                }`}
              >
                {isPublic ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                <span>{isPublic ? 'Public Standing' : 'Private Standing'}</span>
              </button>

              {user ? (
                <button
                  type="button"
                  onClick={() => {
                    void syncNow().then(() => loadLeaderboard());
                  }}
                  disabled={syncStatus === 'syncing' || isLoading}
                  className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-[#080E1E] text-xs font-black flex items-center space-x-1.5 transition cursor-pointer whitespace-nowrap shrink-0"
                >
                  <RefreshCw
                    className={`w-3.5 h-3.5 ${
                      syncStatus === 'syncing' || isLoading ? 'animate-spin' : ''
                    }`}
                  />
                  <span>{syncStatus === 'syncing' ? 'Syncing...' : 'Sync Standing'}</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={openLoginModal}
                  className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#080E1E] text-xs font-black flex items-center space-x-1.5 transition cursor-pointer whitespace-nowrap shrink-0"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Sign in with Google</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* MULTI-USER DWELLER RANKINGS & TOP 5 TROPHY PODIUM                */}
      {/* ================================================================ */}
      <section className="space-y-5">
        {/* Section Title & Period / Metric Controls */}
        <div className="bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] rounded-3xl p-5 sm:p-6 space-y-5 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-500 shrink-0">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-black text-stone-900 dark:text-amber-400 font-mono tracking-tight">
                  Vault Overseer Rankings
                </h2>
                <p className="text-xs text-stone-500 dark:text-sky-300 font-mono">
                  {periodCaption} · Custom trophies awarded to Top 5 Dwellers
                </p>
              </div>
            </div>

            {/* Period Filter Tabs */}
            <div
              role="tablist"
              aria-label="Ranking Period"
              className="inline-flex flex-wrap items-center gap-1 p-1 rounded-2xl bg-stone-100 dark:bg-[#080E1E] border border-stone-200 dark:border-[#2B447A]"
            >
              {(
                [
                  { id: 'daily', label: 'Daily' },
                  { id: 'weekly', label: 'Weekly' },
                  { id: 'monthly', label: 'Monthly' },
                  { id: 'all-time', label: 'All-Time' }
                ] as { id: RankingPeriod; label: string }[]
              ).map(tab => {
                const active = period === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => {
                      soundManager.playClick();
                      setPeriod(tab.id);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono transition cursor-pointer whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-amber-400 text-[#080E1E] shadow-xs'
                        : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-amber-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Metric Filter Tabs + Search + Refresh */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pt-4 border-t border-stone-200 dark:border-[#2B447A]/70">
            <div className="flex flex-wrap items-center gap-1.5">
              {(
                [
                  { id: 'overall', label: 'Overall Score', icon: <Trophy className="w-3.5 h-3.5" /> },
                  { id: 'streak', label: 'Streaks', icon: <Flame className="w-3.5 h-3.5" /> },
                  { id: 'tasks', label: 'Completed Tasks', icon: <CheckCircle2 className="w-3.5 h-3.5" /> },
                  { id: 'caps', label: 'Bottle Caps', icon: <BottleCapIcon className="w-3.5 h-3.5" /> },
                  { id: 'mastery', label: 'Mastery', icon: <Sparkles className="w-3.5 h-3.5" /> },
                  { id: 'questions', label: 'Questions', icon: <HelpCircle className="w-3.5 h-3.5" /> }
                ] as { id: RankingMetric; label: string; icon: React.ReactNode }[]
              ).map(m => {
                const active = metric === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      setMetric(m.id);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 border transition cursor-pointer whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-amber-500/15 border-amber-500/50 text-amber-700 dark:text-amber-300'
                        : 'bg-stone-50 dark:bg-[#101F42] border-stone-200 dark:border-[#2B447A] text-stone-600 dark:text-stone-300 hover:border-amber-400'
                    }`}
                  >
                    {m.icon}
                    <span>{m.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <div className="relative flex-1 sm:w-56">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Filter Dwellers..."
                  className="w-full bg-stone-50 dark:bg-[#080E1E] border border-stone-200 dark:border-[#2B447A] rounded-xl pl-8 pr-3 py-1.5 text-xs text-stone-900 dark:text-stone-100 outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  void loadLeaderboard();
                }}
                disabled={isLoading}
                className="px-3 py-1.5 rounded-xl border border-stone-200 dark:border-[#2B447A] bg-stone-50 hover:bg-stone-100 dark:bg-[#162852] dark:hover:bg-[#1D356B] text-stone-700 dark:text-stone-200 text-xs font-bold flex items-center space-x-1.5 transition cursor-pointer whitespace-nowrap shrink-0"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>
          </div>

          {/* Guest Cloud Notice */}
          {!user && (
            <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start sm:items-center space-x-3">
                <Cloud className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 sm:mt-0" />
                <div className="text-xs text-stone-700 dark:text-stone-200">
                  <span className="font-bold block sm:inline">Viewing local preview standing. </span>
                  <span>
                    Sign in with Google to publish your scores and compete on the live Vault-Tec multi-user leaderboard.
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={openLoginModal}
                className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#080E1E] text-xs font-black flex items-center space-x-1.5 transition cursor-pointer whitespace-nowrap shrink-0 self-end sm:self-auto"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign in with Google</span>
              </button>
            </div>
          )}

          {fetchError && (
            <div className="rounded-2xl border border-rose-500/40 bg-rose-500/10 p-3.5 flex items-center justify-between gap-3 text-xs text-rose-700 dark:text-rose-300">
              <span>{fetchError}</span>
              <button
                type="button"
                onClick={() => void loadLeaderboard()}
                className="px-3 py-1 rounded-lg bg-rose-500 text-white font-bold cursor-pointer whitespace-nowrap shrink-0"
              >
                Retry
              </button>
            </div>
          )}
        </div>

        {/* ============================================================== */}
        {/* TOP 5 CUSTOM TROPHY PODIUM                                     */}
        {/* ============================================================== */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-sm font-mono font-extrabold uppercase tracking-wider text-stone-700 dark:text-amber-300">
              Top 5 Honored Dwellers
            </h3>
            <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
              Each Dweller sets their own display nickname
            </span>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {[1, 2, 3, 4, 5].map(n => (
                <div
                  key={n}
                  className="h-56 rounded-2xl border border-stone-200 dark:border-[#2B447A] bg-white dark:bg-[#0E1B38] p-4 flex flex-col justify-between"
                >
                  <div className="h-12 w-12 rounded-xl bg-stone-200 dark:bg-[#162852]" />
                  <div className="space-y-2">
                    <div className="h-4 w-28 rounded bg-stone-200 dark:bg-[#162852]" />
                    <div className="h-3 w-20 rounded bg-stone-100 dark:bg-[#101F42]" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {topFive.map(item => {
                const trophyRank = item.rank as 1 | 2 | 3 | 4 | 5;
                const isSelf = item.entry.ownerId === selfUid;
                const avatarCfg = buildEntryAvatarConfig(item.entry);

                return (
                  <div
                    key={item.entry.ownerId}
                    className={`rounded-2xl border p-4 flex flex-col justify-between transition ${
                      trophyRank === 1
                        ? 'bg-gradient-to-b from-amber-500/15 via-white to-white dark:from-amber-500/15 dark:via-[#0E1B38] dark:to-[#0E1B38] border-amber-400 shadow-sm'
                        : 'bg-white dark:bg-[#0E1B38] border-stone-200 dark:border-[#2B447A]'
                    }`}
                  >
                    <div className="space-y-3">
                      {/* Trophy + Rank Header */}
                      <div className="flex items-start justify-between gap-2">
                        <VaultRankTrophy rank={trophyRank} size="lg" />
                        <div className="text-right">
                          <span className="text-xs font-mono font-black text-amber-600 dark:text-amber-400 block">
                            RANK #{trophyRank}
                          </span>
                          <span className="text-[11px] font-medium text-stone-500 dark:text-stone-400 leading-tight block">
                            {RANK_TROPHY_TITLES[trophyRank]}
                          </span>
                        </div>
                      </div>

                      {/* Avatar + Display Name */}
                      <div className="flex items-center space-x-2.5 pt-1">
                        {item.entry.photoURL ? (
                          <img
                            src={item.entry.photoURL}
                            alt={item.entry.nickname}
                            referrerPolicy="no-referrer"
                            className="w-10 h-10 rounded-xl object-cover border border-amber-400/50 shrink-0"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-[#162852] border border-stone-200 dark:border-[#2B447A] flex items-center justify-center shrink-0 overflow-hidden">
                            <VaultAvatarSprite config={avatarCfg} className="w-9 h-11" />
                          </div>
                        )}

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center space-x-1.5">
                            <p className="text-sm font-extrabold text-stone-900 dark:text-stone-100 truncate">
                              {item.entry.nickname}
                            </p>
                            {isSelf && (
                              <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
                                (You)
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Score & Compact Stats */}
                    <div className="mt-4 pt-3 border-t border-stone-200 dark:border-[#2B447A]/70 space-y-2.5">
                      <div>
                        <span className="text-[11px] font-mono uppercase text-stone-500 dark:text-sky-300 block">
                          {metric === 'overall' ? 'Period Score' : 'Selected Metric'}
                        </span>
                        <span className="text-lg font-black font-mono tabular-nums text-amber-600 dark:text-amber-400">
                          {formatPrimaryMetricLabel(item.primaryValue)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-stone-600 dark:text-stone-300 tabular-nums">
                        <span>Best: {item.entry.streakBest}d</span>
                        <span>Tasks: {item.snapshot.tasks}</span>
                        <span>{item.entry.bottleCaps.toLocaleString()}c</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ============================================================== */}
        {/* FULL RANKINGS STANDINGS TABLE                                  */}
        {/* ============================================================== */}
        <div className="bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] rounded-3xl overflow-hidden shadow-xs">
          <div className="px-5 py-4 border-b border-stone-200 dark:border-[#2B447A]/70 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-amber-500" />
              <h3 className="text-sm font-mono font-extrabold uppercase tracking-wider text-stone-800 dark:text-stone-100">
                Full Standings ({filteredRows.length})
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
              Dwellers set their own leaderboard nicknames
            </span>
          </div>

          {filteredRows.length === 0 ? (
            <div className="p-8 text-center text-sm text-stone-500 dark:text-stone-400">
              No Dwellers matched &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 dark:border-[#2B447A]/70 bg-stone-50/80 dark:bg-[#101F42] text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-sky-300">
                    <th className="py-3 px-4 w-20">Rank</th>
                    <th className="py-3 px-4">Dweller</th>
                    <th className="py-3 px-4 text-right">Score</th>
                    <th className="py-3 px-4 text-right">Highest Streak</th>
                    <th className="py-3 px-4 text-right">Tasks</th>
                    <th className="py-3 px-4 text-right">Bottle Caps</th>
                    <th className="py-3 px-4 text-right">Mastered</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 dark:divide-[#2B447A]/60 text-xs">
                  {filteredRows.map(row => {
                    const isSelf = row.entry.ownerId === selfUid;
                    const isTop5 = row.rank <= 5;
                    const avatarCfg = buildEntryAvatarConfig(row.entry);

                    return (
                      <tr
                        key={row.entry.ownerId}
                        className={`transition ${
                          isSelf
                            ? 'bg-amber-500/5 dark:bg-amber-500/10'
                            : 'hover:bg-stone-50 dark:hover:bg-[#162852]/40'
                        }`}
                      >
                        {/* Rank & Top 5 Trophy */}
                        <td className="py-3 px-4 font-mono font-black whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            {isTop5 ? (
                              <VaultRankTrophy
                                rank={row.rank as 1 | 2 | 3 | 4 | 5}
                                size="sm"
                              />
                            ) : (
                              <span className="w-7 text-center text-stone-500 dark:text-stone-400 tabular-nums">
                                #{row.rank}
                              </span>
                            )}
                            {isTop5 && (
                              <span className="text-amber-600 dark:text-amber-400 tabular-nums">
                                #{row.rank}
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Dweller Identity */}
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-3 min-w-[180px]">
                            {row.entry.photoURL ? (
                              <img
                                src={row.entry.photoURL}
                                alt={row.entry.nickname}
                                referrerPolicy="no-referrer"
                                className="w-8 h-8 rounded-lg object-cover border border-amber-400/40 shrink-0"
                              />
                            ) : (
                              <div className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-[#162852] border border-stone-200 dark:border-[#2B447A] flex items-center justify-center shrink-0 overflow-hidden">
                                <VaultAvatarSprite config={avatarCfg} className="w-7 h-9" />
                              </div>
                            )}

                            <div className="min-w-0">
                              <div className="flex items-center space-x-1.5">
                                <span className="font-bold text-stone-900 dark:text-stone-100 truncate max-w-[180px]">
                                  {row.entry.nickname}
                                </span>
                                {isSelf && (
                                  <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                                    (You)
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] font-mono text-stone-500 dark:text-stone-400 truncate max-w-[220px]">
                                {row.entry.targetRank}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Score */}
                        <td className="py-3 px-4 text-right font-mono font-black tabular-nums text-amber-600 dark:text-amber-400 whitespace-nowrap">
                          {formatPrimaryMetricLabel(row.primaryValue)}
                        </td>

                        {/* Highest Streak */}
                        <td className="py-3 px-4 text-right font-mono tabular-nums text-stone-700 dark:text-stone-200 whitespace-nowrap">
                          {row.entry.streakBest}d{' '}
                          <span className="text-stone-400 dark:text-stone-500">
                            ({row.entry.streakCurrent}d now)
                          </span>
                        </td>

                        {/* Tasks */}
                        <td className="py-3 px-4 text-right font-mono tabular-nums text-stone-700 dark:text-stone-200 whitespace-nowrap">
                          {row.snapshot.tasks}
                        </td>

                        {/* Caps */}
                        <td className="py-3 px-4 text-right font-mono font-bold tabular-nums text-stone-800 dark:text-amber-300 whitespace-nowrap">
                          {row.entry.bottleCaps.toLocaleString()}
                        </td>

                        {/* Mastered */}
                        <td className="py-3 px-4 text-right font-mono tabular-nums text-stone-700 dark:text-stone-200 whitespace-nowrap">
                          {row.entry.masteredCards}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
