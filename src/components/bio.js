import React, { Component } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <NavBar />
        <br></br>
        <div className="sticky-top devheading">
          <h1 style={{ textAlign: "center" }}>Bio</h1>
          <div style={{ color: "gray", fontSize: "14px" }}>
            Coming soon!
            <br></br>
            <br></br>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Bio;
