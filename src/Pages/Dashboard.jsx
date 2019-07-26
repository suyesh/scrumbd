import React, { useEffect } from "react";
import { connect } from "react-redux";
import { DashboardContainer, BoardsList } from "../components";
import { DashboardNav, CreateBoard } from "../containers";
import { DashboardRoutes } from "../Routes";
import { toggleBoardForm } from "../containers/CreateBoard/redux/CreateBoardActions";
import {
  resetBoard,
  updateBoard
} from "../containers/BoardView/redux/BoardViewActions";

function Dashboard({ user, clearBoard, board, ...props }) {
  useEffect(() => {
    clearBoard();
  }, [clearBoard]);

  const onBoardClick = board => {
    props.updateBoard(board);
    props.history.push(`/board/${board.id}`);
  };

  return (
    <DashboardContainer>
      <CreateBoard user={user} navigateToBoard={props.history.push} />
      <DashboardNav />
      <BoardsList>
        <DashboardRoutes
          user={user}
          openBoardForm={props.toggleBoardForm}
          navigateToBoard={onBoardClick}
        />
      </BoardsList>
    </DashboardContainer>
  );
}

const actions = {
  toggleBoardForm,
  updateBoard,
  clearBoard: resetBoard
};

export default connect(
  null,
  actions
)(Dashboard);
