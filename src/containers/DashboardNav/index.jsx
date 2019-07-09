import React from "react";
import { Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { SideMenu, StyledUl, StyledLi, StyledSpan } from "../../components";
import { ROUTES } from "../../constants";

import styled from "styled-components";

const ListTitle = styled.li`
  color: #6b778c;
  font-size: 0.857rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 1.143rem;
  margin-top: 1.143rem;
  text-transform: uppercase;
  flex: 1 1 auto;
  margin: 0;
  padding: 0.571rem 0;
`;

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
