import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${props => props.color} !important;
`;

export function ColorSelector({ color, onClick }) {
  return <StyledDiv onClick={() => onClick(color)} color={color} />;
}
