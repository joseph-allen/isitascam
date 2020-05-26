import React from "react";
import ReactGA from "react-ga";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function initializeReactGA() {
  ReactGA.initialize("UA-161204876-4");
  ReactGA.pageview("/homepage");
}
initializeReactGA();

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <header className="App-header">
        <Router>
          <div>
            <Switch>
              <Route path="/:id" render={(props) => <UserPage {...props} />} />
              <Route path="/">
                <Typography variant="h1" component="h2" gutterBottom>
                  Is it a scam?
                </Typography>
                <Typography variant="h2" gutterBottom>
                  Yes
                </Typography>
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;

function UserPage(props) {
  return (
    <div>
      <Typography variant="h2" component="h2" gutterBottom>
        Is {props.match.params.id} a scam?
      </Typography>
      <Typography variant="h1" gutterBottom>
        Yes
      </Typography>
    </div>
  );
}
