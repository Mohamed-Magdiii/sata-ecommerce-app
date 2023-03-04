import React, { useState } from "react";
import Rater from "react-rater";
import Filteration from "./Filteration/Filteration";
import {  useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addUpdateCart } from "../../actions/products/productsActions";
import { addDeleteWishlist } from "../../actions/wishlist/wishlist";
import Pagination from "../Pagination/Pagination";

const Products = ({ data: { products },addUpdateCart,addDeleteWishlist,auth:{isAuthenticated} }) => {
  const history = useHistory();
  const [categoryId, setCategoryId] = useState([]);
  const [currentPage , setCurrentPage] = useState(1)
const [blogsPerPage ] = useState(10)
const indexOfLastBlog = currentPage * blogsPerPage
const indexOfFirstPage = indexOfLastBlog - blogsPerPage
const currentProducts = products.slice(indexOfFirstPage , indexOfLastBlog)
const paginate =(pageNumber)=> setCurrentPage(pageNumber)

  return (
    <div className="app-content">
      <div className="u-s-p-y-90">
        <div className="container">
          <div className="row">
            <Filteration
              categoryId={categoryId}
              setCategoryId={setCategoryId}
              className="col-lg-3 col-md-12"
            />
        {products === null || products.length ===0 || products ===undefined ? <h2>No Items In Shop</h2> : (
              <div className="col-lg-9 col-md-12">
              <div className="shop-p">
                <div className="shop-p__toolbar u-s-m-b-30">
                  <div className="shop-p__tool-style">
                    <form>
                      <div className="tool-style__form-wrap">
                        <div className="u-s-m-b-8">
                          <select className="select-box select-box--transparent-b-2">
                            <option>Sort By: Newest Items</option>
                            <option>Sort By: Latest Items</option>
                            <option>Sort By: Best Selling</option>
                            <option>Sort By: Best Rating</option>
                            <option>Sort By: Lowest Price</option>
                            <option>Sort By: Highest Price</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="shop-p__collection">
                  <div className="row is-grid-active">
                    {currentProducts &&
                      currentProducts.map((p) => {
                        return (
                          <div
                            key={p._id}
                            className=" col-lg-4 col-md-6 col-sm-6 "
                          >
                            <div className="product-m">
                              <div className="product-m__thumb">
                                <span
                                  className="aspect aspect--bg-grey aspect--square u-d-block"
                                  href="product-detail.html"
                                >
                                  <img
                                    className="aspect__img"
                                    src={`${process.env.REACT_APP_API_URL}/${p.image}`}
                                    alt=""
                                  />
                                </span>
                                <div className="product-m__add-cart">
                                  <span
                                    className="btn--e-brand"
                                    data-modal="modal"
                                    data-modal-id="#add-to-cart"
                                    onClick={()=> {isAuthenticated ? addUpdateCart(p._id) : history.push('/login')} }>
                                    Add to Cart
                                  </span>
                                </div>
                              </div>
                              <div className="product-m__content">
                                <div className="product-m__category">
                                  <span href="shop-side-version-2.html">
                                    {p.categoryId.title?.en}
                                  </span>
                                </div>
                                <div
                                  className="product-m__name"
                                  onClick={() =>
                                    history.push(
                                      `/Products/product-detail/${p._id}`
                                    )
                                  }
                                >
                                  <span href="product-detail.html">
                                    {p.title.en}
                                  </span>
                                </div>
                                <div className="product-m__rating gl-rating-style">
                                  <Rater
                                    color="#FEd847"
                                    total={5}
                                    rating={3}
                                    interactive={false}
                                  />
                                </div>
                                <div className="product-m__price">
                                  {p.price}LE
                                </div>
                                <div className="product-m__hover">
                                  <div className="product-m__preview-description">
                                    <span>{p.description.en}</span>
                                  </div>
                                  <div className="product-m__wishlist">
                                    <span
                                      className="far fa-heart"
                                      data-tooltip="tooltip"
                                      data-placement="top"
                                      title=""
                                      data-original-title="Add to Wishlist"
                                      onClick={()=>{isAuthenticated ? addDeleteWishlist({product:p._id}): history.push('/login') }}
                                    ></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>

         <div className="mt-6">
         <Pagination
          totalData={products.length}
          dataPerPage={blogsPerPage}
          paginate={paginate}
        />
         </div>
              </div>
            </div>
        )}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  data: state.products,
  auth:state.authentication
});
export default connect(mapStateToProps, {addUpdateCart,addDeleteWishlist})(Products);
