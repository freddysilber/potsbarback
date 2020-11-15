// import React from 'react'
// // Formik
// import { Formik, Form, Field, FormikProps } from 'formik'
// // Styles
// import './Login.scss'
// // Yup validation
// import * as Yup from 'yup'
// // import { useHistory } from "react-router-dom";

// interface LoginValues {
//   email: string,
//   password: string
// }
// interface OtherProps {
//   message: string
// }

// const validateFrom = () => {
//   console.log('Validate this data!')
// }

// const initialValues: LoginValues = {
//   email: '',
//   password: ''
// }

// const Login = (props: OtherProps & FormikProps<LoginValues>) => {

//   // const { touched, errors, message } = props

//   const handleSubmit = (values: any, actions: any) => {
//     validateFrom()
//     console.log({ values, actions });
//     alert(JSON.stringify(values, null, 2));
//     actions.setSubmitting(false);
//   }

//   return (
//     <Formik
//       validateOnChange
//       initialValues={initialValues}
//       validationSchema={Yup.object().shape({
//         email: Yup.string()
//           .required("Email is required")
//           .min(2, "Must enter valid email")
//           .email('Must enter a valid email address'),
//         password: Yup.string()
//           .min(6, "Password must be at least 6 characters")
//           .required("Password is required"),
//       })}
//       onSubmit={(values, actions) => {
//         handleSubmit(values, actions)
//       }} >
//       <div className="container">
//         <div className="login-title">Bak||Bar Login</div>
//         <div className="card login-input-form">
//           {({ isSubmitting, errors, touched, values }: any) => (
//             <Form>
//               <label htmlFor="email">Email</label>
//               <Field className="input login-input is-primary is-medium" id="email" name="email" type="email" placeholder="Enter your email" />
//               {errors.email && touched.email ? (
//                 <label className="label has-text-danger">
//                   {errors.email}
//                 </label>
//               ) : null}

//               <label htmlFor="password">Password</label>
//               <Field className="input login-input is-primary is-medium" id="password" name="password" type="password" placeholder="Enter your password" />

//               <div className="login-button-div">
//                 <button className="button login-button is-primary" type="submit">Submit</button>
//               </div>
//             </Form>
//           )}
//         </div>
//       </div>
//     </Formik>
//   )
// }
// export default Login
import React from 'react'
import { Formik, Form, Field, FormikProps, InjectedFormikProps, withFormik } from 'formik'
import * as Yup from 'yup';

interface FormValues {
  email: string,
  password: string
}

interface FormProps {
  email?: string
  password?: string
}

const Login: React.SFC<InjectedFormikProps<FormProps, FormValues>> = (props) => (
  <Formik onSubmit={props.handleSubmit}>
    <Form>
      <input
        id="email"
        placeholder="Enter your email"
        type="text"
        onChange={props.handleChange}
        value={props.values.email}
      />
      {props.touched.email && props.errors.email && <div>{props.errors.email}</div>}
      <button type="submit" disabled={props.isSubmitting}>
        Submit
    </button>
    </Form>
  </Formik>
);

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