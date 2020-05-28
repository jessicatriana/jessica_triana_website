import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
