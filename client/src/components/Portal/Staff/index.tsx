import React, { useState } from "react";
import { Link } from "react-router-dom";
// Styles
import "./Staff.scss";
// Components
import { Dropdown, POSITIONS, COST_CENTERS } from "../../Util";
// Routes
import { Routes } from "../../../constants";
// Redux
import { connect } from "react-redux";
// Types/Interfaces
// import { Auth } from '../../Auth/index.js'

interface StaffProps {
  auth: any;
  // auth: Auth,
  history: any;
  errors: any;
}

const Staff: (props: StaffProps) => JSX.Element = (props: StaffProps) => {
  // this is where you can access the current user from the store
  console.log("staff", props);

  const [shiftStarted, _isShiftStarted] = useState(false);
  const { firstName, lastName } = props.auth.user;

  const toggleShift: () => void = () => {
    // Send Post Regquest to User Object that Shift has Started
    // and Verify/Send Position, Cost Center, and Cash Started
    console.log("Employee Shift Started");
    _isShiftStarted(true);
  };

  // useEffect(() => {
  // 	if (!props.auth.isAuthenticated) {
  // 		props.history.push(Routes.login)
  // 	}
  // })

  return (
    <div>
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
              <li>4. Deliver funds to Comptroller for verification</li>
            </ul>
            <Link to={Routes.checkout}>
              <div className="staff-button-div">
                <button
                  className="button login-button is-danger"
                  onClick={() => console.log("REROUTE")}
                >
                  Daily Checkout
                </button>
              </div>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="card staff-input-form">
            <div className="staff-title">
              Hello {firstName} {lastName}!
            </div>
            <div className="staff-form-head">
              Please verify your postition, cost center, and starting cash to
              "Start Shift".
            </div>
            <div className="staff-form-head mt-4">Position:</div>
            <div className="field">
              <div className="control">
                <div className="select is-black">
                  <Dropdown default="0" values={POSITIONS} />
                </div>
              </div>
              <span className="staff-form-head">Cost Center:</span>
              <div className="field">
                <div className="control">
                  <div className="select is-black">
                    <Dropdown default="0" values={COST_CENTERS} />
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

            <label className="checkbox">
              <input type="checkbox" />  &nbsp;I agree to the required
              <a href="#"> &nbsp;terms and conditions</a> for employment.
            </label>
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

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps)(Staff);
