import * as types from "../app/modules/actions/contact/contactTypes";

const initialState = {
  loading: false,
  contacts: [],
  contact: {},
  error: "",
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ALL:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
        error: "",
      };
    case types.FETCH_BY_ID:
      return {
        ...state,
        contact: action.payload,
        loading: false,
        error: "",
      };
    case types.UPDATE_BY_ID:
      const newCont = state.contacts;
      const index = state.contacts.findIndex(
        (c) => c._id === action.payload._id
      );
      newCont[index] = action.payload;
      return {
        ...state,
        contacts: newCont,
        loading: false,
        error: "",
      };
    case types.DELETE_BY_ID:
      const delCont = state.contacts.filter((c) => c._id !== action.payload);
      return {
        ...state,
        contacts: delCont,
        loading: false,
        contact: {},
        error: "",
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        contacts: [],
        contact: {},
      };
    default:
      return state;
  }
};

export default contactReducer;
