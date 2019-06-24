import React from "react";
import withSizes from "react-sizes";
import { NavBarContainer, NavSection, Logo, NavItem } from "../../components";
import TrelloLogo from "../../assets/images/trelloLogo.svg";
import { sizePX } from "../../utils/deviceSizes";

function NavBarBase({ isMobile }) {
  return (
    <NavBarContainer>
      <NavSection justifyContent="flex-start">
        <NavItem
          icon="home"
          color="facebook"
          name="home"
          isMobile={isMobile}
          onClick={() => console.log("Clicked")}
        />
        <NavItem
          icon="trello"
          color="facebook"
          name="boards"
          isMobile={isMobile}
          onClick={() => console.log("Clicked")}
          showText
        />
        <NavItem
          icon="search"
          color="facebook"
          name="search"
          isMobile={isMobile}
          onClick={() => console.log("Clicked")}
        />
      </NavSection>
      <NavSection>
        <Logo logo={TrelloLogo} />
      </NavSection>
      <NavSection justifyContent="flex-end">
        <NavItem
          icon="add"
          color="facebook"
          name="add"
          isMobile={isMobile}
          onClick={() => console.log("Clicked")}
        />
        <NavItem
          icon="bell"
          color="facebook"
          name="notifications"
          isMobile={isMobile}
          onClick={() => console.log("Clicked")}
        />
        <NavItem
          icon="search"
          color="facebook"
          name="profile"
          isMobile={isMobile}
          onClick={() => console.log("Clicked")}
        />
      </NavSection>
    </NavBarContainer>
  );
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < sizePX.laptop
});

const NavBar = withSizes(mapSizesToProps)(NavBarBase);

export { NavBar };
