import React from "react";
import { connect } from "react-redux";
import { DashboardContainer, BoardsList } from "../components";
import { DashboardNav, CreateBoard } from "../containers";
import { DashboardRoutes } from "../Routes";
import { toggleBoardForm } from "../containers/CreateBoard/redux/CreateBoardActions";

function Dashboard({ user, ...props }) {
  return (
    <DashboardContainer>
      <CreateBoard />
      <DashboardNav />
      <BoardsList>
        <DashboardRoutes user={user} openBoardForm={props.toggleBoardForm} />
      </BoardsList>
    </DashboardContainer>
  );
}

const actions = {
  toggleBoardForm
};

export default connect(
  null,
  actions
)(Dashboard);
