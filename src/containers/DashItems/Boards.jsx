import React, { Fragment } from "react";
import PersonalBoards from "./PersonalBoards";
import StarredBoards from "./StarredBoards";
import TeamBoards from "./TeamBoards";

function Boards() {
  return (
    <Fragment>
      <StarredBoards />
      <PersonalBoards />
      <TeamBoards />
    </Fragment>
  );
}

export default Boards;
