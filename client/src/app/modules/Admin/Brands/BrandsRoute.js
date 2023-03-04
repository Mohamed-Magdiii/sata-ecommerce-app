import React from "react";
import { Switch, Route } from "react-router-dom";
import AddBrands from "./AddBrandComponent/AddBrands";
import BrandsComponent from "./BrandsComponent/BrandsComponent";
import UpdateBrandComponent from "./UpdateBrandComponent/UpdateBrandComponent";


function BrandsRoute() {
  return (
    <Switch>
      <Route path="/admin/brands" exact component={BrandsComponent} />
      <Route path="/admin/brands/add" exact component={AddBrands} />
      <Route path="/admin/brands/update/:id" exact component={UpdateBrandComponent} /> 
    </Switch>
  );
}

export default BrandsRoute;
