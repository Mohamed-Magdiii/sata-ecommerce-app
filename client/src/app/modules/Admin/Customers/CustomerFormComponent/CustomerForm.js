import React, { useState } from "react";
import { connect } from "react-redux";
import CardFooter from "../CustomerFormComponent/CardFooter";
const CustomerForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [telephone, setTelephone] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");
  const [taxcard_front, setTaxcard_front] = useState("");
  const [taxcard_back, setTaxcard_back] = useState("");
  const [commercialRecord, setCommercialRecord] = useState("");
  const newFormData = new FormData();
  newFormData.append("fullname", fullname);
  newFormData.append("password", password);
  newFormData.append("email", email);
  newFormData.append("image", image);
  newFormData.append("telephone", telephone);
  newFormData.append("mobile", mobile);
  newFormData.append("role", role);
  if(role === "vendor"){
    newFormData.append("taxcard_front", taxcard_front);
    newFormData.append("taxcard_back", taxcard_back);
    newFormData.append("commercialRecord", commercialRecord);
  }
  return (
    <div>
      <div className="" role="tabpanel">
        {" "}
        <div className="row">
          <div className="col-xl-2"></div>
          <div className="col-xl-7 my-2">
            <div className="row">
              <label className="col-3"></label>
              <div className="col-9">
                <h6 className="text-dark font-weight-bold mb-10">
                  Customer Info:
                </h6>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                Avatar
              </label>
              <div className="col-9">
                <div
                  className="image-input image-input-empty image-input-outline"
                  id="kt_user_edit_avatar"
                  
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
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                      }}
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
                Full Name
              </label>
              <div className="col-9">
                <input
                  className="form-control form-control-lg form-control-solid"
                  type="text"
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                Contact Phone
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
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="Phone"
                  />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                Contact Mobile
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
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Phone"
                  />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                Email Address
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
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                Password
              </label>
              <div className="col-9">
                <div className="input-group input-group-lg input-group-solid">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="far fa-envelope"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control form-control-lg form-control-solid"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                Select Role
              </label>
              <div className="col-lg-6">
                <select
                  name="role"
                  label="Type"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  className="col-lg-25"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="vendor">Vendor</option>
                  <option value="moderator">Moderator</option>
                </select>
              </div>
              
            </div>
            {role === "vendor" && (
              <div className="form-group row">
                <div className="col-lg-4">
                  <label className=" text-lg-right text-left">
                    Commercial-record
                  </label>
                  <div className="col-6">
                    <div
                      className="image-input image-input-empty image-input-outline"
                      id="kt_user_edit_avatar"
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
                          onChange={(e) => {
                            setCommercialRecord(e.target.files[0]);
                          }}
                        />
                        <input type="hidden" name="profile_avatar_remove" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <label className="text-lg-right text-left">
                    taxcard-front
                  </label>
                  <div className="col-9">
                    <div
                      className="image-input image-input-empty image-input-outline"
                      id="kt_user_edit_avatar"
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
                          onChange={(e) => {
                            setTaxcard_front(e.target.files[0]);
                          }}
                        />
                        <input type="hidden" name="profile_avatar_remove" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <label className="text-lg-right text-left">
                    Taxcard-back
                  </label>
                  <div className="col-9">
                    <div
                      className="image-input image-input-empty image-input-outline"
                      id="kt_user_edit_avatar"
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
                          onChange={(e) => {
                            setTaxcard_back(e.target.files[0]);
                          }}
                        />
                        <input type="hidden" name="profile_avatar_remove" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <CardFooter data={newFormData} />
      </div>
    </div>
  );
};

export default connect(null, { addNewUser })(CustomerForm);
