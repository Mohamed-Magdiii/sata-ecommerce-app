import React from "react";
import { useGetNewUsers } from "../shared/axiosFunction";
import Shared from "../shared/Shared";
import { BeatLoader } from "react-spinners";

const LastMonth = ({ match }) => {
  const { data, isLoading, isError, error } = useGetNewUsers(
    30,
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

export default LastMonth;
