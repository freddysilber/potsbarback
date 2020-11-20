import React from "react";
import "./About.scss";
import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom"
/**
 * Logo
 *
 * Note: 2:1 ratio
 */
import bakbar from "../../assets/bakbar.png";

const About: () => JSX.Element = () => {
  const getUsers: () => void = () => {
    axios
      .get("/api/users/getUsers")
      .then((res: AxiosResponse<any>) => console.log(res))
      .catch((err: any) => console.error(err));
  };

  const newUser: () => void = () => {
    axios
      .post("/api/users/newUser")
      .then((res: AxiosResponse<any>) => console.log(res))
      .catch((err: any) => console.error(err));
  };

  return (
    <>
      <div>WELCOME TO</div>
      <div>
        <img src={bakbar} width="400" height="200" alt="logo" />
      </div>
      <div className="buttonContainer">
        <Link to="/Login"><button className="button is-black is-small">
          Demo.
        </button></Link>
        <button className="button is-black is-small" onClick={getUsers}>
          Get Users.
        </button>
        <button className="button is-black is-small" onClick={newUser}>
          Create user.
        </button>
      </div>
    </>
  );
};

export default About