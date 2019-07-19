import React from "react";
import styled from "styled-components";
import { BoardView } from "../containers";

const BoardContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Board() {
  return (
    <BoardContainer>
      <BoardView />
    </BoardContainer>
  );
}

export default Board;
