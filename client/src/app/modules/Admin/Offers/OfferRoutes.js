import React from "react";
import { Switch, Route } from "react-router-dom";
import AddOffer from "./AddOffer/AddOffer";
import OffersComponent from "./OffersComponent/OffersComponent";
function OfferRoutes() {
  return (
    <Switch>
      <Route path="/admin/offers" exact component={OffersComponent} />
      <Route path="/admin/offers/add-new" exact component={AddOffer} />
    </Switch>
  );
}

export default OfferRoutes;
