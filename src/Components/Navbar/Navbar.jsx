import React from "react";
import phonesvg from "../../assets/phonesvg.svg";
import logo from "../../assets/logo.svg";
import navheart from "../../assets/navheart.svg";
import navcart from "../../assets/navcart.svg";
import navuser from "../../assets/navuser.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);

  const productsNumber = () => {
    if (products.length === 0) {
      return null;
    }
    return products.length;
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-inner_container">
        <div className="top-navbar">
          <span className="navbar-contact">
            <img src={phonesvg} alt={phonesvg} />
            <p className="navbar-number">+971-54-561-7393</p>
          </span>
          <span>
            <Link className="Link" to="/">
              <img src={logo} alt={logo} />
            </Link>
          </span>
          <div>
            <span>
              <p>Fb</p>
            </span>
            <span>
              <p>Tw</p>
            </span>
            <span>
              <p>lg</p>
            </span>
            <span>
              <p>Yt</p>
            </span>
          </div>
        </div>
        <div className="down-navbar">
          <ul>
            <Link className="Link" to="/">
              <li className="home-style">Home</li>
            </Link>
            <li>About</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
          <ul className="icon-container">
            <li>
              <img src={navheart} alt={navheart} />
            </li>
            <Link to={`Shop/1/Cart`}>
              <li className="icon-cart">
                <span
                  className={`icon-number ${
                    products.length === 0 ? "icon-number hidden" : "icon-number"
                  }`}
                >
                  {productsNumber()}
                </span>
                <img src={navcart} alt={navcart} />
              </li>
            </Link>
            <li>
              <img src={navuser} alt={navuser} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
