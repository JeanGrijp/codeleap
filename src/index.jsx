import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import { UserContextProvider } from './context/UserContext';
import GlobalStyle from './GlobalStyle';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
  <UserContextProvider>
    <GlobalStyle />
    <App />
  </UserContextProvider>,
);
