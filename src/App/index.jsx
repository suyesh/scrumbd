import React from "react";
import { compose } from "recompose";
import withFirebaseAuth from "react-with-firebase-auth";
import { withRouter } from "react-router-dom";
import withLayout from "../Layout";
import { MainRoutes, NotLoggedInRoutes } from "../Routes";
import { authProviders, auth } from "../firebase";
import { useFirestoreUser } from "../hooks";

const FIREBASE_AUTH = { providers: authProviders, firebaseAppAuth: auth };

function App(props) {
  const [user, loading] = useFirestoreUser(props.user);
  const newProps = { ...props, user, loading };

  if (user && !loading) {
    return <MainRoutes {...newProps} />;
  }
  return <NotLoggedInRoutes {...newProps} />;
}

const enhance = compose(
  withFirebaseAuth(FIREBASE_AUTH),
  withRouter,
  withLayout
);

export default enhance(App);
