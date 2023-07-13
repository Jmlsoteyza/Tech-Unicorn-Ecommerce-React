import React, { useState } from "react";
import { Link } from "react-router-dom";
import heart from "../../assets/heartsvg.svg";
import rightIcon from "../../assets/rightIcon.svg";
import leftIcon from "../../assets/leftIcon.svg";

const HomeCarousel = ({ products }) => {
  console.log(products);
  const [showProducts, setShowProducts] = useState(5);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < products.length - showProducts) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <>
      <div className="home-carousel_info">
        <h1>New Arrival</h1>
        <Link className="Link" to="Shop">
          <p>See all</p>
        </Link>
      </div>
      <div className="home-carousel-container">
        <div className="carouse-btn">
          <button className="btn-next" onClick={nextSlide}>
            <img src={leftIcon} alt={leftIcon} />
          </button>
          <button className="btn-previous" onClick={prevSlide}>
            <img src={rightIcon} alt={rightIcon} />
          </button>
        </div>
        <div className="home-slide-carousel">
          {products.slice(current, current + showProducts).map((data) => {
            return (
              <div key={data.id} className="carousel-inner-container">
                <Link to={`Shop/${data.id}`}>
                  <div className="carousel-img-container">
                    <img
                      className="carousel-img"
                      src={data.image}
                      alt={data.title}
                    />
                    <span>
                      <img src={heart} alt={heart} />
                    </span>
                  </div>
                </Link>
                <div className="carousel-info">
                  <p className="carousel-title">{data.category}</p>
                  <span className="carousel-small">{data.title}</span>
                  <p className="carousel-price">${data.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeCarousel;
