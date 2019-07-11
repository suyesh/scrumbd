import React from "react";
import { Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import {
  SideMenu,
  StyledUl,
  StyledLi,
  StyledSpan,
  ListTitle
} from "../../components";
import { ROUTES } from "../../constants";

function DashboardNavBase({ location: { pathname } }) {
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
        <ListTitle>Teams</ListTitle>
      </StyledUl>
    </SideMenu>
  );
}

const DashboardNav = withRouter(DashboardNavBase);

export { DashboardNav };
