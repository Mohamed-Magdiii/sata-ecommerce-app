import React, { useRef, useEffect, useState } from "react";
import { shallowEqual, useSelector, connect, useDispatch } from "react-redux";
import { LayoutSplashScreen } from "../../../../../_metronic/layout";
import * as auth from "./HomeAuthRedux";
import { getUserByToken } from "./HomeAuthCrud";

function HomeAuthInit(props) {
  const didRequest = useRef(false);
  const dispatch = useDispatch();
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const { authToken } = useSelector(
    ({ auth }) => ({
      authToken: auth.authToken,
    }),
    shallowEqual
  );

  useEffect(() => {
    const requestUser = async () => {
      try {
        if (!didRequest.current) {
          const { data: user } = await getUserByToken();
          dispatch(props.fulfillUser(user));
        }
      } catch (error) {
        if (!didRequest.current) {
          dispatch(props.logout());
        }
      } finally {
        setShowSplashScreen(false);
      }

      return () => (didRequest.current = true);
    };
    if (authToken) {
      requestUser();
    }else {
      dispatch(props.fulfillUser(undefined));
      setShowSplashScreen(false);
    }
    // eslint-disable-next-line
  }, []);
  

  return showSplashScreen ? <LayoutSplashScreen /> : <>{props.children}</>;
}

export default connect(null, auth.actions)(HomeAuthInit);
