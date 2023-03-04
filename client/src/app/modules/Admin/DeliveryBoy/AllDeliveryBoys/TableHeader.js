import React from "react";
import { FormattedMessage } from "react-intl";

function TableHeader({ headerGroups }) {
  return (
    <thead className="datatable-head">
      {headerGroups.map((headerGroup) => (
        <tr className="datatable-row" {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column, i) => (
            <th
              className={` ${i === 0 &&
                "datatable-cell-center "} datatable-cell datatable-cell-sort `}
              {...column.getHeaderProps(column.getSortByToggleProps())}
            >
              <span
                style={
                  i === 0 || i === 1
                    ? { width: "30px" }
                    : i === 7
                    ? { width: "130px" }
                    : { width: "137px" }
                }
              >
                {i !== 0 ? (
                  <FormattedMessage
                    id={`TABLE.DELIVERY.${column.render("Header")}`}
                  />
                ) : (
                  " "
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

export default TableHeader;
