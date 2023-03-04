import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { AdminAuthInit } from "./modules/Admin/Auth";
import { AdminRoutes } from "../app/Routes/Admin/AdminRoutes";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { I18nProvider } from "../_metronic/i18n";
import { LayoutSplashScreen, MaterialThemeProvider } from "../_metronic/layout";
import { HomeAuthInit } from "./modules/Home/Auth";
import { HomeRoutes } from "../app/Routes/Home/HomeRoutes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-rater/lib/react-rater.css";
import setAuthToken from "./utils/setAuthToken";
import { LoadUser } from "./modules/actions/auth/auth";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default function App({ store, persistor, basename }) {
  const queryClient = new QueryClient();
  toast.configure();
  useEffect(() => {
    store.dispatch(LoadUser());
    // eslint-disable-next-line
  }, [store]);
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<LayoutSplashScreen />}>
          <React.Suspense fallback={<LayoutSplashScreen />}>
            <BrowserRouter basename={basename}>
              <MaterialThemeProvider>
                <I18nProvider>
                  {window.location.href.includes("/admin") ? (
                    <AdminAuthInit>
                      <AdminRoutes />
                    </AdminAuthInit>
                  ) : (
                    <HomeAuthInit>
                      <HomeRoutes />
                    </HomeAuthInit>
                  )}
                </I18nProvider>
              </MaterialThemeProvider>
            </BrowserRouter>
          </React.Suspense>
        </PersistGate>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
    </QueryClientProvider>
  );
}
