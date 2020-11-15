import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import './Login.scss'

interface InitialValues {
	email: string,
	password: string
}

const initialValues: InitialValues = {
	email: '',
	password: ''
}

const loginValidators = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email')
		.required('Required'),
	password: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
})

const handleSubmit = (actions: any, values: any) => {
	console.log('actions', actions)
	console.log('values', values)
	alert(JSON.stringify(values, null, 2));
	actions.setSubmitting(false);
}

const Login = () => (
	<Formik
		initialValues={initialValues}
		validationSchema={loginValidators}
		onSubmit={(values, actions) => {
			handleSubmit(actions, values)
		}}
	>
		{({ errors, touched, isSubmitting }) => (
			<div className="container">
				<div className="login-title">Bak||Bar Login</div>
				<div className="card login-input-form">
					<Form>
						<label htmlFor="email">Email</label>
						<Field className="input login-input is-primary is-medium" id="email" name="email" type="email" placeholder="Enter your email" />
						{touched.email && errors.email && <p className="fieldError">{errors.email}</p>}
						<label htmlFor="password">Pssword</label>
						<Field className="input login-input is-primary is-medium" id="password" name="password" type="password" placeholder="Enter your password" />
						{errors.password && touched.password ? <p className="fieldError">{errors.password}</p> : null}
						<div className="login-button-div">
							<button className="button login-button is-primary" type="submit" disabled={isSubmitting} >Submit</button>
						</div>
					</Form>
				</div>
			</div>
		)}
	</Formik>
)
export default Login