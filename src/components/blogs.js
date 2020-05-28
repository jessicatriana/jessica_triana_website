import React, { Component } from "react";
import NavBar from "./Navbar";
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
        <NavBar />
        <br></br>
        <div className="sticky-top devheading">
          <br></br>
          <h1 style={{ textAlign: "center" }}>Writer</h1>
          <div style={{ color: "gray", fontSize: "14px" }}>
            Here are the technical blogs I've written on DEV:
            <br></br>
            <br></br>
          </div>
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
