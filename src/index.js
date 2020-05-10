import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bio from "./components/bio";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Developer from "./components/developer";
import Spokesmodel from "./components/spokesmodel";
import YouTuber from "./components/youtuber";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route exact path="/bio" component={Bio} />
      <Route exact path="/blogs" component={Blogs} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/developer" component={Developer} />
      <Route exact path="/spokesmodel" component={Spokesmodel} />
      <Route exact path="/youtuber" component={YouTuber} />
      <Route exact path="/" component={App} />

    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
