import React, { Component } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

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
