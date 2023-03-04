import React from "react";
import { Switch, Route } from "react-router-dom";
import AllOrders from "./AllOrdersByThisCustomer/AllOrders";
import BlockedUsersComponent from "./BlockedUsersComponent/BlockedUsersComponent";
import CustomerEditComponent from "./CustomerEditComponent/CustomerEditComponent";
import CustomerComponent from "./CustomersComponent/CustomerComponent";
import MostOrderd from "./MostOrderd/MostOrderd";
import Last7Days from "./NewUsers/Last7Days";
import LastMonth from "./NewUsers/LastMonth";
import NewUsers from "./NewUsers/NewUsers";
import NotSignedIn from "./NotSignedIn/NotSignedIn";
import OnlineCustomers from "./OnlineCustomerComponent/OnlineCustomers";
import AddNewVendor from "./Vendor/AddNewVendor/AddNewVendor";
import Vendor from "./Vendor/Vendor";
import { useSelector } from "react-redux";
import AllWorkers from "./Workers/AllWorkers";
import UpdateWorker from "./Workers/update/UpdateWorker";
function CustomerRoutes() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Switch>
      <Route path="/admin/customer-page" exact component={CustomerComponent} />
      <Route path="/admin/customer-page/Vendors" exact component={Vendor} />
      <Route
        path="/admin/customer-page/edit/:id"
        exact
        component={CustomerEditComponent}
      />
      <Route
        path="/admin/customer-page/online/:role"
        exact
        component={OnlineCustomers}
      />
      <Route
        path="/admin/customer-page/blocked/:role"
        exact
        component={BlockedUsersComponent}
      />
      <Route
        path="/admin/customer-page/newUsers/:role"
        exact
        component={NewUsers}
      />
      <Route
        path="/admin/customer-page/lastWeek/:role"
        exact
        component={Last7Days}
      />
      <Route
        path="/admin/customer-page/lastMonth/:role"
        exact
        component={LastMonth}
      />
      <Route
        path="/admin/customer-page/most-orderd"
        exact
        component={MostOrderd}
      />
      <Route
        path="/admin/customer-page/not-signed-in/:days/:role"
        exact
        component={NotSignedIn}
      />
      <Route
        path="/admin/customer-page/add-new/:role"
        exact
        component={AddNewVendor}
      />
      <Route
        path="/admin/customer-page/orders/:id"
        exact
        component={AllOrders}
      />
      {user.roles[0] === 2 && (
        <>
          <Route
            path="/admin/customer-page/all/:role"
            exact
            component={AllWorkers}
          />
          <Route
            path="/admin/customer-page/update/:id"
            exact
            component={UpdateWorker}
          />
        </>
      )}
    </Switch>
  );
}

export default CustomerRoutes;
