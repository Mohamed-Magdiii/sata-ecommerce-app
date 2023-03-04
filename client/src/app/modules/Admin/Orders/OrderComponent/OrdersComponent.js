import React, { useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { FetchOrders } from "../../../actions/orders/orderActions";
import TableTopHeader from "../../shared/TableTopHeader";
import { useSelector, useDispatch } from "react-redux";
import CardBody from "./CardBody";
import { FormattedMessage } from "react-intl";
const OrdersComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchOrders());
  }, [dispatch]);
  const data = useSelector((state) => state.orders);
  console.log(data);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  }
  if (data.error) {
    return <h1>{data.error}</h1>;
  }
  return (
    <div className="card card-custom">
      <TableTopHeader
        heading={<FormattedMessage id="TABLE.TITLE.ORDERS.ALL" />}
        title={<FormattedMessage id="TABLE.TITLE.ORDERS.INCLUDES" />}
      />
      {data && data.orders && <CardBody orders={data.orders} />}
    </div>
  );
};

export default OrdersComponent;
