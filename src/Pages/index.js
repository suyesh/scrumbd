import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));
const Board = lazy(() => import("./Board"));
const NoMatch = lazy(() => import("./NoMatch"));
const Home = lazy(() => import("./Home"));
const SignIn = lazy(() => import("./SignIn"));
const SignUp = lazy(() => import("./SignUp"));

const Pages = {
  Dashboard,
  Board,
  NoMatch,
  Home,
  SignIn,
  SignUp
};

export default Pages;
