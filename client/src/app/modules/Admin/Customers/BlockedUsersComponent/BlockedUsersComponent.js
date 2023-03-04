import React from "react";
import Shared from "../shared/Shared";
import { useGetAllBlockesUsers } from "../shared/axiosFunction";
import { BeatLoader } from "react-spinners";

function BlockedUsersComponent({ match }) {
  const { data, isLoading, isError, error } = useGetAllBlockesUsers(
    match.params.role
  );
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return <Shared data={data?.data} />;
}

export default BlockedUsersComponent;
