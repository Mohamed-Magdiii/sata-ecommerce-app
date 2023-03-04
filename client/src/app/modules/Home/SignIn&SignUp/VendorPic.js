import React, { useState } from "react";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

const VendorPic = ({
  setImage,
  setTaxcard_front,
  setTaxcard_back,
  setCommercialRecord,
}) => {
  const [userProfile, setUserProfile] = useState("");
  const [taxCardFront, setTaxCardFront] = useState("");
  const [taxCardBack, setTaxCardBack] = useState("");
  const [commerical, setCommerical] = useState("");
  const isChanged = [false, false, false, false];
  const handleImage = (e, i) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        isChanged[i] = true;
        if (i === 0) {
          setUserProfile(reader.result);
        } else if (i === 1) {
          setTaxCardFront(reader.result);
        } else if (i === 2) {
          setTaxCardBack(reader.result);
        } else {
          setCommerical(reader.result);
        }
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    if (i === 0) {
      setImage(e.target.files[0]);
    } else if (i === 1) {
      setTaxcard_front(e.target.files[0]);
    } else if (i === 2) {
      setTaxcard_back(e.target.files[0]);
    } else {
      setCommercialRecord(e.target.files[0]);
    }
  };
  return (
    <div className="form-group row">
      <div className="col-lg-3">
        <label className="col-form-label col-12 text-lg-left text-left">
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
                : !isChanged[0] && {
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
                name="profile_avatar"
                accept=".png, .jpg, .jpeg"
                onChange={(e) => handleImage(e, 0)}
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
      <div className="col-lg-3">
        <label className="col-form-label col-12 text-lg-left text-left">
          Front Tax Card
        </label>
        <div className="col-9">
          <div
            className="image-input image-input-empty image-input-outline"
            id="kt_user_edit_avatar"
            style={
              taxCardFront === ""
                ? {
                    backgroundImage: `url(${toAbsoluteUrl(
                      "/media/users/blank.png"
                    )})`,
                  }
                : !isChanged[1] && {
                    backgroundImage: `url(${taxCardFront})`,
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
                onChange={(e) => handleImage(e, 1)}
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
      <div className="col-lg-3">
        <label className="col-form-label col-12 text-lg-left text-left">
          Back Tax Card
        </label>
        <div className="col-9">
          <div
            className="image-input image-input-empty image-input-outline"
            id="kt_user_edit_avatar"
            style={
              taxCardBack === ""
                ? {
                    backgroundImage: `url(${toAbsoluteUrl(
                      "/media/users/blank.png"
                    )})`,
                  }
                : !isChanged[2] && {
                    backgroundImage: `url(${taxCardBack})`,
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
                onChange={(e) => handleImage(e, 2)}
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
      <div className="col-lg-3">
        <label
          title="Commerical Record"
          className="col-form-label col-12 text-lg-left text-left"
        >
          Commerical
        </label>
        <div className="col-9">
          <div
            className="image-input image-input-empty image-input-outline"
            id="kt_user_edit_avatar"
            style={
              commerical === ""
                ? {
                    backgroundImage: `url(${toAbsoluteUrl(
                      "/media/users/blank.png"
                    )})`,
                  }
                : !isChanged[3] && {
                    backgroundImage: `url(${commerical})`,
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
                onChange={(e) => handleImage(e, 3)}
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
    </div>
  );
};

export default VendorPic;
