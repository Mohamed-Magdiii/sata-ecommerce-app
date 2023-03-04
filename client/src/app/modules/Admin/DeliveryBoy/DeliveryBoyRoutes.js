import React from "react";
import { Switch, Route } from "react-router-dom";
import AddNewDelivery from "./AddNewDelivery/AddNewDelivery";
import DeliveryBoys from "./AllDeliveryBoys/DeliveryBoys";
import AllOrderItems from "./AllOrderItems/AllOrderItems";
import NewDeliveryBoys from "./NewDeliveryBoys/NewDeliveryBoys";

const DeliveryBoyRoutes = () => {
  return (
    <Switch>
      <Route path="/admin/delivery-boys" exact component={DeliveryBoys} />
      <Route path="/admin/delivery-boys/add" exact component={AddNewDelivery} />
      <Route path="/admin/delivery-boys/new" exact component={NewDeliveryBoys} />
      <Route path="/admin/delivery-boys/order-items/:id" exact component={AllOrderItems} />
    </Switch>
  );
};

export default DeliveryBoyRoutes;
