import React from "react";
import { Field, ErrorMessage } from "formik";
import {
  useGetAllBrands,
  useGetAllSubCategory,
} from "../shared/axiosFunctions";
import { colorOptions, sizeOptions } from "../shared/constants";
import TextError from "../../shared/TextError";
import CustomSelect from "../../shared/CustomSelect";
import { FormattedMessage } from "react-intl";
import { useFindByRole } from "../../Orders/shared/axiosFunctions";
import DispLang from "../../../utils/HEADERS";
import { useSelector } from "react-redux";

const EditAccountComponent = ({ isActive, formik }) => {
  const { data: subCategories } = useGetAllSubCategory(
    formik.values.categoryId
  );
  const { data: brands } = useGetAllBrands(formik.values.categoryId);
  const { user } = useSelector((state) => state.auth);
  const { data: vendors } = useFindByRole(
    user.roles[0] === 1 ? "admin" : "vendor",
    "vendor"
  );

  return (
    <div
      className={`tab-pane px-7 ${isActive && "show active"}`}
      role="tabpanel"
    >
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-7">
          <div className="my-2">
            <div className="row">
              <label className="col-form-label col-3 text-lg-right text-left"></label>
              <div className="col-9">
                <h6 className="text-dark font-weight-bold mb-10">
                  <FormattedMessage id="TABLE.TITLE.PRODUCT.INFO" />
                </h6>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.PRODUCT.SUB.CATEGORY" />
              </label>
              <div className="col-9">
                <Field
                  name="subCategory"
                  as="select"
                  className="form-control form-control-lg form-control-solid"
                >
                  <option>Select Sub Category</option>
                  {subCategories?.data.map((s) => (
                    <option key={s._id} value={s._id}>
                      {DispLang ? s.title.ar : s.title.en}
                    </option>
                  ))}
                </Field>
              </div>
            </div>

            {user.roles[0] === 1 && (
              <div className="form-group row">
                <label className="col-form-label col-3 text-lg-right text-left">
                  <FormattedMessage id="TABLE.PRODUCT.VENDOR" />
                </label>
                <div className="col-9">
                  <Field
                    name="vendor"
                    as="select"
                    className="form-control form-control-lg form-control-solid"
                  >
                    <option>Select Vendor</option>
                    {vendors?.data.map((v) => (
                      <option key={v._id} value={v._id}>
                        {v.fullname}
                      </option>
                    ))}
                  </Field>
                </div>
              </div>
            )}

            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.PRODUCT.BRAND" />
              </label>
              <div className="col-9">
                <Field
                  name="brand"
                  as="select"
                  className="form-control form-control-lg form-control-solid"
                >
                  <option value={""}>Select Brand</option>
                  {brands?.data.map((b) => (
                    <option key={b._id} value={b._id}>
                      {DispLang ? b.title.ar : b.title.en}
                    </option>
                  ))}
                </Field>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label text-right col-lg-3 col-sm-12">
                <FormattedMessage id="TABLE.PRODUCT.COLOR" />
              </label>
              <div className="col-9">
                <Field
                  style={{ marginBottom: "1rem", maxWidth: "20rem" }}
                  name="color"
                  options={colorOptions}
                  component={CustomSelect}
                  placeholder="Select multi Colors..."
                  isMulti={true}
                />
                <ErrorMessage name="color" component={TextError} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label text-right col-lg-3 col-sm-12">
                <FormattedMessage id="TABLE.PRODUCT.SIZE" />
              </label>
              <div className="col-9">
                <Field
                  style={{ marginBottom: "1rem", maxWidth: "20rem" }}
                  name="size"
                  options={sizeOptions}
                  component={CustomSelect}
                  placeholder="Select multi Sizes..."
                  isMulti={true}
                />
                <ErrorMessage name="size" component={TextError} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.PRODUCT.STORE" />
              </label>
              <div className="col-9">
                <Field
                  className="form-control form-control-lg form-control-solid"
                  name="store"
                  type="text"
                  placeholder="Store"
                />
                <ErrorMessage name="store" component={TextError} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.PRODUCT.HAS.SALE" />
              </label>
              <div className="col-3">
                <div className="checkbox-inline">
                  <label className="checkbox mt-3">
                    <Field type="checkbox" name="onsale" value={"true"} />
                    <span></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.PRODUCT.SALE" />
              </label>
              <div className="col-9">
                <Field
                  className="form-control form-control-lg form-control-solid"
                  name="sale"
                  type="number"
                  placeholder="Sale"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-3 text-lg-right text-left">
                <FormattedMessage id="TABLE.PRODUCT.LOW" />
              </label>
              <div className="col-9">
                <Field
                  className="form-control form-control-lg form-control-solid"
                  name="low"
                  type="number"
                  placeholder="Low"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAccountComponent;
