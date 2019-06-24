import React from "react";
import styled from "styled-components";
import { Button, Image, Icon } from "semantic-ui-react";
import withSizes from "react-sizes";
import Color from "color";
import TrelloLogo from "../../assets/images/trelloLogo.svg";
import { sizePX } from "../../utils/deviceSizes";

const NavBarContainer = styled.div`
  width: 100%;
  height: 3.214rem;
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
  padding-left: 0.357rem;
  padding-right: 0.357rem;
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

function NavBarBase({ isMobile }) {
  const boardsButton = () => {
    if (isMobile) {
      return <StyledButton icon="trello" color="facebook" name="boards" />;
    }
    return (
      <StyledButton icon color="facebook" name="boards" labelPosition="left">
        <Icon name="trello" />
        Boards
      </StyledButton>
    );
  };
  return (
    <NavBarContainer>
      <NavSection justifyContent="flex-start">
        <StyledButton icon="home" color="facebook" name="home" />
        {boardsButton()}
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

const mapSizesToProps = ({ width }) => ({
  isMobile: width < sizePX.laptop
});

const NavBar = withSizes(mapSizesToProps)(NavBarBase);

export { NavBar };
