/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "../shared/TextError";
import { useUpdateUserData } from "./api/axiosFunctions";
import { shallowEqual, useSelector } from "react-redux";

function ChangePassword() {
  const { mutate } = useUpdateUserData();
  const { user } = useSelector((state) => state.auth, shallowEqual);
  // UI Helpers
  const initialValues = {
    id: user._id,
    currentPassword: "",
    password: "",
    cPassword: "",
  };
  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current password is required"),
    password: Yup.string()
      .required("New Password is required")
      .min(8, "Password should be at least 8 characters"),
    cPassword: Yup.string()
      .required("Password confirmation is required")
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Password and Confirm Password didn't match"
        ),
      }),
  });
  const onSubmit = (values, onSubmitProps) => {
    mutate(values);
    onSubmitProps.resetForm();
  };

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      {(formik) => {
        return (
          <Form className="card card-custom">
            <div className="card-header py-3">
              <div className="card-title align-items-start flex-column">
                <h3 className="card-label font-weight-bolder text-dark">
                  Change Password
                </h3>
                <span className="text-muted font-weight-bold font-size-sm mt-1">
                  Change your account password
                </span>
              </div>
              <div className="card-toolbar">
                <button type="submit" className="btn btn-success mr-2">
                  Save Changes
                </button>
                <Link
                  to="/admin/user-profile/profile-overview"
                  className="btn btn-secondary"
                >
                  Cancel
                </Link>
              </div>
            </div>
            <div className="form">
              <div className="card-body">
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label text-alert">
                    Current Password
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <Field
                      type="password"
                      placeholder="Current Password"
                      className={`form-control form-control-lg form-control-solid mb-2`}
                      name="currentPassword"
                    />
                    <ErrorMessage
                      name="currentPassword"
                      component={TextError}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label text-alert">
                    New Password
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <Field
                      type="password"
                      placeholder="New Password"
                      className={`form-control form-control-lg form-control-solid`}
                      name="password"
                    />
                    <ErrorMessage name="password" component={TextError} />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label text-alert">
                    Verify Password
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <Field
                      type="password"
                      placeholder="Verify Password"
                      className={`form-control form-control-lg form-control-solid`}
                      name="cPassword"
                    />
                    <ErrorMessage name="cPassword" component={TextError} />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

// export default connect(null, auth.actions)(ChangePassword);
export default ChangePassword;
