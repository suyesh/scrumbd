import React from "react";
import {
  BoardItem,
  BoardItemTitle,
  BoardCardContainer,
  BoardCards
} from "./index";

export function BoardItems({
  boards,
  type,
  name,
  openBoardForm,
  loading,
  user,
  navigateToBoard
}) {
  return (
    <BoardItem>
      <BoardItemTitle type={type} name={name} />
      <BoardCardContainer>
        <BoardCards
          boards={boards}
          openBoardForm={openBoardForm}
          loading={loading}
          user={user}
          navigateToBoard={navigateToBoard}
        />
      </BoardCardContainer>
    </BoardItem>
  );
}
