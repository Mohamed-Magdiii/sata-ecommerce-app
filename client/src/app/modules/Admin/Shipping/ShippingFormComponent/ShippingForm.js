import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCities } from "../../../../modules/actions/shippingRegion/city";
import { connect } from "react-redux";
import { getCountries } from "../../../../modules/actions/shippingRegion/country";
import { addShipping } from "../../../../modules/actions/shippingRegion/shipping";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormattedMessage } from 'react-intl';
import TextError from '../../shared/TextError';
import * as Yup from "yup";
const CityForm = ({
  history,
  getCities,
  addShipping,
  getCountries,
  country: { countries, cities },
}) => {
  useEffect(() => {
    getCities();
    getCountries();
    // eslint-disable-next-line
  }, []);
  const initialValues = {
    region_en:"",
    region_ar:"",
    price:0,
    cityId:"",
  };
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   addShipping(formData);
  //   setregionAR("");
  //   setregionEn("");
  //   setCityId(0);
  //   setPrice("");
  // };
  const onSubmit = (values)=>{
    console.log(values);
      addShipping(values)
  }
    const validationSchema = Yup.object({
      region_en: Yup.string().required("Region in English is Required !"),
      region_ar: Yup.string().required("Region in Arabic is Required !"),
      price: Yup.string().required("Region in English is Required !"),
      cityId: Yup.string().required("City is Required !"), 
  });
  return (
    <div className="flex-row-fluid ml-lg-8">
    <div className="card card-custom">
      <div className="card-header py-3">
        <div className="card-title align-items-start flex-column">
          <h3 className="card-label font-weight-bolder text-dark">
            <FormattedMessage id="CITY" />
          </h3>
          <span className="text-muted font-weight-bold font-size-sm mt-1">
            <FormattedMessage id="CITY.ADD" />
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
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <div>
                      <Field
                        className="form-control form-control-lg form-control-solid"
                        type="number"
                        name="price"
                      />
                      <ErrorMessage name="price" component={TextError} />
                    </div>
                  </div>
                </div>
                <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label">
          <FormattedMessage id="CITY" />
        </label>
        <div className="col-lg-9 col-xl-6">
          <div className="input-group input-group-lg input-group-solid">
            <Field
              as="select"
              className="form-control form-control-lg form-control-solid"
              name="cityId"
            >
              <option value={""}>Select City</option>
              {cities.map((c) => (
                <option key={c._id} value={c._id}>
                    {c.city.en}
                </option>
              ))}
            </Field>
          </div>
          <ErrorMessage name="cityId" component={TextError} />
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
    {/* <div className='mt-5'>
    <table className="table table-hover align-middle gs-0 gy-4">
      <thead>
         <tr className="text-center border-3 fw-bolder text-muted bg-light">
          <th className="ps-4 min-w-100px"><FormattedMessage id="CITY" /> <FormattedMessage id="SETTINGS.ENGLISH"/></th>
          <th className="ps-4 min-w-100px"><FormattedMessage id="CITY" /> <FormattedMessage id="SETTINGS.ARABIC"/></th>
        <th className="ps-4 min-w-100px"><FormattedMessage id="BLOG.ACITONS" /></th>
          </tr>
       </thead>
       <tbody>
          {cities && cities.map((city ) => (
            <tr className="text-center border-3 m-auto" key={city._id}>
             <td className="border text-center">
                <div className="d-flex flex-column">
                  {city.city && city.city.en}
                </div>
              </td> 
              <td className="border text-center">
                <div className="d-flex flex-column">
                  {city.city && city.city.ar}
                </div>
              </td>            
              <td className="border text-center">
               <span className='btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon'> <i key={city._id} className="far fa-edit" onClick={e => history.push(`/admin/shipping/city-form/${city._id}`)}/></span>
              <span className='btn btn-sm btn-default btn-text-danger btn-hover-danger btn-icon'> <i key={city._id} className="far fa-trash-alt" onClick={e => deleteCity(city._id)}/></span>
              </td>
            </tr>
          )
         )}
      </tbody>
    </table>
       </div> */}
  </div>
    // <div>
    //   <Formik>
    //     <form className="form form-label-right" onSubmit={(e) => onSubmit(e)}>
    //       <div className="form-group row">
    //         <div className="col-lg-12">
    //           <Select
    //             name="countryId"
    //             label="Country"
    //             onChange={(e) => setCityId(e.target.value)}
    //           >
    //             <option value="0">Choose Your city</option>
    //             {cities.map((cit) => (
    //               <option key={cit._id} value={cit._id}>
    //                 {cit.city && cit.city.en}
    //               </option>
    //             ))}
    //           </Select>
    //         </div>
    //         <div className="col-lg-12 m-2">
    //           <Field
    //             name="region"
    //             component={Input}
    //             placeholder="Region"
    //             label="region"
    //             className="form-control"
    //             value={region_en}
    //             onChange={(e) => setregionEn(e.target.value)}
    //           />
    //         </div>
    //         <div className="col-lg-12 m-2">
    //           <Field
    //             name="region"
    //             component={Input}
    //             placeholder="المنطقه"
    //             label="المنطقه"
    //             className="form-control"
    //             value={region_ar}
    //             onChange={(e) => setregionAR(e.target.value)}
    //           />
    //         </div>
    //         <div className="col-lg-12 m-2">
    //           <Field
    //             name="price"
    //             component={Input}
    //             placeholder="Price"
    //             label="price"
    //             className="form-control"
    //             value={price}
    //             onChange={(e) => setPrice(e.target.value)}
    //           />
    //         </div>
    //       </div>
    //       <button type="submit" className="btn btn-primary">
    //         Sumbit
    //       </button>
    //     </form>
    //   </Formik>
    // </div>
  );
};

CityForm.propTypes = {
  getCountries: PropTypes.func.isRequired,
  getCities: PropTypes.func.isRequired,
  addShipping: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  country: state.country,
});
export default connect(mapStateToProps, {
  addShipping,
  getCountries,
  getCities,
})(CityForm);
