import React from "react";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import ReactTimeAgo from "react-time-ago";
import { useLocation } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Shared = ({ data }) => {
  const location = useLocation();
  return (
    <div className="d-flex flex-column-fluid">
      <div className="container">
        <div className="row">
          {data.map((u, i) => {
            return (
              <div key={u._id} className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="card card-custom gutter-b card-stretch">
                  <div className="card-body pt-4">
                    <div className="d-flex justify-content-end">
                      <div
                        className="dropdown dropdown-inline"
                        data-toggle="tooltip"
                        data-placement="left"
                        data-original-title="Quick actions"
                      >
                        <span
                          className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="ki ki-bold-more-hor"></i>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-end mb-7">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 mr-4 mt-lg-0 mt-3">
                          <div className="symbol symbol-circle symbol-lg-75">
                            <img
                              src={`${
                                u.image
                                  ? process.env.REACT_APP_API_URL +
                                    ":" +
                                    process.env.REACT_APP_SERVER_PORT +
                                    "/" +
                                    u.image
                                  : toAbsoluteUrl("/media/users/blank.png")
                              }`}
                              alt="Pic"
                            />
                          </div>
                          <div className="symbol symbol-lg-75 symbol-circle symbol-primary d-none">
                            <span className="font-size-h3 font-weight-boldest">
                              {u.fullname.split("")[0] +
                                u.fullname.split("")[1]}
                            </span>
                          </div>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">
                            {u.fullname}
                          </span>
                          <span className="text-muted font-weight-bold">
                            {u.role}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-7">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-dark-75 font-weight-bolder mr-2">
                          <FormattedMessage id="TABLE.CUSTOMER.EMAIL" /> {" : "}
                        </span>
                        <span className="text-muted text-hover-primary">
                          {u.email}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-dark-75 font-weight-bolder mr-2">
                          <FormattedMessage id="TABLE.CUSTOMER.MOBILE" />{" "}
                          {" : "}
                        </span>
                        <span className="text-muted text-hover-primary">
                          {u.mobile}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between align-items-cente my-1 mb-2">
                        <span className="text-dark-75 font-weight-bolder mr-2">
                          <FormattedMessage id="TABLE.CUSTOMER.PHONE" /> {" : "}
                        </span>
                        <span className="text-muted text-hover-primary">
                          {u.telephone}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-dark-75 font-weight-bolder mr-2">
                          {!location.pathname.includes("not-signed-in") ? (
                            <FormattedMessage id="TABLE.CUSTOMER.CREATEDAT" />
                          ) : (
                            <FormattedMessage id="TABLE.CUSTOMER.LASTLOGIN" />
                          )}
                        </span>
                        <span className="text-muted font-weight-bold">
                          <ReactTimeAgo
                            date={
                              !location.pathname.includes("not-signed-in")
                                ? Date.parse(u.createdAt)
                                : Date.parse(u.loggedAt)
                            }
                            locale={`${
                              localStorage.getItem("i18nConfig") &&
                              JSON.parse(localStorage.getItem("i18nConfig"))
                                .selectedLang === "ar"
                                ? "ar-EG"
                                : "en-US"
                            }`}
                          />
                        </span>
                      </div>
                    </div>
                    {/* <span
                      className={`btn btn-block btn-sm btn-light-${
                        messageColors[parseInt(Math.random() * 4)]
                      } font-weight-bolder text-uppercase py-4`}
                    >
                      {u.status === "Blocked" ? (
                        <FormattedMessage id="TABLE.VENDORS.UNBLOCK" />
                      ) : (
                        <FormattedMessage id="TABLE.VENDORS.WRITEMESSAGE" />
                      )}
                    </span> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shared;
