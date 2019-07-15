import React, { useState } from "react";
import styled from "styled-components";
import { Dimmer } from "semantic-ui-react";
import { DashboardContainer, BoardsList } from "../components";
import { DashboardNav } from "../containers";
import { DashboardRoutes } from "../Routes";

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

const StyledDimmer = styled(Dimmer.Inner)`
  position: absolute !important;
  top: 0 !important;
  bottom: 0 !important;
  right: 0 !important;
  left: 0 !important;
  opacity: 0.3 !important;
`;

function CreateBoard({ open }) {
  if (open) {
    return <CreateBoardContainer />;
  }
  return null;
}

function Dashboard({ user }) {
  const [boardForm, openBoardForm] = useState(false);
  return (
    <DashboardContainer>
      <Dimmer active={boardForm}>
        <StyledDimmer
          active={boardForm}
          onClick={() => openBoardForm(false)}
          page
        />
      </Dimmer>
      <CreateBoard open={boardForm} />
      <DashboardNav />
      <BoardsList>
        <DashboardRoutes user={user} openBoardForm={openBoardForm} />
      </BoardsList>
    </DashboardContainer>
  );
}

export default Dashboard;
