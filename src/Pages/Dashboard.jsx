import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { DashboardNav } from "../containers";
import { media } from "../utils/deviceSizes";

const DashboardContainer = styled.div`
  height: 100%;
  margin: 2% 1%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(calc(100vh - 6.25rem), 100%);
  @media ${media.tablet} {
    margin: 2% 8%;
    grid-gap: 1.429rem;
    grid-template-columns: 16.429rem 1fr;
  }

  @media (min-width: 54.938rem) and (max-width: 78.571rem) {
    grid-gap: 0.714rem;
    margin: 2% 0.5%;
  }
`;

const BoardsList = styled.div``;

function Dashboard() {
  return (
    <DashboardContainer>
      <DashboardNav />
      <BoardsList>
        <Route exact path="/boards" component={() => <h1>Hello boards</h1>} />
      </BoardsList>
    </DashboardContainer>
  );
}

export default Dashboard;
