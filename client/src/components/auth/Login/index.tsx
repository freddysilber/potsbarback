import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// Formik/Validations (Yup)
import { Formik, Form, Field, FormikValues } from 'formik'
import * as Yup from 'yup'
// Styles
import './Auth.scss'
// Types
import { InitialValues, FormState, FormData, LoginProps } from './loginTypes'
// Redux
import { connect } from 'react-redux'
import { loginUser } from '../../../store/actions/authActions'
// Routes
import { Routes } from '../../../constants/routes'

const initialValues: InitialValues = {
	email: '',
	password: ''
};

type UserLogin =
	| object
	| undefined

const loginValidators: Yup.ObjectSchema<Yup.Shape<UserLogin, InitialValues>, object> = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email')
		.required('An email is required'),
	password: Yup.string()
		.min(2, 'Your password is too short!')
		.max(50, 'Your password is too long')
		.required('A password is required'),
});

const Login: (props: LoginProps) => JSX.Element = (props: LoginProps) => {

	useEffect(() => {
		if (props.auth.isAuthenticated) {
			props.history.push(Routes.staff)
		}
	})

	const handleSubmit = (data: FormData) => {
		const { actions, values } = data
		actions.setSubmitting(false);
		props.loginUser(values)
		props.history.push(Routes.staff)
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={loginValidators}
			onSubmit={(values: FormikValues, actions: object) => {
				const data: FormData = { actions, values }
				handleSubmit(data)
			}}
		>
			{({ errors, touched, isSubmitting }: FormState) => (
				<div className="card login-input-form">
					<Form>
						<label htmlFor="email">{
							touched.email && errors.email
								? <p className="fieldError">{errors.email}</p>
								: <p style={{ fontWeight: "bold" }}>Email</p>
						}</label>
						<Field
							className="input login-input is-medium mt-0 is-black"
							id="email"
							name="email"
							type="email"
							placeholder="Enter your email"
							autoComplete="username"
						/>

						<label htmlFor="password">{
							errors.password && touched.password
								? <p className="fieldError">{errors.password}</p>
								: <p style={{ fontWeight: "bold" }}>Password</p>
						}</label>
						<Field
							className="input login-input mt-0 is-medium is-black"
							id="password"
							name="password"
							type="password"
							placeholder="Enter your password"
							autoComplete="current-password"
						/>

						<div className="login-button-div">
							<Link to={Routes.about}>
								<button className="button is-danger login-button" type="submit">Back</button>
							</Link>
							<button className="button is-success login-button" type="submit" disabled={isSubmitting}>Login</button>
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

export default connect(mapStateToProps, { loginUser })(Login)