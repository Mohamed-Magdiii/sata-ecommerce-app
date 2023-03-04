import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { LayoutSplashScreen } from "../../../_metronic/layout";
import Cart from "../../modules/Home/Components/Cart/Cart";
import DashboardProfile from "../../modules/Home/Components/Profile/DashboardProfile";
import EditProfile from "../../modules/Home/Components/Profile/EditProfile";
import Header from "../../modules/Home/Header/Header";
import TopHeader from "../../modules/Home/Header/TopHeader/TopHeader";
import NavBar from "../../modules/Home/NavBar/NavBar";
import Sign from "../../modules/Home/SignIn&SignUp/SignInComponent";
import SignUp from "../../modules/Home/SignIn&SignUp/SignUpComponent";
import Dashboard from "../../pages/Home/Dashboard";
import DashboardMyOrders from "../../modules/Home/Components/Profile/DashboardMyOrders";
import WishList from "../../modules/Home/Components/WishList/WishList";
import Products from "../../modules/Home/Products/Products";
import ProductDetail from "../../modules/Home/ProductDetail/ProductDetail";
import Checkout from "../../modules/Home/Components/Checkout/Checkout";
import About from "../../modules/Home/Components/About/About";
import Footer from "../../modules/Home/Footer/Footer";
import Contact from "../../modules/Home/Components/Contact/Contact";
import RateForm from "../../modules/Home/Components/Rate/RateForm";
import PrivateRoute from "./PrivateRoute";
import EditPassword from "../../modules/Home/Components/Profile/EditPassword";
import Blog from "../../modules/Home/Components/Blogs/BlogList";
import BlogDetailsPage from "../../modules/Home/Components/Blogs/BlogDetailsPage";

export default function HomeBasePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <TopHeader />
      <Header />
      <NavBar />
        <Route path="/" exact component={Dashboard} />
      <Switch>
        <Route path="/login" exact component={Sign} />
        <Route path="/register" exact component={SignUp} />
        <Route path="/my-profile" exact component={DashboardProfile} />
        <Route path="/edit-profile" exact component={EditProfile} />
        <Route path="/dash-my-orders" exact component={DashboardMyOrders} />
        <PrivateRoute path="/wishlist" exact component={WishList} />
        <PrivateRoute path="/cart" exact component={Cart} />
        <PrivateRoute path="/checkout" exact component={Checkout} />
        <PrivateRoute path="/change-password" exact component={EditPassword} />
        <Route path="/Products/:id" exact component={Products} />
        <Route path="/Products/search/home" exact component={Products} />
        <Route path="/Products/filter/:id" exact component={Products} />
        <Route path="/blogs" exact component={Blog} />
        <Route path="/blogs/blog-detail-page/:id" exact component={BlogDetailsPage} />
        <PrivateRoute path="/Products/add-rate/:id" exact component={RateForm} />
        <Route
          path="/Products/product-detail/:id"
          exact
          component={ProductDetail}
        />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </Suspense>
  );
}
