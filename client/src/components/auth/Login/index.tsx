import React from 'react'
// import { Link } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import './Login.scss'
import { InitialValues, FormState, FormData } from '../interfaces/login'
import bakbar from '../../../assets/bakbar_white.png'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loginUser } from '../../../actions/authActions'
import { Routes } from '../../../utils/routes'

interface LoginProps {
	loginUser: any,
	history: any,
	auth: any
}

const initialValues: InitialValues = {
	email: '',
	password: ''
}

const loginValidators: Yup.ObjectSchema<Yup.Shape<object | undefined, {
	email: string;
	password: string;
}>, object> = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email')
		.required('Required'),
	password: Yup.string()
		.min(2, 'Your password is too short!')
		.max(50, 'Your password is too long')
		.required('Required'),
})

class Login extends React.Component<LoginProps> {

	public static propTypes = {}

	constructor(props: any) {
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
			this.props.history.push(Routes.portal)
		}
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			})
		}
	}

	handleSubmit(data: FormData) {
		const { actions, values } = data
		console.log('actions', actions)
		console.log('values', values)
		alert(JSON.stringify(values, null, 2));
		actions.setSubmitting(false);
		this.props.loginUser(values)
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
					<div className="container">
						<img src={bakbar} width="400" height="200" alt="logo" />
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
									{/* <Link to="/portal/staff"> */}
									<button className="button is-danger login-button" type="submit" disabled={isSubmitting} >Submit</button>
									{/* </Link> */}
								</div>
							</Form>
						</div>
					</div>
				)}
			</Formik>
		)
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = (state: any) => ({
	auth: state.auth,
	errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login)