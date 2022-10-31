import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    outline: none;
  }
  body {
    font-size: 18px;
    height: 100%;
    line-height: 1;
    font-family: Arial, Tahoma, Verdana, sans-serif;
    color: #fff;
    background-color: ${theme.global?.colors?.['background-contrast']};
  }
  html,
  #root {
    height: 100%;
    box-sizing: border-box;
  }
  #root {
    & > div:nth-child(2) {
      min-height: 100vh;
      display: flex;
      flex-direction: column;

      & > div {
        flex: 1;
      }
    }
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  strong {
    font-weight: bold;
  }
  input {
    outline: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  img {
    border: 0;
    max-width: 100%;
  }
  a {
    text-decoration: none;
    transition: opacity 0.2s linear;
    color: #fff;

    & :visited {
      color: #fff;
    }
  }
  a:hover {
    text-decoration: none;
    opacity: 0.6;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid #c2c2c2;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
