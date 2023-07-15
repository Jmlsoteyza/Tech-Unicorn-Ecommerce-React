import React, { useState } from "react";
import Success from "./Success";
import Checkout from "./Checkout";

const Parent = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  function handleSuccess() {
    setIsSuccess(true);
  }

  
  return (
    <div>
    {!isSuccess ? (
        <Checkout handleSuccess={handleSuccess} />
      ) : (
        <Success />
      )}
    </div>
  );
};

export default Parent;
