import React, { Fragment, useEffect } from "react";
import { NavBar } from "../containers";
import GlobalStyle from "../utils/globalStyles";
import Head from "./Head";

function withLayout(Comp) {
  return function AppWithLayout(props) {
    useEffect(
      () => {
        if (props.user) {
          props.history.push("/");
        } else {
          props.history.push("/login");
        }
      },
      [props.user, props.history]
    );
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
