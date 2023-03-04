/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addBlog } from "../../../../modules/actions/blogs/blogs";
import { Formik, ErrorMessage, Field, Form } from "formik";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import TextError from "../../shared/TextError";
import { FormattedMessage } from "react-intl";
const BlogForm = ({ addBlog }) => {
  const initialValues = {
    title_en: "",
    title_ar: "",
    description_en:"",
    description_ar:"",
    image:""
  };
  
  const validationSchema = Yup.object({
    image: Yup.string().required("Image is Required !"),
    title_en: Yup.string().required("Title in English is Required !"),
    title_ar: Yup.string().required("Title in Arabic is Required !"),
    description_en: Yup.string().required("Description in English is Required !"),
    description_ar: Yup.string().required("Description in Arabic is Required !"),
   
  });

  const onSubmit = (values, onSubmitProps) => {
    addBlog(values);
    onSubmitProps.resetForm();

  };
  const [blogImage, setBlogImage] = useState("");
  const [isChanged, setIsChanged] = useState(false);
  // const onSubmit = (values, onSubmitProps) => {
  //   console.log(values);
  //   // mutate(values);
  //   // onSubmitProps.resetForm();
  // };
  const history = useHistory();

  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setIsChanged(true);
        setBlogImage(reader.result);
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
              <FormattedMessage id="BLOG" />
            </h3>
            <span className="text-muted font-weight-bold font-size-sm mt-1">
              <FormattedMessage id="BLOG.ADD" />
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
                      <FormattedMessage id="BLOG.IMAGE" />
                    </label>
                    <div className="col-3">
                      <div
                        className="image-input image-input-empty image-input-outline"
                        id="kt_user_edit_avatar"
                        style={
                          blogImage === ""
                            ? {
                                backgroundImage: `url(${toAbsoluteUrl(
                                  "/media/users/blank.png"
                                )})`,
                              }
                            : isChanged && {
                                backgroundImage: `url(${blogImage})`,
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
                    <FormattedMessage id="SETTINGS.TITLE" /> <FormattedMessage id="SETTINGS.ENGLISH" />
                      {/* <FormattedMessage id="INPUT.CATEGORY.TITLEENGLISH" /> */}
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
                    <FormattedMessage id="SETTINGS.TITLE" /> <FormattedMessage id="SETTINGS.ARABIC" />
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
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                    <FormattedMessage id="SETTINGS.DESCRIPTION" />{" "}
            <FormattedMessage id="SETTINGS.ENGLISH" />
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div>
                        <Field
                          className="form-control form-control-lg form-control-solid"
                          as="textarea"
                          name="description_en"
                        />
                        <ErrorMessage name="description_en" component={TextError} />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                    <FormattedMessage id="SETTINGS.DESCRIPTION" />{" "}
            <FormattedMessage id="SETTINGS.ARABIC" />
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div>
                        <Field
                          className="form-control form-control-lg form-control-solid "
                          as="textarea"
                          name="description_ar"
                        />
                        <ErrorMessage name="description_ar" component={TextError} />
                      </div>
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

BlogForm.propTypes = {
  addBlog: PropTypes.func.isRequired,
};

export default connect(null, { addBlog })(BlogForm);
