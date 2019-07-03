import React from "react";
import withLayout from "../Layout";
import { MainRoutes } from "../Routes";

function App() {
  return <MainRoutes />;
}

export default withLayout(App);
