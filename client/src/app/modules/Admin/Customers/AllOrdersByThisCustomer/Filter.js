import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useAsyncDebounce } from "react-table";
function Filter({ filter, setFilter }) {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce(
    (value) => setFilter(value || undefined),
    500
  );
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
                  {" "}
                  <FormattedMessage id="TABLE.ORDERS.STATUS" />{" "}
                </label>
                <div className="" data-select2-id="164">
                  <select
                    className="form-control select2 select2-hidden-accessible"
                    id="kt_select2_10"
                    name="param"
                    data-select2-id="kt_select2_10"
                    tabIndex="-1"
                    aria-hidden="true"
                    value={value || ""}
                    onChange={(e) => {
                      setValue(e.target.value);
                      onChange(e.target.value);
                    }}
                  >
                    <option value=""> Select By Status </option>
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="onDelivery">onDelivery</option>
                    <option value="Deliverd">Deliverd</option>
                    <option value="Refused">Refused</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
