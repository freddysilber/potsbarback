import React from "react"
import './Admin.scss'

const Admin: () => JSX.Element = () => {
  return     <div className="management">
  <div className="columns">
    <div className="column nav_direct is-one-fifth card">
    <ul>
      <li>Today</li>
      <li>Preformance</li>
      <li>Schedule</li>
      <li></li>
     </ul>   
    </div>
    <div className="column content is-two-fifths card">Two </div>
  </div>
</div>;
};

export default Admin;