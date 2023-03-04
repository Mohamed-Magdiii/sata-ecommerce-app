import React from "react";
import { initialValues, validationSchema } from "./FormikKeys";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useSendContact } from "./FormikKeys";
import TextError from "../../../Admin/shared/TextError";
const FormContact = () => {
  const { mutate } = useSendContact();
  const onSubmit = (values, onSubmitProps) => {
    mutate(values);
    onSubmitProps.resetForm();
  };
  return (
    <div className="u-s-p-b-60">
      <div className="section__content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-area u-h-100">
                <div className="contact-area__heading">
                  <h2>Get In Touch</h2>
                </div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {(formik) => (
                    <Form className="contact-f">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 u-h-100">
                          <div className="u-s-m-b-30">
                            <label htmlFor="c-name"></label>

                            <Field
                              className="input-text input-text--border-radius input-text--primary-style"
                              type="text"
                              id="c-name"
                              placeholder="Name (Required)"
                              name="name"
                            />
                            <ErrorMessage name="name" component={TextError} />
                          </div>
                          <div className="u-s-m-b-30">
                            <label htmlFor="c-email"></label>

                            <Field
                              className="input-text input-text--border-radius input-text--primary-style"
                              type="text"
                              id="c-email"
                              placeholder="Email (Required)"
                              name="email"
                            />
                            <ErrorMessage name="email" component={TextError} />
                          </div>
                          <div className="u-s-m-b-30">
                            <label htmlFor="c-subject"></label>

                            <Field
                              className="input-text input-text--border-radius input-text--primary-style"
                              type="text"
                              id="c-subject"
                              placeholder="Subject (Required)"
                              name="subject"
                            />
                            <ErrorMessage
                              name="subject"
                              component={TextError}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 u-h-100">
                          <div className="u-s-m-b-30">
                            <label htmlFor="c-message"></label>
                            <Field
                              as="textarea"
                              className="text-area text-area--border-radius text-area--primary-style"
                              id="c-message"
                              placeholder="Compose a Message (Required)"
                              name="message"
                            ></Field>
                            <ErrorMessage
                              name="message"
                              component={TextError}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <button
                            className="btn btn--e-brand-b-2"
                            type="submit"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
