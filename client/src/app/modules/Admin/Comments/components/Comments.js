import React from "react";
import { useGetAllRates } from "../shared/axiosFunctions";
import { BeatLoader } from "react-spinners";
import TableTopHeader from "../../shared/TableTopHeader";
import CardBody from "./CardBody";
const Comments = () => {
  const { data, isLoading, isError, error } = useGetAllRates();
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else
    return (
      <div className="card card-custom">
        <TableTopHeader
          heading={"All Comments"}
          title={"Including Customer Comments, ...etc"}
        />
        {data && <CardBody comments={data?.data} />}
      </div>
    );
};

export default Comments;
