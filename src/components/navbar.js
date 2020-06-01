import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="/">
          <img
            src="https://jessicatrianawebsite.s3.us-east-2.amazonaws.com/jessica_avatar.png"
            alt="Jessica's Avatar"
            width="40"
          />
          &nbsp; Jessica Triana
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
              <a className="nav-link" href="/writer">
                Writer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/creator">
                Creator
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/resume">
                Resume
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
