import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { FormattedMessage } from "react-intl";
import TextError from "../../shared/TextError";
import * as Yup from "yup";
import { updateCountry } from "../../../actions/shippingRegion/country";
import { connect } from "react-redux";
function EditFormComponent({ country , id , updateCountry}) {
  const  onSubmit = (values) =>{
      updateCountry(id,values)
    }
  if (country === null) {
    return <h1>Data is loading...</h1>;
  } else {
    const savedData = {
      id: country ? country._id : "",
      country_en: country ? (country ? country.country.en : "") : "",
      country_ar: country ? (country ? country.country.ar : "") : "",
    };
 const initialValues = {
    country_en: "",
    country_ar: "",
  };
  const validationSchema = Yup.object({
    country_en: Yup.string().required("Country in English is Required !"),
    country_ar: Yup.string().required("Country in Arabic is Required !")
  });

  return (
    <div className="flex-row-fluid ml-lg-8">
      <div className="card card-custom">
        <div className="card-header py-3">
          <div className="card-title align-items-start flex-column">
            <h3 className="card-label font-weight-bolder text-dark">
              <FormattedMessage id="COUNTRY" />
            </h3>
            <span className="text-muted font-weight-bold font-size-sm mt-1">
              <FormattedMessage id="COUNTRY.EDIT" />
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
                    <FormattedMessage id="COUNTRY" /> <FormattedMessage id="SETTINGS.ENGLISH"/>
                      {/* <FormattedMessage id="INPUT.CATEGORY.TITLEENGLISH" /> */}
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div>
                        <Field
                          className="form-control form-control-lg form-control-solid"
                          type="text"
                          name="country_en"
                        />
                        <ErrorMessage name="country_en" component={TextError} />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                    <FormattedMessage id="COUNTRY" /> <FormattedMessage id="SETTINGS.ARABIC" />
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div>
                        <Field
                          className="form-control form-control-lg form-control-solid"
                          type="text"
                          name="country_ar"
                        />
                        <ErrorMessage name="country_ar" component={TextError} />
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
                  {/* <button
                    type="button"
                    onClick={() => history.goBack()}
                    className="btn btn-secondary"
                  >
                    <FormattedMessage id="BUTTON.CANCEL" />
                  </button> */}
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
}
export default connect(null , {updateCountry})(EditFormComponent);
