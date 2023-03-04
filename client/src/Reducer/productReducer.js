import * as types from "../app/modules/actions/products/productTypes";
import {
  GET_ALL_PRODUCT_SUBCATEGORY_CATEGORY,
  GET_ALL_PRODUCT_BY_PRICE,
} from "../app/modules/actions/category/categoryTypes";
import {
  DELETE_PRODUCTS,
  GET_PRODUCTS,
  SEARCH_PRODUCT,
  PRODUCTS_ERROR,
  ADD_PRODUCTS,
  UPDATE_PRODUCTS,
  GET_PRODUCT,
  GET_RATES,
  GET_CATEGORIES,
  GET_PRODUCT_CART,
  ADD_UPDATE_PRODUCT_CART,
  DELETE_FROM_CART,
  GET_SEARCH_PRODUCTS_CAT,
  ADD_NEW_ORDER,
  SEARCH_RATE,
  DELETE_RATE,
  GET_HOME,
  GET_RATES_PRODUCT,
  DELETE_CART,
  ADD_RATE,
} from "../app/modules/actions/products/productTypes";
const initialState = {
  loading: false,
  products: [],
  error: "",
  product: null,
  categories: [],
  rates: [],
  productQuery: null,
  cart: null,
  totalPrice: null,
  orders: [],
  home: null,
};

const productReducer = (state = initialState, action) => {
  const { payload } = action;
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
        products: action.payload,
        error: "",
      };
    case types.FETCH_ERROR:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    case GET_PRODUCTS:
    case ADD_PRODUCTS:
    case GET_SEARCH_PRODUCTS_CAT:
    case GET_ALL_PRODUCT_SUBCATEGORY_CATEGORY:
    case GET_ALL_PRODUCT_BY_PRICE:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case PRODUCTS_ERROR:
      return {
        ...state,
        products: null,
        loading: false,
      };
    case DELETE_PRODUCTS:
      return {
        ...state,
        products: state.products.filter((product) => product._id !== payload),
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case GET_PRODUCT:
    case UPDATE_PRODUCTS:
      return {
        ...state,
        product: payload,
      };
    case GET_RATES:
    case GET_RATES_PRODUCT:
      return {
        ...state,
        rates: payload,
      };
    case SEARCH_PRODUCT:
      return {
        ...state,
        productQuery: payload,
      };
    case GET_PRODUCT_CART:
      return {
        ...state,
        cart: payload,
      };
    case ADD_UPDATE_PRODUCT_CART:
      let cartItem = state.cart.items.map((item) =>
        item.productId._id === payload.id
          ? { ...item, quantity: payload.quantity }
          : item
      );
      return {
        ...state,
        cart: {
          ...state.cart,
          items: cartItem,
        },
      };
  case DELETE_FROM_CART:
      let cartItems = state.cart.items.filter((c)=> c.productId._id !== payload);
      // console.log(cartItems);
      return {
        ...state,
        cart:
          state.cart === null
            ? payload.res
            : {
                ...state.cart,
                items : cartItems
              },
      };
    case DELETE_CART:
      return {
        ...state,
        cart: null,
      };
    case ADD_NEW_ORDER:
      return {
        ...state,
        orders: payload,
      };
    case SEARCH_RATE:
      return {
        ...state,
        rateQuery: payload,
      };
    case DELETE_RATE:
      return {
        ...state,
        rates: state.rates.filter((rat) => rat._id !== payload),
      };
    case ADD_RATE:
      return {
        ...state,
        rates: [...state, payload],
      };
    case GET_HOME:
      return {
        ...state,
        home: payload,
      };
    default:
      return state;
  }
};

export default productReducer;
