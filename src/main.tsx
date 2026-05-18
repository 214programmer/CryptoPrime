import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.tsx';
import './index.css';

window.addEventListener('error', (e) => {
  console.error("Global Error:", e.message);
});
window.addEventListener('unhandledrejection', (e) => {
  console.error("Unhandled Rejection:", e.reason);
});

function ErrorFallback({error}: {error: Error}) {
  return (
    <div role="alert" className="p-4 bg-red-900 text-white min-h-screen">
      <p>Something went wrong:</p>
      <pre className="text-sm mt-2">{error.message}</pre>
      <pre className="text-xs mt-2 text-gray-300">{error.stack}</pre>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
