import { lazy } from "react";

const Boards = lazy(() => import("./Boards"));
const Home = lazy(() => import("./Home"));

const DashItems = {
  boards: Boards,
  home: Home
};

export default DashItems;
