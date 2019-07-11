import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ROUTES } from "../constants";
import Pages from "../Pages";
import DashItems from "../containers/DashItems";
import { Loading } from "../components";

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
      <Redirect from={ROUTES.root} to={ROUTES.home} />
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

export function MainRoutes({ user }) {
  return (
    <Suspense fallback={<Loading />}>
      {user ? (
        <Redirect from={ROUTES.home} to={ROUTES.root} />
      ) : (
        <Redirect from={ROUTES.root} to={ROUTES.home} />
      )}

      <Switch>
        <Route
          path={ROUTES.root}
          exact
          render={props => <Pages.Dashboard {...props} user={user} />}
        />
        <Route
          path={ROUTES.boards}
          render={props => <Pages.Dashboard {...props} user={user} />}
        />
        <Route path={ROUTES.board} component={Pages.Board} />
        <Route component={Pages.NoMatch} />
      </Switch>
    </Suspense>
  );
}

export function DashboardRoutes({ user }) {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route
          exact
          path={ROUTES.root}
          render={props => <DashItems.boards {...props} user={user} />}
        />
        <Route exact path={ROUTES.teams} component={DashItems.teams} />
      </Switch>
    </Suspense>
  );
}
