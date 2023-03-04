import React from "react";
import { connect } from "react-redux";
import { addNewOrder, deleteAllCart } from "../../../../modules/actions/products/productsActions";

function CartTotalPrice({ regPrice, total, formData, addNewOrder,deleteAllCart }) {
  const onHandleSubmit = (e) => {
    e.preventDefault();
    addNewOrder(formData);
    // deleteAllCart()
  };
  return (
    <div className="col-lg-4 col-md-6 u-s-m-b-30">
      <div className="f-cart__pad-box">
        <div className="u-s-m-b-30">
          <table className="f-cart__table">
            <tbody>
              <tr>
                <td>SHIPPING</td>
                <td>{parseInt(regPrice)}</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>{parseInt(total)}</td>
              </tr>
              <tr>
                <td>GRAND TOTAL</td>
                <td>{parseInt(regPrice) + parseInt(total)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button
            className="btn btn--e-brand-b-2"
            type="submit"
            onClick={(e) => onHandleSubmit(e)}
          >
            {" "}
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { addNewOrder,deleteAllCart })(CartTotalPrice);
