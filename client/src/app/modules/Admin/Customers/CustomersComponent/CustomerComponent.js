import React, { useEffect } from "react";
import CardBody from "./CardBody";
import { useSelector, useDispatch } from "react-redux";
import { FetchCustomers } from "../../../actions/customers/customersActions";
import { BeatLoader } from "react-spinners";
import TableTopHeader from "../../shared/TableTopHeader";
import { FormattedMessage } from "react-intl";
const CustomerComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchCustomers());
  }, [dispatch]);
  const data = useSelector((state) => state.users);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else
    return (
      <div className="card card-custom">
        <TableTopHeader
          title={<FormattedMessage id="TABLE.TITLE.CUSTOMER.INCLUDES" />}
          heading={<FormattedMessage id="TABLE.TITLE.CUSTOMER.ALL" />}
        />
        {data && <CardBody data={data.users} />}
      </div>
    );
};

export default CustomerComponent;
