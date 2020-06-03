import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./footer";

class Contact extends Component {
  render() {
    return (
      <div
        className="background"
        style={{
          backgroundImage: `url("https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/grandteton3.jpg")`,
        }}
      >
        <Nav />
        <div className="contact-wrapper">
          <div className="iframediv-contact">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSexi46Q5bB738_-UQ1YsXhzzv8MltY2Qncow7uOrvtMBaYVTQ/viewform?embedded=true"
              width="640"
              height="650"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="contact"
            >
              Loading…
            </iframe>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
