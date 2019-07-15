import React from "react";
import {
  BoardItem,
  BoardItemTitle,
  BoardCardContainer,
  BoardCards
} from "./index";

export function BoardItems({ boards, type, name, onCreate, loading }) {
  return (
    <BoardItem>
      <BoardItemTitle type={type} name={name} />
      <BoardCardContainer>
        <BoardCards boards={boards} onCreate={onCreate} loading={loading} />
      </BoardCardContainer>
    </BoardItem>
  );
}
