import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Checkout() {
  return (
    <div className="mt-5">
      <div class="u-s-p-b-60">
        <div class="section__content">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div id="checkout-msg-group">
                  <div class="msg">
                    <span class="msg__text">
                      Have a coupon?
                      <Link
                        class="gl-link"
                        to="#have-coupon"
                        data-toggle="collapse"
                      >
                        Click Here to enter your code
                      </Link>
                    </span>
                    <div
                      class="collapse"
                      id="have-coupon"
                      data-parent="#checkout-msg-group"
                    >
                      <div class="c-f u-s-m-b-16">
                        <span class="gl-text u-s-m-b-16">
                          Enter your coupon code if you have one.
                        </span>
                        <form class="c-f__form">
                          <div class="u-s-m-b-16">
                            <div class="u-s-m-b-15">
                              <label for="coupon"></label>

                              <input
                                class="input-text input-text--primary-style"
                                type="text"
                                id="coupon"
                                placeholder="Coupon Code"
                              />
                            </div>
                            <div class="u-s-m-b-15">
                              <button
                                class="btn btn--e-transparent-brand-b-2"
                                type="submit"
                              >
                                APPLY
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
          </div>
        </div>
      </div>

      <div class="u-s-p-b-60">
        <div class="section__content">
          <div class="container">
            <div class="checkout-f">
              <div class="row">
                <div class="col-lg-6">
                  <h1 class="checkout-f__h1">DELIVERY INFORMATION</h1>
                  <form class="checkout-f__delivery">
                    <div class="u-s-m-b-30">
                      <div class="u-s-m-b-15">
                        <div class="check-box">
                          <input type="checkbox" id="get-address" />
                          <div class="check-box__state check-box__state--primary">
                            <label class="check-box__label" for="get-address">
                              Use default shipping and billing address from
                              account
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="gl-inline">
                        <div class="u-s-m-b-15">
                          <label class="gl-label" for="billing-fname">
                            FIRST NAME *
                          </label>

                          <input
                            class="input-text input-text--primary-style"
                            type="text"
                            id="billing-fname"
                            data-bill=""
                          />
                        </div>
                        <div class="u-s-m-b-15">
                          <label class="gl-label" for="billing-lname">
                            LAST NAME *
                          </label>

                          <input
                            class="input-text input-text--primary-style"
                            type="text"
                            id="billing-lname"
                            data-bill=""
                          />
                        </div>
                      </div>

                      <div class="u-s-m-b-15">
                        <label class="gl-label" for="billing-email">
                          E-MAIL *
                        </label>

                        <input
                          class="input-text input-text--primary-style"
                          type="text"
                          id="billing-email"
                          data-bill=""
                        />
                      </div>

                      <div class="u-s-m-b-15">
                        <label class="gl-label" for="billing-phone">
                          PHONE *
                        </label>

                        <input
                          class="input-text input-text--primary-style"
                          type="text"
                          id="billing-phone"
                          data-bill=""
                        />
                      </div>

                      <div class="u-s-m-b-15">
                        <label class="gl-label" for="billing-street">
                          STREET ADDRESS *
                        </label>

                        <input
                          class="input-text input-text--primary-style"
                          type="text"
                          id="billing-street"
                          placeholder="House name and street name"
                          data-bill=""
                        />
                      </div>
                      <div class="u-s-m-b-15">
                        <label for="billing-street-optional"></label>

                        <input
                          class="input-text input-text--primary-style"
                          type="text"
                          id="billing-street-optional"
                          placeholder="Apartment, suite unit etc. (optional)"
                          data-bill=""
                        />
                      </div>

                      <div class="u-s-m-b-15">
                        <label class="gl-label" for="billing-country">
                          COUNTRY *
                        </label>
                        <select
                          class="select-box select-box--primary-style"
                          id="billing-country"
                          data-bill=""
                        >
                          <option selected value="">
                            Choose Country
                          </option>
                          <option value="uae">United Arab Emirate (UAE)</option>
                          <option value="uk">United Kingdom (UK)</option>
                          <option value="us">United States (US)</option>
                        </select>
                      </div>

                      <div class="u-s-m-b-15">
                        <label class="gl-label" for="billing-town-city">
                          TOWN/CITY *
                        </label>

                        <input
                          class="input-text input-text--primary-style"
                          type="text"
                          id="billing-town-city"
                          data-bill=""
                        />
                      </div>

                      <div class="u-s-m-b-15">
                        <label class="gl-label" for="billing-state">
                          STATE/PROVINCE *
                        </label>
                        <select
                          class="select-box select-box--primary-style"
                          id="billing-state"
                          data-bill=""
                        >
                          <option selected value="">
                            Choose State/Province
                          </option>
                          <option value="al">Alabama</option>
                          <option value="al">Alaska</option>
                          <option value="ny">New York</option>
                        </select>
                      </div>

                      <div class="u-s-m-b-15">
                        <label class="gl-label" for="billing-zip">
                          ZIP/POSTAL CODE *
                        </label>

                        <input
                          class="input-text input-text--primary-style"
                          type="text"
                          id="billing-zip"
                          placeholder="Zip/Postal Code"
                          data-bill=""
                        />
                      </div>
                      <div class="u-s-m-b-10">
                        <div class="check-box">
                          <input
                            type="checkbox"
                            id="make-default-address"
                            data-bill=""
                          />
                          <div class="check-box__state check-box__state--primary">
                            <label
                              class="check-box__label"
                              for="make-default-address"
                            >
                              Make default shipping and billing address
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="u-s-m-b-10">
                        <Link
                          class="gl-link"
                          to="#create-account"
                          data-toggle="collapse"
                        >
                          Want to create a new account?
                        </Link>
                      </div>
                      <div class="collapse u-s-m-b-15" id="create-account">
                        <span class="gl-text u-s-m-b-15">
                          Create an account by entering the information below.
                          If you are a returning customer please login at the
                          top of the page.
                        </span>
                        <div>
                          <label class="gl-label" for="reg-password">
                            Account Password *
                          </label>

                          <input
                            class="input-text input-text--primary-style"
                            type="text"
                            data-bill
                            id="reg-password"
                          />
                        </div>
                      </div>
                      <div class="u-s-m-b-10">
                        <label class="gl-label" for="order-note">
                          ORDER NOTE
                        </label>
                        <textarea
                          class="text-area text-area--primary-style"
                          id="order-note"
                        ></textarea>
                      </div>
                      <div>
                        <button
                          class="btn btn--e-transparent-brand-b-2"
                          type="submit"
                        >
                          SAVE
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="col-lg-6">
                  <h1 class="checkout-f__h1">ORDER SUMMARY</h1>

                  <div class="o-summary">
                    <div class="o-summary__section u-s-m-b-30">
                      <div class="o-summary__item-wrap gl-scroll">
                        <div class="o-card">
                          <div class="o-card__flex">
                            <div class="o-card__img-wrap">
                              <img
                                class="u-img-fluid"
                                src="images/product/electronic/product3.jpg"
                                alt=""
                              />
                            </div>
                            <div class="o-card__info-wrap">
                              <span class="o-card__name">
                                <Link to="product-detail.html">
                                  Yellow Wireless Headphone
                                </Link>
                              </span>

                              <span class="o-card__quantity">Quantity x 1</span>

                              <span class="o-card__price">$150.00</span>
                            </div>
                          </div>

                          <Link class="o-card__del far fa-trash-alt"></Link>
                        </div>
                        <div class="o-card">
                          <div class="o-card__flex">
                            <div class="o-card__img-wrap">
                              <img
                                class="u-img-fluid"
                                src="images/product/electronic/product18.jpg"
                                alt=""
                              />
                            </div>
                            <div class="o-card__info-wrap">
                              <span class="o-card__name">
                                <Link to="product-detail.html">
                                  Nikon DSLR Camera 4k
                                </Link>
                              </span>

                              <span class="o-card__quantity">Quantity x 1</span>

                              <span class="o-card__price">$150.00</span>
                            </div>
                          </div>

                          <Link class="o-card__del far fa-trash-alt"></Link>
                        </div>
                        <div class="o-card">
                          <div class="o-card__flex">
                            <div class="o-card__img-wrap">
                              <img
                                class="u-img-fluid"
                                src="images/product/women/product8.jpg"
                                alt=""
                              />
                            </div>
                            <div class="o-card__info-wrap">
                              <span class="o-card__name">
                                <Link to="product-detail.html">
                                  New Dress D Nice Elegant
                                </Link>
                              </span>

                              <span class="o-card__quantity">Quantity x 1</span>

                              <span class="o-card__price">$150.00</span>
                            </div>
                          </div>

                          <Link class="o-card__del far fa-trash-alt"></Link>
                        </div>
                        <div class="o-card">
                          <div class="o-card__flex">
                            <div class="o-card__img-wrap">
                              <img
                                class="u-img-fluid"
                                src="images/product/men/product8.jpg"
                                alt=""
                              />
                            </div>
                            <div class="o-card__info-wrap">
                              <span class="o-card__name">
                                <Link to="product-detail.html">
                                  New Fashion D Nice Elegant
                                </Link>
                              </span>

                              <span class="o-card__quantity">Quantity x 1</span>

                              <span class="o-card__price">$150.00</span>
                            </div>
                          </div>

                          <Link class="o-card__del far fa-trash-alt"></Link>
                        </div>
                      </div>
                    </div>
                    <div class="o-summary__section u-s-m-b-30">
                      <div class="o-summary__box">
                        <h1 class="checkout-f__h1">SHIPPING & BILLING</h1>
                        <div class="ship-b">
                          <span class="ship-b__text">Ship to:</span>
                          <div class="ship-b__box u-s-m-b-10">
                            <p class="ship-b__p">
                              4247 Ashford Drive Virginia VA-20006 USA (+0)
                              900901904
                            </p>

                            <Link
                              class="ship-b__edit btn--e-transparent-platinum-b-2"
                              data-modal="modal"
                              data-modal-id="#edit-ship-address"
                            >
                              Edit
                            </Link>
                          </div>
                          <div class="ship-b__box">
                            <span class="ship-b__text">
                              Bill to default billing address
                            </span>

                            <Link
                              class="ship-b__edit btn--e-transparent-platinum-b-2"
                              data-modal="modal"
                              data-modal-id="#edit-ship-address"
                            >
                              Edit
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="o-summary__section u-s-m-b-30">
                      <div class="o-summary__box">
                        <table class="o-summary__table">
                          <tbody>
                            <tr>
                              <td>SHIPPING</td>
                              <td>$4.00</td>
                            </tr>
                            <tr>
                              <td>TAX</td>
                              <td>$0.00</td>
                            </tr>
                            <tr>
                              <td>SUBTOTAL</td>
                              <td>$379.00</td>
                            </tr>
                            <tr>
                              <td>GRAND TOTAL</td>
                              <td>$379.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="o-summary__section u-s-m-b-30">
                      <div class="o-summary__box">
                        <h1 class="checkout-f__h1">PAYMENT INFORMATION</h1>
                        <form class="checkout-f__payment">
                          <div class="u-s-m-b-10">
                            <div class="radio-box">
                              <input
                                type="radio"
                                id="cash-on-delivery"
                                name="payment"
                              />
                              <div class="radio-box__state radio-box__state--primary">
                                <label
                                  class="radio-box__label"
                                  for="cash-on-delivery"
                                >
                                  Cash on Delivery
                                </label>
                              </div>
                            </div>

                            <span class="gl-text u-s-m-t-6">
                              Pay Upon Cash on delivery. (This service is only
                              available for some countries)
                            </span>
                          </div>
                          <div class="u-s-m-b-10">
                            <div class="radio-box">
                              <input
                                type="radio"
                                id="direct-bank-transfer"
                                name="payment"
                              />
                              <div class="radio-box__state radio-box__state--primary">
                                <label
                                  class="radio-box__label"
                                  for="direct-bank-transfer"
                                >
                                  Direct Bank Transfer
                                </label>
                              </div>
                            </div>

                            <span class="gl-text u-s-m-t-6">
                              Make your payment directly into our bank account.
                              Please use your Order ID as the payment reference.
                              Your order will not be shipped until the funds
                              have cleared in our account.
                            </span>
                          </div>
                          <div class="u-s-m-b-10">
                            <div class="radio-box">
                              <input
                                type="radio"
                                id="pay-with-check"
                                name="payment"
                              />
                              <div class="radio-box__state radio-box__state--primary">
                                <label
                                  class="radio-box__label"
                                  for="pay-with-check"
                                >
                                  Pay With Check
                                </label>
                              </div>
                            </div>

                            <span class="gl-text u-s-m-t-6">
                              Please send a check to Store Name, Store Street,
                              Store Town, Store State / County, Store Postcode.
                            </span>
                          </div>
                          <div class="u-s-m-b-10">
                            <div class="radio-box">
                              <input
                                type="radio"
                                id="pay-with-card"
                                name="payment"
                              />
                              <div class="radio-box__state radio-box__state--primary">
                                <label
                                  class="radio-box__label"
                                  for="pay-with-card"
                                >
                                  Pay With Credit / Debit Card
                                </label>
                              </div>
                            </div>

                            <span class="gl-text u-s-m-t-6">
                              International Credit Cards must be eligible for
                              use within the United States.
                            </span>
                          </div>
                          <div class="u-s-m-b-10">
                            <div class="radio-box">
                              <input type="radio" id="pay-pal" name="payment" />
                              <div class="radio-box__state radio-box__state--primary">
                                <label class="radio-box__label" for="pay-pal">
                                  Pay Pal
                                </label>
                              </div>
                            </div>

                            <span class="gl-text u-s-m-t-6">
                              When you click "Place Order" below we'll take you
                              to Paypal's site to set up your billing
                              information.
                            </span>
                          </div>
                          <div class="u-s-m-b-15">
                            <div class="check-box">
                              <input type="checkbox" id="term-and-condition" />
                              <div class="check-box__state check-box__state--primary">
                                <label
                                  class="check-box__label"
                                  for="term-and-condition"
                                >
                                  I consent to the
                                </label>
                              </div>
                            </div>

                            <Link class="gl-link">Terms of Service.</Link>
                          </div>
                          <div>
                            <button class="btn btn--e-brand-b-2" type="submit">
                              PLACE ORDER
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
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

export default connect(null)(Checkout);
