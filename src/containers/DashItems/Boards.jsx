import React, { Fragment } from "react";
import PersonalBoards from "./PersonalBoards";
import StarredBoards from "./StarredBoards";
// import TeamBoards from "./TeamBoards";

function Boards({ user, openBoardForm, navigateToBoard }) {
  return (
    <Fragment>
      <StarredBoards user={user} navigateToBoard={navigateToBoard} />
      <PersonalBoards
        user={user}
        openBoardForm={openBoardForm}
        navigateToBoard={navigateToBoard}
      />
      {/*<TeamBoards />*/}
    </Fragment>
  );
}

export default Boards;
