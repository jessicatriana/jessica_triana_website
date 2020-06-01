import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="background"></div>
        <Footer />
      </div>
    );
  }
}

export default Home;
