import React, { useState } from "react";
import "./Staff.scss";

const Staff = () => {
  const [shiftStarted, _isShiftStarted] = useState(false);
  const toggleShift = () => {
    // Send Post Regquest to User Object that Shift has Started
    // and Verify/Send Position, Cost Center, and Cash Started
    console.log("Employee Shift Started");
    _isShiftStarted(true);
  };
  return (
    <div className="container">
      {shiftStarted ? (
        <div>Hellow World </div>
      ) : (
        <>
          <div className="staff-title">
            Hello [user.name] please verify your postition, cost center, and
            starting cash to "Start Shift".
          </div>

          <div className="card staff-input-form">
            <span className="staff-form-head">Position:</span>
            <div class="field">
              <div class="control">
                <div class="select is-primary">
                  <select>
                    <option disabled>Select dropdown</option>
                    <option>Wait Staff</option>
                    <option>Bar Back</option>
                    <option>Security</option>
                    <option>Bartender</option>
                  </select>
                </div>
              </div>
            </div>
            <span className="staff-form-head">Cost Center:</span>
            <div class="field">
              <div class="control">
                <div class="select is-primary">
                  <select>
                    <option disabled>Select dropdown</option>
                    <option>Main Bar</option>
                    <option>Garden</option>
                    <option>Main Door</option>
                    <option>Side Door</option>
                  </select>
                </div>
              </div>
            </div>
            <span className="staff-form-head">Starting Cash:</span>
            <input
              className="input staff-input is-primary is-medium"
              type="text"
              placeholder="$250.00"
            />
            <div className="staff-button-div">
              <button
                className="button login-button is-primary"
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
