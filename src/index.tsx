import { GlobalStyle } from 'global-styles';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/app';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
