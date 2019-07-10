import React, { Fragment } from "react";
import { NavBar } from "../containers";
import GlobalStyle from "../utils/globalStyles";
import Head from "./Head";

function withLayout(Comp) {
  return function AppWithLayout(props) {
    return (
      <Fragment>
        <Head />
        <GlobalStyle user={props.user} />
        {props.user && <NavBar signOut={props.signOut} user={props.user} />}
        <Comp {...props} />
      </Fragment>
    );
  };
}

export default withLayout;
