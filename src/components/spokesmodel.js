import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./footer";
import Carousel from "./Carousel";

class Spokesmodel extends Component {
  render() {
    return (
      <div
        className="background"
        style={{
          backgroundImage: `url("https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/grandteton3.jpg")`,
        }}
      >
        <Nav />
        <div className="sticky-top heading">
          <br></br>
          <h1 style={{ textAlign: "center" }}>Spokesmodel</h1>
          <div style={{ color: "gray", fontSize: "14px" }}>
            Over the last 4 years, I worked as a <b>Product Specialist</b>,{" "}
            <b>Demonstrator</b> and <b>Spokesmodel</b> for numerous Fortune 500
            companies. I enjoyed traveling to high-profile events and sharing
            the latest information on products from various industries.
            <br></br>
            <br></br>
          </div>
        </div>
        <div className="spokesmodel-carousel">
          <Carousel />
        </div>
        <Footer className="footer_z_index" />
      </div>
    );
  }
}

export default Spokesmodel;
