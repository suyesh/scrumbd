import React from "react";
import _ from "lodash";
import { BoardItems } from "../../components";
import { useBoards } from "../../hooks";

function PersonalBoards({ user }) {
  const boards = useBoards(user);
  const unStarredBoards = boards.items.filter(
    board => !_.map(user.starred, "id").includes(board.id)
  );
  return (
    <BoardItems
      boards={unStarredBoards}
      type="personal"
      name="Personal Boards"
      onCreate={() => console.log("hello")}
      loading={boards.loading}
      user={user}
    />
  );
}

export default PersonalBoards;
