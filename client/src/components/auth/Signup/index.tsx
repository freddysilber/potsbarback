import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import User from '../../../models/User'
import { InitialValues, FormState, FormData, SignupProps } from './signupTypes'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerUser } from '../../../actions/authActions'
import { Routes } from '../../../utils/routes'
import { Link } from 'react-router-dom'
import '../Auth.scss'

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

const loginValidators: Yup.ObjectSchema<Yup.Shape<UserSignup, {
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
		.required('Required'),
	confirmEmail: Yup.string()
		.oneOf([Yup.ref('email'), null || ''], 'Emails must match!')
		.required('Confirm Email is required'),
	password: Yup.string()
		.min(2, 'Your password is too short!')
		.max(50, 'Your password is too long')
		.required('Required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null || ''], 'Passwords must match!')
		.max(50, 'Your password is too long')
		.required('Required'),
})

class Signup extends React.Component<SignupProps> {

	constructor(props: SignupProps) {
		super(props)
		this.state = {
			errors: {}
		}
	}

	componentDidMount() {
		// If logged in and user navigates to Register page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push(Routes.portal)
		}
	}

	componentWillReceiveProps(nextProps: any) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			})
		}
	}

	handleSubmit(data: FormData) {
		const { values } = data
		const user: User = values
		this.props.registerUser(user, this.props.history)
	}

	render() {
		return (
			<Formik
				initialValues={initialValues}
				validationSchema={loginValidators}
				onSubmit={(values: any, actions: any) => {
					const data: FormData = { actions, values }
					this.handleSubmit(data)
				}}>
				{({ errors, touched, isSubmitting }: FormState) => (
					<div className="card login-input-form">
						<Form>
							<label htmlFor="firstName">First Name</label>
							<Field
								className="input login-input is-primary is-medium"
								id="firstName"
								name="firstName"
								type="firstName"
								placeholder="Enter your first name"
							/>
							{touched.firstName && errors.firstName && <p className="fieldError">{errors.firstName}</p>}

							<label htmlFor="lastName">Last Name</label>
							<Field
								className="input login-input is-primary is-medium"
								id="lastName"
								name="lastName"
								type="lastName"
								placeholder="Enter your last name"
							/>
							{touched.lastName && errors.lastName && <p className="fieldError">{errors.lastName}</p>}

							<label htmlFor="email">Email</label>
							<Field
								className="input login-input is-primary is-medium"
								id="email"
								name="email"
								type="email"
								placeholder="Enter your email"
								autoComplete="username"
							/>
							{touched.email && errors.email && <p className="fieldError">{errors.email}</p>}

							<label htmlFor="confirmEmail">Confirm Email</label>
							<Field
								className="input login-input is-primary is-medium"
								id="confirmEmail"
								name="confirmEmail"
								type="email"
								placeholder="Enter your confirmEmail"
							/>
							{touched.confirmEmail && errors.confirmEmail && <p className="fieldError">{errors.confirmEmail}</p>}

							<label htmlFor="password">Password</label>
							<Field
								className="input login-input is-primary is-medium"
								id="password"
								name="password"
								type="password"
								placeholder="Enter your password"
								autoComplete="new-password"
							/>
							{errors.password && touched.password ? <p className="fieldError">{errors.password}</p> : null}

							<label htmlFor="confirmPassword">Confirm Password</label>
							<Field
								className="input login-input is-primary is-medium"
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								placeholder="Enter your confirmPassword"
								autoComplete="new-password"
							/>
							{errors.confirmPassword && touched.confirmPassword ? <p className="fieldError">{errors.confirmPassword}</p> : null}

							<div className="login-button-div">
								<Link to={Routes.about}>
									<button className="button is-danger login-button" type="submit">Back</button>
								</Link>
								<button className="button login-button is-primary" type="submit" disabled={isSubmitting} >Submit</button>
							</div>
						</Form>
					</div>
				)}
			</Formik>
		)
	}
}

const mapStateToProps = (state: any) => ({
	auth: state.auth,
	errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(Signup))