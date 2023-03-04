import { useMutation, useQuery } from "react-query";
import { request } from "../../../utils/axios-utils";
import { toast } from "react-toastify";

export const getOrdersData = async () => {
  return await request({ url: "/orders" });
};

export const useGetAllOrders = () => {
  return useQuery("get-orders-data", getOrdersData);
};

const getOrderItemByOrder = async ({ queryKey }) => {
  return await request({ url: `/order-item/order/${queryKey[1]}` });
};

export const useGetOrderITemsByOrder = (id) => {
  return useQuery(["get-order-item-by-order", id], getOrderItemByOrder);
};

const getOrderItemByID = async ({ queryKey }) => {
  return await request({ url: `/order-item/${queryKey[1]}` });
};

export const useGetOrderITemById = (id) => {
  return useQuery(["get-order-item-by-id", id], getOrderItemByID);
};

const findByRole = async ({ queryKey }) => {
  return queryKey[1] === "admin"
    ? await request({ url: `/users/findByRole/${queryKey[2]}` })
    : queryKey[1] === "vendor"
    ? await request({ url: `/users/findByRole/delivery` })
    : undefined;
};

export const useFindByRole = (owner, role) => {
  return useQuery(["find-by-role", owner, role], findByRole);
};

const updateOrderItem = async (updatedData) => {
  const { id, ...data } = updatedData;
  return await request({ url: `/order-item/${id}`, method: "put", data });
};

export const useUpdateOrderItem = () => {
  return useMutation(updateOrderItem, {
    onSuccess: () => toast.success("Updated Successfully !"),
    onError: () => toast.error("Error while updating"),
  });
};
