import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../constants";
import Pages from "../Pages";
import DashItems from "../containers/DashItems";
import { Loading } from "../components";

export function NotLoggedInRoutes({
  signUp,
  error,
  setError,
  signIn,
  signInWithGoogle
}) {
  return (
    <Suspense fallback={<Loading />}>
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
            />
          )}
        />
      </Switch>
    </Suspense>
  );
}

export function MainRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path={ROUTES.root} exact component={Pages.Dashboard} />
        <Route path={ROUTES.boards} component={Pages.Dashboard} />
        <Route path={ROUTES.board} component={Pages.Board} />
        <Route component={Pages.NoMatch} />
      </Switch>
    </Suspense>
  );
}

export function DashboardRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path={ROUTES.root} component={DashItems.boards} />
        <Route exact path={ROUTES.teams} component={DashItems.teams} />
      </Switch>
    </Suspense>
  );
}
