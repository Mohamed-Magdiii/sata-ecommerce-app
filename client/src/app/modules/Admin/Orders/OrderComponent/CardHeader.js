import React from "react";
import { FormattedMessage } from "react-intl";
const CardHeader = ({ headerGroups }) => {
  return (
    <thead className="datatable-head">
      {headerGroups.map((headerGroup) => (
        <tr
          className="datatable-row"
          style={{ left: "0px" }}
          {...headerGroup.getHeaderGroupProps()}
        >
          {headerGroup.headers.map((column, i) => (
            <th
              className={`${
                i === 0
                  ? "datatable-cell-center datatable-cell datatable-cell-check"
                  : "datatable-cell datatable-cell-sort"
              }`}
              {...column.getHeaderProps(column.getSortByToggleProps())}
            >
              {i === 0 ? (
                <span style={{ width: "20px" }}>
                  <label className="checkbox checkbox-single checkbox-all">
                    <input type="checkbox" />
                    &nbsp;<span></span>
                  </label>
                </span>
              ) : (
                <span style={{ width: "137px" }}>
                  <FormattedMessage
                    id={`TABLE.ORDERS.${column.render("Header")}`}
                  />
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </span>
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default CardHeader;
