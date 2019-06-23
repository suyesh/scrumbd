import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Pages from "../Pages";

function Routes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" exact component={Pages.Boards} />
        <Route path="/board/:id" component={Pages.Board} />
        <Route component={Pages.NoMatch} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
