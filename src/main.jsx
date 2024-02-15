import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import defaultTheme from './styles/themes/default';
import GlobalStyles from './styles/global';

import { AuthProvider } from './hooks/useAuth';
import { CartProvider } from './hooks/useCart';
import { SearchProvider } from './hooks/useSearch';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <AuthProvider>
          <SearchProvider>
            <CartProvider>
              <Routes />
            </CartProvider>
          </SearchProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
