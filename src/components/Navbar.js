import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [displayHWH, setDisplayHWH] = useState(true);

  const [displayContact, setDisplayContact] = useState(true);
  function onHover1() {
    setDisplayHWH(true);

    setDisplayContact(false);
  }

  function onHover3() {
    setDisplayHWH(false);
    setDisplayContact(true);
  }
  function onHoverExit() {
    setDisplayHWH(true);
    setDisplayContact(true);
  }

  function onBurgerClick() {
    setBurgerIsOpen(!burgerIsOpen);
    // Links slide in
    const navLinks = document.querySelectorAll(".nav-links li");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 4 + 0.5
        }s`;
      }
    });
  }
  function closeNav() {
    setBurgerIsOpen(false);
    const navLinks = document.querySelectorAll(".nav-links li");
    navLinks.forEach((link, index) => {
      link.style.animation = "";
    });
  }
  return (
    <nav className={`${burgerIsOpen ? "overflow-v" : "overflow-h"}`}>
      <div>
        <Link onClick={closeNav} to="/">
          <img className="image" src="/images/LuciaTardioli.png" alt="" />
        </Link>
      </div>
      <div className="group-right-nav">
        <ul className={`nav-links${burgerIsOpen ? " nav-active" : ""}`}>
          <li>
            <Link
              onClick={closeNav}
              onMouseEnter={onHover1}
              onMouseLeave={onHoverExit}
              className={`nav-link${!displayHWH ? " lower-opacity" : ""}`}
              to="/services"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              onClick={closeNav}
              onMouseEnter={onHover3}
              onMouseLeave={onHoverExit}
              className={`nav-link${!displayContact ? " lower-opacity" : ""}`}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        <a href="tel:6138585035">
          <button className="call-us-button">Call Us</button>
        </a>
      </div>

      <div
        onClick={onBurgerClick}
        className={`burger${burgerIsOpen ? " toggle" : ""}`}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
