import styled from "styled-components";

const BackgroundInputContainer = styled.div`
  background-color: transparent;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(2.5rem, 1fr));
  grid-auto-rows: minmax(2.5em, 1fr);
  grid-gap: 0.714rem;
  & div {
    background-color: black;
    width: 100%;
    height: 100%;
    border-radius: 0.357rem;
    cursor: pointer;
  }
`;

export { BackgroundInputContainer };
