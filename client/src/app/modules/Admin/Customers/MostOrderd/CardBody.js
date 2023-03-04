import React from "react";
import Table from "./Table";

const CardBody = ({ data }) => {
  return (
    <div className="card-body">
      <Table customers={data} />
    </div>
  );
};

export default CardBody;
