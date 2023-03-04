import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../../shared/TextError";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { UrlContext } from "./AddNewVendor";

const AddAccountComponent = ({ isActive }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div
      className={`tab-pane px-7 ${isActive && "show active"}`}
      role="tabpanel"
    >
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-7">
          <div className="my-2">
            <div className="row">
              <label className="col-form-label col-3 text-lg-right text-left"></label>
              <div className="col-9">
                <h6 className="text-dark font-weight-bold mb-10">Account:</h6>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.CUSTOMER.FULLNAME" />
              </label>
              <div className="col-9">
                <Field
                  className="form-control form-control-lg form-control-solid"
                  type="text"
                  placeholder="Full Name"
                  name="fullname"
                />
                <ErrorMessage name="fullname" component={TextError} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.CUSTOMER.PHONE" />
              </label>
              <div className="col-9">
                <div className="input-group input-group-lg input-group-solid">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-phone"></i>
                    </span>
                  </div>
                  <Field
                    type="text"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="Phone"
                    name="telephone"
                  />
                </div>
                <ErrorMessage name="telephone" component={TextError} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.CUSTOMER.MOBILE" />
              </label>
              <div className="col-9">
                <div className="input-group input-group-lg input-group-solid">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-mobile-alt"></i>
                    </span>
                  </div>
                  <Field
                    type="text"
                    className="form-control form-control-lg form-control-solid"
                    name="mobile"
                    placeholder="Mobile"
                  />
                </div>
                <ErrorMessage name="mobile" component={TextError} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.CUSTOMER.EMAIL" />
              </label>
              <div className="col-9">
                <div className="input-group input-group-lg input-group-solid">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="far fa-envelope"></i>
                    </span>
                  </div>
                  <Field
                    type="text"
                    className="form-control form-control-lg form-control-solid"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <ErrorMessage name="email" component={TextError} />
              </div>
            </div>
            {user.roles[0] === 1 && UrlContext._currentValue === "vendor" && (
              <>
                <div className="form-group row">
                  <label className="col-form-label col-3 text-lg-right text-left">
                    <FormattedMessage id="INPUT.VENDOR.BALANCETYPE" />
                  </label>
                  <div className="col-9">
                    <Field
                      as="select"
                      name="app_balance_type"
                      className="form-control form-control-lg form-control-solid"
                    >
                      <option value={""}>Select Balance Type...</option>
                      <option value={"fixed"}>Fixed</option>
                      <option value={"percentage"}>Percentage</option>
                    </Field>
                    <ErrorMessage
                      name="app_balance_type"
                      component={TextError}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-3 text-lg-right text-left">
                    <FormattedMessage id="INPUT.VENDOR.BALANCEAMOUNT" />
                  </label>
                  <div className="col-9">
                    <div className="input-group input-group-lg input-group-solid">
                      <Field
                        type="text"
                        className="form-control form-control-lg form-control-solid"
                        name="app_balance_amount"
                        placeholder="Balance Amount ..."
                      />
                    </div>
                    <ErrorMessage
                      name="app_balance_amount"
                      component={TextError}
                    />
                  </div>
                </div>{" "}
              </>
            )}
            <div className="form-group row align-items-center">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.CUSTOMER.ROLE" />
              </label>
              <div className="col-9">
                <div className="radio-inline">
                  <label className="radio">
                    <Field
                      type="radio"
                      name="role"
                      value="admin"
                      checked={UrlContext._currentValue === "admin"}
                    />
                    <span></span>
                    <FormattedMessage id="INPUT.ROLE.ADMIN" />
                  </label>
                  <label className="radio">
                    <Field
                      type="radio"
                      name="role"
                      value="vendor"
                      checked={UrlContext._currentValue === "vendor"}
                    />
                    <span></span>
                    <FormattedMessage id="INPUT.ROLE.VENDOR" />
                  </label>
                  <label className="radio">
                    <Field
                      type="radio"
                      name="role"
                      value="user"
                      checked={UrlContext._currentValue === "user"}
                    />
                    <span></span>
                    <FormattedMessage id="INPUT.ROLE.USER" />
                  </label>
                  <label className="radio">
                    <Field
                      type="radio"
                      name="role"
                      value="delivery"
                      checked={UrlContext._currentValue === "delivery"}
                    />
                    <span></span>
                    <FormattedMessage id="INPUT.ROLE.DELIVERY" />
                  </label>
                  <label className="radio">
                    <Field
                      type="radio"
                      name="role"
                      value="worker"
                      checked={UrlContext._currentValue === "worker"}
                    />
                    <span></span>
                    <FormattedMessage id="INPUT.ROLE.WORKER" />
                  </label>
                </div>
                <ErrorMessage name="role" component={TextError} />
              </div>
            </div>
            {UrlContext._currentValue === "worker" && (
              <>
                <div className="form-group row">
                  <label className="col-form-label col-3 text-lg-right text-left">
                    <FormattedMessage id="INPUT.ROLE.CAN.ADD" />
                  </label>
                  <div className="col-9 col-form-label">
                    <div className="radio-inline">
                      <label className="radio radio-outline radio-success">
                        <Field type="radio" name="canAdd" value="true" />
                        <span></span>
                        <FormattedMessage id="INPUT.TRUE" />
                      </label>
                      <label className="radio radio-outline radio-success">
                        <Field type="radio" name="canAdd" value="false" />
                        <span></span>
                        <FormattedMessage id="INPUT.FALSE" />
                      </label>
                    </div>
                    <ErrorMessage name="canAdd" component={TextError} />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-3 text-lg-right text-left">
                    <FormattedMessage id="INPUT.ROLE.CAN.UPDATE" />
                  </label>
                  <div className="col-9 col-form-label">
                    <div className="radio-inline">
                      <label className="radio radio-outline radio-success">
                        <Field type="radio" name="canUpdate" value="true" />
                        <span></span>
                        <FormattedMessage id="INPUT.TRUE" />
                      </label>
                      <label className="radio radio-outline radio-success">
                        <Field type="radio" name="canUpdate" value="false" />
                        <span></span>
                        <FormattedMessage id="INPUT.FALSE" />
                      </label>
                    </div>
                    <ErrorMessage name="canUpdate" component={TextError} />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-form-label col-3 text-lg-right text-left">
                    <FormattedMessage id="INPUT.ROLE.CAN.DELETE" />
                  </label>
                  <div className="col-9 col-form-label">
                    <div className="radio-inline">
                      <label className="radio radio-outline radio-success">
                        <Field type="radio" name="canDelete" value="true" />
                        <span></span>
                        <FormattedMessage id="INPUT.TRUE" />
                      </label>
                      <label className="radio radio-outline radio-success">
                        <Field type="radio" name="canDelete" value="false" />
                        <span></span>
                        <FormattedMessage id="INPUT.FALSE" />
                      </label>
                    </div>
                    <ErrorMessage name="canDelete" component={TextError} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="separator separator-dashed my-10"></div>
    </div>
  );
};

export default AddAccountComponent;
