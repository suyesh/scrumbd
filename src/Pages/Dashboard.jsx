import React from "react";
import { DashboardContainer, BoardsList } from "../components";
import { DashboardNav } from "../containers";
import { DashboardRoutes } from "../Routes";

function Dashboard() {
  return (
    <DashboardContainer>
      <DashboardNav />
      <BoardsList>
        <DashboardRoutes />
      </BoardsList>
    </DashboardContainer>
  );
}

export default Dashboard;
