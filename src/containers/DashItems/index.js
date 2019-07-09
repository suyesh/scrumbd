import { lazy } from "react";

const Boards = lazy(() => import("./Boards"));

const DashItems = {
  boards: Boards
};

export default DashItems;
