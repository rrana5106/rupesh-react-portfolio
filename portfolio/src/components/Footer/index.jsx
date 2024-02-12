import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="social-media-wrapper ">
      <footer className="text-center text-lg-startd-flex justify-content-evenly align-items-center pt-3">
        <div>
          <a
            href="https://github.com/rrana5106"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to GitHub"
            className="logo mx-2"
          >
            {/* <i className="fab fa-github fa-2x"></i> */}
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/rupesh-rana-magar-022a0a262/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to LinkedIn"
            className="logo mx-2"
          >
            {/* <i className="fab fa-linkedin fa-2x"></i> */}
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>

          <a
            href="mailto:example@gmail.com"
            aria-label="Send an Email"
            className="logo mx-2"
          >
            {/* <i className="fas fa-envelope fa-2x"></i> */}
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
          </a>
        </div>

        <div className="text-center text-white p-2 footer-text">
          <a className="text-white" href="https://github.com/rrana5106" style={{}}>
            © 2024 by Rupesh Rana Magar
          </a>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
