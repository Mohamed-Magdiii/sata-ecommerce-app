import React from "react";
import { useGetAllDelivery } from "../shared/axiosFunctions";
import { BeatLoader } from "react-spinners";
import TableTopHeader from "../../shared/TableTopHeader";
import CardBody from "./CardBody";
import { FormattedMessage } from "react-intl";
const DeliveryBoys = () => {
  const { data, isLoading, isError, error } = useGetAllDelivery();
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  }
  return (
    <div className="card card-custom">
      <TableTopHeader
        heading={<FormattedMessage id="TABLE.DELIVERY.TITLE" />}
        title={<FormattedMessage id="TABLE.DELIVERY.INCLUDES" />}
      />
      <div className="card-body">
        {data && <CardBody deliveryBoys={data?.data} />}
      </div>
    </div>
  );
};

export default DeliveryBoys;
