/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_helpers";
import DispLang from "../../../../app/utils/HEADERS";

export function StatsWidget12({ className, data }) {
  return (
    <div className={`card card-custom ${className}`}>
      <div className="card-body d-flex flex-column p-0">
        <div className="d-flex align-items-center justify-content-between card-spacer flex-grow-1">
          <span className="symbol symbol-circle symbol-50 symbol-light-primary mr-2">
            <span className="symbol-label">
              <span className="svg-icon svg-icon-xl svg-icon-primary">
                <SVG
                  src={toAbsoluteUrl(
                    "/media/svg/icons/Communication/Group.svg"
                  )}
                ></SVG>
              </span>
            </span>
          </span>
          <div className="d-flex flex-column text-right">
            <span className="text-dark-75 font-weight-bolder font-size-h3">
              {DispLang ? data.title.ar : data.title.en}
            </span>
            <span className="text-muted font-weight-bold mt-2">
              Watched By : {data.visitedBy.length} Persons
            </span>
          </div>
        </div>
        <div
          id="kt_stats_widget_12_chart"
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
