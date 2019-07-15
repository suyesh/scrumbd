import React from "react";
import { BoardItems } from "../../components";
import { FAKE_STARRED_BOARDS } from "../../utils/FakeBoards";

function StarredBoards({ user }) {
  if (user.starred && user.starred.length < 1) {
    return null;
  }
  return (
    <BoardItems
      boards={FAKE_STARRED_BOARDS}
      type="starred"
      name="Starred Boards"
    />
  );
}

export default StarredBoards;
