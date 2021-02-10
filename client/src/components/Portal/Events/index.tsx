import React, { useState } from "react";
import Calendar from 'react-calendar';
import { Link } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';
// Styles
import "./Events.scss";
// Routes
import { Routes } from "../../../constants";
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
	}]

const Events = () => {
	const [value, onChange] = useState<Date | Date[]>(new Date());
	const [date, _date] = useState(Date())
	return (
		<div className="card px-4 py-4">
			<div className="title">Events</div>
			<div className=" column is-half">
				<span className="subtitle">Choose a date to display daily events</span>
				<Calendar
					onChange={onChange}
					value={value}
				/>
			</div>
			<div className="column is-full">
				<nav className="panel">
					<p className="panel-heading">
						<div className="has-text-weight-bold">
							BOTH VENUES KICKING
            </div>
					</p>
					<div className="columns">
						<div className="column is-one-third">
							<div className="panel-block">Bar Sales</div>
							<div className="panel-block">Bar COG 32%</div>
							<div className="panel-block">Sales Labor</div>
							<div className="panel-block">Floor Labor</div>
							<div className="panel-block">Fixed</div>
							<div className="panel-block">TOTAL GVO COST</div>
							<div className="panel-block">Sub Net</div>
							<div className="panel-block">Service Fee</div>
							<div className="panel-block">Split Fee</div>
							<div className="panel-block">Actual Net</div>
							<div className="panel-block">Venue Net Goal</div>
							<div className="panel-block">+/- Goal</div>
						</div>
						<div className="column is-two-thirds">
							<div className="panel-block">
								<div className="is-half">Hrmm</div>
								<div className="is-half">Hrmm</div>
							</div>
							<div className="panel-block">Bar COG 32%</div>
							<div className="panel-block">Sales Labor</div>
							<div className="panel-block">Floor Labor</div>
							<div className="panel-block">Fixed</div>
							<div className="panel-block">TOTAL GVO COST</div>
							<div className="panel-block">Sub Net</div>
							<div className="panel-block">Service Fee</div>
							<div className="panel-block">Split Fee</div>
							<div className="panel-block">Actual Net</div>
							<div className="panel-block">Venue Net Goal</div>
							<div className="panel-block">+/- Goal</div>
						</div>
						<div className="column">
							<div className="panel-block">Bar Sales</div>
							<div className="panel-block">Bar COG 32%</div>
							<div className="panel-block">Sales Labor</div>
							<div className="panel-block">Floor Labor</div>
							<div className="panel-block">Fixed</div>
							<div className="panel-block">TOTAL GVO COST</div>
							<div className="panel-block">Sub Net</div>
							<div className="panel-block">Service Fee</div>
							<div className="panel-block">Split Fee</div>
							<div className="panel-block">Actual Net</div>
							<div className="panel-block">Venue Net Goal</div>
							<div className="panel-block">+/- Goal</div>
						</div>
					</div>
				</nav>

			</div>

			<div className="columns">
				<div className="column">
					CALENDAR EVENT EDIT FORM
      </div>
			</div>
		</div>
	);
};

export default Events;
