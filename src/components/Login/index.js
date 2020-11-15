import React from "react"
import "./Login.scss"

const Login = () => {
  return (
    <div className="container">
      <div className="login-title">Bak||Bar Login</div>
      <div className="card login-input-form">
        <span className="login-form-head">Email:</span>
        <input
          className="input login-input is-primary is-medium"
          type="email"
          placeholder="example@email.com"
        />
        <span className="login-form-head">Password:</span>
        <input
          class="input login-input is-primary is-medium"
          type="password"
          placeholder="password"
        />
        <div className="login-button-div">
          <a href="/portal/staff">
            <button className="button login-button is-primary">Login</button>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Login