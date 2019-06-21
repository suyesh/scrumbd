import React from "react";
import styled from "styled-components";

const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #016aa7;
  color: white;
`;

function LeftItem() {}

function RightItem() {}

function Logo() {}

function NavBar() {
  return <NavBarContainer>test</NavBarContainer>;
}

export { NavBar };
