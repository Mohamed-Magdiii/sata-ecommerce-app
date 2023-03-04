import React, { useMemo } from "react";
import FilterColumn from "../../shared/FilterColumn";
import { useGetAllTables } from "../../shared/useTableHook";
import { Columns } from "./Columns";
function CardBody({ comments }) {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => comments, [comments]);
  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    rows,
    prepareRow,
  } = useGetAllTables(columns, data);
  console.log(comments);
  return (
    <div className="card-body">
      <div
        id="kt_datatable_wrapper"
        className="dataTables_wrapper dt-bootstrap4"
      >
        <div className="row">
          <div className="col-sm-12">
            <table
              {...getTableProps()}
              className="table table-separate table-head-custom table-checkable dataTable dtr-inline"
              id="kt_datatable"
              role="grid"
              aria-describedby="kt_datatable_info"
              style={{ width: "1234px" }}
            >
              <thead>
                {headerGroups.map((headerGroup) => {
                  return (
                    <tr role="row" {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column, i) => (
                        <th
                          className={`sorting ${
                            i === 0
                              ? "sorting_asc"
                              : i === 6 && "sorting_disabled"
                          }`}
                          style={
                            i === 0 || i === 2
                              ? { width: "60px" }
                              : { width: "150px" }
                          }
                          {...column.getHeaderProps()}
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  );
                })}
                <FilterColumn length={headerGroups[0].headers} />
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row, j) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell, i) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {i === 3 ? (
                              <span
                                className={`label label-lg font-weight-bold label-inline ${
                                  row.original.status === "Pending"
                                    ? "label-light-primary"
                                    : row.original.status === "Confirmed"
                                    ? "label-light-success"
                                    : "label-light-danger"
                                }`}
                              >
                                {cell.render("Cell")}
                              </span>
                            ) : i === 8 ? (
                              <span
                                style={{
                                  overflow: "visible",
                                  position: "relative",
                                  width: "125px",
                                  marginRight: "15px",
                                }}
                              >
                                <div className="dropdown dropdown-inline">
                                  <div className="dropdown dropdown-inline">
                                    <span
                                      className="btn btn-sm btn-clean btn-icon mr-2"
                                      data-toggle="dropdown"
                                      title="Show details"
                                    >
                                      <span className="svg-icon svg-icon-md">
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
                                            />
                                            <path
                                              d="M3,12 C3,12 5.45454545,6 12,6 C16.9090909,6 21,12 21,12 C21,12 16.9090909,18 12,18 C5.45454545,18 3,12 3,12 Z"
                                              fill="#000000"
                                              fillRule="nonzero"
                                              opacity="0.8"
                                            />
                                            <path
                                              d="M12,15 C10.3431458,15 9,13.6568542 9,12 C9,10.3431458 10.3431458,9 12,9 C13.6568542,9 15,10.3431458 15,12 C15,13.6568542 13.6568542,15 12,15 Z"
                                              fill="#000000"
                                              opacity="0.8"
                                            />
                                          </g>
                                        </svg>
                                      </span>
                                    </span>
                                  </div>
                                  <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                    <ul className="navi flex-column navi-hover py-2">
                                      <li className="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">
                                        {" "}
                                        Choose an action:{" "}
                                      </li>
                                      <li className="navi-item">
                                        {" "}
                                        <span className="navi-link">
                                          {" "}
                                          <span className="navi-icon">
                                            <i className="la la-print"></i>
                                          </span>{" "}
                                          <span className="navi-text">
                                            Print
                                          </span>{" "}
                                        </span>
                                      </li>
                                      <li className="navi-item">
                                        {" "}
                                        <span className="navi-link">
                                          {" "}
                                          <span className="navi-icon">
                                            <i className="la la-copy"></i>
                                          </span>{" "}
                                          <span className="navi-text">
                                            Copy
                                          </span>{" "}
                                        </span>
                                      </li>
                                      <li className="navi-item">
                                        {" "}
                                        <span className="navi-link">
                                          {" "}
                                          <span className="navi-icon">
                                            <i className="la la-file-excel-o"></i>
                                          </span>{" "}
                                          <span className="navi-text">
                                            Excel
                                          </span>{" "}
                                        </span>
                                      </li>
                                      <li className="navi-item">
                                        {" "}
                                        <span className="navi-link">
                                          {" "}
                                          <span className="navi-icon">
                                            <i className="la la-file-text-o"></i>
                                          </span>{" "}
                                          <span className="navi-text">CSV</span>{" "}
                                        </span>
                                      </li>
                                      <li className="navi-item">
                                        {" "}
                                        <span className="navi-link">
                                          {" "}
                                          <span className="navi-icon">
                                            <i className="la la-file-pdf-o"></i>
                                          </span>
                                          <span className="navi-text">PDF</span>{" "}
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <span
                                  className="btn btn-sm btn-clean btn-icon mr-2"
                                  title="Edit details"
                                >
                                  <span className="svg-icon svg-icon-md">
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
                                    </svg>
                                  </span>
                                </span>
                                <span
                                  className="btn btn-sm btn-clean btn-icon"
                                  title="Delete"
                                >
                                  <span className="svg-icon svg-icon-md">
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
                                    </svg>
                                  </span>
                                </span>
                              </span>
                            ) : (
                              cell.render("Cell")
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="row"> // pagination Component 
            </div> */}
      </div>
    </div>
  );
}

export default CardBody;
