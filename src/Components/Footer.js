import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul className="copyright">
              <li>&copy; Copyright 2021 Mcnikko Pinlac</li>
              <li>
                <a
                  title="Styleshout"
                  href="http://www.styleshout.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Styleshout
                </a>
              </li>
            </ul>
            <div>
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
                target="_blank"
                rel="noopener noreferrer"
              >
                Freepik
              </a>{" "}
              from{" "}
              <a
                href="https://www.flaticon.com/"
                title="Flaticon"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.flaticon.com
              </a>
            </div>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
