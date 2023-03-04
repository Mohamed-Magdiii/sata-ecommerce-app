import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import CardFooter from "./CardFooter";
const ChangePasswordComponent = ({ isActive }) => {
  const [currentpassword, setCurrentPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [vpassword, setVPassword] = useState("");
  return (
    <div
      className={`tab-pane px-7 ${isActive && "show active"}`}
      role="tabpanel"
    >
      <div className="card-body">
        <div className="row">
          <div className="col-xl-2"></div>
          <div className="col-xl-7">
            <div className="row mb-5">
              <label className="col-3"></label>
              <div className="col-9"></div>
            </div>
            <div className="row">
              <label className="col-3"></label>
              <div className="col-9">
                <h6 className="text-dark font-weight-bold mb-10">
                  <FormattedMessage id="TABLE.CUSTOMER.PASSWORD" />
                </h6>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="BUTTON.VENDOR.PASSWORD" />
              </label>
              <div className="col-9">
                <input
                  className="form-control form-control-lg form-control-solid mb-1"
                  type="password"
                  value={currentpassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.ROLE.NEWPASSWORD" />
              </label>
              <div className="col-9">
                <input
                  className="form-control form-control-lg form-control-solid"
                  type="password"
                  value={newpassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.ROLE.VERIFYPASSWORD" />
              </label>
              <div className="col-9">
                <input
                  className="form-control form-control-lg form-control-solid"
                  type="password"
                  value={vpassword}
                  onChange={(e) => setVPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardFooter data={{ currentpassword, newpassword, vpassword }} />
    </div>
  );
};

export default ChangePasswordComponent;
