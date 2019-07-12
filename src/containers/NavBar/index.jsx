import React from "react";
import withSizes from "react-sizes";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { Popup } from "semantic-ui-react";
import {
  NavBarContainer,
  NavSection,
  Logo,
  NavItem,
  SearchInput,
  Ul,
  Li
} from "../../components";
import TrelloLogo from "../../assets/images/trelloLogo.svg";
import { sizePX } from "../../utils/deviceSizes";
import { showSearchInput } from "./redux/NavBarActions";
import { ROUTES } from "../../constants";

function NavBarBase({ isMobile, showSearch, signOut, user, ...props }) {
  const navigateToHome = () => {
    props.history.push(ROUTES.root);
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
        <Popup
          style={{ width: "300px" }}
          on="click"
          trigger={
            <NavItem
              icon="search"
              color="facebook"
              name="profile"
              image={user.photoURL}
            />
          }
          content={
            <Ul divided relaxed>
              <Li disabled>Profile</Li>
              <Li onClick={signOut}>Log Out</Li>
            </Ul>
          }
          hoverable
          basic
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
