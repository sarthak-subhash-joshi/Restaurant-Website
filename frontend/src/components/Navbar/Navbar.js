import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{ backgroundColor: "white", fontFamily: "Poppins" }}
      >
        <NavLink to="/" className="" aria-current="page">
          <h3 className="brand-name" styles={{ fontFamily: "Poppins" }}>
            Restaurant
          </h3>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/userMenu"
                className=""
                styles={{ fontFamily: "Poppins" }}
              >
                <span style={{ marginRight: "15px" }}>Menu</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/gallery"
                className=""
                styles={{ fontFamily: "Poppins" }}
              >
                <span style={{ marginRight: "15px" }}>Gallery</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/cart"
                className=""
                styles={{ fontFamily: "Poppins" }}
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
