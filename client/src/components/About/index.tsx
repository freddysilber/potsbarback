import React from "react";
import "./About.scss";
import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom"
import { logoutUser } from '../../actions/authActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Routes } from "../../utils/routes";
/**
 * Logo
 *
 * Note: 2:1 ratio
 */
import bakbar from "../../assets/bakbar_white.png"

interface AboutProps {
  logoutUser: any
}

class About extends React.Component<AboutProps> {

  public static propTypes = {}

  getUsers() {
    axios
      .get("/api/users/getUsers")
      .then((res: AxiosResponse<any>) => console.log(res))
      .catch((err: any) => console.error(err));
  };

  newUser() {
    axios
      .post("/api/users/newUser")
      .then((res: AxiosResponse<any>) => console.log(res))
      .catch((err: any) => console.error(err));
  };

  logoutUser = (event: any) => {
    event.preventDefault()
    this.props.logoutUser()
  }

  render() {
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
          <button className="button is-static is-small" onClick={this.getUsers}>
            Users API.
          </button>
          <button className="button is-static is-small" onClick={this.newUser}>
            Create API.user.
          </button>
        </div>
      </div>
    );
    // return (
    //   <>
    //     <div>WELCOME TO</div>
    //     <div>
    //       <img src={bakbar} width="400" height="200" alt="logo" />
    //     </div>
    //     <div className="buttonContainer">
    //       <Link to={Routes.login}>
    //         <button className="button is-black is-small">Demo.</button>
    //       </Link>
    //       <button className="button is-black is-small" onClick={this.getUsers}>Get Users.</button>
    //       <button className="button is-black is-small" onClick={this.newUser}>Create user.</button>
    //       <Link to={Routes.signup}>
    //         <button className="button is-black is-small">Signup.</button>
    //       </Link>
    //       <Link to={Routes.login}>
    //         <button className="button is-black is-small">Login.</button>
    //       </Link>
    //       <button className="button is-black is-small" onClick={this.logoutUser}>Logout user.</button>
    //     </div>
    //   </>
    // )
  }
}

About.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state: any) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(About)
