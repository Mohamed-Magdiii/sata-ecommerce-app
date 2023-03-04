import React from "react";

const ProductsSearch = ({ onClick, onChange, onButtonClick  }) => {
  return (
    <>
      <div className="input-group ">
        <input
          type="search"
          className="form-control rounded col-3"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) => onChange(e)}
        />
        <button
          type="button"
          className="btn btn-outline-primary mx-1"
          onClick={onClick}
        >
          search
        </button> 
      <button
        type="button"
        className="btn btn-dark btn-elevate mx-1"
        onClick={onButtonClick}
      >
        Reset
      </button>
    </div>
    </>
  );
};

export default ProductsSearch;
