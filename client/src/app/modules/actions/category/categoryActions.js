import * as types from "./categoryTypes";
import request from "../../utils/api-utils";
import {
  GET_ALL_CATEGORY,
  GET_ALL_SUBCATEGORY,
  GET_ALL_PRODUCT_SUBCATEGORY_CATEGORY,
  GET_ALL_PRODUCT_BY_PRICE,
} from "./categoryTypes";
import axios from "axios";
import { toast } from "react-toastify";
import DetectLang from "../../utils/HEADERS";

export const get_all_category = (category) => {
  return {
    type: GET_ALL_CATEGORY,
    payload: category,
  };
};

export const getAllCategory = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/categories`)
      .then((response) => {
        dispatch(get_all_category(response.data));
      })
      .catch((err) => {
        alert("Error", err);
      });
  };
};

export const getAllSubCategoryByCategory = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/subcategories/category/${id}`,
      {
        headers: {
          "x-auth-token": localStorage.getItem("authToken"),
        },
      }
    );
    dispatch({
      type: GET_ALL_SUBCATEGORY,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
//Get Product By Sub Category Or Category Id
export const getAllProductBySubCategoryByCategory = (id) => async (
  dispatch
) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/products/filterHavingCategoryIdOrSubCategoryId/${id}`
    );
    dispatch({
      type: GET_ALL_PRODUCT_SUBCATEGORY_CATEGORY,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

//Get Product By Price
export const getAllProductByFilterPrice = (from, to) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/products/filterByPrice/${from}/${to}`
    );
    dispatch({
      type: GET_ALL_PRODUCT_BY_PRICE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

const FetchRequest = () => {
  return {
    type: types.REQUEST,
  };
};

const FetchAll = (categories) => {
  return {
    type: types.GET_ALL_CATEGORY,
    payload: categories,
  };
};

const FetchError = (error) => {
  return {
    type: types.ERROR,
    payload: error,
  };
};

export const FetchCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const categories = await request.get("/categories");
      dispatch(FetchAll(categories.data));
    } catch (error) {
      dispatch(FetchError(error.message));
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
      const catId = await request.get(`/categories/${id}`);
      dispatch(FetchById(catId.data));
    } catch (error) {
      dispatch(FetchError(error.message));
    }
  };
};

export const updateById = (data) => {
  return {
    type: types.UPDATE_CATEGORY,
    payload: data,
  };
};

export const hookUpdateById = (data) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const { id, ...rest } = data;
      const formData = new FormData();
      formData.append("title_en", rest.title_en);
      formData.append("title_ar", rest.title_ar);
      formData.append("image", rest.image);
      formData.append("showInHomepage", rest.showInHomepage);
      formData.append("showInMenu", rest.showInMenu);
      const updateCategory = await request.put(
        `/categories/${id}`,
        rest.image instanceof File ? formData : rest
      );
      dispatch(updateById(updateCategory.data.data));
      toast.success(DetectLang ? "تم تحديث البيانات" : "Updated Successfully");
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.success(DetectLang ? "خطا اثناء ارسال البيانات" : "Error invalid");
    }
  };
};
