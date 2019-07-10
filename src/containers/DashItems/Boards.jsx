import React, { Fragment } from "react";
import PersonalBoards from "./PersonalBoards";
import StarredBoards from "./StarredBoards";
// import TeamBoards from "./TeamBoards";

function Boards({ user }) {
  return (
    <Fragment>
      <StarredBoards />
      <PersonalBoards user={user} />
      {/*<TeamBoards />*/}
    </Fragment>
  );
}

export default Boards;
