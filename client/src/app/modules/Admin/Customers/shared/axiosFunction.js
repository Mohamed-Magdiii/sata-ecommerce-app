import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { request } from "../../../utils/axios-utils";
export const GET_ALL_USERS = `${process.env.REACT_APP_API_URL}/api/users`;
export const AUTH_URL = `${process.env.REACT_APP_API_URL}/api/auth`;
export const GET_ONLINE_USERS = `${GET_ALL_USERS}/online`;
export const GET_BLOCKED_USERS = `${GET_ALL_USERS}/blocked`;

export const getAllCustomers = async () => {
  return await request({ url: "/users" });
};

export const getAllOnlineUsers = async ({ queryKey }) => {
  return await request({ url: `/users/online/${queryKey[1]}` });
};

export const getAllBlockedUsers = async ({ queryKey }) => {
  return await request({ url: `/users/blocked/${queryKey[1]}` });
};

export const fetchCustomer = async ({ queryKey }) => {
  return await request({ url: `/users/getUserById/${queryKey[1]}` });
};

export const useFetchAllCustomers = () => {
  return useQuery("get-all-customers", getAllCustomers);
};

export const useFetchCustomerById = (id) => {
  const queryClient = useQueryClient();
  return useQuery(["get-customer-by-id", id], fetchCustomer, {
    initialData: () => {
      const customer = queryClient
        .getQueryData("get-all-customers")
        ?.data?.find((c) => c._id === id);
      if (customer) {
        return {
          data: customer,
        };
      } else {
        return undefined;
      }
    },
  });
};

const updateUserById = async (updatedData) => {
  if (updatedData.data.currentpassword) {
    return await request({
      url: `/users/password/${updatedData.id}`,
      method: "put",
      data: updatedData.data,
    });
  } else if (updatedData.data.email) {
    const { image, fullname, mobile, telephone, email } = updatedData.data;
    const formData = new FormData();
    formData.append("image", image);
    formData.append("fullname", fullname);
    formData.append("mobile", mobile);
    formData.append("telephone", telephone);
    formData.append("email", email);
    return await request({
      url: `/users/${updatedData.id}`,
      method: "put",
      data: formData,
    });
  } else {
    return await request({
      url: `/users/${updatedData.id}`,
      method: "put",
      data: updatedData.data,
    });
  }
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(updateUserById, {
    onSuccess: () => {
      toast.success("Data has been Updated ", {
        autoClose: 2000,
      });
      queryClient.invalidateQueries("get-all-customers");
    },
    onError: () => {
      toast.error("Error while Updaing your data", {
        autoClose: 2000,
      });
    },
  });
};

const getNewUsers = async ({ queryKey }) => {
  return await request({
    url: `/users/new-users/${queryKey[1]}/${queryKey[2]}`,
  });
};

export const useGetNewUsers = (number, role) => {
  return useQuery(["get-new-users", number, role], getNewUsers);
};

export const useGetAllBlockesUsers = (role) => {
  return useQuery(["get-all-blocked-users", role], getAllBlockedUsers);
};

const addNewOne = async (data) => {
  const {
    fullname,
    mobile,
    telephone,
    email,
    image,
    password,
    company,
    drugAnalysis,
    role,
    licence_front,
    licence_back,
    licenceCar_front,
    licenceCar_back,
  } = data;
  const formData = new FormData();
  formData.append("fullname", fullname);
  formData.append("mobile", mobile);
  formData.append("telephone", telephone);
  formData.append("email", email);
  formData.append("image", image);
  formData.append("password", password);
  formData.append("company", company);
  formData.append("drugAnalysis", drugAnalysis);
  formData.append("role", role);
  formData.append("licence_front", licence_front);
  formData.append("licence_back", licence_back);
  formData.append("licenceCar_front", licenceCar_front);
  formData.append("licenceCar_back", licenceCar_back);
  formData.append("isAddedByAdmin", true);
  return await request({
    url: "/auth/register",
    method: "post",
    data: formData,
  });
};

export const useAddNewUser = () => {
  const queryClient = useQueryClient();
  return useMutation(addNewOne, {
    onSuccess: () => {
      toast.success("New Delivery has been Added");
      queryClient.invalidateQueries("get-all-customers");
    },
    onError: () => toast.error("Error invalid !!"),
  });
};

const getMostOrderd = async ({ queryKey }) => {
  return await request({ url: `/users/most-orderd/${queryKey[1]}` });
};

export const useGetMostOrderd = (number) => {
  return useQuery(["get-most-orderd", number], getMostOrderd);
};

const getNotSignedIn = async ({ queryKey }) => {
  return await request({
    url: `/users/not-signed-in/${queryKey[1]}/${queryKey[2]}`,
  });
};

export const useGetNotSignedIn = (days, role) => {
  return useQuery(["not-signed-in", days, role], getNotSignedIn);
};

const getAllVendors = async () => {
  return await request({ url: "/vendors" });
};

export const useGetAllVendors = () => {
  return useQuery("get-all-vendors", getAllVendors);
};

const addNewVendor = async (data) => {
  const { vpassword, ...rest } = data;
  const formData = new FormData();
  formData.append("fullname", rest.fullname);
  formData.append("telephone", rest.telephone);
  formData.append("mobile", rest.mobile);
  formData.append("email", rest.email);
  formData.append("password", rest.password);
  formData.append("image", rest.image);
  formData.append("role", rest.role);
  if (rest.role === "vendor") {
    formData.append("commercialRecord", rest.commercialRecord);
    formData.append("app_balance_amount", rest.app_balance_amount);
    formData.append("app_balance_type", rest.app_balance_type);
    formData.append("taxcard_front", rest.taxcard_front);
    formData.append("taxcard_back", rest.taxcard_back);
    formData.append("isAddedByAdmin", true);
  } else if (rest.role === "worker") {
    formData.append("canAdd", rest.canAdd);
    formData.append("canUpdate", rest.canUpdate);
    formData.append("canDelete", rest.canDelete);
    formData.append("vendor", rest.id);
  }
  return await request({
    url: `/auth/register`,
    method: "post",
    data: formData,
  });
};

export const useAddNewVendor = () => {
  return useMutation(addNewVendor, {
    onSuccess: () => toast.success("User Added Successfully !"),
    onError: () => toast.error("Error Invalid !"),
  });
};

const getAllOrderHavingCustomerId = async ({ queryKey }) => {
  return await request({ url: `/orders/findBy/${queryKey[1]}` });
};

export const useGetAllOrdersHavingCustomerId = (id) => {
  return useQuery(
    ["get-orders-having-customer-id", id],
    getAllOrderHavingCustomerId
  );
};

const getAllWorkers = async ({ queryKey }) => {
  return await request({ url: `/users/findByRole/${queryKey[1]}` });
};

export const useGetAllWorkers = (role) => {
  return useQuery(["get-all-workers-by-vendor", role], getAllWorkers);
};

const getWorkerById = ({ queryKey }) => {
  return request({ url: `/worker/${queryKey[1]}` });
};

export const useGetWorkerById = (id) => {
  return useQuery(["get-worker-by-id", id], getWorkerById);
};

const updateWorkerByVendor = async (updatedData) => {
  const { id, ...data } = updatedData;
  return await request({ url: `/worker/${id}`, method: "put", data });
};

export const useUpdateWorkerByVendor = () => {
  return useMutation(updateWorkerByVendor, {
    onSuccess: () => toast.success("Updated Successfully !"),
    onError: () => toast.error("Error while updating !"),
  });
};
