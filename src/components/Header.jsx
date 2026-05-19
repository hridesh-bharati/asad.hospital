import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      {/* TOP ACTIONS NAVIGATION BAR */}
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 d-none d-lg-flex">
              <i className="fas fa-phone-alt"></i> Emergency Line:
              <Link to="tel:+919587298975">&nbsp;+91 9587298975</Link>
              &nbsp;|&nbsp;
              <Link to="tel:+917976573436">+91 7976573436</Link>
              &nbsp;&nbsp;
              <i className="fas fa-map-marker-alt"></i> Near Bhagat Singh Circle, Alwar, Rajasthan
            </div>
            <div className="col-lg-5 col-md-12 text-md-end">
              <i className="fas fa-clock"></i> Open 24 Hours | Emergency Coverage
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h3>ASAD HOSPITAL</h3>
            <span>24x7 Multispeciality & Emergency Care</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/doctors">
                  Our Doctors
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">
                  Gallery
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>

              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <Link
                  to="/appointment"
                  className="btn btn-secondary-custom btn-sm py-2 px-3 text-white"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;