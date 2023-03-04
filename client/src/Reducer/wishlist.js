import {
  ADD_WISHLIST,
  GET_WISHLIST,
  REMOVE_WISHLIST,
} from "../app/modules/actions/wishlist/types";

const initialState = {
  wishlists: null,
  wishlist: null,
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_WISHLIST:
      return {
        ...state,
        wishlists: payload,
      };
    case ADD_WISHLIST:
      return {
        ...state,
        wishlists: [...state.wishlists , payload],
      };
    case REMOVE_WISHLIST:
      return {
        ...state,
        wishlists: state.wishlists.filter((wish) => wish._id !== payload),
      };
    default:
      return state;
  }
}
