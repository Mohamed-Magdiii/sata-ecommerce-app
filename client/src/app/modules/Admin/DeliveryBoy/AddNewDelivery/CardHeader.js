import React from "react"; // , { useState }
import AddAccountComponent from "./AddAccountComponent";
import AddPasswordComponent from "./AddPasswordComponent";
import AddProfileComponent from "./AddProfileComponent";
import SettingsComponent from "./SettingsComponent";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useGetAllCompany, useAddNew } from "../shared/axiosFunctions";

const CardHeader = ({ selected }) => {
  const { data } = useGetAllCompany();
  const { mutate } = useAddNew();
  const initialValues = {
    fullname: "",
    telephone: "",
    mobile: "",
    email: "",
    image: "",
    licence_front: "",
    licence_back: "",
    licenceCar_front: "",
    licenceCar_back: "",
    drugAnalysis: "",
    role: "",
    password: "",
    vpassword: "",
    company: "",
  };
  const validationSchema = Yup.object({
    fullname: Yup.string().required("Fullname Required!"),
    telephone: Yup.string().required("Telephone Required!"),
    mobile: Yup.string().required("Mobile Required!"),
    email: Yup.string()
      .required("Email Required!")
      .email("Wrong email format"),
    image: Yup.string().required("Image Required!"),
    licence_front: Yup.string().required("This Field is Required!"),
    licence_back: Yup.string().required("This Field is Required!"),
    licenceCar_front: Yup.string().required("This Field is Required!"),
    licenceCar_back: Yup.string().required("This Field is Required!"),
    drugAnalysis: Yup.string().required("This Field is Required!"),
    role: Yup.string().required("Role is Required!"),
    password: Yup.string()
      .required("Password is Required!")
      .min(8, "Minimum 8 characters"),
    vpassword: Yup.string()
      .required("Verify Password !")
      .oneOf(
        [Yup.ref("password"), null],
        "These Two Fields must be equal to each other "
      ),
    company: Yup.string().required("Required!"),
  });
  const onSubmit = (values, onSubmitProps) => {
    mutate(values);
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
                {data && (
                  <AddAccountComponent
                    companies={data?.data}
                    formik={formik}
                    isActive={selected === "Account"}
                  />
                )}
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
                    Save changes
                  </button>
                  <button
                    className="btn btn-clean font-weight-bold"
                    type={`reset`}
                  >
                    Cancel
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
