import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../../../_metronic/layout";
import { BuilderPage } from "../../pages/Admin/BuilderPage";
import { DashboardPage } from "../../pages/Admin/DashboardPage";
import { useIdleTimer } from "react-idle-timer";
import { useSelector, shallowEqual } from "react-redux";
import { useUpdateState } from "./updateState";
const UserProfilepage = lazy(() =>
  import("../../modules/Admin/UserProfile/UserProfilePage")
);

const CategoryComponent = lazy(() =>
  import("../../modules/Admin/Category/CategoryRouters")
);

const CustomerComponent = lazy(() =>
  import("../../modules/Admin/Customers/CustomerRoutes")
);

const Productpage = lazy(() =>
  import("../../modules/Admin/Products/ProductRoute")
);

const Shippingpage = lazy(() =>
  import("../../modules/Admin/Shipping/ShippingRoutes")
);

const OrderComponent = lazy(() =>
  import("../../modules/Admin/Orders/OrderRouters")
);

const BrandsComponent = lazy(() =>
  import("../../modules/Admin/Brands/BrandsRoute")
);

const OfferComponent = lazy(() =>
  import("../../modules/Admin/Offers/OfferRoutes")
);

const ChatComponent = lazy(() =>
  import("../../modules/Admin/Chats/ChatsRoutes")
);

const CompanyShippingComponent = lazy(() =>
  import("../../modules/Admin/CompanyShipping/CompanyShippingRoutes")
);

const DeliveryBoysComponent = lazy(() =>
  import("../../modules/Admin/DeliveryBoy/DeliveryBoyRoutes")
);

const CommentsComponent = lazy(() =>
  import("../../modules/Admin/Comments/Comments.Routes")
);

const NotificationsComponent = lazy(() =>
  import("../../modules/Admin/Notifications/Notifications.Routes")
);


const BlogComponent = lazy(() => import("../../pages/Admin/Blogs"));

const SiteSettings = lazy(() => import("../../pages/Admin/SiteSettings"));

const CouponsComponent = lazy(() => import("../../pages/Admin/Coupons"));

export default function AdminBasePage() {
  const { user } = useSelector((state) => state.auth, shallowEqual);
  const { mutate } = useUpdateState();
  const handleOnIdle = () => {
    mutate({ id: user._id, online: false });
  };

  const handleOnActive = () => {
    mutate({ id: user._id, online: true });
  };

  useIdleTimer({
    timeout: 1000 * 60 * 20,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    debounce: 500,
  });

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {<Redirect exact from="/admin" to="/admin/dashboard" />}
        <ContentRoute path="/admin/dashboard" component={DashboardPage} />
        <Route path="/admin/products-page" component={Productpage} />
        <Route path="/admin/offers" component={OfferComponent} />
        <Route path="/admin/delivery-boys" component={DeliveryBoysComponent} />
        <Route path="/admin/orders" component={OrderComponent} />
        <Route path="/admin/customer-page" component={CustomerComponent} />
        <Route path="/admin/user-profile" component={UserProfilepage} />
        {user.roles[0] === 1 && (
          <>
            <ContentRoute path="/admin/builder" component={BuilderPage} />
            <Route path="/admin/brands" component={BrandsComponent} />
            <Route path="/admin/shipping" component={Shippingpage} />
            <Route path="/admin/categories" component={CategoryComponent} />
            <Route path="/admin/blogs-page" component={BlogComponent} />
            <Route path="/admin/Chats" component={ChatComponent} />
            <Route path="/admin/Comments" component={CommentsComponent} />
            <Route
              path="/admin/Notifications"
              component={NotificationsComponent}
            />
            <Route
              path="/admin/company-shipping"
              component={CompanyShippingComponent}
            />
            <Route path="/admin/site-settings" component={SiteSettings} />
            <Route path="/admin/coupons" component={CouponsComponent} />{" "}
          </>
        )}
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
