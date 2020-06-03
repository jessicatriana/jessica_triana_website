import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./footer";

class Home extends Component {
  render() {
    return (
      <div
        className="background"
        style={{
          backgroundImage: `url("https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/grandteton3.jpg")`,
        }}
      >
        <Nav />
        <div className="home-wrapper">
          <div className="home-photo">
            <img
              src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/jessica_profile.jpg"
              alt="Jessica Triana"
              height="400px"
            />
          </div>
          <div className="home-aboutme">
            <h1 style={{ textAlign: "center" }}>Welcome</h1>
            <br></br>
            <p style={{ fontSize: "small" }}>
              Thanks for visiting! This portfolio showcases my work as a budding{" "}
              <b>Sofware Developer</b> and gives some background on the last
              chapter of my life as a traveling <b>Narrator</b> and{" "}
              <b>Product Specialist</b>. I can't wait to see how these worlds
              collide.{" "}
            </p>
            <p style={{ fontSize: "small" }}>
              <b>Austin, TX</b> is home. I have the priviledge of morning hikes
              at the greenbelt and afternoon dips in the spring-fed rivers. The
              food, live music and fun events are just a few reasons to love
              living here. When it comes to vacations, my husband and I love
              active trips where we can hike in the mountains and swim in the
              ocean, often in the same day!
            </p>
            <p style={{ textAlign: "center" }}>
              Take a look and let's connect!
            </p>
            <br></br>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
