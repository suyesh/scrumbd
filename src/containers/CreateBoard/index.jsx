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
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const BackgroundInputContainer = styled.div`
  background-color: red;
  flex: 1;
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

function CreateBoardBase({ open }) {
  if (open) {
    return (
      <CreateBoardContainer>
        <InputContainer>
          <TitleInputContainer>
            <StyledInput placeholder="Add board title" />
          </TitleInputContainer>
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
