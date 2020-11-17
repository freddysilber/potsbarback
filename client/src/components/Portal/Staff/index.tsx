import React, { useState } from 'react'
import './Staff.scss'

const Staff: () => JSX.Element = () => {
  const [shiftStarted, _isShiftStarted] = useState(false);
  const toggleShift: () => void = () => {
    // Send Post Regquest to User Object that Shift has Started
    // and Verify/Send Position, Cost Center, and Cash Started
    console.log("Employee Shift Started");
    _isShiftStarted(true);
  }
  return (
    <div className="container">
      {shiftStarted ? (
        <>
          <div className="staff-title">Your shift has been started.</div>
          <div className="card staff-input-form">
            <span className="staff-form-head">
              To End your workday complete the task below:
            </span>
            <ul className="staff-list">
              <li>1. Preform checkout @ Cost Center</li>
              <li>2. Preform checkout in Bak||Bar</li>
              <li>3. Have Manager verify both checkouts</li>
              <li>4. Deliver funds to comptroller for verification</li>
            </ul>
            <div className="staff-button-div">
              <a href="/portal/checkout">
                <button
                  className="button login-button is-primary"
                  onClick={() => console.log("REROUTE")}
                >
                  Daily Checkout
                </button>
              </a>
            </div>
          </div>
        </>
      ) : (
          <>
            <div className="staff-title">Hello [user.name]!</div>
            <span>
              Please verify your postition, cost center, and starting cash to
              "Start Shift".
          </span>
            <div className="card staff-input-form">
              <span className="staff-form-head">Position:</span>
              <div className="field">
                <div className="control">
                  <div className="select is-primary">
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
              <div className="field">
                <div className="control">
                  <div className="select is-primary">
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
        )
      }
    </div >
  );
};

export default Staff