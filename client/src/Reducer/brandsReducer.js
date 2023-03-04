import * as types from "../app/modules/actions/brands/brandTypes";

const initialState = {
  loading: false,
  brands: [],
  error: "",
  brand: {},
};

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ALL:
      return {
        loading: false,
        brands: action.payload,
        error: "",
      };
    case types.FETCH_BY_ID:
      return {
        ...state,
        brand: action.payload,
        loading: false,
        error: "",
      };
    case types.UPDATE_BY_ID:
      const newBrands = state.brands;
      const index = state.brands.findIndex((b) => b._id === action.payload._id);
      newBrands[index] = action.payload;
      return {
        ...state,
        brands: newBrands,
        brand: action.payload,
        loading: false,
        error: "",
      };
    case types.FETCH_ERROR:
      return {
        loading: false,
        error: action.payload,
        brands: [],
        brand: {},
      };
    default:
      return state;
  }
};

export default brandReducer;
