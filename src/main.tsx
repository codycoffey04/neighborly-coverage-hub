import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;

// Check if we're hydrating pre-rendered content
if (container.hasChildNodes()) {
  // Hydrate pre-rendered HTML
  hydrateRoot(
    container,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Fresh render (development or if pre-render failed)
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Signal to prerenderer that page is ready
document.dispatchEvent(new Event('prerender-ready'));
