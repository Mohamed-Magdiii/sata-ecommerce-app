import * as types from "../app/modules/actions/subcategory/subcategoryType";

const initialState = {
  loading: false,
  subCategories: [],
  subCategory: {},
  error: "",
};

const subcategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        loading: true,
      };
    case types.FETCH_RELATED:
      return {
        subCategories: action.payload,
        loading: false,
        error: "",
      };
    case types.ADD_NEW:
      return {
        ...state,
        subCategories: [state.subCategories, action.payload],
      };
    case types.FETCH_BY_ID:
      return {
        ...state,
        subCategory: action.payload,
        loading: false,
      };
    case types.UPDATE_BY_ID:
      return {
        ...state,
        loading: false,
        subCategory: action.payload,
      };
    case types.FETCH_ERROR:
      return {
        error: action.payload,
        subCategories: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default subcategoryReducer;
