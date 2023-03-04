import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useAsyncDebounce } from "react-table";
import { useHistory } from "react-router-dom";
function GlobalFilter({ filter, setFilter, id }) {
  const [value, setValue] = useState(filter);
  const history = useHistory();
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
            <div
              className="col-lg-3 col-xl-4 mt-5 mt-lg-0"
              onClick={() =>
                history.push(`/admin/categories/sub-category/add/${id}`)
              }
            >
              <span className="btn btn-primary px-6 font-weight-bold">
                <FormattedMessage id="BUTTON.ADD" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalFilter;
