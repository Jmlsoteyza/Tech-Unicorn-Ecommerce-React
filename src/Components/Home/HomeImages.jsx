import React from "react";
import { Link } from "react-router-dom";

const HomeImages = ({ products }) => {
  const productLess = () => {
    if (products.length > 6) {
      return products.slice(0, 6);
    }
    return products;
  };

  return (
    <div className="HomeImages-container">
      <div className="HomeImages-inner_container">
        {productLess()?.map((data) => {
          return (
            <div className="HomeImages-product_container" key={data.id}>
              <Link className="Link" to={`/Shop/${data.id}`}>
                <img src={data.image} alt={data.image} />
                <h1>
                  {data.category.charAt(0).toUpperCase() +
                    data.category.slice(1)}
                </h1>
                <p>{data.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeImages;
