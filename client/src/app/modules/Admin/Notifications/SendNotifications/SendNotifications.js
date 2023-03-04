import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchCustomers } from "../../../actions/customers/customersActions";
import { BeatLoader } from "react-spinners";
import CustomSelect from "../../shared/CustomSelect";
import Header from "./Header";
import { sendNotification } from "./api/axiosFunctions";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import TextError from "../../shared/TextError";
import { FormattedMessage } from "react-intl";

function SendNotifications() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchCustomers());
  }, [dispatch]);
  const data = useSelector((state) => state.users);
  const initialValues = {
    users: [],
    description_en: "",
    description_ar: "",
  };
  const validationSchema = Yup.object({
    users: Yup.array().required("Users Required !"),
    description_en: Yup.string().required("Write a message in english !"),
    description_ar: Yup.string().required("Write a message in Arabic !"),
  });
  const onSubmit = (values, onSubmitProps) => {
    sendNotification(values);
    onSubmitProps.resetForm();
  };
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    const userOptions = data.users.map((u) => {
      return { label: u.fullname, value: u._id };
    });
    return (
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        <div className="d-flex flex-column-fluid">
          <div className="container">
            <Header />
            <div className="card card-custom gutter-b">
              <div className="card-header">
                <div className="card-title">
                  <h5 className="card-label">Send Notification</h5>
                </div>
              </div>
              <Formik
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                initialValues={initialValues}
              >
                {(formik) => {
                  return (
                    <Form className="form">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3"></div>
                          <div className="col-xl-6">
                            <div className="form-group">
                              <label>
                                <FormattedMessage id="INPUT.NOTIFICATION.MULTI.USERS" />
                              </label>
                              <Field
                                style={{
                                  marginBottom: "1rem",
                                  maxWidth: "20rem",
                                }}
                                name="users"
                                options={userOptions}
                                component={CustomSelect}
                                placeholder="Select multi Users..."
                                isMulti={true}
                              />
                              <ErrorMessage
                                name="users"
                                component={TextError}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleTextarea">
                                <FormattedMessage id="INPUT.NOTIFICATION.DESCRIPTION.EG" />
                              </label>
                              <Field
                                as="textarea"
                                className="form-control form-control-solid form-control-lg"
                                id="exampleTextarea"
                                name="description_en"
                                placeholder="Write Notification ..."
                                rows="3"
                              ></Field>
                              <ErrorMessage
                                name="description_en"
                                component={TextError}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="exampleTextarea">
                                <FormattedMessage id="INPUT.NOTIFICATION.DESCRIPTION.AR" />
                              </label>
                              <Field
                                as="textarea"
                                className="form-control form-control-solid form-control-lg"
                                id="exampleTextarea"
                                name="description_ar"
                                placeholder="Write Notification ..."
                                rows="3"
                              ></Field>
                              <ErrorMessage
                                name="description_ar"
                                component={TextError}
                              />
                            </div>
                          </div>
                          <div className="col-xl-3"></div>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="row">
                          <div className="col-xl-3"></div>
                          <div className="col-xl-6">
                            <button
                              type="submit"
                              disabled={!formik.isValid}
                              className="btn btn-primary font-weight-bold mr-2"
                            >
                              Submit
                            </button>
                            <button
                              type="reset"
                              className="btn btn-clean font-weight-bold"
                            >
                              Cancel
                            </button>
                          </div>
                          <div className="col-xl-3"></div>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SendNotifications;
