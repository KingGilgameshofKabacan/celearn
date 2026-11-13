// Web Audio API Sound Effects Engine for CELEARN
// 100% Client-side synthetic acoustic synthesis with 6 Custom Personality Sound Packs
// Zero external asset dependencies, zero 404 risk, full offline capability.

import { ThemeId, DEFAULT_THEME_ID } from '../types/theme';

class SoundEffectManager {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private enabled: boolean = true;
  private muted: boolean = false;
  private volume: number = 0.8;
  private activeThemeId: ThemeId = DEFAULT_THEME_ID;
  private isPreviewing: boolean = false;
  private lastSoundTimes: Record<string, number> = {};

  private readonly STORAGE_KEY_ENABLED = 'cele_sound_effects_enabled_v1';
  private readonly STORAGE_KEY_VOLUME = 'cele_sound_volume_v1';
  private readonly STORAGE_KEY_MUTED = 'cele_sound_muted_v1';
  private readonly STORAGE_KEY_THEME = 'cele_active_theme_id';

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const storedEnabled = localStorage.getItem(this.STORAGE_KEY_ENABLED);
        this.enabled = storedEnabled !== null ? storedEnabled === 'true' : true;

        const storedVol = localStorage.getItem(this.STORAGE_KEY_VOLUME);
        this.volume = storedVol !== null ? Math.max(0, Math.min(1, parseFloat(storedVol))) : 0.8;

        const storedMuted = localStorage.getItem(this.STORAGE_KEY_MUTED);
        this.muted = storedMuted !== null ? storedMuted === 'true' : false;

        const storedTheme = localStorage.getItem(this.STORAGE_KEY_THEME);
        if (
          storedTheme === 'vault-tec' ||
          storedTheme === 'nuka-cola' ||
          storedTheme === 'power-armor' ||
          storedTheme === 'radaway-medbay'
        ) {
          this.activeThemeId = storedTheme;
        }
      } catch {
        this.enabled = true;
        this.volume = 0.8;
        this.muted = false;
        this.activeThemeId = DEFAULT_THEME_ID;
      }
    }
  }

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.updateMasterGain();
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  private updateMasterGain(): void {
    if (!this.masterGain || !this.ctx) return;
    const effectiveGain = this.enabled && !this.muted ? this.volume : 0;
    this.masterGain.gain.setValueAtTime(effectiveGain, this.ctx.currentTime);
  }

  private shouldThrottle(soundId: string, minIntervalMs: number = 80): boolean {
    const now = Date.now();
    const last = this.lastSoundTimes[soundId] || 0;
    if (now - last < minIntervalMs) return true;
    this.lastSoundTimes[soundId] = now;
    return false;
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public setEnabled(enable: boolean): void {
    this.enabled = enable;
    this.updateMasterGain();
    try {
      localStorage.setItem(this.STORAGE_KEY_ENABLED, String(enable));
    } catch {}
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public setMuted(muted: boolean): void {
    this.muted = muted;
    this.updateMasterGain();
    try {
      localStorage.setItem(this.STORAGE_KEY_MUTED, String(muted));
    } catch {}
  }

  public getVolume(): number {
    return this.volume;
  }

  public setVolume(vol: number): void {
    const clamped = Math.max(0, Math.min(1, vol));
    this.volume = clamped;
    this.updateMasterGain();
    try {
      localStorage.setItem(this.STORAGE_KEY_VOLUME, String(clamped));
    } catch {}
  }

  public getActiveTheme(): ThemeId {
    return this.activeThemeId;
  }

  public setTheme(themeId: ThemeId): void {
    this.activeThemeId = themeId;
    try {
      localStorage.setItem(this.STORAGE_KEY_THEME, themeId);
    } catch {}
  }

  public toggle(): boolean {
    this.setEnabled(!this.enabled);
    if (this.enabled && !this.muted) {
      this.playClick();
    }
    return this.enabled;
  }

  public resetSettings(): void {
    this.setEnabled(true);
    this.setMuted(false);
    this.setVolume(0.8);
    this.setTheme(DEFAULT_THEME_ID);
  }

  // =========================================================================
  // THEME-SPECIFIC ACOUSTIC SYNTHESIS ENGINE
  // =========================================================================

  // 1. Button or primary-action confirmation
  public playClick(themeOverride?: ThemeId): void {
    if (!this.enabled || this.muted) return;
    if (this.shouldThrottle('click', 50)) return;
    const ctx = this.getAudioContext();
    if (!ctx || !this.masterGain) return;

    const theme = themeOverride || this.activeThemeId;
    const now = ctx.currentTime;

    switch (theme) {
      case 'nuka-cola': {
        // Crisp soda bottle-cap pop
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(920, now);
        osc.frequency.exponentialRampToValueAtTime(480, now + 0.05);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 0.06);
        break;
      }
      case 'power-armor': {
        // Heavy pneumatic armor plate clank
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(280, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.045);
        gain.gain.setValueAtTime(0.16, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 0.055);
        break;
      }
      case 'radaway-medbay': {
        // Clean clinical bio-monitor dual blip
        [580, 880].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now);
          gain.gain.setValueAtTime(idx === 0 ? 0.14 : 0.05, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
          osc.connect(gain);
          gain.connect(this.masterGain!);
          osc.start(now);
          osc.stop(now + 0.045);
        });
        break;
      }
      case 'vault-tec':
      default: {
        // Vault-Tec heavy relay click / Pip-Boy CRT phosphor toggle
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1250, now);
        filter.Q.setValueAtTime(3.5, now);
        osc.frequency.setValueAtTime(1400, now);
        osc.frequency.exponentialRampToValueAtTime(350, now + 0.04);
        gain.gain.setValueAtTime(0.14, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 0.045);
        break;
      }
    }
  }

  // 2. Starting a study session
  public playStartSession(themeOverride?: ThemeId): void {
    if (!this.enabled || this.muted) return;
    const ctx = this.getAudioContext();
    if (!ctx || !this.masterGain) return;
    const theme = themeOverride || this.activeThemeId;
    const now = ctx.currentTime;

    const notes =
      theme === 'nuka-cola'
        ? [523.25, 659.25, 783.99]
        : theme === 'power-armor'
        ? [220, 293.66, 440]
        : theme === 'radaway-medbay'
        ? [440, 554.37, 659.25]
        : [440, 554.37, 659.25, 880]; // Vault-Tec Pip-Boy boot arpeggio

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = theme === 'vault-tec' ? 'sawtooth' : theme === 'power-armor' ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.14, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.28);
      osc.connect(gain);
      gain.connect(this.masterGain!);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.3);
    });
  }

  // 3. Pausing a study session
  public playPauseSession(): void {
    if (!this.enabled || this.muted) return;
    const ctx = this.getAudioContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;
    [520, 380].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);
      gain.gain.setValueAtTime(0.1, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.16);
      osc.connect(gain);
      gain.connect(this.masterGain!);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.18);
    });
  }

  // 4. Resuming a study session
  public playResumeSession(): void {
    if (!this.enabled || this.muted) return;
    const ctx = this.getAudioContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;
    [380, 520].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);
      gain.gain.setValueAtTime(0.1, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.16);
      osc.connect(gain);
      gain.connect(this.masterGain!);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.18);
    });
  }

  // 5. Completing a study session
  public playCompleteSession(): void {
    this.playGoalReached();
  }

  // 6. Completing a study task (Correct answer / flashcard mastered)
  public playCompleteTask(themeOverride?: ThemeId): void {
    if (!this.enabled || this.muted) return;
    if (this.shouldThrottle('complete-task', 90)) return;
    const ctx = this.getAudioContext();
    if (!ctx || !this.masterGain) return;

    const theme = themeOverride || this.activeThemeId;
    const now = ctx.currentTime;

    switch (theme) {
      case 'nuka-cola': {
        // Cheerful Nuka-Fizz ascending bottle chimes
        [659.25, 880.0, 1108.73].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.065);
          gain.gain.setValueAtTime(0, now + idx * 0.065);
          gain.gain.linearRampToValueAtTime(0.16, now + idx * 0.065 + 0.015);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.065 + 0.26);
          osc.connect(gain);
          gain.connect(this.masterGain!);
          osc.start(now + idx * 0.065);
          osc.stop(now + idx * 0.065 + 0.28);
        });
        break;
      }
      case 'power-armor': {
        // Twin Brotherhood Fusion Core confirmation lock
        [392.0, 659.25].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0, now + idx * 0.08);
          gain.gain.linearRampToValueAtTime(0.17, now + idx * 0.08 + 0.015);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.32);
          osc.connect(gain);
          gain.connect(this.masterGain!);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.34);
        });
        break;
      }
      case 'radaway-medbay': {
        // Serene Stimpak Medbay monitor harmonic chord C5 -> G5
        [523.25, 783.99].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.085);
          gain.gain.setValueAtTime(0.16, now + idx * 0.085);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.085 + 0.32);
          osc.connect(gain);
          gain.connect(this.masterGain!);
          osc.start(now + idx * 0.085);
          osc.stop(now + idx * 0.085 + 0.34);
        });
        break;
      }
      case 'vault-tec':
      default: {
        // Pip-Boy Quest Notification / Positive Terminal Fanfare [587.33 (D5), 880.0 (A5), 1174.66 (D6)]
        [587.33, 880.0, 1174.66].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();
          osc.type = 'square';
          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(freq * 1.5, now + idx * 0.06);
          filter.Q.setValueAtTime(2.0, now + idx * 0.06);
          osc.frequency.setValueAtTime(freq, now + idx * 0.06);
          gain.gain.setValueAtTime(0, now + idx * 0.06);
          gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.06 + 0.015);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.26);
          osc.connect(filter);
          filter.connect(gain);
          gain.connect(this.masterGain!);
          osc.start(now + idx * 0.06);
          osc.stop(now + idx * 0.06 + 0.28);
        });
        break;
      }
    }
  }

  // 7. Completing a topic
  public playCompleteTopic(): void {
    this.playCompleteTask();
  }

  // 8. Completing a revision task
  public playCompleteRevision(): void {
    this.playCompleteTask();
  }

  // 9. Reaching a study goal / milestone badge
  public playGoalReached(themeOverride?: ThemeId): void {
    if (!this.enabled || this.muted) return;
    const ctx = this.getAudioContext();
    if (!ctx || !this.masterGain) return;
    const theme = themeOverride || this.activeThemeId;
    const now = ctx.currentTime;

    if (theme === 'radaway-medbay') {
      // Calming bio-synthesis bell chord with gentle tail
      const fundamental = 440;
      [fundamental, fundamental * 1.5, fundamental * 2].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(idx === 0 ? 0.2 : 0.1, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
        osc.connect(gain);
        gain.connect(this.masterGain!);
        osc.start(now + idx * 0.07);
        osc.stop(now + 0.95);
      });
      return;
    }

    if (theme === 'nuka-cola') {
      // Bubbly Nuka-World celebratory cascade
      const chord = [523.25, 659.25, 783.99, 1046.5];
      chord.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0, now + idx * 0.07);
        gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.07 + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.07 + 0.55);
        osc.connect(gain);
        gain.connect(this.masterGain!);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.6);
      });
      return;
    }

    if (theme === 'power-armor') {
      // Deep fusion core startup fanfare
      const notes = [293.66, 440.0, 587.33, 880.0];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.09);
        gain.gain.setValueAtTime(0, now + idx * 0.09);
        gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.09 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.09 + 0.5);
        osc.connect(gain);
        gain.connect(this.masterGain!);
        osc.start(now + idx * 0.09);
        osc.stop(now + idx * 0.09 + 0.55);
      });
      return;
    }

    // Vault-Tec Approved Triumphant Brass Fanfare (Pip-Boy Level Up)
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2400, now + idx * 0.09);
      osc.frequency.setValueAtTime(freq, now + idx * 0.09);
      gain.gain.setValueAtTime(0, now + idx * 0.09);
      gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.09 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.4);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain!);
      osc.start(now + idx * 0.09);
      osc.stop(now + idx * 0.09 + 0.42);
    });
  }

  // 10. Reaching a study-streak milestone
  public playStreakMilestone(streakCount: number = 3, themeOverride?: ThemeId): void {
    if (!this.enabled || this.muted) return;
    const ctx = this.getAudioContext();
    if (!ctx || !this.masterGain) return;
    const theme = themeOverride || this.activeThemeId;
    const now = ctx.currentTime;

    const baseFreq = Math.min(880, 523.25 + (streakCount % 10) * 35);
    const notes = [baseFreq, baseFreq * 1.25, baseFreq * 1.5, baseFreq * 2];

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = theme === 'power-armor' ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);
      gain.gain.setValueAtTime(0, now + idx * 0.06);
      gain.gain.linearRampToValueAtTime(0.17, now + idx * 0.06 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.32);
      osc.connect(gain);
      gain.connect(this.masterGain!);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.35);
    });
  }

  // 11. Starting a mock-board simulation
  public playStartExam(): void {
    this.playStartSession();
  }

  // 12. Low-time warning during a mock-board simulation
  public playLowTimeWarning(): void {
    if (!this.enabled || this.muted) return;
    if (this.shouldThrottle('low-time-warning', 2000)) return;
    const ctx = this.getAudioContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;

    // Gentle twin pulse (not harsh, polite accessibility reminder)
    [440, 440].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.18);
      gain.gain.setValueAtTime(0.12, now + idx * 0.18);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.18 + 0.12);
      osc.connect(gain);
      gain.connect(this.masterGain!);
      osc.start(now + idx * 0.18);
      osc.stop(now + idx * 0.18 + 0.14);
    });
  }

  // 13. Submitting a mock-board simulation
  public playSubmitExam(): void {
    this.playClick();
  }

  // 14. Completing a mock-board simulation: Passed vs Failed
  public playExamPassed(): void {
    this.playGoalReached();
  }

  public playExamFailed(): void {
    if (!this.enabled || this.muted) return;
    const ctx = this.getAudioContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;
    const notes = [392.0, 311.13, 261.63]; // G4 -> Eb4 -> C4
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.2);
      gain.gain.setValueAtTime(0, now + idx * 0.2);
      gain.gain.linearRampToValueAtTime(0.14, now + idx * 0.2 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.2 + 0.45);
      osc.connect(gain);
      gain.connect(this.masterGain!);
      osc.start(now + idx * 0.2);
      osc.stop(now + idx * 0.2 + 0.5);
    });
  }

  // 15. Successful data import or export (e.g. PDF scan / term add)
  public playDataAction(): void {
    this.playCompleteTask();
  }

  // 16. 3D Card Flip Tactile Acoustic Feedback (60 FPS physical flip whoosh)
  public playCardFlip(): void {
    if (!this.enabled || this.muted) return;
    if (this.shouldThrottle('card-flip', 80)) return;
    const ctx = this.getAudioContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(380, now);
    osc.frequency.exponentialRampToValueAtTime(140, now + 0.08);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.frequency.exponentialRampToValueAtTime(320, now + 0.08);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.085);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.09);
  }

  // 17. Error or invalid-action feedback
  public playError(themeOverride?: ThemeId): void {
    if (!this.enabled || this.muted) return;
    if (this.shouldThrottle('error', 120)) return;
    const ctx = this.getAudioContext();
    if (!ctx || !this.masterGain) return;

    const theme = themeOverride || this.activeThemeId;
    const now = ctx.currentTime;

    const freqs = [164.81, 130.81]; // E3 -> C3
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      osc.type = theme === 'power-armor' ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, now);
      gain.gain.setValueAtTime(0, now + idx * 0.1);
      gain.gain.linearRampToValueAtTime(0.14, now + idx * 0.1 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.2);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain!);
      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 0.22);
    });
  }

  // =========================================================================
  // PREVIEW SOUND PACK
  // =========================================================================

  public previewSoundPack(themeId: ThemeId): void {
    if (this.isPreviewing) return;
    this.isPreviewing = true;

    // 1. Theme Click
    this.playClick(themeId);

    // 2. Task Confirmation after 180ms
    setTimeout(() => {
      this.playCompleteTask(themeId);
    }, 180);

    // 3. Goal Reached after 500ms
    setTimeout(() => {
      this.playGoalReached(themeId);
      setTimeout(() => {
        this.isPreviewing = false;
      }, 700);
    }, 500);
  }

  // =========================================================================
  // BACKWARD COMPATIBILITY ALIASES
  // =========================================================================
  public playCorrect(): void {
    this.playCompleteTask();
  }

  public playWrong(): void {
    this.playError();
  }

  public playPassed(): void {
    this.playExamPassed();
  }

  public playFailed(): void {
    this.playExamFailed();
  }

  public playBadge(): void {
    this.playGoalReached();
  }

  public playStreak(count: number = 3): void {
    this.playStreakMilestone(count);
  }

  public playWaterDrop(): void {
    this.playClick();
  }

  // Vault-Tec Bottle Caps Currency Jingle
  public playCapsJingle(): void {
    if (!this.enabled || this.muted) return;
    const ctx = this.getAudioContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;
    [2400, 3200, 4400, 3000].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.035);
      gain.gain.setValueAtTime(0.08, now + idx * 0.035);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.035 + 0.07);
      osc.connect(gain);
      gain.connect(this.masterGain!);
      osc.start(now + idx * 0.035);
      osc.stop(now + idx * 0.035 + 0.08);
    });
  }

  // Vault-Tec Geiger Counter clicks
  public playGeigerCrackle(): void {
    if (!this.enabled || this.muted) return;
    const ctx = this.getAudioContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;
    for (let i = 0; i < 4; i++) {
      const delay = Math.random() * 0.12;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(750 + Math.random() * 500, now + delay);
      gain.gain.setValueAtTime(0.05, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.008);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now + delay);
      osc.stop(now + delay + 0.01);
    }
  }

  // Vault Dweller Streak Pet click interaction (cheerful Pip-Boy talk chirp)
  public playPetClick(): void {
    if (!this.enabled || this.muted) return;
    const ctx = this.getAudioContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;

    // Dual cheerful Pip-Boy tone arpeggio (659Hz -> 880Hz -> 1318Hz)
    const notes = [659.25, 880, 1318.5];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.045);
      gain.gain.setValueAtTime(0.12, now + idx * 0.045);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.045 + 0.08);
      osc.connect(gain);
      gain.connect(this.masterGain!);
      osc.start(now + idx * 0.045);
      osc.stop(now + idx * 0.045 + 0.09);
    });
  }

  // Vault Dweller Pet dialogue announcement (Pip-Boy terminal radio beep)
  public playPetDialogue(): void {
    if (!this.enabled || this.muted) return;
    const ctx = this.getAudioContext();
    if (!ctx || !this.masterGain) return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(987.77, now);
    osc.frequency.setValueAtTime(1318.5, now + 0.05);
    gain.gain.setValueAtTime(0.14, now);
    gain.gain.setValueAtTime(0.14, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.2);
  }
}

export const soundManager = new SoundEffectManager();
