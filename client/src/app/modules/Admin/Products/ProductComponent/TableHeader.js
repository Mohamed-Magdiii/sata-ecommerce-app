import React from "react";
import { FormattedMessage } from "react-intl";
const TableHeader = ({ headerGroups }) => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr role="row" {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column, i) => (
            <th
              className="dt-left sorting_disabled text-muted text-uppercase cursor-pointer"
              {...column.getHeaderProps(column.getSortByToggleProps())}
            >
              {i === 0 ? (
                <label className="checkbox checkbox-single">
                  <input type="checkbox" value="" className="group-checkable" />
                  <span></span>
                </label>
              ) : (
                <FormattedMessage
                  id={`TABLE.PRODUCT.${column.render("Header")}`}
                />
              )}
              <span>
                {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
              </span>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
