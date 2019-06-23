import { lazy } from "react";

const Boards = lazy(() => import("./Boards"));
const Board = lazy(() => import("./Board"));
const NoMatch = lazy(() => import("./NoMatch"));

const Pages = {
  Boards,
  Board,
  NoMatch
};

export default Pages;
