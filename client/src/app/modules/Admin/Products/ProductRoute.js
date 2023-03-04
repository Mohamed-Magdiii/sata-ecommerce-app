import React from "react";
import ProductsPage from "./ProductComponent/ProductsPage";
import { Switch, Route } from "react-router-dom";
import ProductForm from "./ProductFormComponent/ProductForm";
import MostWatchedProducts from "./MostWatchedProducts/MostWatchedProducts";
import LowestProducts from "./LowestProducts/LowestProducts";
import MostBought from "./MostBought/MostBought";
import ProductDetail from "./ProductDetails/ProductDetail";
import RatesComponent from "./RatesComponent/RatesComponent";
import Update from "./update/Update";
function ProductsRoute() {
  return (
    <Switch>
      <Route path="/admin/products-page" exact component={ProductsPage} />
      <Route path="/admin/products-page/new" exact component={ProductForm} />
      <Route
        path="/admin/products-page/mostWatched"
        exact
        component={MostWatchedProducts}
      />
      <Route
        path="/admin/products-page/LowestProducts"
        exact
        component={LowestProducts}
      />
      <Route
        path="/admin/products-page/most-bought"
        exact
        component={MostBought}
      />
      <Route
        path="/admin/products-page/product-detail/:id"
        exact
        component={ProductDetail}
      />
      <Route
        path="/admin/products-page/rates"
        exact
        component={RatesComponent}
      />
      <Route path="/admin/products-page/update/:id" exact component={Update} />
    </Switch>
  );
}

export default ProductsRoute;
