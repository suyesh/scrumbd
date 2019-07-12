import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: ${props => (props.loggedIn ? "#172b4d" : "white")};
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Noto Sans,Ubuntu,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 14px;
    line-height: 1.250em;
    font-weight: 400;
    background-color: ${props => (props.loggedIn ? "#FAFBFC" : "#026AA7")};
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
