import React from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { BeatLoader } from "react-spinners";
import {
  useGetWorkerById,
  useUpdateWorkerByVendor,
} from "../../shared/axiosFunction";

function UpdateWorker({ match }) {
  const { data, isLoading, isError, error } = useGetWorkerById(match.params.id);
  const { mutate } = useUpdateWorkerByVendor();
  const initialValues = {
    canAdd: "true",
    canUpdate: "false",
    canDelete: "true",
  };
  const onSubmit = (values) => {
    mutate(values);
  };
  const validationSchema = Yup.object({
    canAdd: Yup.string().required("Required !"),
    canDelete: Yup.string().required("Required !"),
    canUpdate: Yup.string().required("Required !"),
  });
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    const savedData = {
      id: data?.data._id,
      canAdd: String(data?.data.canAdd),
      canUpdate: String(data?.data.canUpdate),
      canDelete: String(data?.data.canDelete),
    };
    return (
      <div className="flex-row-fluid ml-lg-8">
        <div className="card card-custom card-stretch">
          <div className="card-header py-3">
            <div className="card-title align-items-start flex-column">
              <h3 className="card-label font-weight-bolder text-dark">
                Worker Information
              </h3>
              <span className="text-muted font-weight-bold font-size-sm mt-1">
                Update your Worker informaiton
              </span>
            </div>
          </div>
          <Formik
            onSubmit={onSubmit}
            initialValues={savedData || initialValues}
            validationSchema={validationSchema}
            enableReinitialize
          >
            {(formik) => (
              <Form className="form">
                <div className="card-body">
                  <div className="row">
                    <label className="col-xl-3"></label>
                    <div className="col-lg-9 col-xl-6">
                      <h5 className="font-weight-bold mb-6">Worker Info</h5>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      Can Add
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div className="col-9 col-form-label">
                        <div className="radio-inline">
                          <label className="radio radio-success">
                            <Field type="radio" name="canAdd" value={"true"} />
                            <span></span>Yes
                          </label>
                          <label className="radio radio-success">
                            <Field type="radio" name="canAdd" value={"false"} />
                            <span></span>No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      Can Update
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div className="col-9 col-form-label">
                        <div className="radio-inline">
                          <label className="radio radio-success">
                            <Field
                              type="radio"
                              name="canUpdate"
                              value={"true"}
                            />
                            <span></span>Yes
                          </label>
                          <label className="radio radio-success">
                            <Field
                              type="radio"
                              name="canUpdate"
                              value={"false"}
                            />
                            <span></span>No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label">
                      Can Delete
                    </label>
                    <div className="col-lg-9 col-xl-6">
                      <div className="col-9 col-form-label">
                        <div className="radio-inline">
                          <label className="radio radio-success">
                            <Field
                              value={"true"}
                              type="radio"
                              name="canDelete"
                            />
                            <span></span>Yes
                          </label>
                          <label className="radio radio-success">
                            <Field
                              value={"false"}
                              type="radio"
                              name="canDelete"
                            />
                            <span></span>No
                          </label>
                        </div>
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
        </div>
      </div>
    );
  }
}

export default UpdateWorker;
