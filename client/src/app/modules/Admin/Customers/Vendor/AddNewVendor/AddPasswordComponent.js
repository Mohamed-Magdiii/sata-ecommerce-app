import { Field, ErrorMessage } from "formik";
import React from "react";
import TextError from "../../../shared/TextError";
import { FormattedMessage } from "react-intl";
const AddPasswordComponent = ({ isActive }) => {
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
                  <FormattedMessage id="BUTTON.VENDOR.PASSWORD" /> :
                </h6>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.ROLE.NEWPASSWORD" />
              </label>
              <div className="col-9">
                <Field
                  className="form-control form-control-lg form-control-solid"
                  type="password"
                  name="password"
                />
                <ErrorMessage name="password" component={TextError} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="INPUT.ROLE.VERIFYPASSWORD" />
              </label>
              <div className="col-9">
                <Field
                  className="form-control form-control-lg form-control-solid"
                  type="password"
                  name="vpassword"
                />
                <ErrorMessage name="vpassword" component={TextError} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPasswordComponent;
