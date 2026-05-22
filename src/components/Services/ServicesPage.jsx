// ServicesPage.jsx - Clean + DRY + Premium Bootstrap UI + AOS Added
import { Link } from "react-router-dom";
import "../Themes/Theme.css"
import React, { useEffect } from "react";
// AOS Imports
import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = [
  {
    title: "General Surgery",
    description: "Advanced surgical care using modern medical procedures with safe recovery and expert surgeons.",
    icon: "bi-scissors",
    color: "danger",
    features: ["Safe Procedures", "Expert Surgeons"],
  },
  {
    title: "Laparoscopic Surgery",
    description: "Minimally invasive surgery with reduced pain, faster healing, and advanced techniques.",
    icon: "bi-heart-pulse",
    color: "primary",
    features: ["Fast Recovery", "Less Pain"],
  },
  {
    title: "Orthopedic Care",
    description: "Complete bone and joint treatment including fractures, arthritis, and sports injuries.",
    icon: "bi-bandaid",
    color: "warning",
    features: ["Joint Mobility", "Fracture Care"],
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency medical services with ICU support and ambulance services.",
    icon: "bi-hospital",
    color: "danger",
    features: ["Rapid Action", "24/7 Available"],
  },
  {
    title: "Women's Healthcare",
    description: "Advanced maternity care, gynecology consultation, and pregnancy treatments.",
    icon: "bi-gender-female",
    color: "success",
    features: ["Maternity Care", "Women's Health"],
  },
  {
    title: "ICU & Critical Care",
    description: "Modern ICU with ventilator support and continuous patient monitoring.",
    icon: "bi-heart-pulse-fill",
    color: "dark",
    features: ["Ventilator Support", "24/7 Monitoring"],
  },
  {
    title: "Urinary Treatment",
    description: "Kidney stone care, urinary infections treatment, and prostate consultation.",
    icon: "bi-droplet-half",
    color: "info",
    features: ["Accurate Diagnosis", "Stone Care"],
  },
  {
    title: "Ambulance Services",
    description: "Fast emergency transportation with life-support ambulances and paramedics.",
    icon: "bi-truck",
    color: "success",
    features: ["Fast Transit", "Medical Team"],
  },
];

const whyChooseUs = [
  "24×7 Emergency Services",
  "Experienced Specialist Doctors",
  "Modern ICU & OT Facilities",
  "Affordable Treatment",
  "Cashless Insurance Facility",
  "Patient Friendly Care",
];

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-5 position-relative" style={{ zIndex: 2 }} data-aos="fade-up">
    <h2 className="fw-bold mt-3 mb-3">
      {title}
    </h2>
    <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
      {subtitle}
    </p>
  </div>
);

const ServiceCard = ({
  title,
  description,
  icon,
  color,
  features,
  index, // Staggered delay के लिए index पास किया है
}) => (
  <div 
    className="col-md-6 col-xl-3" 
    data-aos="fade-up" 
    data-aos-delay={index * 100} // एक-एक करके कार्ड लोड होंगे
  >
    <div
      className="card border-0 shadow-sm rounded-4 h-100 p-4"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.7)'
      }}
    >
      {/* ICON + TITLE */}
      <div className="d-flex align-items-center gap-3 mb-3">
        <div
          className={`bg-${color} text-white rounded-4 d-flex align-items-center justify-content-center flex-shrink-0`}
          style={{
            width: "60px",
            height: "60px",
          }}
        >
          <i className={`bi ${icon} fs-3`}></i>
        </div>

        <h5 className="fw-bold mb-0">
          {title}
        </h5>
      </div>

      {/* DESCRIPTION */}
      <p className="text-muted small lh-base mb-4">
        {description}
      </p>

      {/* FEATURES */}
      <div className="mt-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="d-flex align-items-center gap-2 bg-light rounded-3 p-2 mb-2 small fw-semibold"
          >
            <i className="bi bi-check-circle-fill text-success"></i>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function ServicesPage() {
  // AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 1000, // एनिमेशन 1 सेकंड तक चलेगा
      once: true,     // नीचे स्क्रॉल करने पर एनिमेशन सिर्फ एक बार होगा
      easing: "ease-in-out",
    });
  }, []);

  return (
    <main className="bg-primary-subtle min-vh-100 position-relative overflow-hidden">

      {/* --- बैकग्राउंड के 4 शानदार ग्लोइंग सर्कल्स --- */}
      <div className="glow-wrapper glow-teal-top-left"></div>
      <div className="glow-wrapper glow-blue-top-right"></div>
      <div className="glow-wrapper glow-purple-center-left"></div>
      <div className="glow-wrapper glow-cyan-bottom-right"></div>

      {/* HERO */}
      <section
        className="text-white py-5 position-relative"
        style={{
          background:
            "linear-gradient(rgba(11, 37, 69, 0.75), rgba(11, 37, 69, 0.75)), linear-gradient(135deg, #0d6efd, #0dcaf0)",
          zIndex: 2
        }}
      >
        <div className="container text-center py-4" data-aos="zoom-in">
          <span className="badge bg-light bg-opacity-25 border border-light border-opacity-25 rounded-pill px-3 py-2 fw-semibold">
            24×7 Emergency Healthcare
          </span>

          <h1 className="display-4 fw-bold text-white mt-4 mb-3">
            Comprehensive Medical Services
          </h1>

          <p
            className="text-white-50 mx-auto"
            style={{ maxWidth: "700px" }}
          >
            We provide world-class healthcare facilities with expert doctors,
            advanced technology, and compassionate patient care.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <a
              href="tel:+919587298975"
              className="btn btn-danger btn-lg rounded-pill px-4 fw-semibold shadow-sm"
            >
              <i className="bi bi-telephone-fill me-2"></i>
              Emergency Call
            </a>

            <Link to={"/hospital-appointment"}>
              <button className="btn btn-light text-primary btn-lg rounded-pill px-4 fw-semibold shadow-sm">
                <i className="bi bi-calendar-check-fill me-2"></i>
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-5 position-relative" style={{ zIndex: 2 }}>
        <div className="container">
          <SectionHeader
            title="Our Healthcare Services"
            subtitle="Professional and specialized healthcare services designed for your complete well-being."
          />

          <div className="row g-4">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} index={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-5 bg-white position-relative" style={{ zIndex: 2 }}>
        <div className="container">
          <div className="row align-items-center g-5">
            {/* IMAGE */}
            <div className="col-lg-6" data-aos="fade-right">
              <img
                src="images/rooms/room3.jpeg"
                alt="Hospital Facilities"
                className="img-fluid rounded-4 shadow"
              />
            </div>

            {/* CONTENT */}
            <div className="col-lg-6" data-aos="fade-left">
              <span className="badge bg-success-subtle text-success rounded-pill px-3 py-2 fw-semibold">
                Why Choose Us
              </span>

              <h2 className="fw-bold mt-3 mb-4" style={{ color: '#0b2545' }}>
                Trusted Hospital With Modern Facilities
              </h2>

              <div className="row g-3">
                {whyChooseUs.map((item, index) => (
                  <div 
                    className="col-md-6" 
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 50}
                  >
                    <div className="bg-light rounded-4 p-3 shadow-sm d-flex align-items-center gap-2 fw-semibold">
                      <i className="bi bi-check-circle-fill text-success"></i>
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}