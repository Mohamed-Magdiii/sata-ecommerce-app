import * as types from "../app/modules/actions/orders/orderTypes";

const initialState = {
  loading: false,
  orders: [],
  error: "",
  order: {},
  items: [],
  item: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        loading: true,
      };
    case types.FETCH_ALL:
      return {
        ...state,
        loading: false,
        orders: action.payload,
        error: "",
      };
    case types.FETCH_ORDER:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };

    case types.UPDATE_ORDER:
      return {
        ...state,
        order: action.payload,
        loading: false,
        error: "",
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        orders: [],
        error: action.payload,
      };
    case types.GET_ORDER_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
