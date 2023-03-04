import * as types from "../app/modules/actions/companyshipping/companyshippingTypes";

const initialState = {
  loading: false,
  companyshipping: [],
  error: "",
  company: {},
};

const companyShippingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ALL:
      return {
        loading: false,
        companyshipping: action.payload,
        error: "",
      };
    case types.FETCH_BY_ID:
      return {
        ...state,
        loading: false,
        company: action.payload,
        error: "",
      };
    case types.UPDATE_BY_ID:
      let newComShip = state.companyshipping;
      const index = state.companyshipping.findIndex(
        (c) => c._id === action.payload._id
      );
      newComShip[index] = action.payload;
      return {
        ...state,
        companyshipping: newComShip,
        company: action.payload,
        loading: false,
        error: "",
      };
    case types.FETCH_ERROR:
      return {
        loading: false,
        companyshipping: [],
        company: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default companyShippingReducer;
