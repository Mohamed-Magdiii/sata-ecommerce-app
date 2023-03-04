import React from "react";
import { FormattedMessage } from "react-intl";
function AboutInfo({
  about_title_en,
  about_title_ar,
  about_description_en,
  about_description_ar,
  setAboutTitleAr,
  setAboutTitleEn,
  setAboutDescriptionEn,
  setAboutDescriptionAr,
}) {
  return (
    <>
      <div className="row">
        <div className="col-lg-9 col-xl-6 offset-xl-3">
          <h3 className="font-size-h6 mb-5 text-center">
            <FormattedMessage id="SETTINGS.ABOUT" />
          </h3>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label text-right">
          <FormattedMessage id="SETTINGS.TITLE" />{" "}
          <FormattedMessage id="SETTINGS.ENGLISH" />
        </label>
        <div className="col-lg-9 col-xl-6">
          <div className="input-group input-group-lg input-group-solid">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="la la-phone"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              value={about_title_en}
              placeholder="Title"
              onChange={(e) => setAboutTitleEn(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label text-right">
          <FormattedMessage id="SETTINGS.TITLE" />{" "}
          <FormattedMessage id="SETTINGS.ARABIC" />
        </label>
        <div className="col-lg-9 col-xl-6">
          <div className="input-group input-group-lg input-group-solid">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="la la-phone"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              value={about_title_ar}
              placeholder="Title"
              onChange={(e) => setAboutTitleAr(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label text-right">
          <FormattedMessage id="SETTINGS.DESCRIPTION" />{" "}
          <FormattedMessage id="SETTINGS.ENGLISH" />
        </label>
        <div className="col-lg-9 col-xl-6">
          <div className="input-group input-group-lg input-group-solid">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="la la-at"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              value={about_description_en}
              onChange={(e) => setAboutDescriptionEn(e.target.value)}
            />
          </div>
        </div>
      </div>{" "}
      <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label text-right">
          <FormattedMessage id="SETTINGS.DESCRIPTION" />{" "}
          <FormattedMessage id="SETTINGS.ARABIC" />
        </label>
        <div className="col-lg-9 col-xl-6">
          <div className="input-group input-group-lg input-group-solid">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="la la-at"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              value={about_description_ar}
              onChange={(e) => setAboutDescriptionAr(e.target.value)}
            />
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default AboutInfo;
