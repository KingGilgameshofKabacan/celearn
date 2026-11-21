import React from 'react';
import { AlertTriangle, RotateCcw, ShieldAlert } from 'lucide-react';
import { FirestoreErrorInfo } from '../firebase';

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
  parsedFirestoreError: FirestoreErrorInfo | null;
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
      parsedFirestoreError: null
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    let parsedFirestoreError: FirestoreErrorInfo | null = null;
    try {
      const candidate = JSON.parse(error.message);
      if (candidate && typeof candidate === 'object' && 'operationType' in candidate) {
        parsedFirestoreError = candidate as FirestoreErrorInfo;
      }
    } catch {
      // Not a structured FirestoreErrorInfo JSON string
    }

    return {
      hasError: true,
      errorMessage: error.message || 'Unexpected Vault-Tec terminal fault.',
      parsedFirestoreError
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Vault-Tec ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = (): void => {
    window.location.reload();
  };

  handleResetError = (): void => {
    try {
      sessionStorage.setItem('cele_cloud_sync_offline_mode', '1');
    } catch {
      // Ignore storage errors
    }
    this.setState({
      hasError: false,
      errorMessage: '',
      parsedFirestoreError: null
    });
  };

  render(): React.ReactNode {
    if (!this.state.hasError) {
      return this.props.children;
    }

    const { parsedFirestoreError, errorMessage } = this.state;
    const isQuotaError = errorMessage.includes('Quota exceeded');

    return (
      <div className="min-h-screen min-h-dvh flex items-center justify-center p-4 bg-[#080E1E] text-slate-100 font-sans">
        <div className="max-w-md w-full rounded-3xl bg-[#0E1B38] border-2 border-amber-500/50 shadow-2xl overflow-hidden">
          <div className="h-2.5 w-full vault-tec-hazard-stripe" />
          <div className="p-6 sm:p-8 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                {parsedFirestoreError ? (
                  <ShieldAlert className="w-6 h-6" />
                ) : (
                  <AlertTriangle className="w-6 h-6" />
                )}
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider font-extrabold text-amber-400">
                  Vault-Tec Recovery Mode
                </p>
                <h1 className="text-lg font-black text-white">
                  {parsedFirestoreError
                    ? 'Cloud Uplink Permission Fault'
                    : 'Terminal Subsystem Interrupted'}
                </h1>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#080E1E] border border-[#2B447A] text-xs space-y-2">
              {isQuotaError ? (
                <p className="text-amber-300 leading-relaxed">
                  Daily Firestore usage quota has been reached. Your local Vault data remains safely cached on this device, and cloud quota resets tomorrow.
                </p>
              ) : parsedFirestoreError ? (
                <>
                  <p className="text-slate-200 leading-relaxed">
                    Vault Cloud Sync could not complete the <span className="font-mono font-bold text-amber-400">{parsedFirestoreError.operationType}</span> operation
                    {parsedFirestoreError.path ? (
                      <> on <span className="font-mono text-amber-300 break-all">{parsedFirestoreError.path}</span></>
                    ) : null}.
                  </p>
                  <p className="text-[11px] font-mono text-sky-300 break-all">
                    {parsedFirestoreError.error}
                  </p>
                  {parsedFirestoreError.authInfo?.emailVerified === false && (
                    <p className="text-[11px] text-amber-300 leading-relaxed">
                      Signed-in account email is not verified. Verify your Google account email and reboot the terminal.
                    </p>
                  )}
                </>
              ) : (
                <p className="text-slate-300 leading-relaxed break-words">
                  {errorMessage}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <button
                type="button"
                onClick={this.handleResetError}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#162852] hover:bg-[#1e356b] border border-[#2B447A] text-xs font-bold text-slate-100 transition cursor-pointer"
              >
                Continue Offline
              </button>
              <button
                type="button"
                onClick={this.handleReload}
                className="flex-1 py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-xs font-black text-[#080E1E] flex items-center justify-center space-x-1.5 transition cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reboot Terminal</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
