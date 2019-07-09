import React from "react";
import { BoardItems } from "../../components";
import { FAKE_PERSONAL_BOARDS } from "../../utils/FakeBoards";

function PersonalBoards() {
  return (
    <BoardItems
      boards={FAKE_PERSONAL_BOARDS}
      type="personal"
      name="Personal Boards"
    />
  );
}

export default PersonalBoards;
