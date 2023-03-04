import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRatesByProduct } from "../../../modules/actions/products/productsActions";
import { useParams } from "react-router-dom";
import Rater from "react-rater";
import Moment from "react-moment";
function Review({ isActive, getRatesByProduct, products: { rates }, match }) {
  const params = useParams();
  useEffect(() => {
    getRatesByProduct(params.id);
  }, [getRatesByProduct, params]);
  return (
    <div className={`tab-pane ${isActive && "active show"}`} id="pd-rev">
      <div className="pd-tab__rev">
        <div className="u-s-m-b-30">
          <div className="pd-tab__rev-score">
            <div className="u-s-m-b-8">
              <h2>{rates.length} Reviews </h2>
            </div>

            <div className="u-s-m-b-8">
              <h4>We want to hear from you!</h4>
            </div>

            <span className="gl-text">
              Tell us what you think about this item
            </span>
          </div>
        </div>
        <div className="u-s-m-b-30">
          <form className="pd-tab__rev-f1">
            <div className="rev-f1__group">
              <div className="u-s-m-b-15">
                <h2>{rates.length} Review(s)</h2>
              </div>
            </div>
            {rates &&
              rates.map((r) => (
                <div className="rev-f1__review" key={r._id}>
                  <div className="review-o u-s-m-b-15">
                    <div className="review-o__info u-s-m-b-8">
                      <span className="review-o__name">{r.user.username}</span>

                      <span className="review-o__date">
                        <Moment format="DD/MM/YYYY">{r.CreatedAt}</Moment>
                      </span>
                    </div>
                    <div className="d-flex flex-column">
                      <Rater
                        color="#FEd847"
                        total={5}
                        rating={r.rate}
                        interactive={false}
                      />
                    </div>
                    <p className="review-o__text">{r.comment}</p>
                  </div>
                </div>
              ))}
          </form>
        </div>
        {/* <div className="u-s-m-b-30">
          <form className="pd-tab__rev-f2">
            <h2 className="u-s-m-b-15">Add a Review</h2>
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
                          <input type="radio" id="star-1" name="rating" />
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
                          <input type="radio" id="star-1.5" name="rating" />
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
                          <input type="radio" id="star-2" name="rating" />
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
                          <input type="radio" id="star-2.5" name="rating" />
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
                          <input type="radio" id="star-3" name="rating" />
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
                          <input type="radio" id="star-3.5" name="rating" />
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
                          <input type="radio" id="star-4" name="rating" />
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
                          <input type="radio" id="star-4.5" name="rating" />
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
                          <input type="radio" id="star-5" name="rating" />
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
                ></textarea>
              </div>
            </div>
            <div>
              <button className="btn btn-primary" type="submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  products: state.products,
});
export default connect(mapStateToProps, { getRatesByProduct })(Review);
