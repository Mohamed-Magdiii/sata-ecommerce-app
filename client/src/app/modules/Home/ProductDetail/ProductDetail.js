import React, { useState } from "react";
import Rater from "react-rater";
import { connect } from "react-redux";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { addUpdateCart } from "../../actions/products/productsActions";
import { addDeleteWishlist } from "../../actions/wishlist/wishlist";
import { useGetAllAlbums, useGetProductById } from "./api/axiosFunctions";
import ProductDescription from "./ProductDescription";
import Review from "./Review";
function ProductDetail({ history , match, addDeleteWishlist,auth:{isAuthenticated} , wishlist:{wishlists},addUpdateCart }) {
  const { data } = useGetProductById(match.params.id);
  const { data: albums } = useGetAllAlbums(match.params.id);
  const [active, setActive] = useState("DESCRIPTION");
  const [qty, setQty] = useState(1);
  const [size , setSize] = useState("")
  const [color, setColor] = useState("")

  return (
    <div className="app-content">
      <div className="u-s-p-t-90">
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
                        >
                          {albums &&
                            albums?.data.map((a) => (
                              <div
                                key={a._id}
                                className="slick-slide"
                                data-slick-index="4"
                                aria-hidden="true"
                                style={{ width: "112px" }}
                                tabIndex="-1"
                              >
                                <img
                                  className="u-img-fluid"
                                  src={`${process.env.REACT_APP_API_URL}/${a.album}`}
                                  alt=""
                                />
                              </div>
                            ))}
                        </div>
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
                  <span className="pd-detail__name">
                    {data?.data.product.title.en}
                  </span>
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
                  <span className="text-bold ">Stars</span>
                </div>
                <div className="u-s-m-b-15">
                  <div className="pd-detail__inline">
                    <span className="pd-detail__stock">
                      {data?.data.product.store} in stock
                    </span>
                  </div>
                </div>
                <div className="u-s-m-b-15 ">
                  <div className="pd-detail__inline">
                    <span className="pd-detail__click-wrap">
                      <i
                        className="far fa-heart u-s-m-r-6"
                        onClick={() =>
                          addDeleteWishlist({ product: data.data.product._id })
                        }
                      ></i>

                      <span href="signin.html">Add to Wishlist</span>

                      <span className="pd-detail__click-count">
                        ({wishlists !== null && wishlists.length})
                      </span>
                    </span>
                  </div>
                </div>
               {data && data.data.product.size.length === 0 ? <span>No sizes available</span> : (
                  <div className="u-s-m-b-15 ">
                  <span className="mr-2">size:</span>
                  <select
                    className="form-select form-control ml-1 mt-2"
                    aria-label="Default select example"
                    style={{width:"100px"}} 
                    onChange={(e)=>setSize(e.target.value)}
                  >
                    <option value="">select</option>
                   {data && data.data.product.size.map((c , i)=>
                    (<option value={c} key={i}>{c}</option>)
                   )}
                  
                  </select>
                </div>
               )}
                {data && data.data.product.color.length === 0 ? <span>No colors available</span> : (
                <div className="u-s-m-b-2 mb-2 w-15" >
                  <span className="mr-2">Color :</span>
                  <select
                    className="form-select form-control ml-1 mt-2 mb-2 "
                    style={{width:"130px"}} 
                    aria-label="Default select example"
                    onChange={(e)=>setColor(e.target.value)}
                  >
                    <option value="">select</option>
                   {data && data.data.product.color.map((c,i)=>
                    (<option value={c} key={i}>{c}</option>)
                   )}
                  
                  
                  </select>
                </div>
                )}
                <div className="u-s-m-b-15 w-15" >
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
                            onClick={() =>
                              qty !== 0 ? setQty(qty - 1) : setQty(1)
                            }
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
                        <button
                          className="btn btn-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            isAuthenticated ? addUpdateCart(data.data.product._id, qty,size, color) : history.push('/login')
                          } 
                          }
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-s-p-y-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pd-tab">
                <div className="u-s-m-b-30">
                  <ul className="nav pd-tab__list">
                    <li
                      className="nav-item"
                      onClick={() => setActive("DESCRIPTION")}
                    >
                      <span
                        className={`nav-link ${active === "DESCRIPTION" &&
                          " active show"}`}
                        data-toggle="tab"
                        href="#pd-desc"
                      >
                        DESCRIPTION
                      </span>
                    </li>
                    <li
                      className="nav-item"
                      onClick={() => setActive("REVIEWS")}
                    >
                      <span
                        className={`nav-link ${active === "REVIEWS" &&
                          " active show"}`}
                        id="view-review"
                        data-toggle="tab"
                        href="#pd-rev"
                      >
                        REVIEWS
                        {/* <span>(23)</span> */}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <ProductDescription
                    isActive={active === "DESCRIPTION"}
                    description={data?.data.description}
                  />
                  <Review isActive={active === "REVIEWS"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  wishlist : state.wishlist,
  auth:state.authentication
})
export default connect(mapStateToProps , {addDeleteWishlist , addUpdateCart})(ProductDetail);
