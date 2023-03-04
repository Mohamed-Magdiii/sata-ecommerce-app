import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSetting } from "../../../../modules/actions/Settings/settings";
import FormContact from "./FormContact";

function Contact({ settings: { setting }, getSetting }) {
  useEffect(() => {
    getSetting();
  }, [getSetting]);
  return (
    <div className="mt-5">
      <div className="u-s-p-b-60">
        <div className="section__content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3452.0672920292177!2d31.306006885327314!3d30.09225907326816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1642500815053!5m2!1sar!2seg"
                  width="1000"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="sata"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {setting && (
        <div className="u-s-p-b-60">
          <div className="section__content">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                  <div className="contact-o u-h-100">
                    <div className="contact-o__wrap">
                      <div className="contact-o__icon">
                        <i className="fas fa-phone-volume"></i>
                      </div>

                      <span className="contact-o__info-text-1">
                        LET'S HAVE A CALL
                      </span>

                      <span className="contact-o__info-text-2">
                        {setting.mobile}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                  <div className="contact-o u-h-100">
                    <div className="contact-o__wrap">
                      <div className="contact-o__icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>

                      <span className="contact-o__info-text-1">
                        OUR LOCATION
                      </span>

                      <span className="contact-o__info-text-2">
                        {setting.address_en}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 u-s-m-b-30">
                  <div className="contact-o u-h-100">
                    <div className="contact-o__wrap">
                      <div className="contact-o__icon">
                        <i className="far fa-clock"></i>
                      </div>

                      <span className="contact-o__info-text-1">WORK TIME</span>

                      <span className="contact-o__info-text-2">
                        {setting.worktime}
                      </span>

                      {/* <span className="contact-o__info-text-2">
                        From 9 AM to 7 PM
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <FormContact />
    </div>
  );
}
const mapStateToProps = (state) => ({
  settings: state.settings,
});
export default connect(mapStateToProps, { getSetting })(Contact);
