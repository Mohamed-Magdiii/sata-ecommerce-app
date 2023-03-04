import React, { Fragment, useState } from "react";
import { FieldArray, ErrorMessage, Field } from "formik";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import TextError from "../../shared/TextError";
import { FormattedMessage } from "react-intl";
const ImageUpdate = ({ formik }) => {
  const [userProfile, setUserProfile] = useState(formik.values.image);
  const [isChanged, setIsChanged] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const handleImage = (e, i) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        isChanged[i] = true;
        userProfile[i] = { _id: userProfile[i]._id, image: reader.result };
        setUserProfile(userProfile);
        setIsChanged(isChanged);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div className="form-group row">
      <label className="col-xl-3 col-lg-3 col-form-label">
        <FormattedMessage id="INPUT.CATEGORY.IMAGE" />
      </label>
      <FieldArray name="image">
        {(props) => {
          const { push, form } = props;
          const { values } = form;
          const { image } = values;
          return (
            <>
              {image.slice(0, 5).map((_img, i) => (
                <Fragment key={i}>
                  <div className="col-lg-9 col-xl-6">
                    <div
                      className="image-input image-input-outline"
                      id="kt_profile_avatar"
                      style={
                        userProfile[i] === ""
                          ? {
                              backgroundImage: `url(${toAbsoluteUrl(
                                "/media/users/blank.png"
                              )})`,
                            }
                          : !isChanged[i]
                          ? {
                              backgroundImage: `url(${process.env.REACT_APP_API_URL}/${userProfile[i]["image"]})`,
                            }
                          : {
                              backgroundImage: `url(${userProfile[i]["image"]})`,
                            }
                      }
                    >
                      <div className="image-input-wrapper"></div>
                      <label
                        className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                        data-action="change"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Change avatar"
                      >
                        <i className="fa fa-pen icon-sm text-muted"></i>
                        <input
                          type="file"
                          name={`image[${i}]`}
                          accept=".png, .jpg, .jpeg"
                          onChange={(e) => {
                            handleImage(e, i);
                            console.log(formik);
                            formik.setFieldValue(`image[${i}]`, {
                              _id: `${image[`${i}`][`${image["_id"]}`]}`,
                              image: e.target.files[0],
                            });
                          }}
                        />
                        <Field type="hidden" name={`image[${i}]`} value="1" />
                      </label>
                      <label
                        className={`btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow`}
                        data-action="remove"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Remove avatar"
                        onClick={() => {
                          push("");
                          userProfile.push("");
                          setUserProfile(userProfile);
                        }}
                      >
                        <i className="ki ki-plus text-success icon-xs text-muted"></i>
                      </label>
                    </div>
                  </div>
                  <ErrorMessage name={`name[${i}]`} component={TextError} />
                </Fragment>
              ))}
            </>
          );
        }}
      </FieldArray>
    </div>
  );
};

export default ImageUpdate;
