import React from "react";
import { FormattedMessage } from "react-intl";
function Shared() {
  return (
    <div className="card-header py-3">
      <div className="card-title align-items-start flex-column">
        <h3 className="card-label font-weight-bolder text-dark">
          <FormattedMessage id="TABLE.TITLE.ORDER.UPDATE" />
        </h3>
        <span className="text-muted font-weight-bold font-size-sm mt-1">
          <FormattedMessage id="TABLE.TITLE.ORDER.UPDATE.INFO" />
        </span>
      </div>
    </div>
  );
}

export default Shared;
