import React, { useState, useEffect, useRef, useCallback } from 'react';
import { soundManager } from '../utils/audio';
import { getStreakData, getBottleCaps, addBottleCaps } from '../utils/storage';
import { BottleCapIcon } from './BottleCapIcon';
import {
  X,
  ChevronRight,
  Compass,
  EyeOff,
  Radio,
  Volume2
} from 'lucide-react';

interface VaultDwellerPetProps {
  userName?: string;
  onNavigateTab?: (tab: 'exam' | 'flashcards' | 'dictionary' | 'analytics' | 'achievements' | 'themes') => void;
}

// 25+ Authentic Vault-Tec x Civil Engineering Licensure Exam Dialogues
const PET_DIALOGUES = [
  {
    category: 'Vault Morale',
    text: "Vault Morale is at peak efficiency! Keep this study streak unbroken, or rations get cut to irradiated cram!",
    actionLabel: 'Check Morale',
    targetTab: 'analytics' as const
  },
  {
    category: 'PSAD (Structural)',
    text: "Overseer reports 0% deflection on the blast bulkhead! Remember: flexure $\\phi = 0.90$ for tension-controlled reinforced concrete!",
    actionLabel: 'Train PSAD',
    targetTab: 'exam' as const
  },
  {
    category: 'HPGE (Hydraulics)',
    text: "Vault 101 water purifiers run on Bernoulli's theorem: $P/\\gamma + v^2/2g + z = C$! Keep the flow steady, Engineer!",
    actionLabel: 'Review HPGE',
    targetTab: 'dictionary' as const
  },
  {
    category: 'MSTE (Surveying)',
    text: "Surveying protocol: Departure $= L \\sin(\\theta)$, Latitude $= L \\cos(\\theta)$! Don't misclose your traverse in the Wasteland!",
    actionLabel: 'Study Math & Survey',
    targetTab: 'flashcards' as const
  },
  {
    category: 'PSAD (Mechanics)',
    text: "Euler's Critical Buckling: $P_{cr} = \\pi^2 EI / (KL)^2$! That equation literally keeps our subterranean dome from caving in!",
    actionLabel: 'Open Formulas',
    targetTab: 'dictionary' as const
  },
  {
    category: 'HPGE (Geotech)',
    text: "Terzaghi's bearing capacity formula: $q_{ult} = c N_c + q N_q + 0.5 \\gamma B N_\\gamma$. Solid foundation, solid Dweller!",
    actionLabel: 'Drill Geotech',
    targetTab: 'flashcards' as const
  },
  {
    category: 'MSTE (Management)',
    text: "CPM / PERT directive: The critical path to passing the CE Licensure Exam has zero float! Don't delay your daily grind!",
    actionLabel: 'Take G.O.A.T. Exam',
    targetTab: 'exam' as const
  },
  {
    category: 'Vault-Tec Wisdom',
    text: "G.O.A.T. Question 10: Who is indisputably the most important person in Vault 101? The Registered Civil Engineer, obviously!",
    actionLabel: 'Launch G.O.A.T.',
    targetTab: 'exam' as const
  },
  {
    category: 'Wasteland Alert',
    text: "Rad-counter is ticking low (0.01 Rads), but your study stamina is glowing! Take a quick 5-minute coffee ration!",
    actionLabel: 'Dweller Stats',
    targetTab: 'analytics' as const
  },
  {
    category: 'Caps & Rewards',
    text: "Every flashcard you master earns +10 Bottle Caps! Trade them in your mind for that glorious PRC License card!",
    actionLabel: 'Review Flashcards',
    targetTab: 'flashcards' as const
  },
  {
    category: 'PSAD (Steel)',
    text: "AISC steel design reminder: Check for Lateral-Torsional Buckling ($L_b > L_r$) before placing girders over the reactor chamber!",
    actionLabel: 'Steel Archive',
    targetTab: 'dictionary' as const
  },
  {
    category: 'HPGE (Open Channel)',
    text: "Manning's equation: $Q = (1/n) A R^{2/3} S^{1/2}$! Even nuclear fallout runoff follows standard open channel hydraulics!",
    actionLabel: 'Hydraulics Deck',
    targetTab: 'flashcards' as const
  },
  {
    category: 'MSTE (Economy)',
    text: "Capitalized Cost $= FC + OM/i$! Vault-Tec amortizes our heavy tunnel borers over 200 years of post-apocalypse stability!",
    actionLabel: 'Econ Formulas',
    targetTab: 'dictionary' as const
  },
  {
    category: 'Vault-Tec Routine',
    text: "Concrete compressive strength $f'_c$ grows over 28 days. Your licensure mastery grows every single day you check in!",
    actionLabel: 'View Progress',
    targetTab: 'analytics' as const
  },
  {
    category: 'Overseer Notice',
    text: "Pip-Boy telemetry shows top-tier focus! Keep this up and the PRC Board will issue your engineer seal with honors!",
    actionLabel: 'Achievements',
    targetTab: 'achievements' as const
  }
];

export const VaultDwellerPet: React.FC<VaultDwellerPetProps> = ({
  userName = 'Dweller Dave',
  onNavigateTab
}) => {
  const [posX, setPosX] = useState<number>(85); // percentage of screen width (10 - 88)
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const [isWalking, setIsWalking] = useState<boolean>(false);
  const [isWinking, setIsWinking] = useState<boolean>(false);
  // The pet dialogue should ONLY show if the user clicks them (initially false)
  const [showBubble, setShowBubble] = useState<boolean>(false);
  const [dialogueIndex, setDialogueIndex] = useState<number>(0);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [patrolEnabled, setPatrolEnabled] = useState<boolean>(true);
  const [clickCount, setClickCount] = useState<number>(0);
  const [bonusCapsClaimed, setBonusCapsClaimed] = useState<boolean>(false);

  // 5-second auto-dismiss timer ref
  const autoDismissTimerRef = useRef<NodeJS.Timeout | null>(null);

  const streak = getStreakData();

  // Clear dismiss timer on unmount
  useEffect(() => {
    return () => {
      if (autoDismissTimerRef.current) {
        clearTimeout(autoDismissTimerRef.current);
      }
    };
  }, []);

  // Display dialogue with sound effect and start 5-second disappearance interval
  const triggerDialogue = useCallback((idx?: number) => {
    // 1. Play dialogue announcement sound effect using soundManager
    soundManager.playPetDialogue();

    if (idx !== undefined) {
      setDialogueIndex(idx);
    } else {
      setDialogueIndex(prev => (prev + 1) % PET_DIALOGUES.length);
    }

    setShowBubble(true);
    setIsWinking(true);
    setTimeout(() => setIsWinking(false), 900);

    // 4. Reset & start 5-second interval before dialogue disappears
    if (autoDismissTimerRef.current) {
      clearTimeout(autoDismissTimerRef.current);
    }
    autoDismissTimerRef.current = setTimeout(() => {
      setShowBubble(false);
    }, 5000);
  }, []);

  // Next dialogue triggered by user interaction
  const handleNextDialogue = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundManager.playClick();
    triggerDialogue();
  };

  // Periodic subtle patrol walk along the bottom of the viewport (no auto-dialogues!)
  useEffect(() => {
    if (!patrolEnabled || isMinimized) return;

    const walkInterval = setInterval(() => {
      // 50% chance to take a few steps
      if (Math.random() > 0.4) {
        setIsWalking(true);
        setPosX(current => {
          const moveDelta = (Math.random() * 12 + 6) * (Math.random() > 0.5 ? 1 : -1);
          let target = current + moveDelta;
          if (target < 12) {
            target = 18;
            setDirection('right');
          } else if (target > 86) {
            target = 80;
            setDirection('left');
          } else {
            setDirection(moveDelta > 0 ? 'right' : 'left');
          }
          return Math.round(target);
        });

        setTimeout(() => {
          setIsWalking(false);
        }, 1600);
      }
    }, 7000);

    return () => clearInterval(walkInterval);
  }, [patrolEnabled, isMinimized]);

  // Handle clicking the Vault Boy character: trigger sound effect, wink, and open dialogue
  const handlePetClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    // 1. Interactive sound effect when pet is clicked
    soundManager.playPetClick();

    setClickCount(prev => prev + 1);
    setIsWinking(true);
    setTimeout(() => setIsWinking(false), 1200);

    // Easter egg: every 5 clicks rewards +5 bonus caps!
    if (clickCount > 0 && clickCount % 5 === 0 && !bonusCapsClaimed) {
      addBottleCaps(5);
      soundManager.playCapsJingle();
      setBonusCapsClaimed(true);
      setTimeout(() => setBonusCapsClaimed(false), 6000);
    }

    // Trigger dialogue and 5s timer
    triggerDialogue();
  };

  // Hide pet function
  const handleHidePet = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    soundManager.playClick();
    if (autoDismissTimerRef.current) {
      clearTimeout(autoDismissTimerRef.current);
    }
    setShowBubble(false);
    setIsMinimized(true);
  };

  const currentDialogue = PET_DIALOGUES[dialogueIndex];

  // Minimized state dock badge: easy to click to show again
  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-40 select-none animate-in fade-in zoom-in-90 duration-300">
        <button
          onClick={() => {
            soundManager.playPetClick();
            setIsMinimized(false);
          }}
          title="Wake up and restore your Vault Avatar"
          className="group relative flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 px-3.5 py-2.5 rounded-2xl shadow-2xl border-2 border-stone-950 cursor-pointer transition active:scale-95 font-mono text-xs font-black"
        >
          {/* Mini Vault Boy head */}
          <div className="w-6 h-6 rounded-full bg-blue-600 border border-stone-950 flex items-center justify-center overflow-hidden shrink-0">
            <span className="text-xs">👷‍♂️</span>
          </div>
          <span>Show Vault Avatar</span>
          <span className="flex items-center space-x-0.5 bg-stone-950 text-amber-400 px-1.5 py-0.5 rounded-md text-[10px]">
            <BottleCapIcon className="w-3 h-3 text-amber-400" />
            <span>{streak.currentStreak}d</span>
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-stone-950 animate-ping absolute -top-1 -right-1" />
        </button>
      </div>
    );
  }

  return (
    <div
      className="fixed bottom-2 z-40 select-none pointer-events-none transition-all duration-1000 ease-out"
      style={{
        left: `${posX}%`,
        transform: 'translateX(-50%)'
      }}
    >
      <div className="relative pointer-events-auto flex flex-col items-center">
        
        {/* Dialogue Bubble: 100% Solid Background (Requirement 2 & 4) */}
        {showBubble && (
          <div
            onMouseEnter={() => {
              // Pause auto-dismiss when hovering over the bubble to read long formulas
              if (autoDismissTimerRef.current) clearTimeout(autoDismissTimerRef.current);
            }}
            onMouseLeave={() => {
              // Resume 5s timer on mouse leave
              if (autoDismissTimerRef.current) clearTimeout(autoDismissTimerRef.current);
              autoDismissTimerRef.current = setTimeout(() => setShowBubble(false), 5000);
            }}
            className="mb-2 w-72 sm:w-80 bg-[#080F20] text-stone-100 border-2 border-amber-500 rounded-2xl p-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.9)] relative font-mono text-xs animate-in fade-in slide-in-from-bottom-2 duration-200 z-50 select-text"
          >
            {/* Header row of speech bubble */}
            <div className="flex items-center justify-between border-b border-amber-500/40 pb-1.5 mb-2 bg-[#050B17] -mx-3.5 -mt-3.5 px-3.5 pt-2.5 rounded-t-2xl">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold text-[10px] text-amber-400 uppercase tracking-wider">
                  Vault-Tec // {currentDialogue.category}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                {/* 5s disappearance indicator bar */}
                <span className="text-[9px] text-amber-400/80 font-mono px-1 py-0.2 rounded bg-amber-500/10 border border-amber-500/30">
                  5s auto-hide
                </span>
                <button
                  onClick={(e) => {
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

            {/* Bubble dialogue text with high-contrast emerald text on solid dark background */}
            <p className="text-emerald-300 font-medium text-[11px] leading-relaxed mb-3">
              "{currentDialogue.text}"
            </p>

            {/* Footer action buttons */}
            <div className="flex items-center justify-between pt-2 border-t border-amber-500/30 text-[10px]">
              <div className="flex items-center space-x-1.5 text-stone-300 font-bold">
                <BottleCapIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>Morale: <strong className="text-amber-400 font-mono">{streak.currentStreak}d</strong></span>
              </div>

              <div className="flex items-center space-x-1.5">
                {currentDialogue.targetTab && onNavigateTab && (
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      onNavigateTab(currentDialogue.targetTab);
                    }}
                    className="px-2 py-0.5 rounded-md bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold transition flex items-center space-x-0.5 cursor-pointer"
                  >
                    <span>{currentDialogue.actionLabel}</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                )}
                <button
                  onClick={handleNextDialogue}
                  title="Next Vault Tip"
                  className="px-2 py-0.5 rounded-md bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-500/30 transition cursor-pointer font-bold"
                >
                  Next
                </button>
              </div>
            </div>

            {/* Solid speech bubble pointer beak (Outer Amber triangle + Inner Solid Dark triangle) */}
            <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[9px] border-t-amber-500" />
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[8px] border-t-[#080F20]" />
          </div>
        )}

        {/* Bonus Caps Float Text when earned */}
        {bonusCapsClaimed && (
          <div className="absolute -top-10 font-mono font-black text-xs text-amber-300 bg-stone-950 border border-amber-500 px-2 py-0.5 rounded-full shadow-lg animate-bounce flex items-center space-x-1 z-50">
            <BottleCapIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>+5 Caps Bonus!</span>
          </div>
        )}

        {/* Quick Click-to-Hide Button Badge */}
        <div className="flex items-center space-x-1.5 mb-1 opacity-80 hover:opacity-100 transition">
          <button
            onClick={handleHidePet}
            title="Click to hide Vault Avatar into bottom dock"
            className="flex items-center space-x-1 bg-stone-950/90 hover:bg-rose-950 text-stone-300 hover:text-rose-200 border border-stone-700 hover:border-rose-500 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold shadow-md cursor-pointer transition active:scale-95"
          >
            <X className="w-3 h-3 text-rose-400" />
            <span>Hide Avatar</span>
          </button>
        </div>

        {/* Vault Dweller Avatar Character */}
        <div
          onClick={handlePetClick}
          onDoubleClick={handleHidePet}
          title="Click to talk with your Vault Avatar! (Double click to hide)"
          className={`cursor-pointer group relative flex flex-col items-center transition-transform active:scale-95 ${
            isWalking ? 'animate-bounce' : ''
          }`}
          style={{
            transform: direction === 'right' ? 'scaleX(-1)' : 'scaleX(1)'
          }}
        >
          {/* High-fidelity Vector Vault Boy / Vault Dweller */}
          <svg
            viewBox="0 0 100 130"
            className="w-16 h-20 sm:w-20 sm:h-24 drop-shadow-[0_10px_10px_rgba(0,0,0,0.6)] transition-all hover:scale-105"
            aria-label="Vault Dweller Pet Avatar"
          >
            {/* Shadow under feet */}
            <ellipse cx="50" cy="122" rx="26" ry="6" fill="#000000" fillOpacity="0.45" />

            {/* Blue Vault 101 Jumpsuit Boots */}
            <path d="M 33 110 L 33 120 L 25 120 L 25 116 Z" fill="#2b2b2b" stroke="#000" strokeWidth="2" />
            <path d="M 53 110 L 53 120 L 61 120 L 61 116 Z" fill="#2b2b2b" stroke="#000" strokeWidth="2" />

            {/* Jumpsuit Legs (Vault Cobalt) */}
            <path d="M 34 82 L 32 112 L 44 112 L 46 86 Z" fill="#1e3a8a" stroke="#0f172a" strokeWidth="2.5" />
            <path d="M 52 82 L 50 112 L 62 112 L 60 86 Z" fill="#1e3a8a" stroke="#0f172a" strokeWidth="2.5" />

            {/* Jumpsuit Torso (Cobalt blue) */}
            <path
              d="M 30 52 L 24 84 L 70 84 L 64 52 Z"
              fill="#1d4ed8"
              stroke="#0f172a"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Vault 101 Yellow Piping / Collar / Zipper */}
            <path d="M 47 52 L 47 84" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
            <path d="M 34 52 Q 47 57 60 52" stroke="#facc15" strokeWidth="3.5" fill="none" />
            <rect x="34" y="80" width="26" height="5" fill="#facc15" rx="1.5" stroke="#0f172a" strokeWidth="1" />
            <rect x="44" y="79" width="6" height="7" fill="#e2e8f0" stroke="#0f172a" strokeWidth="1" />

            {/* '101' printed on suit collar */}
            <text x="47" y="73" fill="#fef08a" fontSize="6" fontWeight="900" fontFamily="monospace" textAnchor="middle">
              101
            </text>

            {/* Left Arm (Relaxed) */}
            <path
              d="M 64 54 Q 74 68 70 80"
              stroke="#1d4ed8"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            {/* Left Hand Glove */}
            <circle cx="70" cy="81" r="4.5" fill="#e2e8f0" stroke="#0f172a" strokeWidth="1.5" />

            {/* Right Arm (Classic Thumbs Up Pose!) */}
            <path
              d="M 30 54 Q 16 60 20 46"
              stroke="#1d4ed8"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            {/* Pip-Boy 3000 on Right Forearm */}
            <rect
              x="17"
              y="50"
              width="8"
              height="6"
              rx="1.5"
              fill="#22c55e"
              stroke="#15803d"
              strokeWidth="1.5"
            />

            {/* Thumbs-Up Hand Glove */}
            <g transform="translate(18, 38)">
              {/* Fist */}
              <circle cx="3" cy="7" r="4.5" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
              {/* Thumb pointing up */}
              <path
                d="M 2 6 L 2 1 Q 4 0 6 2 L 5 7 Z"
                fill="#f8fafc"
                stroke="#0f172a"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </g>

            {/* Neck */}
            <rect x="43" y="44" width="8" height="10" fill="#fed7aa" stroke="#0f172a" strokeWidth="1.5" />

            {/* Head / Face */}
            <circle cx="47" cy="34" r="16" fill="#fed7aa" stroke="#0f172a" strokeWidth="2.5" />

            {/* Rosy Cheeks */}
            <circle cx="37" cy="38" r="3" fill="#fca5a5" fillOpacity="0.6" />
            <circle cx="57" cy="38" r="3" fill="#fca5a5" fillOpacity="0.6" />

            {/* Cheerful Smile */}
            <path
              d="M 40 38 Q 47 46 54 38"
              stroke="#0f172a"
              strokeWidth="2"
              fill="#ffffff"
              strokeLinecap="round"
            />

            {/* Eyes (Winking or Wide Cheerful) */}
            {isWinking ? (
              <>
                {/* Left eye winking line */}
                <path d="M 37 31 Q 40 28 43 31" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                {/* Right eye open */}
                <ellipse cx="53" cy="30" rx="2.5" ry="3.5" fill="#0f172a" />
                <circle cx="52" cy="29" r="1" fill="#ffffff" />
              </>
            ) : (
              <>
                {/* Left eye */}
                <ellipse cx="40" cy="30" rx="2.5" ry="3.5" fill="#0f172a" />
                <circle cx="39" cy="29" r="1" fill="#ffffff" />
                {/* Right eye */}
                <ellipse cx="54" cy="30" rx="2.5" ry="3.5" fill="#0f172a" />
                <circle cx="53" cy="29" r="1" fill="#ffffff" />
              </>
            )}

            {/* Eyebrows */}
            <path d="M 37 25 Q 40 23 43 25" stroke="#854d0e" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path d="M 51 25 Q 54 23 57 25" stroke="#854d0e" strokeWidth="1.8" strokeLinecap="round" fill="none" />

            {/* Classic Fallout Vault Boy Blonde Swoop / Quiff Hair */}
            <path
              d="M 31 30 
                 C 29 18 36 12 47 12 
                 C 58 12 65 18 63 30 
                 C 64 26 62 22 58 20 
                 C 54 18 48 20 44 24 
                 C 40 21 34 22 31 30 Z"
              fill="#facc15"
              stroke="#0f172a"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            {/* Front Cowlick Quiff swirl */}
            <path
              d="M 44 21 Q 48 14 55 16 Q 59 18 56 22"
              fill="#facc15"
              stroke="#0f172a"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Civil Engineer Safety Hardhat / Delta Emblem Badge on chest */}
            <g transform="translate(52, 60)">
              <polygon points="0,8 5,0 10,8" fill="#f59e0b" stroke="#78350f" strokeWidth="0.8" />
              <line x1="2" y1="5" x2="8" y2="5" stroke="#78350f" strokeWidth="0.6" />
            </g>
          </svg>

          {/* Quick Pet Interaction Toolstrip */}
          <div
            className="flex items-center space-x-1.5 mt-1 bg-stone-950/90 border border-amber-500/50 px-2.5 py-0.5 rounded-full text-[10px] text-amber-300 font-mono font-bold shadow-lg"
            style={{
              transform: direction === 'right' ? 'scaleX(-1)' : 'scaleX(1)'
            }}
          >
            <BottleCapIcon className="w-3 h-3 text-amber-400" />
            <span>{userName.split(' ')[0]}</span>
            <span className="text-stone-500">|</span>
            <button
              onClick={handleHidePet}
              title="Click to hide pet"
              className="text-stone-400 hover:text-rose-300 transition cursor-pointer flex items-center space-x-0.5"
            >
              <EyeOff className="w-3 h-3" />
              <span>Hide</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setPatrolEnabled(p => !p);
              }}
              title={patrolEnabled ? "Disable wandering patrol" : "Enable wandering patrol"}
              className={`transition cursor-pointer ${patrolEnabled ? 'text-emerald-400' : 'text-stone-500'}`}
            >
              <Compass className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export const VaultAvatar = VaultDwellerPet;
export default VaultDwellerPet;
