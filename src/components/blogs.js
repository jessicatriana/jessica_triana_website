import React, { Component } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

class Blogs extends Component {
  render() {
    return (
      <div className="blogs">
        <NavBar />
        <br></br>
        <div className="sticky-top devheading">
          <h1 style={{ textAlign: "center" }}>Technical Blogs</h1>
          <div style={{ color: "gray", fontSize: "14px" }}>
          Coming soon!            <br></br>
            <br></br>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Blogs;
