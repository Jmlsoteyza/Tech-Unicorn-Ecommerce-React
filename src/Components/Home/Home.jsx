import React from "react";
import { HomeHeader } from "../Header/HeaderComponents";
import HomeImages from "./HomeImages";
import HomeCarousel from "./HomeCarousel";
import Ads from "../Ads/Ads";
import ExtraImages from "../Ads/ExtraImages";
import CustomerReview from "../Ads/CustomerReview";

const Home = ({ products }) => {
  return (
    <div className="home-container">
      <div className="home-inner_container">
        <HomeHeader />
        <HomeImages products={products} />
        <HomeCarousel products={products} />
        <div style={{ marginBlock: "150px" }}>
          <Ads />
        </div>
        <div className="ExtraImages-container">
          <h1>Best Seller</h1>
          <ExtraImages products={products} />
        </div>

        <CustomerReview />
      </div>
    </div>
  );
};

export default Home;
