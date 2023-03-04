import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { addCoupons } from "../../../modules/actions/coupons/coupons";

function CouponForm({ addCoupons, history }) {
  const [amount, setAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isPrecent, setIsPrecent] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const onSubmit = (e) => {
    e.preventDefault();
    //  console.log({amount , startDate, endDate,isPrecent,isActive});
    addCoupons({ amount, startDate, endDate, isActive, isPrecent });
    history.push("/admin/coupons");
  };
  return (
    <div className="flex-row-fluid ml-lg-8">
      <div className="card card-custom">
        <div className="card-header py-3">
          <div className="card-title align-items-start flex-column">
            <h3 className="card-label font-weight-bolder text-dark">
            <FormattedMessage id="COUPONS.CODE" />
            </h3>
            {/* <span className="text-muted font-weight-bold font-size-sm mt-1">
              Change Company Shipping Setting
            </span> */}
          </div>
          <div className="card-toolbar">
            <button
              type="submit"
              onClick={(e) => onSubmit(e)}
              className="btn btn-primary mr-2"
            >
              <FormattedMessage id="BUTTON.SAVECHANGES" />
            </button>
            <button type="reset" className="btn btn-secondary" onClick={() => history.push('/admin/coupons')}>
            <FormattedMessage id="BUTTON.CANCEL" />
            </button>
          </div>
        </div>
        <form className="form">
          <div className="card-body">
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label"><FormattedMessage id="COUPONS.AMOUNT" /></label>
              <div className="col-lg-9 col-xl-6">
                <div>
                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="number"
                    placeholder="amount"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label">
              <FormattedMessage id="COUPONS.TYPE" />
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <select
                  className="form-control selectpicker"
                  onChange={(e) => setIsPrecent(e.target.value)}
                >
                  <option value="true">Precent</option>
                  <option value="false">Fixed</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label">
              <FormattedMessage id="COUPONS.START" />
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <div
                  className="input-group input-group-solid date"
                  id="kt_datetimepicker_3"
                  data-target-input="nearest"
                >
                  <input
                    type="date"
                    className="form-control form-control-solid datetimepicker-input"
                    placeholder="Select date time"
                    data-target="#kt_datetimepicker_3"
                    onChange={(e) => {
                      setStartDate(e.target.value);
                    }}
                  />
                  <div
                    className="input-group-append"
                    data-target="#kt_datetimepicker_3"
                    data-toggle="datetimepicker"
                  >
                    <span className="input-group-text">
                      <i className="ki ki-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label">
              <FormattedMessage id="COUPONS.END" />
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <div
                  className="input-group input-group-solid date"
                  id="kt_datetimepicker_3"
                  data-target-input="nearest"
                >
                  <input
                    type="date"
                    className="form-control form-control-solid datetimepicker-input"
                    placeholder="Select date time"
                    data-target="#kt_datetimepicker_3"
                    onChange={(e) => {
                      setEndDate(e.target.value);
                    }}
                  />
                  <div
                    className="input-group-append"
                    data-target="#kt_datetimepicker_3"
                    data-toggle="datetimepicker"
                  >
                    <span className="input-group-text">
                      <i className="ki ki-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label">
                <FormattedMessage id="COUPONS.STATUS" />
              </label>
              <div className="col-lg-4 col-md-9 col-sm-12">
                <select
                  className="form-control selectpicker"
                  onChange={(e) => setIsActive(e.target.value)}
                >
                  <option value="true">active</option>
                  <option value="false">not-active</option>
                </select>
              </div>
            </div>
            <div className="separator separator-dashed my-5"></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default connect(null, { addCoupons })(CouponForm);
