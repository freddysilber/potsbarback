// React
import React from 'react'
// Router
import { Switch, Route } from "react-router-dom"
// Styles
import "./App.scss"
import "bulma/css/bulma.css"
// Components
import { Login, About, Portal } from './components'

function App() {
  return (
    <div className="App column">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/portal" component={Portal} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
