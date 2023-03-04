import React from "react";
import { useGetNewUsers } from "../shared/axiosFunction";
import Shared from "../shared/Shared";
import { BeatLoader } from "react-spinners";

const Last7Days = ({ match }) => {
  const { data, isLoading, isError, error } = useGetNewUsers(
    7,
    match.params.role
  );
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return <Shared data={data?.data} />;
};

export default Last7Days;
