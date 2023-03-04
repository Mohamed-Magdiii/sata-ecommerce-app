import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  deleteShipping,
  getShipping,
} from "../../../../modules/actions/shippingRegion/shipping";
import { FormattedMessage } from "react-intl";

const ShippingList = ({
  history,
  getShipping,
  deleteShipping,
  country: { regions },
}) => {
  useEffect(() => {
    getShipping();
     // eslint-disable-next-line
  }, [getShipping]);
  return (
    <div>
      <table className="table table-hover align-middle gs-0 gy-4">
        <thead>
          <tr className="text-center border-3 fw-bolder text-muted bg-light">
            <th className="ps-4 min-w-100px"><FormattedMessage id="COUNTRY" /> <FormattedMessage id="SETTINGS.ENGLISH"/></th>
            <th className="ps-4 min-w-100px"><FormattedMessage id="COUNTRY" /> <FormattedMessage id="SETTINGS.ARABIC"/></th>
            <th className="ps-4 min-w-100px"><FormattedMessage id="CITY" /> <FormattedMessage id="SETTINGS.ENGLISH" /></th>
            <th className="ps-4 min-w-100px"><FormattedMessage id="CITY" /> <FormattedMessage id="SETTINGS.ARABIC" /></th>
            <th className="ps-4 min-w-100px"><FormattedMessage id="REGION" /> <FormattedMessage id="SETTINGS.ENGLISH" /></th>
            <th className="ps-4 min-w-100px"><FormattedMessage id="REGION" /> <FormattedMessage id="SETTINGS.ARABIC" /></th>
            <th className="ps-4 min-w-100px"><FormattedMessage id="REGION.PRICE" /></th>
            <th className="ps-4 min-w-100px"><FormattedMessage id="BLOG.ACITONS" /></th>
          </tr>
        </thead>
        <tbody>
          {regions &&
            regions.map((reg) => (
              <tr className="text-center border-3 m-auto" key={reg._id}>
                <td className="border text-center">
                  <div className="d-flex flex-column">{reg.countryId.country &&reg.countryId.country.en}</div>
                </td>
                <td className="border text-center">
                  <div className="d-flex flex-column">{reg.countryId.country &&reg.countryId.country.ar}</div>
                </td>
                <td className="border text-center">
                  <div className="d-flex flex-column">{reg.cityId.city && reg.cityId.city.en}</div>
                </td>
                <td className="border text-center">
                  <div className="d-flex flex-column">{reg.cityId.city && reg.cityId.city.ar}</div>
                </td>
                <td className="border text-center">
                  <div className="d-flex flex-column">{reg.region&&reg.region.en}</div>
                </td>
                <td className="border text-center">
                  <div className="d-flex flex-column">{reg.region&&reg.region.ar}</div>
                </td>
                <td className="border text-center">
                  <div className="d-flex flex-column">{reg.price}</div>
                </td>
                <td className="border text-center">
               <span className='btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon'> <i key={reg._id} className="far fa-edit" onClick={e => history.push(`/admin/shipping/region-form/${reg._id}`)}/></span>
              <span className='btn btn-sm btn-default btn-text-danger btn-hover-danger btn-icon'> <i key={reg._id} className="far fa-trash-alt" onClick={(e) => deleteShipping(reg._id)}/></span>
              </td>
            
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

ShippingList.propTypes = {
  getShipping: PropTypes.func.isRequired,
  deleteShipping: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  country: state.country,
});
export default connect(mapStateToProps, { getShipping, deleteShipping })(
  ShippingList
);
