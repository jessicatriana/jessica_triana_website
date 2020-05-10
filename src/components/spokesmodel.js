import React, { Component } from "react";
import NavBar from "./navbar";
import Footer from "./footer";

class Spokesmodel extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br></br>
        <h1 style={{ textAlign: "center" }}>Past Contracts</h1>
        <br></br>
        <Footer />
      </div>
    );
  }
}

export default Spokesmodel;
