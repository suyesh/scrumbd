import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const StyledStar = styled(Icon)`
  align-self: flex-end !important;
  position: absolute !important;
  bottom: 0 !important;
  margin-bottom: 1.071em !important;
  transform: translateX(0%);
  -webkit-transform: translateX(0%);
  animation: slide-in 0.5s forwards;
  -webkit-animation: slide-in 0.5s forwards;

  @keyframes slide-in {
    100% {
      transform: translateX(-100%);
    }
  }

  @-webkit-keyframes slide-in {
    100% {
      -webkit-transform: translateX(-100%);
    }
  }
`;

export function Star({ onClick, show, icon, color }) {
  if (show) {
    return <StyledStar name={icon} color={color} onClick={onClick} />;
  }
  return null;
}
