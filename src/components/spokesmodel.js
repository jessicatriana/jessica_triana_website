import React, { Component } from "react";
import NavbarDark from "./NavbarDark";
import Footer from "./footer";

class Spokesmodel extends Component {
  render() {
    return (
      <div className="contracts">
        <NavbarDark />
        <br></br>
        <div className="sticky-top devheading">
          <br></br>
          <h1 style={{ textAlign: "center" }}>Spokesmodel</h1>
          <div style={{ color: "gray", fontSize: "14px" }}>
            Over the last 4 years, I worked as a Product Specialist,
            Demonstrator, and Spokesmodel for numerous Fortune 500 companies.
            <br></br>I enjoyed traveling to high-profile events and sharing the
            latest information on products from various industries.
            <br></br>
            <br></br>
          </div>
        </div>
        <br></br>
        <div class="wrapper">
          <div class="one">
            <h5>Lexus</h5>
            <img
              src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/lexus.png"
              alt="lexus"
              width="300px"
            />
            <br></br>
            Houston Auto Show
          </div>
          <div class="two">
            <h5>Lexus</h5>
            <img
              src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/lexus1.png"
              alt="lexus"
              width="300px"
            />
            <br></br>
            Dallas Auto Show
          </div>
          <div class="three">
            {" "}
            <h5>Lexus</h5>
            <img
              src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/lexus2.png"
              alt="lexus"
              width="300px"
            />
            <br></br>
            New York Auto Show
          </div>
          <div class="four">
            <h5>Nike</h5>
            <img
              src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/nike.png"
              alt="nike"
              width="300px"
            />
            <br></br>
            Houston Superbowl
          </div>
          <div class="five">
            <h5>Google</h5>
            <img
              src="http://jessicatrianawebsite.s3.us-east-2.amazonaws.com/google.png"
              alt="google"
              width="300px"
            />
            <br></br>
            Las Vegas Consumer Electronics Show
          </div>
          <div class="six">
            {" "}
            <h5>Nintendo</h5>
            <img
              src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/nintendo.png"
              alt="nintendo"
              width="300px"
            />
            <br></br>
            Austin SXSW
          </div>
          <div class="seven">
            <h5>Nissan</h5>
            <img
              src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/nissan.png"
              alt="nissan"
              width="300px"
            />
            <br></br>
            New York Auto Show
          </div>
          <div class="eight">
            <h5>Omen by HP</h5>
            <img
              src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/omen.png"
              alt="omen"
              width="300px"
            />
            <br></br>
            San Antonio PAX South
          </div>
          <div class="nine">
            <h5>LG</h5>
            <img
              src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/lg.png"
              alt="lg"
              width="300px"
            />
            <br></br>
            Las Vegas Consumer Electronics Show
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer className="footer_z_index" />
          </div>
        </div>
      </div>
    );
  }
}

export default Spokesmodel;
