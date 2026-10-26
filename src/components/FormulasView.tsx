import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import {
  CEArea,
  CEFormula
} from '../types';
import { CE_FORMULAS_MASTER } from '../data/formulas';
import { SUBTOPICS_BY_AREA, AREA_FULL_NAMES, AREA_DESCRIPTIONS } from '../data/questions';
import { KatexEquation } from './KatexEquation';
import {
  Sigma,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Bookmark,
  Volume2,
  VolumeX,
  RotateCw,
  Copy,
  Check,
  Search,
  Filter,
  Lightbulb,
  BookOpen,
  ArrowRight,
  Sparkles,
  Maximize2,
  CheckCircle2,
  Table,
  Layers,
  HelpCircle,
  Eye,
  Info,
  Building2,
  Waves,
  Compass
} from 'lucide-react';
import { soundManager } from '../utils/audio';
import {
  getFormulaBookmarks,
  toggleFormulaBookmark
} from '../utils/storage';

interface FormulasViewProps {
  onNavigateHome?: () => void;
}

export const AREA_TABS = [
  {
    id: 'ALL' as const,
    label: 'All Formulas',
    shortLabel: 'All',
    fullName: 'Complete Civil Engineering Formula Bank',
    description: 'All 24 board exam governing formulas across Structural, Hydraulics, Geotechnical, Math, Surveying, and Transportation.',
    icon: Layers,
    badgeBg: 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
  },
  {
    id: 'PSAD' as const,
    label: 'PSAD',
    shortLabel: 'PSAD',
    fullName: AREA_FULL_NAMES.PSAD,
    description: AREA_DESCRIPTIONS.PSAD,
    icon: Building2,
    badgeBg: 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
  },
  {
    id: 'HPGE' as const,
    label: 'HPGE',
    shortLabel: 'HPGE',
    fullName: AREA_FULL_NAMES.HPGE,
    description: AREA_DESCRIPTIONS.HPGE,
    icon: Waves,
    badgeBg: 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-300 dark:border-blue-800'
  },
  {
    id: 'MSTE' as const,
    label: 'MSTE',
    shortLabel: 'MSTE',
    fullName: AREA_FULL_NAMES.MSTE,
    description: AREA_DESCRIPTIONS.MSTE,
    icon: Compass,
    badgeBg: 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
  }
];

export const FormulasView: React.FC<FormulasViewProps> = ({
  onNavigateHome
}) => {
  // Area tab selection: 'ALL' | 'PSAD' | 'HPGE' | 'MSTE'
  const [selectedArea, setSelectedArea] = useState<'ALL' | CEArea>('ALL');
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyBookmarked, setOnlyBookmarked] = useState<boolean>(false);

  // Accessible tab navigation ref
  const tabListRef = useRef<HTMLDivElement>(null);

  // Bookmarks
  const [bookmarks, setBookmarks] = useState<string[]>(getFormulaBookmarks);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Quizlet Card state
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isShuffled, setIsShuffled] = useState<boolean>(false);
  const [shuffleSeed, setShuffleSeed] = useState<number>(0);

  // Expanded details in the set list
  const [expandedFormulaId, setExpandedFormulaId] = useState<string | null>(null);

  // Available subtopics based on selected area
  const availableSubtopics = useMemo(() => {
    if (selectedArea === 'ALL') {
      return Array.from(new Set(CE_FORMULAS_MASTER.map(f => f.subtopic)));
    }
    return Array.from(new Set(CE_FORMULAS_MASTER.filter(f => f.area === selectedArea).map(f => f.subtopic)));
  }, [selectedArea]);

  // When area changes, validate subtopic
  useEffect(() => {
    if (selectedArea !== 'ALL' && selectedSubtopic !== 'ALL') {
      const existsInArea = CE_FORMULAS_MASTER.some(f => f.area === selectedArea && f.subtopic === selectedSubtopic);
      if (!existsInArea) {
        setSelectedSubtopic('ALL');
      }
    }
  }, [selectedArea, selectedSubtopic]);

  // Filtered pool of formulas
  const filteredFormulas = useMemo(() => {
    let list = CE_FORMULAS_MASTER.filter(f => {
      if (selectedArea !== 'ALL' && f.area !== selectedArea) return false;
      if (selectedSubtopic !== 'ALL' && f.subtopic !== selectedSubtopic) return false;
      if (onlyBookmarked && !bookmarks.includes(f.id)) return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inName = f.name.toLowerCase().includes(query);
        const inFormula = f.formula.toLowerCase().includes(query);
        const inDesc = f.description.toLowerCase().includes(query);
        const inVars = f.variables.some(v => v.name.toLowerCase().includes(query) || v.symbol.toLowerCase().includes(query));
        if (!inName && !inFormula && !inDesc && !inVars) return false;
      }

      return true;
    });

    if (isShuffled) {
      // Deterministic uniform shuffle using seed
      const copy = [...list];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.abs(Math.sin(shuffleSeed + i)) * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    return list;
  }, [selectedArea, selectedSubtopic, onlyBookmarked, bookmarks, searchQuery, isShuffled, shuffleSeed]);

  // Ensure currentIndex stays within bounds when list length changes
  useEffect(() => {
    if (filteredFormulas.length === 0) {
      setCurrentIndex(0);
      setIsFlipped(false);
    } else if (currentIndex >= filteredFormulas.length) {
      setCurrentIndex(filteredFormulas.length - 1);
      setIsFlipped(false);
    }
  }, [filteredFormulas.length, currentIndex]);

  const currentFormula = filteredFormulas[currentIndex] || null;
  const isBookmarked = currentFormula ? bookmarks.includes(currentFormula.id) : false;

  // Active Area Tab Metadata
  const activeTabObj = useMemo(() => {
    return AREA_TABS.find(t => t.id === selectedArea) || AREA_TABS[0];
  }, [selectedArea]);

  // Tab Selection with sound and reset
  const handleSelectTab = (areaId: 'ALL' | CEArea) => {
    if (selectedArea === areaId) return;
    setSelectedArea(areaId);
    setSelectedSubtopic('ALL');
    setCurrentIndex(0);
    setIsFlipped(false);
    soundManager.playClick();
  };

  // Keyboard navigation across tablist (WAI-ARIA roving tabindex)
  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowRight') {
      nextIndex = (index + 1) % AREA_TABS.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (index - 1 + AREA_TABS.length) % AREA_TABS.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = AREA_TABS.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextTab = AREA_TABS[nextIndex];
    handleSelectTab(nextTab.id);

    // Shift focus to the activated tab button
    const buttons = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    buttons?.[nextIndex]?.focus();
  };

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (filteredFormulas.length <= 1) return;
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % filteredFormulas.length);
    soundManager.playClick();
  }, [filteredFormulas.length]);

  const handlePrev = useCallback(() => {
    if (filteredFormulas.length <= 1) return;
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + filteredFormulas.length) % filteredFormulas.length);
    soundManager.playClick();
  }, [filteredFormulas.length]);

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
    soundManager.playCardFlip();
  }, []);

  const handleToggleShuffle = () => {
    setIsShuffled(prev => !prev);
    setShuffleSeed(Date.now());
    setCurrentIndex(0);
    setIsFlipped(false);
    soundManager.playClick();
  };

  const handleToggleBookmark = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    const updated = toggleFormulaBookmark(id);
    setBookmarks(updated);
    soundManager.playClick();
  };

  const handleCopyEquation = (latex: string, id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    navigator.clipboard.writeText(latex);
    setCopiedId(id);
    soundManager.playClick();
    setTimeout(() => {
      setCopiedId(prev => (prev === id ? null : prev));
    }, 2000);
  };

  // Text to speech
  const handleSpeak = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!('speechSynthesis' in window) || !currentFormula) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToRead = isFlipped
      ? `${currentFormula.name}. Formula: ${currentFormula.formula}. ${currentFormula.description}`
      : `Formula name: ${currentFormula.name}. Topic: ${currentFormula.subtopic}. ${currentFormula.description}`;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Keyboard navigation for Quizlet study
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in search input
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') {
        return;
      }

      if (e.key === ' ' || e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        handleFlip();
      } else if (e.key === 'ArrowRight' || e.key === 'j' || e.key === 'J') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'k' || e.key === 'K') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleFlip, handleNext, handlePrev]);

  // Jump to specific card from list
  const handleSelectFromSet = (index: number) => {
    setCurrentIndex(index);
    setIsFlipped(false);
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8 select-none">
      
      {/* ===================================================================== */}
      {/* HEADER & BRANDING                                                     */}
      {/* ===================================================================== */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-stone-200 dark:border-stone-800">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="p-2.5 rounded-2xl bg-orange-500/10 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border border-orange-500/20">
              <Sigma className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-stone-100 tracking-tight">
                Civil Engineering Formulas
              </h1>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
                Quizlet-style interactive study deck with high-precision KaTeX / LaTeX equations
              </p>
            </div>
          </div>
        </div>

        {/* Counter & Bookmarks Indicator */}
        <div className="flex items-center space-x-3 self-start md:self-auto">
          <button
            type="button"
            onClick={() => {
              setOnlyBookmarked(prev => !prev);
              soundManager.playClick();
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition flex items-center space-x-1.5 cursor-pointer shadow-xs ${
              onlyBookmarked
                ? 'bg-amber-500 text-white border-amber-600 shadow-amber-500/20'
                : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:border-amber-400'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${onlyBookmarked ? 'fill-current' : ''}`} />
            <span>Starred ({bookmarks.length})</span>
          </button>

          <span className="text-xs font-mono font-bold px-3 py-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-700">
            {filteredFormulas.length} Formulas
          </span>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* ACCESSIBLE TABBED NAVIGATION SYSTEM (PSAD, HPGE, MSTE)                 */}
      {/* ===================================================================== */}
      <section aria-label="Formula Areas Navigation" className="space-y-4">
        {/* ARIA Tablist */}
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Civil Engineering Subject Areas"
          className="flex p-1.5 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700/80 gap-1.5 overflow-x-auto scrollbar-none"
        >
          {AREA_TABS.map((tab, idx) => {
            const isSelected = selectedArea === tab.id;
            const count = tab.id === 'ALL'
              ? CE_FORMULAS_MASTER.length
              : CE_FORMULAS_MASTER.filter(f => f.area === tab.id).length;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={`tabpanel-${tab.id}`}
                tabIndex={isSelected ? 0 : -1}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
                onClick={() => handleSelectTab(tab.id)}
                className={`flex-1 min-w-[130px] sm:min-w-0 py-3 px-3.5 rounded-xl font-extrabold text-xs transition-all flex items-center justify-center space-x-2 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-500 active:scale-[0.98] ${
                  isSelected
                    ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm border border-stone-200/80 dark:border-stone-700'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-200/50 dark:hover:bg-stone-700/50 border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-orange-600 dark:text-orange-400' : 'text-stone-400'}`} />
                <span className="truncate">{tab.label}</span>
                <span
                  aria-label={`${count} formulas`}
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                    isSelected
                      ? 'bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300'
                      : 'bg-stone-200 dark:bg-stone-700 text-stone-500 dark:text-stone-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Area Accessible Context Header & Subtopic Filter / Search */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
          <div aria-live="polite" className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-3.5">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className={`text-[10px] font-mono font-extrabold uppercase tracking-wider px-2 py-0.5 rounded border ${activeTabObj.badgeBg}`}>
                  {activeTabObj.shortLabel} Area
                </span>
                <h2 className="text-sm sm:text-base font-extrabold text-stone-900 dark:text-stone-100">
                  {activeTabObj.fullName}
                </h2>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                {activeTabObj.description}
              </p>
            </div>
            <div className="text-xs font-mono font-bold text-stone-400 dark:text-stone-500 self-start sm:self-center shrink-0">
              Showing {filteredFormulas.length} of {selectedArea === 'ALL' ? CE_FORMULAS_MASTER.length : CE_FORMULAS_MASTER.filter(f => f.area === selectedArea).length} formulas
            </div>
          </div>

          {/* Subtopic Filter & Search Input */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            {/* Subtopic Dropdown */}
            <div className="sm:col-span-5 relative">
              <label htmlFor="subtopic-select" className="sr-only">
                Filter formulas by subtopic
              </label>
              <select
                id="subtopic-select"
                aria-label="Filter formulas by subtopic"
                value={selectedSubtopic}
                onChange={(e) => {
                  setSelectedSubtopic(e.target.value);
                  soundManager.playClick();
                }}
                className="w-full px-3.5 py-2.5 rounded-xl text-xs font-medium bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-orange-500 cursor-pointer shadow-xs"
              >
                <option value="ALL">All Subtopics ({availableSubtopics.length})</option>
                {availableSubtopics.map(st => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* Live Search Input */}
            <div className="sm:col-span-7 relative">
              <label htmlFor="formula-search" className="sr-only">
                Search formulas
              </label>
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-stone-400" aria-hidden="true" />
              <input
                id="formula-search"
                type="text"
                aria-label="Search formulas in this area"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search formula name, variable (e.g. Manning, Buckling, Shear)..."
                className="w-full pl-9 pr-8 py-2.5 rounded-xl text-xs bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-orange-500 shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear search input"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 p-0.5"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* ACTIVE TABPANEL CONTENT                                               */}
      {/* ===================================================================== */}
      <div
        role="tabpanel"
        id={`tabpanel-${selectedArea}`}
        aria-labelledby={`tab-${selectedArea}`}
        tabIndex={0}
        className="space-y-8 focus:outline-hidden"
      >

      {/* ===================================================================== */}
      {/* MAIN QUIZLET STUDY CARD SECTION                                      */}
      {/* ===================================================================== */}
      {currentFormula ? (
        <div className="space-y-4">
          {/* 3D Interactive Flip Card Stage */}
          <div className="perspective-stage w-full">
            <div
              key={`${currentFormula.id}-${isShuffled ? 's' : 'n'}`}
              className={`card-3d-flipper card-3d-grid min-h-[420px] sm:min-h-[460px] cursor-pointer ${
                isFlipped ? 'is-flipped' : ''
              }`}
              onClick={handleFlip}
            >
              
              {/* =========================================================== */}
              {/* CARD FRONT FACE: Shows Formula Name & Prompt                */}
              {/* =========================================================== */}
              <div className="card-3d-face card-3d-front bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-9 shadow-md hover:shadow-xl transition-all space-y-6 text-stone-900 dark:text-stone-100 flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-4">
                    <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                      <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-800">
                        {currentFormula.area}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 truncate max-w-[260px]">
                        {currentFormula.subtopic}
                      </span>
                      <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500">
                        {currentFormula.difficulty}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-1.5" onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        onClick={handleSpeak}
                        className="p-2 rounded-xl text-stone-500 hover:text-orange-600 hover:bg-stone-100 dark:hover:bg-stone-800 transition"
                        title="Read formula name aloud"
                      >
                        {isSpeaking ? <VolumeX className="w-4 h-4 text-orange-600" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <button
                        type="button"
                        onClick={(e) => handleToggleBookmark(currentFormula.id, e)}
                        className={`p-2 rounded-xl transition ${
                          isBookmarked
                            ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/60'
                            : 'text-stone-400 hover:text-amber-500 hover:bg-stone-100 dark:hover:bg-stone-800'
                        }`}
                        title="Star / bookmark formula"
                      >
                        <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Formula Name - The Core Quizlet Question */}
                  <div className="py-6 sm:py-10 space-y-3 text-center sm:text-left">
                    <span className="text-xs font-extrabold text-orange-600 dark:text-orange-400 uppercase tracking-widest block">
                      Formula Name & Concept:
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-black text-stone-900 dark:text-stone-100 leading-tight">
                      {currentFormula.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 pt-2 leading-relaxed max-w-2xl">
                      {currentFormula.description}
                    </p>
                  </div>
                </div>

                {/* Clean Quizlet Card Footer */}
                <div className="pt-4 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between text-xs text-stone-400 dark:text-stone-500">
                  <span className="flex items-center space-x-1.5 font-medium">
                    <RotateCw className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" />
                    <span>Flip card</span>
                  </span>
                  <span className="hidden sm:inline font-mono text-[11px] px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400">
                    Space
                  </span>
                </div>
              </div>

              {/* =========================================================== */}
              {/* CARD BACK FACE: Shows Rendered LaTeX / KaTeX Formula        */}
              {/* =========================================================== */}
              <div className="card-3d-face card-3d-back bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-9 shadow-md hover:shadow-xl transition-all space-y-6 text-stone-900 dark:text-stone-100 flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-4">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300 border border-orange-300 dark:border-orange-800">
                        {currentFormula.area}
                      </span>
                      <span className="font-bold text-sm text-stone-800 dark:text-stone-200 truncate max-w-[240px]">
                        {currentFormula.name}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        aria-label={`Copy LaTeX syntax for ${currentFormula.name}`}
                        onClick={(e) => handleCopyEquation(currentFormula.latex || currentFormula.formula, currentFormula.id, e)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer border shadow-xs active:scale-95 ${
                          copiedId === currentFormula.id
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800 ring-1 ring-emerald-400'
                            : 'bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700'
                        }`}
                        title="Copy LaTeX formula syntax to clipboard"
                      >
                        {copiedId === currentFormula.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 shrink-0" />
                            <span>Copy LaTeX</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleFlip}
                        className="px-2.5 py-1 rounded-xl text-xs font-bold text-orange-600 dark:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-950/40 border border-orange-200 dark:border-orange-800 transition flex items-center space-x-1 cursor-pointer"
                        title="Flip back to name"
                      >
                        <RotateCw className="w-3.5 h-3.5" />
                        <span>Flip Back</span>
                      </button>
                    </div>
                  </div>

                  {/* PRIMARY KATEX / LATEX EQUATION SHOWCASE BOX */}
                  <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-orange-500/10 border-2 border-orange-500/30 text-stone-900 dark:text-stone-100 shadow-sm flex flex-col items-center justify-center min-h-[110px]">
                    <span className="text-[10px] font-extrabold text-orange-600 dark:text-orange-400 uppercase tracking-widest block mb-2">
                      Governing Equation
                    </span>
                    <div className="text-xl sm:text-2xl font-serif text-stone-950 dark:text-stone-50 select-text overflow-x-auto max-w-full text-center">
                      <KatexEquation
                        latex={currentFormula.latex}
                        fallbackText={currentFormula.formula}
                        displayMode={true}
                        className="text-xl sm:text-2xl text-stone-950 dark:text-stone-50 font-medium"
                      />
                    </div>
                  </div>

                  {/* Variables & Units Table */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-xs font-extrabold text-stone-600 dark:text-stone-300">
                      <Table className="w-3.5 h-3.5 text-orange-500" />
                      <span>Variables & Standard Engineering Units:</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-44 overflow-y-auto pr-1">
                      {currentFormula.variables.map((v, i) => (
                        <div
                          key={i}
                          className="p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/80 text-xs flex items-center justify-between"
                        >
                          <div className="flex items-center space-x-2 truncate">
                            <span className="font-mono font-bold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/80 px-1.5 py-0.5 rounded text-xs">
                              {v.symbol}
                            </span>
                            <span className="text-stone-800 dark:text-stone-200 truncate">{v.name}</span>
                          </div>
                          {v.unit && (
                            <span className="text-[10px] font-mono font-medium text-stone-500 dark:text-stone-400 ml-2 whitespace-nowrap bg-stone-200/50 dark:bg-stone-700/50 px-1.5 py-0.5 rounded">
                              {v.unit}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Board Exam Shortcuts & Calculator Tips */}
                  {currentFormula.shortcutsAndTips.length > 0 && (
                    <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-xs space-y-1.5">
                      <div className="flex items-center space-x-1.5 font-bold text-amber-800 dark:text-amber-300">
                        <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                        <span>Board Exam Tips & Calculator Shortcuts:</span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-stone-700 dark:text-stone-300 text-[11px] leading-relaxed pl-1">
                        {currentFormula.shortcutsAndTips.map((tip, idx) => (
                          <li key={idx}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Back Face Footer */}
                <div className="pt-4 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between text-xs text-stone-400 dark:text-stone-500">
                  <span className="flex items-center space-x-1.5 font-medium">
                    <RotateCw className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" />
                    <span>Flip card</span>
                  </span>
                  <span className="hidden sm:inline font-mono text-[11px] px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400">
                    Space
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* ================================================================= */}
          {/* QUIZLET CAROUSEL & NAVIGATION CONTROLS                            */}
          {/* ================================================================= */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs">
            {/* Left: Shuffle & Star */}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handleToggleShuffle}
                className={`p-2.5 rounded-xl border text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  isShuffled
                    ? 'bg-orange-600 text-white border-orange-600 shadow-md shadow-orange-600/20'
                    : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:border-orange-400'
                }`}
                title="Shuffle formula deck order"
              >
                <Shuffle className="w-4 h-4" />
                <span>Shuffle</span>
              </button>

              <button
                type="button"
                onClick={(e) => handleToggleBookmark(currentFormula.id, e)}
                className={`p-2.5 rounded-xl border text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  isBookmarked
                    ? 'bg-amber-500 text-white border-amber-600 shadow-md shadow-amber-500/20'
                    : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:border-amber-400'
                }`}
                title="Bookmark current formula"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                <span>{isBookmarked ? 'Starred' : 'Star'}</span>
              </button>
            </div>

            {/* Center: Prev / Counter / Next Controls */}
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={handlePrev}
                disabled={filteredFormulas.length <= 1}
                className="p-3 rounded-2xl bg-stone-100 dark:bg-stone-800 hover:bg-orange-100 dark:hover:bg-orange-950/60 hover:text-orange-600 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-200 transition cursor-pointer active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed shadow-xs"
                title="Previous formula (Left Arrow / K)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="text-center min-w-[110px]">
                <span className="text-sm font-extrabold text-stone-900 dark:text-stone-100">
                  {currentIndex + 1}
                </span>
                <span className="text-stone-400 dark:text-stone-500 text-xs mx-1">/</span>
                <span className="text-xs font-bold text-stone-500 dark:text-stone-400">
                  {filteredFormulas.length}
                </span>
                <div className="text-[10px] text-stone-400 dark:text-stone-500 font-mono">
                  Use ← → keys
                </div>
              </div>

              <button
                type="button"
                onClick={handleNext}
                disabled={filteredFormulas.length <= 1}
                className="p-3 rounded-2xl bg-stone-100 dark:bg-stone-800 hover:bg-orange-100 dark:hover:bg-orange-950/60 hover:text-orange-600 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-200 transition cursor-pointer active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed shadow-xs"
                title="Next formula (Right Arrow / J)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right: Flip Action */}
            <button
              type="button"
              onClick={handleFlip}
              className="px-4 py-2.5 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-300 dark:border-orange-800 text-orange-700 dark:text-orange-300 text-xs font-bold hover:bg-orange-100 transition flex items-center space-x-1.5 cursor-pointer shadow-xs active:scale-95"
            >
              <RotateCw className="w-4 h-4" />
              <span>{isFlipped ? 'Show Name' : 'Show Formula'}</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3">
          <HelpCircle className="w-10 h-10 text-stone-400 mx-auto" />
          <h3 className="text-lg font-bold text-stone-800 dark:text-stone-200">No formulas match your filters</h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            Try adjusting your search query, clearing the bookmarked filter, or selecting "All Formulas".
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedArea('ALL');
              setSelectedSubtopic('ALL');
              setSearchQuery('');
              setOnlyBookmarked(false);
            }}
            className="px-4 py-2 rounded-xl bg-orange-600 text-white font-bold text-xs hover:bg-orange-700 transition"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* ===================================================================== */}
      {/* QUIZLET-STYLE "FORMULAS IN THIS SET" LIST                             */}
      {/* ===================================================================== */}
      <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Layers className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            <h3 className="text-lg font-extrabold text-stone-900 dark:text-stone-100">
              Formulas in this set ({filteredFormulas.length})
            </h3>
          </div>
          <span className="text-xs text-stone-500 dark:text-stone-400">
            Click any row to inspect & study in card
          </span>
        </div>

        <div className="space-y-3">
          {filteredFormulas.map((form, idx) => {
            const isCurrent = currentIndex === idx;
            const isStar = bookmarks.includes(form.id);
            const isExpanded = expandedFormulaId === form.id;

            return (
              <div
                key={form.id}
                onClick={() => handleSelectFromSet(idx)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-orange-50/40 dark:bg-orange-950/20 border-orange-400 dark:border-orange-700 shadow-sm ring-1 ring-orange-400/50'
                    : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-orange-300 dark:hover:border-stone-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Left: Name and Tags */}
                  <div className="space-y-1.5 sm:max-w-md">
                    <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300">
                        {form.area}
                      </span>
                      <span className="text-[11px] font-medium text-stone-500 dark:text-stone-400 truncate max-w-[200px]">
                        {form.subtopic}
                      </span>
                      {isCurrent && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-500 text-white">
                          Active Card
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm sm:text-base font-extrabold text-stone-900 dark:text-stone-100">
                      {form.name}
                    </h4>
                    <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-1">
                      {form.description}
                    </p>
                  </div>

                  {/* Right: Rendered KaTeX preview and actions */}
                  <div className="flex items-center space-x-3 self-end sm:self-center">
                    <div className="px-4 py-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-sm font-medium text-stone-900 dark:text-stone-100 min-w-[160px] text-center overflow-x-auto">
                      <KatexEquation
                        latex={form.latex}
                        fallbackText={form.formula}
                        displayMode={false}
                        className="text-sm font-serif"
                      />
                    </div>

                    <button
                      type="button"
                      aria-label={`Copy LaTeX syntax for ${form.name}`}
                      onClick={(e) => handleCopyEquation(form.latex || form.formula, form.id, e)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer border shadow-xs active:scale-95 ${
                        copiedId === form.id
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800 ring-1 ring-emerald-400'
                          : 'bg-stone-50 dark:bg-stone-800 hover:bg-orange-50 dark:hover:bg-orange-950/40 text-stone-700 dark:text-stone-300 hover:text-orange-600 dark:hover:text-orange-400 border-stone-200 dark:border-stone-700 hover:border-orange-300 dark:hover:border-orange-800'
                      }`}
                      title="Copy LaTeX formula syntax to clipboard"
                    >
                      {copiedId === form.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 shrink-0 text-stone-400 dark:text-stone-400" />
                          <span className="whitespace-nowrap">Copy LaTeX</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleToggleBookmark(form.id, e)}
                      className={`p-2 rounded-xl transition ${
                        isStar
                          ? 'text-amber-500 hover:text-amber-600'
                          : 'text-stone-300 hover:text-amber-500 dark:text-stone-600'
                      }`}
                      title="Bookmark formula"
                    >
                      <Bookmark className={`w-4 h-4 ${isStar ? 'fill-current' : ''}`} />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedFormulaId(prev => (prev === form.id ? null : form.id));
                      }}
                      className="p-2 rounded-xl text-stone-400 hover:text-orange-600 hover:bg-stone-100 dark:hover:bg-stone-800 transition"
                      title="Toggle variable details"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-stone-100 dark:border-stone-800 space-y-3" onClick={(e) => e.stopPropagation()}>
                    {/* LaTeX Syntax Display Row with Copy LaTeX button */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700">
                      <div className="flex items-center space-x-2 truncate">
                        <span className="text-[10px] font-mono font-bold uppercase text-stone-400 shrink-0">LaTeX:</span>
                        <code className="text-xs font-mono text-orange-600 dark:text-orange-400 select-all truncate">
                          {form.latex || form.formula}
                        </code>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => handleCopyEquation(form.latex || form.formula, form.id, e)}
                        className="px-2.5 py-1 rounded-lg text-xs font-bold text-stone-700 dark:text-stone-200 hover:text-orange-600 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 flex items-center space-x-1.5 self-start sm:self-auto shrink-0 cursor-pointer shadow-2xs active:scale-95"
                      >
                        {copiedId === form.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy LaTeX</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-xs font-bold text-stone-600 dark:text-stone-300">
                      Variables & Engineering Units:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                      {form.variables.map((v, i) => (
                        <div key={i} className="p-2 rounded-lg bg-stone-50 dark:bg-stone-800 text-[11px] flex justify-between">
                          <span className="font-mono font-bold text-orange-600 dark:text-orange-400">{v.symbol}</span>
                          <span className="text-stone-700 dark:text-stone-300 truncate mx-2">{v.name}</span>
                          <span className="text-stone-400 font-mono">{v.unit}</span>
                        </div>
                      ))}
                    </div>
                    {form.shortcutsAndTips.length > 0 && (
                      <div className="p-2.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/50 text-[11px] text-stone-600 dark:text-stone-300">
                        <span className="font-bold text-amber-800 dark:text-amber-400">Board Exam Tip: </span>
                        {form.shortcutsAndTips[0]}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      </div>

    </div>
  );
};
