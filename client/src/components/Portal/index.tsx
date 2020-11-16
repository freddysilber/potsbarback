import React from "react";
import { Switch, Route } from 'react-router-dom'
import Staff from './Staff'
import Management from './Management'
import './Portal.scss'
import Checkout from "./Checkout";

const Portal = () => {

	return (
		<div className="container">
			<div className="nav-bar">
				{/* Lets refactor these anchors into components for Navi */}
				<a href="/portal/staff">
					<button className="button is-primary">Staff</button>
				</a>
				<a href="/portal/management">
					<button className="button is-primary">Mgmt</button>
				</a>
				<a href="/portal/checkout">
					<button className="button is-primary">Checkout</button>
				</a>
			</div>
			<Switch>
				<Route path="/portal/staff" component={Staff} />
				<Route path="/portal/management" component={Management} />
				<Route path="/portal/checkout" component={Checkout} />
			</Switch>
		</div>
	);
};
export default Portal;
