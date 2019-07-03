import React, { Fragment } from "react";
import { NavBar } from "../containers";
import GlobalStyle from "../utils/globalStyles";
import Head from "./Head";

function withLayout(Comp) {
  return function AppWithLayout(props) {
    return (
      <Fragment>
        <Head />
        <GlobalStyle />
        <NavBar />
        <Comp {...props} />
      </Fragment>
    );
  };
}

export default withLayout;
