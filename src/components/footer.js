import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              <SocialIcon
                url="mailto:jessica.triana.tx@gmail.com"
                style={{ height: 25, width: 25 }}
                bgColor="#9370DB"
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <SocialIcon
                url="http://linkedin.com/in/jessicatriana8"
                style={{ height: 25, width: 25 }}
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <SocialIcon
                url="https://www.instagram.com/jessica.triana_/"
                style={{ height: 25, width: 25 }}
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <SocialIcon
                url="https://www.youtube.com/channel/UC1MGG9Q-wTS8sbkes1zhrbw?view_as=subscriber"
                style={{ height: 25, width: 25 }}
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <SocialIcon
                url="https://medium.com/@jessica_triana"
                style={{ height: 25, width: 25 }}
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <SocialIcon
                url="https://dev.to/jessicatriana"
                style={{ height: 25, width: 25 }}
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <SocialIcon
                url="https://github.com/jessicatriana"
                style={{ height: 25, width: 25 }}
              />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
