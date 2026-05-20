// ServicesPage.jsx - Clean + DRY + Premium UI (No CSS / Minimal Markup)

import React from "react";

const servicesData = [
  {
    title: "General Surgery",
    description: "Advanced surgical care using modern medical procedures with safe recovery and expert surgeons.",
    icon: "bi-scissors",
    features: ["Safe Procedures", "Expert Surgeons"],
  },
  {
    title: "Laparoscopic Surgery",
    description: "Minimally invasive surgery with reduced pain, faster healing, and advanced techniques.",
    icon: "bi-heart-pulse",
    features: ["Fast Recovery", "Less Pain"],
  },
  {
    title: "Orthopedic Care",
    description: "Complete bone and joint treatment including fractures, arthritis, and sports injuries.",
    icon: "bi-bandaid",
    features: ["Joint Mobility", "Fracture Care"],
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency medical services with ICU support and ambulance services.",
    icon: "bi-hospital",
    features: ["Rapid Action", "24/7 Available"],
  },
  {
    title: "Women's Healthcare",
    description: "Advanced maternity care, gynecology consultation, and pregnancy treatments.",
    icon: "bi-gender-female",
    features: ["Maternity Care", "Women's Health"],
  },
  {
    title: "ICU & Critical Care",
    description: "Modern ICU with ventilator support and continuous patient monitoring.",
    icon: "bi-heart-pulse-fill",
    features: ["Ventilator Support", "24/7 Monitoring"],
  },
  {
    title: "Urinary Treatment",
    description: "Kidney stone care, urinary infections treatment, and prostate consultation.",
    icon: "bi-droplet-half",
    features: ["Accurate Diagnosis", "Stone Care"],
  },
  {
    title: "Ambulance Services",
    description: "Fast emergency transportation with life-support ambulances and paramedics.",
    icon: "bi-truck",
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
  <div className="text-center mb-5">
    <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 fw-semibold">ASAD HOSPITAL</span>
    <h2 className="fw-bold display-6 mt-3 mb-3">{title}</h2>
    <p className="text-muted mx-auto style={{ maxWidth: '700px' }}">{subtitle}</p>
  </div>
);

const ServiceCard = ({ title, description, icon, features }) => (
  <div className="col-md-6 col-xl-3">
    <div className="card h-100 border-0 shadow-sm p-4 rounded-4 position-relative">
      <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-4 mb-4" style={{ width: "65px", height: "65px" }}>
        <i className={`bi ${icon} fs-2`}></i>
      </div>

      <h5 className="fw-bold mb-3">{title}</h5>
      <p className="text-muted small lh-base mb-4">{description}</p>

      <div className="mt-auto">
        {features.map((item, index) => (
          <div key={index} className="d-flex align-items-center gap-2 bg-light p-2 rounded-3 mb-2 small fw-semibold">
            <i className="bi bi-check-circle-fill text-success"></i>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function ServicesPage() {
  return (
    <main className="bg-light min-vh-100">
      {/* HERO */}
      <section className="bg-dark text-white py-5 text-center position-relative" style={{ background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), linear-gradient(135deg, #0d6efd, #0dcaf0)" }}>
        <div className="container py-4">
          <span className="badge bg-white bg-opacity-25 border border-white border-opacity-25 rounded-pill px-3 py-2 fw-semibold">
            24×7 Emergency Healthcare
          </span>

          <h1 className="display-4 fw-bold text-white mt-4 mb-3">
            Comprehensive Medical Services
          </h1>

          <p className="mx-auto text-white-50 fs-6" style={{ maxWidth: "700px" }}>
            We provide world-class healthcare facilities with expert doctors, advanced technology, and compassionate patient care.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
            <a href="tel:+919587298975" className="btn btn-danger btn-lg rounded-pill px-4 fw-semibold shadow-sm">
              <i className="bi bi-telephone-fill me-2"></i>
              Emergency Call
            </a>

            <button className="btn btn-light text-primary btn-lg rounded-pill px-4 fw-semibold shadow-sm">
              <i className="bi bi-calendar-check-fill me-2"></i>
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-5">
        <div className="container">
          <SectionHeader
            title="Our Healthcare Services"
            subtitle="Professional and specialized healthcare services designed for your complete well-being."
          />

          <div className="row g-4">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <img
                src="https://placehold.co/700x500/0d6efd/ffffff?text=ASAD+HOSPITAL"
                alt="Hospital Facilities"
                className="img-fluid rounded-4 shadow"
              />
            </div>

            <div className="col-lg-6">
              <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 fw-semibold">
                Why Choose Us
              </span>

              <h2 className="fw-bold mt-3 mb-4">
                Trusted Hospital With Modern Facilities
              </h2>

              <div className="row g-3">
                {whyChooseUs.map((item, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="p-3 bg-light rounded-3 fw-semibold d-flex align-items-center gap-2 shadow-sm">
                      <i className="bi bi-check-circle-fill text-success fs-5"></i>
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