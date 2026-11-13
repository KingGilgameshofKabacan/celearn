import React, { useState, useEffect } from 'react';
import { vaultJukebox, JukeboxState, JukeboxPlayerMode } from '../utils/jukeboxPlayer';
import { soundManager } from '../utils/audio';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Repeat,
  Radio,
  Disc3,
  CassetteTape
} from 'lucide-react';

export const VaultJukeboxDrawerPlayer: React.FC = () => {
  const [state, setState] = useState<JukeboxState>(() => vaultJukebox.getState());

  useEffect(() => {
    const handleStateChange = (e: Event) => {
      const customEvent = e as CustomEvent<JukeboxState>;
      if (customEvent.detail) {
        setState(customEvent.detail);
      } else {
        setState(vaultJukebox.getState());
      }
    };

    window.addEventListener('cele_jukebox_state', handleStateChange);
    return () => window.removeEventListener('cele_jukebox_state', handleStateChange);
  }, []);

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleModeSwitch = (mode: JukeboxPlayerMode) => {
    if (state.playerMode === mode) return;
    soundManager.playClick();
    vaultJukebox.setPlayerMode(mode);
  };

  const currentTrack = state.currentTrack;
  const trackLabel = `${String(state.trackIndex + 1).padStart(2, '0')} / ${String(state.totalTracks).padStart(2, '0')}`;
  const progressRatio = state.duration > 0 ? Math.min(1, Math.max(0, state.currentTime / state.duration)) : 0;

  return (
    <div className="rounded-3xl border-2 border-amber-500/60 bg-[#080F20] text-stone-100 shadow-2xl overflow-hidden vault-panel-rivets relative select-none">
      {/* Vault-Tec Top Hazard Header */}
      <div className="vault-tec-hazard-stripe px-4 py-2 border-b border-amber-500/40 flex items-center justify-between gap-2">
        <div className="flex items-center space-x-2 bg-[#050B17]/95 px-2.5 py-0.5 rounded-lg border border-amber-500/50">
          <Radio className={`w-3.5 h-3.5 ${state.isPlaying ? 'text-amber-400' : 'text-stone-400'}`} />
          <span className="font-mono text-xs font-black tracking-wider text-amber-400 uppercase whitespace-nowrap">
            Vault 101 Jukebox
          </span>
        </div>
        <span className="bg-[#050B17]/95 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-mono font-bold border border-emerald-500/40 uppercase whitespace-nowrap">
          {state.isPlaying ? 'ON AIR' : 'STANDBY'} · {trackLabel}
        </span>
      </div>

      <div className="p-4 space-y-4 bg-gradient-to-b from-[#0B152B] to-[#070D1A]">
        {/* Deck Style Selector: Cassette vs Vinyl */}
        <div
          role="tablist"
          aria-label="Jukebox Player Mode"
          className="grid grid-cols-2 gap-1.5 p-1 rounded-2xl bg-[#040812] border border-[#2B447A]"
        >
          <button
            type="button"
            role="tab"
            aria-selected={state.playerMode === 'cassette'}
            onClick={() => handleModeSwitch('cassette')}
            className={`py-2 px-3 rounded-xl text-xs font-mono font-bold transition flex items-center justify-center space-x-1.5 cursor-pointer whitespace-nowrap min-h-[40px] ${
              state.playerMode === 'cassette'
                ? 'bg-amber-400 text-[#080E1E] shadow-sm'
                : 'text-stone-300 hover:text-amber-300 hover:bg-[#101F42]'
            }`}
          >
            <CassetteTape className="w-4 h-4 shrink-0" />
            <span>Cassette Deck</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={state.playerMode === 'vinyl'}
            onClick={() => handleModeSwitch('vinyl')}
            className={`py-2 px-3 rounded-xl text-xs font-mono font-bold transition flex items-center justify-center space-x-1.5 cursor-pointer whitespace-nowrap min-h-[40px] ${
              state.playerMode === 'vinyl'
                ? 'bg-amber-400 text-[#080E1E] shadow-sm'
                : 'text-stone-300 hover:text-amber-300 hover:bg-[#101F42]'
            }`}
          >
            <Disc3 className="w-4 h-4 shrink-0" />
            <span>Vinyl Turntable</span>
          </button>
        </div>

        {/* ============================================================
            PLAYER DECK STAGE (CASSETTE TAPE DECK OR VINYL TURNTABLE)
            ============================================================ */}
        {state.playerMode === 'cassette' ? (
          /* CASSETTE HOLOTAPE DECK */
          <div className="rounded-2xl bg-[#040811] border-2 border-[#2B447A] p-3.5 shadow-inner space-y-3">
            {/* Cassette Bay Housing */}
            <div className="relative rounded-xl bg-gradient-to-b from-[#1A294A] to-[#0D1830] border-2 border-stone-700/80 p-3 shadow-lg">
              {/* Top Screws */}
              <div className="flex items-center justify-between mb-2">
                <span className="w-2 h-2 rounded-full bg-stone-500 border border-stone-800" />
                <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-amber-300/90">
                  VAULT-TEC C-60 HOLOTAPE · SIDE A
                </span>
                <span className="w-2 h-2 rounded-full bg-stone-500 border border-stone-800" />
              </div>

              {/* Vault-Tec Yellow/Blue Cassette Label Strip */}
              <div className="rounded-lg bg-gradient-to-r from-[#FBC02D] via-[#FDE047] to-[#F59E0B] text-[#080E1E] px-3 py-2 border border-stone-900 shadow-xs">
                <div className="flex items-center justify-between gap-2 text-[9px] font-mono font-black uppercase">
                  <span>TRACK {trackLabel}</span>
                  <span className="truncate">{currentTrack.mood}</span>
                </div>
                <p className="text-xs font-black font-mono truncate mt-0.5">
                  {currentTrack.title}
                </p>
              </div>

              {/* Magnetic Tape Window with Dual Animated Toothed Reels */}
              <div className="mt-2.5 rounded-lg bg-[#050A14] border border-stone-700 px-4 py-2.5 flex items-center justify-between gap-3 relative overflow-hidden">
                {/* Left Supply Reel */}
                <div
                  className="w-11 h-11 rounded-full bg-stone-800 border-2 border-stone-500 flex items-center justify-center relative shrink-0 jukebox-reel-spin"
                  style={{ animationPlayState: state.isPlaying ? 'running' : 'paused' }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#050A14] border border-amber-400/70 flex items-center justify-center">
                    <div className="w-1.5 h-4 bg-amber-400 rounded-xs" />
                    <div className="w-4 h-1.5 bg-amber-400 rounded-xs absolute" />
                  </div>
                </div>

                {/* Visible Magnetic Tape Bridge */}
                <div className="flex-1 flex flex-col items-center justify-center space-y-1">
                  <div className="w-full h-3 rounded bg-[#140D0A] border border-stone-800 relative overflow-hidden flex items-center px-1">
                    <div
                      className="h-1 bg-amber-500/80 rounded-full transition-all duration-150"
                      style={{ width: `${Math.max(8, progressRatio * 100)}%` }}
                    />
                  </div>
                  <span className="text-[9px] font-mono text-emerald-400/90 tabular-nums">
                    {formatTime(state.currentTime)} / {formatTime(state.duration)}
                  </span>
                </div>

                {/* Right Take-Up Reel */}
                <div
                  className="w-11 h-11 rounded-full bg-stone-800 border-2 border-stone-500 flex items-center justify-center relative shrink-0 jukebox-reel-spin"
                  style={{ animationPlayState: state.isPlaying ? 'running' : 'paused' }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#050A14] border border-amber-400/70 flex items-center justify-center">
                    <div className="w-1.5 h-4 bg-amber-400 rounded-xs" />
                    <div className="w-4 h-1.5 bg-amber-400 rounded-xs absolute" />
                  </div>
                </div>
              </div>

              {/* Cassette Trapezoid Pin Plate */}
              <div className="mt-2 mx-6 h-2.5 rounded-t-md bg-stone-900/90 border-x border-t border-stone-700 flex items-center justify-around px-4">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-600" />
                <span className="w-2 h-1 rounded-xs bg-stone-600" />
                <span className="w-1.5 h-1.5 rounded-full bg-stone-600" />
              </div>
            </div>

            {/* 3 Vacuum Tubes Signal Indicators */}
            <div className="flex items-center justify-between px-2 text-[10px] font-mono text-amber-300/85">
              <div className="flex items-center space-x-2">
                {[1, 2, 3].map(tube => (
                  <div
                    key={tube}
                    className={`w-3.5 h-5 rounded-t-full border border-amber-500/40 flex items-center justify-center transition-colors ${
                      state.isPlaying
                        ? 'bg-amber-500/35 shadow-[0_0_8px_rgba(245,158,11,0.6)]'
                        : 'bg-stone-900'
                    }`}
                  >
                    <div
                      className={`w-0.5 h-2.5 rounded-full ${
                        state.isPlaying ? 'bg-yellow-200' : 'bg-stone-700'
                      }`}
                    />
                  </div>
                ))}
                <span className="text-[10px] uppercase tracking-wider text-stone-400">
                  Analog Preamp
                </span>
              </div>
              <span className="text-emerald-400 font-bold truncate max-w-[140px]">
                {currentTrack.subtitle}
              </span>
            </div>
          </div>
        ) : (
          /* VINYL TURNTABLE DECK */
          <div className="rounded-2xl bg-[#040811] border-2 border-[#2B447A] p-3.5 shadow-inner space-y-3">
            {/* Turntable Plinth & Platter Stage */}
            <div className="relative rounded-xl bg-gradient-to-br from-[#16233E] to-[#0A1124] border border-stone-700/80 p-3 flex items-center justify-center min-h-[168px] overflow-hidden">
              {/* Platter Strobe Rim */}
              <div className="relative w-36 h-36 rounded-full bg-stone-900 border-4 border-stone-700 shadow-[0_8px_24px_rgba(0,0,0,0.75)] flex items-center justify-center">
                {/* Rotating 12-inch Vinyl Record */}
                <div
                  className="w-32 h-32 rounded-full relative flex items-center justify-center jukebox-vinyl-spin"
                  style={{
                    animationPlayState: state.isPlaying ? 'running' : 'paused',
                    background:
                      'repeating-radial-gradient(circle at center, #111318 0px, #111318 2px, #1d212b 3px, #111318 4px)'
                  }}
                >
                  {/* Vinyl Specular Reflection Sheen */}
                  <div
                    className="absolute inset-0 rounded-full opacity-35 pointer-events-none"
                    style={{
                      background:
                        'conic-gradient(from 40deg, transparent 0deg, rgba(255,255,255,0.38) 32deg, transparent 70deg, transparent 180deg, rgba(255,255,255,0.32) 215deg, transparent 255deg)'
                    }}
                  />

                  {/* Vault-Tec Cobalt & Gold Center Record Label */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FBC02D] to-[#D97706] border-2 border-[#080E1E] flex flex-col items-center justify-center p-1 text-center shadow-md relative z-10">
                    <span className="text-[7px] font-mono font-black text-[#080E1E] leading-none">
                      VAULT 101
                    </span>
                    <span className="text-[8px] font-mono font-black text-[#1E3A8A] mt-0.5 leading-tight truncate max-w-[44px]">
                      #{String(state.trackIndex + 1).padStart(2, '0')}
                    </span>
                    {/* Chrome Center Spindle */}
                    <div className="w-2.5 h-2.5 rounded-full bg-stone-200 border border-stone-900 mt-0.5 shadow-inner" />
                  </div>
                </div>
              </div>

              {/* Articulated Metallic Tonearm & Headshell (Right Edge) */}
              <div
                className="absolute top-2.5 right-3 origin-[14px_14px] transition-transform duration-500 ease-out pointer-events-none"
                style={{
                  transform: state.isPlaying
                    ? `rotate(${22 + progressRatio * 10}deg)`
                    : 'rotate(-6deg)'
                }}
              >
                {/* Gimbal Pivot Housing */}
                <div className="w-7 h-7 rounded-full bg-stone-300 border-2 border-stone-700 shadow-md flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-amber-500 border border-stone-900" />
                </div>
                {/* Tonearm Tube */}
                <div className="w-1.5 h-20 bg-gradient-to-r from-stone-400 to-stone-200 border border-stone-700 mx-auto -mt-1 rounded-b" />
                {/* Cartridge Headshell */}
                <div className="w-4 h-5 bg-amber-400 border border-stone-950 rounded-sm mx-auto -mt-0.5 rotate-12 shadow flex items-end justify-center pb-0.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      state.isPlaying ? 'bg-emerald-500' : 'bg-stone-600'
                    }`}
                  />
                </div>
              </div>

              {/* Turntable Speed Plinth Badge */}
              <div className="absolute bottom-2 left-2.5 bg-[#050B17]/90 border border-stone-700 rounded-md px-2 py-0.5 text-[9px] font-mono text-amber-300 font-bold">
                33⅓ RPM
              </div>
            </div>

            {/* Track Readout Under Platter */}
            <div className="flex items-center justify-between gap-2 px-1">
              <div className="min-w-0">
                <p className="text-xs font-black font-mono text-emerald-400 truncate">
                  {currentTrack.title}
                </p>
                <p className="text-[10px] font-mono text-stone-400 truncate">
                  {currentTrack.mood} · {currentTrack.subtitle}
                </p>
              </div>
              <span className="text-[10px] font-mono text-emerald-300 tabular-nums shrink-0">
                {formatTime(state.currentTime)} / {formatTime(state.duration)}
              </span>
            </div>
          </div>
        )}

        {/* Scrubber Bar (Shared for both Cassette & Vinyl decks) */}
        <div className="space-y-1">
          <div
            role="slider"
            aria-label="Track playback position"
            aria-valuemin={0}
            aria-valuemax={Math.round(state.duration || 100)}
            aria-valuenow={Math.round(state.currentTime)}
            tabIndex={0}
            className="relative w-full h-2.5 bg-[#040811] rounded-full overflow-hidden cursor-pointer border border-[#2B447A]"
            onClick={e => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = (e.clientX - rect.left) / rect.width;
              if (state.duration > 0) {
                vaultJukebox.seek(pos * state.duration);
              }
            }}
          >
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 transition-all duration-100"
              style={{ width: `${progressRatio * 100}%` }}
            />
          </div>
        </div>

        {/* Mechanical Transport Controls (Rew / Play-Pause / FF / Loop / Mute) */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center space-x-1.5">
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                vaultJukebox.prevTrack();
              }}
              title="Previous Track"
              aria-label="Previous Track"
              className="p-2.5 rounded-xl bg-[#101F42] hover:bg-[#182C5B] text-stone-100 border border-[#2B447A] hover:border-amber-400 transition cursor-pointer active:scale-95 min-h-[42px] min-w-[42px] flex items-center justify-center"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                vaultJukebox.togglePlay();
              }}
              className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-95 text-[#080E1E] font-black text-xs font-mono shadow-md flex items-center space-x-1.5 cursor-pointer transition min-h-[42px] whitespace-nowrap"
            >
              {state.isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-[#080E1E]" />
                  <span>PAUSE</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-[#080E1E]" />
                  <span>PLAY</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                vaultJukebox.nextTrack(true);
              }}
              title="Next Track"
              aria-label="Next Track"
              className="p-2.5 rounded-xl bg-[#101F42] hover:bg-[#182C5B] text-stone-100 border border-[#2B447A] hover:border-amber-400 transition cursor-pointer active:scale-95 min-h-[42px] min-w-[42px] flex items-center justify-center"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                vaultJukebox.toggleLoop();
              }}
              title={`Loop: ${state.loopMode.toUpperCase()}`}
              aria-label={`Loop mode ${state.loopMode}`}
              className={`p-2.5 rounded-xl border transition cursor-pointer min-h-[42px] min-w-[42px] flex items-center justify-center ${
                state.loopMode !== 'off'
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                  : 'bg-[#101F42] border-[#2B447A] text-stone-400 hover:text-stone-200'
              }`}
            >
              <Repeat className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                vaultJukebox.toggleMute();
              }}
              title={state.isMuted ? 'Unmute' : 'Mute'}
              aria-label={state.isMuted ? 'Unmute' : 'Mute'}
              className={`p-2.5 rounded-xl border transition cursor-pointer min-h-[42px] min-w-[42px] flex items-center justify-center ${
                state.isMuted
                  ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                  : 'bg-[#101F42] border-[#2B447A] text-stone-300 hover:text-amber-300'
              }`}
            >
              {state.isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Master Volume Potentiometer */}
        <div className="flex items-center space-x-2.5 text-[11px] text-stone-300 font-mono pt-1">
          <span className="text-amber-400 font-bold shrink-0">GAIN</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            aria-label="Jukebox volume"
            value={state.isMuted ? 0 : state.volume}
            onChange={e => vaultJukebox.setVolume(parseFloat(e.target.value))}
            className="w-full h-2 bg-[#040811] rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
          <span className="w-9 text-right tabular-nums text-stone-200 font-bold">
            {Math.round((state.isMuted ? 0 : state.volume) * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default VaultJukeboxDrawerPlayer;
