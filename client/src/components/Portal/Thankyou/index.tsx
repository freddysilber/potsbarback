import React from "react";
import "./Thankyou.scss";
import { logoutUser } from '../../../actions/authActions'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { Routes } from "../../../utils/routes";
// import { Auth } from '../../Auth/index.js'

interface ThankyouProps {
  logoutUser: any,
  auth: any,
  // auth: Auth,
  history: any
  is_closed: boolean

}

const Thankyou = (props: ThankyouProps) => {

  const logoutUser = (event: any) => {
    event.preventDefault()
    props.logoutUser()
    // Redirect to the About component
    window.location.href = Routes.about
  }
  const filteredEmployees = {
    last_name: "Bowden",
    first_name: "Bobby",
    job_role: 1,
    check_out: {
      is_closed: true,
      is_verified: true,
      is_recieved: true,
      starting_cash: 100,
      cash_sales: 656,
      credit_sales: 2525,
      credit_tips: 400
    },
  }

  return (
    <div className="card staff-input-form">
      <div className="staff-title">Your shift has been completed.</div>
      <span className="staff-form-head">You have completed all tasks in Bak||Bar for the day!</span>
      <div className="mt-4">Here is your summary:</div>
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
                <span className="has-text-danger">Unverified</span>
              )}{" "}
                      -
                      {filteredEmployees.check_out.is_recieved ? (
              <span className="has-text-success"> Recieved </span>
            ) : (
                <span className="has-text-danger"> Outstanding</span>
              )}
          </div>
        </p>
        <a className="panel-block">
          <span className="panel-icon">
            <i
              className="fas fa-money-bill-alt"
              aria-hidden="true"
            ></i>
          </span>
          <div className="has-text-info">
            Staring Cash: {filteredEmployees.check_out.starting_cash}
          </div>
        </a>
        <a className="panel-block is-success">
          <span className="panel-icon">
            <i
              className="fas fa-money-bill-wave"
              aria-hidden="true"
            ></i>
          </span>
          <div className="has-text-success">
            Cash Sales: {filteredEmployees.check_out.cash_sales}
          </div>
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-credit-card" aria-hidden="true"></i>
          </span>
          <div className="has-text-primary">
            Credit Sales: {filteredEmployees.check_out.credit_sales}
          </div>
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-receipt" aria-hidden="true"></i>
          </span>
          <div className="has-text-primary">
            Credit Tips: {filteredEmployees.check_out.credit_tips}
          </div>
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-piggy-bank" aria-hidden="true"></i>
          </span>
          <div className="has-text-danger">
            Owed to House:{" "}
            {(filteredEmployees.check_out.cash_sales * 100 -
              filteredEmployees.check_out.credit_tips * 100) /
              100}
          </div>
        </a>
        <a className="panel-block">
          {filteredEmployees.check_out.is_verified === true && filteredEmployees.check_out.is_closed === true && filteredEmployees.check_out.is_recieved === true ? <Link to={Routes.staff}>
            <div className="staff-button-div">
              <button className="button login-button is-danger" onClick={logoutUser}>Good Bye!</button>
            </div>
          </Link> : null}
        </a>
      </nav>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Thankyou)