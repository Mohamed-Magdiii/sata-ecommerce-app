import React from "react";
import { Switch, Route } from 'react-router-dom';
import CompanyShippingComponent from "./CompanyShippingComponent/CompanyShippingComponent";
import UpdateCompanyShipping from "./UpdateCompanyShipping/UpdateCompanyShipping";
const CompanyShippingRoutes = () => {
  return (
    <Switch>
      <Route path="/admin/company-shipping" exact component={CompanyShippingComponent} />
      <Route path="/admin/company-shipping/update/:id" exact component={UpdateCompanyShipping} />
    </Switch>
  );
};

export default CompanyShippingRoutes;
