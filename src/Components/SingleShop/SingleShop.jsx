import React from "react";
import { useParams } from "react-router";
import { ShoppingBagHeader } from "../Header/HeaderComponents";

const SingleShop = ({ products }) => {
  const { id } = useParams();
  const parsedId = parseInt(id);
  const data = products.find((product) => product.id === parsedId);

  return (
    <div>
      {data && <ShoppingBagHeader data={data} />}
      {data && (
        <div key={data.id}>
          <h1>{data.title}</h1>
          <img src={data.image} alt="" />
        </div>
      )}
    </div>
  );
};

export default SingleShop;
