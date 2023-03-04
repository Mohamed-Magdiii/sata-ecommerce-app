import {
  ADD_COUNTRY,
  COUNTRY_ERROR,
  GET_COUNTRY,
  DELETE_COUNTRY,
  UPDATE_COUNTRY,
  GET_COUNTRY_ID
} from "./types";
import Axios from "axios";
import { toast } from 'react-toastify'
//GET ALL COUNTRIES
export const getCountries = () => async (dispatch) => {
  try {
    const res = await Axios.get(`${process.env.REACT_APP_API_URL}/api/country`);
    dispatch({
      type: GET_COUNTRY,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: COUNTRY_ERROR,
    });
  }
};
//ADD NEW COUNTRIES
export const addCountries = (formData) => async (dispatch) => {
  try {
    const res = await Axios.post(
      `${process.env.REACT_APP_API_URL}/api/country`,
      formData,
      { headers: { "x-auth-token": localStorage.getItem("authToken") } }
    );
    dispatch({
      type: ADD_COUNTRY,
      payload: res.data,
    });
    toast.success("Country Added Successfully" , {autoClose:2000})
  } catch (error) {
    console.log(error);
  }
};
//DELETE Country
export const deleteCountry = (id) => async (dispatch) => {
  if (window.confirm("Are You Sure You Want To Delete Country")) {
    try {
      await Axios.delete(`${process.env.REACT_APP_API_URL}/api/country/${id}`, {
        headers: { "x-auth-token": localStorage.getItem("authToken") },
      });
      dispatch({
        type: DELETE_COUNTRY,
        payload: id,
      });
      toast.success("Country Deleted Successfully" , {autoClose:2000})

    } catch (error) {
      console.log(error);
    }
  }
};

//Update Country
export const updateCountry = (id , values) => async (dispatch) => {
    try {
    const res =  await Axios.put(`${process.env.REACT_APP_API_URL}/api/country/${id}`,values ,  {
        headers: { "x-auth-token": localStorage.getItem("authToken") },
      });
      dispatch({
        type: UPDATE_COUNTRY,
        payload: res.data,
      });
      toast.success("Country Updated Successfully" , {autoClose:2000})
    } catch (error) {
      console.log(error);
    }
  
};

//Get Country By Id
export const getCountryId = (id) => async (dispatch) => {
    try {
    const res =  await Axios.get(`${process.env.REACT_APP_API_URL}/api/country/${id}`, {
        headers: { "x-auth-token": localStorage.getItem("authToken") },
      });
      dispatch({
        type: GET_COUNTRY_ID,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
};