import React from "react";
import CardBody from "./CardBody";
import { useGetMostOrderd } from "../shared/axiosFunction";
import { BeatLoader } from "react-spinners";
import TableTopHeader from "../../shared/TableTopHeader";
import { FormattedMessage } from "react-intl";
function MostOrderd() {
  const { data, isLoading, isError, error } = useGetMostOrderd(20);
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else
    return (
      <div className="card card-custom">
        <TableTopHeader
          title={<FormattedMessage id="TABLE.TITLE.CUSTOMER.INCLUDES" />}
          heading={<FormattedMessage id="TABLE.TITLE.CUSTOMER.ALL" />}
        />
        {data && <CardBody data={data?.data} />}
      </div>
    );
}

export default MostOrderd;
