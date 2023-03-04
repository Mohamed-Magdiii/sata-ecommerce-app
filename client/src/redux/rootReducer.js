import { all } from "redux-saga/effects";
import { combineReducers } from "redux";
import { customersSlice } from "../app/modules/Admin/ECommerce/_redux/customers/customersSlice";
import { remarksSlice } from "../app/modules/Admin/ECommerce/_redux/remarks/remarksSlice";
import { specificationsSlice } from "../app/modules/Admin/ECommerce/_redux/specifications/specificationsSlice";
import userReducer from "../Reducer/customerReducer";
import categoryReducer from "../Reducer/categoryReducer";
import orderReducer from "../Reducer/orderReducer";
import blogs from "../Reducer/blogsReducer";
import settings from "../Reducer/settingReducer";
import coupons from "../Reducer/coupons";
import wishlist from "../Reducer/wishlist";
import offerReducer from "../Reducer/offerReducer";
import brandReducer from "../Reducer/brandsReducer";
import companyShippingReducer from "../Reducer/companyshippingReducer";
import productReducer from "../Reducer/productReducer";
import authentication from "../Reducer/auth";
import subcategoryReducer from "../Reducer/subcategoryReducer";
import countryReducer from "../Reducer/country";
import contactReducer from "../Reducer/contactReducer";
import * as auth from "../app/modules/Admin/Auth/_redux/AdminAuthRedux";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  customers: customersSlice.reducer,
  remarks: remarksSlice.reducer,
  specifications: specificationsSlice.reducer,
  users: userReducer,
  country: countryReducer,
  category: categoryReducer,
  subcategory: subcategoryReducer,
  orders: orderReducer,
  offers: offerReducer,
  brands: brandReducer,
  companyShipping: companyShippingReducer,
  products: productReducer,
  blogs,
  settings,
  coupons,
  customer: userReducer,
  wishlist,
  authentication,
  contact: contactReducer,
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
