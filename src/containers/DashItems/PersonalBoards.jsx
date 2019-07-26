import React from "react";
import _ from "lodash";
import { BoardItems } from "../../components";
import { useBoards } from "../../hooks";

function PersonalBoards({ user, openBoardForm, navigateToBoard }) {
  const boards = useBoards(user);
  const unStarredBoards = boards.items.filter(
    board => !_.map(user.starred, "id").includes(board.id)
  );
  return (
    <BoardItems
      boards={unStarredBoards}
      type="personal"
      name="Personal Boards"
      openBoardForm={openBoardForm}
      loading={boards.loading}
      user={user}
      navigateToBoard={navigateToBoard}
    />
  );
}

export default PersonalBoards;
