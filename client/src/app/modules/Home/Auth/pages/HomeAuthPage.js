/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, Switch, Redirect } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { ContentRoute } from "../../../../../_metronic/layout";
import HomeLogin from "./HomeLogin";
import HomeRegistration from "./HomeRegistration";
import HomeForgotPassword from "./HomeForgotPassword";
import HomeResetPassword from "./HomeResetPassword";
import "../../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";
export function HomeAuthPage() {
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
              backgroundImage: `url(${toAbsoluteUrl("/media/bg/bg-4.jpg")})`,
            }}
          >
            <div className="d-flex flex-row-fluid flex-column justify-content-between">
              <Link to="/" className="flex-column-auto mt-5 pb-lg-0 pb-10">
                <img
                  alt="Logo"
                  className="max-h-70px"
                  src={toAbsoluteUrl("/media/logos/logo-letter-1.png")}
                />
              </Link>
              <div className="flex-column-fluid d-flex flex-column justify-content-center">
                <h3 className="font-size-h1 mb-5 text-white">Sata Mall</h3>
                <p className="font-weight-lighter text-white opacity-80">
                  This Page is only for Admins & Vendors
                </p>
              </div>
              <div className="d-none flex-column-auto d-lg-flex justify-content-between mt-10">
                <div className="opacity-70 font-weight-bold	text-white">
                  &copy; 2021 CopyRight
                </div>
                <div className="d-flex">
                  <Link to="/terms" className="text-white">
                    Privacy
                  </Link>
                  <Link to="/terms" className="text-white ml-10">
                    Legal
                  </Link>
                  <Link to="/terms" className="text-white ml-10">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-row-fluid position-relative p-7 overflow-hidden">
            <div className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
              <Switch>
                <ContentRoute path="/auth/login" exact component={HomeLogin} />
                <ContentRoute
                  path="/auth/registration"
                  exact
                  component={HomeRegistration}
                />
                <ContentRoute
                  path="/auth/reset-password/:id/:token"
                  exact
                  component={HomeResetPassword}
                />
                <ContentRoute
                  path="/auth/forgot-password"
                  exact
                  component={HomeForgotPassword}
                />
                <Redirect from="/auth" to="/auth/login" />
                <Redirect to="/auth/login" />
              </Switch>
            </div>
            <div className="d-flex d-lg-none flex-column-auto flex-column flex-sm-row justify-content-between align-items-center mt-5 p-5">
              <div className="text-dark-50 font-weight-bold order-2 order-sm-1 my-2">
                &copy; 2021 CopyRight
              </div>
              <div className="d-flex order-1 order-sm-2 my-2">
                <Link to="/terms" className="text-dark-75 text-hover-primary">
                  Privacy
                </Link>
                <Link
                  to="/terms"
                  className="text-dark-75 text-hover-primary ml-4"
                >
                  Legal
                </Link>
                <Link
                  to="/terms"
                  className="text-dark-75 text-hover-primary ml-4"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
