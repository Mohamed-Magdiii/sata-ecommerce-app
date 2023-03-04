import React from "react";
import CustomerForm from "./CustomerForm";
export const UserEditContext = React.createContext();
const CardHeader = ({ selected }) => {
  return (
    <div className="card-body">
      <form className="form" id="kt_form">
        <div className="tab-content">
           <UserEditContext.Provider>
              <CustomerForm isActive={selected === "Profile"} />
            </UserEditContext.Provider>
         
        </div>
      </form>
    </div>
  );
};

export default CardHeader;
