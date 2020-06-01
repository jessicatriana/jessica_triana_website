import React, { Component } from "react";
import NavbarDark from "./NavbarDark";
import Footer from "./Footer";
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
      <div className="blogs">
        <NavbarDark />
        <br></br>
        <div className="sticky-top devheading">
          <br></br>
          <h1 style={{ textAlign: "center" }}>Writer</h1>
          <div style={{ color: "gray", fontSize: "14px" }}>
            Here are the technical blogs I've written on{" "}
            <a href="https://dev.to/jessicatriana">DEV</a>.<br></br>Click an
            image to read the full blog.
            <br></br>
            <br></br>
          </div>
        </div>
        <div>
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
