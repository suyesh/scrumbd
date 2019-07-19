import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AuthRedirect from "./AuthRedirect";
import { ROUTES } from "../constants";
import Pages from "../Pages";
import { Loading } from "../components";

export function MainRoutes({ user, loggedIn }) {
  return (
    <Suspense fallback={<Loading />}>
      <AuthRedirect loggedIn={loggedIn} />
      <Switch>
        <Route
          exact
          path={ROUTES.board}
          render={props => <Pages.Board {...props} user={user} />}
        />
        <Route
          path={ROUTES.root}
          exact
          render={props => <Pages.Dashboard {...props} user={user} />}
        />
        <Route
          exact
          path={ROUTES.boards}
          render={props => <Pages.Dashboard {...props} user={user} />}
        />
        <Route component={Pages.NoMatch} />
      </Switch>
    </Suspense>
  );
}
