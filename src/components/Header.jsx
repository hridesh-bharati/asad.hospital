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
      <nav className="navbar navbar-expand-lg sticky-top py-0 my-0">
        <div className="container">
          {/* LOGO + TEXT */}
          <Link
            className="navbar-brand d-flex align-items-center gap-3 m-0"
            to="/"
          >
            <img
              src="logo.jpg"
              width={70}
              height={70}
              className="img-fluid object-fit-contain"
              alt="Asad Hospital Logo"
            />

            <div className="d-flex flex-column lh-sm">
              <h3 className="m-0 fw-bolder navbar-brand">
               <b> ASAD HOSPITAL</b>
              </h3>

              <span
                className="text-success small fw-semibold"
                style={{ fontSize: "11px" }}
              >
                24x7 Multispeciality & Emergency Care
              </span>
            </div>
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
              <li className="nav-item">
                <NavLink className="nav-link" to="/faq-asad-hospital">
                  FAQ
                </NavLink>
              </li>

              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <Link
                  to="/hospital-appointment"
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