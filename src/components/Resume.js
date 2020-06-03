import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./footer";

class Resume extends Component {
  render() {
    return (
      <div
        className="background"
        style={{
          backgroundImage: `url("https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/grandteton3.jpg")`,
        }}
      >
        <Nav />
        <div className="iframediv">
          <iframe
            src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/resume.pdf"
            title="resume"
            allowfullscreen
            width="750"
            height="600"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Resume;
