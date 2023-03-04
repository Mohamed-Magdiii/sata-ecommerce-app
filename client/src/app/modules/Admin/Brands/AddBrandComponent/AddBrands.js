import React, { useEffect } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { FetchCategories } from "../../../actions/category/categoryActions";
import { AddBrand } from "../../../actions/brands/brandActions";
import { FormattedMessage } from "react-intl";
import FormikInputs from "../shared/FormikInputs";
import { initialValues, validationSchema } from "../shared/FormikKeys";

const AddBrands = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchCategories());
  }, [dispatch]);

  const onSubmit = (values, onSubmitProps) => {
    dispatch(AddBrand(values));
    onSubmitProps.resetForm();
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
          initialValues={initialValues}
        >
          {(formik) => {
            return <FormikInputs formik={formik} />;
          }}
        </Formik>
      </div>
    </div>
  );
};

export default AddBrands;
