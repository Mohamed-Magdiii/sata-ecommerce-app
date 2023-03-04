import * as Yup from "yup";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { request } from "../../../utils/axios-utils";
import DispLang from "../../../utils/HEADERS";

export const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const validationSchema = Yup.object({
  name: Yup.string().required("Required !"),
  email: Yup.string()
    .email("Wrong email Format !")
    .required("Required !"),
  subject: Yup.string().required("Required !"),
  message: Yup.string().required("Required !"),
});

export const sendContInfo = (data) => {
  return request({ url: "/contact", method: "POST", data });
};

export const useSendContact = () => {
  return useMutation(sendContInfo, {
    onSuccess: () =>
      toast.success(
        DispLang ? "تم ارسال البيانات بنجاح" : "Data has been Sent ",
        {
          autoClose: 2000,
        }
      ),
    onError: () =>
      toast.error(
        DispLang ? "خطأ اثناء ارسال البيانات" : "Error while Sending Data !",
        {
          autoClose: 2000,
        }
      ),
  });
};
