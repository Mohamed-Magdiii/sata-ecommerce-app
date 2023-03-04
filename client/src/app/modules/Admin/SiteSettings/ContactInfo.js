import React from "react";
import { FormattedMessage } from "react-intl";
function ContactInfo({
  mobile,
  setMobile,
  address_en,
  setAddressEn,
  address_ar,
  setAddressAr,
  worktime,
  setWorktime,
  map,
  setMap,
}) {
  return (
    <>
      <div className="row">
        <div className="col-lg-9 col-xl-6 offset-xl-3">
          <h3 className="font-size-h6 mb-5">
            <FormattedMessage id="SETTINGS.CONTACT" />
          </h3>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label text-right">
          <FormattedMessage id="SETTINGS.MOBILE" />
        </label>
        <div className="col-lg-9 col-xl-6">
          <div className="input-group input-group-lg input-group-solid">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="la la-phone"></i>
              </span>
            </div>
            <input
              type="number"
              className="form-control form-control-lg form-control-solid"
              value={mobile}
              placeholder="Phone"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label text-right">
          <FormattedMessage id="SETTINGS.ADDRESS" />
          <FormattedMessage id="SETTINGS.ENGLISH" />
        </label>
        <div className="col-lg-9 col-xl-6">
          <div className="input-group input-group-lg input-group-solid">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="la la-at"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              value={address_en}
              onChange={(e) => setAddressEn(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label text-right">
          <FormattedMessage id="SETTINGS.ADDRESS" />
          <FormattedMessage id="SETTINGS.ARABIC" />
        </label>
        <div className="col-lg-9 col-xl-6">
          <div className="input-group input-group-lg input-group-solid">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="la la-at"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              value={address_ar}
              onChange={(e) => setAddressAr(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label text-right">
          <FormattedMessage id="SETTINGS.WORKTIME" />
        </label>
        <div className="col-lg-9 col-xl-6">
          <div className="input-group input-group-lg input-group-solid">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="la la-at"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              value={worktime}
              onChange={(e) => setWorktime(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label text-right">
          <FormattedMessage id="SETTINGS.MAP" />
        </label>
        <div className="col-lg-9 col-xl-6">
          <div className="input-group input-group-lg input-group-solid">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="la la-at"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control form-control-lg "
              value={map}
              onChange={(e) => setMap(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
