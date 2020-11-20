import React from "react";
import bakbar from "../../../assets/bakbar_white.png";
import "./Thankyou.scss"

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
        <div className="staff-button-div">
          <a href="/portal/staff">
            <button
              className="button login-button is-danger"
              onClick={() => console.log("REROUTE")}
            >
              Good Bye.
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default Thankyou;
