import React, { useState } from "react";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { Field, ErrorMessage } from "formik";
import TextError from "../../shared/TextError";
const useAddProfileComponent = ({ isActive, formik }) => {
  const [userProfile, setUserProfile] = useState("");
  const [userLicenceCarFront, setUserLicenceCarFront] = useState("");
  const [userLicenceCarBack, setUserLicenceCarBack] = useState("");
  const [userLicenceFront, setUserLicenceFront] = useState("");
  const [userLicenceBack, setUserLicenceBack] = useState("");
  const [userDrugAnalysis, setUserDrugAnalysis] = useState("");
  const isChanged = [false, false, false, false, false, false];
  const handleImage = (e, i) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        isChanged[i] = true;
        if (i === 0) {
          setUserProfile(reader.result);
        } else if (i === 1) {
          setUserDrugAnalysis(reader.result);
        } else if (i === 2) {
          setUserLicenceCarFront(reader.result);
        } else if (i === 3) {
          setUserLicenceCarBack(reader.result);
        } else if (i === 4) {
          setUserLicenceFront(reader.result);
        } else {
          setUserLicenceBack(reader.result);
        }
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    // if (i === 0) {
    //   props.setImage(e.target.files[0]);
    // } else if (i === 1) {
    //   props.setDrugAnalysis(e.target.files[0]);
    // } else if (i === 2) {
    //   props.setLicenceCar_front(e.target.files[0]);
    // } else if (i === 3) {
    //   props.setLicenceCar_back(e.target.files[0]);
    // } else if (i === 4) {
    //   props.setLicence_front(e.target.files[0]);
    // } else {
    //   props.setLicence_back(e.target.files[0]);
    // }
  };
  return (
    <div
      className={`tab-pane px-7 ${isActive && "show active"}`}
      role="tabpanel"
    >
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-7 my-2">
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              Avatar
            </label>
            <div className="col-3">
              <div
                className="image-input image-input-empty image-input-outline"
                id="kt_user_edit_avatar"
                style={
                  userProfile === ""
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )})`,
                      }
                    : !isChanged[0] && {
                        backgroundImage: `url(${userProfile})`,
                      }
                }
              >
                <div className="image-input-wrapper"></div>
                <label
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="change"
                  data-toggle="tooltip"
                  data-original-title="Change avatar"
                >
                  <i className="fa fa-pen icon-sm text-muted"></i>
                  <input
                    type="file"
                    name="image"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => {
                      handleImage(e, 0);
                      formik.setFieldValue("image", e.target.files[0]);
                    }}
                  />
                  <Field type="hidden" name="image" />
                </label>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="cancel"
                  data-toggle="tooltip"
                  data-original-title="Cancel avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="remove"
                  data-toggle="tooltip"
                  data-original-title="Remove avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
              </div>
              <ErrorMessage name="image" component={TextError} />
            </div>
            <label className="col-form-label col-3 text-lg-right text-right">
              Drug Analysis
            </label>
            <div className="col-3">
              <div
                className="image-input image-input-empty image-input-outline"
                id="kt_user_edit_avatar"
                style={
                  userDrugAnalysis === ""
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )})`,
                      }
                    : !isChanged[1] && {
                        backgroundImage: `url(${userDrugAnalysis})`,
                      }
                }
              >
                <div className="image-input-wrapper"></div>
                <label
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="change"
                  data-toggle="tooltip"
                  data-original-title="Change avatar"
                >
                  <i className="fa fa-pen icon-sm text-muted"></i>
                  <input
                    type="file"
                    name="drugAnalysis"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => {
                      handleImage(e, 1);
                      formik.setFieldValue("drugAnalysis", e.target.files[0]);
                    }}
                  />
                  <Field type="hidden" name="drugAnalysis" />
                </label>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="cancel"
                  data-toggle="tooltip"
                  data-original-title="Cancel avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="remove"
                  data-toggle="tooltip"
                  data-original-title="Remove avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
              </div>
              <ErrorMessage name="drugAnalysis" component={TextError} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              Front Licence Car
            </label>
            <div className="col-3">
              <div
                className="image-input image-input-empty image-input-outline"
                id="kt_user_edit_avatar"
                style={
                  userLicenceCarFront === ""
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )})`,
                      }
                    : !isChanged[2] && {
                        backgroundImage: `url(${userLicenceCarFront})`,
                      }
                }
              >
                <div className="image-input-wrapper"></div>
                <label
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="change"
                  data-toggle="tooltip"
                  data-original-title="Change avatar"
                >
                  <i className="fa fa-pen icon-sm text-muted"></i>
                  <input
                    type="file"
                    name="licenceCar_front"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => {
                      handleImage(e, 2);
                      formik.setFieldValue(
                        "licenceCar_front",
                        e.target.files[0]
                      );
                    }}
                  />
                  <Field type="hidden" name="licenceCar_front" />
                </label>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="cancel"
                  data-toggle="tooltip"
                  data-original-title="Cancel avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="remove"
                  data-toggle="tooltip"
                  data-original-title="Remove avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
              </div>
              <ErrorMessage name="licenceCar_front" component={TextError} />
            </div>
            <label className="col-form-label col-3 text-lg-right text-right">
              Back Licence Car
            </label>
            <div className="col-3">
              <div
                className="image-input image-input-empty image-input-outline"
                id="kt_user_edit_avatar"
                style={
                  userLicenceCarBack === ""
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )})`,
                      }
                    : !isChanged[3] && {
                        backgroundImage: `url(${userLicenceCarBack})`,
                      }
                }
              >
                <div className="image-input-wrapper"></div>
                <label
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="change"
                  data-toggle="tooltip"
                  data-original-title="Change avatar"
                >
                  <i className="fa fa-pen icon-sm text-muted"></i>
                  <input
                    type="file"
                    name="licenceCar_back"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => {
                      handleImage(e, 3);
                      formik.setFieldValue(
                        "licenceCar_back",
                        e.target.files[0]
                      );
                    }}
                  />
                  <Field type="hidden" name="licenceCar_back" />
                </label>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="cancel"
                  data-toggle="tooltip"
                  data-original-title="Cancel avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="remove"
                  data-toggle="tooltip"
                  data-original-title="Remove avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
              </div>
              <ErrorMessage name="licenceCar_back" component={TextError} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              Front Licence
            </label>
            <div className="col-3">
              <div
                className="image-input image-input-empty image-input-outline"
                id="kt_user_edit_avatar"
                style={
                  userLicenceFront === ""
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )})`,
                      }
                    : !isChanged[4] && {
                        backgroundImage: `url(${userLicenceFront})`,
                      }
                }
              >
                <div className="image-input-wrapper"></div>
                <label
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="change"
                  data-toggle="tooltip"
                  data-original-title="Change avatar"
                >
                  <i className="fa fa-pen icon-sm text-muted"></i>
                  <input
                    type="file"
                    name="licence_front"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => {
                      handleImage(e, 4);
                      formik.setFieldValue("licence_front", e.target.files[0]);
                    }}
                  />
                  <Field type="hidden" name="licence_front" />
                </label>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="cancel"
                  data-toggle="tooltip"
                  data-original-title="Cancel avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="remove"
                  data-toggle="tooltip"
                  data-original-title="Remove avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
              </div>
              <ErrorMessage name="licence_front" component={TextError} />
            </div>
            <label className="col-form-label col-3 text-lg-right text-right">
              Back Licence
            </label>
            <div className="col-3">
              <div
                className="image-input image-input-empty image-input-outline"
                id="kt_user_edit_avatar"
                style={
                  userLicenceBack === ""
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )})`,
                      }
                    : !isChanged[5] && {
                        backgroundImage: `url(${userLicenceBack})`,
                      }
                }
              >
                <div className="image-input-wrapper"></div>
                <label
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="change"
                  data-toggle="tooltip"
                  data-original-title="Change avatar"
                >
                  <i className="fa fa-pen icon-sm text-muted"></i>
                  <input
                    type="file"
                    name="licence_back"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => {
                      handleImage(e, 5);
                      formik.setFieldValue("licence_back", e.target.files[0]);
                    }}
                  />
                  <Field type="hidden" name="licence_back" />
                </label>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="cancel"
                  data-toggle="tooltip"
                  data-original-title="Cancel avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="remove"
                  data-toggle="tooltip"
                  data-original-title="Remove avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
              </div>
              <ErrorMessage name="licence_back" component={TextError} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default useAddProfileComponent;
