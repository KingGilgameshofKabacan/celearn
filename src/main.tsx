import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'katex/dist/katex.min.css';
import { registerSW } from 'virtual:pwa-register';
import { ErrorBoundary } from './components/ErrorBoundary';
import { FirebaseAuthProvider } from './contexts/FirebaseAuthContext';

// Register service worker for complete offline caching during blackouts
if ('serviceWorker' in navigator) {
  registerSW({
    immediate: true,
    onRegistered(registration) {
      if (registration) {
        registration.update().catch(() => {});
        // Periodically check for application updates in background
        setInterval(() => {
          registration.update().catch(() => {});
        }, 60 * 60 * 1000);
      }
    },
    onRegisterError(error) {
      console.warn('Service worker registration failed:', error);
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <FirebaseAuthProvider>
      <App />
    </FirebaseAuthProvider>
  </ErrorBoundary>
);
