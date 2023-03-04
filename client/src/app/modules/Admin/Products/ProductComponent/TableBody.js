import React from "react";
import { useHistory } from "react-router-dom";
import DispLang from "../../shared/DispLang";
const TableBody = ({ prepareRow, page, getTableBodyProps }) => {
  const history = useHistory();
  return (
    <tbody {...getTableBodyProps()}>
      {page.map((row) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell, i) => (
              <td {...cell.getCellProps()}>
                {i === 0 ? (
                  <label className="checkbox checkbox-single">
                    <input type="checkbox" value="" className="checkable" />
                    <span></span>
                  </label>
                ) : i === 8 ? (
                  <>
                    <span
                      className={`label label-dot mr-2 ${
                        cell.render("Cell").props.value === true
                          ? "label-success"
                          : "label-danger"
                      }`}
                    ></span>
                    <span
                      className={`font-weight-bold ${
                        cell.render("Cell").props.value === true
                          ? "text-success"
                          : "text-danger"
                      }`}
                    >
                      {cell.render("Cell")}
                    </span>
                  </>
                ) : i === 11 ? (
                  <>
                    <div
                      className="dropdown dropdown-inline"
                      onClick={() => {
                        history.push(
                          `/admin/products-page/product-detail/${row.original._id}`
                        );
                      }}
                    >
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
                              <rect x="0" y="0" width="24" height="24" />
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
                    <span
                      className="btn btn-sm btn-clean btn-icon mr-2"
                      title="Edit details"
                      onClick={() => {
                        history.push(
                          `/admin/products-page/update/${row.original._id}`
                        );
                        window.location.reload();
                      }}
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
                            <rect x="0" y="0" width="24" height="24"></rect>
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
                      className="btn btn-sm btn-clean btn-icon mr-2"
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
                            <rect x="0" y="0" width="24" height="24"></rect>
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
                ) : i === 2 ? (
                  <DispLang title={row.original.title} />
                ) : i === 4 ? (
                  <DispLang title={row.original.description} />
                ) : (
                  cell.render("Cell")
                )}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
