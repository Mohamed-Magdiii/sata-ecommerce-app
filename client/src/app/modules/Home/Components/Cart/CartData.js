import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addUpdateCart } from "../../../../modules/actions/products/productsActions";
// import { deleteProductFromCart } from '../../../../actions/products';

function CartData({ cart, deleteFun, addUpdateCart }) {
  const [quantity, setQuantity] = useState(0);
  console.log(quantity);
  return (
    <div className="section__content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
            <div className="table-responsive">
              <table className="table-p">
                <tbody>
                  {cart &&
                    cart.items.map((car, i) => (
                      <tr key={car._id}>
                        <td>
                          <div className="table-p__box">
                            <div className="table-p__img-wrap">
                              <img
                                className="u-img-fluid h-100"
                                src={`${process.env.REACT_APP_API_URL}/${car.productId.image}`}
                                alt=""
                              />
                            </div>
                            <div className="table-p__info">
                              <span className="table-p__name">
                                <Link to="product-detail.html">
                                  {car.productId.title_en}
                                </Link>
                              </span>
                              {/* <span className="table-p__category">
                                <Link to="shop-side-version-2.html">
                                  {car.productId.}
                                </Link>
                              </span> */}
                              <ul className="table-p__variant-list">
                                <li>
                                  <span>Size: small</span>
                                </li>
                                <li>
                                  <span>Color: Red</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="table-p__price">
                            {parseInt(car.productId.price)}
                          </span>
                        </td>
                        <td class="text-center align-middle">
                          <button
                            class="btn btn-xs btn-light-success btn-icon mr-2"
                            onClick={() => {
                              setQuantity((car[i].quantity -= 1));
                              console.log(quantity);
                              // addUpdateCart({productId:car.product._id, quantity:quantity})
                            }}
                          >
                            <i class="ki ki-minus icon-xs"></i>
                          </button>
                          <span class="mr-2 font-weight-bolder">
                            {quantity === 0 ? car[i].quantity : quantity}
                          </span>
                          <button class="btn btn-xs btn-light-success btn-icon">
                            <i class="ki ki-plus icon-xs"></i>
                          </button>
                        </td>
                        <td>
                          <div className="table-p__del-wrap">
                            <Link
                              className="far fa-trash-alt table-p__delete-link"
                              to="/cart"
                              onClick={(e) => deleteFun(car._id)}
                            ></Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="col-lg-12">
                <div className="route-box">
                  <div className="route-box__g1">
                    <Link
                      className="route-box__link"
                      to="shop-side-version-2.html"
                    >
                      <i className="fas fa-long-arrow-alt-left"></i>
                      <span>CONTINUE SHOPPING</span>
                    </Link>
                  </div>
                  <div className="route-box__g2">
                    <Link className="route-box__link" to="cart.html">
                      <i className="fas fa-trash"></i>
                      <span>CLEAR CART</span>
                    </Link>
                    {/* <button
                  className="route-box__link"
                  onClick={() =>
                    addUpdateCart(quantity)
                  }
                ><i className="fas fa-sync"></i>
                  <span>UPDATE CART</span>
                </button> */}
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

export default connect(null, { addUpdateCart })(CartData);
