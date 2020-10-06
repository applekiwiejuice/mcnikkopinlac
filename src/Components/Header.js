import React, { Component } from "react";
import ParticlesBg from "particles-bg";
//mcndev Icon
// import icon from "./icon.js";

class Header extends Component {
  render() {
    if (this.props.data) {
      var project = this.props.data.project;
      var github = this.props.data.github;
      var name = this.props.data.name;
      var description = this.props.data.description;

      //unused
      // var city = this.props.data.address.city;

      //unused
      // var networks = this.props.data.social.map(function (network) {
      //   return (
      //     <li key={network.name}>
      //       <a href={network.url}>
      //         <i className={network.className}></i>
      //       </a>
      //     </li>
      //   );
      // });
    }

    //Particles Custom Config
    // let config = {
    //   num: [1, 1],
    //   rps: 0.1,
    //   radius: [5, 40],
    //   life: [1.5, 3],
    //   v: [2, 3],
    //   tha: [-50, 50],
    //   alpha: [0.6, 0],
    //   scale: [0.1, 0.9],
    //   body: icon,
    //   position: "all",
    //   cross: "dead",
    //   random: 20,
    //   g: 1,
    // };

    // let config = {
    //   num: [1, 1],
    //   rps: 0.1,
    //   radius: [2, 2],
    //   life: [10, 12],
    //   v: [1, 3],
    //   tha: [-20, 20],
    //   alpha: [0.6, 0],
    //   scale: [0.1, 0.4],
    //   position: "all",
    //   cross: "dead",
    //   emitter: "follow",
    //   random: 15,
    //   body: icon,
    // };

    let iconStyle = {
      height: "100px",
      width: "100px",
      borderRadius: "50px",
    };

    return (
      <header id="home">
        <ParticlesBg num={8} type="circle" bg={true} />
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <img style={iconStyle} src="./images/mcndev.png" alt="icon" />
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">
              <a
                href={project}
                className="button btn project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-briefcase"></i>Upwork
              </a>
              <a
                href={github}
                className="button btn github-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>Github
              </a>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
