import React from "react";
import CheckoutUseForm from "./CheckoutUseForm";
import Validation from "./Validation";
import check from "../../assets/check.svg";
import Country from "./Country";

const Checkout = ({ handleSuccess }) => {
  const { handleChange, values, submitForm, errors } = CheckoutUseForm(
    Validation,
    handleSuccess
  );

  console.log(submitForm);

  return (
    <div className="Checkout-container">
      <h1>Checkout</h1>
      <h3 className="customer-email">Customer Email</h3>

      <form onSubmit={submitForm}>
        <div className="Checkout-email">
          <label htmlFor="">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        <h3>Shipping Address</h3>

        <div className="Checkout-firstLast_flex">
          <div className="first">
            <label htmlFor="">First Name</label>
            <input
              type="first"
              name="first"
              placeholder="First name"
              value={values.first}
              onChange={handleChange}
            />
            {errors.first && <span className="error-text">{errors.first}</span>}
          </div>
          <div className="last">
            <label htmlFor="">Last Name</label>
            <input
              type="last"
              name="last"
              placeholder="Last name"
              value={values.last}
              onChange={handleChange}
            />
            {errors.last && <span className="error-text">{errors.last}</span>}
          </div>
        </div>

        <div className="address-line">
          <label className="label-up" htmlFor="">
            Address Line
          </label>
          <textarea
            name="address"
            id=""
            cols="30"
            rows="10"
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && (
            <span className="error-text">{errors.address}</span>
          )}
        </div>
        <div className="country">
          <label className="label-up" htmlFor="">
            Country
          </label>
          <select
            name="country"
            id=""
            value={values.country}
            onChange={handleChange}
          >
            <Country />
          </select>
          {errors.country && (
            <span className="error-text">{errors.country}</span>
          )}
        </div>
        <div className="Checkout-postal-and-phone_flex">
          <div className="postal">
            <label className="label-up" htmlFor="">
              Postal Code
            </label>
            <input
              name="postal"
              id=""
              value={values.postal}
              onChange={handleChange}
              placeholder="Postal Code"
            />
            {errors.postal && (
              <span className="error-text">{errors.postal}</span>
            )}
          </div>
          <div className="phone">
            <label className="label-up" htmlFor="">
              Phone Number
            </label>
            <input
              type="tel"
              name="tel"
              placeholder="Phone number"
              value={values.tel}
              onChange={handleChange}
              maxLength="15"
            />
            {errors.tel && <span className="error-text">{errors.tel}</span>}
          </div>
        </div>
        <div className="billing-address">
          <h3>Billing Address</h3>
          <div className="check-text">
            <img src={check} alt={check} />
            <span className="shipping-text">Same as shipping address</span>
          </div>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Checkout;
