import React from "react";
import smallArrow from "../../assets/smallArrow.png"

const Ads = () => {
  return (
    <div className="ads-container">
      <div className="ads-inner_container">
        <div className="ads">
        <p>Match Discount</p>
        <h1>Up to 70% off</h1>
        <div className="ads-btn">
        <button>
        Got it <img src={smallArrow} alt={smallArrow} />
        </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Ads;
