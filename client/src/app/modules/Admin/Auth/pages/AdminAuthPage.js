/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, Switch, Redirect } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { ContentRoute } from "../../../../../_metronic/layout";
import AdminLogin from "./AdminLogin";
import AdminRegistration from "./AdminRegistration";
import AdminForgotPassword from "./AdminForgotPassword";
import AdminResetPassword from "./AdminResetPassword";
import "../../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";
import { FormattedMessage } from "react-intl";
export function AdminAuthPage() {
  return (
    <>
      <div className="d-flex flex-column flex-root">
        <div
          className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white"
          id="kt_login"
        >
          <div
            className="login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-10"
            style={{
              backgroundImage: `url(${toAbsoluteUrl("/media/bg/bg-2.jpg")})`,
            }}
          >
            <div className="d-flex flex-row-fluid flex-column justify-content-between">
              <Link to="/admin" className="flex-column-auto mt-5 pb-lg-0 pb-10">
                <img
                  alt="Logo"
                  className="max-h-70px"
                  src={toAbsoluteUrl("/media/Sata/logo.png")}
                />
                <img
                  alt="Logo"
                  className="max-h-70px"
                  src={toAbsoluteUrl("/media/Sata/logo-btn.png")}
                />
              </Link>
              <div className="flex-column-fluid d-flex flex-column justify-content-center">
                <h3 className="font-size-h1 mb-5 text-white">
                  <FormattedMessage id="SITE.LOGO" />
                </h3>
                <p className="font-weight-lighter text-white opacity-80">
                  <FormattedMessage id="SITE.APPLY.ADMIN.VENDOR" />
                </p>
              </div>
              <div className="d-none flex-column-auto d-lg-flex justify-content-between mt-10">
                <div className="opacity-70 font-weight-bold	text-white">
                  &copy; 2021 <FormattedMessage id="SITE.COPY.RIGHT" />
                </div>
                <div className="d-flex">
                  <Link to="/terms" className="text-white">
                    <FormattedMessage id="SITE.COPY.PRIVACY" />
                  </Link>
                  <Link to="/terms" className="text-white ml-10">
                    <FormattedMessage id="SITE.COPY.LEGAL" />
                  </Link>
                  <Link to="/terms" className="text-white ml-10">
                    <FormattedMessage id="SITE.COPY.CONTACT" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-row-fluid position-relative p-7 overflow-hidden">
            <div className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
              <Switch>
                <ContentRoute
                  path="/admin/auth/login"
                  exact
                  component={AdminLogin}
                />
                <ContentRoute
                  path="/admin/auth/registration"
                  exact
                  component={AdminRegistration}
                />
                <ContentRoute
                  path="/admin/auth/reset-password/:id/:token"
                  exact
                  component={AdminResetPassword}
                />
                <ContentRoute
                  path="/admin/auth/forgot-password"
                  exact
                  component={AdminForgotPassword}
                />
                <Redirect from="/admin/auth" to="/admin/auth/login" />
                <Redirect to="/admin/auth/login" />
              </Switch>
            </div>
            <div className="d-flex d-lg-none flex-column-auto flex-column flex-sm-row justify-content-between align-items-center mt-5 p-5">
              <div className="text-dark-50 font-weight-bold order-2 order-sm-1 my-2">
                &copy; 2022 <FormattedMessage id="SITE.COPY.RIGHT" />
              </div>
              <div className="d-flex order-1 order-sm-2 my-2">
                <Link to="/terms" className="text-dark-75 text-hover-primary">
                  <FormattedMessage id="SITE.COPY.PRIVACY" />
                </Link>
                <Link
                  to="/terms"
                  className="text-dark-75 text-hover-primary ml-4"
                >
                  <FormattedMessage id="SITE.COPY.LEGAL" />
                </Link>
                <Link
                  to="/terms"
                  className="text-dark-75 text-hover-primary ml-4"
                >
                  <FormattedMessage id="SITE.COPY.CONTACT" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
