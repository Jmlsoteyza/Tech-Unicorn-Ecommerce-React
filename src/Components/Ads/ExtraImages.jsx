import React from "react";
import { Link } from "react-router-dom";

const ExtraImages = ({ products }) => {
  const productLess = () => {
    if (products.length > 4) {
      return products.slice(0, 4);
    }
    return products;
  };

  return (
    <div className="extraImages-inner_container">
      {productLess().map((data) => {
        return (
          <div className="extraImages-images_container">
          <Link className="Link" to={`/Shop/${data.id}`}>
              <div className="images-heart">
                <img src={data.image} alt={data.image} />
              </div>
              <div className="extraImages-info">
                <h3>{data.title.slice(0, 20)}</h3>
                <p>{data.category}</p>
                <span>${data.price}</span>
              </div>
              </Link>
            </div>
        );
      })}
    </div>
  );
};

export default ExtraImages;
