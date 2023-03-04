import React from "react";
import { FormattedMessage } from "react-intl";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { hookAddNew } from "../../../../actions/subcategory/subcategoryActions";
import { useHistory } from 'react-router-dom'
import TextError from "../../../shared/TextError";
import * as Yup from "yup";

function AddSubCategory({ match }) {
  const dispatch = useDispatch();
  const history = useHistory() ;
  const validationSchema = Yup.object({
    title_en: Yup.string().required("Required !"),
    title_ar: Yup.string().required("Required !"),
    category: Yup.string().required("Required !"),
  });
  const initialValues = {
    title_en: "",
    title_ar: "",
    category: match.params.id,
  };
  const onSubmit = (values, onSubmitProps) => {
    dispatch(hookAddNew(values));
    onSubmitProps.resetForm();
  };
  return (
    <div className="card card-custom">
      <div className="card-header">
        <h3 className="card-title">
          <FormattedMessage id="TABLE.TITLE.SUBCATEGORY.ADD" />
        </h3>
      </div>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        {(formik) => {
          return (
            <Form>
              <div className="card-body">
                <div className="form-group row">
                  <label className="col-2 col-form-label">
                    <FormattedMessage id="INPUT.CATEGORY.TITLEENGLISH" />
                  </label>
                  <div className="col-6">
                    <Field
                      className="form-control"
                      type="text"
                      name="title_en"
                      id="example-text-input"
                    />
                    <ErrorMessage name="title_en" component={TextError} />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-2 col-form-label">
                    <FormattedMessage id="INPUT.CATEGORY.TITLEARABIC" />
                  </label>
                  <div className="col-6">
                    <Field
                      className="form-control"
                      type="text"
                      name="title_ar"
                      id="example-text-input"
                    />
                    <ErrorMessage name="title_en" component={TextError} />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-2 col-form-label">
                    <FormattedMessage id="INPUT.BRANDS.CATEGORY" />
                  </label>
                  <div className="col-6">
                    <Field
                      className="form-control"
                      type="text"
                      name="category"
                      id="example-text-input"
                      disabled
                    />
                    <ErrorMessage name="category" component={TextError} />
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
                <button type="button" className="btn btn-secondary"
                onClick = {() => history.goBack()}>
                  <FormattedMessage id="BUTTON.CANCEL" />
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default AddSubCategory;
