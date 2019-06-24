import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Input, Icon } from "semantic-ui-react";

const StyledInput = styled(Input)`
  width: 27.214rem;
  border-radius: 0 !important;
  border: none !important;
  animation: createBox .3s;
  transform-origin: 0% 100% ;

    @keyframes createBox {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

const CloseInput = styled(Icon)`
  color: black;
`;

function SearchInput({ show, onClose }) {
  const inputEl = useRef(null);

  useEffect(
    () => {
      if (inputEl && show) {
        inputEl.current.focus();
      }
    },
    [show]
  );

  if (show) {
    return (
      <StyledInput icon focus>
        <input ref={inputEl} />
        <CloseInput name="close" onClick={() => onClose()} link color="grey" />
      </StyledInput>
    );
  }
  return null;
}

export { SearchInput };
