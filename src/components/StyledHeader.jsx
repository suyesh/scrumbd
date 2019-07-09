import styled from "styled-components";
import { Header } from "semantic-ui-react";

export const StyledHeader = styled(Header)`
  color: ${props => props.styled} !important;
  overflow: hidden !important ;
  text-overflow: ellipsis !important;
  -webkit-box-orient: vertical !important;
  display: -webkit-box !important;
  -webkit-line-clamp: 2 !important;
  font-size: 1.143rem !important;
  font-weight: 700 !important;
  line-height: 1.429rem !important;
`;
