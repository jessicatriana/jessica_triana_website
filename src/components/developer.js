import React, { Component } from "react";
import NavBarDark from "./NavbarDark";
import Footer from "./Footer";
import YouTube from "@u-wave/react-youtube";

class Developer extends Component {
  render() {
    return (
      <div className="projects">
        <NavBarDark />
        <br></br>
        <div className="sticky-top devheading">
          <br></br>
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Developer
          </h1>
          <div style={{ color: "gray", fontSize: "14px" }}>
            Here are demos of the projects I built during my time as a Software
            Engineering student at Flatiron School in Austin, TX. <br></br>
            Sanctuary was my final, independent project, while all other
            projects were in collaboration with other students.
            <br></br>
            <br></br>
          </div>
        </div>
        <div className="dev-background">
          <h5>
            Sanctuary - An effortless way to plan a National Park getaway.
          </h5>
          <YouTube
            video="bj5h3jA2-dg"
            width="782px"
            height="440px"
            muted="true"
          />
          <br></br>
          <p style={{ fontSize: "12px" }}>
            React, BootStrap, Ruby on Rails, PostgreSQL - Built May 2020
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <h5>
            Get Together - Connecting like-minded programmers both on and
            offline.
          </h5>
          <YouTube
            video="OCxxftkq1_g"
            width="782px"
            height="440px"
            muted="true"
          />
          <br></br>
          <p style={{ fontSize: "12px" }}>
            React, Ruby on Rails, SQLite3 - Built April 2020
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h5>Basic Bach - Bachelor(ette) planning, made easy.</h5>
          <YouTube
            video="wlLgNcvjx-Y"
            width="782px"
            height="440px"
            muted="true"
          />
          <br></br>
          <p style={{ fontSize: "12px" }}>
            Ruby on Rails, SQLite3, ActiveRecord - Built March 2020
          </p>
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

export default Developer;
