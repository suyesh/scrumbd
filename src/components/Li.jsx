import styled from "styled-components";
import { List } from "semantic-ui-react";

const Li = styled(List.Item)`
  padding: 0.714rem !important;
  color: #172b4d !important;
  font-size: 1rem !important;
  font-weight: 400 !important;
  line-height: 1.429rem !important;
  cursor: pointer !important;

  &:hover {
    background-color: rgba(9, 30, 66, 0.04) !important;
  }
`;

export { Li };
