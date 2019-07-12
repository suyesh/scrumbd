import React from "react";
import { Redirect } from "react-router-dom";
import { ROUTES } from "../constants";

function AuthRedirect({ loggedIn }) {
  if (loggedIn) {
    return <Redirect from={ROUTES.home} to={ROUTES.root} />;
  }
  return <Redirect from={ROUTES.root} to={ROUTES.home} />;
}

export default AuthRedirect;
