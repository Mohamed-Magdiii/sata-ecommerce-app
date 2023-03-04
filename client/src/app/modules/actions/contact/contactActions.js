import { toast } from "react-toastify";
import request from "../../utils/api-utils";
import DispLang from "../../utils/HEADERS";
import * as types from "./contactTypes";

export const FetchRequest = () => {
  return {
    type: types.FETCH_REQUEST,
  };
};

export const FetchError = (error) => {
  return {
    type: types.FETCH_ERROR,
    payload: error,
  };
};

export const FetchAll = (data) => {
  return {
    type: types.FETCH_ALL,
    payload: data,
  };
};

export const hookFetchAll = () => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const allContacts = await request.get("/contact");
      dispatch(FetchAll(allContacts.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(
        DispLang ? "خطأ اثناء ارسال البيانات" : "Error Getting Informations"
      );
    }
  };
};

export const FetchById = (data) => {
  return {
    type: types.FETCH_BY_ID,
    payload: data,
  };
};

export const hookFetchById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const contId = await request.get(`/contact/${id}`);
      dispatch(FetchById(contId.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(
        DispLang ? "خطأ اثناء ارسال البيانات" : "Error Getting Informations"
      );
    }
  };
};

export const updateById = (data) => {
  return {
    type: types.UPDATE_BY_ID,
    payload: data,
  };
};

export const hookUpdateById = (values) => {
  return async (dispatch) => {
    try {
      const { id, ...data } = values;
      const updCont = await request.put(`/contact/${id}`, data);
      dispatch(updateById(updCont.data.data));
      toast.success(DispLang ? "تم التعديل بنجاح" : "Updated Successfully");
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(
        DispLang ? "خطأ اثناء ارسال البيانات" : "Error Getting Informations"
      );
    }
  };
};

export const deleteById = (id) => {
  return {
    type: types.DELETE_BY_ID,
    payload: id,
  };
};

export const hookDeleteById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const delCont = await request.delete(`/contact/${id}`);
      dispatch(deleteById(id, delCont));
      toast.success(DispLang ? "تم المسح بنجاح" : "Deleted Successfully");
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(
        DispLang ? "خطأ اثناء ارسال البيانات" : "Error Deleting Informations"
      );
    }
  };
};
