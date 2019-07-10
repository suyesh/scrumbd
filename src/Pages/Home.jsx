import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <HomeContainer>
      <h1>Home</h1>
    </HomeContainer>
  );
}

export default Home;
