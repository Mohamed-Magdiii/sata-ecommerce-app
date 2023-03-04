import React from "react";
import ChangePasswordComponent from "./ChangePasswordComponent";
import EditAccountComponent from "./EditAccountComponent";
import EditProfileComponent from "./EditProfileComponent";
import SettingsEditComponent from "./SettingsEditComponent";
export const UserEditContext = React.createContext();
const CardHeader = ({ selected, data }) => {
  return (
    <div className="card-body">
      <form className="form" id="kt_form">
        <div className="tab-content">
          {data && (
            <UserEditContext.Provider value={data?.data}>
              <EditProfileComponent isActive={selected === "Profile"} />
              <EditAccountComponent isActive={selected === "Account"} />
              <ChangePasswordComponent
                isActive={selected === "ChangePasword"}
              />
              <SettingsEditComponent isActive={selected === "Settings"} />
            </UserEditContext.Provider>
          )}
        </div>
      </form>
    </div>
  );
};

export default CardHeader;
