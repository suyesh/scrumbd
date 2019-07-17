import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { toggleBoardForm } from "./redux/CreateBoardActions";
import { fst } from "../../firebase";

const CreateBoardContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  background: transparent;
  width: 30rem;
  height: 11.071rem;
  z-index: 10000;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

const InputContainer = styled.div`
  background-color: transparent;
  flex: 1;
  width: 100%;
  display: flex;
  margin-bottom: 5px;
`;

const SubmitButtonContainer = styled.div`
  background: transparent;
  height: 3.357rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TitleInputContainer = styled.div`
  background-color: ${props => props.color};
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-right: 5px;
`;

const BackgroundInputContainer = styled.div`
  background-color: transparent;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35px, 1fr));
  grid-auto-rows: minmax(35px, 1fr);
  grid-gap: 10px;
  & div {
    background-color: black;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    cursor: pointer;
  }
`;

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

function ColorSelector({ color, onClick }) {
  return (
    <div style={{ backgroundColor: color }} onClick={() => onClick(color)} />
  );
}

function CreateBoardBase({ open, user, ...props }) {
  const [formParams, setFormParams] = useState({
    title: "",
    color: "#026AA7",
    image: null,
    creatorId: user.uid
  });

  const handleTitle = (e, data) => {
    setFormParams({ ...formParams, title: data.value });
  };

  const handleColor = color => {
    setFormParams({ ...formParams, color });
  };

  const handleCreateBoard = () => {
    fst.collection("boards").add(formParams);
    props.toggleBoardForm(false);
  };

  if (open) {
    return (
      <CreateBoardContainer>
        <InputContainer>
          <TitleInputContainer color={formParams.color}>
            <StyledInput placeholder="Add board title" onChange={handleTitle} />
          </TitleInputContainer>
          <BackgroundInputContainer>
            <ColorSelector color="#8e44ad" onClick={handleColor} />
            <ColorSelector color="#3498db" onClick={handleColor} />
            <ColorSelector color="#27ae60" onClick={handleColor} />
            <ColorSelector color="#e67e22" onClick={handleColor} />
            <ColorSelector color="#e74c3c" onClick={handleColor} />
            <ColorSelector color="#34495e" onClick={handleColor} />
            <ColorSelector color="#6ab04c" onClick={handleColor} />
            <ColorSelector color="#4834d4" onClick={handleColor} />
            <ColorSelector color="#026AA7" onClick={handleColor} />
          </BackgroundInputContainer>
        </InputContainer>
        <SubmitButtonContainer>
          <Button onClick={handleCreateBoard}>Create Board</Button>
        </SubmitButtonContainer>
      </CreateBoardContainer>
    );
  }
  return null;
}

const mapStateToProps = ({ boardForm }) => ({
  open: boardForm.open
});

const actions = {
  toggleBoardForm
};

const CreateBoard = connect(
  mapStateToProps,
  actions
)(CreateBoardBase);

export { CreateBoard };
