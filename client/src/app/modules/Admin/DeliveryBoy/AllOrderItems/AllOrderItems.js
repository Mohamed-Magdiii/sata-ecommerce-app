import React from "react";
import TableTopHeader from "../../shared/TableTopHeader";
import { useGetAllOrderItems } from "../shared/axiosFunctions";
import { FormattedMessage } from "react-intl";
import CardBody from "./CardBody";
function AllOrderItems({ match }) {
  const { data } = useGetAllOrderItems(match.params.id);
  console.log(data?.data);
  return (
    <div className="card card-custom">
      <TableTopHeader
        heading={<FormattedMessage id="TABLE.DELIVERY.ALL.ORDER.ITEMS" />}
        title={
          <FormattedMessage id="TABLE.DELIVERY.ALL.ORDER.ITEMS.INCLUDES" />
        }
      />
      {data && <CardBody orderItems={data?.data} />}
    </div>
  );
}

export default AllOrderItems;
