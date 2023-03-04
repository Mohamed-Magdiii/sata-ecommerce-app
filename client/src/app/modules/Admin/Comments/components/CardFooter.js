import React from "react";

const CardFooter = ({
  nextPage,
  previousPage,
  canNextPage,
  canPreviousPage,
  gotoPage,
  pageCount,
  pageSize,
  setPageSize,
  length,
  pageOptions
}) => {
  return (
    <div className="card card-custom">
      <div className="card-body py-7">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex flex-wrap mr-3">
            <button
              className="btn btn-icon btn-sm btn-light-primary mr-2 my-1"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <i className="ki ki-bold-double-arrow-back icon-xs"></i>
            </button>
            <button
              className="btn btn-icon btn-sm btn-light-primary mr-2 my-1"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <i className="ki ki-bold-arrow-back icon-xs"></i>
            </button>
            {pageOptions.map((p) => (
                  <span
                    key={p}
                    className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1"
                    onClick={() => gotoPage(p)}
                  >
                    {p + 1}
                  </span>
                ))}
            <button
              className="btn btn-icon btn-sm btn-light-primary mr-2 my-1"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <i className="ki ki-bold-arrow-next icon-xs"></i>
            </button>
            <button
              className="btn btn-icon btn-sm btn-light-primary mr-2 my-1"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <i className="ki ki-bold-double-arrow-next icon-xs"></i>
            </button>
          </div>
          <div className="d-flex align-items-center">
            <select
              className="form-control form-control-sm text-primary font-weight-bold mr-4 border-0 bg-light-primary"
              style={{ width: "75px" }}
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 20, 30, 50, 100].map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
            <span className="text-muted">
              Displaying {pageSize} of {length} records
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
