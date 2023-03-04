import React from "react";
import { Switch, Route } from "react-router-dom";
import OrdersComponent from "./OrderComponent/OrdersComponent";
import OrderDetailComponent from "./OrderDetailComponent/OrderDetailComponent";
import OrderTypes from "./OrderTypes/OrderTypes";
import OrderUpdateComponent from "./OrderUpdateComponent/OrderUpdateComponent";
import UpdateOrderItem from "./OrderUpdateComponent/UpdateOrderItem";

function OrderRouters() {
  return (
    <Switch>
      <Route path="/admin/orders" exact component={OrdersComponent} />
      <Route
        path="/admin/orders/order-item/:id"
        exact
        component={OrderDetailComponent}
      />
      <Route
        path="/admin/orders/update-order/:id"
        exact
        component={OrderUpdateComponent}
      />
      <Route
        path="/admin/orders/update-order-item/:id"
        exact
        component={UpdateOrderItem}
      />
      <Route path="/admin/orders/type/:type" component={OrderTypes} />
    </Switch>
  );
}

export default OrderRouters;
