import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { COLUMNS } from "./COLUMNS";
import { useHistory } from "react-router-dom";
import GlobalFilter from "./GlobalFilter";
import CardHeader from "./CardHeader";
const Table = ({ customers }) => {
  const data = useMemo(() => customers, [customers]);
  const columns = useMemo(() => COLUMNS, []);
  const history = useHistory();
  const {
    getTableProps,
    headerGroups,
    prepareRow,
    page,
    previousPage,
    nextPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    setPageSize,
    pageOptions,
    pageCount,
    getTableBodyProps,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);
  return (
    <>
      <GlobalFilter filter={state.globalFilter} setFilter={setGlobalFilter} />
      <div
        className="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded"
        id="kt_datatable"
      >
        <table
          {...getTableProps()}
          className="datatable-table"
          style={{ display: "block" }}
        >
          <CardHeader headerGroups={headerGroups} />
          <tbody {...getTableBodyProps()} className="datatable-body">
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  className="datatable-row"
                  style={{ left: "0px" }}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell, i) => (
                    <td
                      className={`datatable-cell ${i === 0 &&
                        "datatable-cell-center datatable-cell-check"}`}
                      {...cell.getCellProps()}
                    >
                      {i === 0 ? (
                        <span style={{ width: "20px" }}>
                          <label className="checkbox checkbox-single">
                            <input type="checkbox" value="2" />
                            &nbsp;<span></span>
                          </label>
                        </span>
                      ) : (
                        <span style={{ width: "137px" }}>
                          {i === 5 ? (
                            <span
                              className={`label font-weight-bold label-lg label-inline ${
                                row.original.status === "Confirmed"
                                  ? "label-light-success"
                                  : row.original.status === "Blocked"
                                  ? "label-light-danger"
                                  : "label-light-primary"
                              }`}
                            >
                              {cell.render("Cell")}
                            </span>
                          ) : i === 6 ? (
                            <>
                              <span
                                className={`label ${
                                  row.original.role === "admin"
                                    ? "label-danger"
                                    : row.original.role === "vendor"
                                    ? "label-warning"
                                    : row.original.role === "user"
                                    ? "label-success"
                                    : row.original.role === "worker"
                                    ? "label-info"
                                    : "label-dark"
                                } label-dot mr-2`}
                              ></span>
                              <span
                                className={`font-weight-bold ${
                                  row.original.role === "admin"
                                    ? "text-danger"
                                    : row.original.role === "vendor"
                                    ? "text-warning"
                                    : row.original.role === "user"
                                    ? "text-success"
                                    : row.original.role === "worker"
                                    ? "text-info"
                                    : "text-dark"
                                }`}
                              >
                                {cell.render("Cell")}
                              </span>
                            </>
                          ) : i === 7 ? (
                            <span
                              style={{
                                overflow: "visible",
                                position: "relative",
                                width: "125px",
                              }}
                            >
                              <div className="dropdown dropdown-inline">
                                {" "}
                                <span
                                  className="btn btn-sm btn-clean btn-icon mr-2"
                                  data-toggle="dropdown"
                                >
                                  {" "}
                                  <span className="svg-icon svg-icon-md">
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      width="24px"
                                      height="24px"
                                      viewBox="0 0 24 24"
                                      version="1.1"
                                    >
                                      <g
                                        stroke="none"
                                        strokeWidth="1"
                                        fill="none"
                                        fillRule="evenodd"
                                      >
                                        <rect
                                          x="0"
                                          y="0"
                                          width="24"
                                          height="24"
                                        ></rect>
                                        <path
                                          d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
                                          fill="#000000"
                                        ></path>
                                      </g>
                                    </svg>{" "}
                                  </span>{" "}
                                </span>
                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                  <ul className="navi flex-column navi-hover py-2">
                                    <li className="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">
                                      Choose an action:{" "}
                                    </li>
                                    <li className="navi-item cursor-pointer">
                                      {" "}
                                      <span className="navi-link">
                                        {" "}
                                        <span className="navi-icon">
                                          <i className="la la-print"></i>
                                        </span>{" "}
                                        <span className="navi-text">Print</span>{" "}
                                      </span>{" "}
                                    </li>
                                    <li className="navi-item cursor-pointer">
                                      {" "}
                                      <span className="navi-link">
                                        {" "}
                                        <span className="navi-icon">
                                          <i className="la la-copy"></i>
                                        </span>{" "}
                                        <span className="navi-text">Copy</span>{" "}
                                      </span>{" "}
                                    </li>
                                    <li className="navi-item cursor-pointer">
                                      {" "}
                                      <span className="navi-link">
                                        {" "}
                                        <span className="navi-icon">
                                          <i className="la la-file-excel-o"></i>
                                        </span>
                                        <span className="navi-text">Excel</span>{" "}
                                      </span>{" "}
                                    </li>
                                    <li className="navi-item cursor-pointer">
                                      {" "}
                                      <span className="navi-link">
                                        {" "}
                                        <span className="navi-icon">
                                          <i className="la la-file-text-o"></i>
                                        </span>{" "}
                                        <span className="navi-text">CSV</span>{" "}
                                      </span>{" "}
                                    </li>
                                    <li className="navi-item cursor-pointer">
                                      {" "}
                                      <span className="navi-link">
                                        {" "}
                                        <span className="navi-icon">
                                          <i className="la la-file-pdf-o"></i>
                                        </span>{" "}
                                        <span className="navi-text">PDF</span>{" "}
                                      </span>{" "}
                                    </li>
                                  </ul>
                                </div>
                              </div>{" "}
                              <span
                                className="btn btn-sm btn-clean btn-icon mr-2"
                                title="Edit details"
                                onClick={() =>
                                  history.push(
                                    `/admin/customer-page/edit/${row.original._id}`
                                  )
                                }
                              >
                                {" "}
                                <span className="svg-icon svg-icon-md">
                                  {" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth="1"
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x="0"
                                        y="0"
                                        width="24"
                                        height="24"
                                      ></rect>
                                      <path
                                        d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                                        fill="#000000"
                                        fillRule="nonzero"
                                        transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
                                      ></path>
                                      <rect
                                        fill="#000000"
                                        opacity="0.3"
                                        x="5"
                                        y="20"
                                        width="15"
                                        height="2"
                                        rx="1"
                                      ></rect>
                                    </g>
                                  </svg>{" "}
                                </span>{" "}
                              </span>{" "}
                              <span
                                className="btn btn-sm btn-clean btn-icon"
                                title="Delete"
                              >
                                {" "}
                                <span className="svg-icon svg-icon-md">
                                  {" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                  >
                                    <g
                                      stroke="none"
                                      strokeWidth="1"
                                      fill="none"
                                      fillRule="evenodd"
                                    >
                                      <rect
                                        x="0"
                                        y="0"
                                        width="24"
                                        height="24"
                                      ></rect>
                                      <path
                                        d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                                        fill="#000000"
                                        fillRule="nonzero"
                                      ></path>
                                      <path
                                        d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                                        fill="#000000"
                                        opacity="0.3"
                                      ></path>
                                    </g>
                                  </svg>{" "}
                                </span>{" "}
                              </span>
                            </span>
                          ) : (
                            cell.render("Cell")
                          )}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
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
                  value={state.pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                >
                  {[10, 20, 30, 50, 100].map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                <span className="text-muted">
                  Displaying {state.pageSize} of {customers.length} records
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
