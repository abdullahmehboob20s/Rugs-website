import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "assets/images/logo.png";
import Discord from "assets/images/Discord.jpeg";
import twitterLogo from "assets/images/Twitter-Logo.jpeg";
import { Link as ScrollLink } from "react-scroll";
import Fade from "react-reveal/Fade";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });

    return () => {
      document.removeEventListener("scroll", null);
    };
  });

  return (
    <div className={`navbar-wrapper ${isScrolled ? "scrolled" : ""} `}>
      <div className="container-wrapper">
        <div className="navbar">
          <Fade top distance="50px">
            <a href="/">
              <img className="navbar-logo" src={logo} alt="" />
            </a>
          </Fade>

          <Fade top distance="50px" cascade>
            <div className="navbar-links">
              <ScrollLink
                smooth={true}
                offset={-250}
                duration={400}
                to="about"
                className="black weight-6 pointer"
              >
                About
              </ScrollLink>
              <ScrollLink
                smooth={true}
                duration={500}
                to="team"
                className="black weight-6 pointer"
              >
                Team
              </ScrollLink>
              <div className="nav-social-links">
                <a href="#" className="social-icon-link">
                  <img src={Discord} alt="" />
                </a>

                <a href="#" className="social-icon-link">
                  <img src={twitterLogo} alt="" />
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
