import React, { useEffect } from "react";
import { FetchOrder } from "../../../actions/orders/orderActions";
import { useSelector, useDispatch } from "react-redux";
import UpdateOrder from "./UpdateOrder";
import Shared from "./Shared";
import { BeatLoader } from "react-spinners";

function OrderUpdateComponent({ match }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchOrder(match.params.id));
  }, [dispatch, match.params.id]);
  const orderData = useSelector((state) => state.orders);
  if (orderData.loading) {
    return <BeatLoader loading={orderData.loading} />;
  } else if (orderData.error) {
    return <h1>{orderData.error}</h1>;
  } else {
    console.log(orderData);
    return (
      <div className="flex-row-fluid ml-lg-8">
        <div className="card card-custom card-stretch">
          <Shared />
          {orderData && <UpdateOrder order={orderData.order} />}
        </div>
      </div>
    );
  }
}

export default OrderUpdateComponent;
