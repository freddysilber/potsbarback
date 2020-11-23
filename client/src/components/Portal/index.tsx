import React from "react";
import { Switch, Route } from "react-router-dom";
// Components
import Staff from "./Staff";
import Management from "./Management";
import Checkout from "./Checkout";
import Verification from "./Verification";
import Thankyou from "./Thankyou";
// Styles
import "./Portal.scss";
// Routes
import { Routes } from "../../utils/routes";

const Portal: () => JSX.Element = () => {
	return (
		// <div className="container">
		<Switch>
			<Route path={Routes.staff} component={Staff} />
			<Route path={Routes.management} component={Management} />
			<Route path={Routes.checkout} component={Checkout} />
			<Route path={Routes.verification} component={Verification} />
			<Route path={Routes.thankyou} component={Thankyou} />
		</Switch>
		// </div>
	);
};
export default Portal;
