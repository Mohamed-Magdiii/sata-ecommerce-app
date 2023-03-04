import * as types from "./brandTypes";
import request from "../../utils/api-utils";
import { toast } from "react-toastify";
import flag from "../../utils/HEADERS";

const FetchRequest = () => {
  return { type: types.FETCH_REQUEST };
};

const FetchAll = (brands) => {
  return {
    type: types.FETCH_ALL,
    payload: brands,
  };
};

const FetchError = (error) => {
  return {
    type: types.FETCH_ERROR,
    payload: error,
  };
};

export const FetchBrands = () => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const brands = await request.get("/brands");
      dispatch(FetchAll(brands.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(flag ? "خطا اثناء ارسال البيانات" : "Error while Adding !");
    }
  };
};

export const AddBrand = (data) => {
  const { image, title_en, title_ar, category } = data;
  const formData = new FormData();
  formData.append("image", image);
  formData.append("title_en", title_en);
  formData.append("title_ar", title_ar);
  formData.append("category", category);
  return async (dispatch) => {
    try {
      const newBrand = await request.post("/brands", formData);
      dispatch(FetchAll(newBrand.data));
      toast.success(
        flag
          ? "تم اضافه ماركه جديده بنجاح"
          : "New Brand has been Added Successfully"
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(flag ? "خطا اثناء ارسال البيانات" : "Error while Adding !");
    }
  };
};

const FetchById = (data) => {
  return {
    type: types.FETCH_BY_ID,
    payload: data,
  };
};

export const hookFetchById = (id) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const brand = await request.get(`/brands/${id}`);
      dispatch(FetchById(brand.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(flag ? "خطا اثناء ارسال البيانات" : "Error From Server !");
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
      const formData = new FormData();
      formData.append("title_en", values.title_en);
      formData.append("title_ar", values.title_ar);
      formData.append("image", values.image);
      formData.append("category", values.category);
      const brand = await request.put(`/brands/${values.id}`, formData);
      dispatch(updateById(brand.data.data));
      toast.success(flag ? "تم التعديل بنجاح" : "`Updated Successfully`");
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(flag ? "خطا اثناء ارسال البيانات" : "Error From Server !");
    }
  };
};
