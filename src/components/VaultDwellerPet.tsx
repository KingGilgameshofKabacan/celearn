import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { soundManager } from '../utils/audio';
import {
  getStreakData,
  addBottleCaps,
  getAvatarConfig,
  saveAvatarConfig,
  getAvatarPosition,
  saveAvatarPosition,
  getAvatarMinimized,
  saveAvatarMinimized
} from '../utils/storage';
import { COMPANION_OPTIONS, VaultAvatarConfig } from '../types/avatar';
import { VaultAvatarSprite } from './VaultAvatarSprite';
import { BottleCapIcon } from './BottleCapIcon';
import { X, ChevronRight, Compass, EyeOff, Move } from 'lucide-react';

interface VaultDwellerPetProps {
  userName?: string;
  onNavigateTab?: (tab: 'exam' | 'flashcards' | 'formulas' | 'dictionary' | 'rankings' | 'analytics' | 'achievements' | 'themes') => void;
}

interface DialogueEntry {
  category: string;
  text: string;
  actionLabel: string;
  targetTab: 'exam' | 'flashcards' | 'formulas' | 'dictionary' | 'rankings' | 'analytics' | 'achievements' | 'themes';
}

const BASE_DIALOGUES: DialogueEntry[] = [
  {
    category: 'Vault Morale',
    text: "Vault Morale is holding strong! Keep this study streak unbroken so your daily Bottle Cap rations stay maxed.",
    actionLabel: 'Check Telemetry',
    targetTab: 'analytics'
  },
  {
    category: 'PSAD (Structural)',
    text: "Overseer confirms zero bulkhead deflection! Remember: flexure phi = 0.90 for tension-controlled reinforced concrete.",
    actionLabel: 'Train PSAD',
    targetTab: 'exam'
  },
  {
    category: 'HPGE (Hydraulics)',
    text: "Vault 101 water purifiers run on Bernoulli's theorem: P/gamma + v^2/(2g) + z = constant. Keep head losses low!",
    actionLabel: 'Vault Glossary',
    targetTab: 'dictionary'
  },
  {
    category: 'MSTE (Surveying)',
    text: "Surveying protocol: Departure = L sin(theta), Latitude = L cos(theta). Never misclose a traverse in the Wasteland!",
    actionLabel: 'S.P.E.C.I.A.L. Deck',
    targetTab: 'flashcards'
  },
  {
    category: 'PSAD (Mechanics)',
    text: "Euler's Critical Buckling: Pcr = pi^2 EI / (KL)^2. That formula keeps our subterranean steel columns standing!",
    actionLabel: 'Open Glossary',
    targetTab: 'dictionary'
  },
  {
    category: 'HPGE (Geotech)',
    text: "Terzaghi's ultimate bearing capacity: q_ult = c Nc + q Nq + 0.5 gamma B N_gamma. Solid soil, solid shelter!",
    actionLabel: 'Drill Flashcards',
    targetTab: 'flashcards'
  },
  {
    category: 'MSTE (Management)',
    text: "CPM / PERT directive: Activities on the critical path have zero total float. Stay on schedule for exam day!",
    actionLabel: 'Launch G.O.A.T.',
    targetTab: 'exam'
  },
  {
    category: 'PSAD (Steel)',
    text: "AISC steel reminder: Verify Lateral-Torsional Buckling (Lb vs Lp and Lr) before placing reactor overhead girders!",
    actionLabel: 'Steel Specs',
    targetTab: 'dictionary'
  },
  {
    category: 'HPGE (Open Channel)',
    text: "Manning's equation: Q = (1/n) A R^(2/3) S^(1/2). Even wasteland runoff follows open-channel hydraulics!",
    actionLabel: 'Hydraulics Deck',
    targetTab: 'flashcards'
  },
  {
    category: 'MSTE (Economy)',
    text: "Capitalized Cost = FC + OM/i. Vault-Tec amortizes tunnel borers across 200 years of bunker operations!",
    actionLabel: 'Econ Formulas',
    targetTab: 'dictionary'
  },
  {
    category: 'Vault-Tec Routine',
    text: "Concrete compressive strength f'c cures over 28 days. Your CELE mastery compounds every single day you review.",
    actionLabel: 'View Progress',
    targetTab: 'analytics'
  },
  {
    category: 'Overseer Notice',
    text: "Pip-Boy telemetry shows high focus. Customize my look or switch Vault companions anytime in Terminal Skins!",
    actionLabel: 'Customize Avatar',
    targetTab: 'themes'
  }
];

const COMPANION_DIALOGUES: Record<VaultAvatarConfig['companion'], DialogueEntry[]> = {
  'vault-dweller': [
    {
      category: 'Dweller Gear',
      text: "Jumpsuit pressed and Pip-Boy calibrated! Drag me to any side of your screen whenever you want a clear view.",
      actionLabel: 'Customize Suit',
      targetTab: 'themes'
    }
  ],
  dogmeat: [
    {
      category: 'Dogmeat K-9',
      text: "Woof! *Sniffs NSCP 2015 seismic provisions* Dogmeat found high-yield PSAD traps waiting in your G.O.A.T. queue!",
      actionLabel: 'Start Exam',
      targetTab: 'exam'
    },
    {
      category: 'Dogmeat K-9',
      text: "*Happy tail wag* Good engineer! Every mastered flashcard earns +10 Bottle Caps and keeps the shelter safe!",
      actionLabel: 'Open Deck',
      targetTab: 'flashcards'
    }
  ],
  codsworth: [
    {
      category: 'Codsworth',
      text: "Right you are! Shall I polish the slide rule while you compute moment distribution factors, Mum or Sir?",
      actionLabel: 'Review Terms',
      targetTab: 'dictionary'
    },
    {
      category: 'Codsworth',
      text: "210 years of waiting and not a spot of rust on my differential equations! Ready for your daily drill?",
      actionLabel: 'Take G.O.A.T.',
      targetTab: 'exam'
    }
  ],
  eyebot: [
    {
      category: 'ED-E Telemetry',
      text: "*Beeping battle telemetry* Detecting hydraulic jump ahead! Froude number Fr > 1 indicates supercritical flow.",
      actionLabel: 'Check Telemetry',
      targetTab: 'analytics'
    }
  ],
  deathclaw: [
    {
      category: 'Bunker Mascot',
      text: "*Rumbles softly in safety hardhat* Ultimate shear check passed! Nothing breaks this reinforced footing!",
      actionLabel: 'Inspect Badges',
      targetTab: 'achievements'
    }
  ],
  'liberty-prime': [
    {
      category: 'Liberty Prime',
      text: "COMMENCING BOARD EXAM ANNIHILATION! PROBABILITY OF CELE PASSAGE: 100 PERCENT! ENGAGE MOCK SIMULATION!",
      actionLabel: 'Deploy G.O.A.T.',
      targetTab: 'exam'
    }
  ]
};

const AVATAR_BOX_W = 112;
const AVATAR_BOX_H = 128;
const VIEWPORT_PADDING = 10;

const clampPosition = (x: number, y: number): { x: number; y: number } => {
  if (typeof window === 'undefined') return { x: 24, y: 24 };
  const maxX = Math.max(VIEWPORT_PADDING, window.innerWidth - AVATAR_BOX_W - VIEWPORT_PADDING);
  const maxY = Math.max(VIEWPORT_PADDING, window.innerHeight - AVATAR_BOX_H - VIEWPORT_PADDING);
  return {
    x: Math.round(Math.min(Math.max(VIEWPORT_PADDING, x), maxX)),
    y: Math.round(Math.min(Math.max(VIEWPORT_PADDING, y), maxY))
  };
};

const getDefaultPosition = (): { x: number; y: number } => {
  if (typeof window === 'undefined') return { x: 800, y: 500 };
  return clampPosition(
    window.innerWidth - AVATAR_BOX_W - 24,
    window.innerHeight - AVATAR_BOX_H - 18
  );
};

export const VaultDwellerPet: React.FC<VaultDwellerPetProps> = ({
  userName = 'Dweller Dave',
  onNavigateTab
}) => {
  const [avatarConfig, setAvatarConfig] = useState<VaultAvatarConfig>(getAvatarConfig);
  const [pos, setPos] = useState<{ x: number; y: number }>(() => {
    const saved = getAvatarPosition();
    return saved ? clampPosition(saved.x, saved.y) : getDefaultPosition();
  });
  const [isCustomPlaced, setIsCustomPlaced] = useState<boolean>(() => {
    return Boolean(getAvatarPosition()?.isCustomPlaced);
  });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const [isWalking, setIsWalking] = useState<boolean>(false);
  const [isWinking, setIsWinking] = useState<boolean>(false);
  const [showBubble, setShowBubble] = useState<boolean>(false);
  const [dialogueIndex, setDialogueIndex] = useState<number>(0);
  const [isMinimized, setIsMinimized] = useState<boolean>(getAvatarMinimized);
  const [clickCount, setClickCount] = useState<number>(0);
  const [bonusCapsClaimed, setBonusCapsClaimed] = useState<boolean>(false);
  const [viewportSize, setViewportSize] = useState<{ w: number; h: number }>(() => ({
    w: typeof window !== 'undefined' ? window.innerWidth : 1280,
    h: typeof window !== 'undefined' ? window.innerHeight : 720
  }));

  const autoDismissTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingTimersRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());
  const scheduleTimeout = useCallback((fn: () => void, delayMs: number) => {
    const timer = setTimeout(() => {
      pendingTimersRef.current.delete(timer);
      fn();
    }, delayMs);
    pendingTimersRef.current.add(timer);
    return timer;
  }, []);
  const posRef = useRef<{ x: number; y: number }>(pos);
  useEffect(() => {
    posRef.current = pos;
  }, [pos]);

  const dragRef = useRef<{
    active: boolean;
    pointerId: number | null;
    startX: number;
    startY: number;
    origX: number;
    origY: number;
    moved: boolean;
  }>({
    active: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    origX: 0,
    origY: 0,
    moved: false
  });

  const streak = getStreakData();

  // Merge companion-specific dialogues with core Vault CELE dialogues
  const activeDialogues = useMemo(() => {
    const extra = COMPANION_DIALOGUES[avatarConfig.companion] || [];
    return [...extra, ...BASE_DIALOGUES];
  }, [avatarConfig.companion]);

  const activeCompanionMeta = useMemo(
    () => COMPANION_OPTIONS.find(c => c.id === avatarConfig.companion) || COMPANION_OPTIONS[0],
    [avatarConfig.companion]
  );

  // Listen to customization updates, position reset, and window resize
  useEffect(() => {
    const handleConfigUpdate = (e: Event) => {
      const custom = e as CustomEvent<VaultAvatarConfig>;
      setAvatarConfig(custom.detail || getAvatarConfig());
      setDialogueIndex(0);
    };
    const handlePositionReset = () => {
      const def = getDefaultPosition();
      setPos(def);
      setIsCustomPlaced(false);
      setIsMinimized(false);
    };
    const handleMinimizedSync = (e: Event) => {
      const custom = e as CustomEvent<boolean>;
      if (typeof custom.detail === 'boolean') setIsMinimized(custom.detail);
      else setIsMinimized(getAvatarMinimized());
    };
    const handleResize = () => {
      setViewportSize({
        w: window.innerWidth,
        h: window.innerHeight
      });
      setPos(prev => {
        if (!isCustomPlaced) {
          return getDefaultPosition();
        }
        return clampPosition(prev.x, prev.y);
      });
    };

    const handleOrientationChange = () => {
      handleResize();
      // iOS/Android often report updated innerWidth/innerHeight slightly after orientationchange fires
      scheduleTimeout(handleResize, 120);
      scheduleTimeout(handleResize, 320);
    };

    const handleBackupRestored = () => {
      setAvatarConfig(getAvatarConfig());
      const saved = getAvatarPosition();
      setPos(saved ? clampPosition(saved.x, saved.y) : getDefaultPosition());
      setIsCustomPlaced(Boolean(saved?.isCustomPlaced));
      setIsMinimized(getAvatarMinimized());
    };

    window.addEventListener('cele_avatar_updated', handleConfigUpdate);
    window.addEventListener('cele_avatar_position_reset', handlePositionReset);
    window.addEventListener('cele_avatar_minimized_changed', handleMinimizedSync);
    window.addEventListener('cele_backup_restored', handleBackupRestored);
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    window.visualViewport?.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('cele_avatar_updated', handleConfigUpdate);
      window.removeEventListener('cele_avatar_position_reset', handlePositionReset);
      window.removeEventListener('cele_avatar_minimized_changed', handleMinimizedSync);
      window.removeEventListener('cele_backup_restored', handleBackupRestored);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.visualViewport?.removeEventListener('resize', handleResize);
    };
  }, [isCustomPlaced, scheduleTimeout]);

  useEffect(() => {
    const timers = pendingTimersRef.current;
    return () => {
      if (autoDismissTimerRef.current) clearTimeout(autoDismissTimerRef.current);
      timers.forEach(t => clearTimeout(t));
      timers.clear();
    };
  }, []);

  const triggerDialogue = useCallback(
    (idx?: number) => {
      soundManager.playPetDialogue();
      if (idx !== undefined) {
        setDialogueIndex(idx % activeDialogues.length);
      } else {
        setDialogueIndex(prev => (prev + 1) % activeDialogues.length);
      }
      setShowBubble(true);
      setIsWinking(true);
      scheduleTimeout(() => setIsWinking(false), 900);

      if (autoDismissTimerRef.current) clearTimeout(autoDismissTimerRef.current);
      autoDismissTimerRef.current = setTimeout(() => {
        setShowBubble(false);
      }, 5000);
    },
    [activeDialogues.length, scheduleTimeout]
  );

  const handleNextDialogue = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundManager.playClick();
    triggerDialogue();
  };

  // Gentle patrol pacing along user's chosen axis/position without stealing them away from their side
  useEffect(() => {
    if (!avatarConfig.patrolEnabled || isMinimized || isDragging || showBubble) return;

    const walkInterval = setInterval(() => {
      if (Math.random() > 0.45 && typeof window !== 'undefined') {
        setIsWalking(true);
        const current = posRef.current;
        const nearLeftEdge = current.x <= 48;
        const nearRightEdge = current.x >= window.innerWidth - AVATAR_BOX_W - 48;

        if (nearLeftEdge || nearRightEdge) {
          const deltaY = (Math.random() * 48 + 20) * (Math.random() > 0.5 ? 1 : -1);
          const nextPos = clampPosition(current.x, current.y + deltaY);
          posRef.current = nextPos;
          setDirection(nearLeftEdge ? 'right' : 'left');
          setPos(nextPos);
        } else {
          const deltaX = (Math.random() * 64 + 28) * (Math.random() > 0.5 ? 1 : -1);
          const nextPos = clampPosition(current.x + deltaX, current.y);
          posRef.current = nextPos;
          setDirection(deltaX > 0 ? 'right' : 'left');
          setPos(nextPos);
        }

        scheduleTimeout(() => {
          setIsWalking(false);
        }, 1400);
      }
    }, 7500);

    return () => clearInterval(walkInterval);
  }, [avatarConfig.patrolEnabled, isMinimized, isDragging, showBubble, scheduleTimeout]);

  const handlePetClick = useCallback(() => {
    soundManager.playPetClick();
    const next = clickCount + 1;
    setClickCount(next);
    if (next > 0 && next % 5 === 0 && !bonusCapsClaimed) {
      addBottleCaps(5);
      soundManager.playCapsJingle();
      setBonusCapsClaimed(true);
      scheduleTimeout(() => setBonusCapsClaimed(false), 5500);
    }

    setIsWinking(true);
    scheduleTimeout(() => setIsWinking(false), 1200);
    triggerDialogue();
  }, [clickCount, bonusCapsClaimed, triggerDialogue, scheduleTimeout]);

  const handleHidePet = (e?: React.MouseEvent | React.PointerEvent) => {
    if (e) e.stopPropagation();
    soundManager.playClick();
    if (autoDismissTimerRef.current) clearTimeout(autoDismissTimerRef.current);
    setShowBubble(false);
    setIsMinimized(true);
    saveAvatarMinimized(true);
  };

  // Pointer-based Drag Anywhere (supports Mouse + Touch on Top, Bottom, Left, Right sides)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    // Ignore drags starting on interactive control buttons
    if ((e.target as HTMLElement).closest('button')) return;

    dragRef.current = {
      active: true,
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      origX: pos.x,
      origY: pos.y,
      moved: false
    };

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active || dragRef.current.pointerId !== e.pointerId) return;

    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    const distance = Math.hypot(dx, dy);

    if (distance > 6) {
      if (!dragRef.current.moved) {
        dragRef.current.moved = true;
        setIsDragging(true);
        setIsWalking(false);
      }

      if (Math.abs(dx) > 4) {
        setDirection(dx > 0 ? 'right' : 'left');
      }

      const nextPos = clampPosition(dragRef.current.origX + dx, dragRef.current.origY + dy);
      posRef.current = nextPos;
      setPos(nextPos);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active || dragRef.current.pointerId !== e.pointerId) return;

    const wasMoved = dragRef.current.moved;
    dragRef.current.active = false;
    dragRef.current.pointerId = null;

    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {}

    setIsDragging(false);

    if (wasMoved) {
      setIsCustomPlaced(true);
      saveAvatarPosition({ x: posRef.current.x, y: posRef.current.y, isCustomPlaced: true });
    } else {
      handlePetClick();
    }
  };

  const handlePointerCancel = () => {
    dragRef.current.active = false;
    dragRef.current.pointerId = null;
    setIsDragging(false);
  };

  const currentDialogue = activeDialogues[dialogueIndex % activeDialogues.length] || activeDialogues[0];

  // Calculate smart bubble alignment so it never clips off top, bottom, left, or right screen sides (including phone landscape)
  const viewportW = viewportSize.w;
  const viewportH = viewportSize.h;
  const isCompactLandscape = viewportH < 520;
  const isOnRightHalf = pos.x > viewportW / 2 - AVATAR_BOX_W / 2;
  const openBelow = pos.y < viewportH * 0.45;
  const horizontalAlignClass =
    pos.x < 130
      ? 'left-0'
      : pos.x > viewportW - AVATAR_BOX_W - 140
      ? 'right-0'
      : 'left-1/2 -translate-x-1/2';

  const pointerHorizontalClass =
    pos.x < 130
      ? 'left-8'
      : pos.x > viewportW - AVATAR_BOX_W - 140
      ? 'right-8'
      : 'left-1/2 -translate-x-1/2';

  const bubblePlacementClass = isCompactLandscape
    ? `${isOnRightHalf ? 'right-full mr-2.5' : 'left-full ml-2.5'} ${
        pos.y < viewportH * 0.35 ? 'top-0' : pos.y > viewportH * 0.65 ? 'bottom-0' : 'top-1/2 -translate-y-1/2'
      } w-64 sm:w-72 max-w-[calc(100vw-140px)] max-h-[calc(100dvh-24px)] overflow-y-auto`
    : `${openBelow ? 'top-full mt-2.5' : 'bottom-full mb-2.5'} ${horizontalAlignClass} w-72 sm:w-80 max-w-[calc(100vw-24px)] max-h-[calc(100dvh-160px)] overflow-y-auto`;

  // Minimized dock state
  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-40 select-none animate-in fade-in zoom-in-90 duration-200">
        <button
          onClick={() => {
            soundManager.playPetClick();
            setIsMinimized(false);
            saveAvatarMinimized(false);
          }}
          title="Restore your Vault Avatar"
          className="group relative flex items-center space-x-2 bg-[#0E1B38] hover:bg-[#162852] text-amber-300 px-3.5 py-2.5 rounded-2xl shadow-2xl border-2 border-amber-500 cursor-pointer transition active:scale-95 font-mono text-xs font-extrabold min-h-[44px]"
        >
          <div className="w-7 h-7 rounded-xl bg-[#080E1E] border border-amber-500/60 flex items-center justify-center overflow-hidden shrink-0">
            <VaultAvatarSprite config={avatarConfig} className="w-6 h-7" />
          </div>
          <span>Show {activeCompanionMeta.name}</span>
          <span className="flex items-center space-x-0.5 bg-amber-500 text-stone-950 px-1.5 py-0.5 rounded-md text-[10px] font-black">
            <BottleCapIcon className="w-3 h-3 text-stone-950" />
            <span>{streak.currentStreak}d</span>
          </span>
        </button>
      </div>
    );
  }

  const displayLabel =
    avatarConfig.companion === 'vault-dweller'
      ? userName.split(' ')[0]
      : activeCompanionMeta.name.split(' ')[0];

  return (
    <div
      className="fixed top-0 left-0 z-40 select-none pointer-events-none"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: isDragging ? 'none' : 'transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)',
        width: `${AVATAR_BOX_W}px`
      }}
    >
      <div className="relative pointer-events-auto flex flex-col items-center">
        {/* Smart-positioned Solid Dialogue Bubble (opens above or below depending on screen side) */}
        {showBubble && (
          <div
            onMouseEnter={() => {
              if (autoDismissTimerRef.current) clearTimeout(autoDismissTimerRef.current);
            }}
            onMouseLeave={() => {
              if (autoDismissTimerRef.current) clearTimeout(autoDismissTimerRef.current);
              autoDismissTimerRef.current = setTimeout(() => setShowBubble(false), 5000);
            }}
            className={`absolute ${bubblePlacementClass} bg-[#080F20] text-stone-100 border-2 border-amber-500 rounded-2xl p-3.5 shadow-[0_14px_40px_rgba(0,0,0,0.85)] font-mono text-xs z-50 select-text`}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-amber-500/40 pb-2 mb-2 bg-[#050B17] -mx-3.5 -mt-3.5 px-3.5 pt-2.5 rounded-t-2xl">
              <div className="flex items-center space-x-1.5 min-w-0">
                <span className="font-bold text-[10px] text-amber-400 uppercase tracking-wider truncate">
                  {activeCompanionMeta.name} · {currentDialogue.category}
                </span>
              </div>
              <div className="flex items-center space-x-1.5 shrink-0">
                <span className="text-[9px] text-amber-300/80 font-mono px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                  5s
                </span>
                <button
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    setShowBubble(false);
                  }}
                  title="Close dialogue"
                  className="p-1 hover:bg-stone-800 rounded-md text-stone-400 hover:text-stone-100 transition cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Dialogue Copy */}
            <p className="text-emerald-300 font-medium text-[11px] leading-relaxed mb-3">
              "{currentDialogue.text}"
            </p>

            {/* Footer actions */}
            <div className="flex items-center justify-between pt-2 border-t border-amber-500/30 text-[10px]">
              <div className="flex items-center space-x-1.5 text-stone-300 font-bold">
                <BottleCapIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  Streak: <strong className="text-amber-400 font-mono">{streak.currentStreak}d</strong>
                </span>
              </div>

              <div className="flex items-center space-x-1.5">
                {currentDialogue.targetTab && onNavigateTab && (
                  <button
                    type="button"
                    onClick={e => {
                      e.stopPropagation();
                      soundManager.playClick();
                      onNavigateTab(currentDialogue.targetTab);
                    }}
                    className="px-2.5 py-1 rounded-md bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold transition flex items-center space-x-0.5 cursor-pointer"
                  >
                    <span>{currentDialogue.actionLabel}</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleNextDialogue}
                  title="Next Vault Tip"
                  className="px-2.5 py-1 rounded-md bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-500/30 transition cursor-pointer font-bold"
                >
                  Next
                </button>
              </div>
            </div>

            {/* Speech Bubble Pointer Beak (Up or Down when stacked vertically) */}
            {!isCompactLandscape && (
              openBelow ? (
                <>
                  <div
                    className={`absolute -top-2.5 ${pointerHorizontalClass} w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[9px] border-b-amber-500`}
                  />
                  <div
                    className={`absolute -top-1.5 ${pointerHorizontalClass} w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[8px] border-b-[#050B17]`}
                  />
                </>
              ) : (
                <>
                  <div
                    className={`absolute -bottom-2.5 ${pointerHorizontalClass} w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[9px] border-t-amber-500`}
                  />
                  <div
                    className={`absolute -bottom-1.5 ${pointerHorizontalClass} w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[8px] border-t-[#080F20]`}
                  />
                </>
              )
            )}
          </div>
        )}

        {/* Bonus Caps Float Toast */}
        {bonusCapsClaimed && (
          <div className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono font-black text-xs text-amber-300 bg-stone-950 border border-amber-500 px-2.5 py-0.5 rounded-full shadow-lg animate-bounce flex items-center space-x-1 z-50">
            <BottleCapIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>+5 Caps!</span>
          </div>
        )}

        {/* Draggable Interactive Avatar Container */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onDoubleClick={handleHidePet}
          title="Click to talk • Drag to any side of the screen • Double-click to hide"
          style={{ touchAction: 'none' }}
          className={`group relative flex flex-col items-center ${
            isDragging ? 'cursor-grabbing scale-105' : 'cursor-grab hover:scale-[1.03]'
          } ${isWalking && !isDragging ? 'animate-bounce' : ''} transition-transform`}
        >
          {/* Quick Drag & Hide micro-bar visible on hover or touch */}
          <div className="flex items-center space-x-1 mb-0.5 opacity-80 group-hover:opacity-100 transition">
            <span
              className="flex items-center space-x-0.5 bg-[#080F20]/90 text-amber-300 border border-amber-500/40 px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold shadow"
              title="Drag to move anywhere on screen"
            >
              <Move className="w-2.5 h-2.5" />
            </span>
            <button
              type="button"
              onClick={handleHidePet}
              title="Hide Vault Avatar"
              className="flex items-center space-x-1 bg-[#080F20]/95 hover:bg-rose-950 text-stone-200 hover:text-rose-200 border border-stone-600 hover:border-rose-500 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold shadow cursor-pointer transition"
            >
              <X className="w-2.5 h-2.5 text-rose-400" />
              <span>Hide</span>
            </button>
          </div>

          {/* Flippable Companion SVG with Stationary Idle Animation */}
          <div
            style={{
              transform: direction === 'right' ? 'scaleX(-1)' : 'scaleX(1)'
            }}
            className="transition-transform duration-200"
          >
            <div
              className={
                !isWalking && !isDragging
                  ? avatarConfig.companion === 'codsworth' || avatarConfig.companion === 'eyebot'
                    ? 'vault-pet-idle vault-pet-idle-hover'
                    : 'vault-pet-idle vault-pet-idle-stance'
                  : ''
              }
            >
              <VaultAvatarSprite
                config={avatarConfig}
                isWinking={isWinking}
                className="w-16 h-20 sm:w-20 sm:h-24"
              />
            </div>
          </div>

          {/* Compact Name & Patrol Toggle Strip */}
          <div className="flex items-center space-x-1.5 mt-0.5 bg-[#080F20]/95 border border-amber-500/50 px-2.5 py-0.5 rounded-full text-[10px] text-amber-300 font-mono font-bold shadow-lg whitespace-nowrap">
            <BottleCapIcon className="w-3 h-3 text-amber-400 shrink-0" />
            <span className="truncate max-w-[54px]">{displayLabel}</span>
            <span className="text-stone-600">|</span>
            <button
              type="button"
              onClick={e => {
                e.stopPropagation();
                soundManager.playClick();
                const updated: VaultAvatarConfig = {
                  ...avatarConfig,
                  patrolEnabled: !avatarConfig.patrolEnabled
                };
                setAvatarConfig(updated);
                saveAvatarConfig(updated);
              }}
              title={avatarConfig.patrolEnabled ? 'Pause roaming' : 'Enable roaming'}
              className={`transition cursor-pointer ${
                avatarConfig.patrolEnabled ? 'text-emerald-400' : 'text-stone-500 hover:text-stone-300'
              }`}
            >
              <Compass className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={handleHidePet}
              title="Minimize to dock"
              className="text-stone-400 hover:text-rose-300 transition cursor-pointer"
            >
              <EyeOff className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const VaultAvatar = VaultDwellerPet;
export default VaultDwellerPet;
