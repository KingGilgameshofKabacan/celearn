import React, { useState, useMemo, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  CEArea,
  CEFormula,
  FormulaDomain,
  FlashcardItemProgress,
  FlashcardMasteryStatus
} from '../types';
import {
  ALL_FORMULAS,
  ALL_FORMULA_DOMAINS,
  FORMULA_AREAS,
  FORMULA_DOMAINS_BY_AREA,
  FORMULA_TOPICS_BY_DOMAIN,
  FORMULA_TOPICS_BY_AREA,
  MSTE_FORMULAS,
  FormulaAreaFilter
} from '../data/allFormulas';
import { PSAD_FORMULAS } from '../data/psadFormulas';
import { HPGE_FORMULAS } from '../data/hpgeFormulas';
import {
  getFormulaBookmarks,
  toggleFormulaBookmark,
  getFormulaProgress,
  updateFormulaStatus,
  addBottleCaps,
  incrementDailyQuestionsAnswered,
  setDailyTaskCompleted
} from '../utils/storage';
import { soundManager } from '../utils/audio';
import { KatexEquation } from './KatexEquation';
import { FalloutFormulaFlashcard } from './FalloutFormulaFlashcard';
import {
  Sigma,
  Search,
  Star,
  Pin,
  Layers,
  BookOpen,
  GraduationCap,
  CheckCircle2,
  ZoomIn,
  X,
  Shuffle,
  Droplets,
  Mountain,
  Compass,
  Building2,
  Network,
  Activity,
  Wrench,
  Radio,
  AlertTriangle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ChevronsDown,
  ChevronsUp,
  ArrowUpRight,
  FolderOpen,
  ListTree,
  Triangle,
  BarChart3,
  Map as MapIcon,
  Route,
  TrendingUp,
  Infinity as InfinityIcon,
  Atom,
  Award
} from 'lucide-react';

interface FormulasViewProps {
  themeMode: 'dark' | 'light';
  onStartFormulaExam: (area: FormulaAreaFilter) => void;
  hpgeQuestionCount: number;
  psadQuestionCount: number;
  msteQuestionCount: number;
}

type FormulaFilterType = 'all' | 'diagrams' | 'text' | 'bookmarked' | 'unmastered';
type ViewMode = 'codex' | 'flashcards';

function getDomainVisual(domain: FormulaDomain): {
  short: string;
  badgeBg: string;
  icon: React.ReactNode;
} {
  switch (domain) {
    case 'Hydraulics & Fluid Mechanics':
      return {
        short: 'Hydraulics',
        badgeBg: 'bg-sky-600',
        icon: <Droplets className="w-3.5 h-3.5" />
      };
    case 'Geotechnical Engineering':
      return {
        short: 'Geotech',
        badgeBg: 'bg-amber-600',
        icon: <Mountain className="w-3.5 h-3.5" />
      };
    case 'Engineering Mechanics':
      return {
        short: 'Mechanics',
        badgeBg: 'bg-indigo-600',
        icon: <Compass className="w-3.5 h-3.5" />
      };
    case 'Reinforced Concrete Design':
      return {
        short: 'RCD',
        badgeBg: 'bg-orange-600',
        icon: <Building2 className="w-3.5 h-3.5" />
      };
    case 'Theory of Structures':
      return {
        short: 'Theory',
        badgeBg: 'bg-teal-600',
        icon: <Network className="w-3.5 h-3.5" />
      };
    case 'Strength of Materials':
      return {
        short: 'StreMa',
        badgeBg: 'bg-emerald-600',
        icon: <Activity className="w-3.5 h-3.5" />
      };
    case 'Steel & Prestressed Concrete':
      return {
        short: 'Steel & PSC',
        badgeBg: 'bg-cyan-600',
        icon: <Wrench className="w-3.5 h-3.5" />
      };
    case 'Earthquake Engineering':
      return {
        short: 'Earthquake',
        badgeBg: 'bg-rose-600',
        icon: <Radio className="w-3.5 h-3.5" />
      };
    case 'Trigonometry & Geometry':
      return {
        short: 'Trig & Geom',
        badgeBg: 'bg-violet-600',
        icon: <Triangle className="w-3.5 h-3.5" />
      };
    case 'Analytic Geometry & Algebra':
      return {
        short: 'Analytic / Alg',
        badgeBg: 'bg-purple-600',
        icon: <Sigma className="w-3.5 h-3.5" />
      };
    case 'Probability & Statistics':
      return {
        short: 'Prob & Stat',
        badgeBg: 'bg-fuchsia-600',
        icon: <BarChart3 className="w-3.5 h-3.5" />
      };
    case 'Surveying & Earthworks':
      return {
        short: 'Surveying',
        badgeBg: 'bg-teal-600',
        icon: <MapIcon className="w-3.5 h-3.5" />
      };
    case 'Highway, Transpo & Ports':
      return {
        short: 'Transpo / Hwy',
        badgeBg: 'bg-amber-600',
        icon: <Route className="w-3.5 h-3.5" />
      };
    case 'Engineering Economy':
      return {
        short: 'Eng Economy',
        badgeBg: 'bg-yellow-600',
        icon: <TrendingUp className="w-3.5 h-3.5" />
      };
    case 'Calculus, DE & Vector Analysis':
      return {
        short: 'Calc & DE',
        badgeBg: 'bg-sky-600',
        icon: <InfinityIcon className="w-3.5 h-3.5" />
      };
    case 'Construction & Engineering Physics':
      return {
        short: 'Const & Physics',
        badgeBg: 'bg-pink-600',
        icon: <Atom className="w-3.5 h-3.5" />
      };
  }
}

function getTopicKey(area: CEArea, domain: FormulaDomain, topic: string): string {
  return `${area}::${domain}::${topic}`;
}

const FORMULA_BY_ID = new Map<string, CEFormula>(ALL_FORMULAS.map(f => [f.id, f]));
const FORMULA_SEARCH_HAYSTACK = new Map<string, string>(
  ALL_FORMULAS.map(f => [
    f.id,
    [
      f.area,
      f.title,
      f.topic,
      f.domain,
      f.examSubtopic,
      `p.${f.pageRef}`,
      `page ${f.pageRef}`,
      f.latex,
      f.flashcardPrompt,
      ...(f.variables?.map(v => `${v.symbol} ${v.meaning}`) || []),
      ...(f.notes || []),
      ...(f.secondaryEquations?.map(s => `${s.label} ${s.latex}`) || [])
    ]
      .join(' ')
      .toLowerCase()
  ])
);

const FORMULAS_BY_TOPIC_KEY = new Map<string, CEFormula[]>();
for (const f of ALL_FORMULAS) {
  const key = getTopicKey(f.area, f.domain, f.topic);
  const existing = FORMULAS_BY_TOPIC_KEY.get(key);
  if (existing) {
    existing.push(f);
  } else {
    FORMULAS_BY_TOPIC_KEY.set(key, [f]);
  }
}

export const FormulasView: React.FC<FormulasViewProps> = ({
  themeMode,
  onStartFormulaExam,
  hpgeQuestionCount,
  psadQuestionCount,
  msteQuestionCount
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('codex');
  const [selectedArea, setSelectedArea] = useState<FormulaAreaFilter>('ALL');
  const [selectedTopic, setSelectedTopic] = useState<string>('ALL');
  const [filterType, setFilterType] = useState<FormulaFilterType>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isPinnedShelfOpen, setIsPinnedShelfOpen] = useState<boolean>(true);
  const [pinStarredFirst, setPinStarredFirst] = useState<boolean>(true);

  // Slide-over Area & Topic Drawer Menu state
  const [isTopicDrawerOpen, setIsTopicDrawerOpen] = useState<boolean>(false);
  const [drawerTopicFilter, setDrawerTopicFilter] = useState<string>('');
  const [expandedDrawerAreas, setExpandedDrawerAreas] = useState<Record<CEArea, boolean>>({
    HPGE: true,
    PSAD: true,
    MSTE: true
  });
  const [collapsedDrawerDomains, setCollapsedDrawerDomains] = useState<Set<FormulaDomain>>(
    () => new Set()
  );

  const isAnyDrawerExpanded = useMemo(
    () => FORMULA_AREAS.some(a => expandedDrawerAreas[a]),
    [expandedDrawerAreas]
  );

  const handleToggleAllDrawerSections = () => {
    soundManager.playClick();
    if (isAnyDrawerExpanded) {
      setExpandedDrawerAreas({ HPGE: false, PSAD: false, MSTE: false });
      setCollapsedDrawerDomains(new Set(ALL_FORMULA_DOMAINS));
    } else {
      setExpandedDrawerAreas({ HPGE: true, PSAD: true, MSTE: true });
      setCollapsedDrawerDomains(new Set());
    }
  };

  // Inline collapsible Topic Drawers in Codex (prevents massive vertical scroll & decodes only visible diagrams)
  const [openTopicKeys, setOpenTopicKeys] = useState<Set<string>>(() => new Set());

  const [bookmarks, setBookmarks] = useState<string[]>(getFormulaBookmarks);
  const [progressMap, setProgressMap] = useState<Record<string, FlashcardItemProgress>>(
    getFormulaProgress
  );

  // Flashcard deck state
  const [deckIds, setDeckIds] = useState<string[]>([]);
  const [deckIndex, setDeckIndex] = useState<number>(0);
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);
  const [drillReviewedIds, setDrillReviewedIds] = useState<string[]>([]);
  const [drillMasteredIds, setDrillMasteredIds] = useState<string[]>([]);
  const [isFormulaDrillCompleted, setIsFormulaDrillCompleted] = useState<boolean>(false);

  // Diagram Zoom Lightbox state
  const [zoomedDiagram, setZoomedDiagram] = useState<{
    src: string;
    caption: string;
    alt: string;
  } | null>(null);

  // Sync external updates to formula progress & bookmarks (including JSON backup restore)
  useEffect(() => {
    const onProgressUpdated = () => setProgressMap(getFormulaProgress());
    const onBookmarksUpdated = () => setBookmarks(getFormulaBookmarks());
    const onBackupRestored = () => {
      setProgressMap(getFormulaProgress());
      setBookmarks(getFormulaBookmarks());
    };
    window.addEventListener('cele_formula_progress_updated', onProgressUpdated);
    window.addEventListener('cele_formula_bookmarks_updated', onBookmarksUpdated);
    window.addEventListener('cele_backup_restored', onBackupRestored);
    return () => {
      window.removeEventListener('cele_formula_progress_updated', onProgressUpdated);
      window.removeEventListener('cele_formula_bookmarks_updated', onBookmarksUpdated);
      window.removeEventListener('cele_backup_restored', onBackupRestored);
    };
  }, []);

  // Close Topic Drawer Menu on Escape
  useEffect(() => {
    if (!isTopicDrawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsTopicDrawerOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isTopicDrawerOpen]);

  // Formulas belonging to selected Area (ALL, HPGE, PSAD, MSTE)
  const areaFormulas = useMemo(() => {
    if (selectedArea === 'HPGE') return HPGE_FORMULAS;
    if (selectedArea === 'PSAD') return PSAD_FORMULAS;
    if (selectedArea === 'MSTE') return MSTE_FORMULAS;
    return ALL_FORMULAS;
  }, [selectedArea]);

  // Active sub-domains for selected Area (used internally for grouping)
  const activeDomains = useMemo(
    () => FORMULA_DOMAINS_BY_AREA[selectedArea],
    [selectedArea]
  );

  // All topics under selected Area
  const availableTopicsInArea = useMemo(() => {
    return activeDomains.flatMap(d => FORMULA_TOPICS_BY_DOMAIN[d] || []);
  }, [activeDomains]);

  // Reset selectedTopic if user changes area and topic doesn't belong
  useEffect(() => {
    if (selectedTopic !== 'ALL' && !availableTopicsInArea.includes(selectedTopic)) {
      setSelectedTopic('ALL');
    }
  }, [selectedTopic, availableTopicsInArea]);

  const bookmarkSet = useMemo(() => new Set(bookmarks), [bookmarks]);

  // All pinned / starred formulas across the vault
  const pinnedFormulas = useMemo(() => {
    return bookmarks
      .map(id => FORMULA_BY_ID.get(id))
      .filter((f): f is CEFormula => Boolean(f));
  }, [bookmarks]);

  // Filtered formulas list
  const filteredFormulas = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const list = areaFormulas.filter(f => {
      if (selectedTopic !== 'ALL' && f.topic !== selectedTopic) return false;

      const hasDiag = Boolean(f.diagrams && f.diagrams.length > 0);
      if (filterType === 'diagrams' && !hasDiag) return false;
      if (filterType === 'text' && hasDiag) return false;
      if (filterType === 'bookmarked' && !bookmarkSet.has(f.id)) return false;
      if (filterType === 'unmastered' && progressMap[f.id]?.status === 'mastered') return false;

      if (q) {
        const hay = FORMULA_SEARCH_HAYSTACK.get(f.id) || '';
        if (!hay.includes(q)) return false;
      }

      return true;
    });

    if (!pinStarredFirst) return list;

    return [...list].sort((a, b) => {
      const aPin = bookmarkSet.has(a.id) ? 0 : 1;
      const bPin = bookmarkSet.has(b.id) ? 0 : 1;
      return aPin - bPin;
    });
  }, [
    areaFormulas,
    selectedTopic,
    filterType,
    searchQuery,
    bookmarkSet,
    progressMap,
    pinStarredFirst
  ]);

  // Synchronize flashcard deck when structural filters change or in Codex mode,
  // preserving shuffle order and flip state when starring/mastering inside Flashcards mode
  const prevDeckFilterSigRef = useRef<string>('');
  useEffect(() => {
    const sig = `${selectedArea}|${selectedTopic}|${filterType}|${searchQuery.trim()}|${pinStarredFirst}`;
    if (prevDeckFilterSigRef.current !== sig || viewMode === 'codex') {
      prevDeckFilterSigRef.current = sig;
      setDeckIds(filteredFormulas.map(f => f.id));
      setDeckIndex(prev => (prev < filteredFormulas.length ? prev : 0));
      setIsCardFlipped(false);
    }
  }, [filteredFormulas, selectedArea, selectedTopic, filterType, searchQuery, pinStarredFirst, viewMode]);

  // Group filtered formulas by domain & topic in one pass
  const formulasByTopic = useMemo(() => {
    const bucketed = new Map<string, CEFormula[]>();
    for (const f of filteredFormulas) {
      const key = `${f.domain}::${f.topic}`;
      const arr = bucketed.get(key);
      if (arr) arr.push(f);
      else bucketed.set(key, [f]);
    }

    const groups: {
      key: string;
      area: CEArea;
      domain: FormulaDomain;
      topic: string;
      items: CEFormula[];
    }[] = [];
    for (const domain of activeDomains) {
      for (const topic of FORMULA_TOPICS_BY_DOMAIN[domain] || []) {
        const items = bucketed.get(`${domain}::${topic}`);
        if (items && items.length > 0) {
          groups.push({
            key: getTopicKey(items[0].area, domain, topic),
            area: items[0].area,
            domain,
            topic,
            items
          });
        }
      }
    }
    return groups;
  }, [filteredFormulas, activeDomains]);

  // Auto-open matching topic drawers when a specific topic, search query, or starred filter is active
  useEffect(() => {
    const hasNarrowFilter =
      selectedTopic !== 'ALL' ||
      searchQuery.trim().length > 0 ||
      filterType === 'bookmarked';

    if (hasNarrowFilter) {
      setOpenTopicKeys(new Set(formulasByTopic.map(g => g.key)));
    }
  }, [selectedTopic, searchQuery, filterType, formulasByTopic]);

  const toggleTopicDrawer = (key: string) => {
    soundManager.playClick();
    setOpenTopicKeys(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const allTopicDrawersOpen =
    formulasByTopic.length > 0 && formulasByTopic.every(g => openTopicKeys.has(g.key));

  const handleToggleAllTopicDrawers = () => {
    soundManager.playClick();
    if (allTopicDrawersOpen) {
      setOpenTopicKeys(new Set());
    } else {
      setOpenTopicKeys(new Set(formulasByTopic.map(g => g.key)));
    }
  };

  // Area stats
  const masteredInArea = useMemo(
    () => areaFormulas.filter(f => progressMap[f.id]?.status === 'mastered').length,
    [areaFormulas, progressMap]
  );
  const diagramCountInArea = useMemo(
    () => areaFormulas.filter(f => f.diagrams && f.diagrams.length > 0).length,
    [areaFormulas]
  );
  const starredInAreaCount = useMemo(
    () => areaFormulas.filter(f => bookmarkSet.has(f.id)).length,
    [areaFormulas, bookmarkSet]
  );
  const activeQuizQuestionCount =
    selectedArea === 'HPGE'
      ? hpgeQuestionCount
      : selectedArea === 'PSAD'
      ? psadQuestionCount
      : selectedArea === 'MSTE'
      ? msteQuestionCount
      : hpgeQuestionCount + psadQuestionCount + msteQuestionCount;

  const handleToggleBookmark = (formulaId: string) => {
    soundManager.playClick();
    const updated = toggleFormulaBookmark(formulaId);
    setBookmarks([...updated]);
  };

  const handleCompleteFormulaDrill = () => {
    setDailyTaskCompleted('reviewedFlashcards', true);
    setIsFormulaDrillCompleted(true);
    soundManager.playCompleteSession();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('cele_flashcard_drill_completed', {
          detail: {
            mode: 'formula-flashcards',
            reviewedCount: drillReviewedIds.length,
            masteredCount: drillMasteredIds.length
          }
        })
      );
    }
  };

  const handleRateFormula = (
    formulaId: string,
    status: FlashcardMasteryStatus,
    advanceDeck = false
  ) => {
    const wasAlreadyMastered = progressMap[formulaId]?.status === 'mastered';
    const updated = updateFormulaStatus(formulaId, status);
    setProgressMap({ ...updated });
    incrementDailyQuestionsAnswered(1);
    if (status === 'mastered' && !wasAlreadyMastered) {
      addBottleCaps(10);
    }

    if (viewMode === 'flashcards') {
      setDrillReviewedIds(prev => (prev.includes(formulaId) ? prev : [...prev, formulaId]));
      if (status === 'mastered') {
        setDrillMasteredIds(prev => (prev.includes(formulaId) ? prev : [...prev, formulaId]));
      }
    }

    if (advanceDeck) {
      if (deckIds.length > 0 && deckIndex >= deckIds.length - 1) {
        setIsCardFlipped(false);
        setDailyTaskCompleted('reviewedFlashcards', true);
        setIsFormulaDrillCompleted(true);
        soundManager.playCompleteSession();
        if (typeof window !== 'undefined') {
          window.dispatchEvent(
            new CustomEvent('cele_flashcard_drill_completed', {
              detail: {
                mode: 'formula-flashcards',
                reviewedCount: drillReviewedIds.includes(formulaId)
                  ? drillReviewedIds.length
                  : drillReviewedIds.length + 1,
                masteredCount:
                  status === 'mastered' && !drillMasteredIds.includes(formulaId)
                    ? drillMasteredIds.length + 1
                    : drillMasteredIds.length
              }
            })
          );
        }
      } else if (deckIds.length > 1) {
        setIsCardFlipped(false);
        setDeckIndex(prev => prev + 1);
      }
    }
  };

  const handleSelectTopicFromDrawer = (area: FormulaAreaFilter, topic: string) => {
    soundManager.playClick();
    setSelectedArea(area);
    setSelectedTopic(topic);
    setFilterType(prev => (prev === 'bookmarked' ? 'all' : prev));
    setSearchQuery('');
    setIsTopicDrawerOpen(false);
  };

  const handleOpenInFlashcardDeck = (formulaId: string, forceIncludeAll = false) => {
    soundManager.playClick();
    setDrillReviewedIds([]);
    setDrillMasteredIds([]);
    setIsFormulaDrillCompleted(false);
    if (forceIncludeAll) {
      const target = ALL_FORMULAS.find(f => f.id === formulaId);
      if (target && selectedArea !== 'ALL' && target.area !== selectedArea) {
        setSelectedArea('ALL');
      }
      setSelectedTopic('ALL');
      if (filterType !== 'bookmarked') {
        setFilterType('all');
      }
      setSearchQuery('');
      const allPool = filterType === 'bookmarked' ? pinnedFormulas : ALL_FORMULAS;
      setDeckIds(allPool.map(f => f.id));
      const newIdx = allPool.findIndex(f => f.id === formulaId);
      setDeckIndex(Math.max(0, newIdx));
      setIsCardFlipped(false);
      setViewMode('flashcards');
      return;
    }

    const idx = deckIds.indexOf(formulaId);
    if (idx !== -1) {
      setDeckIndex(idx);
    } else {
      setDeckIds(filteredFormulas.map(f => f.id));
      const newIdx = filteredFormulas.findIndex(f => f.id === formulaId);
      setDeckIndex(Math.max(0, newIdx));
    }
    setIsCardFlipped(false);
    setViewMode('flashcards');
  };

  const handleJumpToCodexCard = (formula: CEFormula) => {
    soundManager.playClick();
    if (selectedArea !== 'ALL' && formula.area !== selectedArea) {
      setSelectedArea(formula.area);
    }
    setSelectedTopic(formula.topic);
    setFilterType('all');
    setSearchQuery('');
    setViewMode('codex');
    const key = getTopicKey(formula.area, formula.domain, formula.topic);
    setOpenTopicKeys(prev => new Set(prev).add(key));
    setTimeout(() => {
      const el = document.getElementById(`formula-card-${formula.id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleStudyStarredDeck = () => {
    if (pinnedFormulas.length === 0) return;
    soundManager.playClick();
    setSelectedArea('ALL');
    setSelectedTopic('ALL');
    setSearchQuery('');
    setFilterType('bookmarked');
    setDeckIds(pinnedFormulas.map(f => f.id));
    setDeckIndex(0);
    setIsCardFlipped(false);
    setDrillReviewedIds([]);
    setDrillMasteredIds([]);
    setIsFormulaDrillCompleted(false);
    setViewMode('flashcards');
  };

  const handleShuffleDeck = () => {
    soundManager.playClick();
    const shuffled = [...deckIds];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setDeckIds(shuffled);
    setDeckIndex(0);
    setIsCardFlipped(false);
    setDrillReviewedIds([]);
    setDrillMasteredIds([]);
    setIsFormulaDrillCompleted(false);
  };

  const currentDeckFormula = useMemo(() => {
    const id = deckIds[deckIndex];
    return id ? FORMULA_BY_ID.get(id) || null : null;
  }, [deckIds, deckIndex]);

  const handleRateFormulaRef = useRef(handleRateFormula);
  handleRateFormulaRef.current = handleRateFormula;

  // Keyboard shortcuts for Fallout Flashcard Deck & Lightbox Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (zoomedDiagram && e.key === 'Escape') {
        e.preventDefault();
        setZoomedDiagram(null);
        return;
      }

      if (viewMode !== 'flashcards' || !currentDeckFormula || zoomedDiagram) return;

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key === ' ' || e.key.toLowerCase() === 'f') {
        e.preventDefault();
        soundManager.playCardFlip();
        setIsCardFlipped(prev => !prev);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (deckIndex < deckIds.length - 1) {
          setIsCardFlipped(false);
          setDeckIndex(prev => prev + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (deckIndex > 0) {
          setIsCardFlipped(false);
          setDeckIndex(prev => prev - 1);
        }
      } else if (e.key.toLowerCase() === 'm') {
        e.preventDefault();
        soundManager.playCompleteTask();
        handleRateFormulaRef.current(currentDeckFormula.id, 'mastered', true);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [viewMode, currentDeckFormula, deckIndex, deckIds.length, zoomedDiagram]);

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-5">
      {/* ===================================================================== */}
      {/* TOP HEADER CONSOLE (VAULT-TEC CE FORMULAS ARCHIVE)                    */}
      {/* ===================================================================== */}
      <div className="bg-white dark:bg-[#0E1B38] border border-stone-200 dark:border-[#2B447A] rounded-3xl p-5 sm:p-7 shadow-sm relative overflow-hidden space-y-5">
        <div className="h-2.5 w-[calc(100%+2.5rem)] sm:w-[calc(100%+3.5rem)] vault-tec-hazard-stripe -mt-5 -mx-5 sm:-mt-7 sm:-mx-7 mb-4" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="p-2.5 rounded-2xl bg-amber-500 text-stone-950 shadow-sm shrink-0">
              <Sigma className="w-6 h-6" />
            </div>
            <h1 className="text-xl sm:text-2xl font-black font-mono tracking-tight text-stone-900 dark:text-amber-400">
              CE Formulas Vault
            </h1>
          </div>

          <button
            type="button"
            disabled={activeQuizQuestionCount === 0}
            onClick={() => {
              soundManager.playStartSession();
              onStartFormulaExam(selectedArea);
            }}
            className={`px-4 py-2.5 rounded-2xl font-mono font-black text-xs sm:text-sm shadow-sm transition flex items-center space-x-2 self-start sm:self-auto ${
              activeQuizQuestionCount === 0
                ? 'bg-stone-300 dark:bg-stone-800 text-stone-500 dark:text-stone-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 cursor-pointer active:scale-95'
            }`}
            data-keep-color={activeQuizQuestionCount > 0 ? true : undefined}
          >
            <GraduationCap className="w-4 h-4" />
            <span>
              Quiz {selectedArea === 'ALL' ? 'All Domains' : selectedArea} ({activeQuizQuestionCount}Q)
            </span>
          </button>
        </div>

        {/* Strictly 4 Domain Filters (All Domains, HPGE, PSAD, MSTE) + Mode Switcher */}
        <div className="pt-4 border-t border-stone-200 dark:border-[#2B447A] flex flex-col gap-3.5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            {/* Domain Filter Buttons: ONLY All Domains, HPGE, PSAD, MSTE */}
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter formulas by domain">
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setSelectedArea('ALL');
                  setSelectedTopic('ALL');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-black border transition cursor-pointer ${
                  selectedArea === 'ALL'
                    ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-xs'
                    : 'bg-stone-100 dark:bg-[#162852] text-stone-700 dark:text-stone-200 border-stone-200 dark:border-[#2B447A] hover:border-amber-400'
                }`}
                data-keep-color={selectedArea === 'ALL' ? true : undefined}
              >
                All Domains ({ALL_FORMULAS.length})
              </button>

              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setSelectedArea('HPGE');
                  setSelectedTopic('ALL');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-black border transition cursor-pointer ${
                  selectedArea === 'HPGE'
                    ? 'bg-sky-600 text-white border-sky-500 shadow-xs'
                    : 'bg-stone-100 dark:bg-[#162852] text-stone-700 dark:text-stone-200 border-stone-200 dark:border-[#2B447A] hover:border-sky-400'
                }`}
                data-keep-color={selectedArea === 'HPGE' ? true : undefined}
              >
                HPGE ({HPGE_FORMULAS.length})
              </button>

              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setSelectedArea('PSAD');
                  setSelectedTopic('ALL');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-black border transition cursor-pointer ${
                  selectedArea === 'PSAD'
                    ? 'bg-orange-600 text-white border-orange-500 shadow-xs'
                    : 'bg-stone-100 dark:bg-[#162852] text-stone-700 dark:text-stone-200 border-stone-200 dark:border-[#2B447A] hover:border-orange-400'
                }`}
                data-keep-color={selectedArea === 'PSAD' ? true : undefined}
              >
                PSAD ({PSAD_FORMULAS.length})
              </button>

              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setSelectedArea('MSTE');
                  setSelectedTopic('ALL');
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-black border transition cursor-pointer ${
                  selectedArea === 'MSTE'
                    ? 'bg-violet-600 text-white border-violet-500 shadow-xs'
                    : 'bg-stone-100 dark:bg-[#162852] text-stone-700 dark:text-stone-200 border-stone-200 dark:border-[#2B447A] hover:border-violet-400'
                }`}
                data-keep-color={selectedArea === 'MSTE' ? true : undefined}
              >
                MSTE ({MSTE_FORMULAS.length})
              </button>
            </div>

            {/* Codex vs Fallout Flashcards Mode Switcher */}
            <div className="inline-flex p-1 rounded-2xl bg-stone-100 dark:bg-[#09132B] border border-stone-200 dark:border-[#2B447A] self-start lg:self-auto">
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setIsFormulaDrillCompleted(false);
                  setViewMode('codex');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  viewMode === 'codex'
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-amber-300'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Formula Codex</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setIsFormulaDrillCompleted(false);
                  setDrillReviewedIds([]);
                  setDrillMasteredIds([]);
                  setViewMode('flashcards');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition flex items-center space-x-1.5 cursor-pointer ${
                  viewMode === 'flashcards'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-emerald-300'
                }`}
                data-keep-color={viewMode === 'flashcards' ? true : undefined}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Fallout Flashcards ({filteredFormulas.length})</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* PINNED / STARRED EQUATIONS QUICK-RETRIEVAL TRAY                       */}
      {/* ===================================================================== */}
      <div className="bg-white dark:bg-[#0E1B38] border-2 border-amber-500/45 rounded-3xl p-4 sm:p-5 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setIsPinnedShelfOpen(prev => !prev)}
            className="flex items-center space-x-2.5 text-left cursor-pointer group"
          >
            <span className="p-2 rounded-xl bg-amber-500 text-stone-950 shadow-xs">
              <Pin className="w-4 h-4" />
            </span>
            <div className="flex items-center space-x-2">
              <h2 className="text-sm sm:text-base font-black font-mono text-stone-900 dark:text-amber-400">
                Pinned / Starred Equations
              </h2>
              <span className="px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-700 dark:text-amber-300 font-mono text-[11px] font-bold border border-amber-500/30">
                {pinnedFormulas.length}
              </span>
            </div>
            {pinnedFormulas.length > 0 && (
              <span className="text-stone-400 group-hover:text-amber-500 transition ml-1">
                {isPinnedShelfOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            )}
          </button>

          <div className="flex flex-wrap items-center gap-2">
            {pinnedFormulas.length > 0 && (
              <>
                <button
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    setFilterType(prev => (prev === 'bookmarked' ? 'all' : 'bookmarked'));
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition flex items-center space-x-1.5 cursor-pointer ${
                    filterType === 'bookmarked'
                      ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-xs'
                      : 'bg-stone-100 dark:bg-[#162852] text-stone-700 dark:text-stone-200 border-stone-200 dark:border-[#2B447A] hover:border-amber-400'
                  }`}
                  data-keep-color={filterType === 'bookmarked' ? true : undefined}
                >
                  <Star className={`w-3.5 h-3.5 ${filterType === 'bookmarked' ? 'fill-current' : ''}`} />
                  <span>{filterType === 'bookmarked' ? 'Showing Starred Only' : 'Filter Starred'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleStudyStarredDeck}
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold transition flex items-center space-x-1.5 shadow-xs cursor-pointer"
                  data-keep-color
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Study Starred Deck ({pinnedFormulas.length})</span>
                </button>
              </>
            )}
          </div>
        </div>

        {pinnedFormulas.length === 0 ? (
          <div className="px-3 py-2 rounded-xl bg-stone-50 dark:bg-[#09132B] border border-dashed border-stone-300 dark:border-[#2B447A] text-xs text-stone-500 dark:text-stone-400 flex items-center space-x-2">
            <Star className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Tap Star on any equation to pin it here.</span>
          </div>
        ) : (
          isPinnedShelfOpen && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
              {pinnedFormulas.map(pf => (
                <div
                  key={pf.id}
                  className="p-3 rounded-2xl bg-stone-50 dark:bg-[#09132B] border border-stone-200 dark:border-[#2B447A] hover:border-amber-400 transition flex flex-col justify-between gap-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono">
                        <span
                          data-keep-color
                          className={`px-1.5 py-0.5 rounded font-black ${
                            pf.area === 'PSAD'
                              ? 'bg-orange-600 text-white'
                              : pf.area === 'HPGE'
                              ? 'bg-sky-600 text-white'
                              : 'bg-violet-600 text-white'
                          }`}
                        >
                          {pf.area}
                        </span>
                        <span className="text-stone-500 dark:text-stone-400 truncate">
                          {pf.topic}
                        </span>
                      </div>
                      <h4 className="text-xs font-extrabold text-stone-900 dark:text-stone-100 mt-1 line-clamp-1">
                        {pf.title}
                      </h4>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleBookmark(pf.id)}
                      className="p-1 rounded-lg text-amber-500 hover:bg-rose-500/15 hover:text-rose-500 transition shrink-0 cursor-pointer"
                      title="Unpin formula"
                      aria-label={`Unpin ${pf.title}`}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Quick KaTeX Preview */}
                  <div
                    data-keep-color
                    className="px-2.5 py-1.5 rounded-xl bg-[#071810] border border-emerald-500/35 text-emerald-300 overflow-x-auto"
                  >
                    <KatexEquation latex={pf.latex} className="text-[11px]" />
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-0.5">
                    <button
                      type="button"
                      onClick={() => handleJumpToCodexCard(pf)}
                      className="text-[11px] font-mono font-bold text-stone-600 dark:text-sky-300 hover:text-amber-500 flex items-center space-x-1 transition cursor-pointer"
                    >
                      <ArrowUpRight className="w-3 h-3" />
                      <span>Open in Codex</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleOpenInFlashcardDeck(pf.id, true)}
                      className="text-[11px] font-mono font-bold text-orange-600 dark:text-amber-400 hover:underline flex items-center space-x-1 transition cursor-pointer"
                    >
                      <Layers className="w-3 h-3" />
                      <span>Flashcard</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </div>

      {/* ===================================================================== */}
      {/* COMPACT TOOLBAR: TOPIC DRAWER BUTTON + SEARCH + STATUS + CONTROLS     */}
      {/* ===================================================================== */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-4 shadow-xs space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-center">
          {/* Topics Drawer Menu Trigger */}
          <div className="md:col-span-4">
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                setIsTopicDrawerOpen(true);
              }}
              className="w-full px-3.5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-mono font-bold flex items-center justify-between gap-2 shadow-xs transition cursor-pointer"
              data-keep-color
            >
              <span className="flex items-center space-x-2 min-w-0">
                <ListTree className="w-4 h-4 shrink-0" />
                <span className="truncate">
                  {selectedTopic === 'ALL'
                    ? `Topics Drawer (${availableTopicsInArea.length})`
                    : selectedTopic}
                </span>
              </span>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </button>
          </div>

          {/* Search Input */}
          <div className="md:col-span-4 relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search formula, symbol, Whitney, p.29..."
              className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl pl-10 pr-8 py-2.5 text-xs sm:text-sm text-stone-900 dark:text-stone-100 outline-none focus:ring-2 focus:ring-amber-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Format / Starred Filter Dropdown */}
          <div className="md:col-span-2">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as FormulaFilterType)}
              aria-label="Filter by format or status"
              className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100 outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">All Cards ({areaFormulas.length})</option>
              <option value="bookmarked">Starred ({starredInAreaCount})</option>
              <option value="diagrams">With Diagrams ({diagramCountInArea})</option>
              <option value="text">
                Text-Only ({areaFormulas.length - diagramCountInArea})
              </option>
              <option value="unmastered">
                Needs Mastery ({areaFormulas.length - masteredInArea})
              </option>
            </select>
          </div>

          {/* Pin Starred First Toggle */}
          <div className="md:col-span-2">
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                setPinStarredFirst(prev => !prev);
              }}
              className={`w-full px-3 py-2.5 rounded-xl border text-xs font-mono font-bold flex items-center justify-center space-x-1.5 transition cursor-pointer ${
                pinStarredFirst
                  ? 'bg-amber-500/15 border-amber-500/50 text-amber-700 dark:text-amber-300'
                  : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400'
              }`}
              title="Sort starred equations to the top of each drawer and flashcard deck"
            >
              <Pin className="w-3.5 h-3.5" />
              <span>{pinStarredFirst ? 'Starred First' : 'Page Order'}</span>
            </button>
          </div>
        </div>

        {/* Active Topic Pill + Expand/Collapse Drawers Row */}
        {(selectedTopic !== 'ALL' || (viewMode === 'codex' && formulasByTopic.length > 1)) && (
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-100 dark:border-stone-800 text-xs font-mono">
            <div className="flex flex-wrap items-center gap-2">
              {selectedTopic !== 'ALL' && (
                <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-700 dark:text-amber-300 font-bold">
                  <span>{selectedTopic}</span>
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedTopic('ALL');
                    }}
                    className="hover:text-rose-500 cursor-pointer"
                    aria-label="Clear selected topic"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              )}
            </div>

            {viewMode === 'codex' && formulasByTopic.length > 1 && (
              <button
                type="button"
                onClick={handleToggleAllTopicDrawers}
                className="px-3 py-1 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 border border-stone-200 dark:border-stone-700 font-bold transition cursor-pointer flex items-center space-x-1.5"
              >
                <FolderOpen className="w-3.5 h-3.5" />
                <span>{allTopicDrawersOpen ? 'Collapse All Drawers' : `Expand All (${formulasByTopic.length})`}</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* ===================================================================== */}
      {/* EMPTY FILTER STATE                                                    */}
      {/* ===================================================================== */}
      {filteredFormulas.length === 0 ? (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-10 text-center space-y-3">
          <Sparkles className="w-8 h-8 text-amber-500 mx-auto" />
          <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
            No formulas match the current filter
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400">
            Clear your search query or switch back to All Domains.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedArea('ALL');
              setSelectedTopic('ALL');
              setFilterType('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'flashcards' && isFormulaDrillCompleted ? (
        /* =================================================================== */
        /* MODE B COMPLETED: FORMULA DRILL SUBMITTED                           */
        /* =================================================================== */
        <div className="max-w-xl mx-auto w-full px-4 sm:px-6 py-10 text-center">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-8 shadow-xl space-y-6 text-stone-900 dark:text-stone-100">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center mx-auto shadow-lg">
              <Award className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Formula Drill Submitted
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Vault Formula Drill Complete!
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 max-w-sm mx-auto">
                Your formula ratings, mastery progress, and Bottle Caps have been recorded and submitted for cloud sync.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-3 border-y border-stone-100 dark:border-stone-800">
              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60">
                <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase">
                  Formulas Rated
                </span>
                <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono mt-1">
                  {drillReviewedIds.length}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60">
                <span className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase">
                  Mastered in Drill
                </span>
                <div className="text-3xl font-black text-amber-600 dark:text-amber-400 font-mono mt-1">
                  {drillMasteredIds.length}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setDeckIndex(0);
                  setIsCardFlipped(false);
                  setDrillReviewedIds([]);
                  setDrillMasteredIds([]);
                  setIsFormulaDrillCompleted(false);
                }}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition shadow-sm cursor-pointer"
                data-keep-color
              >
                Drill Deck Again
              </button>
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setIsFormulaDrillCompleted(false);
                  setViewMode('codex');
                }}
                className="px-6 py-3 rounded-xl border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 font-bold text-xs sm:text-sm transition cursor-pointer"
              >
                Back to Formula Codex
              </button>
            </div>
          </div>
        </div>
      ) : viewMode === 'flashcards' && currentDeckFormula ? (
        /* =================================================================== */
        /* MODE B: FALLOUT-THEMED FLASHCARD DECK                               */
        /* =================================================================== */
        <div className="max-w-4xl mx-auto w-full space-y-4">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-3.5 sm:p-4 flex flex-wrap items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                Card {deckIndex + 1} / {deckIds.length}
              </span>
              {drillReviewedIds.length > 0 && (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-bold">
                  {drillReviewedIds.length} rated
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleShuffleDeck}
                className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-mono font-bold flex items-center space-x-1.5 transition cursor-pointer"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Shuffle</span>
              </button>
              <button
                type="button"
                onClick={handleCompleteFormulaDrill}
                className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold flex items-center space-x-1.5 transition shadow-xs cursor-pointer"
                data-keep-color
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Finish &amp; Submit Drill</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('codex')}
                className="px-3 py-1.5 rounded-xl border border-stone-200 dark:border-stone-700 hover:border-amber-500 text-stone-700 dark:text-stone-300 text-xs font-mono font-bold transition cursor-pointer"
              >
                Back to Codex
              </button>
            </div>
          </div>

          <FalloutFormulaFlashcard
            key={currentDeckFormula.id}
            formula={currentDeckFormula}
            isFlipped={isCardFlipped}
            onFlip={() => setIsCardFlipped(prev => !prev)}
            progress={progressMap[currentDeckFormula.id]}
            isBookmarked={bookmarkSet.has(currentDeckFormula.id)}
            onToggleBookmark={() => handleToggleBookmark(currentDeckFormula.id)}
            onRateMastery={(status) => handleRateFormula(currentDeckFormula.id, status, true)}
            onZoomDiagram={(src, caption, alt) => setZoomedDiagram({ src, caption, alt })}
            cardIndex={deckIndex}
            totalCards={deckIds.length}
            onPrev={
              deckIndex > 0
                ? () => {
                    soundManager.playClick();
                    setIsCardFlipped(false);
                    setDeckIndex(prev => prev - 1);
                  }
                : undefined
            }
            onNext={
              deckIndex < deckIds.length - 1
                ? () => {
                    soundManager.playClick();
                    setIsCardFlipped(false);
                    setDeckIndex(prev => prev + 1);
                  }
                : undefined
            }
            themeMode={themeMode}
          />
        </div>
      ) : (
        /* =================================================================== */
        /* MODE A: COLLAPSIBLE TOPIC DRAWERS (SAVES SPACE & IMAGE MEMORY)      */
        /* =================================================================== */
        <div className="space-y-3">
          {formulasByTopic.map(group => {
            const vis = getDomainVisual(group.domain);
            const isDrawerExpanded = openTopicKeys.has(group.key);
            const groupMastered = group.items.filter(
              f => progressMap[f.id]?.status === 'mastered'
            ).length;
            const groupStarred = group.items.filter(f => bookmarkSet.has(f.id)).length;

            return (
              <section
                key={group.key}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl overflow-hidden shadow-xs transition-colors"
              >
                {/* Clickable Topic Drawer Header */}
                <button
                  type="button"
                  onClick={() => toggleTopicDrawer(group.key)}
                  aria-expanded={isDrawerExpanded}
                  className="w-full p-4 sm:p-5 text-left flex flex-wrap items-center justify-between gap-3 hover:bg-stone-50/90 dark:hover:bg-stone-800/50 transition cursor-pointer"
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <span
                      data-keep-color
                      className={`p-2 rounded-xl text-white shrink-0 ${vis.badgeBg}`}
                    >
                      {vis.icon}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                        <span
                          data-keep-color
                          className={`px-1.5 py-0.5 rounded font-black ${
                            group.area === 'PSAD'
                              ? 'bg-orange-600 text-white'
                              : group.area === 'HPGE'
                              ? 'bg-sky-600 text-white'
                              : 'bg-violet-600 text-white'
                          }`}
                        >
                          {group.area}
                        </span>
                        <span className="font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                          {group.domain}
                        </span>
                      </div>
                      <h2 className="text-base sm:text-lg font-black text-stone-900 dark:text-stone-100 font-mono truncate mt-0.5">
                        {group.topic}
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    {groupStarred > 0 && (
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/35 flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{groupStarred}</span>
                      </span>
                    )}
                    <span className="text-xs font-mono font-bold text-stone-500 dark:text-stone-400">
                      {groupMastered}/{group.items.length}
                    </span>
                    <span className="p-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                      {isDrawerExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </div>
                </button>

                {/* Expanded Formula Cards Grid (Mounted only when drawer is open!) */}
                {isDrawerExpanded && (
                  <div className="p-4 sm:p-5 pt-2 border-t border-stone-200 dark:border-stone-800 bg-stone-50/40 dark:bg-stone-950/30 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
                    {group.items.map(formula => {
                      const isBookmarked = bookmarkSet.has(formula.id);
                      const isMastered = progressMap[formula.id]?.status === 'mastered';

                      return (
                        <article
                          key={formula.id}
                          id={`formula-card-${formula.id}`}
                          className={`bg-white dark:bg-stone-900 border rounded-3xl p-5 sm:p-6 shadow-xs flex flex-col justify-between space-y-4 transition ${
                            isBookmarked
                              ? 'border-amber-500/80 ring-1 ring-amber-500/25'
                              : 'border-stone-200 dark:border-stone-800 hover:border-amber-500/60'
                          }`}
                        >
                          <div className="space-y-4">
                            {/* Card Top Meta */}
                            <div className="flex items-start justify-between gap-3">
                              <div className="space-y-1">
                                <span
                                  data-keep-color
                                  className={`inline-block px-2 py-0.5 rounded font-mono text-[10px] font-black ${
                                    formula.area === 'PSAD'
                                      ? 'bg-orange-600 text-white'
                                      : formula.area === 'HPGE'
                                      ? 'bg-sky-600 text-white'
                                      : 'bg-violet-600 text-white'
                                  }`}
                                >
                                  {formula.area}
                                </span>
                                <h3 className="text-base sm:text-lg font-extrabold text-stone-900 dark:text-stone-100 leading-snug">
                                  {formula.title}
                                </h3>
                              </div>

                              <button
                                type="button"
                                onClick={() => handleToggleBookmark(formula.id)}
                                data-keep-color={isBookmarked ? true : undefined}
                                className={`px-2.5 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center space-x-1 transition shrink-0 cursor-pointer ${
                                  isBookmarked
                                    ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-xs'
                                    : 'bg-stone-50 dark:bg-stone-800 text-stone-500 dark:text-stone-300 hover:text-amber-500 border-stone-200 dark:border-stone-700 hover:border-amber-400'
                                }`}
                                title={isBookmarked ? 'Unstar / unpin equation' : 'Star & pin equation'}
                                aria-label={isBookmarked ? 'Unpin starred formula' : 'Star and pin formula'}
                              >
                                <Star className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                                <span>{isBookmarked ? 'Pinned' : 'Star'}</span>
                              </button>
                            </div>

                            {/* Primary KaTeX Equation Box */}
                            <div
                              data-keep-color
                              className="p-3.5 sm:p-4 rounded-2xl border-2 border-emerald-500/35 bg-[#071810] text-emerald-300 overflow-x-auto shadow-inner"
                            >
                              <KatexEquation
                                latex={formula.latex}
                                className="text-sm sm:text-base"
                              />
                            </div>

                            {/* Secondary Equations */}
                            {formula.secondaryEquations &&
                              formula.secondaryEquations.length > 0 && (
                                <div className="space-y-2">
                                  {formula.secondaryEquations.map((eq, i) => (
                                    <div
                                      key={i}
                                      className="p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700/80 overflow-x-auto"
                                    >
                                      <div className="text-[11px] font-mono font-bold text-orange-600 dark:text-amber-400 mb-0.5">
                                        {eq.label}
                                        {eq.condition ? ` (${eq.condition})` : ''}
                                      </div>
                                      <KatexEquation latex={eq.latex} className="text-xs sm:text-sm" />
                                    </div>
                                  ))}
                                </div>
                              )}

                            {/* Cropped Diagram Thumbnails */}
                            {formula.diagrams && formula.diagrams.length > 0 && (
                              <div
                                className={`grid gap-2.5 ${
                                  formula.diagrams.length === 1
                                    ? 'grid-cols-1'
                                    : 'grid-cols-1 sm:grid-cols-2'
                                }`}
                              >
                                {formula.diagrams.map((diag, i) => (
                                  <button
                                    key={i}
                                    type="button"
                                    onClick={() =>
                                      setZoomedDiagram({
                                        src: diag.src,
                                        caption: diag.caption,
                                        alt: diag.alt
                                      })
                                    }
                                    data-keep-color
                                    className="group relative bg-white border border-stone-200 dark:border-stone-700 hover:border-amber-500 rounded-2xl p-2.5 flex flex-col items-center justify-center transition cursor-zoom-in"
                                    title="Tap to zoom diagram"
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
                                      className="mt-1.5 text-[11px] text-stone-600 text-center leading-snug"
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
                            )}

                            {/* Reference Tables */}
                            {formula.tables && formula.tables.length > 0 && (
                              <div className="space-y-2">
                                {formula.tables.map((tbl, tIdx) => (
                                  <div
                                    key={tIdx}
                                    className="rounded-xl border border-stone-200 dark:border-stone-700 overflow-hidden text-xs"
                                  >
                                    <div className="px-3 py-1.5 bg-stone-100 dark:bg-stone-800 font-mono font-bold text-[11px] text-stone-800 dark:text-amber-300 border-b border-stone-200 dark:border-stone-700">
                                      {tbl.title}
                                    </div>
                                    <div className="overflow-x-auto">
                                      <table className="w-full text-left border-collapse">
                                        <thead>
                                          <tr className="bg-stone-50 dark:bg-stone-800/50 text-stone-600 dark:text-stone-300">
                                            {tbl.headers.map((h, hi) => (
                                              <th key={hi} className="px-3 py-1 font-mono font-bold">
                                                {h}
                                              </th>
                                            ))}
                                          </tr>
                                        </thead>
                                        <tbody>
                                          {tbl.rows.map((row, ri) => (
                                            <tr
                                              key={ri}
                                              className="border-t border-stone-100 dark:border-stone-800 text-stone-700 dark:text-stone-300"
                                            >
                                              {row.map((cell, ci) => (
                                                <td key={ci} className="px-3 py-1 font-mono">
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

                            {/* Variables */}
                            {formula.variables && formula.variables.length > 0 && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                                {formula.variables.map((v, i) => (
                                  <div
                                    key={i}
                                    className="px-2.5 py-1.5 rounded-lg bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700/80 text-stone-700 dark:text-stone-300"
                                  >
                                    <span className="font-mono font-bold text-orange-600 dark:text-amber-400 mr-1">
                                      {v.symbol}:
                                    </span>
                                    <span>{v.meaning}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Notes & Errata Alerts */}
                            {formula.notes && formula.notes.length > 0 && (
                              <div className="p-2.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-300/70 dark:border-amber-800/60 text-xs text-amber-950 dark:text-amber-200 space-y-1">
                                {formula.notes.map((n, i) => (
                                  <div key={i} className="flex items-start space-x-1.5">
                                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                                    <span>{n}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Footer Actions */}
                          <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex flex-wrap items-center justify-between gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                soundManager.playClick();
                                handleRateFormula(
                                  formula.id,
                                  isMastered ? 'learning' : 'mastered',
                                  false
                                );
                              }}
                              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold border transition flex items-center space-x-1.5 cursor-pointer ${
                                isMastered
                                  ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-700 dark:text-emerald-300'
                                  : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:border-emerald-500'
                              }`}
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>{isMastered ? 'Mastered' : 'Mark Mastered'}</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleOpenInFlashcardDeck(formula.id)}
                              className="px-3.5 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-mono font-bold flex items-center space-x-1.5 transition shadow-xs cursor-pointer"
                            >
                              <Layers className="w-3.5 h-3.5" />
                              <span>Fallout Flashcard</span>
                            </button>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      )}

      {/* ===================================================================== */}
      {/* SLIDE-OVER AREA & TOPICS DRAWER MENU (PORTAL)                         */}
      {/* ===================================================================== */}
      {isTopicDrawerOpen && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[9999] overflow-hidden text-stone-900 dark:text-stone-100 font-sans"
          role="dialog"
          aria-modal="true"
          aria-label="Formulas Topics Navigation Drawer"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm cursor-pointer"
            onClick={() => setIsTopicDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Left Slide-Over Drawer Panel */}
          <div className="fixed inset-y-0 left-0 max-w-full flex pr-6 sm:pr-10">
            <div className="w-screen max-w-sm bg-white dark:bg-[#0E1B38] border-r border-stone-200 dark:border-[#2B447A] shadow-2xl flex flex-col h-full max-h-dvh z-10 overflow-hidden pt-safe pb-safe pl-safe">
              {/* Drawer Header */}
              <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-[#2B447A] flex items-center justify-between shrink-0 bg-stone-50/90 dark:bg-[#09132B]">
                <div className="flex items-center space-x-2.5">
                  <span className="p-2 rounded-xl bg-orange-600 text-white shadow-xs" data-keep-color>
                    <ListTree className="w-4 h-4" />
                  </span>
                  <h3 className="text-sm sm:text-base font-black font-mono text-stone-900 dark:text-amber-400">
                    Formula Topics Menu
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsTopicDrawerOpen(false)}
                  className="p-2 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition cursor-pointer"
                  aria-label="Close topics drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Search Filter */}
              <div className="p-3 border-b border-stone-200 dark:border-[#2B447A] bg-white dark:bg-[#0E1B38] space-y-2 shrink-0">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={drawerTopicFilter}
                    onChange={(e) => setDrawerTopicFilter(e.target.value)}
                    placeholder="Filter topic name..."
                    className="w-full bg-stone-50 dark:bg-[#09132B] border border-stone-200 dark:border-[#2B447A] rounded-xl pl-8 pr-7 py-2 text-xs text-stone-900 dark:text-stone-100 outline-none focus:ring-2 focus:ring-amber-500"
                  />
                  {drawerTopicFilter && (
                    <button
                      type="button"
                      onClick={() => setDrawerTopicFilter('')}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 cursor-pointer"
                      aria-label="Clear topic filter"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleSelectTopicFromDrawer('ALL', 'ALL')}
                    className={`flex-1 px-3 py-2 rounded-xl text-xs font-mono font-bold border transition flex items-center justify-between cursor-pointer ${
                      selectedArea === 'ALL' && selectedTopic === 'ALL'
                        ? 'bg-amber-500 text-stone-950 border-amber-400'
                        : 'bg-stone-50 dark:bg-[#162852] text-stone-700 dark:text-stone-200 border-stone-200 dark:border-[#2B447A] hover:border-amber-400'
                    }`}
                    data-keep-color={selectedArea === 'ALL' && selectedTopic === 'ALL' ? true : undefined}
                  >
                    <span>All Domains</span>
                    <span>{ALL_FORMULAS.length}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleToggleAllDrawerSections}
                    className="px-3 py-2 rounded-xl text-xs font-mono font-bold border bg-stone-100 dark:bg-[#162852] hover:bg-stone-200 dark:hover:bg-[#1f3569] text-stone-700 dark:text-stone-200 border-stone-200 dark:border-[#2B447A] transition flex items-center space-x-1.5 shrink-0 cursor-pointer"
                    title={isAnyDrawerExpanded ? 'Collapse all area & domain sections' : 'Expand all area & domain sections'}
                  >
                    {isAnyDrawerExpanded ? (
                      <>
                        <ChevronsUp className="w-3.5 h-3.5" />
                        <span>Collapse All</span>
                      </>
                    ) : (
                      <>
                        <ChevronsDown className="w-3.5 h-3.5" />
                        <span>Expand All</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Scrollable Area-by-Area Collapsible Topic Directory */}
              <div className="p-3 sm:p-4 space-y-3 flex-1 overflow-y-auto overscroll-contain">
                {FORMULA_AREAS.map(area => {
                  const areaTotal =
                    area === 'HPGE'
                      ? HPGE_FORMULAS.length
                      : area === 'PSAD'
                      ? PSAD_FORMULAS.length
                      : MSTE_FORMULAS.length;
                  const domainGroups = FORMULA_TOPICS_BY_AREA[area] || [];
                  const qTopic = drawerTopicFilter.trim().toLowerCase();
                  const isAreaExpanded = qTopic ? true : expandedDrawerAreas[area];

                  const areaBadgeClass =
                    area === 'HPGE'
                      ? 'bg-sky-600 text-white'
                      : area === 'PSAD'
                      ? 'bg-orange-600 text-white'
                      : 'bg-violet-600 text-white';

                  return (
                    <div
                      key={area}
                      className="rounded-2xl border border-stone-200 dark:border-[#2B447A] overflow-hidden bg-stone-50/70 dark:bg-[#09132B]"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          const nextOpen = !expandedDrawerAreas[area];
                          setExpandedDrawerAreas(prev => ({
                            ...prev,
                            [area]: nextOpen
                          }));
                          if (nextOpen) {
                            // Ensure domain groups inside this area are visible when user explicitly opens it
                            setCollapsedDrawerDomains(prev => {
                              const next = new Set(prev);
                              for (const dg of domainGroups) {
                                next.delete(dg.domain);
                              }
                              return next;
                            });
                          }
                        }}
                        className="w-full px-3.5 py-2.5 flex items-center justify-between text-left hover:bg-stone-100 dark:hover:bg-[#162852]/70 transition cursor-pointer"
                      >
                        <div className="flex items-center space-x-2">
                          <span
                            data-keep-color
                            className={`px-2 py-0.5 rounded-md font-mono text-[11px] font-black ${areaBadgeClass}`}
                          >
                            {area}
                          </span>
                          <span className="text-xs font-mono font-bold text-stone-700 dark:text-stone-200">
                            {areaTotal} formulas
                          </span>
                        </div>
                        {isAreaExpanded ? (
                          <ChevronUp className="w-4 h-4 text-stone-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-stone-400" />
                        )}
                      </button>

                      {isAreaExpanded && (
                        <div className="px-2.5 pb-2.5 space-y-2 border-t border-stone-200/80 dark:border-[#2B447A]">
                          <button
                            type="button"
                            onClick={() => handleSelectTopicFromDrawer(area, 'ALL')}
                            className={`mt-2 w-full px-3 py-1.5 rounded-xl text-xs font-mono font-bold text-left flex items-center justify-between transition cursor-pointer ${
                              selectedArea === area && selectedTopic === 'ALL'
                                ? 'bg-orange-600 text-white'
                                : 'bg-white dark:bg-[#162852] text-stone-700 dark:text-stone-200 hover:border-amber-400 border border-stone-200 dark:border-[#2B447A]'
                            }`}
                          >
                            <span>All {area} Topics</span>
                            <span>{areaTotal}</span>
                          </button>

                              {domainGroups.map(dg => {
                                const matchingTopics = dg.topics.filter(t =>
                                  !qTopic || t.toLowerCase().includes(qTopic) || dg.domain.toLowerCase().includes(qTopic)
                                );
                                if (matchingTopics.length === 0) return null;
                                const isDomainExpanded = qTopic ? true : !collapsedDrawerDomains.has(dg.domain);

                                return (
                                  <div key={dg.domain} className="space-y-1 pt-1">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setCollapsedDrawerDomains(prev => {
                                          const next = new Set(prev);
                                          if (next.has(dg.domain)) next.delete(dg.domain);
                                          else next.add(dg.domain);
                                          return next;
                                        })
                                      }
                                      className="w-full px-1.5 py-1 flex items-center justify-between text-left text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500 dark:text-sky-300 hover:text-amber-500 transition cursor-pointer"
                                    >
                                      <span className="truncate">{dg.domain}</span>
                                      {isDomainExpanded ? (
                                        <ChevronUp className="w-3.5 h-3.5 shrink-0" />
                                      ) : (
                                        <ChevronDown className="w-3.5 h-3.5 shrink-0" />
                                      )}
                                    </button>
                                    {isDomainExpanded && matchingTopics.map(topic => {
                                      const topicItems =
                                        FORMULAS_BY_TOPIC_KEY.get(getTopicKey(area, dg.domain, topic)) || [];
                                      const topicStarred = topicItems.filter(f =>
                                        bookmarkSet.has(f.id)
                                      ).length;
                                      const isSelected = selectedTopic === topic && (selectedArea === 'ALL' || selectedArea === area);

                                      return (
                                        <button
                                          key={topic}
                                          type="button"
                                          onClick={() => handleSelectTopicFromDrawer(area, topic)}
                                          className={`w-full px-2.5 py-2 rounded-xl text-left text-xs transition flex items-center justify-between gap-2 cursor-pointer ${
                                            isSelected
                                              ? 'bg-amber-500 text-stone-950 font-black shadow-xs'
                                              : 'bg-white dark:bg-[#0E1B38] text-stone-800 dark:text-stone-200 hover:bg-amber-500/10 border border-stone-200/80 dark:border-[#2B447A]'
                                          }`}
                                          data-keep-color={isSelected ? true : undefined}
                                        >
                                          <span className="truncate font-semibold">{topic}</span>
                                          <span className="flex items-center space-x-1.5 shrink-0 font-mono text-[11px]">
                                            {topicStarred > 0 && (
                                              <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                                            )}
                                            <span className="opacity-80">{topicItems.length}</span>
                                          </span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                );
                              })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* ===================================================================== */}
      {/* HIGH-RES CROPPED DIAGRAM LIGHTBOX MODAL                               */}
      {/* ===================================================================== */}
      {zoomedDiagram &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-stone-950/85 backdrop-blur-sm flex items-center justify-center p-4 pl-safe pr-safe overflow-y-auto"
            onClick={() => setZoomedDiagram(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              data-keep-color
              className="relative max-w-3xl w-full bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border-2 border-amber-500/60 my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setZoomedDiagram(null)}
                data-keep-color
                className="absolute top-3 right-3 p-2 rounded-xl bg-stone-900 text-white hover:bg-stone-800 transition cursor-pointer"
                aria-label="Close zoomed diagram"
              >
                <X className="w-4 h-4" />
              </button>
              <img
                src={zoomedDiagram.src}
                alt={zoomedDiagram.alt}
                decoding="async"
                className="w-full max-h-[75dvh] object-contain mx-auto"
              />
              <p data-keep-color className="mt-3 text-center text-xs sm:text-sm font-mono text-stone-700">
                {zoomedDiagram.caption}
              </p>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};
