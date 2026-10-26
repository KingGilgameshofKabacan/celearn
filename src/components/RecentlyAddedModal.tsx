import React, { useState, useMemo } from 'react';
import { CEQuestion, CEArea } from '../types';
import {
  Clock,
  Trash2,
  CheckSquare,
  Square,
  Search,
  X,
  AlertTriangle,
  FileText,
  Copy,
  Check,
  Tag,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { soundManager } from '../utils/audio';

interface RecentlyAddedModalProps {
  isOpen: boolean;
  onClose: () => void;
  recentlyAddedQuestions: CEQuestion[];
  onDeleteSelected: (ids: number[]) => void;
  onDeleteAll: () => void;
  onOpenScanner?: () => void;
  dataBankCount: number;
}

export const RecentlyAddedModal: React.FC<RecentlyAddedModalProps> = ({
  isOpen,
  onClose,
  recentlyAddedQuestions,
  onDeleteSelected,
  onDeleteAll,
  onOpenScanner,
  dataBankCount
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedArea, setSelectedArea] = useState<'ALL' | CEArea>('ALL');
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [confirmDeleteAll, setConfirmDeleteAll] = useState<boolean>(false);
  const [confirmDeleteSelected, setConfirmDeleteSelected] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Filter recently added questions by search term and area
  const filteredQuestions = useMemo(() => {
    return recentlyAddedQuestions.filter(q => {
      if (selectedArea !== 'ALL' && q.area !== selectedArea) return false;
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const inTerm = q.answer.toLowerCase().includes(query);
        const inQuestion = q.question.toLowerCase().includes(query);
        const inSubtopic = q.subtopic.toLowerCase().includes(query);
        if (!inTerm && !inQuestion && !inSubtopic) return false;
      }
      return true;
    });
  }, [recentlyAddedQuestions, selectedArea, searchTerm]);

  // Counts by Area
  const countsByArea = useMemo(() => {
    const counts = { PSAD: 0, HPGE: 0, MSTE: 0 };
    recentlyAddedQuestions.forEach(q => {
      if (q.area in counts) {
        counts[q.area as CEArea]++;
      }
    });
    return counts;
  }, [recentlyAddedQuestions]);

  if (!isOpen) return null;

  // Toggle selection for a single term
  const handleToggleSelect = (id: number) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Select/Deselect all in current filtered view
  const handleToggleSelectAll = () => {
    if (selectedIds.size === filteredQuestions.length && filteredQuestions.length > 0) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredQuestions.map(q => q.id)));
    }
  };

  // Delete single term
  const handleDeleteSingle = (id: number) => {
    soundManager.playClick();
    onDeleteSelected([id]);
    setSelectedIds(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  // Execute delete selected
  const handleExecuteDeleteSelected = () => {
    const ids = Array.from(selectedIds);
    if (ids.length === 0) return;
    soundManager.playClick();
    onDeleteSelected(ids);
    setSelectedIds(new Set());
    setConfirmDeleteSelected(false);
  };

  // Execute delete all recently added
  const handleExecuteDeleteAll = () => {
    soundManager.playClick();
    onDeleteAll();
    setSelectedIds(new Set());
    setConfirmDeleteAll(false);
  };

  // Copy term & definition
  const handleCopy = (q: CEQuestion, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`Term: ${q.answer}\nDefinition: ${q.question}`);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const isAllSelected = filteredQuestions.length > 0 && selectedIds.size === filteredQuestions.length;
  const isPartiallySelected = selectedIds.size > 0 && selectedIds.size < filteredQuestions.length;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl max-w-4xl w-full p-5 sm:p-7 shadow-2xl text-stone-900 dark:text-stone-100 my-4 flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-stone-200 dark:border-stone-800 gap-3 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight">Recently Added</h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300 border border-orange-300 dark:border-orange-800">
                  {recentlyAddedQuestions.length} {recentlyAddedQuestions.length === 1 ? 'term' : 'terms'}
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 inline shrink-0" />
                <span>Excluding {dataBankCount} terms in built-in data bank</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition"
            aria-label="Close Recently Added modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action & Filter Toolbar */}
        <div className="py-3 border-b border-stone-200 dark:border-stone-800 space-y-3 shrink-0">
          {/* Top Bar: Search + Tag Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search recently added terms or definitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl pl-10 pr-3 py-2 text-xs sm:text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Area Filter Buttons */}
            <div className="flex items-center space-x-1.5 self-start sm:self-auto overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => setSelectedArea('ALL')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                  selectedArea === 'ALL'
                    ? 'bg-orange-600 text-white'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                All ({recentlyAddedQuestions.length})
              </button>
              <button
                onClick={() => setSelectedArea('PSAD')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                  selectedArea === 'PSAD'
                    ? 'bg-sky-600 text-white'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                PSAD ({countsByArea.PSAD})
              </button>
              <button
                onClick={() => setSelectedArea('HPGE')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                  selectedArea === 'HPGE'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                HPGE ({countsByArea.HPGE})
              </button>
              <button
                onClick={() => setSelectedArea('MSTE')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                  selectedArea === 'MSTE'
                    ? 'bg-purple-600 text-white'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                MSTE ({countsByArea.MSTE})
              </button>
            </div>
          </div>

          {/* Bottom Bar: Selection & Delete Controls */}
          {recentlyAddedQuestions.length > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleToggleSelectAll}
                  className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-200 font-semibold transition"
                >
                  {isAllSelected ? (
                    <CheckSquare className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  ) : isPartiallySelected ? (
                    <div className="w-4 h-4 border-2 border-orange-500 rounded bg-orange-500/30 flex items-center justify-center">
                      <div className="w-2 h-0.5 bg-orange-600 dark:bg-orange-400 rounded-sm" />
                    </div>
                  ) : (
                    <Square className="w-4 h-4 text-stone-400" />
                  )}
                  <span>
                    {isAllSelected ? 'Deselect All' : `Select All (${filteredQuestions.length})`}
                  </span>
                </button>

                {selectedIds.size > 0 && (
                  <span className="text-xs font-semibold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/60 px-2 py-1 rounded-md border border-orange-200 dark:border-orange-900">
                    {selectedIds.size} selected
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-2">
                {/* Delete Selected Button */}
                {selectedIds.size > 0 && (
                  <button
                    onClick={() => setConfirmDeleteSelected(true)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold transition shadow-xs"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete Selected ({selectedIds.size})</span>
                  </button>
                )}

                {/* Delete All Recently Added Button */}
                <button
                  onClick={() => setConfirmDeleteAll(true)}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-rose-100 text-stone-700 hover:text-rose-700 dark:bg-stone-800 dark:hover:bg-rose-950 dark:text-stone-300 dark:hover:text-rose-300 font-bold border border-stone-200 dark:border-stone-700 hover:border-rose-300 dark:hover:border-rose-800 transition"
                >
                  <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                  <span>Delete All Recently Added</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Confirmation Banner: Delete Selected */}
        {confirmDeleteSelected && (
          <div className="p-3.5 my-2 rounded-2xl bg-rose-50 dark:bg-rose-950/70 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shrink-0">
            <div className="flex items-center space-x-2 text-xs">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>
                Delete <strong>{selectedIds.size}</strong> selected term(s)? They will be removed from your active question bank.
              </span>
            </div>
            <div className="flex items-center space-x-2 self-end sm:self-auto text-xs font-bold">
              <button
                onClick={() => setConfirmDeleteSelected(false)}
                className="px-3 py-1.5 rounded-lg bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-300"
              >
                Cancel
              </button>
              <button
                onClick={handleExecuteDeleteSelected}
                className="px-3 py-1.5 rounded-lg bg-rose-600 text-white hover:bg-rose-700 shadow-xs"
              >
                Yes, Delete Selected
              </button>
            </div>
          </div>
        )}

        {/* Confirmation Banner: Delete All */}
        {confirmDeleteAll && (
          <div className="p-3.5 my-2 rounded-2xl bg-rose-50 dark:bg-rose-950/70 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shrink-0">
            <div className="flex items-center space-x-2 text-xs">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>
                Delete all <strong>{recentlyAddedQuestions.length}</strong> recently added user terms? (All {dataBankCount} built-in data bank terms will be preserved).
              </span>
            </div>
            <div className="flex items-center space-x-2 self-end sm:self-auto text-xs font-bold">
              <button
                onClick={() => setConfirmDeleteAll(false)}
                className="px-3 py-1.5 rounded-lg bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-300"
              >
                Cancel
              </button>
              <button
                onClick={handleExecuteDeleteAll}
                className="px-3 py-1.5 rounded-lg bg-rose-600 text-white hover:bg-rose-700 shadow-xs"
              >
                Yes, Delete All Recently Added
              </button>
            </div>
          </div>
        )}

        {/* Terms List Body */}
        <div className="flex-1 overflow-y-auto pr-1 py-2 space-y-3">
          {filteredQuestions.length === 0 ? (
            <div className="py-12 px-4 text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-400">
                <Clock className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold">No recently added terms</h4>
                <p className="text-xs text-stone-500 dark:text-stone-400 max-w-md mx-auto">
                  {searchTerm || selectedArea !== 'ALL'
                    ? 'No terms match your search or filter criteria.'
                    : 'Terms you add via the PDF or TXT Scan Reviewer will appear here. Terms already in the built-in data bank are automatically excluded.'}
                </p>
              </div>

              {onOpenScanner && (
                <div className="pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenScanner();
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-orange-600 hover:bg-orange-500 text-white transition inline-flex items-center space-x-1.5 shadow-xs"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Scan Reviewer (PDF / TXT)</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            filteredQuestions.map(q => {
              const isSelected = selectedIds.has(q.id);
              const areaColor =
                q.area === 'PSAD'
                  ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 border-sky-200 dark:border-sky-800'
                  : q.area === 'HPGE'
                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800'
                  : 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 border-purple-200 dark:border-purple-800';

              return (
                <div
                  key={q.id}
                  onClick={() => handleToggleSelect(q.id)}
                  className={`border rounded-2xl p-4 transition shadow-xs cursor-pointer space-y-2 select-none ${
                    isSelected
                      ? 'bg-orange-50/60 dark:bg-orange-950/20 border-orange-300 dark:border-orange-800'
                      : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    {/* Checkbox and Tag + Term Name */}
                    <div className="flex items-start space-x-3">
                      <div className="pt-0.5">
                        {isSelected ? (
                          <CheckSquare className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        ) : (
                          <Square className="w-5 h-5 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200" />
                        )}
                      </div>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${areaColor}`}>
                            [{q.area}]
                          </span>
                          <span className="text-xs text-stone-500 dark:text-stone-400">
                            {q.subtopic}
                          </span>
                        </div>

                        <h4 className="text-sm sm:text-base font-bold font-mono text-orange-600 dark:text-orange-400">
                          {q.answer}
                        </h4>
                      </div>
                    </div>

                    {/* Action buttons on card */}
                    <div className="flex items-center space-x-1 shrink-0" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={(e) => handleCopy(q, e)}
                        className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition"
                        title="Copy term and definition"
                      >
                        {copiedId === q.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>

                      <button
                        onClick={() => handleDeleteSingle(q.id)}
                        className="p-1.5 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/60 transition"
                        title="Delete this term"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Definition / Explanation */}
                  <div className="pl-8 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                    <p className="whitespace-pre-line">{q.question}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shrink-0">
          <div className="text-stone-500 dark:text-stone-400 text-center sm:text-left">
            Showing <strong>{filteredQuestions.length}</strong> of <strong>{recentlyAddedQuestions.length}</strong> recently added user terms
          </div>

          <div className="flex items-center space-x-2">
            {onOpenScanner && (
              <button
                onClick={() => {
                  onClose();
                  onOpenScanner();
                }}
                className="px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 font-semibold transition flex items-center space-x-1"
              >
                <FileText className="w-3.5 h-3.5 text-orange-500" />
                <span>Add More Terms</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold transition shadow-xs"
            >
              Done
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
