import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import App from './App';
import { UserContextProvider } from './context/UserContext';
import GlobalStyle from './GlobalStyle';
import queryClient from './services/API/queryClient';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
  <UserContextProvider>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </UserContextProvider>,
);
