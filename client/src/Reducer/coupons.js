import {
  GET_COUPONS,
  DELETE_COUPON,
  ADD_COUPONS,
  GET_EXPIRE_COUPONS,
} from "../app/modules/actions/coupons/types";

const initialState = {
  coupons: [],
  expire: null,
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_COUPONS:
      return {
        ...state,
        coupons: payload,
      };
    case DELETE_COUPON:
      return {
        ...state,
        coupons: state.coupons.filter((coupon) => coupon._id !== payload),
      };
    case ADD_COUPONS:
      return {
        ...state,
        coupons: [...state.coupons, payload],
      };
    case GET_EXPIRE_COUPONS:
      return {
        ...state,
        expire: payload,
      };
    default:
      return state;
  }
}
