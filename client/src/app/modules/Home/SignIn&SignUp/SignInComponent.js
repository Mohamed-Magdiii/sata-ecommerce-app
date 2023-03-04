import React, { useState } from "react";
import { login } from "../../actions/auth/auth";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
const SignInComponent = ({ isActive, login, isAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setNewPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="section__content mt-2">
      <div className="container">
        <div className="row row--center">
          <div className="col-lg-6 col-md-8 u-s-m-b-30">
            <div className="l-f-o">
              <div className="l-f-o__pad-box">
                <h1 className="gl-h1">I'M NEW CUSTOMER</h1>
                <div className="u-s-m-b-15">
                  <Link
                    className="l-f-o__create-link btn--e-transparent-brand-b-2"
                    to="/register"
                  >
                    CREATE AN ACCOUNT
                  </Link>
                </div>
                <h1 className="gl-h1">SIGNIN</h1>

                <span className="gl-text u-s-m-b-30">
                  If you have an account with us, please log in.
                </span>
                <form className="l-f-o__form">
                  <div className="u-s-m-b-30">
                    <label className="gl-label" htmlFor="login-email">
                      E-MAIL *
                    </label>

                    <input
                      className="input-text input-text--primary-style"
                      type="text"
                      id="login-email"
                      placeholder="Enter E-mail"
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                  <div className="u-s-m-b-30">
                    <label className="gl-label" htmlFor="login-password">
                      PASSWORD *
                    </label>

                    <input
                      className="input-text input-text--primary-style"
                      type="password"
                      id="login-password"
                      placeholder="Enter Password"
                      onChange={(e)=>setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="gl-inline">
                    <div className="u-s-m-b-30">
                      <button
                        className="btn btn--e-transparent-brand-b-2"
                        type="submit"
                        onClick={(e)=>handleSubmit(e)}
                      >
                        LOGIN
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
export default connect(mapStateToProps, { login })(SignInComponent);
