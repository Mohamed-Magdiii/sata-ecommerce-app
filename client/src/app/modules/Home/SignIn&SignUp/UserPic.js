import React, { useState } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

const UserPic = ({ setImage }) => {
  
  const [userProfile, setUserProfile] = useState("");
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
    <div className="form-group row">
      <label className="col-form-label col-3 text-lg-right text-left">
        Avatar
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
              : !isChanged
              ? {
                  backgroundImage: `url(${toAbsoluteUrl(
                    `${process.env.REACT_APP_API_URL}/${userProfile}`
                  )})`,
                }
              : {
                  backgroundImage: `url(${userProfile})`,
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
              name="image"
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
  );
};

export default UserPic;
