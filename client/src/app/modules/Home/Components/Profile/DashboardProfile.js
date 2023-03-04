import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMeUser } from "../../../../modules/actions/customers/customersActions";
import { getWishlist } from "../../../../modules/actions/wishlist/wishlist";
import ProfileLeftSide from "./ProfileLeftSide";

function DashboardProfile({
  getMeUser,
  getWishlist,
  auth: { user },
  wishlist: { wishlists },
}) {
  useEffect(() => {
    getMeUser();
    getWishlist();
  }, [getMeUser, getWishlist]);
  return (
    <div className="u-s-p-b-60 mt-5">
      <div className="section__content">
        <div className="dash">
          <div className="container">
            <div className="row">
              {/* Left Side Bar */}
              <ProfileLeftSide />
              <div className="col-lg-9 col-md-12  mt-5">
                <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                  {user && (
                    <div className="dash__pad-2">
                      <h1 className="dash__h1 u-s-m-b-14">My Profile</h1>

                      <span className="dash__text u-s-m-b-30">
                        Look all your info, you could customize your profile.
                      </span>
                      <div className="row">
                        <div className="col-lg-4 u-s-m-b-30">
                          <h2 className="dash__h2 u-s-m-b-8">Full Name</h2>

                          <span className="dash__text">{user.fullname}</span>
                        </div>
                        <div className="col-lg-4 u-s-m-b-30">
                          <h2 className="dash__h2 u-s-m-b-8">E-mail</h2>

                          <span className="dash__text">{user.email}</span>
                         
                        </div>
                        <div className="col-lg-4 u-s-m-b-30">
                          <h2 className="dash__h2 u-s-m-b-8">Phone</h2>

                          <span className="dash__text">{user?.mobile}</span>
                          
                        </div>
                        {/* <div className="col-lg-4 u-s-m-b-30">
                                                    <h2 className="dash__h2 u-s-m-b-8">Gender</h2>

                                                    <span className="dash__text">Male</span>
                                                </div> */}
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="u-s-m-b-16">
                            <Link
                              className="dash__custom-link btn--e-transparent-brand-b-2"
                              to="/edit-profile"
                            >
                              Edit Profile
                            </Link>
                          </div>
                          {/* <div>
                            <Link
                              className="dash__custom-link btn--e-brand-b-2"
                              to="#"
                            >
                              Change Password
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  )}
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
  wishlist: state.wishlist,
});

export default connect(mapStateToProps, { getMeUser, getWishlist })(
  DashboardProfile
);
