import React from "react";
import { FormattedMessage } from "react-intl";
const TableHeader = ({ headerGroups }) => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr className="text-left" {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column, i) => (
            <th
              className={` ${i === 7 && "text-right"} ${(i === 0 || i === 1) &&
                "pl-0"}`}
              style={
                i === 0
                  ? { width: "30px" }
                  : i === 2 || i === 3
                  ? { minWidth: "110px" }
                  : i === 7
                  ? { minWidth: "160px" }
                  : { minWidth: "120px" }
              }
              {...column.getHeaderProps(column.getSortByToggleProps())}
            >
              {i === 0 ? (
                <label className="checkbox checkbox-lg checkbox-inline mr-2">
                  <input type="checkbox" value="1" />
                  <span></span>
                </label>
              ) : (
                <FormattedMessage
                  id={`TABLE.OFFERS.${column.render("Header")}`}
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
