import React, { Component } from "react";
import NavBar from "./navbar";
import Footer from "./footer";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="background">

        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
