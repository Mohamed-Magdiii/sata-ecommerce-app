import React from "react";
import { useQuery } from "react-query";
import { getAllOnlineUsers } from "../shared/axiosFunction";
import Shared from "../shared/Shared";
import { BeatLoader } from "react-spinners";

const OnlineCustomers = ({ match }) => {
  const { isLoading, isError, error, data } = useQuery(
    ["get-all-online-users", match.params.role],
    getAllOnlineUsers
  );
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return <Shared data={data?.data} />;
};

export default OnlineCustomers;
