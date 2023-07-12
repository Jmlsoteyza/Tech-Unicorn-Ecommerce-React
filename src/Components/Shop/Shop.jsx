import React from "react";
import { Link } from "react-router-dom";

const Shop = ({ products }) => {
  
  return (
    <div>
      Shop
      <div>
        {products.map((data, key) => {
          return (
            <div key={key}>
              <h1>{data.title}</h1>
              <Link to={`${data.id}`}>
                <img
                  src={data.image}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
