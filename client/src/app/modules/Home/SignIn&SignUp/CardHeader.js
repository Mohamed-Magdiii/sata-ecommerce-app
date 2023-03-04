import React from "react";
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";
const CardHeader = ({ selected }) => {
  return (
    <div className="card-body">
      <form className="form" id="kt_form">
        <div className="tab-content">
          <SignUpComponent isActive={selected === "Profile"} />
          <SignInComponent isActive={selected === "Account"} />
        </div>
      </form>
    </div>
  );
};

export default CardHeader;
