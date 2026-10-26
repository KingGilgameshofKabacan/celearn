import React, { useState, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { CEQuestion, CEArea } from '../types';
import { SUBTOPICS_BY_AREA } from '../data/questions';
import {
  FileText,
  Upload,
  AlertCircle,
  X,
  Sparkles,
  Check,
  RotateCcw,
  Plus,
  Download,
  Copy,
  Clipboard,
  FileCode,
  Edit3,
  Save,
  Trash2
} from 'lucide-react';
import { soundManager } from '../utils/audio';
import confetti from 'canvas-confetti';
import {
  STANDARD_TXT_TEMPLATE,
  parseReviewerText,
  downloadTemplate
} from '../utils/reviewerParser';
import { isInDataBank } from '../utils/storage';

// Configure PDF.js worker
if (typeof window !== 'undefined' && pdfjsLib.GlobalWorkerOptions) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
}

interface PdfScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTerms: (terms: CEQuestion[]) => void;
  existingCount: number;
}

type TabMode = 'upload' | 'paste' | 'template';

export const PdfScannerModal: React.FC<PdfScannerModalProps> = ({
  isOpen,
  onClose,
  onAddTerms
}) => {
  const [activeTab, setActiveTab] = useState<TabMode>('upload');
  const [pastedText, setPastedText] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStatus, setProcessingStatus] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [scannedTerms, setScannedTerms] = useState<CEQuestion[]>([]);
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [copiedTemplate, setCopiedTemplate] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTerm, setEditTerm] = useState<string>('');
  const [editQuestion, setEditQuestion] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleCopyTemplate = async () => {
    try {
      await navigator.clipboard.writeText(STANDARD_TXT_TEMPLATE);
      setCopiedTemplate(true);
      soundManager.playCorrect();
      setTimeout(() => setCopiedTemplate(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = STANDARD_TXT_TEMPLATE;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedTemplate(true);
      setTimeout(() => setCopiedTemplate(false), 2000);
    }
  };

  const processRawText = (rawText: string) => {
    setProcessingStatus('Extracting terms and definitions...');
    const terms = parseReviewerText(rawText);

    if (terms.length === 0) {
      setError('No terms found. Follow the Tag, Term, and Definition template format.');
    } else {
      setScannedTerms(terms);
      setSelectedIds(new Set(terms.map(t => t.id)));
      setError(null);
      soundManager.playCorrect();
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (!uploadedFile) return;

    setError(null);
    setIsProcessing(true);
    setProcessingStatus(`Reading ${uploadedFile.name}...`);

    try {
      let extractedText = '';

      if (uploadedFile.type === 'application/pdf' || uploadedFile.name.toLowerCase().endsWith('.pdf')) {
        setProcessingStatus('Scanning PDF...');
        const arrayBuffer = await uploadedFile.arrayBuffer();

        try {
          const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
          const pdf = await loadingTask.promise;
          const maxPages = Math.min(pdf.numPages, 40);

          for (let pageNum = 1; pageNum <= maxPages; pageNum++) {
            setProcessingStatus(`Scanning page ${pageNum} of ${maxPages}...`);
            const page = await pdf.getPage(pageNum);
            const textContent = await page.getTextContent();
            const pageText = textContent.items
              .map((item: any) => item.str || '')
              .join(' ');
            extractedText += pageText + '\n\n';
          }
        } catch (pdfErr) {
          console.warn('PDF parser fallback:', pdfErr);
          const decoder = new TextDecoder('utf-8', { fatal: false });
          const rawString = decoder.decode(arrayBuffer);
          const matches = rawString.match(/\(([^()]{3,100})\)\s*Tj/g) || [];
          if (matches.length > 0) {
            extractedText = matches.map(m => m.replace(/[\(\)Tj]/g, '')).join(' ');
          } else {
            extractedText = rawString.replace(/[^\x20-\x7E\n]/g, ' ');
          }
        }
      } else {
        extractedText = await uploadedFile.text();
      }

      processRawText(extractedText);
    } catch (err: any) {
      setError(`Failed to read file: ${err.message || 'Unknown error'}`);
    } finally {
      setIsProcessing(false);
      setProcessingStatus('');
    }
  };

  const handleParsePastedText = () => {
    if (!pastedText.trim()) {
      setError('Please enter or paste your reviewer text.');
      return;
    }
    setIsProcessing(true);
    setError(null);
    setTimeout(() => {
      processRawText(pastedText);
      setIsProcessing(false);
    }, 100);
  };

  const handleLoadSample = () => {
    setIsProcessing(true);
    setError(null);
    setTimeout(() => {
      const terms = parseReviewerText(STANDARD_TXT_TEMPLATE);
      setScannedTerms(terms);
      setSelectedIds(new Set(terms.map(t => t.id)));
      setIsProcessing(false);
      soundManager.playCorrect();
    }, 150);
  };

  const handleToggleSelect = (id: number) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSelectAll = () => {
    if (selectedIds.size === scannedTerms.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(scannedTerms.map(t => t.id)));
    }
  };

  const handleUpdateTermArea = (id: number, newArea: CEArea) => {
    setScannedTerms(prev =>
      prev.map(t => {
        if (t.id === id) {
          const defaultSubtopic = SUBTOPICS_BY_AREA[newArea][0] || 'General';
          return { ...t, area: newArea, subtopic: defaultSubtopic };
        }
        return t;
      })
    );
  };

  const handleStartEdit = (term: CEQuestion) => {
    setEditingId(term.id);
    setEditTerm(term.answer);
    setEditQuestion(term.question);
  };

  const handleSaveEdit = (id: number) => {
    if (!editTerm.trim()) return;
    setScannedTerms(prev =>
      prev.map(t => {
        if (t.id === id) {
          const upper = editTerm.trim().toUpperCase();
          const cleanQ = editQuestion.trim().endsWith('.') ? editQuestion.trim() : `${editQuestion.trim()}.`;
          return {
            ...t,
            answer: upper,
            question: cleanQ,
            choices: [upper, ...t.choices.filter(c => c.toUpperCase() !== upper).slice(0, 3)]
          };
        }
        return t;
      })
    );
    setEditingId(null);
  };

  const handleDeleteTerm = (id: number) => {
    setScannedTerms(prev => prev.filter(t => t.id !== id));
    setSelectedIds(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const handleConfirmImport = () => {
    const toImport = scannedTerms.filter(t => selectedIds.has(t.id));
    if (toImport.length === 0) return;

    onAddTerms(toImport);
    soundManager.playBadge();
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.25 } });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl max-w-2xl w-full p-5 sm:p-6 shadow-2xl text-stone-900 dark:text-stone-100 my-6 space-y-4">
        
        {/* Simple Header */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold">Scan Reviewer</h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Import terms and definitions from PDF or TXT
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={downloadTemplate}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition flex items-center space-x-1 border border-stone-200 dark:border-stone-700"
              title="Download Template"
            >
              <Download className="w-3.5 h-3.5 text-orange-500" />
              <span>Template</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Simple Tabs when not reviewing */}
        {scannedTerms.length === 0 && (
          <div className="flex items-center p-1 bg-stone-100 dark:bg-stone-800/60 rounded-xl text-xs">
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex-1 py-1.5 rounded-lg font-bold transition flex items-center justify-center space-x-1.5 ${
                activeTab === 'upload'
                  ? 'bg-white dark:bg-stone-900 text-orange-600 dark:text-orange-400 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload File</span>
            </button>
            <button
              onClick={() => setActiveTab('paste')}
              className={`flex-1 py-1.5 rounded-lg font-bold transition flex items-center justify-center space-x-1.5 ${
                activeTab === 'paste'
                  ? 'bg-white dark:bg-stone-900 text-orange-600 dark:text-orange-400 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400'
              }`}
            >
              <Clipboard className="w-3.5 h-3.5" />
              <span>Paste Text</span>
            </button>
            <button
              onClick={() => setActiveTab('template')}
              className={`flex-1 py-1.5 rounded-lg font-bold transition flex items-center justify-center space-x-1.5 ${
                activeTab === 'template'
                  ? 'bg-white dark:bg-stone-900 text-orange-600 dark:text-orange-400 shadow-xs'
                  : 'text-stone-600 dark:text-stone-400'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Template Format</span>
            </button>
          </div>
        )}

        {/* Tab 1: Upload */}
        {scannedTerms.length === 0 && activeTab === 'upload' && (
          <div className="space-y-3">
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-stone-300 dark:border-stone-700 hover:border-orange-500 rounded-2xl p-7 text-center cursor-pointer transition bg-stone-50 dark:bg-stone-800/30 group"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.txt,.md"
                className="hidden"
                onChange={handleFileUpload}
              />
              <Upload className="mx-auto w-8 h-8 text-orange-500 mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-xs font-bold text-stone-800 dark:text-stone-200">
                Drop your PDF or TXT file here, or click to browse
              </p>
              <div className="mt-3 flex items-center justify-center space-x-2 text-[10px] text-stone-400 font-mono">
                <span className="px-2 py-0.5 rounded bg-stone-200 dark:bg-stone-700">.TXT</span>
                <span className="px-2 py-0.5 rounded bg-stone-200 dark:bg-stone-700">.PDF</span>
              </div>
            </div>

            <div className="text-center pt-1">
              <button
                onClick={handleLoadSample}
                className="text-xs font-semibold text-orange-600 dark:text-orange-400 hover:underline inline-flex items-center space-x-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Load Sample Template</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Paste */}
        {scannedTerms.length === 0 && activeTab === 'paste' && (
          <div className="space-y-3">
            <textarea
              value={pastedText}
              onChange={e => setPastedText(e.target.value)}
              placeholder={`[PSAD]\nTerm: DEVELOPMENT LENGTH\nDefinition: Minimum embedment length of a bar to develop yield strength in concrete.\n\n[HPGE]\nTerm: WATER HAMMER\nDefinition: Hydraulic pressure surge caused by sudden valve closure.\n\n[MSTE]\nTerm: STOPPING SIGHT DISTANCE\nDefinition: Minimum distance required for a vehicle to safely stop.`}
              rows={8}
              className="w-full p-3.5 rounded-xl bg-stone-50 dark:bg-stone-950/50 border border-stone-200 dark:border-stone-800 text-xs font-mono leading-relaxed outline-none focus:border-orange-500"
            />
            <div className="flex items-center justify-between">
              <button
                onClick={() => setPastedText(STANDARD_TXT_TEMPLATE)}
                className="text-xs text-orange-600 dark:text-orange-400 hover:underline font-semibold"
              >
                Insert Sample Text
              </button>
              <button
                onClick={handleParsePastedText}
                disabled={isProcessing || !pastedText.trim()}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-orange-600 text-white hover:bg-orange-500 transition disabled:opacity-50"
              >
                Scan Terms
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Template */}
        {scannedTerms.length === 0 && activeTab === 'template' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-stone-700 dark:text-stone-300">
                Template Structure: Tag, Term, and Definition
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopyTemplate}
                  className="px-2.5 py-1 rounded-lg font-semibold bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 hover:bg-stone-300 flex items-center space-x-1"
                >
                  {copiedTemplate ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedTemplate ? 'Copied' : 'Copy'}</span>
                </button>
                <button
                  onClick={downloadTemplate}
                  className="px-2.5 py-1 rounded-lg font-semibold bg-orange-600 text-white hover:bg-orange-500 flex items-center space-x-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>

            <pre className="p-3.5 rounded-xl bg-stone-950 text-stone-200 text-[11px] font-mono leading-relaxed max-h-60 overflow-y-auto whitespace-pre-wrap select-all">
              {STANDARD_TXT_TEMPLATE}
            </pre>
          </div>
        )}

        {/* Loading Spinner */}
        {isProcessing && (
          <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 text-orange-800 dark:text-orange-300 text-xs flex items-center space-x-2 animate-pulse">
            <RotateCcw className="w-4 h-4 animate-spin text-orange-600 shrink-0" />
            <span>{processingStatus}</span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* ==================================================== */}
        {/* REVIEW SCANNED TERMS */}
        {/* ==================================================== */}
        {scannedTerms.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs p-2.5 bg-stone-100 dark:bg-stone-800/60 rounded-xl">
              <span className="font-bold">
                {scannedTerms.length} terms ({selectedIds.size} selected)
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleSelectAll}
                  className="px-2 py-1 rounded-lg bg-stone-200 dark:bg-stone-700 font-semibold text-[11px]"
                >
                  {selectedIds.size === scannedTerms.length ? 'Deselect All' : 'Select All'}
                </button>
                <button
                  onClick={() => {
                    setScannedTerms([]);
                    setSelectedIds(new Set());
                    setPastedText('');
                  }}
                  className="text-rose-600 hover:underline font-semibold text-[11px]"
                >
                  Clear
                </button>
              </div>
            </div>

            <div className="max-h-80 overflow-y-auto space-y-2.5 pr-1">
              {scannedTerms.map(term => {
                const isSelected = selectedIds.has(term.id);
                const isEditing = editingId === term.id;

                return (
                  <div
                    key={term.id}
                    onClick={() => !isEditing && handleToggleSelect(term.id)}
                    className={`p-3 rounded-xl border transition flex items-start space-x-2.5 ${
                      isSelected
                        ? 'bg-orange-50/70 dark:bg-orange-950/30 border-orange-400'
                        : 'bg-stone-50/60 dark:bg-stone-800/40 border-stone-200 dark:border-stone-700 opacity-60'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleToggleSelect(term.id)}
                      className="mt-1 rounded text-orange-600 cursor-pointer"
                      onClick={e => e.stopPropagation()}
                    />

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        {isEditing ? (
                          <input
                            type="text"
                            value={editTerm}
                            onChange={e => setEditTerm(e.target.value)}
                            className="font-bold text-xs px-2 py-0.5 rounded bg-white dark:bg-stone-800 border border-orange-500 font-mono flex-1"
                            onClick={e => e.stopPropagation()}
                          />
                        ) : (
                          <div className="flex items-center space-x-1.5 flex-wrap">
                            <span className="font-bold text-xs text-stone-900 dark:text-stone-100 font-mono">
                              {term.answer}
                            </span>
                            {isInDataBank(term) ? (
                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                                In Data Bank
                              </span>
                            ) : (
                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                                New Term
                              </span>
                            )}
                          </div>
                        )}

                        <div className="flex items-center space-x-1" onClick={e => e.stopPropagation()}>
                          <select
                            value={term.area}
                            onChange={e => handleUpdateTermArea(term.id, e.target.value as CEArea)}
                            className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-stone-200 dark:bg-stone-700 border-none outline-none"
                          >
                            <option value="PSAD">PSAD</option>
                            <option value="HPGE">HPGE</option>
                            <option value="MSTE">MSTE</option>
                          </select>

                          {isEditing ? (
                            <button
                              onClick={() => handleSaveEdit(term.id)}
                              className="p-1 rounded bg-emerald-600 text-white"
                              title="Save"
                            >
                              <Save className="w-3 h-3" />
                            </button>
                          ) : (
                            <button
                              onClick={() => handleStartEdit(term)}
                              className="p-1 rounded text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
                              title="Edit"
                            >
                              <Edit3 className="w-3 h-3" />
                            </button>
                          )}

                          <button
                            onClick={() => handleDeleteTerm(term.id)}
                            className="p-1 rounded text-stone-400 hover:text-rose-600"
                            title="Delete"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {isEditing ? (
                        <textarea
                          value={editQuestion}
                          onChange={e => setEditQuestion(e.target.value)}
                          rows={2}
                          className="w-full text-xs p-1.5 rounded bg-white dark:bg-stone-800 border border-orange-500 resize-y"
                          onClick={e => e.stopPropagation()}
                        />
                      ) : (
                        <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                          {term.question}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
              <button
                onClick={() => {
                  setScannedTerms([]);
                  setSelectedIds(new Set());
                }}
                className="text-xs text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 font-semibold"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirmImport}
                disabled={selectedIds.size === 0}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-orange-600 text-white hover:bg-orange-500 disabled:opacity-50 transition flex items-center space-x-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add {selectedIds.size} Terms</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
