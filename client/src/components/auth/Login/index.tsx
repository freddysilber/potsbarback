import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import './Login.scss'
import { InitialValues, FormState, FormData, LoginProps } from '../interfaces/login'
import { connect } from 'react-redux'
import { loginUser } from '../../../actions/authActions'
import { Routes } from '../../../utils/routes'

const initialValues: InitialValues = {
	email: '',
	password: ''
};

type UserLogin =
	| object
	| undefined

const loginValidators: Yup.ObjectSchema<Yup.Shape<UserLogin, InitialValues>, object> = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string()
		.min(2, "Your password is too short!")
		.max(50, "Your password is too long")
		.required("Required"),
});

class Login extends React.Component<LoginProps> {

	constructor(props: LoginProps) {
		super(props)
		console.log(this.props)
		this.state = {
			errors: {}
		}
	}

	componentDidMount() {
		// If logged in and user navigates to Login page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push(Routes.staff)
		}
	}

	componentWillReceiveProps(nextProps: any) {
		if (nextProps.auth.isAuthenticated) {
			// After login, redirect user to the portal/ dashboard route
			this.props.history.push(Routes.about)
		}
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			})
		}
	}

	handleSubmit(data: FormData) {
		const { actions, values } = data
		actions.setSubmitting(false);
		this.props.loginUser(values)
		this.props.history.push(Routes.staff)
	}

	render() {
		return (
			<Formik
				initialValues={initialValues}
				validationSchema={loginValidators}
				onSubmit={(values: any, actions: any) => {
					const data: FormData = { actions, values }
					this.handleSubmit(data)
				}}
			>
				{({ errors, touched, isSubmitting }: FormState) => (
					<div className="card login-input-form">
						<Form>
							<label htmlFor="email">Email:</label>
							<Field
								className="input login-input is-medium is-black"
								id="email"
								name="email"
								type="email"
								placeholder="Enter your email"
								autoComplete="username"
							/>
							{touched.email && errors.email && <p className="fieldError">{errors.email}</p>}
							<label htmlFor="password">Password:</label>
							<Field
								className="input login-input is-medium is-black"
								id="password"
								name="password"
								type="password"
								placeholder="Enter your password"
								autoComplete="current-password"
							/>
							{errors.password && touched.password ? <p className="fieldError">{errors.password}</p> : null}
							<div className="login-button-div">
								<button className="button is-danger login-button" type="submit" disabled={isSubmitting} >Submit</button>
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

export default connect(mapStateToProps, { loginUser })(Login)