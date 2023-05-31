import './index.css';

import { MantineProvider } from '@mantine/core';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

function Root() {
  return (
    <React.StrictMode>
      <MantineProvider withGlobalStyles withCSSVariables withNormalizeCSS>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MantineProvider>
    </React.StrictMode>
  );
}

root.render(<Root />);
