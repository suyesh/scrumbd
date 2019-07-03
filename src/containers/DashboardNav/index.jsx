import React from "react";
import { Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

import { SideMenu, StyledUl, StyledLi, StyledSpan } from "../../components";
import { ROUTES } from "../../constants";

function DashboardNavBase({ location: { pathname } }) {
  return (
    <SideMenu>
      <StyledUl>
        <Link to={ROUTES.root}>
          <StyledLi active={pathname === ROUTES.root}>
            <Icon name="home" />
            <StyledSpan>Home</StyledSpan>
          </StyledLi>
        </Link>
        <Link to={ROUTES.boards}>
          <StyledLi active={pathname === ROUTES.boards}>
            <Icon name="trello" />
            <StyledSpan>Boards</StyledSpan>
          </StyledLi>
        </Link>
      </StyledUl>
    </SideMenu>
  );
}

const DashboardNav = withRouter(DashboardNavBase);

export { DashboardNav };
