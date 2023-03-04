import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
const GlobalFilter = ({ filter, setFilter }) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFilter;
