import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updatePassword } from '../../../actions/auth/auth';
import ProfileLeftSide from './ProfileLeftSide';

function EditPassword({updatePassword ,auth:{user}}) {
  const [currentpassword, setCurrentpassword] = useState("");
  const [ newpassword, setNewpassword] = useState("");
  return  ( 
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
                  <h1 className="dash__h1 u-s-m-b-14">Change Password</h1>
                  <span className="dash__text u-s-m-b-30">
                    Update Your Password , Be Secured !!
                  </span>
                  <div className="dash__link dash__link--secondary u-s-m-b-30">
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <form className="dash-edit-p">
                        <div className="gl-inline">
                          <div className="u-s-m-b-30">
                            <label className="gl-label" htmlFor="reg-fname">
                              Current Password *
                            </label>

                            <input
                              className="input-text input-text--primary-style"
                              type="password"
                              id="reg-fname"
                              value={currentpassword}
                              onChange={(e) => setCurrentpassword(e.target.value)}
                            />
                          </div>
                          <div className="u-s-m-b-30">
                            <label className="gl-label" htmlFor="reg-fname">
                              New Password *
                            </label>
                            <input
                              className="input-text input-text--primary-style"
                              type="password"
                              id="reg-fname"
                              value={newpassword}
                              onChange={(e) => setNewpassword(e.target.value)}
                            />
                          </div>
                        </div>

                        <button
                          className="btn btn--e-brand-b-2"
                          type="submit"
                          onClick={(e) =>{e.preventDefault();user && updatePassword(user._id ,currentpassword,newpassword)}}
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
</div>)
}
const mapStateToProps =state => ({
  auth:state.authentication
})
export default connect(mapStateToProps , {updatePassword})(EditPassword);
