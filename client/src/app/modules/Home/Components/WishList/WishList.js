import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  addDeleteWishlist,
  getWishlist,
  deleteWishlist,
} from "../../../../modules/actions/wishlist/wishlist";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addUpdateCart } from "../../../../modules/actions/products/productsActions";

function WishList({getWishlist,addUpdateCart,history ,deleteWishlist, wishlist:{wishlists}}) {
  useEffect(() => {
      getWishlist()
  }, [getWishlist])
      return (
        <div className="u-s-p-b-60 mt-5">
          <div className="section__intro u-s-m-b-60">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section__text-wrap">
                    <h1 className="section__heading u-c-secondary">Wishlist</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section__content">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    {/* <h2>{wishlists && wishlists.length  }</h2> */}
                  {wishlists === null || wishlists === undefined || wishlists.length === 0 ?
                   <h2>Wishlist Is Empty</h2>
                    :
                   ( wishlists.map((fav) => (
                      <div className="w-r u-s-m-b-30" key={fav._id}>
                        <div className="w-r__container">
                         {fav.product === undefined || fav.product === null ? (<h2>No Items</h2>) : (
                            <div className="w-r__wrap-1">
                            <div className="w-r__img-wrap">
                              <img
                                className="u-img-fluid"
                                src={`${process.env.REACT_APP_API_URL}/${fav.product.image}`}
                                alt=""
                                />
                            </div>
                            <div className="w-r__info">
                              <span className="w-r__name">
                                <Link to={`Products/product-detail/${fav.product._id}`}>
                                  {fav.product.title ? (fav.product.title.en) : ""}
                                </Link>
                              </span>
  
                              <span className="w-r__category">
                                <span >Category</span>
                              </span>
  
                              <span className="w-r__price">
                                {fav.product.price}
                               { fav.product.sale !== null && 
                               <span className="w-r__discount">{fav.product.sale}</span>
                                }
                              </span>
                            </div>
                          </div>
                         )}
                          <div className="w-r__wrap-2">
                            <button
                              className="w-r__link btn--e-brand-b-2"
                              data-modal="modal"
                              data-modal-id="#add-to-cart"
                              to="#"
                              onClick={(e)=>addUpdateCart(fav.product._id)}
                            >
                              ADD TO CART 
                            </button>
  
                            {/* <Link
                              className="w-r__link btn--e-transparent-platinum-b-2"
                              to="product-detail.html"
                            >
                              VIEW
                            </Link> */}
  
                            <Link
                              className="w-r__link btn--e-transparent-platinum-b-2"
                              to="#"
                              onClick={()=> deleteWishlist(fav._id, history)}
                            >
                              REMOVE
                            </Link>
                          </div>
                        </div>
                      </div>
                    )))
                    }
                </div>
  
                <div className="col-lg-12">
                  <div className="route-box">
                    <div className="route-box__g">
                      <Link
                        className="route-box__link"
                        to={`/`}
                      >
                        <i className="fas fa-long-arrow-alt-left"></i>
                        <span>CONTINUE SHOPPING</span>
                      </Link>
                    </div>
                    <div className="route-box__g">
                      <Link className="route-box__link" to="wishlist.html">
                        <i className="fas fa-trash"></i>
  
                        <span>CLEAR WISHLIST</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
  
  WishList.propTypes = {
  getWishlist:PropTypes.func.isRequired,
  addUpdateCart:PropTypes.func.isRequired,
  deleteWishlist:PropTypes.func.isRequired,
  }
  const mapStateToProps = state =>({
      wishlist:state.wishlist
  })
  
  export default connect(mapStateToProps, {getWishlist,addUpdateCart,addDeleteWishlist,deleteWishlist})(WishList)
  
  
