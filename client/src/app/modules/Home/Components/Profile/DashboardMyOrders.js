import React, { useEffect, useState } from "react";
import { getOrderItems } from "../../../../modules/actions/orders/orderActions";
import ProfileLeftSide from "./ProfileLeftSide";
import { connect } from "react-redux";
import { getWishlist } from "../../../../modules/actions/wishlist/wishlist";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Pagination from "../../Pagination/Pagination";

function DashboardMyOrders({
  getOrderItems,
  getWishlist,
  wishlist: { wishlists },
  orders: { items },
  history
}) {
  useEffect(() => {
    getOrderItems();
    getWishlist();
  }, [getOrderItems, getWishlist]);
  const [currentPage , setCurrentPage] = useState(1)
const [ordersPerPage ] = useState(5)
const indexOfLastOrders = currentPage * ordersPerPage
const indexOfFirstPage = indexOfLastOrders - ordersPerPage
const currentOrders = items.slice(indexOfFirstPage , indexOfLastOrders)
const paginate =(pageNumber)=> setCurrentPage(pageNumber)
  return (
    <div className="u-s-p-b-60 mt-5">
      <div className="section__content">
        <div className="dash">
          <div className="container">
            <div className="row">
              {/* Left Side Bar */}
              <ProfileLeftSide />
              <div className="col-lg-9 col-md-12">
                <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                  <div className="dash__pad-2">
                    <h1 className="dash__h1 u-s-m-b-14">My Orders</h1>
                    <span className="dash__text u-s-m-b-30">
                      Here you can see all products that have been ordered.
                    </span>
                    {/* <form className="m-order u-s-m-b-30">
                      <div className="m-order__select-wrapper">
                        <label className="u-s-m-r-8" htmlFor="my-order-sort">
                          Show:
                        </label>
                        <select
                          className="select-box select-box--primary-style"
                          id="my-order-sort"
                        >
                          {" "}
                          <option>Last 5 orders</option>
                          <option>Last 15 days</option>
                          <option>Last 30 days</option>
                          <option>Last 6 months</option>
                          <option>Orders placed in 2018</option>
                          <option>All Orders</option>
                        </select>
                      </div>
                    </form> */}
                    {items ===null ? <h2>No Orders </h2> : currentOrders.map((item) => (
                      <div className="m-order__list" key={item._id}>
                        <div className="m-order__get">
                          <div className="manage-o__header u-s-m-b-30">
                            <div className="dash-l-r">
                              <div>
                                <div className="manage-o__text-2 u-c-secondary"></div>
                                <div className="manage-o__text u-c-silver">
                                  Placed on{" "}
                                  <Moment format="DD/MM/YYYY">
                                    {item.createdAt}
                                  </Moment>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="manage-o__description">
                            <div className="description__container">
                              <div className="description__img-wrap">
                                {item.product &&
                                <img
                                  className="u-img-fluid"
                                  src= {`${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_SERVER}/${item.product.image}`}
                                  alt=""
                                />
}
                              </div>
                              <div className="table-p__info">
                                    <span className="table-p__name">
                                      <Link to="product-detail.html">
                                      {item.product !== null &&  item.product.title_en }
                                      </Link>
                                    </span>
                                    {/* <span className="table-p__category">
                                     <Link to="shop-side-version-2.html">
                                       {car.productId.}
                                     </Link>
                                   </span> */}
                                    <ul className="table-p__variant-list">
                                     {item.size !== "" && ( <li>
                                        <span>Size: {item.size}</span>
                                      </li>)}
                                      {item.color !== "" && ( <li>
                                        <span>Color: {item.color}</span>
                                      </li>)}
                                    </ul>
                                  </div>

                            </div>
                            <div className="description__info-wrap">
                              <div>
                                <span className="manage-o__badge badge--processing">
                                  {item.status}
                                </span>
                              </div>
                              <div>
                                <span className="manage-o__text-2 u-c-silver">
                                  Quantity:
                                  <span className="manage-o__text-2 u-c-secondary">
                                    {item.quantity}
                                  </span>
                                </span>
                              </div>
                              <div>
                                <span className="manage-o__text-2 u-c-silver">
                                  Total:
                                  <span className="manage-o__text-2 u-c-secondary">
                                    {item.order.price}
                                  </span>
                                </span>
                              </div>
                              <div className="mt-2">
                               {item.status === "Deliverd" &&
                               ( 
                               <button className="btn btn-light-primary btn-sm font-weight-bolder mr-1" onClick={()=>history.push(`/Products/add-rate/${item.product._id}`)}>
                               Add Rate
                             </button> 
                             ) 
                               }
                                {/* <button className="btn btn-light-primary btn-sm font-weight-bolder mr-1">
                                  Cancel
                                </button>
                                <button className="btn btn-light-primary btn-sm font-weight-bolder mr-1">
                                  Edit
                                </button> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
         <Pagination
          totalData={items.length}
          dataPerPage={ordersPerPage}
          paginate={paginate}
        />
                  </div>
          
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  orders: state.orders,
  wishlist: state.wishlist,
});
export default connect(mapStateToProps, { getOrderItems, getWishlist })(
  DashboardMyOrders
);
