import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));
const Board = lazy(() => import("./Board"));
const NoMatch = lazy(() => import("./NoMatch"));
const Home = lazy(() => import("./Home"));

const Pages = {
  Dashboard,
  Board,
  NoMatch,
  Home
};

export default Pages;
