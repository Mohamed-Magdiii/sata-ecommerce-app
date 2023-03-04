import * as types from "../app/modules/actions/offers/offerTypes";

const initialState = {
  loading: false,
  offers: [],
  error: "",
};

const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ALL:
      return {
        ...state,
        loading: false,
        offers: action.payload,
        error: "",
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        offers: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default offerReducer;
