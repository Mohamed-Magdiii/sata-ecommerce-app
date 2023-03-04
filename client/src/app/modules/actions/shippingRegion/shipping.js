import {
  GET_SHIPPING,
  ADD_SHIPPING,
  DELETE_SHIPPING,
  SHIPPING_ERROR,
  GET_CITY_COUNTRYID,
  GET_REGIONS_CITYID,
  GET_SHIPPING_ID,
  UPDATE_SHIPPING
} from "./types";
import Axios from "axios";
import { toast } from "react-toastify";
//GET ALL Shipping
export const getShipping = () => async (dispatch) => {
  try {
    const res = await Axios.get(`${process.env.REACT_APP_API_URL}/api/region`);
    dispatch({
      type: GET_SHIPPING,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SHIPPING_ERROR,
    });
  }
};
//ADD NEW Shipping
export const addShipping = (formData) => async (dispatch) => {
  try {
    const res = await Axios.post(
      `${process.env.REACT_APP_API_URL}/api/region`,
      formData,
      { headers: { "x-auth-token": localStorage.getItem("authToken") } }
    );
    dispatch({
      type: ADD_SHIPPING,
      payload: res.data,
    });
    toast.success('Region Added Successfully' , {autoClose:2000})
  } catch (error) {
    console.log(error);
  }
};
//Update Shipping By ID
export const updateShipping = (id ,formData) => async (dispatch) => {
    try {
    const res =   await Axios.put(`${process.env.REACT_APP_API_URL}/api/region/${id}`,formData, {
        headers: { "x-auth-token": localStorage.getItem("authToken") },
      });
      dispatch({
        type: UPDATE_SHIPPING,
        payload: res.data,
      });
      toast.success('Region Update Successfully' , {autoClose:2000})
    } catch (error) {
      console.log(error);
    }
  
};

//Get Shipping By ID
export const getShippingById = (id ,formData) => async (dispatch) => {
  try {
   const res = await Axios.get(`${process.env.REACT_APP_API_URL}/api/region/${id}`, {
      headers: { "x-auth-token": localStorage.getItem("authToken") },
    });
    dispatch({
      type: GET_SHIPPING_ID,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }

};
//DELETE Shipping
export const deleteShipping = (id) => async (dispatch) => {
  if (window.confirm("Are You Sure You Want To Delete Region")) {
    try {
      await Axios.delete(`${process.env.REACT_APP_API_URL}/api/region/${id}`, {
        headers: { "x-auth-token": localStorage.getItem("authToken") },
      });
      dispatch({
        type: DELETE_SHIPPING,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  }
};

//GET ALL Cities BY Country ID
export const getCityByCountryId = (id) => async (dispatch) => {
  try {
    const res = await Axios.get(`${process.env.REACT_APP_API_URL}/api/region/getCityByCountryId/${id}`);
    dispatch({
      type: GET_CITY_COUNTRYID,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SHIPPING_ERROR,
    });
  }
};

//GET ALL Regions BY City ID
export const getRegionsByCityId = (id) => async (dispatch) => {
  try {
    const res = await Axios.get(`${process.env.REACT_APP_API_URL}/api/region/getRegionsByCityId/${id}`);
    dispatch({
      type: GET_REGIONS_CITYID,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SHIPPING_ERROR,
    });
  }
};
