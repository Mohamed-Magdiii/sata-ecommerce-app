import React from "react";
import { BeatLoader } from "react-spinners";
import { useGetNotSignedIn } from "../shared/axiosFunction";
import Shared from "../shared/Shared";
function NotSignedIn({ match }) {
  const { data, isLoading, isError, error } = useGetNotSignedIn(
    match.params.days,
    match.params.role
  );
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else return <Shared data={data?.data} />;
}

export default NotSignedIn;
