import React from "react";
import TableTopHeader from "../../shared/TableTopHeader";
import { useGetAllOrdersHavingCustomerId } from "../shared/axiosFunction";
import { BeatLoader } from "react-spinners";
import CardBody from "./CardBody";
import { FormattedMessage } from "react-intl";

function AllOrders({ match }) {
  const { data, isLoading, isError, error } = useGetAllOrdersHavingCustomerId(
    match.params.id
  );
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    return (
      <div className="card card-custom">
        <TableTopHeader
          heading={<FormattedMessage id="TABLE.TITLE.ORDERS.ALL" />}
          title={<FormattedMessage id="TABLE.ORDERS.DONT.BY.CUSTOMER" />}
        />
        {data && <CardBody orders={data?.data.data} />}
      </div>
    );
  }
}

export default AllOrders;
