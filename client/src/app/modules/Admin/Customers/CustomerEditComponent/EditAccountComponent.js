import React, { useState } from "react";
import { useContext } from "react";
import { UserEditContext } from "./CardHeader";
import CardFooter from "./CardFooter";
import { FormattedMessage } from "react-intl";
const EditAccountComponent = ({ isActive }) => {
  const data = useContext(UserEditContext);
  const [status, setStatus] = useState(data?.status);
  const [role, setRole] = useState(data?.role || "");
  return (
    <div
      className={`tab-pane px-7 ${isActive && "show active"}`}
      role="tabpanel"
    >
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-7">
          <div className="my-2">
            <div className="row">
              <label className="col-form-label col-3 text-lg-right text-left"></label>
              <div className="col-9">
                <h6 className="text-dark font-weight-bold mb-10">
                  {" "}
                  <FormattedMessage id="TABLE.CUSTOMER.ACCOUNT" />{" "}
                </h6>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.CUSTOMER.STATUS" />
              </label>
              <div className="col-9">
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-control form-control-lg form-control-solid"
                >
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Blocked">Blocked</option>
                </select>
              </div>
            </div>
            <div className="form-group row align-items-center">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.CUSTOMER.ROLE" />
              </label>
              <div className="col-9">
                <div className="radio-inline">
                  <label className="radio">
                    <input
                      type="radio"
                      name="role"
                      checked={role === "admin"}
                      onChange={() => setRole("admin")}
                    />
                    <span></span> <FormattedMessage id="INPUT.ROLE.ADMIN" />
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="role"
                      checked={role === "vendor"}
                      onChange={() => setRole("vendor")}
                    />
                    <span></span> <FormattedMessage id="INPUT.ROLE.VENDOR" />
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="role"
                      checked={role === "user"}
                      onChange={() => setRole("user")}
                    />
                    <span></span> <FormattedMessage id="INPUT.ROLE.USER" />
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="role"
                      checked={role === "worker"}
                      onChange={() => setRole("worker")}
                    />
                    <span></span> <FormattedMessage id="INPUT.ROLE.WORKER" />
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="role"
                      checked={role === "delivery"}
                      onChange={() => setRole("delivery")}
                    />
                    <span></span> <FormattedMessage id="INPUT.ROLE.DELIVERY" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardFooter data={{ role, status }} />
    </div>
  );
};

export default EditAccountComponent;
