import React, { Fragment } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import GlobalStyle from './GlobalStyle';

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
