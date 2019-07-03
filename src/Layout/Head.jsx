import React from "react";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { chain } from "lodash";

function Head({ location: { pathname } }) {
  const title =
    chain(pathname)
      .split("/")
      .last()
      .capitalize()
      .value() || "Home";

  return (
    <Helmet>
      <meta name="theme-color" content="#599AC3" />
      <title>{`${title} | Trello`}</title>
    </Helmet>
  );
}

export default withRouter(Head);
