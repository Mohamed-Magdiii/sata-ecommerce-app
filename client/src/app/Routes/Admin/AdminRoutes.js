import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Layout } from "../../../_metronic/layout";
import AdminBasePage from "../../Routes/Admin/AdminBasePage";
import { AdminLogout, AdminAuthPage } from "../../modules/Admin/Auth";
import ErrorsPage from "../../modules/Admin/ErrorsExamples/ErrorsPage";

export function AdminRoutes() {
  const { isAuthorized } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
    }),
    shallowEqual
  );
  return (
    <Switch>
      {!isAuthorized ? (
        <Route>
          <AdminAuthPage />
        </Route>
      ) : (
        <Redirect from="/admin/auth" to="/admin" />
      )}
      <Route path="/admin/error" component={ErrorsPage} />
      <Route path="/admin/logout" component={AdminLogout} />
      {!isAuthorized ? (
        <Redirect to="/admin/auth/login" />
      ) : (
        <Layout>
          <AdminBasePage />
        </Layout>
      )}
    </Switch>
  );
}
