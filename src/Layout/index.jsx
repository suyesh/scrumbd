import React, { Fragment } from "react";
import { NavBar } from "../containers";
import GlobalStyle from "../utils/globalStyles";

function withLayout(Comp) {
  return function AppWithLayout(props) {
    return (
      <Fragment>
        <GlobalStyle />
        <NavBar />
        <Comp {...props} />
      </Fragment>
    );
  };
}

export default withLayout;
