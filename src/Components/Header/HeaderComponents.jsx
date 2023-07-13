import React from "react";
import nonephoto from "../../assets/nonephoto.png";
import nonephoto1 from "../../assets/nonephoto1.png";
import headerArrow from "../../assets/homeArrow.png";
import shopbg from "../../assets/shopbg.png";
import { Link } from "react-router-dom";
import nonephoto2 from "../../assets/nonephoto2.png";
import nonimage from "../../assets/nonimage.png";

export function HomeHeader() {
  return (
    <div className="header-container">
      <div className="header-inner_container">
        <div className="header-description">
          <h1>Sort out Your Spring Look</h1>
          <p>
            We will help to develop every smallest thing into a big one for your
            company
          </p>
          <div className="homeHeader-btn">
            <Link to="Shop" className="Link">
              <button className="shop-btn">
                Shop
                <img src={headerArrow} alt={headerArrow} />
              </button>
            </Link>
          </div>
        </div>
        <div className="homeImageHeader">
          <img src={nonephoto} alt={nonephoto} />
          <img src={nonephoto1} alt={nonephoto1} />
        </div>
      </div>
    </div>
  );
}

export function ShopHeader() {
  return (
    <div className="header-container">
      <div className="header-inner_container">
        <div className="header-description">
          <p style={{ width: "100%" }}>
            Home {">"} <span>Shop</span>
          </p>
          <h1>Shop</h1>
        </div>
        <div className="shopImageHeader">
          <img src={shopbg} alt={shopbg} />
        </div>
      </div>
    </div>
  );
}

export function ShopSingleHeader() {
  return (
    <div className="header-container">
      <div className="header-inner_container">
        <div className="header-description">
          <p style={{ width: "100%" }}>
            Home {">"} <span>Shopping Bag</span>
            <span></span>
          </p>
          <h1>CheckOut</h1>
        </div>
        <div className="homeImageHeader">
          <img src={nonimage} alt={nonimage} />
        </div>
      </div>
    </div>
  );
}

export function ShoppingBagHeader({ data }) {
  return (
    <div className="header-container">
      <div className="header-inner_container">
        <div className="header-description">
          <p style={{ width: "100%" }}>
            Home {">"} <span>Shop</span>
            {">"} <span>{data.category}</span> {">"} <span>{data.title}</span>
          </p>
          <h1>Shopping Bag</h1>
        </div>
        <div className="homeImageHeader">
          <img src={shopbg} alt={shopbg} />
        </div>
      </div>
    </div>
  );
}
