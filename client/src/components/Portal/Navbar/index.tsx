import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <div className="title ml-4"> nav</div>
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/portal/staff" className="navbar-item">
            Shift
          </Link>
          <Link to="/portal/events" className="navbar-item">
            Events
          </Link>
          <Link to="/portal/schedule" className="navbar-item">
            Schedule
          </Link>
          <Link to="/portal/incident" className="navbar-item">
            Incident
          </Link>

          <Link to="/portal/docs" className="navbar-item">
            Documentation
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Managment</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>

                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
