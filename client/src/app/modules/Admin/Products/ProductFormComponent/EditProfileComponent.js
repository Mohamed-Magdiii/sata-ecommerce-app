import React from "react";
import { ErrorMessage, Field } from "formik";
import { useGetAllCategories } from "../shared/axiosFunctions";
import TextError from "../../shared/TextError";
import { FormattedMessage } from "react-intl";
import DispLang from "../../../utils/HEADERS";
import ImageAdd from "./ImageAdd";
import ImageUpdate from "../update/ImageUpdate";

const EditProfileComponent = ({ isActive, formik, prodInfo }) => {
  const { data } = useGetAllCategories();
  return (
    <div
      className={`tab-pane px-7 ${isActive && "show active"}`}
      role="tabpanel"
    >
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-7 my-2">
          <div className="row">
            <label className="col-3"></label>
            <div className="col-9">
              <h6 className="text-dark font-weight-bold mb-10">
                <FormattedMessage id="TABLE.TITLE.PRODUCT.INFO" />
              </h6>
            </div>
          </div>
          {prodInfo === undefined ? (
            <ImageAdd formik={formik} />
          ) : (
            formik.values.image[0] !== "" && <ImageUpdate formik={formik} />
          )}
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              <FormattedMessage id="INPUT.BRANDS.TITLEEN" />
            </label>
            <div className="col-9">
              <Field
                className="form-control form-control-lg form-control-solid"
                name="title_en"
                type="text"
              />
              <ErrorMessage name="title_en" component={TextError} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              <FormattedMessage id="INPUT.BRANDS.TITLEAR" />
            </label>
            <div className="col-9">
              <Field
                className="form-control form-control-lg form-control-solid"
                name="title_ar"
                type="text"
              />
              <ErrorMessage name="title_ar" component={TextError} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              <FormattedMessage id="INPUT.BRANDS.CATEGORY" />
            </label>
            <div className="col-9">
              <div className="input-group input-group-lg input-group-solid">
                <Field
                  as="select"
                  className="form-control form-control-lg form-control-solid"
                  name="categoryId"
                >
                  <option value={""}> Select Category </option>
                  {data?.data.map((c) => (
                    <option key={c._id} value={c._id}>
                      {DispLang ? c.title.ar : c.title.en}
                    </option>
                  ))}
                </Field>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              <FormattedMessage id="TABLE.ORDERS.PRICE" />
            </label>
            <div className="col-9">
              <div className="input-group input-group-lg input-group-solid">
                <Field
                  type="number"
                  className="form-control form-control-lg form-control-solid"
                  name="price"
                />
              </div>
              <ErrorMessage name="price" component={TextError} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              <FormattedMessage id="INPUT.PRODUCT.DESCRIPTION.EN" />
            </label>
            <div className="col-9">
              <div className="input-group input-group-lg input-group-solid">
                <Field
                  type="text"
                  as="textarea"
                  className="form-control form-control-lg form-control-solid"
                  placeholder="Description"
                  name="description_en"
                />
              </div>
              <ErrorMessage name="description_en" component={TextError} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-3 text-lg-right text-left">
              <FormattedMessage id="INPUT.PRODUCT.DESCRIPTION.AR" />
            </label>
            <div className="col-9">
              <div className="input-group input-group-lg input-group-solid">
                <Field
                  type="text"
                  as="textarea"
                  className="form-control form-control-lg form-control-solid"
                  placeholder="Description"
                  name="description_ar"
                />
              </div>
              <ErrorMessage name="description_ar" component={TextError} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileComponent;
