/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";
import Displang from "../../../../app/utils/HEADERS";

export function StatsWidget11({ className, symbolShape, baseColor, data }) {
  return (
    <div className={`card card-custom ${className}`}>
      <div className="card-body p-0">
        <div className="d-flex align-items-center justify-content-between card-spacer flex-grow-1">
          <span
            className={`symbol ${symbolShape} symbol-50 symbol-light-${baseColor} mr-2`}
          >
            <span className="symbol-label">
              <span className={`svg-icon svg-icon-xl svg-icon-${baseColor}`}>
                <SVG
                  src={toAbsoluteUrl(
                    "/media/svg/icons/Layout/Layout-4-blocks.svg"
                  )}
                ></SVG>
              </span>
            </span>
          </span>
          <div className="d-flex flex-column text-right">
            <span className="text-dark-75 font-weight-bolder font-size-h3">
              {Displang ? data.title.ar : data.title.en} : {data.price}LE
            </span>
            <span className="text-muted font-weight-bold mt-2">
              Bought: {data.bought} Times
            </span>
          </div>
        </div>

        <div
          id="kt_stats_widget_11_chart"
          className="card-rounded-bottom"
          style={{ height: "150px" }}
        >
          <img
            src={`${process.env.REACT_APP_API_URL}/${data.image}`}
            alt=""
            height={"180px"}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
}
