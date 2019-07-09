import React from "react";
import { BoardItems } from "../../components";
import { FAKE_STARRED_BOARDS } from "../../utils/FakeBoards";

function StarredBoards() {
  return (
    <BoardItems
      boards={FAKE_STARRED_BOARDS}
      type="starred"
      name="Starred Boards"
    />
  );
}

export default StarredBoards;
