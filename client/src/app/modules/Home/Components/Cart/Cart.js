import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BeatLoader } from "react-spinners";
import {
  getShipping,
  getCityByCountryId,
  getRegionsByCityId,
} from "../../../actions/shippingRegion/shipping";
import { getCountries } from "../../../actions/shippingRegion/country";
import { Form } from "react-bootstrap";
import {
  getProductsFromCart,
  deleteProductFromCart,
  addUpdateCart,
  deleteAllCart,
} from "../../../actions/products/productsActions";
// import CartData from "./CartData";
import CartTotalPrice from "./CartTotalPrice";
import { Link } from "react-router-dom";
// import products from "../../../../../Reducer/products";

const Cart = ({
  country: { regions, countries, cities },
  getCityByCountryId,
  getRegionsByCityId,
  getShipping,
  getCountries,
  addUpdateCart,
  getProductsFromCart,
  products: { cart },
  deleteProductFromCart,
  deleteAllCart
}) => {
  useEffect(() => {
    getCountries();
    getProductsFromCart();    
  }, [getShipping, getCountries, getCityByCountryId,getProductsFromCart]);
  const [regPrice, setRegPrice] = useState(0);
  const [fullname, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
    const quantity =  0; 
  var total = 0;
  if (cart !== null ) {
    const items = cart.items;
    total = items.reduce(
      (sum, item) => sum + item.quantity * item.productId.price,
      0
    );
  }
  // console.log(cart);
// const history = useHistory()
  return (
    <div className="mt-5 container">
     {cart === null ||  cart.items.length === 0 ?    
     (<div className="container section__text-wrap mt-5" style={{marginBottom:"250px"}}>
                  <h1 className="section__heading u-c-secondary">
                    No Items
                  </h1>
                  (<Link to="/">Go To Shopping</Link>)

                </div>): (
      <Fragment>
          <div className="u-s-p-b-60">
        <div className="section__intro u-s-m-b-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section__text-wrap">
                  <h1 className="section__heading u-c-secondary">
                    SHOPPING CART
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {cart === null ? <BeatLoader/>  : (
          <div className="section__content">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                  <div className="table-responsive">
                    <table className="table-p">
                      <tbody>
                        {cart && cart.items.map((car, i) => car.productId && (
                          
                            <tr key={car._id}>
                            <td>
                              <div className="table-p__box">
                                <div className="table-p__img-wrap">
                                  <img
                                    className="u-img-fluid h-100 cover"
                                    src={`${process.env.REACT_APP_API_URL}/${car.productId.image}`}
                                    alt=""
                                  />
                                </div>
                                <div className="table-p__info">
                                  <span className="table-p__name">
                                    <Link to="product-detail.html">
                                      {car.productId.title ? (car.productId.title.en && car.productId.title.en) : ""}
                                    </Link>
                                  </span>
                                  {/* <span className="table-p__category">
                                   <Link to="shop-side-version-2.html">
                                     {car.productId.}
                                   </Link>
                                 </span> */}
                                  {/* <ul className="table-p__variant-list">
                                   {car.size !== "" && ( <li>
                                      <span>Size: {car.size.map((s) => (<span>{s}</span>))}</span>
                                    </li>)}
                                    {car.color !== "" && ( <li>
                                      <span>Color: {car.color}</span>
                                    </li>)}
                                  </ul> */}
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="table-p__price">
                                {car.productId.price && parseInt(car.productId.price)}
                              </span>
                            </td>
                            <td className="text-center align-middle">
                              <button
                                className="btn btn-xs btn-light-success btn-icon mr-2"
                                onClick={() => {
                                  addUpdateCart(
                                    car.productId._id,
                                    --car.quantity
                                  );
                                }}
                              >
                                <i className="ki ki-minus icon-xs"></i>
                              </button>
                              <span className="mr-2 font-weight-bolder">
                                {quantity === 0 ? car.quantity : quantity}
                              </span>
                              <button
                                className="btn btn-xs btn-light-success btn-icon"
                                onClick={() => {
                                  addUpdateCart(
                                    car.productId._id,
                                    ++car.quantity
                                  );
                                }}
                              >
                                <i className="ki ki-plus icon-xs"></i>
                              </button>
                            </td>
                            {/* <td>
                              <form>
                              <div className="table-p__input-counter-wrap">
                                <div className="input-counter">
                                  <span
                                    className="input-counter__minus fas fa-minus pt-5"
                                    onClick={() => {
                                      addUpdateCart({
                                     productId: car.productId._id,
                                     quantity: car.quantity-= 1,
                                   })
                                 }}
                                  ></span>
                                  <input
                                    className="input-counter__text input-counter--text-primary-style"
                                    type="number"
                                    value={car.quantity}
                                    min="1"
                                    data-max="1000"
                                    onChange={(e) =>
                                      //    addUpdateCart({
                                      //   productId: productId._id,
                                      //   quantity: quantity,
                                      // })
                                      console.log(e.target.value)
                                    }
                                  />
                                  <span
                                    className="input-counter__plus fas fa-plus  pt-5"
                                    onClick={() => {
                                         addUpdateCart({
                                        productId: car.productId._id,
                                        quantity: car.quantity+= 1,
                                      })
                                    }}
                                  ></span>
                                </div>
                              </div>
                              </form>
                            </td> */}
                            <td>
                              <div className="table-p__del-wrap">
                                <Link
                                  className="far fa-trash-alt table-p__delete-link"
                                  to="/cart"
                                  onClick={(e) =>
                                    // console.log("HELLO")
                                    deleteProductFromCart(car.productId._id)
                                  }
                                ></Link>
                              </div>
                            </td>
                          </tr>
                           )
                          )}
                      </tbody>
                    </table>
                    <div className="col-lg-12">
                      <div className="route-box">
                        <div className="route-box__g1">
                          <Link
                            className="route-box__link"
                            to='/'
                          >
                            <i className="fas fa-long-arrow-alt-left"></i>
                            <span>CONTINUE SHOPPING</span>
                          </Link>
                        </div>
                        <div className="route-box__g2 ">
                          <span className="route-box__link mt-2" onClick={deleteAllCart}>
                            <i className="fas fa-trash"></i>
                            <span>CLEAR CART</span>
                          </span>
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
        )}
      </div>
      <div className="u-s-p-b-60">
        <div className="section__content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                <form className="f-cart">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 u-s-m-b-30">
                      <div className="f-cart__pad-box">
                        <h1 className="gl-h1">ESTIMATE SHIPPING </h1>
                        <span className="gl-text u-s-m-b-30">
                          Enter your destination to get a shipping estimate.
                        </span>
                        <div className="u-s-m-b-30">
                          <Form.Label>COUNTRY *</Form.Label>
                          <Form.Control
                            as="select"
                            //  value={category}
                            required
                            onChange={(e) => getCityByCountryId(e.target.value)}
                          >
                            <option value="">Choose Country</option>
                            {countries.map((count) => (
                              <option key={count._id} value={count._id}>
                                {count.country && count.country.en}
                              </option>
                            ))}
                          </Form.Control>
                        </div>
                        <div className="u-s-m-b-30">
                          <Form.Label>CITY *</Form.Label>
                          <Form.Control
                            as="select"
                            required
                            //  value={category}
                            onChange={(e) => getRegionsByCityId(e.target.value)}
                          >
                            <option value="">Choose City</option>
                            {cities &&
                              cities.map((cit) => (
                                <option key={cit._id} value={cit._id}>
                                  {cit.city && cit.city.en}
                                </option>
                              ))}
                          </Form.Control>
                        </div>

                        <div className="u-s-m-b-30">
                          <Form.Label>Region *</Form.Label>
                          <Form.Control
                            as="select"
                            required
                            //  value={category}
                            onChange={(e) => setRegPrice(e.target.value)}
                          >
                            {" "}
                            <option value="">Choose Region</option>
                            {regions.map((reg) => (
                              <option key={reg._id} value={reg.price}>
                                {reg.region && reg.region.en}
                              </option>
                            ))}
                          </Form.Control>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 u-s-m-b-30 f-cart__pad-box">
                      <h1 className="checkout-f__h1">DELIVERY INFORMATION</h1>

                      <div className="u-s-m-b-30">
                        <div className="gl-inline">
                          <div className="u-s-m-b-15">
                            <label className="gl-label" htmlFor="billing-fname">
                              FULL NAME *
                            </label>
                            <input
                              className="input-text input-text--primary-style"
                              type="text"
                              id="billing-fname"
                              data-bill=""
                              onChange={(e) => setFullName(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="u-s-m-b-15">
                          <label className="gl-label" htmlFor="billing-phone">
                            PHONE *
                          </label>
                          <input
                            className="input-text input-text--primary-style"
                            type="text"
                            id="billing-phone"
                            data-bill=""
                            onChange={(e) =>
                              setMobile(parseInt(e.target.value))
                            }
                            required
                          />
                        </div>

                        <div className="u-s-m-b-15">
                          <label className="gl-label" htmlFor="billing-street">
                            STREET ADDRESS *
                          </label>
                          <input
                            className="input-text input-text--primary-style"
                            type="text"
                            id="billing-street"
                            placeholder="House name and street name"
                            data-bill=""
                            onChange={(e) => setAddress(e.target.value)}
                            required
                          />
                        </div>
                        <div className="u-s-m-b-15">
                          <label htmlFor="billing-street-optional"></label>
                        </div>
                        <div></div>
                      </div>
                    </div>
                    {cart && (
                      <CartTotalPrice
                        regPrice={regPrice}
                        formData={{
                          price: parseInt(regPrice) + parseInt(total),
                          shipping_cost: parseInt(regPrice),
                          phone: mobile,
                          address: address,
                          fullname: fullname,
                          orderItems: cart.items.map((car, i) => ({
                          product: car.productId._id,
                          quantity: car.quantity,
                          size:car.size !== "" || car.size !==null ? car.size : "",
                          color:car.color !== "" || car.color !==null ? car.color : ""
                          })),
                        }}
                        total={total}
                      />
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fragment>
     )}
    </div>
  );
};

Cart.propTypes = {
  getShipping: PropTypes.func.isRequired,
  getCountries: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  country: state.country,
  products: state.products,
});
export default connect(mapStateToProps, {
  getShipping,
  getCountries,
  getRegionsByCityId,
  getCityByCountryId,
  getProductsFromCart,
  deleteProductFromCart,
  addUpdateCart,
  deleteAllCart
})(Cart);
