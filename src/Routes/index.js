import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Boards, Board, NoMatch } from "../Pages";

function Routes() {
  return (
    <Fragment>
      <Route path="/" exact component={Boards} />
      <Route path="/board/:id" component={Board} />
      <Route component={NoMatch} />
    </Fragment>
  );
}

export default Routes;
