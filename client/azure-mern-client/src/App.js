import React from "react";
// import axios from 'axios';
import "./index.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bestShows: []
    };
  }

  render() {
    return (
      <div>
        <ul>
          {
            Object.keys(this.state.bestShows).map((cur, idx) => (
              <li>{cur} - {this.state.bestShows[cur]} </li>
            ))
          }

        </ul>
      </div>
    );
  }
}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<WorldMap />, rootElement);


export default App;
