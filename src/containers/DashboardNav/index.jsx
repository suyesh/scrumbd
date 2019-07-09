import React from "react";
import { Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { SideMenu, StyledUl, StyledLi, StyledSpan } from "../../components";
import { ROUTES } from "../../constants";

import styled from "styled-components";

const ListTitle = styled.li`
  color: #6b778c;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 16px;
  margin-top: 16px;
  text-transform: uppercase;
  flex: 1 1 auto;
  margin: 0;
  padding: 8px 0;
`;

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
        <ListTitle>Teams</ListTitle>
      </StyledUl>
    </SideMenu>
  );
}

const DashboardNav = withRouter(DashboardNavBase);

export { DashboardNav };
