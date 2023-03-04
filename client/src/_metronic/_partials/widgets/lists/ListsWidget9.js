/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useGetUserNotification } from "./functions/axiosFunctions";
import Moment from "react-moment";
import Displang from "../../../../app/utils/HEADERS";
export function ListsWidget9({ className }) {
  const { data } = useGetUserNotification();
  return (
    <>
      <div className={`card card-custom  ${className}`}>
        <div className="card-header align-items-center border-0 mt-4">
          <h3 className="card-title align-items-start flex-column">
            <span className="font-weight-bolder text-dark">My Activity</span>
            <span className="text-muted mt-3 font-weight-bold font-size-sm">
              Last 8 Activities
            </span>
          </h3>
        </div>
        <div className="card-body pt-4">
          <div className="timeline timeline-6 mt-3">
            {data?.data &&
              data?.data.Notifications.slice(0, 8).map((n, i) => (
                <div className="timeline-item align-items-start" key={n._id}>
                  <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
                    <Moment date={n.createdAt} format="hh:mm" trim />
                  </div>

                  <div className="timeline-badge">
                    <i
                      className={`fa fa-genderless icon-xl text-${
                        i % 4 === 0
                          ? "warning"
                          : i % 4 === 1
                          ? "success"
                          : i % 4 === 2
                          ? "info"
                          : "danger"
                      }`}
                    ></i>
                  </div>

                  <div className="timeline-content d-flex">
                    <span className="font-weight-bolder text-dark-75 pl-3 font-size-lg">
                      {n.description
                        ? Displang
                          ? n.description.ar
                          : n.description.en
                        : ""}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
