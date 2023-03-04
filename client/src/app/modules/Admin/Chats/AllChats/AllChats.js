import React, { useEffect, useState } from "react";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { useSelector, useDispatch } from "react-redux";
import { FetchCustomers } from "../../../actions/customers/customersActions";
import { BeatLoader } from "react-spinners";
import Chat from "./Chat";
import "./chat.css";

const AllChats = () => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    dispatch(FetchCustomers());
  }, [dispatch]);
  const data = useSelector((state) => state.users);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    return (
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        <div className="d-flex flex-column-fluid">
          <div className="container">
            <div className="d-flex flex-row">
              <div
                className="flex-row-auto offcanvas-mobile w-350px w-xl-400px offcanvas-mobile-on"
                id="kt_chat_aside"
              >
                <div className="card card-custom">
                  <div className="card-body">
                    <div className="input-group input-group-solid">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <span className="svg-icon svg-icon-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path
                                  d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  opacity="0.3"
                                ></path>
                                <path
                                  d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control py-4 h-auto"
                        placeholder="Email"
                      />
                    </div>
                    <div
                      className="mt-7 scroll scroll-pull"
                      style={{ height: "470px", overflow: "auto" }}
                    >
                      {data &&
                        data.users.map((u) => (
                          <div
                            key={u._id}
                            className="d-flex align-items-center justify-content-between mb-5"
                          >
                            <div className="d-flex align-items-center">
                              <div className="symbol symbol-circle symbol-50 mr-3">
                                <img
                                  alt="Pic"
                                  src={
                                    u.image !== ""
                                      ? `${process.env.REACT_APP_API_URL}/${u.image}`
                                      : `${toAbsoluteUrl(
                                          "/media/users/blank.png"
                                        )}`
                                  }
                                />
                              </div>
                              <div
                                className="d-flex flex-column"
                                onClick={() => setSelectedUser(u)}
                              >
                                <span className="text-dark-75 text-hover-primary font-weight-bold font-size-lg">
                                  {u.fullname}
                                </span>
                                <span className="text-muted font-weight-bold font-size-sm">
                                  {u.role}
                                </span>
                              </div>
                            </div>
                            <div className="d-flex flex-column align-items-end invisible">
                              <span className="text-muted font-weight-bold font-size-sm">
                                7 hrs
                              </span>
                              <span className="label label-sm label-success">
                                4
                              </span>
                            </div>
                          </div>
                        ))}
                      <div
                        className="ps__rail-x"
                        style={{ left: "0px", bottom: "0px" }}
                      >
                        <div
                          className="ps__thumb-x"
                          tabIndex="0"
                          style={{ left: "0px", width: "0px" }}
                        ></div>
                      </div>
                      <div
                        className="ps__rail-y"
                        style={{ top: "0px", height: "111px", right: "-2px" }}
                      >
                        <div
                          className="ps__thumb-y"
                          tabIndex="0"
                          style={{
                            top: "0px",
                            height: "40px",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {selectedUser && <Chat userInfo={selectedUser} />}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AllChats;
