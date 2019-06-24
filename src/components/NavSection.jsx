import styled from "styled-components";

const NavSection = styled.div`
  background-color: transparent;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.357rem;
  padding-right: 0.357rem;
  justify-content: ${props => props.justifyContent || "center"};
`;

export { NavSection };
