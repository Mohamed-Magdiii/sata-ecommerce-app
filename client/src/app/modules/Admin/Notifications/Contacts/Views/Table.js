import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import { Columns } from "./Columns";
import TableHeaders from "./TableHeaders";
import Moment from "react-moment";
import Pagination from "../../../shared/Pagination";
import GlobalFilter from "./GlobalFilter";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hookDeleteById } from "../../../../actions/contact/contactActions";
import { CancelRequest } from "../../../shared/CancelRequest";
const Table = ({ contacts }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useMemo(() => contacts, [contacts]);
  const columns = useMemo(() => Columns, []);
  const {
    getTableProps,
    headerGroups,
    previousPage,
    nextPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    setPageSize,
    pageOptions,
    pageCount,
    prepareRow,
    page,
    getTableBodyProps,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);
  return (
    <div className="card-body">
      <GlobalFilter filter={state.globalFilter} setFilter={setGlobalFilter} />
      <div
        className="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded"
        id="kt_datatable"
      >
        <table className="datatable-table d-block" {...getTableProps()}>
          <TableHeaders headerGroups={headerGroups} />
          <tbody className="datatable-body" {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="datatable-row"
                  style={{ left: "0px" }}
                >
                  {row.cells.map((cell, i) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className={`datatable-cell ${i === 0 &&
                          "datatable-cell-center datatable-cell-check"}`}
                      >
                        <span
                          style={
                            i === 0
                              ? { width: "20px" }
                              : i !== 7
                              ? { width: "137px" }
                              : {
                                  overflow: "visible",
                                  position: "relative",
                                  width: "125px",
                                }
                          }
                        >
                          {i === 0 ? (
                            <label className="checkbox checkbox-single">
                              <input type="checkbox" value="79" />
                              &nbsp;<span></span>
                            </label>
                          ) : i !== 7 ? (
                            i !== 5 ? (
                              cell.render("Cell")
                            ) : (
                              <Moment format="YYYY/MM/DD">
                                {row.original.createdAt}
                              </Moment>
                            )
                          ) : (
                            <>
                              <span
                                className="btn btn-sm btn-clean btn-icon mr-2"
                                title="Edit details"
                                onClick={() =>
                                  history.push(
                                    `/admin/Notifications/Contacts/update/${row.original._id}`
                                  )
                                }
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
                                onClick={() =>
                                  window.confirm("Are You sure ?")
                                    ? dispatch(hookDeleteById(row.original._id))
                                    : CancelRequest()
                                }
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
                            </>
                          )}
                        </span>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          nextPage={nextPage}
          previousPage={previousPage}
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          state={state}
          gotoPage={gotoPage}
          pageCount={pageCount}
          pageOptions={pageOptions}
          data={data}
          setPageSize={setPageSize}
        />
      </div>
    </div>
  );
};

export default Table;
