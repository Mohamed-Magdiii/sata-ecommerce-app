import React, { useEffect, useState } from "react";
import {
  getSetting,
  updateSettings,
} from "../../../modules/actions/Settings/settings";
import { connect } from "react-redux";
import axios from "axios";

import { FormattedMessage } from "react-intl";
const TermsAndConditions = ({
  settings: { setting },
  history,
  getSetting,
  updateSettings,
}) => {
  const [term_conditons_ar, setTermCondtionsAr] = useState("");
  const [term_conditons_en, setTermCondtionsEn] = useState("");
  const [privacy_policy_en, setPrivacyPolicyEn] = useState("");
  const [privacy_policy_ar, setPrivacyPolicyAr] = useState("");

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/settings/620106ef88fd77ca609becce`,
        {
          headers: { "x-auth-token": localStorage.getItem("authToken") },
        }
      )
      .then((response) => {
        setTermCondtionsEn(response.data.term_conditons.en);
        setTermCondtionsAr(response.data.term_conditons.ar);
        setPrivacyPolicyEn(response.data.privacy_policy.en);
        setPrivacyPolicyAr(response.data.privacy_policy.ar);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);
  const newFormData = new FormData();
  newFormData.append("term_conditons_ar", term_conditons_ar);
  newFormData.append("term_conditons_en", term_conditons_en);
  newFormData.append("privacy_policy_en", privacy_policy_en);
  newFormData.append("privacy_policy_ar", privacy_policy_ar);
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
            <div className="row">
              <div className="col-lg-9 col-xl-6 offset-xl-3">
                <h3 className="font-size-h6 mb-5 text-center">
                  <FormattedMessage id="SETTINGS.TERMS.CONDITIONS" />
                </h3>
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label text-right">
                    <FormattedMessage id="SETTINGS.TERMS.CONDITIONS" />{" "}
                    <FormattedMessage id="SETTINGS.ENGLISH" />
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <textarea
                      className="form-control form-control-lg form-control-solid"
                      type="text"
                      value={term_conditons_en}
                      onChange={(e) => setTermCondtionsEn(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label text-right">
                    <FormattedMessage id="SETTINGS.TERMS.CONDITIONS" />{" "}
                    <FormattedMessage id="SETTINGS.ARABIC" />
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <textarea
                      className="form-control form-control-lg form-control-solid"
                      type="text"
                      value={term_conditons_ar}
                      onChange={(e) => setTermCondtionsAr(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label text-right">
                    <FormattedMessage id="SETTINGS.PRIVACY.POLICY" />{" "}
                    <FormattedMessage id="SETTINGS.ENGLISH" />
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <textarea
                      className="form-control form-control-lg form-control-solid"
                      type="text"
                      value={privacy_policy_en}
                      onChange={(e) => setPrivacyPolicyEn(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-xl-3 col-lg-3 col-form-label text-right">
                    <FormattedMessage id="SETTINGS.PRIVACY.POLICY" />{" "}
                    <FormattedMessage id="SETTINGS.ARABIC" />
                  </label>
                  <div className="col-lg-9 col-xl-6">
                    <textarea
                      className="form-control form-control-lg form-control-solid"
                      type="text"
                      value={privacy_policy_ar}
                      onChange={(e) => setPrivacyPolicyAr(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="separator separator-dashed my-10"></div>
            <button className="btn btn-primary m-2 ">Edit</button>
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
  TermsAndConditions
);
