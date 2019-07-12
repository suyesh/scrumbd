import React from "react";
import { BoardItems } from "../../components";
import { useBoards } from "../../hooks";

function PersonalBoards({ user }) {
  const boards = useBoards(user);
  return (
    <BoardItems
      boards={boards}
      type="personal"
      name="Personal Boards"
      onCreate={() => console.log("hello")}
    />
  );
}

export default PersonalBoards;
