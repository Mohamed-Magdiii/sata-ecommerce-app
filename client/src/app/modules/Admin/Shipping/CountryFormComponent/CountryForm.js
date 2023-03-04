import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { addCountries, getCountries,deleteCountry } from '../../../../modules/actions/shippingRegion/country'
import { connect } from 'react-redux';
import { Formik, ErrorMessage, Field, Form } from "formik";
import { FormattedMessage } from 'react-intl';
import * as Yup from "yup";
import TextError from '../../shared/TextError';
import { useHistory } from "react-router-dom";

const CountryForm = ({addCountries, deleteCountry ,getCountries, country:{countries}}) => {
  const initialValues = {
    country_en: "",
    country_ar: "",
  };
  const validationSchema = Yup.object({
   country_en: Yup.string().required("Country in English is Required !"),
    country_ar: Yup.string().required("Country in Arabic is Required !"),
});

    useEffect(()=>{
        getCountries()
         // eslint-disable-next-line
    },[])
    // const [ country_en , setCountryEn] = useState('')
    // const [ country_ar , setCountryAr] = useState('')
    const onSubmit = (values , onSubmitProps)=>{
        addCountries(values)
        onSubmitProps.resetForm();
        // setCountryEn('')
        // setCountryAr('')
    }
    const history = useHistory()
    return (
    //     <div>
    //     <Formik>
    //     <form className="form form-label-right" onSubmit={(e) => onSubmit(e)} >
    //       <div className="form-group row">
    //         <div className="col-lg-12">
    //           <Field
    //             name="country"
    //             component={Input}
    //             placeholder="Country"
    //             label="Country"
    //             onChange={(e) => setCountryEn(e.target.value)}
    //             value={country_en}
    //             className="form-control"
    //           />
    //         </div>
    //         <div className="col-lg-12">
    //           <Field
    //             name="country"
    //             component={Input}
    //             placeholder="الدوله"
    //             label="الدوله"
    //             onChange={(e) => setCountryAr(e.target.value)}
    //             value={country_ar}
    //             className="form-control"
    //           />
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
    //       <th className="ps-4 min-w-100px">Actions</th>
    //      </tr>
    //   </thead>
    //   <tbody>
    //      {countries && countries.map((count ) => (
    //         <tr className="text-center border-3 m-auto" key={count._id}>
    //          <td className="border text-center">
    //             <div className="d-flex flex-column">
    //               {count.country && count.country.en}
    //             </div>
    //           </td>            
    //           <td className="border text-center">
    //            <span> <i key={count._id} className="far fa-trash-alt ml-auto text-danger" onClick={e => deleteCountry(count._id)}/></span>
    //           </td>
    //         </tr>
    //       )
    //      )}
    //   </tbody>
    // </table>
    //   </div>
    //     </div>

    <div className="flex-row-fluid ml-lg-8">
    <div className="card card-custom">
      <div className="card-header py-3">
        <div className="card-title align-items-start flex-column">
          <h3 className="card-label font-weight-bolder text-dark">
            <FormattedMessage id="COUNTRY" />
          </h3>
          <span className="text-muted font-weight-bold font-size-sm mt-1">
            <FormattedMessage id="COUNTRY.ADD" />
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
                    {/* Country English  */}
                  <FormattedMessage id="SETTINGS.TITLE" /> <FormattedMessage id="SETTINGS.ENGLISH" />
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
                  <FormattedMessage id="SETTINGS.TITLE" /> <FormattedMessage id="SETTINGS.ARABIC" />
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
                <button
                  type="button"
                  onClick={() => history.goBack()}
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
          <th className="ps-4 min-w-100px"><FormattedMessage id="COUNTRY" /> <FormattedMessage id="SETTINGS.ENGLISH"/></th>
          <th className="ps-4 min-w-100px"><FormattedMessage id="COUNTRY" /> <FormattedMessage id="SETTINGS.ARABIC"/></th>
        <th className="ps-4 min-w-100px"><FormattedMessage id="BLOG.ACITONS" /></th>
          </tr>
       </thead>
       <tbody>
          {countries && countries.map((count ) => (
            <tr className="text-center border-3 m-auto" key={count._id}>
             <td className="border text-center">
                <div className="d-flex flex-column">
                  {count.country && count.country.en}
                </div>
              </td> 
              <td className="border text-center">
                <div className="d-flex flex-column">
                  {count.country && count.country.ar}
                </div>
              </td>            
              <td className="border text-center">
               <span className='btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon'> <i key={count._id} className="far fa-edit" onClick={e => history.push(`/admin/shipping/country-form/${count._id}`)}/></span>
              <span className='btn btn-sm btn-default btn-text-danger btn-hover-danger btn-icon'> <i key={count._id} className="far fa-trash-alt" onClick={e => deleteCountry(count._id)}/></span>
              </td>
            </tr>
          )
         )}
      </tbody>
    </table>
       </div>
  </div>
    )
}

CountryForm.propTypes = {
addCountries:PropTypes.func.isRequired,
deleteCountry:PropTypes.func.isRequired,
getCountries:PropTypes.func.isRequired,
country:PropTypes.object.isRequired,
}
const mapStateToProps= state =>({
    country : state.country
})
export default connect(mapStateToProps, { addCountries,deleteCountry , getCountries})(CountryForm)

