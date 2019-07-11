import styled from "styled-components";

export const BoardCard = styled.div`
  background-color: ${props => props.color || "#036aa7"};
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${props => props.image});
  cursor: pointer;
  border-radius: 0.214rem;
  color: white;
  padding: 0.714em 0.714em 0 0.714em;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 2% 0.571rem 0 !important;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${props => props.image});
  }
`;
