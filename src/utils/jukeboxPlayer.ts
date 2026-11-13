import { VAULT_JUKEBOX_TRACKS, JukeboxTrack } from '../data/jukeboxTracks';

export type JukeboxPlayerMode = 'cassette' | 'vinyl';

export interface JukeboxState {
  currentTrack: JukeboxTrack;
  trackIndex: number;
  totalTracks: number;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  loopMode: 'all' | 'one' | 'off';
  playerMode: JukeboxPlayerMode;
}

class VaultJukeboxManager {
  private audio: HTMLAudioElement | null = null;
  private currentTrackIndex: number = 0;
  private isPlaying: boolean = false;
  private volume: number = 0.65;
  private isMuted: boolean = false;
  private loopMode: 'all' | 'one' | 'off' = 'all';
  private playerMode: JukeboxPlayerMode = 'cassette';
  private currentTime: number = 0;
  private duration: number = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const savedTrackId = localStorage.getItem('cele_jukebox_track');
        if (savedTrackId) {
          const idx = VAULT_JUKEBOX_TRACKS.findIndex(t => t.id === savedTrackId);
          if (idx !== -1) this.currentTrackIndex = idx;
        }
        const savedVol = localStorage.getItem('cele_jukebox_vol');
        if (savedVol) this.volume = parseFloat(savedVol);
        const savedMode = localStorage.getItem('cele_jukebox_player_mode');
        if (savedMode === 'cassette' || savedMode === 'vinyl') {
          this.playerMode = savedMode;
        }
      } catch {}
    }
  }

  private initAudio() {
    if (this.audio) return this.audio;
    if (typeof window === 'undefined') return null;

    const audio = new Audio();
    audio.preload = 'metadata';
    audio.volume = this.isMuted ? 0 : this.volume;

    const currentTrack = VAULT_JUKEBOX_TRACKS[this.currentTrackIndex] || VAULT_JUKEBOX_TRACKS[0];
    audio.src = currentTrack.src;

    audio.addEventListener('timeupdate', () => {
      this.currentTime = audio.currentTime;
      this.duration = audio.duration || 0;
      this.notifyListeners();
    });

    audio.addEventListener('loadedmetadata', () => {
      this.duration = audio.duration || 0;
      this.notifyListeners();
    });

    audio.addEventListener('play', () => {
      this.isPlaying = true;
      this.notifyListeners();
    });

    audio.addEventListener('pause', () => {
      this.isPlaying = false;
      this.notifyListeners();
    });

    audio.addEventListener('ended', () => {
      if (this.loopMode === 'one') {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } else if (this.loopMode === 'all') {
        this.nextTrack(true);
      } else {
        this.isPlaying = false;
        this.notifyListeners();
      }
    });

    this.audio = audio;
    return audio;
  }

  public getState(): JukeboxState {
    const currentTrack = VAULT_JUKEBOX_TRACKS[this.currentTrackIndex] || VAULT_JUKEBOX_TRACKS[0];
    return {
      currentTrack,
      trackIndex: this.currentTrackIndex,
      totalTracks: VAULT_JUKEBOX_TRACKS.length,
      isPlaying: this.isPlaying,
      currentTime: this.currentTime,
      duration: this.duration,
      volume: this.volume,
      isMuted: this.isMuted,
      loopMode: this.loopMode,
      playerMode: this.playerMode
    };
  }

  public setPlayerMode(mode: JukeboxPlayerMode): void {
    this.playerMode = mode;
    try {
      localStorage.setItem('cele_jukebox_player_mode', mode);
    } catch {}
    this.notifyListeners();
  }

  public playTrack(trackId: string): void {
    const audio = this.initAudio();
    if (!audio) return;

    const idx = VAULT_JUKEBOX_TRACKS.findIndex(t => t.id === trackId);
    if (idx === -1) return;

    const isSameTrack = this.currentTrackIndex === idx && audio.src.includes(VAULT_JUKEBOX_TRACKS[idx].src);

    this.currentTrackIndex = idx;
    try {
      localStorage.setItem('cele_jukebox_track', trackId);
    } catch {}

    if (!isSameTrack) {
      audio.src = VAULT_JUKEBOX_TRACKS[idx].src;
      audio.load();
    }

    audio.volume = this.isMuted ? 0 : this.volume;
    audio.play().then(() => {
      this.isPlaying = true;
      this.notifyListeners();
    }).catch(err => {
      console.warn('Jukebox autoplay prevented or interrupted:', err);
    });
  }

  public togglePlay(): void {
    const audio = this.initAudio();
    if (!audio) return;

    if (this.isPlaying) {
      audio.pause();
    } else {
      if (!audio.src || audio.src === '') {
        audio.src = VAULT_JUKEBOX_TRACKS[this.currentTrackIndex].src;
      }
      audio.volume = this.isMuted ? 0 : this.volume;
      audio.play().then(() => {
        this.isPlaying = true;
        this.notifyListeners();
      }).catch(err => {
        console.warn('Jukebox playback error:', err);
      });
    }
  }

  public pause(): void {
    if (this.audio && this.isPlaying) {
      this.audio.pause();
    }
  }

  public nextTrack(autoPlay: boolean = true): void {
    const nextIdx = (this.currentTrackIndex + 1) % VAULT_JUKEBOX_TRACKS.length;
    const track = VAULT_JUKEBOX_TRACKS[nextIdx];
    if (autoPlay || this.isPlaying) {
      this.playTrack(track.id);
    } else {
      this.currentTrackIndex = nextIdx;
      if (this.audio) {
        this.audio.src = track.src;
      }
      this.notifyListeners();
    }
  }

  public prevTrack(): void {
    const prevIdx = (this.currentTrackIndex - 1 + VAULT_JUKEBOX_TRACKS.length) % VAULT_JUKEBOX_TRACKS.length;
    const track = VAULT_JUKEBOX_TRACKS[prevIdx];
    if (this.isPlaying) {
      this.playTrack(track.id);
    } else {
      this.currentTrackIndex = prevIdx;
      if (this.audio) {
        this.audio.src = track.src;
      }
      this.notifyListeners();
    }
  }

  public seek(seconds: number): void {
    if (this.audio) {
      this.audio.currentTime = Math.max(0, Math.min(seconds, this.duration || 1000));
      this.currentTime = this.audio.currentTime;
      this.notifyListeners();
    }
  }

  public setVolume(vol: number): void {
    const clamped = Math.max(0, Math.min(1, vol));
    this.volume = clamped;
    if (this.audio) {
      this.audio.volume = this.isMuted ? 0 : clamped;
    }
    try {
      localStorage.setItem('cele_jukebox_vol', String(clamped));
    } catch {}
    this.notifyListeners();
  }

  public toggleMute(): void {
    this.isMuted = !this.isMuted;
    if (this.audio) {
      this.audio.volume = this.isMuted ? 0 : this.volume;
    }
    this.notifyListeners();
  }

  public toggleLoop(): void {
    if (this.loopMode === 'all') this.loopMode = 'one';
    else if (this.loopMode === 'one') this.loopMode = 'off';
    else this.loopMode = 'all';
    this.notifyListeners();
  }

  private notifyListeners(): void {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cele_jukebox_state', { detail: this.getState() }));
    }
  }
}

export const vaultJukebox = new VaultJukeboxManager();
