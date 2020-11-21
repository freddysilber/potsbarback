import React from "react";
import "./About.scss";
import axios from "axios";
import {Link} from "react-router-dom"

/**
 * Logo
 *
 * Note: 2:1 ratio
 */
import bakbar from "../../assets/bakbar_white.png";

const About: () => JSX.Element = () => {
  const getUsers: () => void = () => {
    axios
      .get("/api/users/getUsers")
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const newUser: () => void = () => {
    axios
      .post("/api/users/newUser")
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <div>WELCOME TO </div>
      <div>
        <img src={bakbar} width="400" height="200" alt="logo" />
      </div>
      <div className="buttonContainer">
      <Link to="/Login"><button className="button is-ghost is-small">
          Demo.
        </button></Link>
        <Link to="/portal/admin/signup"><button className="button is-ghost is-small">
          Demo w/ Sign-up.
        </button></Link>
        <button className="button is-static is-small" onClick={getUsers}>
          Users API.
        </button>
        <button className="button is-static is-small" onClick={newUser}>
          Create API.user.
        </button>
      </div>
    </div>
  );
};

export default About;
