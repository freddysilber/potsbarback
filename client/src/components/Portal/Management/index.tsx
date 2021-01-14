import React, { useState } from "react";
import { Link } from "react-router-dom";
// Styles
import "./Management.scss";
// Routes
import { Routes } from "../../../utils/routes";
// Components

const dummyData = [
  {
    id: 0,
    first_name: "Andrew",
    last_name: "Pedersen",
    phone: "9705313993",
    is_active: true,
    job_role: 1,
    active_shift: true,
    check_out: {
      cash_sales: 476.98,
      credit_sales: 9889.0,
      credit_tips: 976.89,
      is_closed: false,
      is_verified: false,
      is_recieved: false,
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
      is_verified: false,
      is_recieved: false,
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
      is_recieved: false,
      cost_center: 0,
      starting_cash: 120.0,
    },
  },
  {
    id: 3,
    first_name: "Bodhi",
    last_name: "Pedersen",
    phone: "9705313993",
    is_active: true,
    job_role: 3,
    active_shift: true,
    check_out: {
      cash_sales: 0.0,
      credit_sales: 0.0,
      credit_tips: 0.0,
      is_closed: false,
      is_verified: false,
      is_recieved: false,
      cost_center: 0,
      starting_cash: 0.0,
    },
  },
  {
    id: 4,
    first_name: "Nadia",
    last_name: "Soto",
    phone: "9705313993",
    is_active: true,
    job_role: 2,
    active_shift: true,
    check_out: {
      cash_sales: 676.98,
      credit_sales: 389.0,
      credit_tips: 276.89,
      is_closed: true,
      is_verified: false,
      is_recieved: false,
      cost_center: 0,
      starting_cash: 100.0,
    },
  },
  {
    id: 5,
    first_name: "Stacy",
    last_name: "Phillips",
    phone: "9705313993",
    is_active: true,
    job_role: 2,
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
  {
    id: 6,
    first_name: "Taylor",
    last_name: "Drew",
    phone: "9705313993",
    is_active: true,
    job_role: 2,
    active_shift: true,
    check_out: {
      cash_sales: 676.98,
      credit_sales: 389.0,
      credit_tips: 276.89,
      is_closed: true,
      is_verified: true,
      is_recieved: false,
      cost_center: 0,
      starting_cash: 100.0,
    },
  },
  {
    id: 7,
    first_name: "Jackson",
    last_name: "Pedersen",
    phone: "9705313993",
    is_active: true,
    job_role: 4,
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
  const [selectedPosition, _selectedPosition] = useState(0);
  const setSelectedState = (event: any) => {
    console.log(event.target.value);
    _selectedPosition(parseInt(event.target.value));
    console.log("click");
  };
  return (
    <div>
      <div className="card staff-input-form">
      <div>
					<Link to={Routes.comptrolling}>
							<button className="button login-button is-danger m-4" onClick={() => console.log("REROUTE")}>Comptrolling</button>	
					</Link>
          <Link to={Routes.verification}>	
							<button className="button login-button is-danger m-4" onClick={() => console.log("REROUTE")}>Employee Verification</button>	
					</Link>
			</div>
        <div className="staff-title">Manager Checkout</div>
        <span className="staff-form-head">Filter By Position:</span>
        <div className="field">
          <div className="control">
            <div className="select is-black">
              <select onChange={setSelectedState}>
                <option>Position</option>
                <option value="1">Bartender</option>
                <option value="2">Wait Staff</option>
                <option value="3">Bar Back</option>
                <option value="4">Security</option>
              </select>
            </div>
          </div>
        </div>

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
          {dummyData.map((filteredEmployees) =>
            filteredEmployees.job_role === selectedPosition ? (
              <li key={filteredEmployees.id}>
                {/* <div className="has-text-weight-bold">
                  {filteredEmployees.last_name}, {filteredEmployees.first_name}{" "}
                  -{" "}
                  {filteredEmployees.job_role === 1 ? (
                    <span> Bartender </span>
                  ) : filteredEmployees.job_role === 2 ? (
                    <span>Wait Staff</span>
                  ) : filteredEmployees.job_role === 3 ? (
                    <span> BarBack </span>
                  ) : filteredEmployees.job_role === 4 ? (
                    <span> Security </span>
                  ) : null}
                </div>
                <div>
                  {filteredEmployees.check_out.is_closed ? (
                    <span className="has-text-black">Closed</span>
                  ) : (
                    <span className="has-text-info">On Shift</span>
                  )}{" "}
                  -
                  {filteredEmployees.check_out.is_verified ? (
                    <span className="has-text-info"> Verified </span>
                  ) : (
                    <span className="has-text-danger">Unverified</span>
                  )}{" "}
                  -
                  {filteredEmployees.check_out.is_recieved ? (
                    <span className="has-text-success"> Recieved </span>
                  ) : (
                      <span className="has-text-danger">Outstanding</span>
                    )}
                </div>
                <div>toggle selector here with a post button</div>

                <div className="column">
                  <div className="has-text-info">
                    Staring Cash: {filteredEmployees.check_out.starting_cash}
                  </div>
                  <div className="has-text-success">
                    Cash Sales: {filteredEmployees.check_out.cash_sales}
                  </div>
                  <div className="has-text-primary">
                    Credit Sales: {filteredEmployees.check_out.credit_sales}
                  </div>
                  <div className="has-text-primary">
                    Credit Tips: {filteredEmployees.check_out.credit_tips}
                  </div>
                  <div className="has-text-danger">
                    Owed to House:{" "}
                    {(filteredEmployees.check_out.cash_sales * 100 -
                      filteredEmployees.check_out.credit_tips * 100) /
                      100}
                  </div>
                </div> */}
                <nav className="panel">
                  <p className="panel-heading">
                    <div className="has-text-weight-bold">
                      {filteredEmployees.last_name},{" "}
                      {filteredEmployees.first_name} -{" "}
                      {filteredEmployees.job_role === 1 ? (
                        <span> Bartender </span>
                      ) : filteredEmployees.job_role === 2 ? (
                        <span>Wait Staff</span>
                      ) : filteredEmployees.job_role === 3 ? (
                        <span> BarBack </span>
                      ) : filteredEmployees.job_role === 4 ? (
                        <span> Security </span>
                      ) : null}
                    </div>
                    <div>
                      {filteredEmployees.check_out.is_closed ? (
                        <span className="has-text-black">Closed</span>
                      ) : (
                          <span className="has-text-info">On Shift</span>
                        )}{" "}
                      -
                      {filteredEmployees.check_out.is_verified ? (
                        <span className="has-text-info"> Verified </span>
                      ) : (
                          <span className="has-text-danger"> Unverified</span>
                        )}{" "}
                      -
                      {filteredEmployees.check_out.is_recieved ? (
                        <span className="has-text-success"> Recieved </span>
                      ) : (
                          <span className="has-text-danger"> Outstanding</span>
                        )}
                    </div>
                  </p>
                  <div className="panel-block">
                    <span className="panel-icon">
                      <i
                        className="fas fa-money-bill-alt"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div className="has-text-info">
                      Staring Cash: {filteredEmployees.check_out.starting_cash}
                    </div>
                  </div>
                  <div className="panel-block is-success">
                    <span className="panel-icon">
                      <i
                        className="fas fa-money-bill-wave"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <div className="has-text-success">
                      Cash Sales: {filteredEmployees.check_out.cash_sales}
                    </div>
                  </div>
                  <div className="panel-block">
                    <span className="panel-icon">
                      <i className="fas fa-credit-card" aria-hidden="true"></i>
                    </span>
                    <div className="has-text-primary">
                      Credit Sales: {filteredEmployees.check_out.credit_sales}
                    </div>
                  </div>
                  <div className="panel-block">
                    <span className="panel-icon">
                      <i className="fas fa-receipt" aria-hidden="true"></i>
                    </span>
                    <div className="has-text-primary">
                      Credit Tips: {filteredEmployees.check_out.credit_tips}
                    </div>
                  </div>
                  <div className="panel-block">
                    <span className="panel-icon">
                      <i className="fas fa-piggy-bank" aria-hidden="true"></i>
                    </span>
                    <div className="has-text-danger">
                      Owed to House:{" "}
                      {(filteredEmployees.check_out.cash_sales * 100 -
                        filteredEmployees.check_out.credit_tips * 100) /
                        100}
                    </div>

                  </div>
                  <div className="panel-block">
                    {filteredEmployees.check_out.is_verified === false && filteredEmployees.check_out.is_closed === true ? <button onClick={() => alert("This Employee's checkout is verified by the manager - This allows the Comptroller to Verifiy their monies")} className="button is-dark is-outlined is-halfwidth">
                      Verify Checkout
                        </button>
                   : null}
                  </div>
                </nav>
              </li>
            ) : null
          )}
        </ul>

        {/* <Link to={Routes.checkout}>
          <div className="staff-button-div">
            <button
              className="button login-button is-danger"
              onClick={() => console.log("REROUTE")}
            >
              Daily Checkout
            </button>
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Management;
