import React, { useState } from "react";
import { useParams } from "react-router";
import { ShoppingBagHeader } from "../Header/HeaderComponents";
import cart from "../../assets/cart.png";
import { useDispatch } from "react-redux";
import Cart from "../Cart/Cart";
import { addToCart } from "../../Redux/CartReducer";
import { Link } from "react-router-dom";

const SingleShop = ({ products }) => {
  const { id } = useParams();
  const parsedId = parseInt(id);
  const data = products.find((product) => product.id === parsedId);
  const dispatch = useDispatch();

  const { title, price, category, image } = data;

  const lowerPrice = price * 3;

  return (
    <div>
      {data && <ShoppingBagHeader data={data} />}
      <div className="singleShop-container">
        <div className="singleShop-inner_container">
          <div className="singleShop-left">
            <div className="main-image" key={data.id}>
              <img src={image} alt="" />
              <h1>{category}</h1>
              
            </div>
          </div>
          <div className="singleShop-right">
            <h1>{title}</h1>
            <p>
              Avaliability: <span>48 in stocks</span>
            </p>
            <div className="singleShop-price_check">
              <h3>${price}</h3>
              <h3>${lowerPrice}</h3>
            </div>
            <div className="singleShop">
              <Link to="Cart">
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: data.id,
                        title: title,
                        price: price,
                        category: category,
                        image: image,
                        // quantity
                      })
                    )
                  }
                >
                  <span>
                    Add to Cart <img src={cart} alt={cart} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleShop;
