import React, { useState } from "react";
<<<<<<< HEAD
import "./Management.scss";
=======
>>>>>>> 1eb5d353fec3321bf94e139332478d23e10e3df4
import { Link } from "react-router-dom";
// Styles
import "./Management.scss";
// Routes
import { Routes } from "../../../utils/routes";
// Components
import { LogoWhite } from "../../Util";

const dummyData = [
  {
    id: 0,
    first_name: "Andrew",
    last_name: "Pedersen",
    phone: "9705313993",
    is_active: true,
    job_role: 0,
    active_shift: true,
    check_out: {
      cash_sales: 476.98,
      credit_sales: 9889.0,
      credit_tips: 976.89,
      is_closed: true,
      is_verified: true,
      is_recieved: true,
      cost_center: 0,
      starting_cash: 250.0,
    },
  },
  {
    id: 1,
    first_name: "Chauncey",
    last_name: "Phillips",
    phone: "9705354553",
    is_active: true,
    job_role: 1,
    active_shift: true,
    check_out: {
      cash_sales: 276.98,
      credit_sales: 999.0,
      credit_tips: 56.89,
      is_closed: true,
      is_verified: true,
      is_recieved: true,
      cost_center: 0,
      starting_cash: 250.0,
    },
  },
  {
    id: 2,
    first_name: "Terrance",
    last_name: "Harvey",
    phone: "9705312343",
    is_active: true,
    job_role: 1,
    active_shift: true,
    check_out: {
      cash_sales: 446.98,
      credit_sales: 1289.0,
      credit_tips: 76.89,
      is_closed: true,
      is_verified: true,
      is_recieved: true,
      cost_center: 0,
      starting_cash: 120.0,
    },
  },
  {
    id: 3,
    first_name: "Andrew",
    last_name: "Pedersen",
    phone: "9705313993",
    is_active: true,
    job_role: 1,
    active_shift: true,
    check_out: {
      cash_sales: 676.98,
      credit_sales: 389.0,
      credit_tips: 276.89,
      is_closed: true,
      is_verified: true,
      is_recieved: true,
      cost_center: 0,
      starting_cash: 100.0,
    },
  },
];

const Management: () => JSX.Element = () => {
<<<<<<< HEAD
  const [selectedPosition, _selectedPosition] = useState(0);
  const setSelectedState = (event:any) => {
	  console.log("HEY")
	_selectedPosition(event.target.value)
  };
  return (
    <div>
      <>
        <div className="card staff-input-form">
          <div className="staff-title">Employee Checkout</div>
          <span className="staff-form-head">Filter By Position:</span>
          <div className="field">
            <div className="control">
              <div className="select is-black">
                <select>
                  <option value="1" onClick={() =>setSelectedState}>Position</option>
                  <option id="1">Wait Staff</option>
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
            {dummyData.map((filteredEmployees) =>
              filteredEmployees.job_role === selectedPosition ? (
                <li key={filteredEmployees.id}>
                  <div className="m-0">
                    {filteredEmployees.last_name},{" "}
                    {filteredEmployees.first_name}
                  </div>
                </li>
              ) : null
            )}
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
    </div>
  );
=======
	const [selectedPosition, _selectedPosition] = useState(0);
	// const setSelectedState = (event) => {
	//   console.log("selected")
	//   _selectedPosition(event.target.id);
	// };
	return (
		<div>
			<LogoWhite />
			<div className="card staff-input-form">
				<div className="staff-title">Employee Checkout</div>
				<span className="staff-form-head">Filter By Position:</span>
				<div className="field">
					<div className="control">
						<div className="select is-black">
							<select>
								<option>Position</option>
								<option id="1"
								//  onSelect={() => setSelectedState}
								>
									Wait Staff
                  </option>
								<option>Bar Back</option>
								<option>Security</option>
								<option>Bartender</option>
							</select>
						</div>
					</div>
				</div>
				<span className="staff-form-head">Name:</span>
				{/* <div className="field">
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
            </div> */}
				<ul className="staff-list">
					{dummyData.map((filteredEmployees) => filteredEmployees.job_role === selectedPosition ?
						<li key={filteredEmployees.id}>
							<div>
								{filteredEmployees.last_name}, {filteredEmployees.first_name}
							</div>
						</li> : null
					)}
				</ul>
				<Link to={Routes.checkout}>
					<div className="staff-button-div">
						<button className="button login-button is-danger" onClick={() => console.log("REROUTE")}>Daily Checkout</button>
					</div>
				</Link>
			</div>
		</div>
	);
>>>>>>> 1eb5d353fec3321bf94e139332478d23e10e3df4
};

export default Management;
