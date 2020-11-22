import React from "react";
import "./Management.scss";
import bakbar from "../../../assets/bakbar_white.png";

const Management: () => JSX.Element = () => {
  return (
    <div>
      <div>
        <img src={bakbar} width="400" height="200" alt="logo" />
      </div>
      <>
        <div className="card staff-input-form">
          <div className="staff-title">Employee Checkout</div>
          <span className="staff-form-head">
            Filter By Position:
          </span>
          <div className="field">
              <div className="control">
                <div className="select is-black">
                  <select>
                    <option selected>Position</option>
                    <option>Wait Staff</option>
                    <option>Bar Back</option>
                    <option>Security</option>
                    <option>Bartender</option>
                  </select>
                </div>
              </div>
            </div>
            <span className="staff-form-head">Name:</span>
            <div className="field">
              <div className="control">
                <div className="select is-black">
                  <select>
                    <option selected>Select ..</option>
                    <option>Main Bar</option>
                    <option>Garden</option>
                    <option>Main Door</option>
                    <option>Side Door</option>
                  </select>
                </div>
              </div>
            </div>
          <ul className="staff-list">
            <li>1. Perform checkout @ Cost Center</li>
            <li>2. Perform checkout in Bak||Bar</li>
            <li>3. Have Manager verify both checkouts</li>
            <li>4. Deliver funds to comptroller for verification</li>
          </ul>
          <a href="/portal/checkout">
            <div className="staff-button-div">
              <button
                className="button login-button is-danger"
                onClick={() => console.log("REROUTE")}
              >
                Daily Checkout
              </button>
            </div>
          </a>
        </div>
      </>
    </div>
  );
};

export default Management;
