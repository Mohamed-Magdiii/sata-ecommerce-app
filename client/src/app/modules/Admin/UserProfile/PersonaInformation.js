import React, { useState } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { useSelector } from "react-redux";
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import TextError from "../shared/TextError";
import { useUpdate } from "./api/axiosFunctions";
function PersonaInformation() {
  const { user } = useSelector((state) => state.auth);
  const [userProfile, setUserProfile] = useState(user.pic);
  const [isChanged, setIsChanged] = useState(false);
  const { mutate } = useUpdate();
  const onSubmit = (values) => {
    mutate(values);
  };
  const initialValues = {
    id: user._id,
    image: "",
    fullname: "",
    email: "",
    telephone: "",
    mobile: "",
  };
  const savedDate = {
    id: user._id,
    image: user.pic,
    fullname: user.fullname,
    email: user.email,
    telephone: user.phone,
    mobile: user.mobile,
  };
  const validationSchema = Yup.object({
    image: Yup.string().required("Required !"),
    fullname: Yup.string().required("Required !"),
    email: Yup.string().required("Required !"),
    telephone: Yup.string().required("Required !"),
    mobile: Yup.string().required("Required !"),
  });
  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setIsChanged(true);
        setUserProfile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div className="flex-row-fluid ml-lg-8">
      <div className="card card-custom card-stretch">
        <div className="card-header py-3">
          <div className="card-title align-items-start flex-column">
            <h3 className="card-label font-weight-bolder text-dark">
              Personal Information
            </h3>
            <span className="text-muted font-weight-bold font-size-sm mt-1">
              Update your personal informaiton
            </span>
          </div>
        </div>
        <Formik
          initialValues={savedDate || initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          enableReinitialize
        >
          {(formik) => {
            return (
              <Form className="form">
                <div className="card-body">
                  <div className="row">
                    <label className="col-xl-3"></label>
                    <div className="col-lg-9 col-xl-6">
                      <h5 className="font-weight-bold mb-6">Customer Info</h5>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      Avatar
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div
                        className="image-input image-input-outline"
                        id="kt_profile_avatar"
                        style={
                          userProfile === ""
                            ? {
                                backgroundImage: `url(${toAbsoluteUrl(
                                  "/media/users/blank.png"
                                )})`,
                              }
                            : !isChanged
                            ? {
                                backgroundImage: `url(${toAbsoluteUrl(
                                  `${process.env.REACT_APP_API_URL}/${userProfile}`
                                )})`,
                              }
                            : {
                                backgroundImage: `url(${userProfile})`,
                              }
                        }
                      >
                        <div className="image-input-wrapper"></div>
                        <label
                          className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                          data-action="change"
                          data-toggle="tooltip"
                          title=""
                          data-original-title="Change avatar"
                        >
                          <i className="fa fa-pen icon-sm text-muted"></i>
                          <input
                            type="file"
                            name="image"
                            accept=".png, .jpg, .jpeg"
                            onChange={(e) => {
                              handleImage(e);
                              formik.setFieldValue("image", e.target.files[0]);
                            }}
                          />
                          <Field type="hidden" name="image" />
                        </label>
                      </div>
                      <ErrorMessage name="image" component={TextError} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      Full Name
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <Field
                        className="form-control form-control-lg form-control-solid"
                        type="text"
                        name="fullname"
                      />
                      <ErrorMessage name="fullname" component={TextError} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      Telephone
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div className="input-group input-group-lg input-group-solid">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="la la-phone"></i>
                          </span>
                        </div>
                        <Field
                          type="text"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Telephone"
                          name="telephone"
                        />
                      </div>
                      <ErrorMessage name="telephone" component={TextError} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      Mobile
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div className="input-group input-group-lg input-group-solid">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="la la-mobile"></i>
                          </span>
                        </div>
                        <Field
                          type="text"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Mobile"
                          name="mobile"
                        />
                      </div>
                      <ErrorMessage name="mobile" component={TextError} />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      Email Address
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div className="input-group input-group-lg input-group-solid">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="la la-at"></i>
                          </span>
                        </div>
                        <Field
                          type="text"
                          className="form-control form-control-lg form-control-solid"
                          placeholder="Email"
                          name="email"
                        />
                      </div>
                      <ErrorMessage name="email" component={TextError} />
                    </div>
                  </div>
                </div>
                <div
                  className="card-toolbar"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <button type="submit" className="btn btn-success mr-2">
                    Save Changes
                  </button>
                  <button type="reset" className="btn btn-secondary">
                    Cancel
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default PersonaInformation;
