import React, { useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
// Formik/Validations (Yup)
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// Models
// import User from '../../../../models/User.model'
// Types
// import { InitialValues, FormState, FormData, SignupProps } from '../../interfaces/signupTypes'
// Redux
import { connect } from "react-redux";
// import { registerUser } from '../../../../store/actions/authActions'
// Routes
import { Routes } from "../../../constants";
// Styles
// import '../../Auth.scss'

const initialValues: InitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
};

type UserIncident = object | undefined;

const incidentValidators: Yup.ObjectSchema<
  Yup.Shape<
    UserIncident,
    {
      location: string;
      named_parties: string;
      parties_contact: string;
      description: string;
    }
  >,
  object
> = Yup.object().shape({
  named_parties: Yup.string().required("Named Parties cannot be empty"),
  parties_contact_phone: Yup.string().required("Last name cannot be empty"),
  parties_contact_email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  description: Yup.string()
    .oneOf([Yup.ref("email"), null || ""], "Emails must match!")
    .required("Confirm Email is required"),
  // password: Yup.string()
  // 	.min(2, 'Your password is too short!')
  // 	.max(50, 'Your password is too long')
  // 	.required('A password is required'),
  // confirmPassword: Yup.string()
  // 	.oneOf([Yup.ref('password'), null || ''], 'Passwords must match!')
  // 	.max(50, 'Your password is too long')
  // 	.required('A password is required'),
});

const Incident = () => {
  // : (props: IncidentProps) => JSX.Element = (props: IncidentProps) => {

  // useEffect(() => {
  // 	if (props.auth.isAuthenticated) {
  // 		props.history.push(Routes.staff)
  // 	}
  // })

  // const handleSubmit = (data: FormData) => {
  // 	const user: User = data.values
  // 	props.registerUser(user, props.history)
  // }

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={signupValidators}
      onSubmit={(values: any, actions: any) => {
        const data: FormData = { actions, values };
        handleSubmit(data);
      }}
    >
      {({ errors, touched, isSubmitting }: FormState) => (
        <div className="card login-input-form">
          <div className="title mb-2">Incident Report</div>
          <div>Use this form to report an incident, please fill out the fields as thoroughly as possible.</div>
          <div className="subtitle mt-4">NAME </div>
          <div className="subtitle">POSTITION</div>
          <div className="subtitle">COST CENTER</div>
          <Form>
            <label htmlFor="named_parties">
              {touched.named_parties && errors.named_parties ? (
                <p className="fieldError">{errors.named_parties}</p>
              ) : (
                "Name(s) of party involved"
              )}
            </label>
            <Field
              className="input login-input is-black mt-0 is-medium"
              id="named_parties"
              name="named_parties"
              type="named_parties"
              placeholder="Enter your first name"
            />

            <label htmlFor="lastName">
              {touched.lastName && errors.lastName ? (
                <p className="fieldError">{errors.lastName}</p>
              ) : (
                "Contact Information"
              )}
            </label>
            <Field
              className="input login-input is-black mt-0 is-medium"
              id="lastName"
              name="lastName"
              type="lastName"
              placeholder="Enter your last name"
            />

            <label htmlFor="email">
              {touched.email && errors.email ? (
                <p className="fieldError">{errors.email}</p>
              ) : (
                "Location of Incident"
              )}
            </label>
            <Field
              className="input login-input is-black mt-0 is-medium"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="username"
            />

            <label htmlFor="confirmEmail">
              {touched.confirmEmail && errors.confirmEmail ? (
                <p className="fieldError">{errors.confirmEmail}</p>
              ) : (
                "Incident Description"
              )}
            </label>
            <Field
              className="input login-input is-black mt-0 is-medium"
              id="confirmEmail"
              name="confirmEmail"
              type="email"
              placeholder="Confirm email"
            />
            <div className="field">
              <label>Description</label>
              <div className="control">
                <textarea className="textarea login-input is-black mt-0 is-medium" placeholder="type incident description here..."></textarea>
              </div>
            </div>

           

            <div className="login-button-div">
              <Link to={Routes.about}>
                <button className="button is-danger login-button" type="submit">
                  Back
                </button>
              </Link>
              <button
                className="button login-button is-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps)(Incident);
