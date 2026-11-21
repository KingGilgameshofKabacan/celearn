import React, { useState, useEffect } from 'react';
import {
  CEFormula,
  FormulaDomain,
  FlashcardItemProgress,
  FlashcardMasteryStatus
} from '../types';
import {
  Star,
  RotateCw,
  Lightbulb,
  CheckCircle2,
  RotateCcw,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Droplets,
  Mountain,
  Compass,
  Building2,
  Network,
  Activity,
  Wrench,
  Radio,
  Triangle,
  Sigma,
  BarChart3,
  Map as MapIcon,
  Route,
  TrendingUp,
  Infinity as InfinityIcon,
  Atom
} from 'lucide-react';
import { KatexEquation } from './KatexEquation';
import { BottleCapIcon } from './BottleCapIcon';
import { soundManager } from '../utils/audio';

interface FalloutFormulaFlashcardProps {
  formula: CEFormula;
  isFlipped: boolean;
  onFlip: () => void;
  progress?: FlashcardItemProgress;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onRateMastery: (status: FlashcardMasteryStatus) => void;
  onZoomDiagram?: (src: string, caption: string, alt: string) => void;
  cardIndex: number;
  totalCards: number;
  onPrev?: () => void;
  onNext?: () => void;
  themeMode: 'dark' | 'light';
}

function getDomainMeta(domain: FormulaDomain): {
  short: string;
  darkBadge: string;
  lightBadge: string;
  stroke: string;
  icon: React.ReactNode;
} {
  switch (domain) {
    case 'Hydraulics & Fluid Mechanics':
      return {
        short: 'Hydraulics',
        darkBadge: 'bg-sky-950/80 text-sky-300 border-sky-500/40',
        lightBadge: 'bg-sky-100 text-sky-800 border-sky-400',
        stroke: '#38bdf8',
        icon: <Droplets className="w-5 h-5" />
      };
    case 'Geotechnical Engineering':
      return {
        short: 'Geotech',
        darkBadge: 'bg-amber-950/80 text-amber-300 border-amber-500/40',
        lightBadge: 'bg-amber-100 text-amber-900 border-amber-500/60',
        stroke: '#fbbf24',
        icon: <Mountain className="w-5 h-5" />
      };
    case 'Engineering Mechanics':
      return {
        short: 'Mechanics',
        darkBadge: 'bg-indigo-950/80 text-indigo-300 border-indigo-500/40',
        lightBadge: 'bg-indigo-100 text-indigo-900 border-indigo-400',
        stroke: '#818cf8',
        icon: <Compass className="w-5 h-5" />
      };
    case 'Reinforced Concrete Design':
      return {
        short: 'RCD',
        darkBadge: 'bg-orange-950/80 text-orange-300 border-orange-500/40',
        lightBadge: 'bg-orange-100 text-orange-900 border-orange-400',
        stroke: '#fb923c',
        icon: <Building2 className="w-5 h-5" />
      };
    case 'Theory of Structures':
      return {
        short: 'Structures',
        darkBadge: 'bg-teal-950/80 text-teal-300 border-teal-500/40',
        lightBadge: 'bg-teal-100 text-teal-900 border-teal-400',
        stroke: '#2dd4bf',
        icon: <Network className="w-5 h-5" />
      };
    case 'Strength of Materials':
      return {
        short: 'StreMa',
        darkBadge: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
        lightBadge: 'bg-emerald-100 text-emerald-900 border-emerald-400',
        stroke: '#4ade80',
        icon: <Activity className="w-5 h-5" />
      };
    case 'Steel & Prestressed Concrete':
      return {
        short: 'Steel / PSC',
        darkBadge: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40',
        lightBadge: 'bg-cyan-100 text-cyan-900 border-cyan-400',
        stroke: '#22d3ee',
        icon: <Wrench className="w-5 h-5" />
      };
    case 'Earthquake Engineering':
      return {
        short: 'Earthquake',
        darkBadge: 'bg-rose-950/80 text-rose-300 border-rose-500/40',
        lightBadge: 'bg-rose-100 text-rose-900 border-rose-400',
        stroke: '#fb7185',
        icon: <Radio className="w-5 h-5" />
      };
    case 'Trigonometry & Geometry':
      return {
        short: 'Trig & Geom',
        darkBadge: 'bg-violet-950/80 text-violet-300 border-violet-500/40',
        lightBadge: 'bg-violet-100 text-violet-900 border-violet-400',
        stroke: '#c084fc',
        icon: <Triangle className="w-5 h-5" />
      };
    case 'Analytic Geometry & Algebra':
      return {
        short: 'Analytic / Alg',
        darkBadge: 'bg-purple-950/80 text-purple-300 border-purple-500/40',
        lightBadge: 'bg-purple-100 text-purple-900 border-purple-400',
        stroke: '#a78bfa',
        icon: <Sigma className="w-5 h-5" />
      };
    case 'Probability & Statistics':
      return {
        short: 'Prob & Stat',
        darkBadge: 'bg-fuchsia-950/80 text-fuchsia-300 border-fuchsia-500/40',
        lightBadge: 'bg-fuchsia-100 text-fuchsia-900 border-fuchsia-400',
        stroke: '#e879f9',
        icon: <BarChart3 className="w-5 h-5" />
      };
    case 'Surveying & Earthworks':
      return {
        short: 'Surveying',
        darkBadge: 'bg-teal-950/80 text-teal-300 border-teal-500/40',
        lightBadge: 'bg-teal-100 text-teal-900 border-teal-400',
        stroke: '#2dd4bf',
        icon: <MapIcon className="w-5 h-5" />
      };
    case 'Highway, Transpo & Ports':
      return {
        short: 'Transpo / Hwy',
        darkBadge: 'bg-amber-950/80 text-amber-300 border-amber-500/40',
        lightBadge: 'bg-amber-100 text-amber-900 border-amber-500/60',
        stroke: '#fb923c',
        icon: <Route className="w-5 h-5" />
      };
    case 'Engineering Economy':
      return {
        short: 'Eng Economy',
        darkBadge: 'bg-yellow-950/80 text-yellow-300 border-yellow-500/40',
        lightBadge: 'bg-yellow-100 text-yellow-900 border-yellow-500/60',
        stroke: '#facc15',
        icon: <TrendingUp className="w-5 h-5" />
      };
    case 'Calculus, DE & Vector Analysis':
      return {
        short: 'Calc & DE',
        darkBadge: 'bg-sky-950/80 text-sky-300 border-sky-500/40',
        lightBadge: 'bg-sky-100 text-sky-900 border-sky-400',
        stroke: '#38bdf8',
        icon: <InfinityIcon className="w-5 h-5" />
      };
    case 'Construction & Engineering Physics':
      return {
        short: 'Const & Physics',
        darkBadge: 'bg-pink-950/80 text-pink-300 border-pink-500/40',
        lightBadge: 'bg-pink-100 text-pink-900 border-pink-400',
        stroke: '#f472b6',
        icon: <Atom className="w-5 h-5" />
      };
  }
}

export const FalloutFormulaFlashcard: React.FC<FalloutFormulaFlashcardProps> = ({
  formula,
  isFlipped,
  onFlip,
  progress,
  isBookmarked,
  onToggleBookmark,
  onRateMastery,
  onZoomDiagram,
  cardIndex,
  totalCards,
  onPrev,
  onNext,
  themeMode
}) => {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setShowHint(false);
  }, [formula.id]);

  const status = progress?.status || 'unstudied';
  const domainMeta = getDomainMeta(formula.domain);
  const isHydraulics = formula.domain === 'Hydraulics & Fluid Mechanics';
  const isPSAD = formula.area === 'PSAD';
  const isMSTE = formula.area === 'MSTE';
  const hasDiagrams = Boolean(formula.diagrams && formula.diagrams.length > 0);
  const isDark = themeMode === 'dark';

  const cardSurfaceStyle: React.CSSProperties = isDark
    ? {
        background: 'linear-gradient(160deg, #091811 0%, #06100b 55%, #0a1924 100%)',
        borderColor: 'rgba(74, 222, 128, 0.42)',
        color: '#ecfdf5',
        boxShadow: '0 18px 42px -16px rgba(16, 185, 129, 0.35), inset 0 0 28px rgba(16, 185, 129, 0.08)'
      }
    : {
        background: 'linear-gradient(160deg, #fffdf4 0%, #f7f0d8 60%, #edf4ee 100%)',
        borderColor: '#b45309',
        color: '#1c1917',
        boxShadow: '0 16px 36px -16px rgba(120, 53, 15, 0.25), inset 0 0 24px rgba(245, 158, 11, 0.08)'
      };

  const equationBoxStyle: React.CSSProperties = isDark
    ? {
        backgroundColor: '#040e09',
        borderColor: 'rgba(74, 222, 128, 0.45)',
        color: '#4ade80'
      }
    : {
        backgroundColor: '#0b2218',
        borderColor: '#166534',
        color: '#86efac'
      };

  return (
    <div className="space-y-4 w-full">
      <div className="perspective-stage w-full">
        <div className={`card-3d-flipper card-3d-grid ${isFlipped ? 'is-flipped' : ''}`}>
          {/* =============================================================== */}
          {/* FRONT FACE: VAULT-TEC / PIP-BOY RECALL CARTRIDGE                */}
          {/* =============================================================== */}
          <div
            data-keep-color
            style={cardSurfaceStyle}
            className="card-3d-face card-3d-front border-2 rounded-3xl overflow-hidden flex flex-col justify-between relative"
          >
            {/* Hazard Chevron Header Bar */}
            <div>
              <div className="h-2.5 w-full vault-tec-hazard-stripe" />

              {/* Cartridge Top Metadata Strip */}
              <div
                data-keep-color
                className={`px-4 sm:px-6 py-3 border-b flex flex-wrap items-center justify-between gap-2 ${
                  isDark
                    ? 'bg-[#071f14]/85 border-emerald-500/30'
                    : 'bg-amber-900/10 border-amber-700/25'
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    data-keep-color
                    className={`px-2 py-0.5 rounded font-mono text-[10px] font-black uppercase tracking-widest shadow-xs ${
                      isPSAD
                        ? 'bg-orange-500 text-stone-950'
                        : isMSTE
                        ? 'bg-violet-500 text-white'
                        : 'bg-amber-400 text-stone-950'
                    }`}
                  >
                    {formula.area}
                  </span>
                  <span
                    data-keep-color
                    className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider border ${
                      isDark ? domainMeta.darkBadge : domainMeta.lightBadge
                    }`}
                  >
                    {domainMeta.short}
                  </span>
                  <span
                    data-keep-color
                    className={`text-[11px] font-mono font-bold ${
                      isDark ? 'text-emerald-300/90' : 'text-stone-700'
                    }`}
                  >
                    {formula.topic}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    data-keep-color
                    className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-extrabold uppercase border ${
                      status === 'mastered'
                        ? 'bg-emerald-500/20 text-emerald-400 border-emerald-400/50'
                        : status === 'learning'
                        ? 'bg-amber-500/20 text-amber-400 border-amber-400/50'
                        : isDark
                        ? 'bg-stone-800/80 text-stone-300 border-stone-600'
                        : 'bg-stone-200 text-stone-700 border-stone-400'
                    }`}
                  >
                    {status === 'mastered'
                      ? '✓ Mastered'
                      : status === 'learning'
                      ? 'Reviewing'
                      : 'Unstudied'}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      soundManager.playClick();
                      onToggleBookmark();
                    }}
                    data-keep-color
                    className={`px-2.5 py-1 rounded-xl border text-[11px] font-mono font-bold flex items-center space-x-1 transition cursor-pointer ${
                      isBookmarked
                        ? 'bg-amber-400 text-stone-950 border-amber-300 shadow-xs'
                        : isDark
                        ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30 hover:border-amber-400'
                        : 'bg-white text-stone-700 border-stone-300 hover:border-amber-600'
                    }`}
                    title={isBookmarked ? 'Unstar / remove pin' : 'Star & pin formula for quick retrieval'}
                    aria-label={isBookmarked ? 'Unpin starred formula' : 'Star and pin formula'}
                  >
                    <Star className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                    <span>{isBookmarked ? 'Pinned' : 'Star'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Body Stage */}
            <div className="p-5 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                {/* RobCo Header & Formula Title */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div
                      data-keep-color
                      className={`text-[10px] font-mono uppercase tracking-[0.2em] font-bold ${
                        isDark ? 'text-amber-400' : 'text-amber-800'
                      }`}
                    >
                      ROBCO INDUSTRIES // {formula.area} ARCHIVE #{cardIndex + 1} OF {totalCards}
                    </div>
                    <h3
                      data-keep-color
                      className={`text-lg sm:text-2xl font-black font-mono tracking-tight mt-1 leading-snug ${
                        isDark ? 'text-emerald-200' : 'text-stone-900'
                      }`}
                    >
                      {formula.title}
                    </h3>
                  </div>
                  <span
                    data-keep-color
                    className={`shrink-0 px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                      formula.difficulty === 'Hard'
                        ? 'bg-rose-500/15 text-rose-400 border-rose-500/40'
                        : formula.difficulty === 'Medium'
                        ? 'bg-amber-500/15 text-amber-400 border-amber-500/40'
                        : 'bg-emerald-500/15 text-emerald-400 border-emerald-500/40'
                    }`}
                  >
                    {formula.difficulty}
                  </span>
                </div>

                {/* Custom Fallout Visual Frame OR Cropped Diagram */}
                {hasDiagrams ? (
                  <div className={`grid gap-3 ${formula.diagrams!.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                    {formula.diagrams!.slice(0, 2).map((diag, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onZoomDiagram?.(diag.src, diag.caption, diag.alt);
                        }}
                        data-keep-color
                        className="group relative bg-white border-2 border-amber-500/50 rounded-2xl p-2.5 flex flex-col items-center justify-center overflow-hidden hover:border-amber-400 transition cursor-zoom-in shadow-sm"
                        title="Click to zoom diagram"
                      >
                        <img
                          src={diag.src}
                          alt={diag.alt}
                          className="max-h-40 w-auto max-w-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                        <span
                          data-keep-color
                          className="mt-1.5 text-[10px] font-mono text-stone-600 line-clamp-1 text-center"
                        >
                          {diag.caption}
                        </span>
                        <span
                          data-keep-color
                          className="absolute top-2 right-2 p-1 rounded-lg bg-stone-900/80 text-white opacity-80 group-hover:opacity-100 transition"
                        >
                          <ZoomIn className="w-3.5 h-3.5" />
                        </span>
                      </button>
                    ))}
                  </div>
                ) : (
                  /* Custom Bespoke Fallout Pip-Boy Blueprint Header for Text-Only Formulas */
                  <div
                    data-keep-color
                    className={`rounded-2xl border p-3.5 sm:p-4 relative overflow-hidden ${
                      isDark
                        ? 'bg-[#04120b] border-emerald-500/35'
                        : 'bg-[#0c2419] border-emerald-700'
                    }`}
                  >
                    <div
                      className="flex items-center justify-between gap-4"
                      aria-hidden="true"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300 shrink-0">
                          {domainMeta.icon}
                        </div>
                        <div>
                          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-300">
                            PIP-BOY 3000 // {formula.area} TEXT CARTRIDGE
                          </div>
                          <div className="text-xs font-mono text-emerald-300/90">
                            Subtopic: {formula.examSubtopic}
                          </div>
                        </div>
                      </div>

                      {/* Custom Technical Vector Crest */}
                      <svg
                        viewBox="0 0 120 42"
                        className="w-24 sm:w-28 h-9 shrink-0 opacity-85"
                      >
                        <rect
                          x="1"
                          y="1"
                          width="118"
                          height="40"
                          rx="6"
                          fill="none"
                          stroke="#4ade80"
                          strokeOpacity="0.35"
                          strokeWidth="1"
                          strokeDasharray="3 2"
                        />
                        {isHydraulics ? (
                          <path
                            d="M8 26 Q 22 12, 36 24 T 64 22 T 92 24 T 112 18"
                            fill="none"
                            stroke="#38bdf8"
                            strokeWidth="2"
                          />
                        ) : isPSAD ? (
                          <>
                            {/* Truss / deflected beam + seismic wave emblem */}
                            <polyline
                              points="10,32 32,12 54,32 76,12 98,32"
                              fill="none"
                              stroke={domainMeta.stroke}
                              strokeWidth="1.8"
                            />
                            <line
                              x1="10"
                              y1="32"
                              x2="98"
                              y2="32"
                              stroke="#4ade80"
                              strokeWidth="1.4"
                            />
                            <line
                              x1="32"
                              y1="12"
                              x2="76"
                              y2="12"
                              stroke="#fbbf24"
                              strokeWidth="1.4"
                            />
                            <circle cx="108" cy="21" r="5" fill="none" stroke="#4ade80" strokeWidth="1.5" />
                          </>
                        ) : isMSTE ? (
                          <>
                            {/* Coordinate axes + integral / conic curve + tangent vector */}
                            <line x1="12" y1="33" x2="108" y2="33" stroke="#4ade80" strokeOpacity="0.65" strokeWidth="1.2" />
                            <line x1="20" y1="7" x2="20" y2="37" stroke="#4ade80" strokeOpacity="0.65" strokeWidth="1.2" />
                            <path
                              d="M22 31 C 38 10, 56 10, 72 23 S 98 14, 108 11"
                              fill="none"
                              stroke={domainMeta.stroke}
                              strokeWidth="2"
                            />
                            <circle cx="56" cy="17" r="3.2" fill="#fbbf24" />
                          </>
                        ) : (
                          <>
                            <polygon
                              points="12,34 44,12 76,34"
                              fill="none"
                              stroke="#fbbf24"
                              strokeWidth="1.8"
                            />
                            <circle
                              cx="88"
                              cy="21"
                              r="11"
                              fill="none"
                              stroke="#4ade80"
                              strokeWidth="1.8"
                            />
                            <line
                              x1="74"
                              y1="32"
                              x2="112"
                              y2="32"
                              stroke="#4ade80"
                              strokeWidth="1.2"
                            />
                          </>
                        )}
                      </svg>
                    </div>
                  </div>
                )}

                {/* Flashcard Recall Prompt */}
                <div
                  data-keep-color
                  className={`p-4 sm:p-5 rounded-2xl border ${
                    isDark
                      ? 'bg-[#0b2317]/80 border-emerald-500/30'
                      : 'bg-white/85 border-amber-700/30'
                  }`}
                >
                  <div
                    data-keep-color
                    className={`text-[10px] font-mono font-black uppercase tracking-widest mb-1.5 ${
                      isDark ? 'text-amber-400' : 'text-amber-700'
                    }`}
                  >
                    Recall Prompt
                  </div>
                  <p
                    data-keep-color
                    className={`text-base sm:text-lg font-bold leading-relaxed ${
                      isDark ? 'text-emerald-50' : 'text-stone-900'
                    }`}
                  >
                    {formula.flashcardPrompt}
                  </p>
                </div>

                {/* Optional Hint Toggle */}
                {formula.flashcardHint && (
                  <div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        soundManager.playClick();
                        setShowHint(prev => !prev);
                      }}
                      data-keep-color
                      className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center space-x-1.5 transition cursor-pointer ${
                        isDark
                          ? 'bg-amber-500/10 border-amber-500/35 text-amber-300 hover:bg-amber-500/20'
                          : 'bg-amber-100 border-amber-400 text-amber-900 hover:bg-amber-200'
                      }`}
                    >
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>{showHint ? 'Hide Overseer Hint' : 'Reveal Overseer Hint'}</span>
                    </button>
                    {showHint && (
                      <div
                        data-keep-color
                        className={`mt-2 p-3 rounded-xl border text-xs font-mono ${
                          isDark
                            ? 'bg-amber-950/40 border-amber-500/30 text-amber-200'
                            : 'bg-amber-50 border-amber-300 text-amber-950'
                        }`}
                      >
                        HINT: {formula.flashcardHint}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Flip Trigger */}
              <button
                type="button"
                onClick={() => {
                  soundManager.playCardFlip();
                  onFlip();
                }}
                data-keep-color
                className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-stone-950 font-mono font-black text-xs sm:text-sm uppercase tracking-wider shadow-md transition flex items-center justify-center space-x-2.5 cursor-pointer active:scale-[0.99]"
              >
                <RotateCw className="w-4 h-4" />
                <span>Flip Cartridge & Reveal Formula [Space]</span>
              </button>
            </div>
          </div>

          {/* =============================================================== */}
          {/* BACK FACE: DECODED EQUATIONS, VARIABLES, TABLES & MASTERY       */}
          {/* =============================================================== */}
          <div
            data-keep-color
            style={cardSurfaceStyle}
            className="card-3d-face card-3d-back border-2 rounded-3xl overflow-hidden flex flex-col justify-between relative"
          >
            <div>
              <div className="h-2.5 w-full vault-tec-hazard-stripe" />

              {/* Back Header */}
              <div
                data-keep-color
                className={`px-4 sm:px-6 py-3 border-b flex flex-wrap items-center justify-between gap-2 ${
                  isDark
                    ? 'bg-[#071f14]/85 border-emerald-500/30'
                    : 'bg-amber-900/10 border-amber-700/25'
                }`}
              >
                <div className="flex items-center space-x-2 min-w-0">
                  <span
                    data-keep-color
                    className="px-2 py-0.5 rounded font-mono text-[10px] font-black uppercase bg-emerald-500 text-stone-950 shrink-0"
                  >
                    DECODED FORMULA
                  </span>
                  <span
                    data-keep-color
                    className={`text-xs font-mono font-bold truncate ${
                      isDark ? 'text-amber-300' : 'text-stone-800'
                    }`}
                  >
                    {formula.title}
                  </span>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      soundManager.playClick();
                      onToggleBookmark();
                    }}
                    data-keep-color
                    className={`px-2.5 py-1 rounded-xl border text-xs font-mono font-bold flex items-center space-x-1 transition cursor-pointer ${
                      isBookmarked
                        ? 'bg-amber-400 text-stone-950 border-amber-300'
                        : isDark
                        ? 'bg-emerald-950/70 border-emerald-500/40 text-emerald-300 hover:border-amber-400'
                        : 'bg-white border-amber-700/40 text-stone-800 hover:bg-amber-50'
                    }`}
                    title={isBookmarked ? 'Unpin starred formula' : 'Star & pin formula'}
                  >
                    <Star className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                    <span>{isBookmarked ? 'Pinned' : 'Star'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playCardFlip();
                      onFlip();
                    }}
                    data-keep-color
                    className={`px-2.5 py-1 rounded-xl border text-xs font-mono font-bold flex items-center space-x-1 transition cursor-pointer ${
                      isDark
                        ? 'bg-emerald-950/70 border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/70'
                        : 'bg-white border-amber-700/40 text-stone-800 hover:bg-amber-50'
                    }`}
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Flip Front</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 space-y-4 flex-1 overflow-y-auto max-h-[70dvh]">
              {/* Primary Governing Equation in Pip-Boy CRT Chamber */}
              <div
                data-keep-color
                style={equationBoxStyle}
                className="p-4 sm:p-5 rounded-2xl border-2 shadow-inner overflow-x-auto"
              >
                <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 mb-2">
                  Primary Governing Equation
                </div>
                <KatexEquation latex={formula.latex} className="text-base sm:text-xl" />
              </div>

              {/* Secondary / Companion Equations */}
              {formula.secondaryEquations && formula.secondaryEquations.length > 0 && (
                <div className="grid grid-cols-1 gap-2.5">
                  {formula.secondaryEquations.map((eq, idx) => (
                    <div
                      key={idx}
                      data-keep-color
                      className={`p-3 rounded-xl border overflow-x-auto ${
                        isDark
                          ? 'bg-[#071911] border-emerald-500/25 text-emerald-200'
                          : 'bg-white/90 border-amber-700/25 text-stone-900'
                      }`}
                    >
                      <div
                        data-keep-color
                        className={`text-[11px] font-mono font-bold mb-1 ${
                          isDark ? 'text-amber-300' : 'text-amber-800'
                        }`}
                      >
                        {eq.label}
                        {eq.condition ? ` (${eq.condition})` : ''}
                      </div>
                      <KatexEquation latex={eq.latex} className="text-sm sm:text-base" />
                    </div>
                  ))}
                </div>
              )}

              {/* Variable Legend */}
              {formula.variables && formula.variables.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {formula.variables.map((v, i) => (
                    <div
                      key={i}
                      data-keep-color
                      className={`px-3 py-2 rounded-xl border text-xs ${
                        isDark
                          ? 'bg-emerald-950/40 border-emerald-500/25 text-emerald-100'
                          : 'bg-white/80 border-stone-300 text-stone-800'
                      }`}
                    >
                      <span
                        data-keep-color
                        className={`font-mono font-black mr-1.5 ${
                          isDark ? 'text-amber-400' : 'text-amber-800'
                        }`}
                      >
                        {v.symbol}:
                      </span>
                      <span>{v.meaning}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Reference Tables */}
              {formula.tables && formula.tables.length > 0 && (
                <div className="space-y-2.5">
                  {formula.tables.map((tbl, tIdx) => (
                    <div
                      key={tIdx}
                      data-keep-color
                      className={`rounded-xl border overflow-hidden text-xs ${
                        isDark
                          ? 'bg-[#071911] border-emerald-500/30 text-emerald-100'
                          : 'bg-white border-amber-700/30 text-stone-900'
                      }`}
                    >
                      <div
                        data-keep-color
                        className={`px-3 py-1.5 font-mono font-bold text-[11px] border-b ${
                          isDark
                            ? 'bg-emerald-950/80 border-emerald-500/30 text-amber-300'
                            : 'bg-amber-100 border-amber-300 text-amber-950'
                        }`}
                      >
                        {tbl.title}
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr
                              className={
                                isDark ? 'bg-emerald-900/25 text-emerald-300' : 'bg-stone-100 text-stone-700'
                              }
                            >
                              {tbl.headers.map((h, hi) => (
                                <th key={hi} className="px-3 py-1.5 font-mono font-bold text-[11px]">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {tbl.rows.map((row, ri) => (
                              <tr
                                key={ri}
                                className={
                                  isDark
                                    ? 'border-t border-emerald-500/15'
                                    : 'border-t border-stone-200'
                                }
                              >
                                {row.map((cell, ci) => (
                                  <td key={ci} className="px-3 py-1.5 font-mono text-[11px]">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Notes & Errata Alerts */}
              {formula.notes && formula.notes.length > 0 && (
                <div
                  data-keep-color
                  className={`p-3 rounded-xl border text-xs space-y-1 ${
                    isDark
                      ? 'bg-amber-950/35 border-amber-500/35 text-amber-200'
                      : 'bg-amber-50 border-amber-400 text-amber-950'
                  }`}
                >
                  {formula.notes.map((n, ni) => (
                    <div key={ni} className="flex items-start space-x-2">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{n}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Rating Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    onRateMastery('learning');
                  }}
                  data-keep-color
                  className={`py-3 px-4 rounded-2xl border font-mono font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition cursor-pointer active:scale-95 ${
                    isDark
                      ? 'bg-amber-950/60 border-amber-400/50 text-amber-300 hover:bg-amber-900/60'
                      : 'bg-amber-100 border-amber-500 text-amber-900 hover:bg-amber-200'
                  }`}
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Needs Review</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    soundManager.playCompleteTask();
                    onRateMastery('mastered');
                  }}
                  data-keep-color
                  className="py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-black text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-sm transition cursor-pointer active:scale-95"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Mastered</span>
                  <span className="inline-flex items-center space-x-0.5 px-1.5 py-0.5 rounded bg-black/25 text-amber-300 text-[10px]">
                    <BottleCapIcon className="w-3 h-3 text-amber-300" />
                    <span>+10</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Deck Navigation */}
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onPrev}
          disabled={!onPrev}
          className="px-4 py-2.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500 disabled:opacity-40 text-xs font-mono font-bold text-stone-700 dark:text-stone-200 flex items-center space-x-1.5 transition cursor-pointer disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Prev [←]</span>
        </button>

        <span className="text-xs font-mono font-bold text-stone-500 dark:text-stone-400">
          Card {cardIndex + 1} / {totalCards}
        </span>

        <button
          type="button"
          onClick={onNext}
          disabled={!onNext}
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-stone-950 text-xs font-mono font-black flex items-center space-x-1.5 transition shadow-xs cursor-pointer disabled:cursor-not-allowed"
          data-keep-color
        >
          <span>Next [→]</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
