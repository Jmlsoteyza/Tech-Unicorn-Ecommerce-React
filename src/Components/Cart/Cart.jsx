import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShopSingleHeader } from "../Header/HeaderComponents";
import removeIcon from "../../assets/removeIcon.svg";
import { removeItem } from "../../Redux/CartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <div className="cart-inner_container">
        <ShopSingleHeader />
        <h1 className="" style={{ marginTop: "150px" }}>
          Cart
        </h1>
        <div className="cart-table">
          <p>Product Name</p>
          <p>Price</p>
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
            <span>{product.price}</span>
            <img
              className="remove-icon"
              onClick={() => dispatch(removeItem(product.id))}
              src={removeIcon}
              alt={removeIcon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
