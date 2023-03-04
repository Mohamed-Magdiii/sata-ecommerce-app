import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  FetchProducts,
  FetchVendorProducts,
} from "../../../actions/products/productsActions";
import { hookAddOffer } from "../../../actions/offers/offerActions";
import { BeatLoader } from "react-spinners";
import * as Yup from "yup";
import TextError from "../../shared/TextError";
import CustomSelect from "../../shared/CustomSelect";
import DetectLang from "../../../utils/HEADERS";
import { FormattedMessage } from "react-intl";

function AddOffer() {
  const validationSchema = Yup.object({
    price: Yup.string().required("Required Field"),
    from: Yup.string().required("Start Date is Required !"),
    to: Yup.string().required("End Date is Required !"),
    quantity: Yup.string().required("Quantity is Required !"),
    products: Yup.array().required("Products is Required !"),
  });
  const onSubmit = (values) => {
    dispatch(hookAddOffer(values));
    dispatch(user.roles[0] === 1 ? FetchProducts() : FetchVendorProducts());
  };
  const initialValues = {
    price: "",
    from: "",
    to: "",
    quantity: "",
    products: [],
  };
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth, shallowEqual);
  useEffect(() => {
    dispatch(user.roles[0] === 1 ? FetchProducts() : FetchVendorProducts());
  }, [dispatch, user]);
  const data = useSelector((state) => state.products, shallowEqual);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    const product =
      user.roles[0] === 2
        ? data.products.filter((p) => {
            return p?.user?._id === user._id;
          })
        : data.products.map((p) => p);
    const productOption = product.map((v) => {
      return {
        label: v.title ? (DetectLang ? v.title.ar : v.title.en) : "",
        value: v._id,
      };
    });
    return (
      <div className="flex-row-fluid ml-lg-8">
        <div className="card card-custom card-stretch">
          <div className="card-header py-3">
            <div className="card-title align-items-start flex-column">
              <h3 className="card-label font-weight-bolder text-dark">
                <FormattedMessage id="TABLE.TITLE.OFFERS.INFO" />
              </h3>
              <span className="text-muted font-weight-bold font-size-sm mt-1">
                <FormattedMessage id="TABLE.TITLE.OFFERS.ADD" />
              </span>
            </div>
          </div>
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form className="form">
                  <div className="card-body">
                    <div className="row">
                      <label className="col-xl-3"></label>
                      <div className="col-lg-9 col-xl-6">
                        <h5 className="font-weight-bold mb-6">
                          <FormattedMessage id="TABLE.TITLE.OFFERS.INFO" />
                        </h5>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        <FormattedMessage id="TABLE.OFFERS.PRICE" />
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <Field
                          className="form-control form-control-lg form-control-solid"
                          type="text"
                          name="price"
                          placeholder="Price..."
                        />
                        <ErrorMessage name="price" component={TextError} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        <FormattedMessage id="TABLE.OFFERS.FROM" />
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <div
                          className="input-group input-group-solid date"
                          id="kt_datetimepicker_3"
                          data-target-input="nearest"
                        >
                          <Field
                            type="date"
                            className="form-control form-control-solid datetimepicker-input"
                            placeholder="Select date time"
                            data-target="#kt_datetimepicker_3"
                            name="from"
                          />
                          <div
                            className="input-group-append"
                            data-target="#kt_datetimepicker_3"
                            data-toggle="datetimepicker"
                          >
                            <span className="input-group-text">
                              <i className="ki ki-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <ErrorMessage name="from" component={TextError} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        <FormattedMessage id="TABLE.OFFERS.TO" />
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <div
                          className="input-group input-group-solid date"
                          id="kt_datetimepicker_3"
                          data-target-input="nearest"
                        >
                          <Field
                            type="date"
                            className="form-control form-control-solid datetimepicker-input"
                            placeholder="Select date time"
                            data-target="#kt_datetimepicker_3"
                            name="to"
                          />
                          <div
                            className="input-group-append"
                            data-target="#kt_datetimepicker_3"
                            data-toggle="datetimepicker"
                          >
                            <span className="input-group-text">
                              <i className="ki ki-calendar"></i>
                            </span>
                          </div>
                        </div>
                        <ErrorMessage name="to" component={TextError} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        <FormattedMessage id="TABLE.OFFERS.QUANTITY" />
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <Field
                          className="form-control form-control-lg form-control-solid"
                          type="text"
                          name="quantity"
                          placeholder="Quantity..."
                        />
                        <ErrorMessage name="quantity" component={TextError} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3">
                        <FormattedMessage id="MENU.PRODUCTS" />
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <Field
                          style={{
                            marginBottom: "1rem",
                            maxWidth: "20rem",
                          }}
                          name="products"
                          options={productOption}
                          component={CustomSelect}
                          placeholder="Select multi Products..."
                          isMulti={true}
                        />
                        <ErrorMessage name="products" component={TextError} />
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
                    <button type="reset" className="btn btn-secondary">
                      <FormattedMessage id="BUTTON.CANCEL" />
                    </button>
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

export default AddOffer;
