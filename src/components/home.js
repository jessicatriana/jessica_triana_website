import React, { Component } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import Background from "./background.js"


class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>
       <Background />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
