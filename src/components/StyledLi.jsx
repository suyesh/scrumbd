import styled from "styled-components";

const StyledLi = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.429rem 0.571rem 0.429rem 0.429rem;
  color: ${props => (props.active ? "#0079bf" : "#172b4d")};
  line-height: 1.429rem;
  font-weight: 700;
  background-color: ${props => (props.active ? "#e4f0f6" : "transparent")};
  cursor: pointer;
  border-radius: 0.357em;
  min-height: 1.429rem;
  margin-bottom: 0.714em;

  &:hover {
    background-color: ${props => !props.active && "#e0e0e0"};
  }

  & i {
    align-self: flex-start;
  }
`;

export { StyledLi };
