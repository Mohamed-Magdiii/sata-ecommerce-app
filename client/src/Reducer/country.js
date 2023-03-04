import {
  GET_COUNTRY,
  ADD_COUNTRY,
  DELETE_COUNTRY,
  GET_CITY,
  ADD_CITY,
  DELETE_CITY,
  //  CITY_ERROR,
  GET_SHIPPING,
  ADD_SHIPPING,
  DELETE_SHIPPING,
  //  SHIPPING_ERROR
  GET_CITY_COUNTRYID,
  GET_REGIONS_CITYID,
  UPDATE_COUNTRY,
  GET_COUNTRY_ID,
  GET_CITY_ID,
  GET_SHIPPING_ID,
  UPDATE_SHIPPING
} from "../../src/app/modules/actions/shippingRegion/types";

const initState = {
  countries: [],
  country: null,
  cities: [],
  city:null,
  regions: [],
  region: null,
};

export default function(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_COUNTRY:
      return {
        ...state,
        countries: payload,
      };
    case ADD_COUNTRY:
      return {
        ...state,
        countries: [...state.countries, payload],
      };
      case UPDATE_COUNTRY:
      case GET_COUNTRY_ID:
      return {
        ...state,
        country: payload,
      };
    case DELETE_COUNTRY:
      return {
        ...state,
        countries: state.countries.filter((count) => count._id !== payload),
      };
    case GET_CITY:
    case GET_CITY_COUNTRYID:
      return {
        ...state,
        cities: payload,
      };
    case ADD_CITY:
      return {
        ...state,
        cities: [...state.cities, payload],
      };
    case DELETE_CITY:
      return {
        ...state,
        cities: state.cities.filter((count) => count._id !== payload),
      };
      case GET_CITY_ID:
        return {
          ...state,
          city:payload
        }
    case GET_SHIPPING:
    case GET_REGIONS_CITYID:
      return {
        ...state,
        regions: payload,
      };
    case ADD_SHIPPING:
      return {
        ...state,
        regions: [...state.regions, payload],
      };
    case DELETE_SHIPPING:
      return {
        ...state,
        regions: state.regions.filter((reg) => reg._id !== payload),
      };
      case GET_SHIPPING_ID:
      case UPDATE_SHIPPING:
        return{
          ...state,
          region:payload
        }
    default:
      return state;
  }
}
