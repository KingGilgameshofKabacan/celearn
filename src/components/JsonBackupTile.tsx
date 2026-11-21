import React, { useRef, useState } from 'react';
import { downloadBackupJson, importBackupJson } from '../utils/storage';
import { soundManager } from '../utils/audio';

interface JsonBackupTileProps {
  variant?: 'compact' | 'small';
  onNotify?: (msg: string) => void;
  className?: string;
}

const FloppyDiskIcon: React.FC<{ badge?: 'export' | 'import'; className?: string }> = ({
  badge,
  className = 'w-4 h-4'
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Classic 3.5" Floppy Disk Shell with Top-Right Chamfer */}
    <path d="M5 3h11.5L21 7.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
    {/* Metal Shutter Window */}
    <path d="M7 3v5.5h8V3" />
    <line x1="12.5" y1="4.8" x2="12.5" y2="6.8" />
    {/* Bottom Label Slot */}
    <rect x="6.5" y="13" width="11" height="8" rx="1" />
    {badge === 'export' && (
      <>
        <path d="M12 15v4" />
        <path d="M10.2 17.3 12 19.2l1.8-1.9" />
      </>
    )}
    {badge === 'import' && (
      <>
        <path d="M12 19v-4" />
        <path d="M10.2 16.7 12 14.8l1.8 1.9" />
      </>
    )}
  </svg>
);

export const JsonBackupTile: React.FC<JsonBackupTileProps> = ({
  variant = 'small',
  onNotify,
  className = ''
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<{ type: 'ok' | 'err'; text: string } | null>(null);

  const showStatus = (type: 'ok' | 'err', text: string) => {
    setStatus({ type, text });
    onNotify?.(text);
    setTimeout(() => {
      setStatus(prev => (prev?.text === text ? null : prev));
    }, 3200);
  };

  const handleExport = () => {
    try {
      const { keyCount } = downloadBackupJson();
      soundManager.playCompleteTask();
      showStatus('ok', `Exported (${keyCount})`);
    } catch {
      soundManager.playError();
      showStatus('err', 'Export failed');
    }
  };

  const handleImportClick = () => {
    soundManager.playClick();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const raw = typeof reader.result === 'string' ? reader.result : '';
      const res = importBackupJson(raw);
      if (res.ok) {
        soundManager.playCompleteTask();
        showStatus('ok', `Restored (${res.restoredCount})`);
      } else {
        soundManager.playError();
        showStatus('err', res.error);
      }
    };
    reader.onerror = () => {
      soundManager.playError();
      showStatus('err', 'Could not read file');
    };
    reader.readAsText(file);
  };

  if (variant === 'compact') {
    return (
      <div
        className={`flex items-center justify-between gap-2 p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-xs ${className}`}
      >
        <div className="min-w-0 flex items-center space-x-2">
          <FloppyDiskIcon className="w-3.5 h-3.5 text-orange-500 shrink-0" />
          <div className="min-w-0">
            <span className="text-stone-700 dark:text-stone-300 font-medium block truncate">
              JSON Backup
            </span>
            {status && (
              <span
                className={`block text-[10px] font-mono font-bold truncate ${
                  status.type === 'ok'
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-red-600 dark:text-red-400'
                }`}
              >
                {status.text}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-1.5 shrink-0">
          <button
            type="button"
            onClick={handleExport}
            title="Export JSON Backup"
            aria-label="Export JSON Backup"
            className="px-2.5 py-1.5 rounded-lg font-bold bg-white dark:bg-stone-700 hover:bg-orange-50 dark:hover:bg-stone-600 text-stone-800 dark:text-stone-100 border border-stone-200 dark:border-stone-600 flex items-center space-x-1 cursor-pointer transition active:scale-95"
          >
            <FloppyDiskIcon badge="export" className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-[11px]">Export</span>
          </button>

          <button
            type="button"
            onClick={handleImportClick}
            title="Import JSON Backup"
            aria-label="Import JSON Backup"
            className="px-2.5 py-1.5 rounded-lg font-bold bg-white dark:bg-stone-700 hover:bg-emerald-50 dark:hover:bg-stone-600 text-stone-800 dark:text-stone-100 border border-stone-200 dark:border-stone-600 flex items-center space-x-1 cursor-pointer transition active:scale-95"
          >
            <FloppyDiskIcon badge="import" className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[11px]">Import</span>
          </button>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept=".json,application/json"
          onChange={handleFileChange}
          className="hidden"
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <div
      className={`inline-flex flex-wrap items-center justify-between gap-3 px-3.5 py-2.5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-xs w-full max-w-md ${className}`}
    >
      <div className="flex items-center space-x-2 min-w-0">
        <div className="p-1.5 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 shrink-0">
          <FloppyDiskIcon className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <div className="text-xs font-extrabold text-stone-900 dark:text-stone-100 leading-tight">
            Backup (JSON)
          </div>
          <div
            className={`text-[10px] font-mono truncate ${
              status
                ? status.type === 'ok'
                  ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                  : 'text-red-600 dark:text-red-400 font-bold'
                : 'text-stone-500 dark:text-stone-400'
            }`}
          >
            {status ? status.text : 'Save or restore local data'}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-1.5 shrink-0">
        <button
          type="button"
          onClick={handleExport}
          title="Export JSON Backup"
          aria-label="Export JSON Backup"
          className="px-2.5 py-1.5 rounded-xl bg-stone-100 hover:bg-orange-500/15 dark:bg-stone-800 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-100 text-[11px] font-bold flex items-center space-x-1 cursor-pointer transition active:scale-95"
        >
          <FloppyDiskIcon badge="export" className="w-3.5 h-3.5 text-orange-500" />
          <span>Export</span>
        </button>

        <button
          type="button"
          onClick={handleImportClick}
          title="Import JSON Backup"
          aria-label="Import JSON Backup"
          className="px-2.5 py-1.5 rounded-xl bg-stone-100 hover:bg-emerald-500/15 dark:bg-stone-800 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-100 text-[11px] font-bold flex items-center space-x-1 cursor-pointer transition active:scale-95"
        >
          <FloppyDiskIcon badge="import" className="w-3.5 h-3.5 text-emerald-500" />
          <span>Import</span>
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".json,application/json"
        onChange={handleFileChange}
        className="hidden"
        aria-hidden="true"
      />
    </div>
  );
};
