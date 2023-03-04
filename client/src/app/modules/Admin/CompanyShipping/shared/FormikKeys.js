import * as Yup from "yup";
export const initialValues = {
  name: "",
  email: "",
  address: "",
  telephone: "",
  mobile: "",
  status: "",
  logo: "",
};

export const validationSchema = Yup.object({
  name: Yup.string().required(" Required !"),
  email: Yup.string()
    .email("Invalid Email Format !")
    .required("Required !"),
  address: Yup.string().required("Required !"),
  telephone: Yup.string().required("Required !"),
  mobile: Yup.string().required("Required !"),
  status: Yup.string().required("Required !"),
  logo: Yup.string().required("Required !"),
});
