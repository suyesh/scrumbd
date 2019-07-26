import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { chain } from "lodash";

function Head({ title, color }) {
  return (
    <Helmet>
      <meta name="theme-color" content={color} />
      <title>{`Trello | ${title}`}</title>
    </Helmet>
  );
}

const title = (boardTitle, pathname) => {
  if (boardTitle !== "") {
    return boardTitle;
  }
  return (
    chain(ownProps.location.pathname)
      .split("/")
      .last()
      .capitalize()
      .value() || "Home"
  );
};

const color = (image, boardColor) => {
  if (image) {
    return "#2c3e50";
  }
  return boardColor;
};

const mapStateToProps = ({ board }, ownProps) => {
  return {
    title: title(board.title, ownProps.location.pathname),
    color: color(board.image, board.color)
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Head);
