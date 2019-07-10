import React from "react";
import { DashboardContainer, BoardsList } from "../components";
import { DashboardNav } from "../containers";
import { DashboardRoutes } from "../Routes";

function Dashboard({ user }) {
  return (
    <DashboardContainer>
      <DashboardNav />
      <BoardsList>
        <DashboardRoutes user={user} />
      </BoardsList>
    </DashboardContainer>
  );
}

export default Dashboard;
