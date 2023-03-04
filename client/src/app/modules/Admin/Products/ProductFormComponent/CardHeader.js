import React from "react";
import EditProfileComponent from "./EditProfileComponent";
import EditAccountComponent from "./EditAccountComponent";
import { Formik, Form } from "formik";
import { useAddNewProduct, useUpdateById } from "../shared/axiosFunctions";
import * as Yup from "yup";
import { FormattedMessage } from "react-intl";
function CardHeader({ selected, prodInfo }) {
  const { mutate: add } = useAddNewProduct();
  const { mutate: update } = useUpdateById();
  const onSubmit = (values, onSubmitProps) => {
    if (prodInfo) {
      console.log(values);
      update(values);
    } else {
      add(values);
      onSubmitProps.resetForm();
    }
  };
  const initialValues = {
    image: [{ _id: "", image: "" }],
    title_en: "",
    title_ar: "",
    categoryId: "",
    subCategory: "",
    brand: "",
    description_en: "",
    description_ar: "",
    price: "",
    color: [],
    size: [],
    store: "",
    sale: "",
    onsale: [],
    low: "",
    vendor: "",
  };
  const validationSchema = Yup.object({
    image: Yup.string().required("Image is Required !"),
    title_en: Yup.string().required("Title is Required !"),
    title_ar: Yup.string().required("Title is Required !"),
    description_en: Yup.string().required(
      "Description in English is Required !"
    ),
    description_ar: Yup.string().required(
      "Description in Arabic is Required !"
    ),
    price: Yup.string().required("Price is Required !"),
    color: Yup.array().required("Color is Required !"),
    size: Yup.array().required("Size is Required !"),
    store: Yup.string().required("Store is Required !"),
  });
  let savedData;
  if (prodInfo) {
    const { product } = prodInfo;
    const prodGalImg = prodInfo.albums.map((a) => {
      return { _id: a._id, image: a.image };
    });
    savedData = {
      id: product._id,
      image: [{ _id: product._id, image: product.image }].concat(prodGalImg),
      title_en: product.title ? product.title.en : "",
      title_ar: product.title ? product.title.ar : "",
      categoryId: product.categoryId._id,
      subCategory: product.subCategory._id,
      brand: product.brand._id,
      description_en: product.description ? product.description.en : "",
      description_ar: product.description ? product.description.ar : "",
      price: product.price,
      color: product.color,
      size: product.size,
      store: product.store,
      sale: product.sale,
      onsale: [String(product.onsale)],
      low: product.low,
      vendor: product.user._id,
    };
  }
  return (
    <div className="card-body">
      <Formik
        initialValues={savedData || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form className="form" id="kt_form">
              <div className="tab-content">
                <EditProfileComponent
                  isActive={selected === "Profile"}
                  formik={formik}
                  prodInfo={prodInfo}
                />
                <EditAccountComponent
                  isActive={selected === "Account"}
                  formik={formik}
                />
              </div>
              <div className="card-footer pb-0">
                <div className="row">
                  <div className="col-xl-2"></div>
                  <div className="col-xl-7">
                    <div className="row">
                      <div className="col-3"></div>
                      <div className="col-9">
                        <button
                          type={`submit`}
                          className="btn btn-light-primary font-weight-bold"
                        >
                          <FormattedMessage id="BUTTON.SAVECHANGES" />
                        </button>
                        <button
                          type={"reset"}
                          className="btn btn-clean font-weight-bold"
                        >
                          <FormattedMessage id="BUTTON.CANCEL" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default CardHeader;
