import React from "react";
import "./Checkout.scss";

const Checkout = () => {
  return (
    <div className="container">
      <div className="checkout-title">
        [user.name], please complete this form for you checkout process.
      </div>
      <div className="card checkout-input-form">
        <span className="checkout-form-head">CheckoutSTUFFF</span>
        <input
          className="input checkout-input is-primary is-medium"
          type="text"
          placeholder="$250.00"
        />
        <div className="checkout-button-div">
          <a href="/portal/management">
            <button className="button login-button is-primary">Login</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Checkout;