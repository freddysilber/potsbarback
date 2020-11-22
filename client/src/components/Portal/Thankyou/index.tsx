import React from "react";
import "./Thankyou.scss";
import { logoutUser } from '../../../actions/authActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LogoWhite } from "../../Util";

interface ThankyouProps {
  logoutUser: any
}

const Thankyou = (props: ThankyouProps) => {

  const logoutUser = (event: any) => {
    event.preventDefault()
    props.logoutUser()
    // Redirect to the Sbout component
    window.location.href = '/'
  }

  // render() {
  return (
    <>
      <LogoWhite />
      <div className="card staff-input-form">
        <div className="staff-title">Your shift has been completed.</div>
        <span className="staff-form-head">
          You have completed all task in Bak||Bar for the day!
        </span>
        <div className="mt-4">
          You have been logged out for the day. Here is a summary:
        </div>
        <ul className="staff-list">
          <li>[user.name] [user.position]</li>
          <li>[user.costcenter] ( starting$: [checkout.starting_cash])</li>
          <li>Checkout completed: [checkout.is_closed]</li>
          <li>Manager verified: [checkout.is_verified]</li>
          <li>Monies recieved: [checkout.is_recieved]</li>
        </ul>

        <a href="/portal/staff">
          <div className="staff-button-div">
            <button
              className="button login-button is-danger"
              onClick={logoutUser}
            >
              Good Bye.
            </button>
          </div>
        </a>
      </div>
    </>
  )
}

Thankyou.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Thankyou)