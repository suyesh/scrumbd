import styled from "styled-components";
import { sizeREM } from "../utils/deviceSizes";

const SideMenu = styled.nav`
  width: 16.429rem;
  padding: 10%;

  @media (max-width: ${sizeREM.tablet}rem) {
    display: none;
  }
`;

export { SideMenu };
