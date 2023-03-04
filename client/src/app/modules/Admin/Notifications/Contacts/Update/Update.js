import React, { useEffect } from "react";
import TextError from "../../../shared/TextError";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  initialValues,
  validationSchema,
} from "../../../../Home/Components/Contact/FormikKeys";
import { useDispatch, useSelector } from "react-redux";
import {
  hookFetchById,
  hookUpdateById,
} from "../../../../actions/contact/contactActions";
import { BeatLoader } from "react-spinners";

const Update = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchById(match.params.id));
  }, [dispatch, match]);
  const data = useSelector((state) => state.contact);
  const onSubmit = (values) => {
    dispatch(hookUpdateById(values));
  };
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    const savedData = {
      id: data.contact._id,
      name: data.contact.name,
      subject: data.contact.subject,
      email: data.contact.email,
      message: data.contact.message,
    };
    return (
      <div className="card card-custom">
        <div className="card-header py-3">
          <div className="card-title align-items-start flex-column">
            <h3 className="card-label font-weight-bolder text-dark">
              Contact Us Information
            </h3>
            <span className="text-muted font-weight-bold font-size-sm mt-1">
              Change your Contact settings
            </span>
          </div>
        </div>
        <Formik
          validationSchema={validationSchema}
          initialValues={savedData || initialValues}
          onSubmit={onSubmit}
          enableReinitialize
        >
          {(formik) => (
            <Form className="form">
              <div className="card-body">
                <div className="form-group">
                  <label>ID</label>
                  <Field
                    type="text"
                    className="form-control form-control-lg col-9"
                    name="id"
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <Field
                    type="text"
                    className="form-control form-control-lg col-9"
                    name="name"
                  />
                  <ErrorMessage name="name" component={TextError} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <Field
                    type="email"
                    className="form-control form-control-lg col-9"
                    name="email"
                  />
                  <ErrorMessage name="email" component={TextError} />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <Field
                    type="text"
                    className="form-control form-control-lg col-9"
                    name="subject"
                  />
                  <ErrorMessage name="subject" component={TextError} />
                </div>
                <div className="form-group mb-1">
                  <label htmlFor="exampleTextarea">
                    Message <span className="text-danger">*</span>
                  </label>
                  <Field
                    as="textarea"
                    className="form-control col-9"
                    id="exampleTextarea"
                    rows="3"
                    name="message"
                  ></Field>
                  <ErrorMessage name="message" component={TextError} />
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary mr-2">
                  Submit
                </button>
                <button type="reset" className="btn btn-secondary">
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
};

export default Update;
