import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Writer from "./components/Writer";
import Developer from "./components/Developer";
import Spokesmodel from "./components/Spokesmodel";
import Creator from "./components/Creator";
import Resume from "./components/Resume"

ReactDOM.render(
  <Router>
    <React.StrictMode>
    <Route exact path="/resume" component={Resume} />
      <Route exact path="/writer" component={Writer} />
      <Route exact path="/developer" component={Developer} />
      <Route exact path="/spokesmodel" component={Spokesmodel} />
      <Route exact path="/creator" component={Creator} />
      <Route exact path="/" component={App} />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
