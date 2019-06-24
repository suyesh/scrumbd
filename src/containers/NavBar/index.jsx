import React from "react";
import withSizes from "react-sizes";
import { connect } from "react-redux";
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
import { showSearchInput } from "./redux/NavBarActions";

function NavBarBase({ isMobile, showSearch, ...props }) {
  const navigateToHome = () => {
    props.history.push("/");
  };

  const handleSearchClick = () => {
    props.showSearchInput(!showSearch);
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
          hide={showSearch && !isMobile}
        />

        <SearchInput
          show={showSearch && !isMobile}
          onClose={handleSearchClick}
        />
      </NavSection>

      <NavSection>
        <Logo logo={TrelloLogo} shrink={showSearch && !isMobile} />
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

const mapStateToProps = ({ nav }) => ({
  showSearch: nav.showSearch
});

const actions = {
  showSearchInput
};

const NavBar = compose(
  withRouter,
  withSizes(mapSizesToProps),
  connect(
    mapStateToProps,
    actions
  )
)(NavBarBase);

export { NavBar };
