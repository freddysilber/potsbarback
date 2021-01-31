import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
// Redux
import { connect } from 'react-redux'
// Components
import Staff from './Staff'
import Management from './Management'
import Checkout from './Checkout'
import Verification from './Verification'
import Thankyou from './Thankyou'
import Comptrolling from './Comptrolling'
// Styles
import './Portal.scss'
// Routes
import { Routes } from '../../constants'
// Types/Interfaces
// import { Auth } from '../Auth/index.js'

interface PortalProps {
	auth: any,
	// auth: Auth,
	history: any,
	errors: any
}

const Portal: (props: PortalProps) => JSX.Element = (props: PortalProps) => {
	console.log('portal props', props)

	useEffect(() => {
		if (!props.auth.isAuthenticated) {
			props.history.push(Routes.login)
		}
	})

	return (
		<Switch>
			<Route path={Routes.staff} component={Staff} />
			<Route path={Routes.management} component={Management} />
			<Route path={Routes.checkout} component={Checkout} />
			<Route path={Routes.verification} component={Verification} />
			<Route path={Routes.thankyou} component={Thankyou} />
			<Route path={Routes.comptrolling} component={Comptrolling} />
		</Switch>
	)
}

const mapStateToProps = (state: any) => ({
	auth: state.auth,
	errors: state.errors
})

export default connect(mapStateToProps)(Portal)
