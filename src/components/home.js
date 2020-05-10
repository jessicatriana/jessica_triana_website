import React, { Component } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import BackgroundImage from "./backgroundImage";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <BackgroundImage />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
