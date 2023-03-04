import request from "../../utils/api-utils";
import * as types from "./productTypes";
import Axios from "axios";
import { toast } from "react-toastify";
// merged
import {
  GET_PRODUCTS,
  PRODUCTS_ERROR,
  DELETE_PRODUCTS,
  GET_CATEGORIES,
  CATEGORIES_ERROR,
  ADD_PRODUCTS,
  UPDATE_PRODUCTS,
  GET_PRODUCT,
  SEARCH_PRODUCT,
  GET_PRODUCT_CART,
  ADD_UPDATE_PRODUCT_CART,
  DELETE_FROM_CART,
  GET_SEARCH_PRODUCTS_CAT,
  ADD_NEW_ORDER,
  GET_RATES,
  SEARCH_RATE,
  DELETE_RATE,
  GET_HOME,
  GET_RATES_PRODUCT,
  DELETE_CART,
  ADD_RATE,
} from "./productTypes";

const FetchRequest = () => {
  return {
    type: types.FETCH_REQUEST,
  };
};

const FetchAll = (products) => {
  return {
    type: types.FETCH_ALL,
    payload: products,
  };
};

const FetchError = (error) => {
  return {
    type: types.FETCH_ERROR,
    payload: error,
  };
};

export const FetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const products = await request("/products");
      dispatch(FetchAll(products.data));
    } catch (error) {
      dispatch(FetchError(error.message));
    }
  };
};

export const FetchVendorProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const products = await request("/products/vendorProducts");
      dispatch(FetchAll(products.data));
    } catch (error) {
      dispatch(FetchError(error.message));
    }
  };
};

// merged

export const getProducts = () => async (dispatch) => {
  try {
    const res = await Axios.get(
      `${process.env.REACT_APP_API_URL}/api/products`
    );
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
    });
  }
};

//Delete product
export const deleteProduct = (id) => async (dispatch) => {
  if (window.confirm("Are You Sure You Want To Delete Product")) {
    try {
      await Axios.delete(
        `${process.env.REACT_APP_API_URL}/api/products/${id}`,
        { headers: { "x-auth-token": localStorage.getItem("token") } }
      );
      dispatch({
        type: DELETE_PRODUCTS,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: PRODUCTS_ERROR,
      });
    }
  }
};

//Add Product
export const addProduct = (formData) => async (dispatch) => {
  try {
    const res = await Axios.post(
      `${process.env.REACT_APP_API_URL}/api/products`,
      formData,
      {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
    );
    dispatch({
      type: ADD_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
    });
  }
};

//GET Category
export const getCategory = () => async (dispatch) => {
  try {
    const res = await Axios.get(
      `${process.env.REACT_APP_API_URL}/api/categories`
    );

    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIES_ERROR,
    });
  }
};
//Get product By Id
export const getProductByID = (id) => async (dispatch) => {
  try {
    const res = await Axios.get(
      `${process.env.REACT_APP_API_URL}/api/products/${id}`,
      { headers: { "x-auth-token": localStorage.getItem("token") } }
    );
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
    });
  }
};

//update Product
export const updateProduct = (formData, id) => async (dispatch) => {
  try {
    const res = await Axios.put(
      `${process.env.REACT_APP_API_URL}/api/products/${id}`,
      formData,
      {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
    );
    console.log(res.data);
    dispatch({
      type: UPDATE_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCTS_ERROR,
    });
  }
};

//Get Products Using Query
export const getProductsUsingQuery = (query) => async (dispatch) => {
  try {
    const res = await Axios.get(
      `${process.env.REACT_APP_API_URL}/api/products/findBy/:${query}`,
      { headers: { "x-auth-token": localStorage.getItem("token") } }
    );
    dispatch({
      type: SEARCH_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//Get Products From Cart
export const getProductsFromCart = (query) => async (dispatch) => {
  try {
    const res = await Axios.get(`${process.env.REACT_APP_API_URL}/api/cart`, {
      headers: { "x-auth-token": localStorage.getItem("token") },
    });
    dispatch({
      type: GET_PRODUCT_CART,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//Add Or Update Cart
export const addUpdateCart = (productId, quantity, size, color) => async (
  dispatch
) => {
  try {
    const res = await Axios.post(
      `${process.env.REACT_APP_API_URL}/api/cart`,
      { productId, quantity, size, color },
      { headers: { "x-auth-token": localStorage.getItem("token") } }
    );
    dispatch({
      type: ADD_UPDATE_PRODUCT_CART,
      payload: { productId, quantity, res: res.data },
    });
    toast.success("Added/Updated successfully", { autoClose: 1000 });
  } catch (error) {
    console.log(error);
    toast.error("Not Added", { autoClose: 3000 });
  }
};

//Delete product from cart
export const deleteProductFromCart = (id) => async (dispatch) => {
  if (window.confirm("Are You Sure You Want To Delete Product")) {
    try {
      await Axios.delete(`${process.env.REACT_APP_API_URL}/api/cart/${id}`, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      });
      dispatch({
        type: DELETE_FROM_CART,
        payload: id,
      });
      toast.success("Deleted");
    } catch (error) {
      console.log(error);
    }
  }
};
//Delete ALL cart
export const deleteAllCart = () => async (dispatch) => {
  await Axios.delete(`${process.env.REACT_APP_API_URL}/api/cart/deleteCart`, {
    headers: { "x-auth-token": localStorage.getItem("token") },
  });
  dispatch({
    type: DELETE_CART,
  });
};

//Search Home
export const searchByProductOrCategory = (query) => async (dispatch) => {
  try {
    const res = await Axios.get(
      `${process.env.REACT_APP_API_URL}/api/homePage/search/home?${query}`,
      { headers: { "x-auth-token": localStorage.getItem("token") } }
    );
    dispatch({
      type: GET_SEARCH_PRODUCTS_CAT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//Add Order
export const addNewOrder = (formData) => async (dispatch) => {
  try {
    const res = await Axios.post(
      `${process.env.REACT_APP_API_URL}/api/orders`,
      formData,
      { headers: { "x-auth-token": localStorage.getItem("token") } }
    );
    console.log(res);
    dispatch({
      type: ADD_NEW_ORDER,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
//Get Rates
export const getRates = () => async (dispatch) => {
  try {
    const res = await Axios.get(`${process.env.REACT_APP_API_URL}/api/rates`, {
      headers: { "x-auth-token": localStorage.getItem("token") },
    });
    dispatch({
      type: GET_RATES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
//Add Rates
export const addNewRate = (formData) => async (dispatch) => {
  try {
    const res = await Axios.post(
      `${process.env.REACT_APP_API_URL}/api/rates`,
      formData,
      {
        headers: { "x-auth-token": localStorage.getItem("token") },
      }
    );
    dispatch({
      type: ADD_RATE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
//Get Rates By Product
export const getRatesByProduct = (id) => async (dispatch) => {
  try {
    const res = await Axios.get(
      `${process.env.REACT_APP_API_URL}/api/rates/findRatesByProduct/${id}`,
      {
        headers: { "x-auth-token": localStorage.getItem("token") },
      }
    );
    dispatch({
      type: GET_RATES_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
//Update isApproved in Rates

export const updateApproval = (isApproved, id) => async (dispatch) => {
  try {
    await Axios.put(
      `${process.env.REACT_APP_API_URL}/api/rates/${id}`,
      { isApproved },
      { headers: { "x-auth-token": localStorage.getItem("authToken") } }
    );
  } catch (error) {
    console.log(error);
  }
};

//Get Rate Using Query
export const getRatesUsingQuery = (query) => async (dispatch) => {
  try {
    const res = await Axios.get(
      `${process.env.REACT_APP_API_URL}/api/rates/filterBy/${query}`,
      { headers: { "x-auth-token": localStorage.getItem("token") } }
    );
    dispatch({
      type: SEARCH_RATE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//Delete Rate
export const deleteRate = (id) => async (dispatch) => {
  if (window.confirm("Are You Sure You Want To Delete Rate")) {
    try {
      await Axios.delete(`${process.env.REACT_APP_API_URL}/api/rates/${id}`, {
        headers: { "x-auth-token": localStorage.getItem("token") },
      });
      dispatch({
        type: DELETE_RATE,
        payload: id,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
};

//Get HomePage Site
export const getHome = () => async (dispatch) => {
  try {
    const res = await Axios.get(
      `${process.env.REACT_APP_API_URL}/api/homePage`
    );
    dispatch({
      type: GET_HOME,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
