import { UPDATE_SETTING, GET_SETTING } from "./types";
import axios from "axios";
import { toast } from "react-toastify";
export const updateSettings = (formData ,history) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/settings/620106ef88fd77ca609becce`,
      formData,
      { headers: { "x-auth-token": localStorage.getItem("authToken") } }
    );
    dispatch({
      type: UPDATE_SETTING,
      payload: res.data,
    });
    console.log(res.data);
    toast.success("Settings Updated Successfully !" , {autoClose:2000})
    // setTimeout(()=>{history.go(0)},1000)
  } catch (error) {
    console.log(error);
  }
};
export const getSetting = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/settings/6200fb99e40eee582e830e1b`,
      { headers: { "x-auth-token": localStorage.getItem("authToken") } }
    );
    dispatch({
      type: GET_SETTING,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
