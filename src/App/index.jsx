import React from "react";
import { compose } from "recompose";
import withFirebaseAuth from "react-with-firebase-auth";
import { withRouter } from "react-router-dom";
import withLayout from "../Layout";
import { MainRoutes, NotLoggedInRoutes } from "../Routes";
import { authProviders, auth } from "../firebase";
import { useFirestoreUser } from "../hooks";

const FIREBASE_AUTH = { providers: authProviders, firebaseAppAuth: auth };

function Routes(props) {
  if (props.loggedIn) {
    return <MainRoutes {...props} />;
  }
  return <NotLoggedInRoutes {...props} />;
}

function App(props) {
  const [user, loading] = useFirestoreUser(props.user);
  const propsWithFirestoreUser = { ...props, user, loading };
  const loggedIn = user && !loading;

  return <Routes loggedIn={loggedIn} {...propsWithFirestoreUser} />;
}

const enhance = compose(
  withFirebaseAuth(FIREBASE_AUTH),
  withRouter,
  withLayout
);

export default enhance(App);
