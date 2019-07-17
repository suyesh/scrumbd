import styled from "styled-components";
import { Input } from "semantic-ui-react";

const StyledInput = styled(Input)`
  & input {
    background: transparent !important;
    border: none !important;
    color: #fff !important;
    font-size: 1.143rem !important;
    font-weight: 700 !important;
    line-height: 1.5em !important;
    margin: 0 !important;
    min-height: 0 !important;
    outline: 0 !important;
    background: hsla(0, 0%, 100%, 0.1) !important;
    height: 2.188em !important;

    &::placeholder {
      color: #fff !important;
      font-size: 1em !important;
      font-weight: 800 !important;
      line-height: 1.5em !important;
    }

    &:focus {
      background: hsla(0, 0%, 100%, 0.3) !important;
      border-radius: 0.188em;
    }
  }
`;

export { StyledInput };
