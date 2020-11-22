import React from 'react'
import './About.scss'
import { Link } from 'react-router-dom'
import { Routes } from '../../utils/routes'
import { LogoWhite } from '../Util'

const About: () => JSX.Element = () => {
	return (
		<div className="container">

			<LogoWhite />

			<div className="buttonContainer">
				<Link to={Routes.login}>
					<button className="button is-ghost is-small">Login</button>
				</Link>
				<Link to={Routes.signup}>
					<button className="button is-ghost is-small">Sign-up</button>
				</Link>
			</div>
		</div>
	)
}

export default About
