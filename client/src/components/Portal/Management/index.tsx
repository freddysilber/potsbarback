import React from "react";
import "./Management.scss";
import { Dropdown, LogoWhite, POSITIONS, COST_CENTERS } from "../../Util";

const Management: () => JSX.Element = () => {
	return (
		<div>
			<LogoWhite />
			<>
				<div className="card staff-input-form">
					<div className="staff-title">Employee Checkout</div>
					<span className="staff-form-head">
						Filter By Position:
          </span>
					<div className="field">
						<div className="control">
							<div className="select is-black">
								<Dropdown default="0" values={POSITIONS} />
							</div>
						</div>
					</div>
					<span className="staff-form-head">Name:</span>
					<div className="field">
						<div className="control">
							<div className="select is-black">
								<Dropdown default="0" values={COST_CENTERS} />
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
