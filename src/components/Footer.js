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
            <a className="links-space" href="tel:6138585035">
              (613) 858-5035
            </a>{" "}
            <span className="seperator">|</span>
            <a href="mailto:lutardioli@yahoo.ca" className="links-space">
              lutardioli@yahoo.ca
            </a>
          </div>
        </div>
        <div className="border-div"></div>
      </div>
    </div>
  );
}

export default Footer;
