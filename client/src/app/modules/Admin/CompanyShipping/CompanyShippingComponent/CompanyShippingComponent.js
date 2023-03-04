import React, { useEffect } from "react";
import Table from "./Table";
import { BeatLoader } from "react-spinners";
import { FetchCompanyShipping } from "../../../actions/companyshipping/companyShippingActions";
import { useSelector, useDispatch } from "react-redux";
import TableTopHeader from "../../shared/TableTopHeader";
import { FormattedMessage } from "react-intl";

const CompanyShippingComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchCompanyShipping());
  }, [dispatch]);
  const data = useSelector((state) => state.companyShipping);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else
    return (
      <div className="d-flex flex-column-fluid">
        <div className="container">
          <div className="card card-custom">
            <TableTopHeader
              heading={<FormattedMessage id="TABLE.COMPANY.SHIPPING.TITLE" />}
              title={<FormattedMessage id="TABLE.COMPANY.SHIPPING.INCLUDES" />}
            />
            {data && <Table companies={data.companyshipping} />}
          </div>
        </div>
      </div>
    );
};

export default CompanyShippingComponent;
