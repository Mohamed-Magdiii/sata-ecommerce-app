import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useGetOrderITemById,
  useFindByRole,
  useUpdateOrderItem,
} from "../shared/axiosFunctions";
import { BeatLoader } from "react-spinners";
import Shared from "./Shared";
import { Form, Formik, Field, ErrorMessage } from "formik";
import TextError from "../../shared/TextError";
import * as Yup from "yup";
import DispLang from "../../shared/DispLang";
import { FetchVendorProducts } from "../../../actions/products/productsActions";

function UpdateOrderItem({ match }) {
  const { data, isLoading, isError, error } = useGetOrderITemById(
    match.params.id
  );
  const { data: deliveries } = useFindByRole("vendor", "delivery");
  const { mutate } = useUpdateOrderItem();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchVendorProducts());
  }, [dispatch]);
  const allProducts = useSelector((state) => state.products);
  const initialValues = {
    id: "",
    product: "",
    quantity: "",
    address: "",
    status: "",
    delivery: "",
  };
  const validationSchema = Yup.object({
    id: Yup.string().required("Required !"),
    address: Yup.string().required("Required !"),
    product: Yup.string().required("Required !"),
    quantity: Yup.string().required("Required !"),
    status: Yup.string().required("Required !"),
    delivery: Yup.string().required("Required !"),
  });
  const onSubmit = (values) => {
    mutate(values);
  };
  if (isLoading || allProducts.loading) {
    return <BeatLoader loading={isLoading || allProducts.loading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    const savedData = {
      id: data?.data._id,
      address: data?.data.order.address,
      product: data?.data.product._id,
      quantity: data?.data.quantity,
      status: data?.data.status,
      delivery: data?.data.delivery,
    };
    return (
      <div className="flex-row-fluid ml-lg-8">
        <div className="card card-custom card-stretch">
          <Shared />
          {data && (
            <Formik
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              initialValues={savedData || initialValues}
              enableReinitialize
            >
              {(formik) => (
                <Form className="form">
                  <div className="card-body">
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        Order Id
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <Field
                          className="form-control form-control-lg form-control-solid"
                          type="text"
                          name="id"
                          disabled
                        />
                        <ErrorMessage name="id" component={TextError} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        Order Quantity
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <Field
                          className="form-control form-control-lg form-control-solid"
                          type="text"
                          name="quantity"
                        />
                        <ErrorMessage name="quantity" component={TextError} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        Customer Address
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
                        Delivery
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <Field
                          as="select"
                          name="delivery"
                          className="form-control"
                        >
                          <option value={""}>Select Delivery</option>
                          {deliveries &&
                            deliveries?.data.map((d) => (
                              <option value={d._id} key={d._id}>
                                {d.user.fullname}
                              </option>
                            ))}
                        </Field>
                        <ErrorMessage name="delivery" component={TextError} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        Order Status
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <Field
                          as="select"
                          name="status"
                          className="form-control"
                        >
                          <option>Select Type</option>
                          <option value={"Pending"}>Pending</option>
                          <option value={"Confirmed"}>Confirmed</option>
                          <option value={"Deliverd"}>Deliverd</option>
                          <option value={"onDelivery"}>onDelivery</option>
                          <option value={"Refused"}>Refused</option>
                        </Field>
                        <ErrorMessage name="status" component={TextError} />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        Product
                      </label>
                      <div className="col-lg-9 col-xl-6">
                        <Field
                          as="select"
                          name="product"
                          className="form-control"
                        >
                          {allProducts &&
                            allProducts.products.map((d) => (
                              <option value={d._id} key={d._id}>
                                {d.title
                                  ? DispLang
                                    ? d.title.ar
                                    : d.title.en
                                  : ""}
                              </option>
                            ))}
                        </Field>
                        <ErrorMessage name="product" component={TextError} />
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
                    <button type="submit" className="btn btn-success mr-2">
                      Save Changes
                    </button>
                    <button type="reset" className="btn btn-secondary">
                      Cancel
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    );
  }
}

export default UpdateOrderItem;
