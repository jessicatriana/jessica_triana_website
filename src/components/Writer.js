import React, { Component } from "react";
import Nav from "./Nav";
import Footer from "./footer";
import Post from "./Post";

class Blogs extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch(`https://dev.to/api/articles?username=jessicatriana`)
      .then((response) => response.json())
      .then((posts) => this.setState({ posts }));
  }

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
          <h1 style={{ textAlign: "center" }}>Writer</h1>
          <div style={{ color: "gray", fontSize: "14px" }}>
            Here are the <b>technical blogs</b> I've written on{" "}
            <a href="https://dev.to/jessicatriana">DEV</a> about what I've
            learned on my <b>coding journey</b>. This feed pulls information
            directly from the Dev API and is updated upon refresh. Click an
            image to read the full blog.
            <br></br>
            <br></br>
          </div>
        </div>
        <div className="writer-posts">
          {this.state.posts.map((post) => (
            <Post post={post} />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Blogs;
