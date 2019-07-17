import React, { useState, useEffect } from "react";
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
import { toggleBoardForm, updateBoardForm } from "./redux/CreateBoardActions";
import { fst } from "../../firebase";

function CreateButton({ show, text, onClick }) {
  if (show) {
    return <Button onClick={onClick}>{text}</Button>;
  }
  return null;
}

function CreateBoardBase({ open, user, values, ...props }) {
  const [enabled, setEnabled] = useState(true);
  const { color, title } = values;
  const { uid } = user;

  useEffect(() => {
    setEnabled(title.length > 0);
  }, [title]);

  const handleTitle = (e, data) => {
    props.updateBoardForm({ title: data.value, creatorId: uid });
  };

  const handleColor = color => {
    props.updateBoardForm({ color, creatorId: uid });
  };

  const handleCreateBoard = () => {
    fst.collection("boards").add(values);
    props.toggleBoardForm(false);
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
          <CreateButton
            onClick={handleCreateBoard}
            text="Create Board"
            show={enabled}
          />
        </SubmitButtonContainer>
      </CreateBoardContainer>
    );
  }
  return null;
}

const mapStateToProps = ({ boardForm: { open, values } }) => ({
  open,
  values
});

const actions = {
  toggleBoardForm,
  updateBoardForm
};

const CreateBoard = connect(
  mapStateToProps,
  actions
)(CreateBoardBase);

export { CreateBoard };
