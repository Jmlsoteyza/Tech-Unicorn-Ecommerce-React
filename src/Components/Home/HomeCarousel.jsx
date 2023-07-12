import React, { useState } from "react";

const HomeCarousel = ({ products }) => {
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
    <div className="home-carousel-container">
      <div className="carouse-btn">
        <button onClick={nextSlide}>Next</button>
        <button onClick={prevSlide}>Previous</button>
      </div>
      {products.slice(current, current + showProducts).map((data) => {
        return (
          <div key={data.id} className="carousel-inner-container">
            <div className="carousel-img-container">
              <img
                style={{ width: "50px", height: "50px" }}
                src={data.image}
                alt={data.title}
              />
              <span></span>
            </div>
            <div className="carousel-info">
              <p>{data.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeCarousel;
