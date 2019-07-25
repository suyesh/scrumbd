import React, { useEffect } from "react";
import { connect } from "react-redux";
import { DashboardContainer, BoardsList } from "../components";
import { DashboardNav, CreateBoard } from "../containers";
import { DashboardRoutes } from "../Routes";
import { toggleBoardForm } from "../containers/CreateBoard/redux/CreateBoardActions";
import { resetBoard } from "../containers/BoardView/redux/BoardViewActions";

function Dashboard({ user, clearBoard, ...props }) {
  useEffect(() => {
    clearBoard();
  }, [clearBoard]);

  return (
    <DashboardContainer>
      <CreateBoard user={user} navigateToBoard={props.history.push} />
      <DashboardNav />
      <BoardsList>
        <DashboardRoutes user={user} openBoardForm={props.toggleBoardForm} />
      </BoardsList>
    </DashboardContainer>
  );
}

const actions = {
  toggleBoardForm,
  clearBoard: resetBoard
};

export default connect(
  null,
  actions
)(Dashboard);
