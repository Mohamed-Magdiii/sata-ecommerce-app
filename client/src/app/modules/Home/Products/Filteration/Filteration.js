import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useGetAllcategories } from "../../../Admin/Category/shared/axiosFunction";
import { useGetAllBrands } from "../../../Admin/Brands/shared/axiosFunctions";
import { Collapse } from "react-collapse";
import classNames from "classnames";
import {
  getAllSubCategoryByCategory,
  getAllProductBySubCategoryByCategory,
  getAllProductByFilterPrice,
} from "../../../../modules/actions/category/categoryActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Filteration = ({
  categoryId,
  setCategoryId,
  getAllSubCategoryByCategory,
  getAllProductBySubCategoryByCategory,
  getAllProductByFilterPrice,
  category: { subCategory },
}) => {
  const { data: Categories } = useGetAllcategories();
  const { data: Brands } = useGetAllBrands();
  const history = useHistory();
  const initialValues = {
    categoryId,
  };
  const validationSchema = Yup.object({
    categoryId: Yup.array().required("Required !"),
  });
  const [activeIndex, setActiveIndex] = useState(null);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(1000);
  const onSubmit = (values) => setCategoryId(values.categoryId);
  return (
    <div
      className="flex-column offcanvas-mobile w-210px w-xl-210px"
      id="kt_profile_aside"
    >
      <div className="card card-custom gutter-b">
        <div className="card-body">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <Form>
                  <div
                    className="form-group mb-11"
                    style={{ maxHeight: "500px", overflowY: "scroll" }}
                  >
                    <div className="u-s-m-b-30">
                      <div className="shop-w">
                        <div className="shop-w__intro-wrap">
                          <h1 className="shop-w__h">Categories</h1>

                          <span
                            className="fas fa-minus shop-w__toggle"
                            data-target="#s-shipping"
                            data-toggle="collapse"
                            aria-expanded="true"
                          ></span>
                        </div>
                        {Categories?.data.map((c, index) => (
                          <div
                            key={c._id}
                            className="shop-w__wrap collapse show"
                            id="s-shipping"
                          >
                            <ul className="shop-w__list ">
                              <div className="shop-w">
                                <div className="shop-w__intro-wrap">
                                  <h1 className="shop-w__h">
                                    {c.title.en}{" "}
                                    <span
                                      className="fas fa-minus navbar-toggler shop-w__toggle offset-2"
                                      data-toggle="collapse"
                                      onClick={(event) => {
                                        setActiveIndex(
                                          activeIndex === index ? null : index
                                        );
                                        getAllSubCategoryByCategory(c._id);
                                      }}
                                      data-target="#collapseExample"
                                      aria-expanded="false"
                                      aria-controls="collapseExample"
                                    ></span>
                                  </h1>
                                </div>
                                <Collapse
                                  className=""
                                  isOpened={activeIndex === index}
                                >
                                  <div
                                    className={classNames("", {
                                      show: activeIndex === index,
                                      hide: activeIndex !== index,
                                    })}
                                  >
                                    {subCategory &&
                                      subCategory.map((sub) => (
                                        <label
                                          className="radio radio-md mb-7"
                                          key={sub._id}
                                        >
                                          <input
                                            type="radio"
                                            name="price"
                                            onClick={() => {
                                              history.push(
                                                `/Products/filter/${sub._id}`
                                              );
                                              getAllProductBySubCategoryByCategory(
                                                sub._id
                                              );
                                            }}
                                          />
                                          <span></span>
                                          <div className="font-size-m text-dark-50 font-weight-bold">
                                            {sub.title.en}
                                          </div>
                                        </label>
                                      ))}
                                  </div>
                                </Collapse>
                              </div>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className="form-group mb-11"
                    style={{ maxHeight: "500px", overflowY: " scroll" }}
                  >
                    <label className="font-size-h3 font-weight-bolder text-dark mb-7">
                      Brands
                    </label>
                    <div className="checkbox-list">
                      {Brands?.data.map((c) => (
                        <label className="radio radio-md mb-7" key={c._id}>
                          <input
                            type="radio"
                            name="price"
                            onClick={() => {
                              history.push(`/Products/filter/${c._id}`);
                              getAllProductBySubCategoryByCategory(c._id);
                            }}
                          />
                          <span></span>
                          <div className="font-size-m text-dark-50 font-weight-bold">
                            {c.title.en}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div
                    className="form-group mb-11 "
                    style={{
                      maxHeight: "500px",
                      overflowY: " scroll",
                      marginLeft: "-15px",
                    }}
                  >
                    <label className="font-size-h3 font-weight-bolder text-dark mb-7">
                      Price
                    </label>
                    <div className="col-10 mb-2 ">
                      <input
                        className="form-control"
                        type="number"
                        value={from}
                        placeholder="from"
                        id="example-text-input"
                        onChange={(e) => setFrom(e.target.value)}
                        style={{ width: "150px ", position: "left" }}
                      />
                    </div>
                    <div className="col-10 ">
                      <input
                        className="form-control "
                        type="number"
                        value={to}
                        placeholder="to"
                        onChange={(e) => setTo(e.target.value)}
                        id="example-text-input"
                        style={{ width: "150px" }}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary font-weight-bolder mr-2 px-8"
                    onClick={(e) => {
                      e.preventDefault();
                      getAllProductByFilterPrice(from, to);
                    }}
                  >
                    Filter
                  </button>
                  <button
                    type="reset"
                    className="btn btn-clear font-weight-bolder text-muted px-8"
                  >
                    Reset
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  category: state.category,
});
export default connect(mapStateToProps, {
  getAllProductByFilterPrice,
  getAllSubCategoryByCategory,
  getAllProductBySubCategoryByCategory,
})(Filteration);
