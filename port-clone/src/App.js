import React, { Component } from "react";
import "./App.css";
// import Services from "./components/Services/Services";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <nav id="navbar" className="sticky">
            <h4 className="leftnav">Start Bootstrap</h4>
            <ul className="menupoints">
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>ABOUT</li>
              <li>TEAM</li>
              <li>CONTACT</li>
            </ul>
            <button className="toggle-button">&#9776;</button>
          </nav>
        </header>
        <div className="title">
          <h3>Welcome To Our Studio!</h3>
          <h1>IT'S NICE TO MEET YOU</h1>
        </div>
        <div className="moreinfo">
          <button className="button">TELL ME MORE</button>
        </div>
        {/* <Services /> */}
      </div>
    );
  }
}

export default App;
