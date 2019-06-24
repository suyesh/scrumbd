import React, { Fragment } from "react";
import Routes from "../Routes";
import { NavBar } from "../containers";
import GlobalStyle from "../utils/globalStyles";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Routes />
    </Fragment>
  );
}

export default App;
