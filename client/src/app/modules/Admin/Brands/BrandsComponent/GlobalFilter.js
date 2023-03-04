import React from "react";
const GlobalFilter = ({ filter, setFilter }) => {
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
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
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
