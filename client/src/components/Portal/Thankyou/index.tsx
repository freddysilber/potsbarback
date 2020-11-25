import React from "react";
import "./Thankyou.scss";
import { logoutUser } from '../../../actions/authActions'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { Routes } from "../../../utils/routes";

interface ThankyouProps {
	logoutUser: any,
	auth: any,
	history: any
}

const Thankyou = (props: ThankyouProps) => {

	const logoutUser = (event: any) => {
		event.preventDefault()
		props.logoutUser()
		// Redirect to the About component
		props.history.push(Routes.about)
	}

	return (
		<div className="card staff-input-form">
			<div className="staff-title">Your shift has been completed.</div>
			<span className="staff-form-head">
				You have completed all tasks in Bak||Bar for the day!
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

			<Link to={Routes.staff}>
				<div className="staff-button-div">
					<button className="button login-button is-danger" onClick={logoutUser}>Good Bye.</button>
				</div>
			</Link>
		</div>
	)
}

const mapStateToProps = (state: any) => ({
	auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Thankyou)