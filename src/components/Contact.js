import React, { Component } from "react";
import NavbarDark from "./NavbarDark";
import Footer from "./footer";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <NavbarDark />
        <div className="iframediv">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSexi46Q5bB738_-UQ1YsXhzzv8MltY2Qncow7uOrvtMBaYVTQ/viewform?embedded=true"
            width="640"
            height="799"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
