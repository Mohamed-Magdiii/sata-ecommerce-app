import React from "react";
import { useLogin, useRegister } from "./shared/axiosFunctions";
const CardFooter = ({ data, email, password }) => {
  const { mutate: login } = useLogin();
  const { mutate: register } = useRegister();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data) {
      register(data);
    } else {
      login({ email, password });
    }
  };
  return (
    <div className="card-footer pb-0">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-7">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-9">
              <button
                className="btn btn-light-primary font-weight-bold"
                onClick={handleSubmit}
              >
                Save changes
              </button>
              <span className="btn btn-clean font-weight-bold">Cancel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
