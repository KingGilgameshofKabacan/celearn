import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  CEQuestion,
  CEArea
} from '../types';
import {
  CE_AREAS,
  SUBTOPICS_BY_AREA
} from '../data/questions';
import { isInDataBank } from '../utils/storage';
import {
  Search,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  FileText,
  Clock,
  Trash2,
  SlidersHorizontal,
  ArrowUp,
  AlertTriangle
} from 'lucide-react';
import { soundManager } from '../utils/audio';

interface DictionaryViewProps {
  questions: CEQuestion[];
  bookmarks: number[];
  onToggleBookmark: (qid: number) => void;
  onOpenPdfScanner?: () => void;
  onOpenRecentlyAdded?: () => void;
  recentlyAddedCount?: number;
  onDeleteCustomTerm?: (id: number) => void;
}

export const DictionaryView: React.FC<DictionaryViewProps> = ({
  questions,
  bookmarks,
  onToggleBookmark,
  onOpenPdfScanner,
  onOpenRecentlyAdded,
  recentlyAddedCount = 0,
  onDeleteCustomTerm
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedArea, setSelectedArea] = useState<'ALL' | CEArea>('ALL');
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>('ALL');
  const [onlyBookmarks, setOnlyBookmarks] = useState<boolean>(false);
  const [onlyRecentlyAdded, setOnlyRecentlyAdded] = useState<boolean>(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [termToDelete, setTermToDelete] = useState<CEQuestion | null>(null);

  // Progressive rendering for buttery 60 FPS scrolling
  const PAGE_SIZE = 40;
  const [displayLimit, setDisplayLimit] = useState<number>(PAGE_SIZE);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const availableSubtopics = useMemo(() => {
    if (selectedArea === 'ALL') {
      return Object.values(SUBTOPICS_BY_AREA).flat();
    }
    return SUBTOPICS_BY_AREA[selectedArea] || [];
  }, [selectedArea]);

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      if (selectedArea !== 'ALL' && q.area !== selectedArea) return false;
      if (selectedSubtopic !== 'ALL' && q.subtopic !== selectedSubtopic) return false;
      if (onlyBookmarks && !bookmarks.includes(q.id)) return false;
      if (onlyRecentlyAdded && isInDataBank(q)) return false;

      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const inQuestion = q.question.toLowerCase().includes(query);
        const inAnswer = q.answer.toLowerCase().includes(query);
        const inExplanation = q.explanation.toLowerCase().includes(query);
        const inSubtopic = q.subtopic.toLowerCase().includes(query);
        if (!inQuestion && !inAnswer && !inExplanation && !inSubtopic) {
          return false;
        }
      }

      return true;
    });
  }, [questions, selectedArea, selectedSubtopic, onlyBookmarks, onlyRecentlyAdded, searchTerm, bookmarks]);

  // Reset pagination limit when search or filter criteria change
  useEffect(() => {
    setDisplayLimit(PAGE_SIZE);
  }, [searchTerm, selectedArea, selectedSubtopic, onlyBookmarks, onlyRecentlyAdded]);

  // Infinite progressive scroll observer: automatically loads more items smoothly as user scrolls
  useEffect(() => {
    const sentinel = loadMoreRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setDisplayLimit(prev => Math.min(prev + PAGE_SIZE, filteredQuestions.length));
        }
      },
      { rootMargin: '300px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [filteredQuestions.length]);

  // Scroll to top indicator
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const visibleQuestions = useMemo(() => {
    return filteredQuestions.slice(0, displayLimit);
  }, [filteredQuestions, displayLimit]);

  const handleCopy = (q: CEQuestion, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`Term: ${q.answer}\nDefinition: ${q.question}`);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleConfirmDelete = () => {
    if (!termToDelete) return;
    soundManager.playClick();
    onDeleteCustomTerm?.(termToDelete.id);
    setTermToDelete(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto w-full my-6 p-4 sm:p-6 lg:p-8 space-y-6">
      
      {/* Search Bar & Filters Box */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 shadow-xs space-y-4 text-stone-900 dark:text-stone-100 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold tracking-tight">
              Terminology Explorer
            </h2>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Civil Engineering Table of Specifications (TOS) & authentic board review terms
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            {onOpenRecentlyAdded && (
              <button
                onClick={onOpenRecentlyAdded}
                className="px-3 py-2 rounded-xl text-xs font-bold bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 transition flex items-center space-x-1.5 shadow-xs shrink-0 interactive-btn"
                title="Manage recently added terms"
              >
                <Clock className="w-3.5 h-3.5 text-orange-500" />
                <span>Recently Added</span>
                <span className="px-1.5 py-0.2 rounded-md bg-orange-500/15 text-orange-600 dark:text-orange-400 font-mono text-[10px]">
                  {recentlyAddedCount}
                </span>
              </button>
            )}

            {onOpenPdfScanner && (
              <button
                onClick={onOpenPdfScanner}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-orange-600 hover:bg-orange-500 text-white transition flex items-center space-x-1.5 shadow-xs shrink-0 interactive-btn"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Scan Reviewer</span>
              </button>
            )}

            <span className="text-xs text-stone-500 dark:text-stone-400 font-mono bg-stone-100 dark:bg-stone-800 px-2.5 py-2 rounded-xl border border-stone-200 dark:border-stone-700">
              {filteredQuestions.length} terms
            </span>
          </div>
        </div>

        {/* Input */}
        <div className="relative">
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder="Search questions, terms, codes, or formulas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-2xl pl-11 pr-4 py-3 text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-stone-200 dark:border-stone-800">
          <div>
            <label className="block text-xs font-bold text-stone-500 dark:text-stone-400 uppercase mb-1">Area</label>
            <select
              value={selectedArea}
              onChange={(e) => {
                setSelectedArea(e.target.value as any);
                setSelectedSubtopic('ALL');
              }}
              className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 rounded-xl px-3 py-2 text-xs font-medium outline-none cursor-pointer"
            >
              <option value="ALL">All Areas</option>
              {CE_AREAS.map(a => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-stone-500 dark:text-stone-400 uppercase mb-1">Subtopic</label>
            <select
              value={selectedSubtopic}
              onChange={(e) => setSelectedSubtopic(e.target.value)}
              className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 rounded-xl px-3 py-2 text-xs font-medium outline-none cursor-pointer"
            >
              <option value="ALL">All Subtopics</option>
              {availableSubtopics.map(sub => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>

          <div className="flex items-end space-x-2">
            <button
              onClick={() => {
                setOnlyBookmarks(prev => !prev);
                if (!onlyBookmarks) setOnlyRecentlyAdded(false);
              }}
              className={`flex-1 py-2 px-3 rounded-xl border text-xs font-bold transition flex items-center justify-center space-x-1.5 interactive-btn ${
                onlyBookmarks
                  ? 'bg-amber-100 dark:bg-amber-950/60 border-amber-300 text-amber-800 dark:text-amber-400'
                  : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Bookmarked ({bookmarks.length})</span>
            </button>

            {recentlyAddedCount > 0 && (
              <button
                onClick={() => {
                  setOnlyRecentlyAdded(prev => !prev);
                  if (!onlyRecentlyAdded) setOnlyBookmarks(false);
                }}
                title="Show only terms recently added by users (excluding built-in data bank)"
                className={`py-2 px-3 rounded-xl border text-xs font-bold transition flex items-center justify-center space-x-1.5 interactive-btn ${
                  onlyRecentlyAdded
                    ? 'bg-orange-100 dark:bg-orange-950/60 border-orange-400 text-orange-800 dark:text-orange-300'
                    : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300'
                }`}
              >
                <Clock className="w-3.5 h-3.5 text-orange-500" />
                <span>Recent ({recentlyAddedCount})</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Banner if filtering by recently added */}
      {onlyRecentlyAdded && (
        <div className="p-4 rounded-2xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-orange-900 dark:text-orange-200">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-orange-500 shrink-0" />
            <span>
              Showing <strong>{filteredQuestions.length}</strong> recently added user terms (excluding built-in data bank).
            </span>
          </div>
          {onOpenRecentlyAdded && (
            <button
              onClick={onOpenRecentlyAdded}
              className="px-3 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold transition shadow-xs flex items-center space-x-1 interactive-btn"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Manage / Batch Delete</span>
            </button>
          )}
        </div>
      )}

      {/* Confirmation Dialog for Term Deletion (No window.confirm!) */}
      {termToDelete && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl max-w-md w-full p-6 shadow-2xl text-stone-900 dark:text-stone-100 space-y-4">
            <div className="flex items-center space-x-3 text-rose-600 dark:text-rose-400">
              <div className="p-2 rounded-xl bg-rose-500/10">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold">Delete Custom Term</h3>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400">
              Are you sure you want to delete <strong className="font-mono text-stone-900 dark:text-stone-100">"{termToDelete.answer}"</strong>? This user-added term will be removed from your active review bank.
            </p>
            <div className="flex items-center justify-end space-x-2 pt-2">
              <button
                onClick={() => setTermToDelete(null)}
                className="px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold hover:bg-stone-200"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition shadow-xs"
              >
                Delete Term
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms List (Optimized Progressive Rendering with ce-term-card) */}
      <div className="space-y-3">
        {visibleQuestions.map((q) => {
          const isExpanded = expandedId === q.id;
          const isBookmarked = bookmarks.includes(q.id);
          const isCustomUserTerm = !isInDataBank(q);

          return (
            <div
              key={q.id}
              onClick={() => setExpandedId(isExpanded ? null : q.id)}
              className="ce-term-card bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-orange-300 dark:hover:border-stone-700 rounded-2xl p-5 transition shadow-xs cursor-pointer space-y-2.5 text-stone-900 dark:text-stone-100 transform-gpu"
            >
              <div className="flex items-start justify-between gap-3 text-xs">
                <div className="flex items-center space-x-2 flex-wrap">
                  <span className="font-mono text-stone-400">#{q.id}</span>
                  <span>·</span>
                  <span className="font-bold text-orange-600 dark:text-orange-400">
                    {q.area}
                  </span>
                  <span className="text-stone-500 dark:text-stone-400 hidden sm:inline">{q.subtopic}</span>
                  {isCustomUserTerm && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300 border border-orange-200 dark:border-orange-800 flex items-center space-x-1">
                      <Clock className="w-2.5 h-2.5" />
                      <span>Recently Added</span>
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={(e) => handleCopy(q, e)}
                    className="p-1 rounded text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition"
                    title="Copy text"
                  >
                    {copiedId === q.id ? <Check className="w-3.5 h-3.5 text-orange-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>

                  {isCustomUserTerm && onDeleteCustomTerm && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setTermToDelete(q);
                      }}
                      className="p-1 rounded text-stone-400 hover:text-rose-600 transition"
                      title="Delete this recently added term"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(q.id);
                    }}
                    className={`p-1 rounded transition ${isBookmarked ? 'text-amber-500' : 'text-stone-400'}`}
                  >
                    <Bookmark className="w-3.5 h-3.5 fill-current" />
                  </button>
                  {isExpanded ? <ChevronUp className="w-4 h-4 text-stone-400" /> : <ChevronDown className="w-4 h-4 text-stone-400" />}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold leading-snug">
                  {q.question}
                </p>
                <div className="mt-1.5 text-sm text-orange-600 dark:text-orange-400 font-bold font-mono">
                  &rarr; {q.answer}
                </div>
              </div>

              {isExpanded && (
                <div className="pt-3 border-t border-stone-200 dark:border-stone-800 space-y-2 text-xs">
                  <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 leading-relaxed text-stone-700 dark:text-stone-300">
                    <strong className="text-stone-900 dark:text-stone-100 block mb-0.5">Reference:</strong>
                    {q.explanation}
                  </div>
                  <div className="text-stone-500 dark:text-stone-400">
                    <strong>Choices:</strong> {q.choices.join(' · ')}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Progressive Load More / Infinite Sentinel */}
      {visibleQuestions.length < filteredQuestions.length && (
        <div ref={loadMoreRef} className="py-6 flex flex-col items-center justify-center space-y-2">
          <p className="text-xs text-stone-500 dark:text-stone-400">
            Showing <strong>{visibleQuestions.length}</strong> of <strong>{filteredQuestions.length}</strong> terms
          </p>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setDisplayLimit(prev => Math.min(prev + PAGE_SIZE, filteredQuestions.length))}
              className="px-4 py-2 bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl text-xs font-bold text-stone-800 dark:text-stone-200 transition shadow-xs interactive-btn"
            >
              Load More Terms
            </button>
            <button
              onClick={() => setDisplayLimit(filteredQuestions.length)}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-xs font-bold transition shadow-xs interactive-btn"
            >
              Show All ({filteredQuestions.length})
            </button>
          </div>
        </div>
      )}

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-orange-600 text-white shadow-xl hover:bg-orange-500 transition interactive-btn z-40 flex items-center justify-center animate-fade-in"
          aria-label="Scroll to top of terminology list"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
};
