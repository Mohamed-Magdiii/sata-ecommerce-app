import React, { useState } from "react";
import { BeatLoader } from "react-spinners";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { useGetMessageBetween } from "../shared/axiosFunctios";
import { useSelector } from "react-redux";
import ReactTimeAgo from "react-time-ago";
import { useSendMessage } from "../shared/axiosFunctios";

const Chat = ({ userInfo }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [message, setMessage] = useState("");
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading, isError, error } = useGetMessageBetween(
    userInfo._id
  );
  const { mutate } = useSendMessage();
  const onSubmit = (e) => {
    e.preventDefault();
    mutate({ id: userInfo._id, text: message });
    setMessage("");
  };
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    return (
      <>
        <div className="offcanvas-mobile-overlay"></div>
        <div className="flex-row-fluid ml-lg-8" id="kt_chat_content">
          <div className="card card-custom">
            <div className="card-header align-items-center px-4 py-3">
              <div className="text-left flex-grow-1">
                <button
                  type="button"
                  className="btn btn-clean btn-sm btn-icon btn-icon-md d-lg-none"
                  id="kt_app_chat_toggle"
                >
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
                          d="M18,2 L20,2 C21.6568542,2 23,3.34314575 23,5 L23,19 C23,20.6568542 21.6568542,22 20,22 L18,22 L18,2 Z"
                          fill="#000000"
                          opacity="0.3"
                        ></path>
                        <path
                          d="M5,2 L17,2 C18.6568542,2 20,3.34314575 20,5 L20,19 C20,20.6568542 18.6568542,22 17,22 L5,22 C4.44771525,22 4,21.5522847 4,21 L4,3 C4,2.44771525 4.44771525,2 5,2 Z M12,11 C13.1045695,11 14,10.1045695 14,9 C14,7.8954305 13.1045695,7 12,7 C10.8954305,7 10,7.8954305 10,9 C10,10.1045695 10.8954305,11 12,11 Z M7.00036205,16.4995035 C6.98863236,16.6619875 7.26484009,17 7.4041679,17 C11.463736,17 14.5228466,17 16.5815,17 C16.9988413,17 17.0053266,16.6221713 16.9988413,16.5 C16.8360465,13.4332455 14.6506758,12 11.9907452,12 C9.36772908,12 7.21569918,13.5165724 7.00036205,16.4995035 Z"
                          fill="#000000"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </button>
                <div className="dropdown dropdown-inline">
                  <button
                    type="button"
                    className="btn btn-clean btn-sm btn-icon btn-icon-md"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={() => setIsOpened(!isOpened)}
                  >
                    <i className="ki ki-bold-more-hor icon-md"></i>
                  </button>
                  <div
                    className="dropdown-menu p-0 m-0 dropdown-menu-left dropdown-menu-md"
                    style={{ display: isOpened ? "block" : "none" }}
                  >
                    <ul className="navi navi-hover py-5">
                      <li className="navi-item">
                        <span className="navi-link">
                          <span className="navi-icon">
                            <i className="flaticon2-drop"></i>
                          </span>
                          <span className="navi-text">New Group</span>
                        </span>
                      </li>
                      <li className="navi-item">
                        <span className="navi-link">
                          <span className="navi-icon">
                            <i className="flaticon2-list-3"></i>
                          </span>
                          <span className="navi-text">Contacts</span>
                        </span>
                      </li>
                      <li className="navi-item">
                        <span className="navi-link">
                          <span className="navi-icon">
                            <i className="flaticon2-rocket-1"></i>
                          </span>
                          <span className="navi-text">Groups</span>
                          <span className="navi-link-badge">
                            <span className="label label-light-primary label-inline font-weight-bold">
                              new
                            </span>
                          </span>
                        </span>
                      </li>
                      <li className="navi-item">
                        <span className="navi-link">
                          <span className="navi-icon">
                            <i className="flaticon2-bell-2"></i>
                          </span>
                          <span className="navi-text">Calls</span>
                        </span>
                      </li>
                      <li className="navi-item">
                        <span className="navi-link">
                          <span className="navi-icon">
                            <i className="flaticon2-gear"></i>
                          </span>
                          <span className="navi-text">Settings</span>
                        </span>
                      </li>
                      <li className="navi-separator my-3"></li>
                      <li className="navi-item">
                        <span className="navi-link">
                          <span className="navi-icon">
                            <i className="flaticon2-magnifier-tool"></i>
                          </span>
                          <span className="navi-text">Help</span>
                        </span>
                      </li>
                      <li className="navi-item">
                        <span className="navi-link">
                          <span className="navi-icon">
                            <i className="flaticon2-bell-2"></i>
                          </span>
                          <span className="navi-text">Privacy</span>
                          <span className="navi-link-badge">
                            <span className="label label-light-danger label-rounded font-weight-bold">
                              5
                            </span>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center flex-grow-1">
                <div className="text-dark-75 font-weight-bold font-size-h5">
                  {userInfo.fullname}
                </div>
                <div>
                  <span
                    className={`label label-sm label-dot mr-2 ${
                      userInfo.online ? "label-success" : "label-info"
                    }`}
                  ></span>
                  <span className="font-weight-bold text-muted font-size-sm">
                    {userInfo.online ? "Active" : "Offline"}
                  </span>
                </div>
              </div>
              <div className="text-right flex-grow-1">
                <div className="dropdown dropdown-inline">
                  <button
                    type="button"
                    className="btn btn-clean btn-sm btn-icon btn-icon-md"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
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
                          <polygon points="0 0 24 0 24 24 0 24"></polygon>
                          <path
                            d="M18,8 L16,8 C15.4477153,8 15,7.55228475 15,7 C15,6.44771525 15.4477153,6 16,6 L18,6 L18,4 C18,3.44771525 18.4477153,3 19,3 C19.5522847,3 20,3.44771525 20,4 L20,6 L22,6 C22.5522847,6 23,6.44771525 23,7 C23,7.55228475 22.5522847,8 22,8 L20,8 L20,10 C20,10.5522847 19.5522847,11 19,11 C18.4477153,11 18,10.5522847 18,10 L18,8 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                            fill="#000000"
                            fillRule="nonzero"
                            opacity="0.3"
                          ></path>
                          <path
                            d="M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                            fill="#000000"
                            fillRule="nonzero"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </button>
                  <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-md">
                    <ul className="navi navi-hover py-5">
                      <li className="navi-item">
                        <span className="navi-link">
                          <span className="navi-icon">
                            <i className="flaticon2-drop"></i>
                          </span>
                          <span className="navi-text">New Group</span>
                        </span>
                      </li>
                      <li className="navi-item">
                        <span className="navi-link">
                          <span className="navi-icon">
                            <i className="flaticon2-list-3"></i>
                          </span>
                          <span className="navi-text">Contacts</span>
                        </span>
                      </li>
                      <li className="navi-item">
                        <span className="navi-link">
                          <span className="navi-icon">
                            <i className="flaticon2-rocket-1"></i>
                          </span>
                          <span className="navi-text">Groups</span>
                          <span className="navi-link-badge">
                            <span className="label label-light-primary label-inline font-weight-bold">
                              new
                            </span>
                          </span>
                        </span>
                      </li>
                      <li className="navi-item">
                        <span className="navi-link">
                          <span className="navi-icon">
                            <i className="flaticon2-bell-2"></i>
                          </span>
                          <span className="navi-text">Calls</span>
                        </span>
                      </li>
                      <li className="navi-item">
                        <span className="navi-link">
                          <span className="navi-icon">
                            <i className="flaticon2-gear"></i>
                          </span>
                          <span className="navi-text">Settings</span>
                        </span>
                      </li>
                      <li className="navi-separator my-3"></li>
                      <li className="navi-item">
                        <span className="navi-link">
                          <span className="navi-icon">
                            <i className="flaticon2-magnifier-tool"></i>
                          </span>
                          <span className="navi-text">Help</span>
                        </span>
                      </li>
                      <li className="navi-item">
                        <span className="navi-link">
                          <span className="navi-icon">
                            <i className="flaticon2-bell-2"></i>
                          </span>
                          <span className="navi-text">Privacy</span>
                          <span className="navi-link-badge">
                            <span className="label label-light-danger label-rounded font-weight-bold">
                              5
                            </span>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div
                className="scroll scroll-pull"
                data-mobile-height="350"
                style={{ height: "310px", overflow: "auto" }}
              >
                <div className="messages">
                  {data?.data.map((m) => {
                    let flag = m.conversationId.sender._id !== user._id;
                    return (
                      <div
                        key={m._id}
                        className={`d-flex flex-column mb-5 ${
                          flag ? "align-items-start" : "align-items-end"
                        }`}
                      >
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-circle symbol-40 mr-3">
                            <img
                              alt="Pic"
                              src={`${
                                m.conversationId.sender.image === ""
                                  ? toAbsoluteUrl("/media/users/blank.png")
                                  : `${process.env.REACT_APP_API_URL}/${m.conversationId.sender.image}`
                              }`}
                            />
                          </div>
                          <div>
                            <span
                              className={` text-dark-75 font-weight-bold font-size-h6 mr-2 ${
                                flag
                                  ? "text-hover-primary"
                                  : "text-hover-success"
                              }`}
                            >
                              {!flag ? "You" : m.conversationId.sender.fullname}
                            </span>
                            <span className="text-muted font-size-sm">
                              <ReactTimeAgo
                                date={Date.parse(m.createdAt)}
                                locale="en-US"
                                className="text-muted"
                              />
                            </span>
                          </div>
                        </div>
                        <div
                          className={`mt-2 rounded p-5 text-dark-50 font-weight-bold font-size-lg text-left max-w-400px ${
                            flag ? "bg-light-primary" : "bg-light-success"
                          }`}
                        >
                          {m.text}
                        </div>
                      </div>
                    );
                  })}
                </div>
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
                  style={{ top: "0px", height: "310px", right: "-2px" }}
                >
                  <div
                    className="ps__thumb-y"
                    tabIndex="0"
                    style={{ top: "0px", height: "91px" }}
                  ></div>
                </div>
              </div>
            </div>
            <form
              className="card-footer align-items-center"
              onSubmit={onSubmit}
            >
              <textarea
                className="form-control border-0 p-0"
                rows="2"
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="d-flex align-items-center justify-content-between mt-5">
                <div className="mr-3">
                  <span className="btn btn-clean btn-icon btn-md mr-1">
                    <i className="flaticon2-photograph icon-lg"></i>
                  </span>
                  <span className="btn btn-clean btn-icon btn-md">
                    <i className="flaticon2-photo-camera icon-lg"></i>
                  </span>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-md text-uppercase font-weight-bold chat-send py-2 px-6"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
};

export default Chat;
