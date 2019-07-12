import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AuthRedirect from "./AuthRedirect";
import Pages from "../Pages";
import { Loading } from "../components";
import { ROUTES } from "../constants";

export function NotLoggedInRoutes({
  signUp,
  error,
  setError,
  signIn,
  signInWithGoogle,
  user,
  loading
}) {
  return (
    <Suspense fallback={<Loading />}>
      <AuthRedirect user={user} />
      <Switch>
        <Route
          path={ROUTES.home}
          exact
          render={props => (
            <Pages.Home
              {...props}
              signUp={signUp}
              error={error}
              setError={setError}
              signIn={signIn}
              signInWithGoogle={signInWithGoogle}
              loading={loading && !user}
            />
          )}
        />
        <Route component={Pages.NoMatch} />
      </Switch>
    </Suspense>
  );
}
