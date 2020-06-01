import React, { Component } from "react";
import NavbarDark from "./NavbarDark";
import Footer from "./footer";

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <NavbarDark />

        <div className="iframediv">
          <iframe
            src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/resume.pdf"
            title="resume"
            allowfullscreen
            width="750"
            height="745"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Resume;
