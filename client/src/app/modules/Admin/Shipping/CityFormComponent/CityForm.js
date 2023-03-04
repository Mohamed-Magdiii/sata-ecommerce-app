import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { addCities, getCities,deleteCity } from '../../../../modules/actions/shippingRegion/city'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { connect } from 'react-redux';
import { getCountries } from '../../../../modules/actions/shippingRegion/country';
import { FormattedMessage } from 'react-intl';
import TextError from '../../shared/TextError';
import * as Yup from "yup";

const CityForm = ({history , addCities, deleteCity, getCities ,getCountries, country:{countries , cities}}) => {
    useEffect(()=>{
        getCities()
        getCountries()
        // eslint-disable-next-line 
    },[])

const initialValues = {
  city_en:"" , 
  city_ar:"",
  countryId:""
}
const onSubmit = (values)=>{
  console.log(values);
    addCities(values)
}
  const validationSchema = Yup.object({
    city_en: Yup.string().required("City in English is Required !"),
    city_ar: Yup.string().required("City in Arabic is Required !"),
    countryId: Yup.string().required("Country is Required !"), 
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
                    <FormattedMessage id="CITY" /> <FormattedMessage id="SETTINGS.ENGLISH" />
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
                    <FormattedMessage id="CITY" /> <FormattedMessage id="SETTINGS.ARABIC" />
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
                  <div className="form-group row">
          <label className="col-xl-3 col-lg-3 col-form-label">
            <FormattedMessage id="COUNTRY" />
          </label>
          <div className="col-lg-9 col-xl-6">
            <div className="input-group input-group-lg input-group-solid">
              <Field
                as="select"
                className="form-control form-control-lg form-control-solid"
                name="countryId"
              >
                <option value={""}>Select Country</option>
                {countries.map((c) => (
                  <option key={c._id} value={c._id}>
                      {c.country.en}
                  </option>
                ))}
              </Field>
            </div>
            <ErrorMessage name="countryId" component={TextError} />
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
          }}
        </Formik>
      </div>
      <div className='mt-5'>
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
         </div>
    </div>
    //     <div>
    //     <Formik>
    //     <form className="form form-label-right" onSubmit={e => onSubmit(e)}>
    //       <div className="form-group row">
    //         <div className="col-lg-12">
    //           <Field
    //             name="city"
    //             component={Input}
    //             placeholder="City"
    //             label="City"
    //            className="form-control"
    //            value={city_en}
    //            onChange={(e)=>setCityEn(e.target.value)}
    //           />
    //         </div>
    //         <div className="col-lg-12">
    //           <Field
    //             name="city"
    //             component={Input}
    //             placeholder="المدينه"
    //             label="المدينه"
    //            className="form-control"
    //            value={city_ar}
    //            onChange={(e)=>setCityAr(e.target.value)}
    //           />
    //         </div>
    //         <div className="col-lg-12">
    //           <Select
    //             name="countryId"
    //             label="Country"
    //             onChange={(e)=>setCountryId(e.target.value)}
    //           ><option value="0">Choose Your Country</option>
    //             {countries.map((count) => (
    //               <option key={count._id} value={count._id}>
    //                 {count.country&& count.country.en}
    //               </option>
    //             ))}
    //         </Select>
    //         </div>
    //         </div>
    //         <button type="submit" className="btn btn-primary">
    //         Sumbit
    //       </button>
    //     </form>
    //   </Formik>
    //   <hr/>
    //   <div>
    // <table className="table table-hover align-middle gs-0 gy-4">
    //   <thead>
    //     <tr className="text-center border-3 fw-bolder text-muted bg-light">
    //       <th className="ps-4 min-w-100px">Country</th>
    //       <th className="ps-4 min-w-100px">City</th>
    //       <th className="ps-4 min-w-100px">Actions</th>
    //      </tr>
    //   </thead>
    //   <tbody>
    //   {cities && cities.map((cit ) => (
    //         <tr className="text-center border-3 m-auto" key={cit._id}>
    //          <td className="border text-center">
    //             <div className="d-flex flex-column">
    //               {cit.countryId.country && cit.countryId.country.en}
    //             </div>
    //           </td> 
    //          <td className="border text-center">
    //             <div className="d-flex flex-column">
    //               {cit.city && cit.city.en}
    //             </div>
    //           </td>     
                    
    //           <td className="border text-center">
    //            <span> <i key={cit._id} className="far fa-trash-alt ml-auto text-danger" onClick={(e) => deleteCity(cit._id)}/></span>
    //           </td>
    //         </tr>
    //       )
    //      )}
    //       </tbody>
    // </table>
    //   </div>
    //     </div>

        
    )
}

CityForm.propTypes = {
getCountries:PropTypes.func.isRequired,
getCities:PropTypes.func.isRequired,
addCities:PropTypes.func.isRequired,
deleteCity:PropTypes.func.isRequired,
}
const mapStateToProps= state =>({
    country : state.country
})
export default connect(mapStateToProps, {addCities, getCountries , getCities, deleteCity})(CityForm)

