import React from "react";
import "./Management.scss";

const Management: () => JSX.Element = () => {
  return (
    <div className="management">
      <div className="columns">
        <div className="column nav_direct is-one-fifth card">ONE </div>
        <div className="column content is-three-fifths card">Two </div>
      </div>
    </div>
  );
};

export default Management;
