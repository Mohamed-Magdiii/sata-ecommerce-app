import React from "react";

const FilterColumn = ({ length }) => {
  return (
    <tr className="filter">
      <span style={{ width: "20px" }}>
        <label className="checkbox checkbox-single checkbox-all">
          <input type="checkbox" />
          &nbsp;<span></span>
        </label>
      </span>
      {length.map((_l, i) => (
        <th
          key={i}
          className={`${i === 0 || (i === length.length - 1 && "d-none")}`}
        >
          <input
            type="text"
            className="form-control form-control-sm form-filter datatable-input"
          />
        </th>
      ))}
      <th>
        <button className="btn btn-primary kt-btn btn-sm font-weight-bold kt-btn--icon d-block">
          <span>
            <span>Search</span>
          </span>
        </button>
      </th>
    </tr>
  );
};

export default FilterColumn;
