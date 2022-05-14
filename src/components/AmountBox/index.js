import React from "react";
import "./amountBox.css";

export default function AmountBox({ total }) {
  return (
    <div className="amount-box">
      <div className="top-amount">
        <h4>CART TOTALS</h4>
        <div>
          <strong>Subtotal</strong>
          <span>Rs {total}</span>
        </div>
        <div>
          <strong>Tax 13%</strong>
          <span>
            Rs {Math.floor((13 / 100) * total)}
          </span>
        </div>
      </div>
      <div className="total-amount">
        <div>
          <small>Total</small>
          <strong>
            Rs {Math.ceil(total * 1.13)}
          </strong>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
}
