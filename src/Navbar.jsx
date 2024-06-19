import React from "react";
import "./styles/navbar.css";
import Logo from "./assets/UEFA_Euro_2024_logo.svg.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="UEFA Euro 2024 Logo" />
      </div>
      <div className="navbar-hamburger">
        <div className="hamburger-icon">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
