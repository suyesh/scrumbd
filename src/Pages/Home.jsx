import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Image, Button, Icon, Loader } from "semantic-ui-react";
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

function Login({ method, text, icon, loading, error }) {
  const [authWindowOpen, setAuthWindowOpen] = useState(false);
  const handleOnClick = () => {
    setAuthWindowOpen(true);
    method();
  };

  useEffect(
    () => {
      if (error) {
        setAuthWindowOpen(false);
      }
    },
    [error]
  );

  if (authWindowOpen || loading) {
    return (
      <Loader active inline="centered" size="medium" indeterminate inverted>
        Please Wait...
      </Loader>
    );
  }

  return (
    <StyledButton onClick={handleOnClick}>
      <Icon name={icon} size="large" /> {text}
    </StyledButton>
  );
}

function Home({
  signUp,
  error,
  setError,
  signInWithGoogle,
  signInWithEmailAndPassword,
  loading
}) {
  return (
    <HomeContainer>
      <Image src={TrelloLogo} size="medium" />
      <Login
        method={signInWithGoogle}
        icon="google plus g"
        text="Sign in with Google"
        loading={loading}
        error={error}
      />
    </HomeContainer>
  );
}

export default Home;
