import React from "react";
import { FormattedMessage } from "react-intl";
const TableHeader = ({ headerGroups }) => {
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
              {...column.getHeaderProps()}
              className={`datatable-cell  ${
                i !== 0
                  ? "datatable-cell-sort"
                  : "datatable-cell-center datatable-cell-check"
              }`}
            >
              <span
                style={
                  i === 0
                    ? { width: "20px" }
                    : i !== 7
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
                    id={`TABLE.DELIVERY.ALL.ORDER.ITEMS.${column.render(
                      "Header"
                    )}`}
                  />
                )}
              </span>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
