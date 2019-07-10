import styled from "styled-components";
import { media } from "../utils/deviceSizes";

export const BoardCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13.571rem, 1fr));
  grid-gap: 0.714rem;
  grid-auto-rows: 6.714rem;
  padding: 0.714rem;

  @media ${media.tablet} {
    grid-template-columns: repeat(auto-fit, 13.571rem);
  }
`;
