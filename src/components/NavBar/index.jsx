import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  background-color: #016aa7;
  color: white;
`;

const NavSection = styled.div`
  background-color: ${props => props.background || "red"};
  height: 55px;
  width: 100%;
`;

function NavBar() {
  return (
    <NavBarContainer>
      <NavSection background="blue" />
      <NavSection background="green" />
      <NavSection />
    </NavBarContainer>
  );
}

export { NavBar };
