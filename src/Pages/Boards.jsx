import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
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

const SideMenu = styled.nav`
  width: 16.429rem;
  padding: 10%;

  @media (max-width: ${sizeREM.tablet}rem) {
    display: none;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
`;

const StyledLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.429rem 0.571rem 0.429rem 0.429rem;
  color: #0079bf;
  line-height: 1.429rem;
  font-weight: 700;
  background-color: #e4f0f6;
  cursor: pointer;
  border-radius: 4px;
  min-height: 1.429rem;
  margin-bottom: 10px;

  &:hover {
    background-color: grey;
  }
`;

const StyledSpan = styled.span`
  margin-right: auto;
  margin-left: 0.714rem;
`;

const BoardsList = styled.div`
  background-color: green;
`;

function Boards() {
  return (
    <BoardsContainer>
      <SideMenu>
        <StyledUl>
          <StyledLi>
            <Icon name="trello" size="large" />
            <StyledSpan>Boards</StyledSpan>
          </StyledLi>

          <StyledLi>
            <Icon name="home" size="large" />
            <StyledSpan>Home</StyledSpan>
          </StyledLi>
        </StyledUl>
      </SideMenu>

      <BoardsList>test</BoardsList>
    </BoardsContainer>
  );
}

export default Boards;
