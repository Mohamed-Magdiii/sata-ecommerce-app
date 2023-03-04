import React from "react";
import { useUpdateUser } from "../shared/axiosFunction";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
const CardFooter = ({ data }) => {
  const { id } = useParams();
  const history = useHistory();
  const { mutate } = useUpdateUser();
  const handleSubmit = () => {
    mutate({ data, id });
  };
  return (
    <div className="card-footer pb-0">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-7">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-9">
              <span
                className="btn btn-light-primary font-weight-bold"
                onClick={handleSubmit}
              >
                <FormattedMessage id="BUTTON.SAVECHANGES" />
              </span>
              <span
                onClick={() => history.goBack()}
                className="btn btn-clean font-weight-bold"
              >
                {" "}
                <FormattedMessage id="BUTTON.CANCEL" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
