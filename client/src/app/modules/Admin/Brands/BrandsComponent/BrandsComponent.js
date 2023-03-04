import React, { useEffect } from "react";
import { BeatLoader } from "react-spinners";
import TableTopHeader from "../../shared/TableTopHeader";
import CardBody from "./CardBody";
import { FetchBrands } from "../../../actions/brands/brandActions";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
const BrandsComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchBrands());
  }, [dispatch]);
  const data = useSelector((state) => state.brands);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else
    return (
      <div className="card card-custom">
        <TableTopHeader
          title={<FormattedMessage id="TABLE.TITLE.BRANDS.INCLUDES" />}
          heading={<FormattedMessage id="TABLE.TITLE.BRANDS.ALL" />}
        />
        {data && <CardBody brands={data.brands} />}
      </div>
    );
};

export default BrandsComponent;
