import React from "react";
import styled from "styled-components";
import { Button, Input } from "semantic-ui-react";
import { connect } from "react-redux";

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
  background-color: green;
  flex: 1;
  width: 100%;
  display: flex;
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
  background-color: green;
`;

const BackgroundInputContainer = styled.div``;

function CreateBoardBase({ open }) {
  if (open) {
    return (
      <CreateBoardContainer>
        <InputContainer>
          <TitleInputContainer />
          <BackgroundInputContainer />
        </InputContainer>
        <SubmitButtonContainer>
          <Button>Create Board</Button>
        </SubmitButtonContainer>
      </CreateBoardContainer>
    );
  }
  return null;
}

const mapStateToProps = ({ boardForm }) => ({
  open: boardForm.open
});

const CreateBoard = connect(mapStateToProps)(CreateBoardBase);

export { CreateBoard };
