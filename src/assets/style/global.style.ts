import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    position: relative; 
    z-index: 1;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  html, body {
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
  }

  button {
    cursor: pointer;
    border: none;
    transition: 0.3s;

    &:hover{
      opacity: 0.8;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  p {
    margin-bottom: 0;
    line-height: 0;
  }

  input, textarea {
    border: none;
    outline: none;
    font-family: inherit;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary.default};
    border-radius: 5px;
  }
`;

export default GlobalStyle;
