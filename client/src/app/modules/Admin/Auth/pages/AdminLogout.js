import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LayoutSplashScreen } from "../../../../../_metronic/layout";
import * as auth from "../_redux/AdminAuthRedux";

class AdminLogout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    const { hasAuthToken } = this.props;
    return hasAuthToken ? (
      <LayoutSplashScreen />
    ) : (
      <Redirect to="/admin/auth/login" />
    );
  }
}

export default connect(
  ({ auth }) => ({ hasAuthToken: Boolean(auth.authToken) }),
  auth.actions
)(AdminLogout);
