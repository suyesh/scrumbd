import React from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";

const StyledImage = styled(Image)`
  width: ${props =>
    props.shrink === "true" || props.ismobile === "true"
      ? props.ismobile
        ? "5rem"
        : "6rem"
      : "7rem"};
  margin-right: auto;
  margin-left: auto;
  opacity: ${props => (props.shrink === "true" ? 0.5 : 0.9)};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

function Logo({ logo, shrink, isMobile }) {
  return (
    <StyledImage
      src={logo}
      shrink={shrink.toString()}
      ismobile={isMobile.toString()}
    />
  );
}

export { Logo };
