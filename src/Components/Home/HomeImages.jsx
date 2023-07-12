import React from "react";

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
              <img src={data.image} alt={data.image} />
              <h1>{data.category}</h1>
              <p>{data.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeImages;
