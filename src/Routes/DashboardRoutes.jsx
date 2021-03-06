import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "../constants";
import DashItems from "../containers/DashItems";
import { Loading } from "../components";

export function DashboardRoutes({ user, openBoardForm, navigateToBoard }) {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route
          exact
          path={ROUTES.root}
          render={props => (
            <DashItems.boards
              {...props}
              user={user}
              openBoardForm={openBoardForm}
              navigateToBoard={navigateToBoard}
            />
          )}
        />
        <Route
          exact
          path={ROUTES.teams}
          component={DashItems.teams}
          navigateToBoard={navigateToBoard}
        />
      </Switch>
    </Suspense>
  );
}
