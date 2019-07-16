import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const CreateBoardContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  background-color: red;
  width: 30rem;
  height: 11.071rem;
  z-index: 10000;
`;

function CreateBoardBase({ open }) {
  if (open) {
    return <CreateBoardContainer />;
  }
  return null;
}

const mapStateToProps = ({ boardForm }) => ({
  open: boardForm.open
});

const CreateBoard = connect(mapStateToProps)(CreateBoardBase);

export { CreateBoard };
