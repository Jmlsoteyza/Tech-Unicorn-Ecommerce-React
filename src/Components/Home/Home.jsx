import React from "react";
import { HomeHeader } from "../Header/HeaderComponents";
import HomeImages from "./HomeImages";
import HomeCarousel from "./HomeCarousel";

const Home = ({ products }) => {
  return (
    <div className="home-container">
      <div className="home-inner_container">
        <HomeHeader />
        <HomeImages products={products} />
        <HomeCarousel products={products}/>
      </div>
    </div>
  );
};

export default Home;
