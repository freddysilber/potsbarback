import React, { useState } from "react";
import "./Staff.scss";
import bakbar from "../../../assets/bakbar_white.png"

const Staff: () => JSX.Element = () => {

  const [shiftStarted, _isShiftStarted] = useState(false);

  const toggleShift: () => void = () => {
    // Send Post Regquest to User Object that Shift has Started
    // and Verify/Send Position, Cost Center, and Cash Started
    console.log("Employee Shift Started");
    _isShiftStarted(true);
  };

  return (
    <div>
      <div>
        <img src={bakbar} width="400" height="200" alt="logo" />
      </div>
      {shiftStarted ? (
        <>
          <div className="card staff-input-form">
            <div className="staff-title">Your shift has been started.</div>
            <span className="staff-form-head">
              To End your workday complete the task below:
            </span>
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
      ) : (
          <>
            <div className="card staff-input-form">
              <div className="staff-title">Hello [user.name]!</div>
              <div className="staff-form-head">
                Please verify your postition, cost center, and starting cash to
                "Start Shift".
            </div>
              <div className="staff-form-head mt-4">Position:</div>
              <div className="field">
                <div className="control">
                  <div className="select is-black">
                    <select defaultValue="0">
                      <option>Select..</option>
                      <option>Wait Staff</option>
                      <option>Bar Back</option>
                      <option>Security</option>
                      <option>Bartender</option>
                    </select>
                  </div>
                </div>
                <span className="staff-form-head">Cost Center:</span>
                <div className="field">
                  <div className="control">
                    <div className="select is-black">
                      <select defaultValue="0">
                        <option>Select ..</option>
                        <option>Main Bar</option>
                        <option>Garden</option>
                        <option>Main Door</option>
                        <option>Side Door</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <span className="staff-form-head">Starting Cash:</span>
              <input
                className="input staff-input is-black is-medium mt-0"
                type="text"
                placeholder="$250.00"
              />
              <div className="staff-button-div">
                <button
                  className="button login-button is-danger"
                  onClick={toggleShift}
                >
                  Start Shift
              </button>
              </div>
            </div>
          </>
        )}
    </div>
  );
};

export default Staff;
