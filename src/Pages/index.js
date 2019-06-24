import { lazy } from "react";

const Boards = lazy(() => import("./Boards"));
const Board = lazy(() => import("./Board"));
const NoMatch = lazy(() => import("./NoMatch"));
const Search = lazy(() => import("./Search"));

const Pages = {
  Boards,
  Board,
  NoMatch,
  Search
};

export default Pages;
