import * as Yup from "yup";

export const initialValues = {
  image: "",
  title_en: "",
  title_ar: "",
  category: "",
};

export const validationSchema = Yup.object({
  image: Yup.string().required("Image is Required !"),
  title_en: Yup.string().required("Title in English is Required !"),
  title_ar: Yup.string().required("Title in Arabic is Required !"),
  category: Yup.string().required("Category is Required !"),
});
