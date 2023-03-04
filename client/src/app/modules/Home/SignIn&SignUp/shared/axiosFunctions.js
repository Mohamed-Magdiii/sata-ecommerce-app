import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { request } from "../../../utils/axios-utils";

const addNewUser = async (newData) => {
  const {
    fullname,
    email,
    password,
    role,
    telephone,
    mobile,
    image,
    commercialRecord,
    taxcard_back,
    taxcard_front,
  } = newData;
  const formData = new FormData();
  formData.append("fullname", fullname);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("role", role);
  formData.append("telephone", telephone);
  formData.append("mobile", mobile);
  formData.append("image", image);
  if (role === "vendor") {
    formData.append("taxcard_front", taxcard_front);
    formData.append("taxcard_back", taxcard_back);
    formData.append("commercialRecord", commercialRecord);
  }
  return await request({
    url: "/auth/register",
    method: "post",
    data: formData,
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation(addNewUser, {
    onSuccess: () => {
      toast.success("Success Registeration");
      queryClient.invalidateQueries("get-all-customers");
    },
  });
};

const login = async (newData) => {
  return await request({ url: "/auth/login", method: "post", data: newData });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation(login, {
    onSuccess: (response) => {
      if (response.data.token) {
        toast.success("Success Login");
        localStorage.setItem("authToken", response.data.token);
        queryClient.invalidateQueries("get-all-customers");
      } else {
        toast.error("Data is not valid !");
      }
    },
    onError: () => {
      toast.error("Data is not valid !");
    },
  });
};
