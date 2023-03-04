import React from "react";
import { FormattedMessage } from "react-intl";
function SiteInfo({
  title_en,
  setTitleEn,
  title_ar,
  setTitleAr,
  description_en,
  setDescriptionEn,
  description_ar,
  setDescriptionAr,
  meta_title_en,
  setMetaTitleEn,
  meta_title_ar,
  setMetaTitleAr,
  setLogo,
  setfavIcon,
  logo,
  favIcon,
}) {
  return (
    <>
      <div className="row">
        <div className="col-lg-9 col-xl-6 offset-xl-3">
          <h3 className="font-size-h6 mb-5 text-center">
            <FormattedMessage id="SETTINGS.SITE" />
          </h3>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label text-right">
          <FormattedMessage id="SETTINGS.TITLE" />
          <FormattedMessage id="SETTINGS.ENGLISH" />
        </label>
        <div className="col-lg-9 col-xl-6">
          <input
            className="form-control form-control-lg form-control-solid"
            type="text"
            value={title_en}
            onChange={(e) => setTitleEn(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label text-right">
          <FormattedMessage id="SETTINGS.TITLE" />{" "}
          <FormattedMessage id="SETTINGS.ARABIC" />
        </label>
        <div className="col-lg-9 col-xl-6">
          <input
            className="form-control form-control-lg form-control-solid"
            type="text"
            value={title_ar}
            onChange={(e) => setTitleAr(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label text-right">
          <FormattedMessage id="SETTINGS.DESCRIPTION" />{" "}
          <FormattedMessage id="SETTINGS.ENGLISH" />
        </label>
        <div className="col-lg-9 col-xl-6">
          <input
            className="form-control form-control-lg form-control-solid"
            type="text"
            value={description_en}
            onChange={(e) => setDescriptionEn(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label text-right">
          <FormattedMessage id="SETTINGS.DESCRIPTION" />{" "}
          <FormattedMessage id="SETTINGS.ARABIC" />
        </label>
        <div className="col-lg-9 col-xl-6">
          <input
            className="form-control form-control-lg form-control-solid"
            type="text"
            value={description_ar}
            onChange={(e) => setDescriptionAr(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label text-right">
          <FormattedMessage id="SETTINGS.META" />{" "}
          <FormattedMessage id="SETTINGS.TITLE" />{" "}
          <FormattedMessage id="SETTINGS.ENGLISH" />
        </label>
        <div className="col-lg-9 col-xl-6">
          <input
            className="form-control form-control-lg form-control-solid"
            type="text"
            value={meta_title_en}
            onChange={(e) => setMetaTitleEn(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label text-right">
          <FormattedMessage id="SETTINGS.META" />{" "}
          <FormattedMessage id="SETTINGS.TITLE" />{" "}
          <FormattedMessage id="SETTINGS.ARABIC" />
        </label>
        <div className="col-lg-9 col-xl-6">
          <input
            className="form-control form-control-lg form-control-solid"
            type="text"
            value={meta_title_ar}
            onChange={(e) => setMetaTitleAr(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label text-right">
          <FormattedMessage id="SETTINGS.LOGO" />
        </label>
        <div className="btn btn-bg-dark">
          <input
            type="file"
            onChange={(e) => {
              setLogo(e.target.files[0]);
            }}
            name="logo"
          />
        </div>

        <div className="border text-center ">
          <img
            src={`${process.env.REACT_APP_API_URL}/${logo}`}
            className="w-70px h-50px"
            alt=""
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-xl-3 col-lg-3 col-form-label text-right">
          <FormattedMessage id="SETTINGS.FAVICON" />
        </label>
        <div className="btn btn-bg-dark">
          <input
            type="file"
            // value={favIcon}
            onChange={(e) => {
              setfavIcon(e.target.files[0]);
            }}
            name="favIcon"
          />
        </div>
        <div className="border text-center ">
          <img
            src={`${process.env.REACT_APP_API_URL}/${favIcon}`}
            className="w-70px h-50px"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default SiteInfo;
