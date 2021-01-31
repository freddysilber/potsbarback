import React, { useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
// Formik/Validations (Yup)
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
// Models
import User from '../../models/User'
// Types
import { InitialValues, FormState, FormData, SignupProps } from './signupTypes'
// Redux
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'
// Routes
import { Routes } from '../../utils/routes'
// Styles
import './Auth.scss'

const initialValues: InitialValues = {
	firstName: '',
	lastName: '',
	email: '',
	confirmEmail: '',
	password: '',
	confirmPassword: '',
}

type UserSignup =
	| object
	| undefined

const signupValidators: Yup.ObjectSchema<Yup.Shape<UserSignup, {
	firstName: string;
	lastName: string;
	email: string;
	confirmEmail: string;
	password: string;
	confirmPassword: string;
}>, object> = Yup.object().shape({
	firstName: Yup.string()
		.required('First name cannot be empty'),
	lastName: Yup.string()
		.required('Last name cannot be empty'),
	email: Yup.string()
		.email('Invalid email')
		.required('Email is required'),
	confirmEmail: Yup.string()
		.oneOf([Yup.ref('email'), null || ''], 'Emails must match!')
		.required('Confirm Email is required'),
	password: Yup.string()
		.min(2, 'Your password is too short!')
		.max(50, 'Your password is too long')
		.required('A password is required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null || ''], 'Passwords must match!')
		.max(50, 'Your password is too long')
		.required('A password is required'),
})

const Signup: (props: SignupProps) => JSX.Element = (props: SignupProps) => {

	useEffect(() => {
		if (props.auth.isAuthenticated) {
			props.history.push(Routes.staff)
		}
	})

	const handleSubmit = (data: FormData) => {
		const user: User = data.values
		props.registerUser(user, props.history)
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={signupValidators}
			onSubmit={(values: any, actions: any) => {
				const data: FormData = { actions, values }
				handleSubmit(data)
			}}>
			{({ errors, touched, isSubmitting }: FormState) => (
				<div className="card login-input-form">
					<div className="login-title">User Sign Up</div>
					<Form>
						<label htmlFor="firstName">{touched.firstName && errors.firstName ? <p className="fieldError">{errors.firstName}</p> : 'First Name'}</label>
						<Field
							className="input login-input is-black mt-0 is-medium"
							id="firstName"
							name="firstName"
							type="firstName"
							placeholder="Enter your first name"
						/>

						<label htmlFor="lastName">{touched.lastName && errors.lastName ? <p className="fieldError">{errors.lastName}</p> : 'Last Name'}</label>
						<Field
							className="input login-input is-black mt-0 is-medium"
							id="lastName"
							name="lastName"
							type="lastName"
							placeholder="Enter your last name"
						/>

						<label htmlFor="email">{touched.email && errors.email ? <p className="fieldError">{errors.email}</p> : 'Email'}</label>
						<Field
							className="input login-input is-black mt-0 is-medium"
							id="email"
							name="email"
							type="email"
							placeholder="Enter your email"
							autoComplete="username"
						/>

						<label htmlFor="confirmEmail">{touched.confirmEmail && errors.confirmEmail ? <p className="fieldError">{errors.confirmEmail}</p> : 'Confirm Email'}</label>
						<Field
							className="input login-input is-black mt-0 is-medium"
							id="confirmEmail"
							name="confirmEmail"
							type="email"
							placeholder="Confirm email"
						/>

						<label htmlFor="password">{touched.password && errors.password && touched.password ? <p className="fieldError">{errors.password}</p> : 'Create Password'}</label>
						<Field
							className="input login-input is-black mt-0 is-medium"
							id="password"
							name="password"
							type="password"
							placeholder="Choose a password"
							autoComplete="new-password"
						/>

						<label htmlFor="confirmPassword">{touched.confirmPassword && errors.confirmPassword && touched.confirmPassword ? <p className="fieldError">{errors.confirmPassword}</p> : 'Confirm Password'}</label>
						<Field
							className="input login-input is-black mt-0 is-medium"
							id="confirmPassword"
							name="confirmPassword"
							type="password"
							placeholder="Confirm your password"
							autoComplete="new-password"
						/>

						<div className="login-button-div">
							<Link to={Routes.about}>
								<button className="button is-danger login-button" type="submit">Back</button>
							</Link>
							<button className="button login-button is-primary" type="submit" disabled={isSubmitting}>Submit</button>
						</div>
					</Form>
				</div>
			)}
		</Formik>
	)
}

const mapStateToProps = (state: any) => ({
	auth: state.auth,
	errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(Signup))