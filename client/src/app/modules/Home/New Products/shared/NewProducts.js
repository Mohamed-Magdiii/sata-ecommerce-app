import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Rater from "react-rater";
import { addDeleteWishlist } from "../../../actions/wishlist/wishlist";
import { connect } from "react-redux";
import { addUpdateCart } from "../../../actions/products/productsActions";

const NewProducts = ({ data, title, addDeleteWishlist, addUpdateCart , auth:{isAuthenticated} }) => {
  const divReffer = useRef(null);
  const history = useHistory();
  const [index, setIndex] = useState(1);

  return (
    <div className="u-s-p-b-60">
      <div className="section__intro u-s-m-b-46">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section__text-wrap">
                <h1 className="section__heading u-c-secondary u-s-m-b-12">
                  {title}
                </h1>
                <span className="section__span u-c-silver">
                  GET UP FOR {title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section__content">
        <div className="container">
          <div>
            <div
              className="owl-carousel product-slider owl-loaded owl-drag"
              data-item="4"
            >
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    transition: "all 1.5s ease 0s",
                    width: "3545343546546515364354564px",
                  }}
                  ref={divReffer}
                >
                  {data?.map((p) => (
                    <div
                      key={p._id}
                      className="owl-item active"
                      style={{ width: "277.5px" }}
                    >
                      <div className="u-s-m-b-30">
                        <div className="product-o product-o--hover-on">
                          <div className="product-o__wrap">
                            <span className="aspect aspect--bg-grey aspect--square u-d-block">
                              <img
                                className="aspect__img"
                                src={`${process.env.REACT_APP_API_URL}/${p.image}`}
                                alt=""
                              />
                            </span>
                            <div className="product-o__action-wrap">
                              <ul className="product-o__action-list">
                                <li>
                                  <span
                                    data-modal="modal"
                                    data-modal-id="#add-to-cart"
                                    data-tooltip="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Add to Cart"
                                    onClick={(e) => {isAuthenticated ? addUpdateCart(p._id): history.push('/login')}}
                                  >
                                    <i className="fas fa-plus-circle"></i>
                                  </span>
                                </li>
                                <li>
                                  <span
                                    data-tooltip="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Add to Wishlist"
                                    onClick={() =>
                                      {isAuthenticated ? addDeleteWishlist({ product: p._id }) : history.push('/login') }
                                    }
                                  >
                                    <i className="fas fa-heart"></i>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <span className="product-o__category">
                            <span>{p.categoryId.title.en}</span>
                          </span>

                          <span
                            className="product-o__name"
                            onClick={() =>
                              history.push(`/Products/product-detail/${p._id}`)
                            }
                          >
                            <span>{p.title.en}</span>
                          </span>
                          <div>
                            <Rater
                              color="#FEd847"
                              total={5}
                              rating={p.stars}
                              interactive={false}
                            />
                          </div>
                          <span className="product-o__price">
                            {p.price}
                            {p.sale !== null || p.sale !== 0 ? (
                              <span className="product-o__discount">
                                {p.sale}
                              </span>
                            ) : (
                              ""
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="owl-nav">
                <div
                  className="p-prev"
                  onClick={() => {
                    divReffer.current.style.transform = `translate3d(${300 *
                      index}px, 0px, 0px)`;
                    setIndex(index + 1);
                  }}
                >
                  <i className="fas fa-long-arrow-alt-left"></i>
                </div>
                <div
                  className="p-next"
                  onClick={() => {
                    setIndex(index - 1);
                    divReffer.current.style.transform = `translate3d(${-270 *
                      index}px, 0px, 0px)`;
                  }}
                >
                  <i className="fas fa-long-arrow-alt-right"></i>
                </div>
              </div>
              <div className="owl-dots disabled"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  auth:state.authentication
})
export default connect(mapStateToProps, { addDeleteWishlist, addUpdateCart })(NewProducts);
