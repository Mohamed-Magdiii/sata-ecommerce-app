import * as types from "./companyshippingTypes";
import DispLang from "../../utils/HEADERS";
import request from "../../utils/api-utils";
import { toast } from "react-toastify";

const FetchRequest = () => {
  return {
    type: types.FETCH_REQUEST,
  };
};

const FetchAll = (companyshipping) => {
  return {
    type: types.FETCH_ALL,
    payload: companyshipping,
  };
};

const FetchError = (error) => {
  return {
    type: types.FETCH_ERROR,
    payload: error,
  };
};

export const FetchCompanyShipping = () => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const companyshipping = await request.get("/shipping-company");
      dispatch(FetchAll(companyshipping.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
    }
  };
};

const fetchById = (data) => {
  return {
    type: types.FETCH_BY_ID,
    payload: data,
  };
};

export const hookFetchById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const companyData = await request.get(`/shipping-company/${id}`);
      dispatch(fetchById(companyData.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(
        DispLang ? "خطأ اثناء ارسال البيانات" : "Error from server !"
      );
    }
  };
};

const updateById = (data) => {
  return {
    type: types.UPDATE_BY_ID,
    payload: data,
  };
};

export const hookUpdateById = (values) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      console.log(values);
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("address", values.address);
      formData.append("telephone", values.telephone);
      formData.append("mobile", values.mobile);
      formData.append("status", values.status);
      formData.append("logo", values.logo);
      const updCompShip = await request.put(
        `/shipping-company/${values.id}`,
        formData
      );
      dispatch(updateById(updCompShip.data.data));
      toast.success(DispLang ? "تم التعديل بنجاح" : "Updated Successfully");
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(
        DispLang ? "خطأ اثناء ارسال البيانات" : "Error from server !"
      );
    }
  };
};
