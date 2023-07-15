import React, { useState } from "react";
import user from "./CustomerData";
import rightIcon from "../../assets/rightIcon.svg";
import leftIcon from "../../assets/leftIcon.svg";

const CustomerReview = () => {
  const [index, setIndex] = useState(0);
  const { name, career, image, description } = user[index];

  const userNumber = (number) => {
    if (number > user.length - 1) {
      return 0;
    } else if (number < 0) {
      return user.length - 1;
    }
    return number;
  };

  const nextSlide = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return userNumber(newIndex);
    });
  };

  const prevSlide = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return userNumber(newIndex);
    });
  };

  const randomSlide = () => {
    let random = Math.floor(Math.random() * user.length);
    if (random === index) {
      random = index + 1;
    }
    setIndex(userNumber(random));
  };

  return (
    <div className="customer-container">
      <h1>What our customer says</h1>
      <div className="customer-inner_container">
        <div className="customer-box">
          <img className="profile" src={image} alt={image} />
          <div className="customer">
            <p>{description}</p>
            <h3>{name}</h3>
            <span>{career}</span>
          </div>
          <button className="random-btn" onClick={randomSlide}>
            Random
          </button>
          <div className="customer-btns">
            <button className="left-btn" onClick={prevSlide}>
              <img src={leftIcon} alt={leftIcon} />
            </button>
            <button className="right-btn" onClick={nextSlide}>
              <img src={rightIcon} alt={rightIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
