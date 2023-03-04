import * as Yup from "yup";

export const GeneralUser = {
  fullname: "",
  telephone: "",
  mobile: "",
  email: "",
  image: "",
  role: window.location.href.split("/")[
    window.location.href.split("/").length - 1
  ],
  password: "",
  vpassword: "",
};

export const VendorData = {
  app_balance_type: "",
  app_balance_amount: "",
  taxcard_front: "",
  taxcard_back: "",
  commercialRecord: "",
};

export const WorkerData = {
  canAdd: "false",
  canDelete: "false",
  canUpdate: "false",
};

export const ValidationGeneral = {
  image: Yup.string().required("Required !"),
  fullname: Yup.string().required("Fullname Required!"),
  telephone: Yup.string().required("Telephone Required!"),
  mobile: Yup.string().required("Mobile Required!"),
  email: Yup.string()
    .required("Email Required!")
    .email("Wrong email format"),
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
};

export const ValidationVendor = {
  app_balance_type: Yup.string().required("Balance type is Required !"),
  app_balance_amount: Yup.number().required("Balance amount is Required !"),
  image: Yup.string().required("Image Required!"),
  taxcard_front: Yup.string().required("This Field is Required!"),
  taxcard_back: Yup.string().required("This Field is Required!"),
  commercialRecord: Yup.string().required("This Field is Required!"),
};

export const ValidationWorker = {
  canAdd: Yup.string().required("Required !"),
  canDelete: Yup.string().required("Required !"),
  canUpdate: Yup.string().required("Required !"),
};
