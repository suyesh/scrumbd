import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../constants";
import DashItems from "../containers/DashItems";
import { Loading } from "../components";

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
