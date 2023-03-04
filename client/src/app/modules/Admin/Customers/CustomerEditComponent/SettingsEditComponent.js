import React from "react";
import CardFooter from "./CardFooter";

const SettingsEditComponent = ({ isActive }) => {
  return (
    <div
      className={`tab-pane px-7 ${isActive && "show active"}`}
      role="tabpanel"
    >
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8">
          <div className="my-2">
            <div className="row">
              <label className="col-form-label col-3 text-lg-right text-left"></label>
              <div className="col-9">
                <h6 className="text-dark font-weight-bold mb-7">
                  Setup Email Notification:
                </h6>
              </div>
            </div>
            <div className="form-group row mb-2">
              <label className="col-form-label col-3 text-lg-right text-left">
                Email Notification
              </label>
              <div className="col-3">
                <span className="switch">
                  <label>
                    <input type="checkbox" name="select" />
                    <span></span>
                  </label>
                </span>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                Send Copy To Personal Email
              </label>
              <div className="col-3">
                <span className="switch">
                  <label>
                    <input type="checkbox" name="select" />
                    <span></span>
                  </label>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <label className="col-form-label col-3 text-lg-right text-left"></label>
            <div className="col-9">
              <h6 className="text-dark font-weight-bold mb-7">
                Activity Related Emails:
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="separator separator-dashed mb-10"></div>
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8">
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              When To Email
            </label>
            <div className="col-9">
              <div className="checkbox-inline mb-2">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span></span>You have new notifications.
                </label>
              </div>
              <div className="checkbox-inline mb-2">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span></span>You're sent a direct message
                </label>
              </div>
              <div className="checkbox-inline mb-2">
                <label className="checkbox">
                  <input type="checkbox"  />
                  <span></span>Someone adds you as a connection
                </label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              When To Escalate Emails
            </label>
            <div className="col-9">
              <div className="checkbox-inline mb-2">
                <label className="checkbox checkbox-success">
                  <input type="checkbox" />
                  <span></span>Upon new order
                </label>
              </div>
              <div className="checkbox-inline mb-2">
                <label className="checkbox checkbox-success">
                  <input type="checkbox" />
                  <span></span>New membership approval
                </label>
              </div>
              <div className="checkbox-inline mb-2">
                <label className="checkbox checkbox-success">
                  <input type="checkbox" />
                  <span></span>Member registration
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separator separator-dashed mb-10"></div>
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8">
          <div className="row">
            <label className="col-form-label col-3 text-lg-right text-left"></label>
            <div className="col-9">
              <h6 className="text-dark font-weight-bold mb-7">
                Updates From Keenthemes:
              </h6>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              Email You With
            </label>
            <div className="col-9">
              <div className="checkbox-inline mb-2">
                <label className="checkbox checkbox-success">
                  <input type="checkbox" />
                  <span></span>News about Metronic product and feature updates
                </label>
              </div>
              <div className="checkbox-inline mb-2">
                <label className="checkbox checkbox-success">
                  <input type="checkbox" />
                  <span></span>Tips on getting more out of Keen
                </label>
              </div>
              <div className="checkbox-inline mb-2">
                <label className="checkbox checkbox-success">
                  <input type="checkbox"  />
                  <span></span>Things you missed since you last logged into Keen
                </label>
              </div>
              <div className="checkbox-inline mb-2">
                <label className="checkbox checkbox-success">
                  <input type="checkbox"  />
                  <span></span>News about Metronic on partner products and other
                  services
                </label>
              </div>
              <div className="checkbox-inline mb-2">
                <label className="checkbox checkbox-success">
                  <input type="checkbox"  />
                  <span></span>Tips on Metronic business products
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardFooter />
    </div>
  );
};

export default SettingsEditComponent;
