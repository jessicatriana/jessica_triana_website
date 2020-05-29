import React, { Component } from "react";
import NavBarDark from "./NavbarDark";
import Footer from "./Footer";
import YouTube from "@u-wave/react-youtube";

class YouTuber extends Component {
  render() {
    return (
      <div className="creations">
        <NavBarDark />
        <br></br>
        <div className="sticky-top devheading">
          <br></br>
          <h1 style={{ textAlign: "center" }}>Creator</h1>
          <div style={{ color: "gray", fontSize: "14px" }}>
            I love taking day-hikes around Austin and traveling to other states
            like Colorado to experience the true beauty of the natural world.
            <br></br>
            Recently, I realized I enjoy the process of capturing footage,
            editing it, and sharing it on Youtube.
            <br></br>
            <br></br>
            More content coming soon!
            <br></br>
          </div>
        </div>
        <div className="container">

          <YouTube
            video="7V2oc7lRfEk"
            width="500px"
            height="280px"
            muted="true"
          />
          {/* </div> */}
          {/* </div> */}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <Footer />
      </div>
    );
  }
}

export default YouTuber;
