import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '../src/assets/App.css';

import { ThemeProvider } from "@material-tailwind/react";
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Analytics />
    <App />
    </ThemeProvider>
  </StrictMode>
);
