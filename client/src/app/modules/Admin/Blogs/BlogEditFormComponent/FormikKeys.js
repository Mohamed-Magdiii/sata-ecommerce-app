import * as Yup from "yup";

export const initialValues = {
  image: "",
  title_en: "",
  title_ar: "",
  description_en:"",
  description_ar:"",
};

export const validationSchema = Yup.object({
  image: Yup.string().required("Image is Required !"),
  title_en: Yup.string().required("Title in English is Required !"),
  title_ar: Yup.string().required("Title in Arabic is Required !"),
  description_en:Yup.string().required("Description in Arabic is Required !"),
  description_ar:Yup.string().required("Description in Arabic is Required !"),
});
