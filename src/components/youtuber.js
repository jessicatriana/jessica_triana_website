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
          <h1 style={{ textAlign: "center" }}>Creator</h1>
          <div style={{ color: "gray", fontSize: "14px" }}>
            Jessica recently discovered she enjoys capturing images of the
            beauty around her. This is slowly becoming a<br></br> hobby where
            she edits the footage and uploads it to YouTube. More content coming
            soon!
            <br></br>
          </div>
        </div>
        <div className="container">
          {/* <div className="row"> */}
          {/* <div className="col-md-auto"> */}
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
