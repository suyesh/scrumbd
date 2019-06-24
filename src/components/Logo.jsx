import React from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";

const StyledImage = styled(Image)`
  width: ${props => (props.shrink === "true" ? "6em" : "7rem")};
  margin-right: ${props => props.shrink === "true" && "100px"};
  opacity: ${props => (props.shrink === "true" ? 0.5 : 0.9)};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

function Logo({ logo, shrink }) {
  return <StyledImage src={logo} shrink={shrink.toString()} />;
}

export { Logo };
