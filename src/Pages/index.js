import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));
const Board = lazy(() => import("./Board"));
const NoMatch = lazy(() => import("./NoMatch"));

const Pages = {
  Dashboard,
  Board,
  NoMatch
};

export default Pages;
