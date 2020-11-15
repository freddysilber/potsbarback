// React
import React from 'react'
// Router
import { Switch, Route } from "react-router-dom"
// Styles
import "./App.scss"
import "bulma/css/bulma.css"
// Components
import { Login, About, Portal, Signup } from './components'

function App() {
  return (
    <div className="App column">
      <Switch>
        <Route exact path="/" component={About} />

        <Route path="/login" component={Login} />
        <Route path="/portal/admin/signup" component={Signup} />

        <Route path="/portal" component={Portal} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
