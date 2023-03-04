import * as types from "./offerTypes";
import request from "../../utils/api-utils";
import { toast } from "react-toastify";
import DisLang from "../../utils/HEADERS";

const FetchRequest = () => {
  return {
    type: types.FETCH_REQUEST,
  };
};

const FetchAll = (offers) => {
  return {
    type: types.FETCH_ALL,
    payload: offers,
  };
};

const FetchError = (error) => {
  return {
    type: types.FETCH_ERROR,
    payload: error,
  };
};

export const FetchOffers = (role) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const offers = await request.get(
        `${role === "admin" ? "/offers" : "/offers/offersRelatedToVendor"}`
      );
      dispatch(FetchAll(offers.data.data));
    } catch (error) {
      dispatch(FetchError(error.message));
    }
  };
};

export const addNew = (offer) => {
  return {
    type: types.ADD_NEW,
    payload: offer,
  };
};

export const hookAddOffer = (data) => {
  return async (dispatch) => {
    try {
      dispatch(FetchRequest());
      const newOffer = await request.post("/offers", data);
      dispatch(addNew(newOffer.data.message));
      toast.success(
        DisLang ? "تم اضافه منتج جديد بنجاح" : "New Offer has been Added "
      );
    } catch (error) {
      dispatch(FetchError(error.message));
      toast.error(
        DisLang ? "خطا اثناء ارسال البيانات" : "Error while Adding !"
      );
    }
  };
};
