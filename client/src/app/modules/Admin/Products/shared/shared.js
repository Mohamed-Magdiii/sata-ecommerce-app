import React from "react";
import CardBody from "../ProductComponent/Table";
const shared = ({ data }) => {
  return (
    <div className="card-body">
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
                    >
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2 my-md-0">
                <div className="d-flex align-items-center">
                  <label className="mr-3 mb-0 d-none d-md-block">Type:</label>

                  <div className="d-flex align-items-center">
                    <select
                      className="form-control form-control-sm text-dark font-weight-bold mr-4 border-0 bg-light"
                      style={{ width: "200px" }}
                    >
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
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
      </div>
      <CardBody products={data} />
    </div>
  );
};

export default shared;
