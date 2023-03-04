import request from "../../../utils/api-utils";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
const updatePassword = async (updatedData) => {
  const { cPassword, ...rest } = updatedData;
  const currentpassword = rest.currentPassword;
  const newpassword = rest.password;
  return request({
    url: `/users/password/${updatedData.id}`,
    method: "put",
    data: { currentpassword, newpassword },
  });
};

export const useUpdateUserData = () => {
  return useMutation(updatePassword, {
    onSuccess: () => toast.success("Succesfully Updated "),
    onError: (response) => toast.error(response.data.msg),
  });
};

const updateData = async (updatedData) => {
  const { image } = updatedData;
  if (image instanceof File) {
    // fullname, image , mobile, email, telephone
    const formData = new FormData();
    formData.append("fullname", updatedData.fullname);
    formData.append("image", image);
    formData.append("mobile", updatedData.mobile);
    formData.append("email", updatedData.email);
    formData.append("telephone", updatedData.telephone);
    return await request({
      url: `/users/${updatedData.id}`,
      method: "put",
      data: formData,
    });
  } else {
    const { id, ...data } = updatedData;
    return await request({
      url: `/users/${id}`,
      method: "put",
      data,
    });
  }
};

export const useUpdate = () => {
  return useMutation(updateData, {
    onSuccess: () => toast.success("Updated Successfully !"),
    onError: () => toast.error("Error invalid !"),
  });
};
