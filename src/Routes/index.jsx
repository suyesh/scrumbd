import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../constants";
import Pages from "../Pages";
import { Loading } from "../components";

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
      <Route
        exact
        path={ROUTES.boards}
        component={() => <h1>Hello boards</h1>}
      />
      <Route exact path={ROUTES.root} component={() => <h1>Hello Root</h1>} />
    </Suspense>
  );
}
