import React from "react";
import { Switch, Route } from "react-router-dom";
import CityForm from "./CityFormComponent/CityForm";
import CityEditForm from "./CityFormComponent/CityEditForm";
import CountryForm from "./CountryFormComponent/CountryForm";
import EditForm from "./CountryFormComponent/EditForm";
import ShippingForm from "./ShippingFormComponent/ShippingForm";
import ShippingList from "./ShippingListComponent/ShippingList";
import ShippingEditForm from "./ShippingFormComponent/ShippingEditForm";

function ShippingRoutes() {
  return (
    <Switch>
      <Route path="/admin/shipping/shipping-list" exact component={ShippingList} />
      <Route path="/admin/shipping/shipping-new" exact component={ShippingForm} />
      <Route path="/admin/shipping/region-form/:id" exact component={ShippingEditForm} />
      <Route path="/admin/shipping/country-form" exact component={CountryForm} />
      <Route path="/admin/shipping/country-form/:id" exact component={EditForm} />
      <Route path="/admin/shipping/city-form" exact component={CityForm} />
      <Route path="/admin/shipping/city-form/:id" exact component={CityEditForm} />
    </Switch>
  );
}

export default ShippingRoutes;
