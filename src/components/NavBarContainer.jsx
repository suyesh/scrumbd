import styled from "styled-components";

const NavBarContainer = styled.div`
  width: 100%;
  height: 3.214rem;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.color};
  color: white;
  position: sticky;
  top: 0;
  z-index: ${props => (props.dimmer ? 0 : 10000)};
`;

export { NavBarContainer };
