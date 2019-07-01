import React from "react";
import styled from "styled-components";
import { media, sizeREM } from "../utils/deviceSizes";

const BoardsContainer = styled.div`
  height: 100%;
  margin: 2% 1%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(calc(100vh - 6.25rem), 100%);
  @media ${media.tablet} {
    margin: 2% 8%;
    grid-gap: 1.429rem;
    grid-template-columns: 16.429rem 1fr;
  }

  @media (min-width: 54.938rem) and (max-width: 78.571rem) {
    grid-gap: 0.714rem;
    margin: 2% 0.5%;
  }
`;

const SideMenu = styled.div`
  width: 16.429rem;
  background-color: red;

  @media (max-width: ${sizeREM.tablet}rem) {
    display: none;
  }
`;

const BoardsList = styled.div`
  background-color: green;
`;

function Boards() {
  return (
    <BoardsContainer>
      <SideMenu>test</SideMenu>
      <BoardsList>test</BoardsList>
    </BoardsContainer>
  );
}

export default Boards;
