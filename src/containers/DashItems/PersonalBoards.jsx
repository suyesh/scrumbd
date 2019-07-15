import React from "react";
import { BoardItems } from "../../components";
import { useBoards } from "../../hooks";

function PersonalBoards({ user }) {
  const boards = useBoards(user);
  return (
    <BoardItems
      boards={boards.items}
      type="personal"
      name="Personal Boards"
      onCreate={() => console.log("hello")}
      loading={boards.loading}
    />
  );
}

export default PersonalBoards;
