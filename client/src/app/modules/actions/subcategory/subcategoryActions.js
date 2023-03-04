import * as types from "./subcategoryType";
import { toast } from "react-toastify";
import request from "../../utils/api-utils";
import detectLanguage from "../../utils/HEADERS";

export const FetchRequest = () => {
  return {
    type: types.FETCH_REQUEST,
  };
};

export const FetchError = (error) => {
  return {
    type: types.FETCH_ERROR,
    payload: error.message,
  };
};

export const AddNew = (data) => {
  return {
    type: types.ADD_NEW,
    payload: data,
  };
};

export const hookAddNew = (data) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const newSubCategory = await request.post("/subcategories", data);
      dispatch(AddNew(newSubCategory.data));
      toast.success(
        detectLanguage
          ? "تمت اضافه قسم فرعى بنجاح"
          : "New Sub Category has been Added"
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(
        detectLanguage
          ? "حدث خطا اثناء ارسال البيانات"
          : "Error while sending data !"
      );
    }
  };
};

export const FetchById = (subcategory) => {
  return {
    type: types.FETCH_BY_ID,
    payload: subcategory,
  };
};

export const hookFetchById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const fetchSubCategory = await request.get(`/subcategories/${id}`);
      dispatch(FetchById(fetchSubCategory.data));
    } catch (error) {
      dispatch(FetchError(error.message));
    }
  };
};

export const FetchRelated = (data) => {
  return {
    type: types.FETCH_RELATED,
    payload: data,
  };
};

export const hookFetchRelated = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const res = await request.get(`/subcategories/category/${id}`);
      dispatch(FetchRelated(res.data));
    } catch (error) {
      dispatch(FetchError(error.message));
    }
  };
};

export const updateById = (newData) => {
  return {
    type: types.UPDATE_BY_ID,
    payload: newData,
  };
};

export const hookUpdateById = (data) => {
  return async (dispatch) => {
    try {
      const { id, ...rest } = data;
      dispatch(FetchRequest());
      const updateSubCategory = await request.put(`/subcategories/${id}`, rest);
      dispatch(updateById(updateSubCategory.data.data));
      toast.success(
        detectLanguage ? "تم تعديل البيانات بنجاح" : "Data Updated Successfully"
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.success(
        detectLanguage ? "حدث خطا اتناء التعديل" : "Error while updating"
      );
    }
  };
};
