import React from "react";
import { BoardItems } from "../../components";

function StarredBoards({ user }) {
  if (user.starred && user.starred.length > 0) {
    return (
      <BoardItems
        boards={user.starred}
        type="starred"
        name="Starred Boards"
        user={user}
      />
    );
  }
  return null;
}

export default StarredBoards;
