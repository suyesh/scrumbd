import React, { Fragment } from "react";
import { connect } from "react-redux";
import { toggleBoardForm } from "../containers/CreateBoard/redux/CreateBoardActions";
import { NavBar } from "../containers";
import { DimmerComponent } from "../components";
import GlobalStyle from "../utils/globalStyles";
import Head from "./Head";

function withLayout(Comp) {
  function AppWithLayout(props) {
    return (
      <Fragment>
        <Head />
        <GlobalStyle loggedIn={props.user} dimmer={props.dimmer} />
        <DimmerComponent
          active={props.dimmer}
          onClick={() => props.toggleBoardForm(false)}
        />
        {props.user && (
          <NavBar
            signOut={props.signOut}
            user={props.user}
            dimmer={props.dimmer}
          />
        )}
        <Comp {...props} />
      </Fragment>
    );
  }
  const mapStateToProps = ({ boardForm }) => ({
    dimmer: boardForm.open
  });
  const actions = {
    toggleBoardForm
  };
  return connect(
    mapStateToProps,
    actions
  )(AppWithLayout);
}

export default withLayout;
