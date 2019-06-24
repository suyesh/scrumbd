import React from "react";
import styled from "styled-components";
import { Input, Icon } from "semantic-ui-react";

const StyledInput = styled(Input)`
  width: 27.214rem;
  border-radius: 0 !important;
  border: none !important;
`;

const OpenSearch = styled(Icon)`
  margin-right: 2.143rem !important;
  transform: rotate(45deg) !important;
`;

const CloseInput = styled(Icon)`
  color: black;
`;

function SearchInput({ show, onClose, onNavigate }) {
  if (show) {
    return (
      <StyledInput icon>
        <input />
        <OpenSearch
          name="long arrow alternate up"
          onClick={() => onNavigate()}
          link
        />
        <CloseInput name="close" onClick={() => onClose()} link />
      </StyledInput>
    );
  }
  return null;
}

export { SearchInput };
