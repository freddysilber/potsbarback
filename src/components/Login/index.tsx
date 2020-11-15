import React from 'react'
import { Formik, Form, Field, FormikProps, withFormik } from 'formik'
import * as Yup from 'yup'
import './Login.scss'

interface FormValues {
	email: string,
	password: string
}

interface FormProps {
	email?: string
	password?: string
}

const initialValues = {
	email: '',
	password: ''
}

const handleSubmit = (values: any, actions: any) => {
	console.log({ values, actions })
	alert(JSON.stringify(values, null, 2))
	actions.setSubmitting(false)
}

const Login = (props: FormikProps<FormValues>) => {
	const { touched, errors } = props
	console.log(props)
	return (
		<Formik
			validateOnChange
			initialValues={initialValues}
			validationSchema={
				Yup.object().shape({
					email: Yup.string()
						.required("Email is required")
						.min(2, "Must enter valid email")
						.email('Must enter a valid email address'),
					password: Yup.string()
						.min(6, "Password must be at least 6 characters")
						.required("Password is required"),
				})
			}
			onSubmit={(values, actions) => {
				handleSubmit(values, actions)
			}}
		>
			<Form>
				<label htmlFor="email">Email</label>
				<Field className="input login-input is-primary is-medium" id="email" name="email" type="email" placeholder="Enter your email" />
				{touched.email && errors.email && <div>{errors.email}</div>}

				<button type="submit" disabled={props.isSubmitting}>Submit</button>
			</Form>
		</Formik >
	)
}


const LoginForm = withFormik<FormProps, FormValues>({
	mapPropsToValues: () => ({
		email: '',
		password: ''
	}),
	validationSchema: Yup.object().shape({
		email: Yup.string()
			.required('Email cannot be empty')
			.email('Must enter a valid email address')
	}),

	handleSubmit: (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 1000)
	},
})(Login);

export default LoginForm;