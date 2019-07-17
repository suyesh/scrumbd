import React from "react";
import styled from "styled-components";

const ColorSquare = styled.div`
  background-color: ${props => props.color};
`;

export function ColorSelector({ color, onClick }) {
  return <ColorSquare onClick={() => onClick(color)} />;
}
