import React from "react";
import "./About.scss";
import { Link } from "react-router-dom"
import { Routes } from "../../utils/routes";
/**
 * Logo
 *
 * Note: 2:1 ratio
 */
import bakbar from "../../assets/bakbar_white.png"

const About: () => JSX.Element = () => {
  return (
    <div className="container">
      <div>WELCOME TO </div>
      <div>
        <img src={bakbar} width="400" height="200" alt="logo" />
      </div>
      <div className="buttonContainer">
        <Link to={Routes.login}><button className="button is-ghost is-small">
          Demo.
          </button></Link>
        <Link to={Routes.signup}><button className="button is-ghost is-small">
          Demo w/ Sign-up.
          </button></Link>
      </div>
    </div>
  );
}

export default About
