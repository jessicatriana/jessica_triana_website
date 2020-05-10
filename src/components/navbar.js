import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="/">
          Jessica Triana
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/developer">
                Developer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/spokesmodel">
                Spokesmodel
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/youtuber">
                YouTuber
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blogs">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/bio">
                Bio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
