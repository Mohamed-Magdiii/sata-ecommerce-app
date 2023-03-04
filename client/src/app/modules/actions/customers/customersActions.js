import * as types from "./customerTypes";
import request from "../../utils/api-utils";
import {
  GET_ALL_CUSTOMERS,
  UPDATE_ME_USER,
  DELETE_USER_BY_ID,
  GET_ME_USER,
  ADD_NEW_CUSTOMER,
  ADD_USER,
} from "./customerTypes";
import axios from "axios";
export const get_All_Customers = (customers) => {
  return {
    type: GET_ALL_CUSTOMERS,
    payload: customers,
  };
};

export const getAllCustomers = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/users`, {
        headers: {
          "x-auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((response) => {
        dispatch(get_All_Customers(response.data));
      })
      .catch(() => {
        alert("Error from Customer Actions");
      });
  };
};

export const delete_user_by_id = () => {
  return {
    type: DELETE_USER_BY_ID,
  };
};

export const deleteUserById = (id) => {
  return (dispatch) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/users/${id}`, {
        headers: {
          "x-auth-token": localStorage.getItem("authToken"),
        },
      })
      .then(() => {
        dispatch(delete_user_by_id());
        dispatch(getAllCustomers());
      })
      .catch(() => {});
  };
};

export const add_new_customer = () => {
  return {
    type: ADD_NEW_CUSTOMER,
  };
};

export const addCustomer = (fullname, email, password, phone, mobile, role) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
        fullname,
        email,
        password,
        phone,
        mobile,
        role,
      })
      .then(() => {
        dispatch(getAllCustomers());
      })
      .catch(() => {
        alert("Error While Posting ");
      });
  };
};

export const addNewUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/auth/register`,
      formData
    );
    console.log("Before Register");
    dispatch({
      type: ADD_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

//GET MY USER
export const getMeUser = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/users/me`,
      { headers: { "x-auth-token": localStorage.getItem("token") } }
    );
    dispatch({
      type: GET_ME_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

//GET MY USER Profile
export const updateMeUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/users/profile/me`,
      formData,
      { headers: { "x-auth-token": localStorage.getItem("token") } }
    );
    dispatch({
      type: UPDATE_ME_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
const FetchRequest = () => {
  return {
    type: types.FETCH_REQUEST,
  };
};

const FetchAll = (users) => {
  return {
    type: types.FETCH_ALL,
    payload: users,
  };
};

const FetchError = (error) => {
  return {
    type: types.FETCH_ERROR,
    payload: error,
  };
};

export const FetchCustomers = () => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const users = await request.get("/users");
      dispatch(FetchAll(users.data));
    } catch (error) {
      dispatch(FetchError(error.message));
    }
  };
};
