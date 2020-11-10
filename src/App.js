import "./App.scss"
import "bulma/css/bulma.css"
import { Switch, Route } from "react-router-dom"
import Login from "./components/Login"
import About from "./components/About"
import Portal from "./components/Portal"

function App() {
  return (
    <div className="App column">
      <div className="nav-bar">
        <a href="/">
          <button className="button is-primary">Login</button>
        </a>
        <a href="/portal">
          <button className="button is-primary">Portal</button>
        </a>
        <a href="/about">
          <button className="button is-primary">About</button>
        </a>
      </div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/portal" component={Portal} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
