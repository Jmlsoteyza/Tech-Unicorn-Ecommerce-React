import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShopSingleHeader } from "../Header/HeaderComponents";
import removeIcon from "../../assets/removeIcon.svg";
import { removeItem } from "../../Redux/CartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const total = products.reduce((acc, curr) => {
    return acc + parseInt(curr.price);
  }, 0);

  const fee = 150;
  const totalFee = fee + total;

  if (products < 0) {
    return <div>Sorry there's nothing in the bag, please choose a product</div>;
  }

  const [btnclick, setBtnClick] = useState(false);

  const handleButtonClick = (e) => {
    setBtnClick(true);
    e.preventDefault();
  };

  return (
    <div className="cart-container">
      <div className="cart-inner_container">
        <ShopSingleHeader />
        <h1 className="" style={{ marginTop: "150px" }}>
          Cart
        </h1>
        <div className="cart-table">
          <p>Product</p>
          <p>Product Name</p>
          <p>Category</p>
          <p>Total</p>
        </div>
        {products.map((product) => (
          <div className="cart-flex" key={product.id}>
            <div className="product-img">
              <img src={product.image} alt={product.image} />
            </div>
            <h1>{product.title}</h1>
            <p>{product.category}</p>
            <span>${product.price}</span>
            <img
              className="remove-icon"
              onClick={() => dispatch(removeItem(product.id))}
              src={removeIcon}
              alt={removeIcon}
            />
          </div>
        ))}
        {products.length === 0 && (
          <div
            style={{
              textAlign: "center",
              fontSize: "22px",
              marginBlock: "8rem",
            }}
          >
            Sorry there's nothing on the bag.
          </div>
        )}
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
      </div>
    </div>
  );
};

export default Cart;
