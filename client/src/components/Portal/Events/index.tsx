import React, { useState } from "react";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
// import Bar from './Bar'
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
  },
];

const Events = () => {
  const [value, onChange] = useState<Date | Date[]>(new Date());
  const [date, _date] = useState(Date());
  return (

      <div className="card px-4 py-4">
        <div className="title">Events</div>
        <Calendar onChange={onChange} value={value} />
		{/* <Bar /> */}
      </div>
        

  );
};

export default Events;
