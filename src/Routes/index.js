import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Boards, Board, NoMatch } from "../Pages";

function Routes() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact component={Boards} />
        <Route path="/board/:id" component={Board} />
        <Route component={NoMatch} />
      </Switch>
    </Fragment>
  );
}

export default Routes;
