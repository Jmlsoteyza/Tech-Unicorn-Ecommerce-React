import React, { useEffect, useState } from "react";

const CheckoutUseForm = (Validation, callback) => {
  const [values, setValues] = useState({
    address: "",
    email: "",
    first: "",
    last: "",
    tel: "",
    postal: "",
    country: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    setSuccess(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && success) {
      callback();
    }
  });

  return { handleChange, values, submitForm, errors };
};

export default CheckoutUseForm;
