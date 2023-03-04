import React from "react";
import { Switch, Route } from "react-router-dom";
import Update from "./Contacts/Update/Update";
import Contacts from "./Contacts/Views/Contacts";
import SendNotifications from "./SendNotifications/SendNotifications";
function NotificationsRoutes() {
  return (
    <Switch>
      <Route path="/admin/Notifications" exact component={SendNotifications} />
      <Route path="/admin/Notifications/Contacts" exact component={Contacts} />
      <Route
        path="/admin/Notifications/Contacts/update/:id"
        exact
        component={Update}
      />
    </Switch>
  );
}

export default NotificationsRoutes;
