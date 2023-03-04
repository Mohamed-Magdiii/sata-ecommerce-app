import React, { useState } from "react";
import { toAbsoluteUrl } from "../../../../../../_metronic/_helpers";
import { Field, ErrorMessage } from "formik";
import TextError from "../../../shared/TextError";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { UrlContext } from "./AddNewVendor";

const useAddProfileComponent = ({ isActive, formik }) => {
  const { user } = useSelector((state) => state.auth);
  const [userProfile, setUserProfile] = useState("");
  const [userCommericalRecord, setUserCommericalRecord] = useState("");
  const [userTaxcard_front, setUserTaxcard_front] = useState("");
  const [userTaxcard_back, setUserTaxcard_back] = useState("");
  const isChanged = [false, false, false, false];
  const handleImage = (e, i) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        isChanged[i] = true;
        if (i === 0) {
          setUserProfile(reader.result);
        } else if (i === 1) {
          setUserCommericalRecord(reader.result);
        } else if (i === 2) {
          setUserTaxcard_front(reader.result);
        } else if (i === 3) {
          setUserTaxcard_back(reader.result);
        }
      }
    };
    reader.readAsDataURL(e.target.files[0]);
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
              <FormattedMessage id="TABLE.VENDOR.AVATAR" />
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
            {user.roles[0] === 1 && UrlContext._currentValue === "vendor" && (
              <>
                <label className="col-form-label col-3 text-lg-right text-right">
                  <FormattedMessage id="TABLE.VENDOR.COMMERICALRECORD" />
                </label>
                <div className="col-3">
                  <div
                    className="image-input image-input-empty image-input-outline"
                    id="kt_user_edit_avatar"
                    style={
                      userCommericalRecord === ""
                        ? {
                            backgroundImage: `url(${toAbsoluteUrl(
                              "/media/users/blank.png"
                            )})`,
                          }
                        : !isChanged[1] && {
                            backgroundImage: `url(${userCommericalRecord})`,
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
                        name="commercialRecord"
                        accept=".png, .jpg, .jpeg"
                        onChange={(e) => {
                          handleImage(e, 1);
                          formik.setFieldValue(
                            "commercialRecord",
                            e.target.files[0]
                          );
                        }}
                      />
                      <Field type="hidden" name="commercialRecord" />
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
                  <ErrorMessage name="commercialRecord" component={TextError} />
                </div>
              </>
            )}
          </div>
          {user.roles[0] === 1 && UrlContext._currentValue === "vendor" && (
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.VENDOR.TAXCARDFRONT" />
              </label>
              <div className="col-3">
                <div
                  className="image-input image-input-empty image-input-outline"
                  id="kt_user_edit_avatar"
                  style={
                    userTaxcard_front === ""
                      ? {
                          backgroundImage: `url(${toAbsoluteUrl(
                            "/media/users/blank.png"
                          )})`,
                        }
                      : !isChanged[2] && {
                          backgroundImage: `url(${userTaxcard_front})`,
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
                      name="taxcard_front"
                      accept=".png, .jpg, .jpeg"
                      onChange={(e) => {
                        handleImage(e, 2);
                        formik.setFieldValue(
                          "taxcard_front",
                          e.target.files[0]
                        );
                      }}
                    />
                    <Field type="hidden" name="taxcard_front" />
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
                <ErrorMessage name="taxcard_front" component={TextError} />
              </div>
              <label className="col-form-label col-3 text-lg-right text-right">
                <FormattedMessage id="TABLE.VENDOR.TAXCARDBACK" />
              </label>
              <div className="col-3">
                <div
                  className="image-input image-input-empty image-input-outline"
                  id="kt_user_edit_avatar"
                  style={
                    userTaxcard_back === ""
                      ? {
                          backgroundImage: `url(${toAbsoluteUrl(
                            "/media/users/blank.png"
                          )})`,
                        }
                      : !isChanged[3] && {
                          backgroundImage: `url(${userTaxcard_back})`,
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
                      name="taxcard_back"
                      accept=".png, .jpg, .jpeg"
                      onChange={(e) => {
                        handleImage(e, 3);
                        formik.setFieldValue("taxcard_back", e.target.files[0]);
                      }}
                    />
                    <Field type="hidden" name="taxcard_back" />
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
                <ErrorMessage name="taxcard_back" component={TextError} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default useAddProfileComponent;
