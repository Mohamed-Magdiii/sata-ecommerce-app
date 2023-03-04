import React from "react";
import { Switch, Route } from "react-router-dom";
import AddCategory from "./AddCategory/AddCategory";
import CategoryComponent from "./CategoryComponent/CategoryComponent";
import CategoryUpdate from "./CategoryUpdate/CategoryUpdate";
import AddSubCategory from "./SubCategory/AddSubCategory/AddSubCategory";
import SubCategoryComponent from "./SubCategory/SubCategoryComponent";
import UpdateSubCategory from "./SubCategory/update/update";

function OrderRouters() {
  return (
    <Switch>
      <Route path="/admin/categories" exact component={CategoryComponent} />
      <Route path="/admin/categories/update/:id" component={CategoryUpdate} />
      <Route path="/admin/categories/add" exact component={AddCategory} />
      <Route
        path="/admin/categories/sub-category/:id"
        exact
        component={SubCategoryComponent}
      />
      <Route
        path="/admin/categories/sub-category/add/:id"
        exact
        component={AddSubCategory}
      />
      <Route
        path="/admin/categories/sub-category/update/:id"
        exact
        component={UpdateSubCategory}
      />
    </Switch>
  );
}

export default OrderRouters;
