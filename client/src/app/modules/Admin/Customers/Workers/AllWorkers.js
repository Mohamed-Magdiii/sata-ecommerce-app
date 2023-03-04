import React from "react";
import { useGetAllWorkers } from "../shared/axiosFunction";
import { BeatLoader } from "react-spinners";
import TableTopHeader from "../../shared/TableTopHeader";
import CardBody from "../CustomersComponent/CardBody";

function AllWorkers() {
  const { data, isLoading, isError, error } = useGetAllWorkers("worker");
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    return (
      <div className="card card-custom">
        <TableTopHeader
          title={"Including Permissions, ...etc"}
          heading={"All Workers"}
        />
        {data && <CardBody data={data?.data} />}
      </div>
    );
  }
}

export default AllWorkers;
