import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSubheader } from "../../../../_metronic/layout";
import AccountInformation from "./AccountInformation";
import { ProfileOverview } from "./ProfileOverview";
import ChangePassword from "./ChangePassword";
import PersonaInformation from "./PersonaInformation";
import { ProfileCard } from "./components/ProfileCard";

export default function UserProfilePage() {
  const suhbeader = useSubheader();
  suhbeader.setTitle("User profile");
  return (
    <div className="d-flex flex-row">
      <ProfileCard></ProfileCard>
      <div className="flex-row-fluid ml-lg-8">
        <Switch>
          <Redirect
            from="/admin/user-profile"
            exact={true}
            to="/admin/user-profile/profile-overview"
          />
          <Route
            path="/admin/user-profile/profile-overview"
            component={ProfileOverview}
          />
          <Route
            path="/admin/user-profile/account-information"
            component={AccountInformation}
          />
          <Route
            path="/admin/user-profile/change-password"
            component={ChangePassword}
          />
          <Route
            path="/admin/user-profile/personal-information"
            component={PersonaInformation}
          />
        </Switch>
      </div>
    </div>
  );
}
