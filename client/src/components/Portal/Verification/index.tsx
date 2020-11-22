import React, { useState } from "react";
// Styles
import "./Verification.scss";
// Routes
import { Routes } from '../../../utils/routes'
import { LogoWhite } from "../../Util";

const Verification = () => {
	const [checkout, _checkout] = useState(true);
	const [manager, _manager] = useState(false);
	const [comptroller, _comptroller] = useState(false);
	const [logout_allow, _logout_allow] = useState(false);

	const verifyState = () => {
		_manager(true)
		_comptroller(true)
		_logout_allow(true)
	}
	return (
		<>
			<LogoWhite />

			<div className="card staff-input-form">
				<div className="staff-title">Verification</div>
				<span className="staff-form-head">
					Now that your check out is complete, next verify your paper and
					digital checkouts are correct by management. Then deliver any monies owed to the
					house.
        </span>

				<ul className="staff-list">
					Procedures to Complete
  {checkout ? <li className="taskCompleted"> 1. Preform checkout @ Cost Center</li> : <li className="taskNeeded has-text-danger">1. Preform checkout @ Cost Center</li>}
					{checkout ? <li className="taskCompleted">2. Preform checkout in Bak || Bar </li> : <li className="taskNeeded has-text-danger">2. Preform checkout in Bak || Bar </li>}
					{manager ? <li className="taskCompleted">3. Have Manager verify both checkouts</li> : <li className="taskNeeded has-text-danger">3. Have manager verify both checkouts</li>}
					{comptroller ? <li className="taskCompleted">4. Deliver funds to comptroller for verification</li> : <li className="taskNeeded has-text-danger">4. Deliver funds to comptroller for verification</li>}
				</ul>

				<div className="staff-button-div">
					{logout_allow ? (
						<span className="staff-form-head">All task have been completed.</span>
					) : (
							<span className="staff-form-head">
								Have manager and comptroller to verify your submission to allow
								LogOut
							</span>
						)}

					{logout_allow ? (
						<a href={Routes.thankyou}>
							<div className="staff-button-div">
								<button className="button login-button is-danger" onClick={() => console.log("REROUTE")}>Log Out</button>
							</div>
						</a>
					) : (
							<>
								<span className="has-text-danger  taskNeeded m-4">Verification needed.</span>
								<button className="button login-button is-black" onClick={verifyState}> verify(state)</button>
							</>
						)}
				</div>
			</div>
		</>
	);
};
export default Verification;
