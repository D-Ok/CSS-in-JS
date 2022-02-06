import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    min-height: 100vh;
     
    margin: 0;
    padding: 0;

    font-family: 'Merriweather', 'Georgia', serif;
    font-weight: 400;
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt"
    font-style: normal;
    
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-stretch: normal;
    font-size: 100%;
    line-height: 1.75;
  }
`;

export default GlobalStyle;