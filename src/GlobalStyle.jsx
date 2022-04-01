import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Mono', monospace;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #FFFFFF;
  }

`;

export default GlobalStyle;
