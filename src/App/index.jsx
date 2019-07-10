import React from "react";
import { compose } from "recompose";
import withFirebaseAuth from "react-with-firebase-auth";
import withLayout from "../Layout";
import { MainRoutes, NotLoggedInRoutes } from "../Routes";
import { authProviders, auth } from "../firebase";

const Authenticated = withLayout(MainRoutes);

function App({
  createUserWithEmailAndPassword,
  error,
  setError,
  signInWithEmailAndPassword,
  signInWithGoogle,
  signOut,
  user
}) {
  if (user) {
    return <Authenticated user={user} signOut={signOut} />;
  }

  return (
    <NotLoggedInRoutes
      user={user}
      signUp={createUserWithEmailAndPassword}
      error={error}
      setError={setError}
      signIn={signInWithEmailAndPassword}
      signInWithGoogle={signInWithGoogle}
    />
  );
}

const enhance = compose(
  withFirebaseAuth({ providers: authProviders, firebaseAppAuth: auth })
);

export default enhance(App);
