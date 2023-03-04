import React, { useState } from "react";
import {
  // useGetAllAlbums,
  useGetProductById,
} from "../../ProductDetail/api/axiosFunctions";
import { toAbsoluteUrl } from "../../../../../_metronic/_helpers";
import Rater from "react-rater";
import { addNewRate } from "../../../actions/products/productsActions";
import { connect } from "react-redux";
import { toast } from "react-toastify";

function RateForm({ match,addNewRate }) {
  const [qty, setQty] = useState(1);
  const { data } = useGetProductById(match.params.id);
  // const { data: albums } = useGetAllAlbums(match.params.id);
  const [rate, setRate ] = useState(0)
  const [comment , setComment] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault();
    addNewRate({product:match.params.id , rate:rate , comment:comment})
    setComment("")
    toast.success("Thank You For Your Review")

  }
  return (
    <div>
      <div className="u-s-p-t-90">
        {data === null || data ===undefined ? <h2>No Items</h2> : (
          <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="pd u-s-m-b-30">
                <div className="pd-wrap">
                  <div
                    id="pd-o-initiate"
                    className="slick-initialized slick-slider"
                  >
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{ opacity: "1", width: "2225px" }}
                      >
                        <div
                          className="pd-o-img-wrap slick-slide slick-current slick-active"
                          data-src={`${toAbsoluteUrl(
                            "/media/images/product/product-d-1.jpg"
                          )}`}
                          data-slick-index="0"
                          aria-hidden="false"
                          style={{
                            width: "445px",
                            position: "relative",
                            left: "0px",
                            top: "0px",
                            zIndex: "999",
                            opacity: "1",
                          }}
                          tabIndex="0"
                        >
                          {" "}
                          <img
                            className="u-img-fluid"
                            src={`${process.env.REACT_APP_API_URL}/${data?.data.product.image}`}
                            data-zoom-image="images/product/product-d-1.jpg"
                            alt=""
                          />
                        </div>
                        <div
                          className="pd-o-img-wrap slick-slide"
                          data-src={`${toAbsoluteUrl(
                            "/media/images/product/product-d-2.jpg"
                          )}`}
                          data-slick-index="1"
                          aria-hidden="true"
                          style={{
                            width: "445px",
                            position: "relative",
                            left: "-445px",
                            top: "0px",
                            zIndex: "998",
                            opacity: "0",
                            transition: "opacity 500ms ease 0s",
                          }}
                          tabIndex="-1"
                        >
                          <img
                            className="u-img-fluid"
                            src={`${toAbsoluteUrl(
                              "/media/images/product/product-d-2.jpg"
                            )}`}
                            data-zoom-image="images/product/product-d-2.jpg"
                            alt=""
                          />
                        </div>
                        <div
                          className="pd-o-img-wrap slick-slide"
                          data-src={`${toAbsoluteUrl(
                            "/media/images/product/product-d-3.jpg"
                          )}`}
                          data-slick-index="2"
                          aria-hidden="true"
                          style={{
                            width: "445px",
                            position: "relative",
                            left: "-890px",
                            top: "0px",
                            zIndex: "998",
                            opacity: "0",
                            transition: "opacity 500ms ease 0s",
                          }}
                          tabIndex="-1"
                        >
                          <img
                            className="u-img-fluid"
                            src={`${toAbsoluteUrl(
                              "/media/images/product/product-d-3.jpg"
                            )}`}
                            data-zoom-image="images/product/product-d-3.jpg"
                            alt=""
                          />
                        </div>
                        <div
                          className="pd-o-img-wrap slick-slide"
                          data-src="images/product/product-d-4.jpg"
                          data-slick-index="3"
                          aria-hidden="true"
                          style={{
                            width: "445px",
                            position: "relative",
                            left: "-1335px",
                            top: "0px",
                            zIndex: "998",
                            opacity: "0",
                            transition: "opacity 500ms ease 0s",
                          }}
                          tabIndex="-1"
                        >
                          <img
                            className="u-img-fluid"
                            src={`${toAbsoluteUrl(
                              "/media/images/product/product-d-4.jpg"
                            )}`}
                            data-zoom-image="images/product/product-d-4.jpg"
                            alt=""
                          />
                        </div>
                        <div
                          className="pd-o-img-wrap slick-slide"
                          data-src={`${toAbsoluteUrl(
                            "/media/images/product/product-d-5.jpg"
                          )}`}
                          data-slick-index="4"
                          aria-hidden="true"
                          style={{
                            width: "445px",
                            position: "relative",
                            left: "-1780px",
                            top: "0px",
                            zIndex: "998",
                            opacity: "0",
                            transition: "opacity 500ms ease 0s",
                          }}
                          tabIndex="-1"
                        >
                          <img
                            className="u-img-fluid"
                            src={`${toAbsoluteUrl(
                              "/media/images/product/product-d-5.jpg"
                            )}`}
                            data-zoom-image="images/product/product-d-5.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-s-m-t-15">
                  <div>
                    <div
                      id="pd-o-thumbnail"
                      className="slick-initialized slick-slider"
                    >
                      <div
                        className="pt-prev slick-arrow slick-disabled"
                        aria-disabled="true"
                      >
                        <i className="fas fa-angle-left"></i>
                      </div>
                      <div className="slick-list draggable">
                        <div
                          className="slick-track"
                          style={{
                            opacity: "1",
                            width: "560px",
                            transform: "translate3d(0px, 0px, 0px)",
                          }}
                        ></div>
                      </div>

                      <div
                        className="pt-next slick-arrow"
                        aria-disabled="false"
                      >
                        <i className="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-8">
              <div className="pd-detail">
                <div>
                  <span className="pd-detail__name">Product Title</span>
                </div>
                <div>
                  <div className="pd-detail__inline">
                    <span className="pd-detail__price">
                      {data?.data.product.price}
                    </span>
                  </div>
                </div>
                <div className="u-s-m-b-15">
                  <Rater
                    color="#FEd847"
                    total={5}
                    rating={data?.data.product.stars}
                    interactive={false}
                  />
                  <span className="text-bold "> Stars</span>
                </div>
                <div className="u-s-m-b-15">
                  <div className="pd-detail__inline">
                    <span className="pd-detail__stock">
                      {data?.data.product.store} in stock
                    </span>
                  </div>
                </div>
                <div className="u-s-m-b-15">
                  <div className="pd-detail__inline">
                    <span className="pd-detail__click-wrap">
                      <i className="far fa-heart u-s-m-r-6"></i>

                      <span href="signin.html">Add to Wishlist</span>

                      <span className="pd-detail__click-count">(222)</span>
                    </span>
                  </div>
                </div>
                <div className="u-s-m-b-15">
                  <form className="pd-detail__form">
                    <div className="pd-detail-inline-2">
                      <div
                        className="u-s-m-b-15"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="input-counter">
                          <span
                            className="input-counter__minus fas fa-minus"
                            style={{ marginTop: "20px" }}
                            onClick={() => setQty(qty - 1)}
                          ></span>

                          <input
                            className="input-counter__text input-counter--text-primary-style"
                            type="text"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                            data-min="1"
                            data-max="1000"
                          />

                          <span
                            className="input-counter__plus fas fa-plus"
                            style={{ marginTop: "20px" }}
                            onClick={() => setQty(qty + 1)}
                          ></span>
                        </div>
                      </div>
                      <div className="u-s-m-b-15">
                        <button className="btn btn-primary" type="submit">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="u-s-m-b-30">
            <form className="pd-tab__rev-f2">
              <h2 className="u-s-m-b-15">Add a Review</h2>

              <span className="gl-text u-s-m-b-15">
                Your email address will not be published. Required fields are
                marked *
              </span>
              <div className="u-s-m-b-30">
                <div className="rev-f2__table-wrap gl-scroll">
                  <table className="rev-f2__table">
                    <thead>
                      <tr>
                        <th>
                          <div className="gl-rating-style-2">
                            <i className="fas fa-star"></i>

                            <span>(1)</span>
                          </div>
                        </th>
                        <th>
                          <div className="gl-rating-style-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>

                            <span>(1.5)</span>
                          </div>
                        </th>
                        <th>
                          <div className="gl-rating-style-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>

                            <span>(2)</span>
                          </div>
                        </th>
                        <th>
                          <div className="gl-rating-style-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>

                            <span>(2.5)</span>
                          </div>
                        </th>
                        <th>
                          <div className="gl-rating-style-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>

                            <span>(3)</span>
                          </div>
                        </th>
                        <th>
                          <div className="gl-rating-style-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>

                            <span>(3.5)</span>
                          </div>
                        </th>
                        <th>
                          <div className="gl-rating-style-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>

                            <span>(4)</span>
                          </div>
                        </th>
                        <th>
                          <div className="gl-rating-style-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>

                            <span>(4.5)</span>
                          </div>
                        </th>
                        <th>
                          <div className="gl-rating-style-2">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>

                            <span>(5)</span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="radio-box">
                            <input type="radio" id="star-1" name="rating" value={1} onClick={(e)=> setRate(1)}/>
                            <div className="radio-box__state radio-box__state--primary">
                              <label
                                className="radio-box__label"
                                htmlFor="star-1"
                              ></label>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="radio-box">
                            <input type="radio" id="star-1.5" name="rating" onClick={(e)=> setRate(1.5)}/>
                            <div className="radio-box__state radio-box__state--primary">
                              <label
                                className="radio-box__label"
                                htmlFor="star-1.5"
                              ></label>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="radio-box">
                            <input type="radio" id="star-2" name="rating" onClick={(e)=> setRate(2)}/>
                            <div className="radio-box__state radio-box__state--primary">
                              <label
                                className="radio-box__label"
                                htmlFor="star-2"
                              ></label>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="radio-box">
                            <input type="radio" id="star-2.5" name="rating" onClick={(e)=> setRate(2.5)}/>
                            <div className="radio-box__state radio-box__state--primary">
                              <label
                                className="radio-box__label"
                                htmlFor="star-2.5"
                              ></label>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="radio-box">
                            <input type="radio" id="star-3" name="rating" onClick={(e)=> setRate(3)}/>
                            <div className="radio-box__state radio-box__state--primary">
                              <label
                                className="radio-box__label"
                                htmlFor="star-3"
                              ></label>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="radio-box">
                            <input type="radio" id="star-3.5" name="rating" onClick={(e)=> setRate(3.5)}/>
                            <div className="radio-box__state radio-box__state--primary">
                              <label
                                className="radio-box__label"
                                htmlFor="star-3.5"
                              ></label>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="radio-box">
                            <input type="radio" id="star-4" name="rating" onClick={(e)=> setRate(4)}/>
                            <div className="radio-box__state radio-box__state--primary">
                              <label
                                className="radio-box__label"
                                htmlFor="star-4"
                              ></label>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="radio-box">
                            <input type="radio" id="star-4.5" name="rating" value={comment} onClick={(e)=> setRate(4.5)}/>
                            <div className="radio-box__state radio-box__state--primary">
                              <label
                                className="radio-box__label"
                                htmlFor="star-4.5"
                              ></label>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="radio-box">
                            <input type="radio" id="star-5" name="rating" onClick={(e)=> setRate(5)}/>
                            <div className="radio-box__state radio-box__state--primary">
                              <label
                                className="radio-box__label"
                                htmlFor="star-5"
                              ></label>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="rev-f2__group">
                <div className="u-s-m-b-15">
                  <label className="gl-label" htmlFor="reviewer-text">
                    YOUR REVIEW *
                  </label>
                  <textarea
                    className="text-area text-area--primary-style"
                    id="reviewer-text"
                    onChange={(e)=>setComment(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div>
                <button className="btn btn--e-brand-shadow" type="submit" onClick={(e)=> handleSubmit(e)}>
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default connect(null , {addNewRate})(RateForm)
