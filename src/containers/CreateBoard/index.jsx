import React from "react";
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
import {
  toggleBoardForm,
  updateBoardForm,
  setCreating
} from "./redux/CreateBoardActions";
import { boardsRef } from "../../hooks";

function CreateBoardBase({
  open,
  user,
  values,
  creating,
  navigateToBoard,
  ...props
}) {
  const { color, title } = values;
  const { uid } = user;
  const showCreateButton = title.length > 0;

  const handleTitle = (e, data) => {
    props.updateBoardForm({
      title: data.value,
      creatorId: uid,
      createdAt: new Date()
    });
  };

  const handleColor = color => {
    props.updateBoardForm({ color, creatorId: uid, createAt: new Date() });
  };

  const handleCreateBoard = async () => {
    props.setCreating(true);
    if (title.length > 0) {
      const board = await boardsRef().add(values);
      navigateToBoard(`/board/${board.id}`);
      props.toggleBoardForm(false);
      props.setCreating(false);
    }
  };

  if (open) {
    return (
      <CreateBoardContainer>
        <InputContainer>
          <TitleInputContainer color={color}>
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
          {showCreateButton && (
            <Button onClick={handleCreateBoard} loading={creating}>
              Create Board
            </Button>
          )}
        </SubmitButtonContainer>
      </CreateBoardContainer>
    );
  }
  return null;
}

const mapStateToProps = ({ boardForm: { open, values, creating } }) => ({
  open,
  values,
  creating
});

const actions = {
  toggleBoardForm,
  updateBoardForm,
  setCreating
};

const CreateBoard = connect(
  mapStateToProps,
  actions
)(CreateBoardBase);

export { CreateBoard };
