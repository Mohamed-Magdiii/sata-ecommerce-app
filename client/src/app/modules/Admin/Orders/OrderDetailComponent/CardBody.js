import React, { useMemo } from "react";
import { useTable } from "react-table";
import CardFooter from "./CardFooter";
import { COLUMNS } from "./COLUMNS";
import { FormattedMessage } from "react-intl";

const CardBody = ({ orderDetail }) => {
  const data = useMemo(() => orderDetail, [orderDetail]);
  const columns = useMemo(() => COLUMNS, []);
  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    rows,
    prepareRow,
  } = useTable({ columns, data });
  return (
    <>
      <div className="row justify-content-center py-8 px-8 py-md-10 px-md-0">
        <div className="col-md-10">
          <div className="table-responsive">
            <table className="table" {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column, i) => (
                      <th
                        className={`${i !== 0 &&
                          "text-right"} font-weight-bold text-muted text-uppercase ${
                          i === 0 ? "pl-0 " : i === 4 && "pr-0"
                        }`}
                        {...column.getHeaderProps()}
                      >
                        <FormattedMessage
                          id={`TABLE.ORDERS.${column.render("Header")}`}
                        />
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr className="font-weight-boldest" {...row.getRowProps()}>
                      {row.cells.map((cell, i) => (
                        <td
                          className={`${i === 5 && "text-primary"} ${
                            i === 0
                              ? "border-0 pl-0 pt-7 d-flex align-items-center"
                              : "text-right pt-7 align-middle"
                          }`}
                          {...cell.getCellProps()}
                        >
                          {i === 0 ? (
                            <div className="symbol symbol-40 flex-shrink-0 mr-4 bg-light">
                              <div
                                className="symbol-label"
                                style={{
                                  backgroundImage: `url('${
                                    process.env.REACT_APP_API_URL
                                  }/${cell.render("Cell").props.value}')`,
                                }}
                              ></div>
                            </div>
                          ) : i === 5 ? (
                            `$ ${row.original.quantity *
                              row.original.product.price}`
                          ) : i === 1 ? (
                            localStorage.getItem("i18nConfig") &&
                            JSON.parse(localStorage.getItem("i18nConfig"))
                              .selectedLang === "ar" ? (
                              row.original.product.title.ar
                            ) : (
                              row.original.product.title.en
                            )
                          ) : (
                            cell.render("Cell")
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <CardFooter />
    </>
  );
};

export default CardBody;
