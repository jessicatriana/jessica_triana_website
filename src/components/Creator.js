import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./footer";
import YouTube from "@u-wave/react-youtube";

class YouTuber extends Component {
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
          <h1 style={{ textAlign: "center" }}>Creator</h1>
          <div style={{ color: "gray", fontSize: "14px" }}>
            This is a new <b>hobby</b> that combines my love of travel and
            nature with my interest in learning how to capture what I see. An
            inexpensive gimbal paired with an <b>iPhone</b> and <b>iMovie</b>{" "}
            can yield impressive results. <b>More content coming soon!</b>
            <br></br>
            <br></br>
          </div>
        </div>
        <div className="creator-videos">
          <YouTube
            video="7V2oc7lRfEk"
            width="682px"
            height="340px"
            muted="true"
          />
          <br></br>
          Austin, TX Hidden Gems - Red Bud Isle
        </div>
        <Footer />
      </div>
    );
  }
}

export default YouTuber;
