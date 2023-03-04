import React from "react";
import { FormattedMessage } from "react-intl";

function CardHeader({ headerGroups }) {
  return (
    <thead className="datatable-head">
      {headerGroups.map((headerGroup) => (
        <tr
          {...headerGroup.getHeaderGroupProps()}
          className="datatable-row"
          style={{ left: "0px" }}
        >
          {headerGroup.headers.map((column, i) => (
            <th
              {...column.getHeaderProps(column.getSortByToggleProps())}
              className={`datatable-cell ${
                i === 0
                  ? "datatable-cell-center datatable-cell-check"
                  : "datatable-cell-sort"
              }`}
            >
              <span
                style={
                  i === 0
                    ? { width: "20px" }
                    : i !== 8
                    ? { width: "137px" }
                    : { width: "125px" }
                }
              >
                {i === 0 ? (
                  <label className="checkbox checkbox-single checkbox-all">
                    <input type="checkbox" />
                    &nbsp;<span></span>
                  </label>
                ) : (
                  <FormattedMessage
                    id={`TABLE.ORDERS.${column.render("Header")}`}
                  />
                )}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </span>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
}

export default CardHeader;
