import React from "react";
import { useSelector } from "react-redux";
import { useGetReports } from "./functions/axiosFunctions";
import {
  MixedWidget1,
  ListsWidget9,
  StatsWidget11,
  StatsWidget12,
} from "../widgets";
import { BeatLoader } from "react-spinners";

export function Demo1Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading, isError, error } = useGetReports(
    user.roles[0] === 2 ? "vendor" : "admin"
  );
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else
    return (
      <>
        <div className="row">
          <div className="col-lg-6 col-xxl-4">
            {data?.data && (
              <MixedWidget1
                className="card-stretch gutter-b"
                data={
                  user.roles[0] === 2
                    ? data?.data.data[0].vendData
                    : data?.data.data[0].vendorReports
                }
                isVendor={user.roles[0] === 2}
              />
            )}
          </div>
          <div className="col-lg-6 col-xxl-4">
            <ListsWidget9 className="card-stretch gutter-b" />
          </div>
          <div className="col-lg-6 col-xxl-4">
            {data?.data && (
              <StatsWidget11
                className="card-stretch card-stretch-half gutter-b"
                symbolShape="circle"
                baseColor="success"
                data={data?.data.data[2].mostBought}
              />
            )}
            {data?.data && (
              <StatsWidget12
                className="card-stretch card-stretch-half gutter-b"
                data={data?.data.data[1].mostVisited}
              />
            )}
          </div>
        </div>
      </>
    );
}
