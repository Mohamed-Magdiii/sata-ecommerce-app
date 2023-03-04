import React, { useState } from "react";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import { UserEditContext } from "./CardHeader";
import CardFooter from "./CardFooter";
import { useContext } from "react";
import { FormattedMessage } from "react-intl";

const EditProfileComponent = ({ isActive }) => {
  const info = useContext(UserEditContext);
  const [fullname, setFullname] = useState(info?.fullname || "");
  const [telephone, setTelephone] = useState(info?.telephone || "");
  const [mobile, setMobile] = useState(info?.mobile || "");
  const [email, setEmail] = useState(info?.email || "");
  const [image, setImage] = useState(info?.image || "");
  const [userProfile, setUserProfile] = useState(info?.image || "");
  const [isChanged, setIsChanged] = useState(false);
  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setIsChanged(true);
        setUserProfile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  return (
    <div
      className={`tab-pane px-7 ${isActive && "show active"}`}
      role="tabpanel"
    >
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-7 my-2">
          <div className="row">
            <label className="col-3"></label>
            <div className="col-9">
              <h6 className="text-dark font-weight-bold mb-10">
                <FormattedMessage id="TABLE.TITLE.CUSTOMER.INFO" />
              </h6>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              <FormattedMessage id="TABLE.CUSTOMER.PROFILE" />
            </label>
            <div className="col-9">
              <div
                className="image-input image-input-empty image-input-outline"
                id="kt_user_edit_avatar"
                style={
                  userProfile === ""
                    ? {
                        backgroundImage: `url(${toAbsoluteUrl(
                          "/media/users/blank.png"
                        )})`,
                      }
                    : !isChanged && {
                        backgroundImage: `url(${toAbsoluteUrl(
                          `${process.env.REACT_APP_WEB_LINK}:${process.env.REACT_APP_SERVER_PORT}/${userProfile}`
                        )})`,
                      }
                }
              >
                <div className="image-input-wrapper"></div>
                <label
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="change"
                  data-toggle="tooltip"
                  data-original-title="Change avatar"
                >
                  <i className="fa fa-pen icon-sm text-muted"></i>
                  <input
                    type="file"
                    name="profile_avatar"
                    accept=".png, .jpg, .jpeg"
                    onChange={handleImage}
                  />
                  <input type="hidden" name="profile_avatar_remove" />
                </label>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="cancel"
                  data-toggle="tooltip"
                  data-original-title="Cancel avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="remove"
                  data-toggle="tooltip"
                  data-original-title="Remove avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              <FormattedMessage id="TABLE.CUSTOMER.FULLNAME" />
            </label>
            <div className="col-9">
              <input
                className="form-control form-control-lg form-control-solid"
                type="text"
                value={fullname || ""}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              <FormattedMessage id="TABLE.CUSTOMER.PHONE" />
            </label>
            <div className="col-9">
              <div className="input-group input-group-lg input-group-solid">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-phone"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid"
                  value={telephone || ""}
                  onChange={(e) => setTelephone(e.target.value)}
                  placeholder="Phone"
                />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              <FormattedMessage id="TABLE.CUSTOMER.MOBILE" />
            </label>
            <div className="col-9">
              <div className="input-group input-group-lg input-group-solid">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-mobile-alt"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid"
                  value={mobile || ""}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Phone"
                />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              <FormattedMessage id="TABLE.CUSTOMER.EMAIL" />
            </label>
            <div className="col-9">
              <div className="input-group input-group-lg input-group-solid">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="far fa-envelope"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid"
                  value={email || ""}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardFooter data={{ fullname, mobile, email, telephone, image }} />
    </div>
  );
};

export default EditProfileComponent;
