import React from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";
import TrelloLogo from "../assets/images/trello-logo-white.svg";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Home() {
  return (
    <HomeContainer>
      <Image src={TrelloLogo} size="medium" />
    </HomeContainer>
  );
}

export default Home;
