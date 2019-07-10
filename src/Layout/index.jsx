import React, { Fragment } from "react";
import { NavBar } from "../containers";
import GlobalStyle from "../utils/globalStyles";
import Head from "./Head";

function withLayout(Comp) {
  return function AppWithLayout({ user, signOut, ...props }) {
    return (
      <Fragment>
        <Head />
        <GlobalStyle authenticated={user} />
        {user && <NavBar signOut={signOut} user={user} />}
        <Comp {...props} />
      </Fragment>
    );
  };
}

export default withLayout;
