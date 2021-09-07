import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer-ctn">
        <div className="spacing">
          <h3 className="footer-txt">We're here to help.</h3>
          <Link className="contact-us-btn" to="/contact">
            Contact Us
          </Link>
        </div>
        <div className="spacing">
          <div className="footer-links">
            <a className="links-space" href="tel:6138302283">
              (613-204-2283)
            </a>{" "}
            <span className="seperator">|</span>
            <a href="mailto:jdt@live.ca" className="links-space">
              jdt@live.ca
            </a>
          </div>
        </div>
        <div className="border-div"></div>
      </div>
    </div>
  );
}

export default Footer;
