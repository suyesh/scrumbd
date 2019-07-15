import React, { Fragment } from "react";
import PersonalBoards from "./PersonalBoards";
import StarredBoards from "./StarredBoards";
// import TeamBoards from "./TeamBoards";

function Boards({ user, openBoardForm }) {
  return (
    <Fragment>
      <StarredBoards user={user} />
      <PersonalBoards user={user} openBoardForm={openBoardForm} />
      {/*<TeamBoards />*/}
    </Fragment>
  );
}

export default Boards;
