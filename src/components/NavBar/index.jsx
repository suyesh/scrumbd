import React from "react";
import styled from "styled-components";
import { Button, Image } from "semantic-ui-react";
import Color from "color";
import TrelloLogo from "../../assets/images/trelloLogo.svg";

const NavBarContainer = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  background-color: #016aa7;
  color: white;
  position: sticky;
  top: 0;
`;

const NavSection = styled.div`
  background-color: transparent;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  justify-content: ${props => props.justifyContent || "center"};
`;

const StyledButton = styled(Button)`
  background-color: #599ac3 !important;
  border: none !important;
  box-shadow: 0 !important;

  &:hover {
    background-color: ${Color("#599ac3")
      .darken(0.1)
      .hex()} !important;
  }
`;

const StyledImage = styled(Image)`
  width: 7rem;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

function NavBar() {
  return (
    <NavBarContainer>
      <NavSection justifyContent="flex-start">
        <StyledButton icon="home" color="facebook" name="home" />
        <StyledButton icon="trello" color="facebook" name="boards" />
        <StyledButton icon="search" color="facebook" name="search" />
      </NavSection>
      <NavSection>
        <StyledImage src={TrelloLogo} />
      </NavSection>
      <NavSection justifyContent="flex-end">
        <StyledButton icon="add" color="facebook" name="add" />
        <StyledButton icon="bell" color="facebook" name="notifications" />
        <StyledButton icon="search" color="facebook" name="profile" />
      </NavSection>
    </NavBarContainer>
  );
}

export { NavBar };
