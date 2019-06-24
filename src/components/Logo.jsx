import React from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";

const StyledImage = styled(Image)`
  width: 7rem;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

function Logo({ logo }) {
  return <StyledImage src={logo} />;
}

export { Logo };
