import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { sizeREM } from "../../utils/deviceSizes";

const SideMenu = styled.nav`
  width: 16.429rem;
  padding: 10%;

  @media (max-width: ${sizeREM.tablet}rem) {
    display: none;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
`;

const StyledLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.429rem 0.571rem 0.429rem 0.429rem;
  color: ${props => (props.active ? "#0079bf" : "#172b4d")};
  line-height: 1.429rem;
  font-weight: 700;
  background-color: ${props => (props.active ? "#e4f0f6" : "transparent")};
  cursor: pointer;
  border-radius: 0.357em;
  min-height: 1.429rem;
  margin-bottom: 0.714em;

  &:hover {
    background-color: ${props => !props.active && "#e0e0e0"};
  }

  & i {
    align-self: flex-start;
  }
`;

const StyledSpan = styled.span`
  margin-right: auto;
  margin-left: 0.714rem;
`;

function DashboardNavBase({ location: { pathname } }) {
  return (
    <SideMenu>
      <StyledUl>
        <Link to="/">
          <StyledLi active={pathname === "/"}>
            <Icon name="home" />
            <StyledSpan>Home</StyledSpan>
          </StyledLi>
        </Link>
        <Link to="/boards">
          <StyledLi active={pathname === "/boards"}>
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
