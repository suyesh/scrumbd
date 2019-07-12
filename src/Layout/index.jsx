import React, { Fragment } from "react";
import { NavBar } from "../containers";
import GlobalStyle from "../utils/globalStyles";
import Head from "./Head";

function withLayout(Comp) {
  return function AppWithLayout(props) {
    console.log(props);
    return (
      <Fragment>
        <Head />
        <GlobalStyle loggedIn={props.user} />
        {props.user && <NavBar signOut={props.signOut} user={props.user} />}
        <Comp {...props} />
      </Fragment>
    );
  };
}

export default withLayout;
