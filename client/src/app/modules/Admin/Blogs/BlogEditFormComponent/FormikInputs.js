import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Form, Field, ErrorMessage } from "formik";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import TextError from "../../shared/TextError";

const FormikInputs = ({ formik, blog }) => {
    
  const [isChanged, setIsChanged] = useState(false);
  const [blogImage, setBlogImage] = useState(blog ? blog.image : "");
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
    <Form>
    <div className="card-body">
      <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label">
          <FormattedMessage id="BLOG.IMAGE" />
        </label>
        <div className="col-lg-9 col-xl-6">
            <div
              className="image-input image-input-outline"
              id="kt_image_4"
              style={{
                backgroundImage: `url('')`,
              }}
            >
              <img
              alt=""
                className="image-input-wrapper"
               src={blogImage=== "" ? toAbsoluteUrl(
                `${process.env.REACT_APP_API_URL}/${blogImage}` )
                :  !isChanged ? 
                `${process.env.REACT_APP_API_URL}/${blog.image}` : `${blogImage}`}
              ></img>

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
                title="Cancel avatar"
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
        // onClick={() => history.goBack()}
        className="btn btn-secondary"
      >
        <FormattedMessage id="BUTTON.CANCEL" />
      </button>
    </div>
  </Form>
  );
};

export default FormikInputs;
