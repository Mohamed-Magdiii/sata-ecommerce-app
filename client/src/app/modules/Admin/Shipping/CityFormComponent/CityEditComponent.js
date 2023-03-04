import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { FormattedMessage } from "react-intl";
import TextError from "../../shared/TextError";
import * as Yup from "yup";
import { updateCity } from "../../../actions/shippingRegion/city";
import { connect } from "react-redux";
function EditFormComponent({ id , updateCity , country:{city} }) {
  const  onSubmit = (values) =>{
    updateCity(id,values)
    }
    const initialValues = {
      city_en: "",
      city_ar: "",
    };
  if (city === null) {
    return <h1>Data is loading...</h1>;
  } else {
    const savedData = {
      id: city ? city._id : "",
      city_en: city ?  city.city.en  : "",
      city_ar: city ? city.city.ar : "",
    };
 
  const validationSchema = Yup.object({
    city_en: Yup.string().required("City in English is Required !"),
    city_ar: Yup.string().required("City in Arabic is Required !")
  });
  
  // console.log(savedData);
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
                          name="city_en"
                        />
                        <ErrorMessage name="city_en" component={TextError} />
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
                          name="city_ar"
                        />
                        <ErrorMessage name="city_ar" component={TextError} />
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
const mapStateToProps= state =>({
  country : state.country
})
export default connect(mapStateToProps , {updateCity})(EditFormComponent);
