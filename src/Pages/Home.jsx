import React from "react";
import styled from "styled-components";
import { Image, Button, Icon } from "semantic-ui-react";
import TrelloLogo from "../assets/images/trello-logo-white.svg";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#61bd4f),
    to(#5aac44)
  ) !important;
  background: linear-gradient(to bottom, #61bd4f 0%, #5aac44 100%) !important;
  box-shadow: 0 2px 0 #3f6f21 !important;
  color: #fff !important;
  font-weight: bold !important;

  &:hover {
    color: #fff;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#5aac44),
      to(#519839)
    ) !important;
    background: linear-gradient(to bottom, #5aac44 0%, #519839 100%) !important;
    box-shadow: 0 2px 0 #3f6f21 !important;
  }
`;

function Home({
  signUp,
  error,
  setError,
  signInWithGoogle,
  signInWithEmailAndPassword
}) {
  return (
    <HomeContainer>
      <Image src={TrelloLogo} size="medium" />
      <StyledButton onClick={signInWithGoogle}>
        <Icon name="google plus g" size="large" /> Sign in with Google
      </StyledButton>
    </HomeContainer>
  );
}

export default Home;
