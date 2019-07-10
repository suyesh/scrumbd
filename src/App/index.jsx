import React from "react";
import { compose } from "recompose";
import withFirebaseAuth from "react-with-firebase-auth";
import { withRouter } from "react-router-dom";
import withLayout from "../Layout";
import { MainRoutes, NotLoggedInRoutes } from "../Routes";
import { authProviders, auth } from "../firebase";

const FIREBASE_AUTH = { providers: authProviders, firebaseAppAuth: auth };

function App(props) {
  if (props.user) {
    return <MainRoutes {...props} />;
  }
  return <NotLoggedInRoutes {...props} />;
}

const enhance = compose(
  withFirebaseAuth(FIREBASE_AUTH),
  withRouter,
  withLayout
);

export default enhance(App);
