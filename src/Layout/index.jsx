import React, { Fragment, useEffect } from "react";
import { NavBar } from "../containers";
import GlobalStyle from "../utils/globalStyles";
import { ROUTES } from "../constants";
import Head from "./Head";

function withLayout(Comp) {
  return function AppWithLayout(props) {
    const redirectToDashboard = () => {
      props.history.push(ROUTES.root);
    };

    const redirectToHome = () => {
      props.history.push(ROUTES.home);
    };

    useEffect(
      () => {
        if (props.user) {
          redirectToDashboard();
        } else {
          redirectToHome();
        }
      },
      [props.user, redirectToDashboard, redirectToHome]
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
