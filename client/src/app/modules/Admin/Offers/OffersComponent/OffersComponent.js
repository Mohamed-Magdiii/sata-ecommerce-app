import React, { useEffect } from "react";
import CardBody from "./CardBody";
import { FetchOffers } from "../../../actions/offers/offerActions";
import { useSelector, useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";
import { FormattedMessage } from "react-intl";

const OffersComponent = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(FetchOffers(user.roles[0] === 1 ? "admin" : "vendor"));
  }, [dispatch, user]);
  const data = useSelector((state) => state.offers);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    return (
      <div className="card card-custom">
        <div className="card-header border-0 py-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label font-weight-bolder text-dark">
              <FormattedMessage id="TABLE.TITLE.OFFERS.ALL" />
            </span>
            <span className="text-muted mt-3 font-weight-bold font-size-sm">
              <FormattedMessage id="TABLE.TITLE.OFFERS.INCLUDES" />
            </span>
          </h3>
        </div>
        {data && <CardBody offers={data.offers} />}
      </div>
    );
  }
};

export default OffersComponent;
