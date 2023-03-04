import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../shared/TextError";
const AddAccountComponent = ({ companies, isActive }) => {
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
                Full Name
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
                Contact Phone
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
                Contact Mobile
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
                    placeholder="Phone"
                  />
                </div>
                <ErrorMessage name="mobile" component={TextError} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                Email Address
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
                <span className="form-text text-muted">
                  We'll never share your email with anyone else.
                </span>
                <ErrorMessage name="email" component={TextError} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                Company Shipping
              </label>
              <div className="col-9">
                <Field
                  as="select"
                  name="company"
                  className="form-control form-control-lg form-control-solid"
                >
                  <option>Select Company...</option>
                  {companies.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="company" component={TextError} />
              </div>
            </div>
            <div className="form-group row align-items-center">
              <label className="col-form-label col-3 text-lg-right text-left">
                Role
              </label>
              <div className="col-9">
                <div className="radio-inline">
                  <label className="radio">
                    <Field type="radio" name="role" value="admin" />
                    <span></span>Admin
                  </label>
                  <label className="radio">
                    <Field type="radio" name="role" value="vendor" />
                    <span></span>Vendor
                  </label>
                  <label className="radio">
                    <Field type="radio" name="role" value="user" />
                    <span></span>User
                  </label>
                  <label className="radio">
                    <Field type="radio" name="role" value="delivery" />
                    <span></span>Delivery
                  </label>
                </div>
                <ErrorMessage name="role" component={TextError} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separator separator-dashed my-10"></div>
    </div>
  );
};

export default AddAccountComponent;
