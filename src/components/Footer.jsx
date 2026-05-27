import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer" style={{ background: '#010122' }}>
        <div className="container-fluid">
          <div className="row g-4">
            
            {/* हॉस्पिटल परिचय */}
            <div className="col-lg-4 col-md-12 col-12">
              <div className="d-flex align-items-center mb-3">
                <div className="footer-logo me-2">
                  <i className="fas fa-hospital-user fs-2 text-gradient"></i>
                </div>
                <h4 className="fw-bold text-white mb-0">Asad<span className="text-gradient">Hospital</span></h4>
              </div>
              <p style={{ fontSize: '13px' }}>
                24x7 Trusted Maternity, Gynecology  and Surgical Cate
              </p>
              <p className="mt-3" style={{ fontSize: '14px' }}>
                <i className="fas fa-phone-alt text-danger me-1"></i>
                +91 9587298975 | +91 7976573436
              </p>
            </div>
            <div className="col-lg-3 col-md-4 col-12">
              <h5 className="fw-semibold">Medical Specialties</h5>
              <div className="row footer-links p-0 m-0" style={{ fontSize: '14px' }}>
                <div className="col-6 p-0 mb-2"><a href="#services">Maternity & Gynecology</a></div>
                <div className="col-6 p-0 mb-2"><a href="#services">Orthopedics & Fractures</a></div>
                <div className="col-6 p-0 mb-2"><a href="#services">General Surgery</a></div>
                <div className="col-6 p-0 mb-2"><a href="#services">Laparoscopic Surgery</a></div>
              </div>
            </div>

            {/* गवर्नमेंट स्कीम्स - हेडिंग col-12, ऑप्शंस col-6 + स्मॉल फॉन्ट */}
            <div className="col-lg-3 col-md-4 col-12">
              <h5 className="fw-semibold">Government Schemes</h5>
              <div className="row footer-links p-0 m-0" style={{ fontSize: '14px' }}>
                <div className="col-6 p-0 mb-2"><a href="#schemes">Rajasthan MAA Yojna</a></div>
                <div className="col-6 p-0 mb-2"><a href="#schemes">Ayushman Bharat</a></div>
                <div className="col-6 p-0 mb-2"><a href="#schemes">All TPA Cashless</a></div>
              </div>
            </div>

            {/* क्विक लिंक्स - हेडिंग col-12, ऑप्शंस col-6 + स्मॉल फॉन्ट */}
            <div className="col-lg-2 col-md-4 col-12">
              <h5 className="fw-semibold">Quick Links</h5>
              <div className="row footer-links p-0 m-0" style={{ fontSize: '14px' }}>
                <div className="col-6 p-0 mb-2"><a href="#about">About Us</a></div>
                <div className="col-6 p-0 mb-2"><a href="#doctors">Doctors</a></div>
                <div className="col-6 p-0 mb-2"><a href="#gallery">Gallery</a></div>
                <div className="col-6 p-0 mb-2"><a href="#contact">Contact</a></div>
              </div>
            </div>

          </div>

          {/* नीचे का कॉपीराइट और डेवलपर नाम (Side by Side + स्मॉल फॉन्ट) */}
          <div className="d-flex justify-content-center text-center align-items-center pt-4 mt-2 border-top
           border-secondary text-center w-100 flex-wrap" style={{ fontSize: '13px' }}>
            <p className="mb-0">
              © 2026 Asad Hospital. All Rights Reserved
            </p>
            
            <p className="text-light text-center w-100 mb-0">
            <a href="https://integrateddigitalmedia.com">
              DESIGNED & DEVELOPED BY IDBS
            </a>
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