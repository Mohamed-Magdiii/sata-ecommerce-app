import React, { useState } from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import TextError from "../../shared/TextError";
import { useAddNewCategory } from "../shared/axiosFunction";
import { FormattedMessage } from "react-intl";

const initialValues = {
  title_en: "",
  title_ar: "",
  showInMenu: "",
  showInHomepage: "",
  image: "",
};

const validationSchema = Yup.object({
  image: Yup.string().required("Image is Required !"),
  title_en: Yup.string().required("Title in English is Required !"),
  title_ar: Yup.string().required("Title in Arabic is Required !"),
  showInMenu: Yup.string().required("Fill This Field"),
  showInHomepage: Yup.string().required("Fill This Field"),
});

const AddCategory = () => {
  const history = useHistory();
  const [userProfile, setUserProfile] = useState("");
  const [isChanged, setIsChanged] = useState(false);
  const { mutate } = useAddNewCategory();
  const onSubmit = (values, onSubmitProps) => {
    mutate(values);
    onSubmitProps.resetForm();
  };
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
      <div className="card card-custom">
        <div className="card-header py-3">
          <div className="card-title align-items-start flex-column">
            <h3 className="card-label font-weight-bolder text-dark">
              <FormattedMessage id="TABLE.TITLE.CATEGORY.INFO" />
            </h3>
            <span className="text-muted font-weight-bold font-size-sm mt-1">
              <FormattedMessage id="TABLE.TITLE.CATEGORY.ADD" />
            </span>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          className="form"
          validateOnMount={true}
        >
          {(formik) => {
            return (
              <Form>
                <div className="card-body">
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      <FormattedMessage id="INPUT.CATEGORY.IMAGE" />
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
                            : isChanged && {
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
                              handleImage(e);
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
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      <FormattedMessage id="INPUT.CATEGORY.TITLEENGLISH" />
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div>
                        <Field
                          className="form-control form-control-lg form-control-solid"
                          type="text"
                          name="title_en"
                        />
                        <ErrorMessage name="title_en" component={TextError} />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      <FormattedMessage id="INPUT.CATEGORY.TITLEARABIC" />
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div>
                        <Field
                          className="form-control form-control-lg form-control-solid"
                          type="text"
                          name="title_ar"
                        />
                        <ErrorMessage name="title_ar" component={TextError} />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row align-items-center">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      <FormattedMessage id="INPUT.CATEGORY.SHOWINMENU" />
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div className="radio-inline">
                        <label className="radio">
                          <Field
                            type="radio"
                            name="showInMenu"
                            value={"true"}
                          />
                          <span></span>
                          <FormattedMessage id="INPUT.CATEGORY.SHOW" />
                        </label>
                        <label className="radio">
                          <Field
                            type="radio"
                            name="showInMenu"
                            value={"false"}
                          />
                          <span></span>
                          <FormattedMessage id="INPUT.CATEGORY.HIDE" />
                        </label>
                      </div>
                      <ErrorMessage name="showInMenu" component={TextError} />
                    </div>
                  </div>
                  <div className="form-group row align-items-center">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      <FormattedMessage id="INPUT.CATEGORY.SHOWINHOMEPAGE" />
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div className="radio-inline">
                        <label className="radio">
                          <Field
                            type="radio"
                            name="showInHomepage"
                            value={"true"}
                          />
                          <span></span>
                          <FormattedMessage id="INPUT.CATEGORY.SHOW" />
                        </label>
                        <label className="radio">
                          <Field
                            type="radio"
                            name="showInHomepage"
                            value={"false"}
                          />
                          <span></span>
                          <FormattedMessage id="INPUT.CATEGORY.HIDE" />
                        </label>
                      </div>
                      <ErrorMessage
                        name="showInHomepage"
                        component={TextError}
                      />
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
                  <button type="submit" className="btn btn-primary mr-2">
                    <FormattedMessage id="BUTTON.SAVECHANGES" />
                  </button>
                  <button
                    type="button"
                    onClick={() => history.goBack()}
                    className="btn btn-secondary"
                  >
                    <FormattedMessage id="BUTTON.CANCEL" />
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default AddCategory;
