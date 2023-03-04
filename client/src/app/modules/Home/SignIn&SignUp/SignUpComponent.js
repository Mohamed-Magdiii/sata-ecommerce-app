import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../../actions/auth/auth";
// import CardFooter from "./CardFooter";
import UserPic from "./UserPic";
import VendorPic from "./VendorPic";
const SignUpComponent = ({ isActive,register ,isAuthenticated}) => {
  const [email, setEmail] = useState("");
  const [password, setNewPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("user");
  const [image, setImage] = useState("");
  const [taxcard_front, setTaxcard_front] = useState("");
  const [taxcard_back, setTaxcard_back] = useState("");
  const [commercialRecord, setCommercialRecord] = useState("");
  const formData = new FormData()
  formData.append("email",  email)
  formData.append("password",password)
  formData.append("fullname",fullname)
  formData.append("telephone",telephone)
  formData.append("mobile",mobile)
  formData.append("role",role)
  formData.append("image",image)
  formData.append("taxcard_front",taxcard_front)
  formData.append("taxcard_back",taxcard_back)
  formData.append("commercialRecord",commercialRecord)
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
    return (
    <div className="section__content mt-2">
      <div className="container">
        <div className="row row--center">
          <div className="col-lg-11 col-md-8 u-s-m-b-30">
            <div className="l-f-o">
              <div className="l-f-o__pad-box">
                <form className="l-f-o__form" encType="multipart/form-data">
                  <div
                    className={`tab-pane px-7 ${isActive && "show active"}`}
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-xl-2"></div>
                      <div className="col-xl-7 my-2">
                        <div className="row"></div>
                        {role === "vendor" ? (
                          <VendorPic
                            setImage={setImage}
                            setCommercialRecord={setCommercialRecord}
                            setTaxcard_front={setTaxcard_front}
                            setTaxcard_back={setTaxcard_back}
                          />
                        ) : (
                          <UserPic setImage={setImage} />
                        )}
                        <div className="form-group row">
                          <label className="col-form-label col-3 text-lg-right text-left">
                            Full Name
                          </label>
                          <div className="col-9">
                            <input
                              className="form-control form-control-lg form-control-solid"
                              type="text"
                              placeholder="Full Name"
                              value={fullname || ""}
                              onChange={(e) => setFullname(e.target.value)}
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
                                value={telephone || ""}
                                onChange={(e) => setTelephone(e.target.value)}
                                placeholder="Telephone"
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
                                value={mobile || ""}
                                onChange={(e) => setMobile(e.target.value)}
                                placeholder="Mobile"
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
                                value={email || ""}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-form-label col-3 text-lg-right text-left">
                            New Password
                          </label>
                          <div className="col-9">
                            <input
                              className="form-control form-control-lg form-control-solid"
                              type="password"
                              value={password}
                              onChange={(e) => setNewPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        {/* <div className="form-group row">
                          <label className="col-form-label col-3 text-lg-right text-left">
                            Verify Password
                          </label>
                          <div className="col-9">
                            <input
                              className="form-control form-control-lg form-control-solid"
                              type="password"
                              value={vpassword}
                              onChange={(e) => setVPassword(e.target.value)}
                            />
                          </div>
                        </div> */}
                        <div className="form-group row align-items-center">
                          <label className="col-form-label col-3 text-lg-right text-left">
                            Register as
                          </label>
                          <div className="col-9">
                            <div className="radio-inline">
                              <label className="radio">
                                <input
                                  type="radio"
                                  name="role"
                                  checked={role === "vendor"}
                                  onChange={() => setRole("vendor")}
                                />
                                <span></span>Vendor
                              </label>
                              <label className="radio">
                                <input
                                  type="radio"
                                  name="role"
                                  checked={role === "user"}
                                  onChange={() => setRole("user")}
                                />
                                <span></span>User
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="gl-inline">
                    <div className="u-s-m-b-30">
                      <button
                        className="btn btn--e-transparent-brand-b-2"
                        type="submit"
                        onClick={(e) => {e.preventDefault(); register(formData)}}
                      >
                        Register
                      </button>
                    </div>
                    <div className="u-s-m-b-30"></div>
                  </div>
                  <div className="u-s-m-b-30">
                    <div className="check-box"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isAuthenticated,
});
export default connect(mapStateToProps , {register})(SignUpComponent);
