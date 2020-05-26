import React from "react";
import logo from "./logo.svg";
import ReactGA from "react-ga";
import "./App.css";

function initializeReactGA() {
  ReactGA.initialize("UA-161204876-4");
  ReactGA.pageview("/homepage");
}
initializeReactGA();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
