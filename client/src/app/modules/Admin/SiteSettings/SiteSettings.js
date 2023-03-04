import React, { useEffect, useState } from "react";
import {
  getSetting,
  updateSettings,
} from "../../../modules/actions/Settings/settings";
import { connect } from "react-redux";
import axios from "axios";
import AboutInfo from "./AboutInfo";
import SiteInfo from "./SiteInfo";
import ContactInfo from "./ContactInfo";
import { FormattedMessage } from "react-intl";
const SiteSettings = ({
  settings: { setting },
  history,
  getSetting,
  updateSettings,
}) => {
  const [mobile, setMobile] = useState("");
  const [title_en, setTitleEn] = useState("");
  const [title_ar, setTitleAr] = useState("");
  const [address_en, setAddressEn] = useState("");
  const [address_ar, setAddressAr] = useState("");
  const [logo, setLogo] = useState("");
  const [favIcon, setfavIcon] = useState("");
  const [description_en, setDescriptionEn] = useState("");
  const [description_ar, setDescriptionAr] = useState("");
  const [map, setMap] = useState("");
  const [worktime, setWorktime] = useState("");
  const [meta_title_en, setMetaTitleEn] = useState("");
  const [meta_title_ar, setMetaTitleAr] = useState("");
  const [about_title_ar, setAboutTitleAr] = useState("");
  const [about_title_en, setAboutTitleEn] = useState("");
  const [about_description_en, setAboutDescriptionEn] = useState("");
  const [about_description_ar, setAboutDescriptionAr] = useState("");
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/settings/620106ef88fd77ca609becce`,
        {
          headers: { "x-auth-token": localStorage.getItem("authToken") },
        }
      )
      .then((response) => {
        setTitleEn(response.data.title.en);
        setTitleAr(response.data.title.ar);
        setAddressEn(response.data.address.en);
        setAddressAr(response.data.address.ar);
        setMobile(response.data.mobile);
        setDescriptionEn(response.data.description.en);
        setDescriptionAr(response.data.description.ar);
        setMetaTitleEn(response.data.meta_title.en);
        setMetaTitleAr(response.data.meta_title.ar);
        setLogo(response.data.logo);
        setfavIcon(response.data.favIcon);
        setMap(response.data.map);
        setWorktime(response.data.worktime);
        setAboutTitleEn(response.data.about_title.en);
        setAboutTitleAr(response.data.about_title.ar);
        setAboutDescriptionEn(response.data.about_description.en);
        setAboutDescriptionAr(response.data.about_description.ar);
      })
      .catch((error) => {
        console.log(error);
      });

    // eslint-disable-next-line
  }, []);
  const newFormData = new FormData();
  newFormData.append("mobile", mobile);
  newFormData.append("address_en", address_en);
  newFormData.append("address_ar", address_ar);
  newFormData.append("logo", logo);
  newFormData.append("favIcon", favIcon);
  newFormData.append("title_en", title_en);
  newFormData.append("title_ar", title_ar);
  newFormData.append("description_en", description_en);
  newFormData.append("description_ar", description_ar);
  newFormData.append("meta_title_en", meta_title_en);
  newFormData.append("meta_title_ar", meta_title_ar);
  newFormData.append("worktime", worktime);
  newFormData.append("map", map);
  newFormData.append("about_title_en", about_title_en);
  newFormData.append("about_title_ar", about_title_ar);
  newFormData.append("about_description_en", about_description_en);
  newFormData.append("about_description_ar", about_description_ar);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    updateSettings(newFormData, history);
  };
  return (
    <div className="container-fluid">
      <div className="tab-content pt-5">
        <div
          className="tab-pane active"
          id="kt_apps_projects_view_tab_2"
          role="tabpanel"
        >
          <form
            className="form"
            encType="multipart/form-data"
            onSubmit={(e) => onHandleSubmit(e)}
          >
            <SiteInfo
              title_en={title_en}
              setTitleEn={setAboutTitleEn}
              title_ar={title_ar}
              setTitleAr={setTitleAr}
              description_en={description_en}
              setDescriptionEn={setDescriptionEn}
              description_ar={description_ar}
              setDescriptionAr={setDescriptionAr}
              meta_title_en={meta_title_en}
              setMetaTitleEn={setMetaTitleEn}
              meta_title_ar={meta_title_ar}
              setMetaTitleAr={setMetaTitleAr}
              setLogo={setLogo}
              setfavIcon={setfavIcon}
              logo={logo}
              favIcon={favIcon}
            />
            <div className="separator separator-dashed my-10"></div>
            <ContactInfo
              mobile={mobile}
              setMobile={setMobile}
              address_en={address_en}
              setAddressEn={setAddressEn}
              address_ar={address_ar}
              setAddressA={setAddressAr}
              worktime={worktime}
              setWorktime={setWorktime}
              map={map}
              setMap={setMap}
            />
            <div className="separator separator-dashed my-10"></div>
            <AboutInfo
              about_description_ar={about_description_ar}
              about_description_en={about_description_en}
              about_title_ar={about_title_ar}
              about_title_en={about_title_en}
              setAboutDescriptionAr={setAboutDescriptionAr}
              setAboutDescriptionEn={setAboutDescriptionEn}
              setAboutTitleAr={setAboutTitleAr}
              setAboutTitleEn={setAboutTitleEn}
            />
            <div className="separator separator-dashed my-10"></div>
            <button className="btn btn-primary m-2 ">
            <FormattedMessage id="BUTTON.SAVECHANGES" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});
export default connect(mapStateToProps, { getSetting, updateSettings })(
  SiteSettings
);
