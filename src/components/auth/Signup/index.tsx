import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import User from '../../../models/User'
import { InitialValues, FormState, FormData } from '../interfaces/signup'

const initialValues: InitialValues = {
	firstName: '',
	lastName: '',
	email: '',
	confirmEmail: '',
	password: '',
	confirmPassword: ''
}

const loginValidators = Yup.object().shape({
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

const handleSubmit = (data: FormData) => {
	const { actions, values } = data
	const user: User = values
	console.log('user', user)
	console.log('actions', actions)
	console.log('values', values)
	alert(JSON.stringify(values, null, 2));
	actions.setSubmitting(false);
}

const Signup = () => (
	<Formik
		initialValues={initialValues}
		validationSchema={loginValidators}
		onSubmit={(values: any, actions: any) => {
			const data: FormData = { actions, values }
			handleSubmit(data)
		}}
	>
		{({ errors, touched, isSubmitting }: FormState) => (
			<div className="container">
				<div className="login-title">Bak||Bar Signup</div>
				<div className="card login-input-form">
					<Form>
						<label htmlFor="firstName">First Name</label>
						<Field className="input login-input is-primary is-medium" id="firstName" name="firstName" type="firstName" placeholder="Enter your first name" />
						{touched.firstName && errors.firstName && <p className="fieldError">{errors.firstName}</p>}

						<label htmlFor="lastName">Last Name</label>
						<Field className="input login-input is-primary is-medium" id="lastName" name="lastName" type="lastName" placeholder="Enter your last name" />
						{touched.lastName && errors.lastName && <p className="fieldError">{errors.lastName}</p>}

						<label htmlFor="email">Email</label>
						<Field className="input login-input is-primary is-medium" id="email" name="email" type="email" placeholder="Enter your email" />
						{touched.email && errors.email && <p className="fieldError">{errors.email}</p>}

						<label htmlFor="confirmEmail">Confirm Email</label>
						<Field className="input login-input is-primary is-medium" id="confirmEmail" name="confirmEmail" type="confirmEmail" placeholder="Enter your confirmEmail" />
						{touched.confirmEmail && errors.confirmEmail && <p className="fieldError">{errors.confirmEmail}</p>}

						<label htmlFor="password">Password</label>
						<Field className="input login-input is-primary is-medium" id="password" name="password" type="password" placeholder="Enter your password" />
						{errors.password && touched.password ? <p className="fieldError">{errors.password}</p> : null}

						<label htmlFor="confirmPassword">Confirm Password</label>
						<Field className="input login-input is-primary is-medium" id="confirmPassword" name="confirmPassword" type="password" placeholder="Enter your confirmPassword" />
						{errors.confirmPassword && touched.confirmPassword ? <p className="fieldError">{errors.confirmPassword}</p> : null}

						<div className="login-button-div">
							<button className="button login-button is-primary" type="submit" disabled={isSubmitting} >Submit</button>
						</div>
					</Form>
				</div>
			</div>
		)}
	</Formik>
)
export default Signup