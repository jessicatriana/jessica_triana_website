import React, { Component } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import YouTube from "@u-wave/react-youtube";

class Developer extends Component {
  render() {
    return (
      <div className="projects">
        <NavBar />
        <br></br>
        <div className="sticky-top devheading">
          <h1 style={{ textAlign: "center" }}>Developer</h1>
          <div style={{ color: "gray", fontSize: "14px" }}>
            Here are a few of the projects that Jessica built during her time as
            a Software Engineering student at Flatiron School in Austin, TX.{" "}
            <br></br>She enjoyed collaborating with other students to bring
            these ideas to life using modern web development frameworks.
            <br></br>
            <br></br>
          </div>
        </div>

        <h5>Sanctuary - An effortless way to plan a National Park getaway.</h5>
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
          Get Together - Connecting like-minded programmers both on and offline.
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
        <Footer />
      </div>
    );
  }
}

export default Developer;
