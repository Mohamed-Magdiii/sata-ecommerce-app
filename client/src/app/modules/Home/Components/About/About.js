import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSetting } from "../../../../modules/actions/Settings/settings";

function About({ history, getSetting, settings: { setting } }) {
useEffect(() => {
    getSetting();
  }, [getSetting]);
  console.log(setting);
  return (
    <div className="section__content mt-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="about">
              {setting === null ? <h2>About Sata Mall</h2> : (
                <div className="about__container">
                  <div className="about__info">
                    <h2 className="about__h2">{setting.about_title}</h2>
                    <div className="about__p-wrap">
                      <p className="about__p">{setting.about_description}</p>
                    </div>

                    <button
                      className="about__link btn--e-secondary btn btn-primary"
                      onClick={() => history.push("/")}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  settings: state.settings,
});
export default connect(mapStateToProps, { getSetting })(About);
