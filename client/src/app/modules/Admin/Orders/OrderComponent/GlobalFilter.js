import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce(
    (value) => setFilter(value || undefined),
    500
  );
  return (
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
              <label className="mr-3 mb-0 d-none d-md-block">Status:</label>
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
                  <option value="Deliverd">Deliverd</option>
                  <option value="onDelivery">onDelivery</option>
                  <option value="Refused">Refused</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-4 my-2 my-md-0">
            <div className="d-flex align-items-center">
              <label className="mr-3 mb-0 d-none d-md-block">Paid:</label>

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
                  <option value="">Select Paid Orders</option>
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-xl-4 mt-5 mt-lg-0">
        <span className="btn btn-light-primary px-6 font-weight-bold">
          Search
        </span>
      </div>
    </div>
  );
};

export default GlobalFilter;
