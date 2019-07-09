import React from "react";
import { BoardItems } from "../../components";
import { FAKE_TEAM_BOARDS } from "../../utils/FakeBoards";

function TeamBoards() {
  return (
    <BoardItems boards={FAKE_TEAM_BOARDS} type="team" name="Team Boards" />
  );
}

export default TeamBoards;
