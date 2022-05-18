import React from "react";

import { Link } from "react-router-dom";
import "./Navbar.scss";
function Navbar() {
  return (
    <>
      <div className="Navbar">
        
        <div className="Navbar_home">
          <Link to="/">HOME</Link>
        </div>

        <div className="navbar__menu">
          {" "}
          <Link to="/menu">MENU</Link>
        </div>

        <div className="Navbar__about">
          {" "}
          <Link to="/about-us">ABOUT US</Link>
        </div>

        <div className="contact-">
          <Link to="/contact-us">CONTACT</Link>
          </div>
        
      </div>
    </>
  );
}

export default Navbar;
