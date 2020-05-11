import React, { Component } from "react";
import NavBar from "./navbar";
import Footer from "./footer";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <NavBar />
        <br></br>
        <div className="sticky-top devheading">
          <h1 style={{ textAlign: "center" }}>Contact</h1>
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

export default Contact;
