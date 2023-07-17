import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShopSingleHeader } from "../Header/HeaderComponents";
import removeIcon from "../../assets/removeIcon.svg";
import { removeItem } from "../../Redux/CartReducer";
import CartDisplay from "./CartDisplay";
import Parent from "../Checkout/Parent";

const Cart = () => {
  const [btnclick, setBtnClick] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const total = products.reduce((acc, curr) => {
    return acc + parseInt(curr.price);
  }, 0);

  const fee = 150;
  const totalFee = fee + total;

  if (products === 0) {
    return <div>Sorry there's nothing in the bag, please choose a product</div>;
  }

  useEffect(() => {
    if (btnclick) {
      const timer = setTimeout(() => {
        setBtnClick(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [btnclick]);

  const handleButtonClick = (e) => {
    setBtnClick(true);
    e.preventDefault();
  };

  return (
    <>
      <div className="cart-container">
        <div className="cart-inner_container">
          <ShopSingleHeader />
          <h1 className="" style={{ marginTop: "150px" }}>
            Cart
          </h1>
          <div className="cart-overflow">
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
                <h1>{product.title.split(" ").slice(0, 4).join(" ")}</h1>
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
          </div>
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
          <CartDisplay
            handleButtonClick={handleButtonClick}
            btnclick={btnclick}
            totalFee={totalFee}
          />
          <Parent />
        </div>
      </div>
    </>
  );
};

export default Cart;
