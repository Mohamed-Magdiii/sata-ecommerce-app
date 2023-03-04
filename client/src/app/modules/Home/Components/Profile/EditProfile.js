import React, { useEffect, useState } from "react";
import {
  updateMeUser,
  getMeUser,
} from "../../../../modules/actions/customers/customersActions";
import ProfileLeftSide from "./ProfileLeftSide";
import { connect } from "react-redux";

function EditProfile({ updateMeUser, getMeUser, auth: { user }, history }) {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  //   const [image, setImage] = useState("");
  useEffect(() => {
    getMeUser();
    setFullName(!user.fullname == null ? "" : user.fullname);
    setEmail(!user.email == null ? "" : user.email);
    setMobile(!user.mobile == null ? "" : user.mobile);
    // setImage(!user.image == null ? "" : user.image);
    // eslint-disable-next-line
  }, [getMeUser]);
  const onSubmit = (e) => {
    e.preventDefault();
    updateMeUser({ fullname, email, mobile });
    history.push("/my-profile");
  };
  return (
    <div className="mt-5">
      <div className="u-s-p-b-60">
        <div className="section__content">
          <div className="dash">
            <div className="container">
              <div className="row">
                {/*Left Side Bar */}
                <ProfileLeftSide />
                <div className="col-lg-9 col-md-12">
                  <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                    <div className="dash__pad-2">
                      <h1 className="dash__h1 u-s-m-b-14">Edit Profile</h1>
                      <span className="dash__text u-s-m-b-30">
                        Looks like you haven't update your profile
                      </span>
                      <div className="dash__link dash__link--secondary u-s-m-b-30">
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <form className="dash-edit-p">
                            <div className="gl-inline">
                              <div className="u-s-m-b-30">
                                <label className="gl-label" htmlFor="reg-fname">
                                  Full NAME *
                                </label>

                                <input
                                  className="input-text input-text--primary-style"
                                  type="text"
                                  id="reg-fname"
                                  value={fullname}
                                  onChange={(e) => setFullName(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="gl-inline">
                              <div className="u-s-m-b-30">
                                <h2 className="dash__h2 u-s-m-b-8">E-mail</h2>

                                <span className="dash__text">{email}</span>
                               
                              </div>
                              <div className="u-s-m-b-30">
                                <h2 className="dash__h2 u-s-m-b-8">Phone</h2>

                                <span className="dash__text">{mobile}</span>
                                
                              </div>
                            </div>

                            <button
                              className="btn btn--e-brand-b-2"
                              type="submit"
                              onClick={(e) => onSubmit(e)}
                            >
                              SAVE
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  auth: state.authentication,
});
export default connect(mapStateToProps, { updateMeUser, getMeUser })(
  EditProfile
);
