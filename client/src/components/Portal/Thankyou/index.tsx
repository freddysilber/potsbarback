import React from "react";
import bakbar from "../../../assets/bakbar_white.png";
import "./Thankyou.scss";

const Thankyou = () => {
  return (
    <>
      <div>
        <img src={bakbar} width="400" height="200" alt="logo" />
      </div>
      <div className="card staff-input-form">
        <div className="staff-title">Your shift has been completed.</div>
        <span className="staff-form-head">
          You have completed all task in Bak||Bar for the day!
        </span>
        <div className="mt-4">
          You have been logged out for the day. Here is a summary:
        </div>
        <ul className="staff-list">
          <li>[user.name] [user.position]</li>
          <li>[user.costcenter] ( starting$: [checkout.starting_cash])</li>
          <li>Checkout completed: [checkout.is_closed]</li>
          <li>Manager verified: [checkout.is_verified]</li>
          <li>Monies recieved: [checkout.is_recieved]</li>
        </ul>

        <a href="/portal/staff">
          <div className="staff-button-div">
            <button
              className="button login-button is-danger"
              onClick={() => console.log("REROUTE")}
            >
              Good Bye.
            </button>
          </div>
        </a>
      </div>
    </>
  );
};
export default Thankyou;
