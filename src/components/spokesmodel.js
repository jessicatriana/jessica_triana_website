import React, { Component } from "react";
import NavBar from "./navbar";
import Footer from "./footer";

class Spokesmodel extends Component {
  render() {
    return (
      <div className="contracts">
        <NavBar />
        <br></br>
        <div className="sticky-top devheading">
        <h1 style={{ textAlign: "center" }}>Past Contracts</h1>
        <div style={{ color: "gray", fontSize: "14px" }}>
          Over the last 4 years, Jessica has worked as a Product Specialist,
          Demonstrator, and Spokesmodel for numerous Fortune 500 companies.
          <br></br>
          She enjoyed traveling to high-profile events and sharing the latest
          info on products from all different industries.
          <br></br><br></br>
        </div>
        </div>
        <br></br>
        <div class="wrapper">
          <div class="one">
            <h5>Lexus</h5>
            <img src="/lexus3.png" alt="lexus" width="300px" />
            <br></br>
            Houston Auto Show
          </div>
          <div class="two">
            <h5>Lexus</h5>
            <img src="/lexus1.png" alt="lexus" width="300px" />
            <br></br>
            Dallas Auto Show
          </div>
          <div class="three">
            {" "}
            <h5>Lexus</h5>
            <img src="/lexus2.png" alt="lexus" width="300px" />
            <br></br>
            New York Auto Show
          </div>
          <div class="four">
            <h5>Nike</h5>
            <img src="/nike.png" alt="nike" width="300px" />
            <br></br>
            Houston Superbowl
          </div>
          <div class="five">
            <h5>Google</h5>
            <img src="/google.png" alt="google" width="300px" />
            <br></br>
            Las Vegas Consumer Electronics Show
          </div>
          <div class="six">
            {" "}
            <h5>Nintendo</h5>
            <img src="/nintendo.png" alt="nintendo" width="300px" />
            <br></br>
            Austin SXSW
          </div>
          <div class="seven">
            <h5>Nissan</h5>
            <img src="/nissan.png" alt="nissan" width="300px" />
            <br></br>
            New York Auto Show
          </div>
          <div class="eight">
            <h5>Omen by HP</h5>
            <img src="/omen.png" alt="omen" width="300px" />
            <br></br>
            San Antonio PAX South
          </div>
          <div class="nine">
            <h5>LG</h5>
            <img src="/lg.png" alt="lg" width="300px" />
            <br></br>
            Las Vegas Consumer Electronics Show
            <br></br><br></br><br></br><br></br>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Spokesmodel;
