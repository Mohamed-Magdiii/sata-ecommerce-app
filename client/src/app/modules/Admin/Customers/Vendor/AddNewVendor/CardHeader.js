import React from "react";
import AddAccountComponent from "./AddAccountComponent";
import AddPasswordComponent from "./AddPasswordComponent";
import AddProfileComponent from "./AddProfileComponent";
import SettingsComponent from "./SettingsComponent";
import { useAddNewVendor } from "../../shared/axiosFunction";
import { Formik, Form } from "formik";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { UrlContext } from "./AddNewVendor";
import * as valid from "../../shared/FormikKeys";
import * as Yup from "yup";

const CardHeader = ({ selected }) => {
  const { user } = useSelector((state) => state.auth);
  const { mutate } = useAddNewVendor();
  const initialValues =
    user.roles[0] === 2 &&
    UrlContext._currentValue === "worker" &&
    Object.assign({}, valid.GeneralUser, valid.WorkerData, { id: user._id });
  const validationSchema = Yup.object(
    user.roles[0] === 2 &&
      UrlContext._currentValue === "worker" &&
      Object.assign({}, valid.ValidationGeneral, valid.ValidationWorker)
  );
  const onSubmit = (values, onSubmitProps) => {
    mutate(values);
    console.log(values);
    onSubmitProps.resetForm();
  };
  return (
    <div className="card-body">
      <Formik
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        {(formik) => {
          return (
            <Form className="form" id="kt_form">
              <div className="tab-content">
                <AddProfileComponent
                  formik={formik}
                  isActive={selected === "Profile"}
                />
                <AddAccountComponent
                  formik={formik}
                  isActive={selected === "Account"}
                />
                <AddPasswordComponent
                  formik={formik}
                  isActive={selected === "ChangePasword"}
                />
                <SettingsComponent
                  formik={formik}
                  isActive={selected === "Settings"}
                />
              </div>
              <div
                className="card-footer pb-0"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="col-3"></div>
                <div className="col-9">
                  <button
                    className="btn btn-light-primary font-weight-bold"
                    type={`submit`}
                  >
                    <FormattedMessage id="BUTTON.SAVECHANGES" />
                  </button>
                  <button
                    className="btn btn-clean font-weight-bold"
                    type={`reset`}
                  >
                    <FormattedMessage id="BUTTON.CANCEL" />
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CardHeader;
