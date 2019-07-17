import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  BackgroundInputContainer,
  ColorSelector,
  CreateBoardContainer,
  InputContainer,
  StyledInput,
  SubmitButtonContainer,
  TitleInputContainer
} from "../../components";
import { toggleBoardForm } from "./redux/CreateBoardActions";
import { fst } from "../../firebase";

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
