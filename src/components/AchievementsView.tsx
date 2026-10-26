import React from 'react';
import { AchievementBadge } from '../types';
import {
  Trophy,
  GraduationCap,
  Building2,
  Waves,
  Compass,
  BookOpen,
  Sparkles,
  Moon,
  Award,
  Zap,
  Flame,
  Crown,
  Lock,
  CheckCircle2,
  Volume2
} from 'lucide-react';
import { soundManager } from '../utils/audio';

interface AchievementsViewProps {
  achievements: AchievementBadge[];
}

export const AchievementsView: React.FC<AchievementsViewProps> = ({ achievements }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Trophy': return <Trophy className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Waves': return <Waves className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Moon': return <Moon className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Crown': return <Crown className="w-5 h-5" />;
      default: return <Award className="w-5 h-5" />;
    }
  };

  const unlockedCount = achievements.filter(a => !!a.unlockedAt).length;

  return (
    <div className="max-w-4xl mx-auto w-full my-6 p-4 sm:p-6 lg:p-8 space-y-6">
      
      {/* Header */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xs flex items-center justify-between gap-4 text-stone-900 dark:text-stone-100 transition-colors">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            Achievement Badges
          </h2>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
            Milestones unlocked as you study
          </p>
        </div>

        <div className="flex items-center space-x-3 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 px-4 py-3 rounded-2xl">
          <Trophy className="w-6 h-6 text-orange-600 dark:text-orange-400" />
          <div>
            <div className="text-xl font-black font-mono">
              {unlockedCount} / {achievements.length}
            </div>
            <div className="text-[10px] text-stone-500 dark:text-stone-400 uppercase font-bold">
              Unlocked
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map(badge => {
          const isUnlocked = !!badge.unlockedAt;
          const progressPct = Math.min(100, Math.round((badge.currentProgress / badge.requirement) * 100));

          const handleBadgeClick = () => {
            if (isUnlocked) {
              soundManager.playBadge();
            } else {
              soundManager.playWaterDrop();
            }
          };

          return (
            <div
              key={badge.id}
              onClick={handleBadgeClick}
              role="button"
              tabIndex={0}
              title={isUnlocked ? `${badge.title} (Unlocked!) Click to play chime` : `${badge.title} (In Progress)`}
              className={`rounded-2xl p-5 border transition flex flex-col justify-between cursor-pointer interactive-card ${
                isUnlocked
                  ? 'bg-white dark:bg-stone-900 border-orange-300 dark:border-orange-900/60 shadow-xs ring-1 ring-orange-200 dark:ring-orange-950'
                  : 'bg-stone-50/60 dark:bg-stone-900/60 border-stone-200 dark:border-stone-800 opacity-75'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isUnlocked
                        ? 'bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400'
                        : 'bg-stone-200 dark:bg-stone-800 text-stone-500'
                    }`}
                  >
                    {getIcon(badge.icon)}
                  </div>

                  {isUnlocked ? (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 text-[10px] font-bold">
                      Unlocked
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-500 text-[10px] font-bold">
                      Locked
                    </span>
                  )}
                </div>

                <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100">{badge.title}</h4>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                  {badge.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 space-y-1">
                <div className="flex justify-between text-[11px] text-stone-500 dark:text-stone-400 font-mono">
                  <span>{badge.currentProgress} / {badge.requirement}</span>
                  <span>{progressPct}%</span>
                </div>
                <div className="w-full h-1.5 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      isUnlocked ? 'bg-orange-600 dark:bg-orange-500' : 'bg-stone-400 dark:bg-stone-600'
                    }`}
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
