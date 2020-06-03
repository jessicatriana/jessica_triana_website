import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./footer";
import YouTube from "@u-wave/react-youtube";

class Developer extends Component {
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
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Developer
          </h1>
          <div style={{ color: "gray", fontSize: "14px" }}>
            Here are demos of the projects I built during my time as a{" "}
            <b>Software Engineering</b> student at <b>Flatiron School</b> in{" "}
            <b>Austin, TX</b>. Sanctuary was my final, independent project,
            while all other projects were in collaboration with other students.
            <br></br>
            <br></br>
          </div>
        </div>
        <div className="developer-videos">
          <h5>
            Sanctuary - An effortless way to plan a National Park getaway.
          </h5>
          <YouTube
            video="bj5h3jA2-dg"
            width="700px"
            height="340px"
            muted="true"
          />
          <br></br>
          <p style={{ fontSize: "12px" }}>
            React, BootStrap, Ruby on Rails, PostgreSQL - Built May 2020
          </p>
          <br></br>
          <hr></hr>
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
          <hr></hr>
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default Developer;
