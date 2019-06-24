import React, { useState } from "react";
import withSizes from "react-sizes";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import {
  NavBarContainer,
  NavSection,
  Logo,
  NavItem,
  SearchInput
} from "../../components";
import TrelloLogo from "../../assets/images/trelloLogo.svg";
import { sizePX } from "../../utils/deviceSizes";

function NavBarBase({ isMobile, ...props }) {
  const [showSearchInput, setSearchInput] = useState(false);

  const navigateToHome = () => {
    props.history.push("/");
  };

  const handleSearchClick = () => {
    if (isMobile) {
      props.history.push("/search");
      return;
    }
    setSearchInput(true);
  };

  return (
    <NavBarContainer>
      <NavSection justifyContent="flex-start">
        <NavItem
          icon="home"
          color="facebook"
          name="home"
          isMobile={isMobile}
          onClick={navigateToHome}
        />

        <NavItem
          icon="trello"
          color="facebook"
          name="boards"
          isMobile={isMobile}
          onClick={() => console.log("/")}
          showText
        />

        <NavItem
          icon="search"
          color="facebook"
          name="search"
          isMobile={isMobile}
          onClick={handleSearchClick}
          hide={showSearchInput && !isMobile}
        />

        <SearchInput
          show={showSearchInput && !isMobile}
          onClose={() => setSearchInput(false)}
          onNavigate={() => props.history.push("/search")}
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

const NavBar = compose(
  withRouter,
  withSizes(mapSizesToProps)
)(NavBarBase);

export { NavBar };
