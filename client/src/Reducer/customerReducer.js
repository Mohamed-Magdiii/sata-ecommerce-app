import * as types from "../app/modules/actions/customers/customerTypes";
import {
  GET_ALL_CUSTOMERS,
  DELETE_USER_BY_ID,
  ADD_USER,
  GET_ME_USER,
  UPDATE_ME_USER,
} from "../app/modules/actions/customers/customerTypes";
const initialState = {
  loading: false,
  users: [],
  user: null,
  error: "",
  isAuthenticated:null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        loading: true,
      };
    case types.FETCH_ALL:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    case GET_ALL_CUSTOMERS:
      return {
        ...state,
        users: action.payload,
      };
    case DELETE_USER_BY_ID:
      return {
        ...state,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case GET_ME_USER:
    case UPDATE_ME_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
