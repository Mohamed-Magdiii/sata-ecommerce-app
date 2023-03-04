import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce(
    (value) => setFilter(value || undefined),
    500
  );
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="mb-7">
      <div className="row align-items-center">
        <div className="col-lg-9 col-xl-8">
          <div className="row align-items-center">
            <div className="col-md-4 my-2 my-md-0">
              <div className="input-icon">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  id="kt_datatable_search_query"
                  value={value || ""}
                  onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                  }}
                />
                <span>
                  <i className="flaticon2-search-1 text-muted"></i>
                </span>
              </div>
            </div>
            <div className="col-md-4 my-2 my-md-0">
              <div className="d-flex align-items-center">
                <label className="mr-3 mb-0 d-none d-md-block">
                  <FormattedMessage id="TABLE.CUSTOMER.STATUS" />
                </label>
                <div className="d-flex align-items-center">
                  <select
                    className="form-control form-control-sm text-dark font-weight-bold mr-4 border-0 bg-light"
                    style={{ width: "200px" }}
                    value={value || ""}
                    onChange={(e) => {
                      setValue(e.target.value);
                      onChange(e.target.value);
                    }}
                  >
                    <option value="">Select By Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Blocked">Blocked</option>
                  </select>
                </div>
              </div>
            </div>
            {user.roles[0] === 1 && (
              <div className="col-md-4 my-2 my-md-0">
                <div className="d-flex align-items-center">
                  <label className="mr-3 mb-0 d-none d-md-block">
                    {" "}
                    <FormattedMessage id="TABLE.CUSTOMER.ROLE" />
                  </label>

                  <div className="d-flex align-items-center">
                    <select
                      className="form-control form-control-sm text-dark font-weight-bold mr-4 border-0 bg-light"
                      style={{ width: "200px" }}
                      value={value || ""}
                      onChange={(e) => {
                        setValue(e.target.value);
                        onChange(e.target.value);
                      }}
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                      <option value="delivery">Delivery</option>
                      <option value="worker">Worker</option>
                      <option value="vendor">Vendor</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFilter;
