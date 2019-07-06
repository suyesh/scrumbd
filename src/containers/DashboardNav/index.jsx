import React from "react";
import { Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

import { SideMenu, StyledUl, StyledLi, StyledSpan } from "../../components";
import { ROUTES } from "../../constants";

function DashboardNavBase({ location: { pathname } }) {
  const home = pathname === ROUTES.home;
  const boards = pathname === ROUTES.root;
  return (
    <SideMenu>
      <StyledUl>
        <Link to={ROUTES.root}>
          <StyledLi active={boards}>
            <Icon name="trello" />
            <StyledSpan>Boards</StyledSpan>
          </StyledLi>
        </Link>
        <Link to={ROUTES.home}>
          <StyledLi active={home}>
            <Icon name="home" />
            <StyledSpan>Home</StyledSpan>
          </StyledLi>
        </Link>
      </StyledUl>
    </SideMenu>
  );
}

const DashboardNav = withRouter(DashboardNavBase);

export { DashboardNav };
