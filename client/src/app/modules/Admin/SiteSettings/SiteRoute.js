import React from "react";
import { Switch, Route } from "react-router-dom";
import SiteSettings from "./SiteSettings";
import TermsAndConditions from "./TermsAndConditions";

function SiteRoute() {
  return (
    <Switch>
      <Route path="/admin/site-settings" exact component={SiteSettings} />
      <Route path="/admin/site-settings/terms-conditions" exact component={TermsAndConditions} />
    </Switch>
  );
}

export default SiteRoute;
