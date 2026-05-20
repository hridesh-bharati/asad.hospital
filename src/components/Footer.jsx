import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer" style={{ background: '#010122' }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-center mb-3">
                <div className="footer-logo me-2">
                  <i className="fas fa-hospital-user fs-2 text-gradient"></i>
                </div>
                <h4 className="fw-bold text-white mb-0">Asad<span className="text-gradient">Hospital</span></h4>
              </div>
              <p>
                24×7 Multispeciality & Emergency Hospital in Alwar.
              </p>

              <p className="mt-3">
                <i className="fas fa-phone-alt text-danger"></i>
                +91 9587298975 | +91 7976573436
              </p>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5>Medical Specialties</h5>

              <ul className="footer-links p-0">
                <li>
                  <a href="#services">General Surgery</a>
                </li>

                <li>
                  <a href="#services">Laparoscopic Surgery</a>
                </li>

                <li>
                  <a href="#services">Orthopedics & Fractures</a>
                </li>

                <li>
                  <a href="#services">Maternity & Gynecology</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5>Government Schemes</h5>

              <ul className="footer-links p-0">
                <li>
                  <a href="#schemes">Rajasthan MAA Yojna</a>
                </li>

                <li>
                  <a href="#schemes">Ayushman Bharat</a>
                </li>

                <li>
                  <a href="#schemes">All TPA Cashless</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6">
              <h5>Quick Links</h5>

              <ul className="footer-links p-0">
                <li>
                  <a href="#about">About Us</a>
                </li>

                <li>
                  <a href="#doctors">Doctors</a>
                </li>

                <li>
                  <a href="#gallery">Gallery</a>
                </li>

                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-4 mt-5 border-top border-secondary">
            <p className="mb-0">
              © 2026 Asad Hospital. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING BUTTONS */}
      <div className="floating-buttons">
        <a
          href="https://wa.me/919587298975"
          className="floating-btn floating-whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>

        <a
          href="tel:+919587298975"
          className="floating-btn floating-call"
        >
          <i className="fas fa-phone-alt"></i>
        </a>
      </div>

      <a href="#" className="backtop" id="backToTop">
        <i className="fas fa-arrow-up"></i>
      </a>

    </>
  );
};

export default Footer;