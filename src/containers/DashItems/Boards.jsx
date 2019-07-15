import React, { Fragment } from "react";
import PersonalBoards from "./PersonalBoards";
import StarredBoards from "./StarredBoards";
// import TeamBoards from "./TeamBoards";

function Boards({ user }) {
  return (
    <Fragment>
      <StarredBoards user={user} />
      <PersonalBoards user={user} />
      {/*<TeamBoards />*/}
    </Fragment>
  );
}

export default Boards;
