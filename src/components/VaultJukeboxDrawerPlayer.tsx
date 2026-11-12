import React, { useState, useEffect } from 'react';
import { VAULT_JUKEBOX_TRACKS, JukeboxTrack } from '../data/jukeboxTracks';
import { vaultJukebox, JukeboxState } from '../utils/jukeboxPlayer';
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
  Disc,
  Music,
  Sparkles
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

  const currentTrack = state.currentTrack;

  return (
    <div className="rounded-3xl border-2 border-amber-500/60 bg-[#080F20] text-stone-100 shadow-2xl overflow-hidden vault-panel-rivets relative select-none">
      
      {/* Fallout Shelter Top Hazard Header */}
      <div className="vault-tec-hazard-stripe px-4 py-2 border-b border-amber-500/40 flex items-center justify-between">
        <div className="flex items-center space-x-2 bg-stone-950/90 px-2.5 py-0.5 rounded-lg border border-amber-500/50">
          <Radio className={`w-3.5 h-3.5 ${state.isPlaying ? 'text-amber-400 animate-pulse' : 'text-stone-400'}`} />
          <span className="font-mono text-xs font-black tracking-wider text-amber-400 uppercase">
            Vault 101 Jukebox
          </span>
        </div>
        <span className="bg-stone-950/90 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-mono font-bold border border-emerald-500/40 uppercase">
          {state.isPlaying ? 'BROADCAST ON' : 'STANDBY'}
        </span>
      </div>

      <div className="p-3.5 sm:p-4 space-y-3.5 bg-gradient-to-b from-[#0B152B] to-[#070D1A]">
        
        {/* Retro Vacuum Tubes Display (3 tubes glowing when audio is active) */}
        <div className="flex items-center justify-center space-x-4 py-1.5 px-3 bg-[#050A14] rounded-2xl border border-amber-500/20 shadow-inner">
          {[1, 2, 3].map((tube) => (
            <div key={tube} className="flex flex-col items-center">
              {/* Glass tube dome */}
              <div
                className={`w-5 h-8 rounded-t-full border border-amber-500/40 flex flex-col items-center justify-center transition-all duration-300 relative ${
                  state.isPlaying
                    ? 'bg-gradient-to-t from-amber-500/40 via-yellow-400/30 to-amber-200/20 shadow-[0_0_12px_rgba(245,158,11,0.6)]'
                    : 'bg-stone-900/60'
                }`}
              >
                {/* Glowing filament */}
                <div
                  className={`w-0.5 h-4 rounded-full transition-all duration-200 ${
                    state.isPlaying ? 'bg-yellow-200 animate-pulse shadow-[0_0_8px_#fef08a]' : 'bg-stone-700'
                  }`}
                />
              </div>
              {/* Tube metal base */}
              <div className="w-6 h-1.5 bg-stone-800 rounded-b-sm border-t border-stone-700" />
            </div>
          ))}
          <div className="text-[10px] font-mono text-amber-400/80 uppercase tracking-widest pl-2">
            VACUUM TUBE AMPS
          </div>
        </div>

        {/* Current Track Display: Green Phosphor CRT Screen */}
        <div className="bg-[#040810] border-2 border-emerald-500/40 rounded-2xl p-3 shadow-inner relative overflow-hidden">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">
              {currentTrack.mood}
            </span>
            <div className="flex items-center space-x-1">
              {state.isPlaying && (
                <div className="flex items-end space-x-0.5 h-3">
                  {[40, 90, 60, 100, 70].map((h, i) => (
                    <div
                      key={i}
                      className="w-1 bg-emerald-400 rounded-xs animate-pulse"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              )}
              <span className="text-[10px] font-mono text-emerald-300/80 tabular-nums">
                {formatTime(state.currentTime)} / {formatTime(state.duration)}
              </span>
            </div>
          </div>

          <h3 className="text-xs sm:text-sm font-black font-mono text-emerald-400 truncate">
            {currentTrack.title}
          </h3>
          <p className="text-[10px] font-mono text-emerald-300/70 truncate mt-0.5">
            {currentTrack.subtitle}
          </p>

          {/* Timeline Scrubber */}
          <div
            className="mt-2.5 relative w-full h-2 bg-stone-900 rounded-full overflow-hidden cursor-pointer border border-emerald-500/30"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = (e.clientX - rect.left) / rect.width;
              if (state.duration > 0) {
                vaultJukebox.seek(pos * state.duration);
              }
            }}
          >
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 transition-all duration-100"
              style={{
                width: `${state.duration > 0 ? (state.currentTime / state.duration) * 100 : 0}%`
              }}
            />
          </div>
        </div>

        {/* Player Controls (Fallout Mechanical Switchgear) */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <div className="flex items-center space-x-1.5">
            {/* Prev Track */}
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                vaultJukebox.prevTrack();
              }}
              title="Previous Track"
              className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-amber-400 transition cursor-pointer active:scale-95"
            >
              <SkipBack className="w-3.5 h-3.5" />
            </button>

            {/* Play / Pause Toggle */}
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                vaultJukebox.togglePlay();
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 active:scale-95 text-stone-950 font-black text-xs font-mono shadow-md flex items-center space-x-1.5 cursor-pointer transition"
            >
              {state.isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-stone-950" />
                  <span>PAUSE</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-stone-950" />
                  <span>PLAY</span>
                </>
              )}
            </button>

            {/* Next Track */}
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                vaultJukebox.nextTrack(true);
              }}
              title="Next Track"
              className="p-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-amber-400 transition cursor-pointer active:scale-95"
            >
              <SkipForward className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center space-x-1.5">
            {/* Loop Toggle */}
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                vaultJukebox.toggleLoop();
              }}
              title={`Loop mode: ${state.loopMode.toUpperCase()}`}
              className={`p-2 rounded-xl border transition cursor-pointer ${
                state.loopMode !== 'off'
                  ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                  : 'bg-stone-900 border-stone-700 text-stone-400'
              }`}
            >
              <Repeat className="w-3.5 h-3.5" />
            </button>

            {/* Mute Toggle */}
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                vaultJukebox.toggleMute();
              }}
              title={state.isMuted ? 'Unmute' : 'Mute'}
              className={`p-2 rounded-xl border transition cursor-pointer ${
                state.isMuted
                  ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                  : 'bg-stone-900 border-stone-700 text-stone-400'
              }`}
            >
              {state.isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Volume Potentiometer Slider */}
        <div className="flex items-center space-x-2 text-[10px] text-stone-400 font-mono pt-1">
          <span className="text-amber-400 font-bold shrink-0">VOL</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={state.isMuted ? 0 : state.volume}
            onChange={(e) => vaultJukebox.setVolume(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-stone-900 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
          <span className="w-8 text-right tabular-nums text-stone-300 font-mono">
            {Math.round((state.isMuted ? 0 : state.volume) * 100)}%
          </span>
        </div>

        {/* 6 Track Playlist Selector */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold">
            <span className="flex items-center space-x-1">
              <Music className="w-3 h-3 text-amber-400" />
              <span>Fallout Shelter Records (6 Tracks)</span>
            </span>
          </div>

          <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
            {VAULT_JUKEBOX_TRACKS.map((track, idx) => {
              const isSelected = state.currentTrack.id === track.id;
              const isPlayingThis = isSelected && state.isPlaying;

              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    if (isSelected && state.isPlaying) {
                      vaultJukebox.togglePlay();
                    } else {
                      vaultJukebox.playTrack(track.id);
                    }
                  }}
                  className={`w-full text-left p-2 rounded-xl border transition flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500/20 border-amber-400 text-white shadow-xs'
                      : 'bg-stone-900/70 hover:bg-stone-900 border-stone-800 text-stone-300'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 min-w-0">
                    <span
                      className={`w-5 h-5 rounded-md flex items-center justify-center font-mono font-black text-[10px] shrink-0 ${
                        isSelected
                          ? 'bg-amber-500 text-stone-950'
                          : 'bg-stone-800 text-amber-400 group-hover:bg-amber-500/20'
                      }`}
                    >
                      {isPlayingThis ? '❚❚' : `0${idx + 1}`}
                    </span>
                    <div className="min-w-0">
                      <h4 className={`text-xs font-bold truncate font-mono ${
                        isSelected ? 'text-amber-300' : 'text-stone-200 group-hover:text-amber-300'
                      }`}>
                        {track.title}
                      </h4>
                      <p className="text-[10px] text-stone-400 truncate">
                        {track.mood}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] text-stone-400 font-mono shrink-0 tabular-nums ml-2">
                    {track.duration}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default VaultJukeboxDrawerPlayer;
