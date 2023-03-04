import * as types from "../app/modules/actions/category/categoryTypes";
import {
  ADD_NEW_CATEGORY,
  DELETE_CATEGORY_BY_ID,
  GET_ALL_CATEGORY,
  GET_ALL_SUBCATEGORY,
} from "../app/modules/actions/category/categoryTypes";

const initialState = {
  loading: false,
  categories: [],
  subCategory: [],
  category: [],
  error: "",
  cat: {},
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ALL_CATEGORY:
      return {
        ...state,
        loading: false,
        categories: action.payload,
        error: "",
      };
    case types.FETCH_BY_ID:
      return {
        ...state,
        cat: action.payload,
        loading: false,
        error: "",
      };
    case types.UPDATE_CATEGORY:
      return {
        ...state,
        loading: false,
        error: "",
        cat: action.payload,
      };
    case types.ERROR:
      return {
        ...state,
        loading: false,
        categories: [],
        error: action.payload,
      };
    case GET_ALL_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case ADD_NEW_CATEGORY:
      return {
        ...state,
      };
    case DELETE_CATEGORY_BY_ID:
      return {
        ...state,
      };
    case GET_ALL_SUBCATEGORY:
      return {
        ...state,
        subCategory: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
