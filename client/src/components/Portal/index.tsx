import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
// Redux
import { connect } from "react-redux";
// Components
import Navbar from "./Navbar"
import Admin from "./Admin";
import Staff from "./Staff";
import Management from "./Management";
import Checkout from "./Checkout";
import Verification from "./Verification";
import Thankyou from "./Thankyou";
import Comptrolling from "./Comptrolling";
import Schedule from "./Schedule";
import Events from "./Events";
import Incident from "./Incident";
import Docs from "./Docs";

// Styles
import "./Portal.scss";
// Routes
import { Routes } from "../../constants";
// Types/Interfaces
// import { Auth } from '../Auth/index.js'

interface PortalProps {
  auth: any;
  // auth: Auth,
  history: any;
  errors: any;
}

const Portal: (props: PortalProps) => JSX.Element = (props: PortalProps) => {
  console.log("portal props", props);

  useEffect(() => {
    if (!props.auth.isAuthenticated) {
      props.history.push(Routes.login);
    }
  });

  return (
	<>
	<Navbar />  
    <Switch>
      <Route path={Routes.staff} component={Staff} />
      <Route path={Routes.management} component={Management} />
      <Route path={Routes.checkout} component={Checkout} />
      <Route path={Routes.verification} component={Verification} />
      <Route path={Routes.thankyou} component={Thankyou} />
      <Route path={Routes.comptrolling} component={Comptrolling} />
      <Route path={Routes.admin} component={Admin} />
      <Route path={Routes.schedule} component={Schedule} />
      <Route path={Routes.events} component={Events} />
	  <Route path={Routes.incident} component={Incident} />
	  <Route path={Routes.docs} component={Docs} />
    </Switch>
	</>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps)(Portal);
