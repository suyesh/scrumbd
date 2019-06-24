import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Pages from "../Pages";
import { Loading } from "../components";

function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact component={Pages.Boards} />
        <Route path="/search" component={Pages.Search} />
        <Route path="/board/:id" component={Pages.Board} />
        <Route component={Pages.NoMatch} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
