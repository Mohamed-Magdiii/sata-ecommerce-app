import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import TextError from "../../shared/TextError";
import { UpdateOrderById } from "../../../actions/orders/orderActions";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";

function UpdateOrder({ order }) {
  const dispatch = useDispatch();
  const savedData = {
    address: order ? order.address : "",
    price: order ? order.price : "",
    shipping_cost: order ? order.shipping_cost : "",
    type: order ? order.type : "",
    is_paid: order ? order.is_paid : "",
  };
  const initialValues = {
    address: "",
    price: "",
    shipping_cost: "",
    type: "",
    is_paid: true,
  };
  const validationSchema = Yup.object({
    address: Yup.string().required("Address is Required !"),
    price: Yup.string().required("Price is Required !"),
    shipping_cost: Yup.string().required("Shipping is Required !"),
    type: Yup.string().required("Type is Required !"),
    is_paid: Yup.boolean().required("Is Paid is Required !"),
  });
  const onSubmit = (values) => dispatch(UpdateOrderById(order._id, values));
  return (
    <Formik
      initialValues={savedData || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
        return (
          <Form className="form">
            <div className="card-body">
              <div className="row">
                <label className="col-xl-3"></label>
                <div className="col-lg-9 col-xl-6">
                  <h5 className="font-weight-bold mb-6">
                    <FormattedMessage id="TABLE.TITLE.ORDER.UPDATE" />
                  </h5>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  <FormattedMessage id="TABLE.ORDERS.ID" />
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="text"
                    value={order ? order._id : ""}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  <FormattedMessage id="TABLE.ORDERS.CUSTOMERNAME" />
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="text"
                    value={
                      order
                        ? order.customer
                          ? order.customer.fullname
                          : ""
                        : ""
                    }
                    disabled
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  <FormattedMessage id="TABLE.ORDERS.ADDRESS" />
                </label>
                <div className="col-lg-9 col-xl-6">
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    type="text"
                    name="address"
                  />
                  <ErrorMessage name="address" component={TextError} />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  <FormattedMessage id="TABLE.ORDERS.PRICE" />
                </label>
                <div className="col-lg-9 col-xl-6">
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    type="text"
                    name="price"
                  />
                  <ErrorMessage name="price" component={TextError} />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label">
                  <FormattedMessage id="TABLE.ORDERS.SHIPPING.COST" />
                </label>
                <div className="col-lg-9 col-xl-6">
                  <Field
                    className="form-control form-control-lg form-control-solid"
                    type="text"
                    name="shipping_cost"
                  />
                  <ErrorMessage name="shipping_cost" component={TextError} />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-form-label text-left col-lg-3 col-sm-12">
                  <FormattedMessage id="TABLE.ORDERS.STATUS" />
                </label>
                <div className=" col-lg-6 col-md-9 col-sm-12">
                  <Field
                    as="select"
                    className="form-control select2"
                    id="kt_select2_1"
                    name="type"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Deliverd">Deliverd</option>
                    <option value="onDelivery">onDelivery</option>
                    <option value="Refused">Refused</option>
                  </Field>
                  <ErrorMessage name="type" component={TextError} />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-3 col-form-label">Paid</label>
                <div className="col-9 col-form-label">
                  <div className="radio-inline">
                    <label className="radio radio-primary">
                      <Field
                        type="radio"
                        name="is_paid"
                        checked={formik.values.is_paid}
                        onChange={() => formik.setFieldValue("is_paid", true)}
                      />
                      <span></span>
                      <FormattedMessage id="TABLE.ORDERS.IS.PAID" />
                    </label>
                    <label className="radio radio-primary">
                      <Field
                        type="radio"
                        name="is_paid"
                        checked={!formik.values.is_paid}
                        onChange={() => formik.setFieldValue("is_paid", false)}
                      />
                      <span></span>
                      <FormattedMessage id="TABLE.ORDERS.NOT.PAID" />
                    </label>
                  </div>
                </div>
                <ErrorMessage name="is_paid" component={TextError} />
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
  );
}

export default UpdateOrder;
