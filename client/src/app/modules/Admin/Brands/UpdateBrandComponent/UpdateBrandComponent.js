import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import {
  hookFetchById,
  hookUpdateById,
} from "../../../actions/brands/brandActions";
import { validationSchema, initialValues } from "../shared/FormikKeys";
import { Formik } from "formik";
import FormikInputs from "../shared/FormikInputs";

const UpdateBrandComponent = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchById(match.params.id));
  }, [dispatch, match]);
  const onSubmit = (values) => {
    dispatch(hookUpdateById(values));
  };
  const data = useSelector((state) => state.brands);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    const savedData = {
      id: data.brand ? data.brand._id : "",
      image: data.brand ? data.brand.image : "",
      title_en: data.brand ? (data.brand.title ? data.brand.title.en : "") : "",
      title_ar: data.brand ? (data.brand.title ? data.brand.title.ar : "") : "",
      category: data.brand
        ? data.brand.category
          ? data.brand.category._id
          : ""
        : "",
    };
    return (
      <div className="flex-row-fluid ml-lg-8">
        <div className="card card-custom">
          <div className="card-header py-3">
            <div className="card-title align-items-start flex-column">
              <h3 className="card-label font-weight-bolder text-dark">
                <FormattedMessage id="TABLE.TITLE.BRAND.INFO" />
              </h3>
              <span className="text-muted font-weight-bold font-size-sm mt-1">
                <FormattedMessage id="TABLE.TITLE.BRAND.ADD" />
              </span>
            </div>
          </div>
          <Formik
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            initialValues={savedData || initialValues}
          >
            {(formik) => {
              return <FormikInputs formik={formik} brand={data.brand} />;
            }}
          </Formik>
        </div>
      </div>
    );
  }
};

export default UpdateBrandComponent;
