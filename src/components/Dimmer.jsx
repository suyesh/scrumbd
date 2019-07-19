import React from "react";
import { Dimmer } from "semantic-ui-react";
import styled from "styled-components";

const StyledDimmer = styled(Dimmer.Inner)`
  position: absolute !important;
  top: 0 !important;
  bottom: 0 !important;
  right: 0 !important;
  left: 0 !important;
  overflow: hidden !important;
  opacity: 0.1 !important;
  z-index: 100000;
`;

function DimmerComponent({ active, onClick }) {
  return (
    <Dimmer active={active}>
      <StyledDimmer active={active} onClick={onClick} page />
    </Dimmer>
  );
}

export { DimmerComponent };
