import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {
  doc,
  Firestore,
  getDocFromServer,
  getFirestore,
  initializeFirestore
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

function createFirestoreInstance(): Firestore {
  try {
    return initializeFirestore(
      app,
      {
        experimentalAutoDetectLongPolling: true
      },
      firebaseConfig.firestoreDatabaseId
    );
  } catch {
    return getFirestore(app, firebaseConfig.firestoreDatabaseId);
  }
}

export const db = createFirestoreInstance();
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write'
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map(provider => ({
          providerId: provider.providerId,
          email: provider.email
        })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

const REACHABILITY_CACHE_TTL_MS = 30000;
const REACHABILITY_TIMEOUT_MS = 4000;

let lastReachabilityResult: boolean | null = null;
let lastReachabilityCheckedAt = 0;
let inFlightReachabilityProbe: Promise<boolean> | null = null;

export function isFirestoreBackendOffline(): boolean {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    return true;
  }
  return (
    lastReachabilityResult === false &&
    Date.now() - lastReachabilityCheckedAt < REACHABILITY_CACHE_TTL_MS
  );
}

export function clearFirestoreReachabilityCache(): void {
  lastReachabilityResult = null;
  lastReachabilityCheckedAt = 0;
}

if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    clearFirestoreReachabilityCache();
    void testConnection();
  });
}

export async function ensureFirestoreReachable(forceRefresh = false): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    lastReachabilityResult = false;
    lastReachabilityCheckedAt = Date.now();
    return false;
  }

  if (
    !forceRefresh &&
    lastReachabilityResult !== null &&
    Date.now() - lastReachabilityCheckedAt < REACHABILITY_CACHE_TTL_MS
  ) {
    return lastReachabilityResult;
  }

  if (!forceRefresh && inFlightReachabilityProbe) {
    return inFlightReachabilityProbe;
  }

  const probePromise = (async (): Promise<boolean> => {
    if (typeof fetch !== 'function') {
      lastReachabilityResult = true;
      lastReachabilityCheckedAt = Date.now();
      return true;
    }

    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timeoutId =
      controller && typeof setTimeout !== 'undefined'
        ? setTimeout(() => controller.abort(), REACHABILITY_TIMEOUT_MS)
        : null;

    try {
      const probeUrl = `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(
        firebaseConfig.projectId
      )}/databases/${encodeURIComponent(
        firebaseConfig.firestoreDatabaseId
      )}/documents/test/connection`;

      await fetch(probeUrl, {
        method: 'GET',
        headers: {
          'x-goog-api-key': firebaseConfig.apiKey
        },
        cache: 'no-store',
        signal: controller?.signal
      });

      // Any HTTP status (403 PERMISSION_DENIED, 404, 200) confirms network reachability
      lastReachabilityResult = true;
      lastReachabilityCheckedAt = Date.now();
      return true;
    } catch {
      // Network error, DNS block, or timeout — avoid triggering SDK offline console errors
      lastReachabilityResult = false;
      lastReachabilityCheckedAt = Date.now();
      return false;
    } finally {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      inFlightReachabilityProbe = null;
    }
  })();

  inFlightReachabilityProbe = probePromise;
  return probePromise;
}

export async function testConnection(): Promise<void> {
  const reachable = await ensureFirestoreReachable();
  if (!reachable) {
    return;
  }
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}

void testConnection();
