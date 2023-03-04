import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "../../../utils/axios-utils";
import { toast } from "react-toastify";

const getAllDeliveryBoys = async () => {
  return await request({ url: "/delivery" });
};

export const useGetAllDelivery = () => {
  return useQuery("get-all-delivery-boys", getAllDeliveryBoys);
};

const getAllCompany = async () => {
  return await request({ url: "/shipping-company" });
};

export const useGetAllCompany = () => {
  return useQuery("get-all-companies-shipping", getAllCompany);
};

const orderItemsByDelivery = ({ queryKey }) => {
  return request({
    url: `/order-item/OrderItemHavingDeliveryId/${queryKey[1]}`,
  });
};

export const useGetAllOrderItems = (id) => {
  return useQuery(
    ["get-order-items-assigned-by-delivery", id],
    orderItemsByDelivery
  );
};

const addNew = async (data) => {
  const { vpassword, ...rest } = data;
  const formData = new FormData();
  formData.append("fullname", rest.fullname);
  formData.append("email", rest.email);
  formData.append("password", rest.password);
  formData.append("telephone", rest.telephone);
  formData.append("mobile", rest.mobile);
  formData.append("image", rest.image);
  formData.append("licence_front", rest.licence_front);
  formData.append("licence_back", rest.licence_back);
  formData.append("licenceCar_front", rest.licenceCar_front);
  formData.append("licenceCar_back", rest.licenceCar_back);
  formData.append("drugAnalysis", rest.drugAnalysis);
  formData.append("role", rest.role);
  formData.append("company", rest.company);
  return await request({
    url: "/auth/register",
    method: "post",
    data: formData,
  });
};

export const useAddNew = () => {
  const queryClient = useQueryClient();
  return useMutation(addNew, {
    onSuccess: () => {
      toast.success("Successfully Added !");
      queryClient.invalidateQueries("get-all-delivery-boys");
    },
    onError: () => toast.error("Error while Adding !"),
  });
};
