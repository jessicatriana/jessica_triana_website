import React, { Component } from "react";
import NavBar from "./navbar";
import Footer from "./footer";
import YouTube from "@u-wave/react-youtube";

class YouTuber extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br></br>
        <h1 style={{ textAlign: "center" }}>A Creative Outlet</h1>
        <p style={{ textAlign: "center" }}>More content coming soon!</p>
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
