import React from 'react'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormattedMessage } from "react-intl";
import TextError from "../../shared/TextError";
import * as Yup from "yup";
import { updateShipping } from '../../../actions/shippingRegion/shipping';
import { connect } from 'react-redux';
function ShippingEditComponent({history,region , id,updateShipping}) {
    const  onSubmit = (values) =>{
        updateShipping(id,values)
      }
    if (region === null) {
      return <h1>Data is loading...</h1>;
    } else {
      const savedData = {
        id: region ? region._id : "",
        region_en: region ? (region ? region.region.en : "") : "",
        region_ar: region ? (region ? region.region.ar : "") : "",
        price: region ? (region ? region.price : "") : "",
      };
   const initialValues = {
      region_en: "",
      region_ar: "",
      price: 0,
    };
    const validationSchema = Yup.object({
      region_en: Yup.string().required("Region in English is Required !"),
      region_ar: Yup.string().required("Region in Arabic is Required !"),
      price: Yup.string().required("Region in Arabic is Required !"),
    });
  return (
    <div className="flex-row-fluid ml-lg-8">
    <div className="card card-custom">
      <div className="card-header py-3">
        <div className="card-title align-items-start flex-column">
          <h3 className="card-label font-weight-bolder text-dark">
          <FormattedMessage id="REGION" />
          </h3>
          <span className="text-muted font-weight-bold font-size-sm mt-1">
            <FormattedMessage id="REGION.EDIT" />
          </span>
        </div>
      </div>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={savedData || initialValues}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form>
              <div className="card-body">
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label">
                  <FormattedMessage id="REGION" /> <FormattedMessage id="SETTINGS.ENGLISH" />
                    {/* <FormattedMessage id="INPUT.CATEGORY.TITLEENGLISH" /> */}
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <div>
                      <Field
                        className="form-control form-control-lg form-control-solid"
                        type="text"
                        name="region_en"
                      />
                      <ErrorMessage name="region_en" component={TextError} />
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label">
                  <FormattedMessage id="REGION" /> <FormattedMessage id="SETTINGS.ARABIC" />
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <div>
                      <Field
                        className="form-control form-control-lg form-control-solid"
                        type="text"
                        name="region_ar"
                      />
                      <ErrorMessage name="region_ar" component={TextError} />
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label">
                  <FormattedMessage id="REGION.PRICE" />
                  {/* <FormattedMessage id="REGION" /> <FormattedMessage id="SETTINGS.ARABIC" /> */}
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <div>
                      <Field
                        className="form-control form-control-lg form-control-solid"
                        type="text"
                        name="price"
                      />
                      <ErrorMessage name="price" component={TextError} />
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
                  onClick={() => history.push('/admin/shipping/shipping-list')}
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
  )
}
}
export default connect(null , {updateShipping})(ShippingEditComponent)