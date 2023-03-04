import React from "react";
import { Switch } from "react-router-dom";

import HomeBasePage from "./HomeBasePage";

export function HomeRoutes() {
  return (
    <Switch>
      <HomeBasePage />
    </Switch>
  );
}
