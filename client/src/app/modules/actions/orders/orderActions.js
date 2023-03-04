import * as types from "./orderTypes";
import request from "../../utils/api-utils";
import axios from "axios";
import { GET_ORDER_ITEMS } from "../../actions/orders/orderTypes";
import { toast } from "react-toastify";
import DetectLang from "../../utils/HEADERS";

const FetchRequest = () => {
  return {
    type: types.FETCH_REQUEST,
  };
};

const FetchSuccess = (orders) => {
  return {
    type: types.FETCH_ALL,
    payload: orders,
  };
};

const FetchOrderSuccess = (order) => {
  return {
    type: types.FETCH_ORDER,
    payload: order,
  };
};

const FetchError = (error) => {
  return {
    type: types.FETCH_ERROR,
    payload: error,
  };
};

export const FetchOrders = () => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const orders = await request.get("/orders");
      dispatch(FetchSuccess(orders.data));
    } catch (error) {
      dispatch(FetchError(error.message));
    }
  };
};

export const FetchOrder = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const order = await request.get(`/orders/${id}`);
      dispatch(FetchOrderSuccess(order.data));
    } catch (error) {
      dispatch(FetchError());
    }
  };
};

export const updateOrder = (order) => {
  return {
    type: types.UPDATE_ORDER,
    payload: order,
  };
};

export const UpdateOrderById = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const order = await request.put(`/orders/${id}`, data);
      dispatch(updateOrder(order.data.data));
      toast.success(
        DetectLang ? "تم تعديل الطلب بنجاح" : "Order Updated Successfully"
      );
    } catch (error) {
      dispatch(FetchError());
      toast.error(
        DetectLang ? "حدث خطا اثناء التعديل" : "Error while updating"
      );
    }
  };
};

//GET ALLO rderItems
export const getOrderItems = () => async (dispatch) => {
  const config = {
    headers: { "x-auth-token": localStorage.getItem("token") },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/order-item/getOrderItems/me`,
      config
    );
    dispatch({
      type: GET_ORDER_ITEMS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
