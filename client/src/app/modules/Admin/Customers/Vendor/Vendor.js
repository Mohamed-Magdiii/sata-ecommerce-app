import React from "react";
import { BeatLoader } from "react-spinners";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { useGetAllVendors } from "../shared/axiosFunction";
import { FormattedMessage } from "react-intl";

const Vendor = () => {
  const { isLoading, isError, error, data } = useGetAllVendors();
  const fakeImages = [1, 2, 3, 4, 5];
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    console.log(data?.data);
    return (
      <div className="d-flex flex-column-fluid">
        {data && (
          <div className="container">
            {data?.data.map((v, i) => {
              return (
                <div key={v._id} className="card card-custom gutter-b">
                  <div className="card-body">
                    <div className="d-flex">
                      <div className="flex-shrink-0 mr-7">
                        <div className="symbol symbol-50 symbol-lg-120">
                          <img
                            alt="Pic"
                            src={`${toAbsoluteUrl(
                              "/media/users/100_" + (i + 1) + ".jpg"
                            )}`}
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center justify-content-between flex-wrap mt-2">
                          <div className="mr-3">
                            <span className="d-flex align-items-center text-dark text-hover-primary font-size-h5 font-weight-bold mr-3">
                              {v.user.fullname}
                              <i className="flaticon2-correct text-success icon-md ml-2"></i>
                            </span>
                            <div className="d-flex flex-wrap my-2">
                              <span className="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
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
                                      <rect
                                        x="0"
                                        y="0"
                                        width="24"
                                        height="24"
                                      ></rect>
                                      <path
                                        d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z"
                                        fill="#000000"
                                      ></path>
                                      <circle
                                        fill="#000000"
                                        opacity="0.3"
                                        cx="19.5"
                                        cy="17.5"
                                        r="2.5"
                                      ></circle>
                                    </g>
                                  </svg>
                                </span>
                                {v.user.email}
                              </span>
                              <span className="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
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
                                      <mask fill="white">
                                        <use xlinkHref="#path-1"></use>
                                      </mask>
                                      <g></g>
                                      <path
                                        d="M7,10 L7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 L17,10 L18,10 C19.1045695,10 20,10.8954305 20,12 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,12 C4,10.8954305 4.8954305,10 6,10 L7,10 Z M12,5 C10.3431458,5 9,6.34314575 9,8 L9,10 L15,10 L15,8 C15,6.34314575 13.6568542,5 12,5 Z"
                                        fill="#000000"
                                      ></path>
                                    </g>
                                  </svg>
                                </span>
                                {v.user.role}
                              </span>
                              <span className="text-muted text-hover-primary font-weight-bold">
                                <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
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
                                      <rect
                                        x="0"
                                        y="0"
                                        width="24"
                                        height="24"
                                      ></rect>
                                      <path
                                        d="M9.82829464,16.6565893 C7.02541569,15.7427556 5,13.1079084 5,10 C5,6.13400675 8.13400675,3 12,3 C15.8659932,3 19,6.13400675 19,10 C19,13.1079084 16.9745843,15.7427556 14.1717054,16.6565893 L12,21 L9.82829464,16.6565893 Z M12,12 C13.1045695,12 14,11.1045695 14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 C10,11.1045695 10.8954305,12 12,12 Z"
                                        fill="#000000"
                                      ></path>
                                    </g>
                                  </svg>
                                </span>
                                Egypt
                              </span>
                            </div>
                            <div className="d-flex flex-wrap my-2">
                              <span className="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
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
                                        d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
                                        fill="#000000"
                                        fillRule="nonzero"
                                        opacity="0.3"
                                      ></path>
                                      <rect
                                        fill="#000000"
                                        x="6"
                                        y="11"
                                        width="9"
                                        height="2"
                                        rx="1"
                                      ></rect>
                                      <rect
                                        fill="#000000"
                                        x="6"
                                        y="15"
                                        width="5"
                                        height="2"
                                        rx="1"
                                      ></rect>
                                    </g>
                                  </svg>
                                </span>
                                {v.app_balance_type}
                              </span>
                              <span className="text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2">
                                <span className="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
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
                                      <rect
                                        x="0"
                                        y="0"
                                        width="24"
                                        height="24"
                                      ></rect>
                                      <rect
                                        fill="#000000"
                                        x="2"
                                        y="5"
                                        width="19"
                                        height="4"
                                        rx="1"
                                      ></rect>
                                      <rect
                                        fill="#000000"
                                        opacity="0.3"
                                        x="2"
                                        y="11"
                                        width="19"
                                        height="10"
                                        rx="1"
                                      ></rect>
                                    </g>
                                  </svg>
                                </span>
                                {v.app_balance_amount}{" "}
                                {v.app_balance_type === "percentage"
                                  ? "%"
                                  : "LE"}
                              </span>
                            </div>
                          </div>
                          <div className="my-lg-0 my-1">
                            <span className="btn btn-sm btn-light-primary font-weight-bolder text-uppercase mr-2">
                              <FormattedMessage id="TABLE.VENDORS.ASK" />
                            </span>
                            <span className="btn btn-sm btn-primary font-weight-bolder text-uppercase">
                              <FormattedMessage id="TABLE.VENDORS.HIRE" />
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center flex-wrap justify-content-between">
                          <div className="invisible flex-grow-1 font-weight-bold text-dark-50 py-2 py-lg-2 mr-5">
                            I distinguish three main text objectives could be
                            merely to inform people.
                            <br />A second could be persuade people. You want
                            people to bay objective.
                          </div>
                          <div className="d-flex mt-4 mt-sm-0">
                            <span className="font-weight-bold mr-4">
                              <FormattedMessage id="TABLE.VENDORS.RATE" />
                            </span>
                            <div className="progress progress-xs mt-2 mb-2 flex-shrink-0 w-150px w-xl-250px">
                              <div
                                className={`progress-bar ${
                                  v.rate.value < 0.25
                                    ? "bg-primary"
                                    : v.rate.value < 0.5
                                    ? "bg-success"
                                    : v.rate.value < 0.75
                                    ? "bg-info"
                                    : "bg-danger"
                                }`}
                                role="progressbar"
                                style={{ width: `${v.rate.value * 100}%` }}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <span className="font-weight-bolder text-dark ml-4">
                              {v.rate.value * 100}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="separator separator-solid my-7"></div>
                    <div className="d-flex align-items-center flex-wrap">
                      <div className="d-flex align-items-center flex-lg-fill mr-5 my-1">
                        <span className="mr-4">
                          <i className="flaticon-piggy-bank icon-2x text-muted font-weight-bold"></i>
                        </span>
                        <div className="d-flex flex-column text-dark-75">
                          <span className="font-weight-bolder font-size-sm">
                            <FormattedMessage id="TABLE.VENDORS.EARNING" />
                          </span>
                          <span className="font-weight-bolder font-size-h5">
                            <span className="text-dark-50 font-weight-bold">
                              $
                            </span>
                            {v.Net}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center flex-lg-fill mr-5 my-1">
                        <span className="mr-4">
                          <i className="flaticon-confetti icon-2x text-muted font-weight-bold"></i>
                        </span>
                        <div className="d-flex flex-column text-dark-75">
                          <span className="font-weight-bolder font-size-sm">
                            <FormattedMessage id="TABLE.VENDORS.TAX" />
                          </span>
                          <span className="font-weight-bolder font-size-h5">
                            <span className="text-dark-50 font-weight-bold">
                              $
                            </span>
                            {v.app_balance_type === "percentage"
                              ? v.Net * (v.app_balance_amount / 100)
                              : v.Net !== 0
                              ? v.Net - v.app_balance_amount
                              : 0}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center flex-lg-fill mr-5 my-1">
                        <span className="mr-4">
                          <i className="flaticon-pie-chart icon-2x text-muted font-weight-bold"></i>
                        </span>
                        <div className="d-flex flex-column text-dark-75">
                          <span className="font-weight-bolder font-size-sm">
                            <FormattedMessage id="TABLE.VENDORS.NET" />
                          </span>
                          <span className="font-weight-bolder font-size-h5">
                            <span className="text-dark-50 font-weight-bold">
                              $
                            </span>
                            {v.app_balance_type === "percentage"
                              ? v.Net - v.Net * (v.app_balance_amount / 100)
                              : v.Net !== 0
                              ? v.Net -
                                v.app_balance_amount * v.numberOfDeliverdOrders
                              : 0}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center flex-lg-fill mr-5 my-1">
                        <span className="mr-4">
                          <i className="flaticon-file-2 icon-2x text-muted font-weight-bold"></i>
                        </span>
                        <div className="d-flex flex-column flex-lg-fill">
                          <span className="text-dark-75 font-weight-bolder font-size-sm">
                            {v.numberOfDeliverdOrders}{" "}
                            <FormattedMessage id="TABLE.VENDORS.DELIVERDORDERS" />
                          </span>
                          <span className="text-primary font-weight-bolder">
                            <FormattedMessage id="TABLE.VENDORS.VIEW" />
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center flex-lg-fill mr-5 my-1">
                        <span className="mr-4">
                          <i className="flaticon-chat-1 icon-2x text-muted font-weight-bold"></i>
                        </span>
                        <div className="d-flex flex-column">
                          <span className="text-dark-75 font-weight-bolder font-size-sm">
                            648 <FormattedMessage id="TABLE.VENDORS.COMMENTS" />
                          </span>
                          <span className="text-primary font-weight-bolder">
                            <FormattedMessage id="TABLE.VENDORS.VIEW" />
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center flex-lg-fill my-1">
                        <span className="mr-4">
                          <i className="flaticon-network icon-2x text-muted font-weight-bold"></i>
                        </span>
                        <div className="symbol-group symbol-hover">
                          {fakeImages.map((i) => {
                            return (
                              <div
                                className="symbol symbol-30 symbol-circle"
                                data-toggle="tooltip"
                                key={i}
                                data-original-title="Charlie Stone"
                              >
                                <img
                                  alt="Pic"
                                  src={`${toAbsoluteUrl(
                                    "/media/users/user" + i + ".jpg"
                                  )}`}
                                />
                              </div>
                            );
                          })}
                          <div
                            className="symbol symbol-30 symbol-circle symbol-light"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="More users"
                          >
                            <span className="symbol-label font-weight-bold">
                              5+
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
};

export default Vendor;
