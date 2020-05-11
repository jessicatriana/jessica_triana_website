import React, { Component } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import YouTube from "@u-wave/react-youtube";

class YouTuber extends Component {
  render() {
    return (
      <div className="creations">
        <NavBar />
        <br></br><br></br><br></br>
        <h1 style={{ textAlign: "center" }}>A Creative Outlet</h1>
        <div style={{ color: "gray", fontSize: "14px" }}>Jessica recently discovered she enjoys capturing images of the beauty around her. This is slowly become a<br></br> hobby where she edits the footage and uplaods it to YouTube. More content coming soon!</div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-md-auto">
              <YouTube
                video="7V2oc7lRfEk"
                width="500px"
                height="280px"
                muted="true"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default YouTuber;
