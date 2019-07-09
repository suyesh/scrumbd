import React from "react";
import {
  BoardItem,
  BoardItemTitle,
  BoardCardContainer,
  BoardCards
} from "./index";

export function BoardItems({ boards, type, name }) {
  if (boards.length > 0) {
    return (
      <BoardItem>
        <BoardItemTitle type={type} name={name} />
        <BoardCardContainer>
          <BoardCards boards={boards} />
        </BoardCardContainer>
      </BoardItem>
    );
  }
  return null;
}
