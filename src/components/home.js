import React, { Component } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="background" style={{backgroundImage: `url("https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/landscape1.jpg")`}}></div>
        <Footer />
      </div>
    );
  }
}

export default Home;
