import React, { useState, useEffect } from 'react';
import {
  Palette,
  Volume2,
  VolumeX,
  Play,
  Check,
  Eye,
  Sliders,
  Sparkles,
  Zap,
  BookOpen,
  Terminal,
  Sun,
  Moon,
  Shield,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Clock,
  Layers,
  Award
} from 'lucide-react';
import { ThemeId, THEMES_DATA, PersonalityTheme, DEFAULT_THEME_ID, getThemePalette } from '../types/theme';
import { soundManager } from '../utils/audio';

interface ThemesViewProps {
  currentThemeId: ThemeId;
  previewThemeId: ThemeId | null;
  onApplyTheme: (themeId: ThemeId) => void;
  onPreviewTheme: (themeId: ThemeId | null) => void;
  isDistractionFree: boolean;
  onToggleDistractionFree: (enabled: boolean) => void;
  onResetDefaults: () => void;
  themeMode: 'dark' | 'light';
  setThemeMode: (mode: 'dark' | 'light') => void;
}

export const ThemesView: React.FC<ThemesViewProps> = ({
  currentThemeId,
  previewThemeId,
  onApplyTheme,
  onPreviewTheme,
  isDistractionFree,
  onToggleDistractionFree,
  onResetDefaults,
  themeMode,
  setThemeMode
}) => {
  // Sound controls local state synced with soundManager
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => soundManager.isEnabled());
  const [soundMuted, setSoundMuted] = useState<boolean>(() => soundManager.isMuted());
  const [volume, setVolume] = useState<number>(() => soundManager.getVolume());
  const [playingThemeSound, setPlayingThemeSound] = useState<ThemeId | null>(null);
  const [testedSound, setTestedSound] = useState<string | null>(null);

  // Active theme under consideration (either currently applied or temporarily previewed)
  const effectiveThemeId = previewThemeId || currentThemeId;
  const effectiveTheme = THEMES_DATA.find(t => t.id === effectiveThemeId) || THEMES_DATA[0];

  // Helper for theme icons
  const getThemeIcon = (id: ThemeId) => {
    switch (id) {
      case 'midnight-strategist':
        return <Terminal className="w-5 h-5" />;
      case 'zen-scholar':
        return <BookOpen className="w-5 h-5" />;
      case 'cyber-engineer':
        return <Zap className="w-5 h-5" />;
      case 'academic-classic':
        return <Layers className="w-5 h-5" />;
      case 'sunrise-momentum':
        return <Sun className="w-5 h-5" />;
      case 'deep-work':
        return <Shield className="w-5 h-5" />;
    }
  };

  const handleSoundToggle = () => {
    const next = !soundEnabled;
    soundManager.setEnabled(next);
    setSoundEnabled(next);
    if (next) soundManager.playClick();
  };

  const handleMuteToggle = () => {
    const next = !soundMuted;
    soundManager.setMuted(next);
    setSoundMuted(next);
    if (!next) soundManager.playClick();
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    soundManager.setVolume(newVol);
  };

  const handlePreviewSound = (themeId: ThemeId) => {
    setPlayingThemeSound(themeId);
    soundManager.previewSoundPack(themeId);
    setTimeout(() => {
      setPlayingThemeSound(prev => (prev === themeId ? null : prev));
    }, 1200);
  };

  const handleTestSound = (type: string) => {
    setTestedSound(type);
    switch (type) {
      case 'click':
        soundManager.playClick(effectiveThemeId);
        break;
      case 'complete':
        soundManager.playCompleteTask(effectiveThemeId);
        break;
      case 'streak':
        soundManager.playStreakMilestone(5, effectiveThemeId);
        break;
      case 'alert':
        soundManager.playLowTimeWarning();
        break;
      case 'error':
        soundManager.playError(effectiveThemeId);
        break;
    }
    setTimeout(() => {
      setTestedSound(prev => (prev === type ? null : prev));
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fade-in">
      
      {/* Temporary Preview Sticky Notification Bar */}
      {previewThemeId && (
        <div className="sticky top-20 z-30 p-4 rounded-2xl bg-amber-500/15 dark:bg-amber-500/20 border-2 border-amber-500/80 backdrop-blur-md shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-900 dark:text-stone-100 animate-slide-down">
          <div className="flex items-center space-x-3 text-left">
            <div className="p-2 rounded-xl bg-amber-500 text-stone-950 font-bold shrink-0">
              <Eye className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-sm sm:text-base">
                  Previewing: {THEMES_DATA.find(t => t.id === previewThemeId)?.name}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/30 text-amber-900 dark:text-amber-200 font-bold">
                  Temporary
                </span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                Your active study data remains untouched. Apply this theme to keep it, or cancel to revert.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto shrink-0 justify-end">
            <button
              onClick={() => onPreviewTheme(null)}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold bg-stone-200 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 transition cursor-pointer"
            >
              Cancel Preview
            </button>
            <button
              onClick={() => onApplyTheme(previewThemeId)}
              className="flex-1 sm:flex-none px-5 py-2 rounded-xl text-xs font-bold bg-orange-600 hover:bg-orange-500 text-white shadow-md transition flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Apply Theme</span>
            </button>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2.5">
              <div className="p-2.5 rounded-2xl bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400">
                <Palette className="w-6 h-6" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">
                Personality Themes & Sound Packs
              </h1>
            </div>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed">
              Personalize your CE Licensure Exam preparation. Every theme combines a unique visual identity, calibrated typography, and an authentic client-side acoustic sound engine tailored to your motivation style.
            </p>
          </div>

          {/* Quick Active Status Badge */}
          <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 shrink-0 space-y-2">
            <div className="flex items-center justify-between gap-4 text-xs">
              <span className="text-stone-500 dark:text-stone-400 font-medium">Active Atmosphere:</span>
              <span className="font-bold text-orange-600 dark:text-orange-400 flex items-center space-x-1.5">
                {getThemeIcon(currentThemeId)}
                <span>{THEMES_DATA.find(t => t.id === currentThemeId)?.name}</span>
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 text-xs">
              <span className="text-stone-500 dark:text-stone-400 font-medium">Sound Engine:</span>
              <span className="font-mono text-stone-700 dark:text-stone-300">
                {soundEnabled && !soundMuted ? `${Math.round(volume * 100)}% Vol` : 'Muted'}
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 text-xs">
              <span className="text-stone-500 dark:text-stone-400 font-medium">Lighting Mode:</span>
              <button
                type="button"
                onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
                className="px-2.5 py-1 rounded-lg font-bold text-xs bg-stone-200 dark:bg-stone-700 hover:bg-stone-300 dark:hover:bg-stone-600 transition flex items-center space-x-1.5 cursor-pointer shadow-xs"
              >
                {themeMode === 'dark' ? (
                  <>
                    <Moon className="w-3.5 h-3.5 text-blue-400" />
                    <span>Night (Dark)</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    <span>Day (Light)</span>
                  </>
                )}
              </button>
            </div>
            <div className="flex items-center justify-between gap-4 text-xs">
              <span className="text-stone-500 dark:text-stone-400 font-medium">Distraction-Free:</span>
              <span className={`font-bold ${isDistractionFree ? 'text-emerald-600 dark:text-emerald-400' : 'text-stone-400'}`}>
                {isDistractionFree ? 'Active' : 'Off'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Six Themes Gallery Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              Select Your Study Atmosphere
            </h2>
          </div>
          <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
            6 Specialized Environments
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {THEMES_DATA.map(theme => {
            const isSelected = currentThemeId === theme.id;
            const isPreviewed = previewThemeId === theme.id;
            const isPlayingThisSound = playingThemeSound === theme.id;
            const cardPalette = getThemePalette(theme.id, themeMode);

            return (
              <div
                key={theme.id}
                className={`relative rounded-3xl border transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-sm interactive-card ${
                  isSelected
                    ? 'border-2 border-orange-500 bg-white dark:bg-stone-900 ring-4 ring-orange-500/10'
                    : isPreviewed
                    ? 'border-2 border-amber-500 bg-white dark:bg-stone-900 ring-4 ring-amber-500/10'
                    : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-stone-300 dark:hover:border-stone-700'
                }`}
              >
                {/* Theme Card Top Bar */}
                <div className="p-5 sm:p-6 space-y-4">
                  
                  {/* Status Badges & Icon */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        data-keep-color="true"
                        className="p-3 rounded-2xl flex items-center justify-center shadow-xs"
                        style={{
                          backgroundColor: cardPalette.cardSurface,
                          color: cardPalette.primary,
                          border: `1.5px solid ${cardPalette.border}`
                        }}
                      >
                        {getThemeIcon(theme.id)}
                      </div>
                      <div>
                        <h3 className="font-extrabold text-base sm:text-lg text-stone-900 dark:text-stone-100">
                          {theme.name}
                        </h3>
                        <p className="text-xs font-medium text-stone-500 dark:text-stone-400">
                          {theme.tagline}
                        </p>
                      </div>
                    </div>

                    {isSelected ? (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-orange-500 text-white flex items-center space-x-1 shadow-xs">
                        <Check className="w-3.5 h-3.5" />
                        <span>Active</span>
                      </span>
                    ) : isPreviewed ? (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-amber-500 text-stone-950 flex items-center space-x-1 shadow-xs animate-pulse">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Previewing</span>
                      </span>
                    ) : null}
                  </div>

                  {/* Personality Description */}
                  <div className="space-y-2 text-xs">
                    <p className="font-semibold text-stone-800 dark:text-stone-200">
                      {theme.personality}
                    </p>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                      {theme.description}
                    </p>
                  </div>

                  {/* Best Suited For */}
                  <div className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700/80 space-y-1">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-stone-500 dark:text-stone-400">
                      Best Suited For
                    </span>
                    <p className="text-xs text-stone-700 dark:text-stone-300">
                      {theme.bestSuitedFor}
                    </p>
                  </div>

                  {/* Palette Swatches */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-stone-500 dark:text-stone-400">
                      Color Palette
                    </span>
                    <div className="flex items-center space-x-2">
                      {theme.colors.swatches.map(swatch => (
                        <div
                          key={swatch.name}
                          data-keep-color="true"
                          title={`${swatch.name}: ${swatch.hex}`}
                          className="h-6 flex-1 rounded-lg border border-black/10 dark:border-white/10 transition-transform hover:scale-110 shadow-xs cursor-help swatch-pill"
                          style={{ backgroundColor: swatch.hex }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Miniature Interactive Application Interface Preview */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-stone-500 dark:text-stone-400">
                      Interface Preview ({themeMode === 'dark' ? 'Night' : 'Day'} Mode)
                    </span>
                    <div
                      data-keep-color="true"
                      className="p-3.5 rounded-2xl border transition-colors shadow-inner ignore-theme"
                      style={{
                        backgroundColor: cardPalette.canvasBg,
                        borderColor: cardPalette.border,
                        color: cardPalette.textPrimary
                      }}
                    >
                      {/* Mini Navigation Bar */}
                      <div
                        data-keep-color="true"
                        className="flex items-center justify-between pb-2 mb-2 border-b"
                        style={{ borderColor: cardPalette.border }}
                      >
                        <div className="flex items-center space-x-1.5">
                          <div
                            data-keep-color="true"
                            className="w-4 h-4 rounded flex items-center justify-center font-black text-[9px]"
                            style={{
                              backgroundColor: cardPalette.primary,
                              color: '#FFFFFF'
                            }}
                          >
                            C
                          </div>
                          <span data-keep-color="true" className="text-[11px] font-extrabold tracking-tight" style={{ color: cardPalette.textPrimary }}>
                            CELEARN
                          </span>
                        </div>
                        <div
                          data-keep-color="true"
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded font-bold"
                          style={{
                            backgroundColor: cardPalette.elevatedSurface,
                            color: cardPalette.accent,
                            border: `1px solid ${cardPalette.border}`
                          }}
                        >
                          {theme.previewCard.badgeText}
                        </div>
                      </div>

                      {/* Mini Content Card */}
                      <div
                        data-keep-color="true"
                        className="p-3 rounded-xl border space-y-2"
                        style={{
                          backgroundColor: cardPalette.cardSurface,
                          borderColor: cardPalette.border
                        }}
                      >
                        <div className="flex items-baseline justify-between">
                          <div>
                            <div
                              data-keep-color="true"
                              className="text-[10px] font-medium"
                              style={{ color: cardPalette.textMuted }}
                            >
                              {theme.previewCard.statLabel}
                            </div>
                            <div data-keep-color="true" className="text-base font-black tracking-tight" style={{ color: cardPalette.textPrimary }}>
                              {theme.previewCard.statValue}
                            </div>
                          </div>
                          <div
                            data-keep-color="true"
                            className="text-[9px] font-bold px-2 py-1 rounded-lg transition-transform"
                            style={{
                              backgroundColor: cardPalette.primary,
                              color: '#FFFFFF'
                            }}
                          >
                            {theme.previewCard.actionText}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sound Pack Preview Section */}
                  <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Volume2 className="w-4 h-4 text-orange-500" />
                        <span className="text-xs font-bold text-stone-900 dark:text-stone-100">
                          {theme.soundPackTitle}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handlePreviewSound(theme.id)}
                        className={`px-2.5 py-1 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition cursor-pointer ${
                          isPlayingThisSound
                            ? 'bg-orange-500 text-white animate-pulse'
                            : 'bg-stone-200 hover:bg-stone-300 dark:bg-stone-700 dark:hover:bg-stone-600 text-stone-800 dark:text-stone-200'
                        }`}
                        title="Audition 3-tone acoustic demonstration"
                      >
                        <Play className={`w-3 h-3 ${isPlayingThisSound ? 'fill-current' : ''}`} />
                        <span>{isPlayingThisSound ? 'Playing...' : 'Preview Sounds'}</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-stone-600 dark:text-stone-400">
                      {theme.soundPackDescription}
                    </p>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-4 sm:p-5 border-t border-stone-200 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-900/80 flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => onPreviewTheme(theme.id)}
                    className="flex-1 py-2.5 px-3 rounded-xl border border-stone-300 dark:border-stone-700 hover:bg-white dark:hover:bg-stone-800 text-xs font-bold text-stone-700 dark:text-stone-300 transition flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-stone-400" />
                    <span>Preview</span>
                  </button>

                  <button
                    type="button"
                    disabled={isSelected}
                    onClick={() => onApplyTheme(theme.id)}
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center space-x-1.5 cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-600 text-white cursor-default'
                        : 'bg-orange-600 hover:bg-orange-500 text-white shadow-xs'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Active Theme</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Apply Theme</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Sound Lab & Audio Controls Console */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
              <Sliders className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
                Acoustic Feedback & Sound Console
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                100% Client-side synthetic audio synthesis using Web Audio API. Zero asset downloads, instant offline responsiveness.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleMuteToggle}
              className={`px-3 py-2 rounded-xl text-xs font-bold border transition flex items-center space-x-1.5 cursor-pointer ${
                soundMuted
                  ? 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-700'
                  : 'bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300'
              }`}
            >
              {soundMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-amber-600" />
                  <span>Muted</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-600" />
                  <span>Unmuted</span>
                </>
              )}
            </button>

            <button
              onClick={handleSoundToggle}
              className={`px-3 py-2 rounded-xl text-xs font-bold border transition flex items-center space-x-1.5 cursor-pointer ${
                soundEnabled
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-700'
                  : 'bg-stone-100 text-stone-500 border-stone-200 dark:bg-stone-800 dark:border-stone-700'
              }`}
            >
              <span>Audio Engine: {soundEnabled ? 'Enabled' : 'Disabled'}</span>
            </button>
          </div>
        </div>

        {/* Volume Slider and Distraction-free Toggle */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Master Volume Slider */}
          <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-stone-800 dark:text-stone-200 flex items-center space-x-2">
                <Volume2 className="w-4 h-4 text-orange-500" />
                <span>Master Sound Volume</span>
              </span>
              <span className="font-mono font-bold text-orange-600 dark:text-orange-400">
                {Math.round(volume * 100)}%
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={e => handleVolumeChange(parseFloat(e.target.value))}
              disabled={!soundEnabled || soundMuted}
              className="w-full accent-orange-600 h-2 bg-stone-200 dark:bg-stone-700 rounded-lg cursor-pointer"
            />

            <p className="text-[11px] text-stone-500 dark:text-stone-400">
              Controls synthesized click feedback, task completion bells, streak milestone fanfares, and exam alerts.
            </p>
          </div>

          {/* Distraction-Free Mode Toggle */}
          <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-stone-800 dark:text-stone-200 flex items-center space-x-2">
                <Shield className="w-4 h-4 text-orange-500" />
                <span>Distraction-Free Mode</span>
              </span>
              <button
                type="button"
                onClick={() => onToggleDistractionFree(!isDistractionFree)}
                className={`px-3 py-1 rounded-xl font-bold text-xs transition cursor-pointer ${
                  isDistractionFree
                    ? 'bg-emerald-600 text-white'
                    : 'bg-stone-200 text-stone-700 dark:bg-stone-700 dark:text-stone-300'
                }`}
              >
                {isDistractionFree ? 'ON (Minimalist)' : 'OFF (Standard)'}
              </button>
            </div>

            <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">
              Hides ambient floating background shapes, confetti, and decorative indicators while preserving all crucial timer controls, formulas, and board exam calculation features.
            </p>
          </div>
        </div>

        {/* Individual Sound Audition Buttons */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider">
              Test Audio Feedback ({effectiveTheme.name} Pack)
            </span>
            <span className="text-[11px] text-stone-500 dark:text-stone-400">
              Tap any button to hear the synthesized cue
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            <button
              onClick={() => handleTestSound('click')}
              className={`p-3 rounded-2xl border text-xs font-bold transition flex flex-col items-center justify-center space-y-1.5 cursor-pointer ${
                testedSound === 'click'
                  ? 'border-orange-500 bg-orange-50 text-orange-800 dark:bg-orange-950 dark:text-orange-300'
                  : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 hover:border-orange-400 text-stone-800 dark:text-stone-200'
              }`}
            >
              <Zap className="w-4 h-4 text-orange-500" />
              <span>Button Click</span>
            </button>

            <button
              onClick={() => handleTestSound('complete')}
              className={`p-3 rounded-2xl border text-xs font-bold transition flex flex-col items-center justify-center space-y-1.5 cursor-pointer ${
                testedSound === 'complete'
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                  : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 hover:border-emerald-400 text-stone-800 dark:text-stone-200'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Task Mastered</span>
            </button>

            <button
              onClick={() => handleTestSound('streak')}
              className={`p-3 rounded-2xl border text-xs font-bold transition flex flex-col items-center justify-center space-y-1.5 cursor-pointer ${
                testedSound === 'streak'
                  ? 'border-amber-500 bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                  : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 hover:border-amber-400 text-stone-800 dark:text-stone-200'
              }`}
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span>Streak Milestone</span>
            </button>

            <button
              onClick={() => handleTestSound('alert')}
              className={`p-3 rounded-2xl border text-xs font-bold transition flex flex-col items-center justify-center space-y-1.5 cursor-pointer ${
                testedSound === 'alert'
                  ? 'border-red-500 bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-300'
                  : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 hover:border-red-400 text-stone-800 dark:text-stone-200'
              }`}
            >
              <Clock className="w-4 h-4 text-red-500" />
              <span>Timer Warning</span>
            </button>

            <button
              onClick={() => handleTestSound('error')}
              className={`p-3 rounded-2xl border text-xs font-bold transition flex flex-col items-center justify-center space-y-1.5 cursor-pointer col-span-2 sm:col-span-1 ${
                testedSound === 'error'
                  ? 'border-stone-500 bg-stone-100 dark:bg-stone-700 text-stone-900 dark:text-stone-100'
                  : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 hover:border-stone-400 text-stone-800 dark:text-stone-200'
              }`}
            >
              <AlertCircle className="w-4 h-4 text-stone-400" />
              <span>Action Error</span>
            </button>
          </div>
        </div>

        {/* Reset All Settings to Default */}
        <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-stone-500 dark:text-stone-400">
            Need to reset themes, sound engine levels, and focus settings back to system defaults?
          </span>

          <button
            onClick={onResetDefaults}
            className="px-4 py-2 rounded-xl border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 font-bold transition flex items-center space-x-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-stone-400" />
            <span>Reset All to Defaults</span>
          </button>
        </div>
      </div>

    </div>
  );
};
