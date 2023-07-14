import React from "react";
import { useSelector } from "react-redux";

const CartDisplay = ({ totalFee, handleButtonClick, btnclick }) => {
  const products = useSelector((state) => state.cart.products);
  return (
    <div className="checkout-display">
      <div className="left-coupon">
        <h1>Have A Coupon?</h1>
        <input
          className="coupon-email"
          placeholder="Input your email here"
          type="text"
        />
        <button className="btn-coupon">Apply Coupon</button>
      </div>
      <div className="right-total">
        <h1>Cart Totals</h1>
        <div className="right-shipping">
          <h3>Subtotal</h3>
          <span>$150</span>
        </div>
        <div className="right-location">
          <h3>Shipping</h3>
          <span>Free shipping</span>
        </div>
        <div className="right-quantity">
          <h3>Quantity</h3>
          <span>{products.length}</span>
        </div>
        <div className="total-price-quantity">
          <h3>Total</h3>
          <span>${totalFee}</span>
        </div>
        <button className="checkout" onClick={handleButtonClick}>
          Checkout
        </button>
        {btnclick ? (
          <div className="btn-fill_up">Please fill up the form below!</div>
        ) : null}
      </div>
    </div>
  );
};

export default CartDisplay;
