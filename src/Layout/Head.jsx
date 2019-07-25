import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { chain } from "lodash";

function Head({ title }) {
  return (
    <Helmet>
      <meta name="theme-color" content="#026AA7" />
      <title>{`${title} | Trello`}</title>
    </Helmet>
  );
}

const mapStateToProps = ({ board }, ownProps) => {
  let title;
  if (board.title !== "") {
    title = board.title;
  } else {
    title =
      chain(ownProps.location.pathname)
        .split("/")
        .last()
        .capitalize()
        .value() || "Home";
  }
  return { title };
};

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Head);
