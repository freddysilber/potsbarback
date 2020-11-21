import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import User from "../../../models/User";
import { InitialValues, FormState, FormData } from "../interfaces/signup";
import axios from "axios";
import bakbar from "../../../assets/bakbar_white.png";
import {Link} from "react-router-dom"
import "./Signup.scss"

const initialValues: InitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
};

const loginValidators: Yup.ObjectSchema<
  Yup.Shape<
    object | undefined,
    {
      firstName: string;
      lastName: string;
      email: string;
      confirmEmail: "";
      password: string;
      confirmPassword: "";
    }
  >,
  object
> = Yup.object().shape({
  firstName: Yup.string().required("First name cannot be empty"),
  lastName: Yup.string().required("Last name cannot be empty"),
  email: Yup.string().email("Invalid email").required("Required"),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref("email"), null || ""], "Emails must match!")
    .required("Confirm Email is required"),
  password: Yup.string()
    .min(2, "Your password is too short!")
    .max(50, "Your password is too long")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null || ""], "Passwords must match!")
    .max(50, "Your password is too long")
    .required("Required"),
});

const handleSubmit = (data: FormData) => {
  const { values } = data;
  const user: User = values;
  console.log(user);
  axios
    .post("/api/users/register", user)
    .then((response: any) => console.log(response))
    .catch((error: any) => console.log(error));
};

const Signup = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={loginValidators}
    onSubmit={(values: any, actions: any) => {
      const data: FormData = { actions, values };
      handleSubmit(data);
    }}
  >
    {({ errors, touched, isSubmitting }: FormState) => (
      <div className="container">
        <div>
          <img src={bakbar} width="400" height="200" alt="logo" />
        </div>
        <div className="card login-input-form">
          <Form>
            <label htmlFor="firstName" className="signup-form-head">First Name</label>
            <Field
              className="input login-input is-black is-medium"
              id="firstName"
              name="firstName"
              type="firstName"
              placeholder="Enter your first name"
            />
            {touched.firstName && errors.firstName && (
              <p className="fieldError">{errors.firstName}</p>
            )}

            <label htmlFor="lastName" className="signup-form-head">Last Name</label>
            <Field
              className="input login-input is-black is-medium"
              id="lastName"
              name="lastName"
              type="lastName"
              placeholder="Enter your last name"
            />
            {touched.lastName && errors.lastName && (
              <p className="fieldError">{errors.lastName}</p>
            )}

            <label htmlFor="email" className="signup-form-head">Email</label>
            <Field
              className="input login-input is-black is-medium"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="username"
            />
            {touched.email && errors.email && (
              <p className="fieldError">{errors.email}</p>
            )}

            <label htmlFor="confirmEmail" className="signup-form-head">Confirm Email</label>
            <Field
              className="input login-input is-black is-medium"
              id="confirmEmail"
              name="confirmEmail"
              type="email"
              placeholder="Enter your confirmEmail"
            />
            {touched.confirmEmail && errors.confirmEmail && (
              <p className="fieldError">{errors.confirmEmail}</p>
            )}

            <label htmlFor="password" className="signup-form-head">Password</label>
            <Field
              className="input login-input is-black is-medium"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="new-password"
            />
            {errors.password && touched.password ? (
              <p className="fieldError">{errors.password}</p>
            ) : null}

            <label htmlFor="confirmPassword" className="signup-form-head">Confirm Password</label>
            <Field
              className="input login-input is-black is-medium"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Enter your confirmPassword"
              autoComplete="new-password"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className="fieldError">{errors.confirmPassword}</p>
            ) : null}

            <div className="login-button-div">
              <button
                className="button login-button is-static"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
			  <Link to="/login"><button
                className="button login-button is-ghost"
              >
                Demo.
              </button></Link>
            </div>
          </Form>
        </div>
      </div>
    )}
  </Formik>
);
export default Signup;

// import React, { Component } from 'react'
// import { Link, withRouter } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { registerUser } from '../../../actions/authActions'
// import { Routes } from '../../../utils/routes'

// class Register extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			name: '',
// 			email: '',
// 			password: '',
// 			password2: '',
// 			errors: {}
// 		}
// 	}

// 	componentDidMount() {
// 		// If logged in and user navigates to Register page, should redirect them to dashboard
// 		if (this.props.auth.isAuthenticated) {
// 			this.props.history.push(Routes.dashboard)
// 		}
// 	}

// 	componentWillReceiveProps(nextProps) {
// 		if (nextProps.errors) {
// 			this.setState({
// 				errors: nextProps.errors
// 			})
// 		}
// 	}
// 	// Change event from form inputs
// 	onChange = event => this.setState({ [event.target.id]: event.target.value })

// 	onSubmit = event => {
// 		event.preventDefault()
// 		const newUser = {
// 			name: this.state.name,
// 			email: this.state.email,
// 			password: this.state.password,
// 			password2: this.state.password2
// 		}
// 		this.props.registerUser(newUser, this.props.history)
// 	}

// 	render() {
// 		const { errors } = this.state

// 		return (
// 			<div className='container'>
// 				<div className='row'>
// 					<div className='col s8 offset-s2'>
// 						<div className='col s12' style={{ paddingLeft: '11.250px' }}>
// 							<h4><b>Register</b></h4>
// 							<p className='grey-text text-darken-1'>
// 								Already have an account? <Button component={Link} to={Routes.login}>Login</Button>
// 							</p>
// 						</div>
// 						<form noValidate onSubmit={this.onSubmit}>
// 							<div className='input-field col s12'>
// 								<input
// 									onChange={this.onChange}
// 									value={this.state.name}
// 									error={errors.name}
// 									id='name'
// 									type='text'
// 									className={classnames('', { invalid: errors.name })}
// 								/>
// 								<label htmlFor='name'>Name</label>
// 								<span className='red-text'>{errors.name}</span>
// 							</div>
// 							<div className='input-field col s12'>
// 								<input
// 									onChange={this.onChange}
// 									value={this.state.email}
// 									error={errors.email}
// 									id='email'
// 									type='email'
// 									className={classnames('', { invalid: errors.email })} />
// 								<label htmlFor='email'>Email</label>
// 								<span className='red-text'>{errors.email}</span>
// 							</div>
// 							<div className='input-field col s12'>
// 								<input
// 									onChange={this.onChange}
// 									value={this.state.password}
// 									error={errors.password}
// 									id='password'
// 									type='password'
// 									className={classnames('', { invalid: errors.password })} />
// 								<label htmlFor='password'>Password</label>
// 								<span className='red-text'>{errors.password}</span>
// 							</div>
// 							<div className='input-field col s12'>
// 								<input
// 									onChange={this.onChange}
// 									value={this.state.password2}
// 									error={errors.password2}
// 									id='password2'
// 									type='password'
// 									className={classnames('', { invalid: errors.password2 })} />
// 								<label htmlFor='password2'>Confirm Password</label>
// 								<span className='red-text'>{errors.password2}</span>
// 							</div>
// 							<br />
// 							<Button variant="contained" color="primary" type="submit">Sign up</Button>
// 						</form>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// Register.propTypes = {
// 	registerUser: PropTypes.func.isRequired,
// 	auth: PropTypes.object.isRequired,
// 	errors: PropTypes.object.isRequired
// }

// const mapStateToProps = state => ({
// 	auth: state.auth,
// 	errors: state.errors
// })

// export default connect(mapStateToProps, { registerUser })(withRouter(Register))
