import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Fira Code", monospace;
  src: url('./assets/fonts/FiraCode-Regular.eot?') format('eot'),
  url('./assets/fonts/FiraCode-Regular.woff2') format('woff2'),
  url('./assets/fonts/FiraCode-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Fira Code", monospace;
  src: url('./assets/fonts/FiraCode-Medium.eot?') format('eot'),
  url('./assets/fonts/FiraCode-Medium.woff2') format('woff2'),
  url('./assets/fonts/FiraCode-Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Fira Code", monospace;
  src: url('./assets/fonts/FiraCode-SemiBold.eot?') format('eot'),
  url('./assets/fonts/FiraCode-SemiBold.ttf') format('woff2'),
  url('./assets/fonts/FiraCode-SemiBold.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${theme.colors.primaryBg};
  font-family: "Fira Code", monospace, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
}

ul{
  list-style-type: none;
}

button {
  all: unset;
  display: inline-block;
  cursor: pointer;
}
`