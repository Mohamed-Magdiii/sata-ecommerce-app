import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import { BeatLoader } from "react-spinners";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import TextError from "../../../shared/TextError";
import {
  hookFetchById,
  hookUpdateById,
} from "../../../../actions/subcategory/subcategoryActions";

function UpdateSubCategory({ match }) {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchById(match.params.id));
  }, [dispatch, match.params.id]);
  const data = useSelector((state) => state.subcategory);
  const validationSchema = Yup.object({
    id: Yup.string().required("Required !"),
    title_en: Yup.string().required("Required !"),
    title_ar: Yup.string().required("Required !"),
    category: Yup.string().required("Required !"),
  });
  const initialValues = {
    id: "",
    title_en: "",
    title_ar: "",
    category: match.params.id,
  };

  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    const oldData = {
      id: match.params.id,
      title_en: data.subCategory
        ? data.subCategory.title
          ? data.subCategory.title.en
          : ""
        : "",
      title_ar: data.subCategory
        ? data.subCategory.title
          ? data.subCategory.title.ar
          : ""
        : "",
      category: data.subCategory ? data.subCategory.category : "",
    };
    const onSubmit = (values) => {
      dispatch(hookUpdateById(values));
    };
    return (
      <div className="card card-custom">
        <div className="card-header">
          <h3 className="card-title">
            <FormattedMessage id="TABLE.TITLE.SUBCATEGORY.UPDATE" />
          </h3>
        </div>
        <Formik
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          initialValues={oldData || initialValues}
        >
          {(formik) => {
            return (
              <Form>
                <div className="card-body">
                  <div className="form-group row">
                    <label className="col-2 col-form-label">
                      <FormattedMessage id="TABLE.SUB.CATEGORY.ID" />
                    </label>
                    <div className="col-6">
                      <Field
                        className="form-control"
                        type="text"
                        name="id"
                        id="example-text-input"
                        disabled
                      />
                      <ErrorMessage name="id" component={TextError} />
                    </div>
                  </div>
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
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => history.goBack()}
                  >
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
}

export default UpdateSubCategory;
