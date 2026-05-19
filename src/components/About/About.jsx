// App.jsx - Complete DRY Single Page Website for Asad Hospital (100% Native Bootstrap)
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function AsadHospitalWebsite() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // DRY Configuration: Master Data Object for Scheme Badges
  const schemes = [
    { text: "Rajasthan MAA Yojna Available", icon: "fa-check text-success" },
    { text: "Haryana Ayushman Bharat Available", icon: "fa-check text-success" },
    { text: "All TPA Cashless Facility", icon: "fa-check text-info" }
  ];

  // DRY Configuration: Core Stats Dataset
  const stats = [
    { title: "25,000+", subtitle: "Happy Patients Treated", icon: "fa-smile text-warning" },
    { title: "15+", subtitle: "Specialist Doctors Team", icon: "fa-user-md text-info" },
    { title: "50+", subtitle: "Beds Capacity Ward", icon: "fa-procedures text-success" },
    { title: "24/7", subtitle: "Trauma Emergency Cover", icon: "fa-heartbeat text-danger" }
  ];

  // DRY Configuration: Hospital Specialities Matrix
  const services = [
    { title: 'General Surgery', desc: 'Advanced traditional and modern medical surgical care.', icon: 'fa-scalpel', color: 'bg-teal text-white' },
    { title: 'Laparoscopic Surgery', desc: 'Minimally invasive keyhole surgeries for faster recovery.', icon: 'fa-compress-arrows-alt', color: 'bg-info text-white' },
    { title: 'Orthopedic Care', desc: 'Complete solution for complex bone fractures and joint pains.', icon: 'fa-bone', color: 'bg-teal text-white' },
    { title: 'Obstetrics & Gynecology', desc: 'Premium women care setup and standard normal delivery.', icon: 'fa-baby', color: 'bg-danger text-white' },
    { title: 'Emergency & Trauma', desc: 'Critical care units and expert doctors available 24 hours.', icon: 'fa-ambulance', color: 'bg-danger text-white' },
    { title: 'Urinary Treatment', desc: 'Diagnostics and consultations for complex kidney stones.', icon: 'fa-prescription-bottle-medical', color: 'bg-warning text-dark' },
    { title: 'ICU & Critical Care', desc: 'Equipped with specialized continuous digital monitoring.', icon: 'fa-heartbeat', color: 'bg-secondary text-white' },
    { title: 'Ambulance Services', desc: 'Immediate dispatch and oxygen emergency transport support.', icon: 'fa-truck-medical', color: 'bg-info text-white' }
  ];

  // DRY Configuration: Specialist Medical Personnel Roster
  const doctors = [
    { name: 'Dr. Sahun Khan', deg: 'MBBS, MS', exp: 'General & Laparoscopic Surgeon', tags: ['Laparoscopic Surgery', 'Gallbladder & Appendix', 'Hernia Procedures', 'Trauma Management'], border: 'border-success' },
    { name: 'Dr. Parveen', deg: 'MBBS, MS', exp: 'Obstetrician & Gynecologist', tags: ['Normal Delivery Facility', 'Cesarean Section (C-Sec)', 'High-Risk Pregnancy Care', 'Women Health Problems'], border: 'border-danger' },
    { name: 'Dr. Kanakaroda', deg: 'MBBS, MS Orthopedics', exp: 'Orthopedic Specialist', tags: ['Severe Bone Fractures', 'Joint Pain Treatment', 'Trauma & Injury Care', 'Accident Injuries'], border: 'border-info' },
    { name: 'Dr. C. S. Sharma', deg: 'Specialist Consultant', exp: 'Urology & Kidney Specialist', tags: ['Urinary Problem Solutions', 'Kidney Stone Consultation', 'Urinary Infection Treatment', 'Male Urinary Disorders'], border: 'border-secondary' }
  ];

  // DRY Configuration: Verified Clinical Feedback Items
  const testimonials = [
    { text: '"Very supportive doctors and staff. Emergency treatment was quick and effective. Alwar me best operational surgery experience raha."', author: 'Patient Reviewer', color: 'border-success' },
    { text: '"Excellent maternity care and clean hospital environment. Dr. Parveen handled our delivery case with total perfection and deep personal care."', author: 'Happy Family Member', color: 'border-danger' },
    { text: '"Best surgical care with affordable treatment under Rajasthan MAA scheme. Koi hidden extra cost fees nahi li gayi. Transparent hospitality."', author: 'Verified Inpatient', color: 'border-info' }
  ];

  return (
    <div className="bg-light text-dark text-opacity-75" style={{ scrollBehavior: 'smooth' }}>

      {/* ==========================================
    1. HERO SECTION (Spacious, Crisp Clinic-White Design)
========================================== */}
      <section id="home" className="py-5 d-flex align-items-center bg-white border-bottom min-vh-100">
        <div className="container py-5">
          <div className="row align-items-center g-5">

            {/* Left Column: Contextual Typography */}
            <div className="col-lg-6" data-aos="fade-right">
              <span className="badge bg-danger bg-gradient px-4 py-2 rounded-pill mb-3 shadow-sm text-uppercase fw-bold">
                <i className="fas fa-star-of-life me-2"></i> Emergency Desk Active 24/7
              </span>

              <h1 className="display-4 fw-bold text-dark mb-3 tracking-tight">
                ASAD HOSPITAL <br />
                <span className="fs-2 text-success d-block mt-1 fw-normal">Trusted Multispeciality Care in Alwar</span>
              </h1>

              <p className="lead fs-5 text-muted mb-4 pb-2">
                Providing quality, affordable, and highly accessible healthcare solutions under the leadership of expert medical practitioners.
              </p>

              {/* Iterated Scheme Badges via DRY Data Matrix */}
              <div className="d-flex flex-wrap gap-2 mb-4">
                {schemes.map((sch, i) => (
                  <span key={i} className="badge bg-light text-dark border-start border-success border-4 p-2 px-3 rounded shadow-sm fw-bold">
                    <i className={`fas ${sch.icon} me-1`}></i> {sch.text}
                  </span>
                ))}
              </div>

              {/* Action Trigger Interface Controls */}
              <div className="d-flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-warning bg-gradient text-dark btn-lg px-4 py-3 fw-bold rounded-pill shadow-sm">
                  <i className="fas fa-calendar-check me-2"></i> Book Appointment
                </a>
                <a href="tel:+919587298975" className="btn btn-danger bg-gradient text-white btn-lg px-4 py-3 fw-bold rounded-pill shadow-sm">
                  <i className="fas fa-phone-alt me-2"></i> Call Emergency
                </a>
                <a href="https://wa.me/919587298975" className="btn btn-success bg-gradient text-white btn-lg px-4 py-3 fw-bold rounded-pill shadow-sm">
                  <i className="fab fa-whatsapp me-2"></i> WhatsApp Now
                </a>
              </div>
            </div>

            {/* Right Column: Clean Medical Graphic Banner with Image */}
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <div className="p-3 bg-light border rounded-4 shadow-sm position-relative">
                <div className="w-100 overflow-hidden rounded-3 position-relative" style={{ minHeight: '360px', maxHeight: '480px' }}>
                  <img
                    src="/images/abouts/about-hero.jpg"
                    alt="Asad Hospital Clinical Excellence"
                    className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
                    style={{ objectPosition: 'center' }}
                  />
                  {/* Absolute Anchored Trust Indicators Over Image */}
                  <span className="position-absolute top-0 end-0 m-3 badge bg-white text-success shadow-sm fw-bold border p-2 z-1">
                    <i className="fas fa-award text-warning me-1"></i> Since 2010
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          2. ABOUT US SECTION
      ========================================== */}
      <section id="about" className="py-5 bg-white">
        <div className="container py-4">
          <div className="row g-5 align-items-center">

            <div className="col-lg-6" data-aos="fade-up">
              <span className="text-uppercase fw-bold text-success tracking-wider small d-block mb-1">Welcome to Asad Hospital</span>
              <h2 className="display-6 fw-bold text-dark mb-3">Serving Alwar Since 2010 with Absolute Professional Care</h2>
              <p className="text-muted mb-4 lh-lg">
                Asad Hospital is a highly functional treatment unit located <strong>near Bhagat Singh Circle, Alwar, Rajasthan</strong>.
                हमारा उद्देश्य समाज के हर वर्ग को कम से कम खर्च में बेहतरीन और आधुनिक चिकित्सा सेवाएं प्रदान करना है। We prioritize maximum standard diagnostic care with 24-hour surgical panel deployment.
              </p>

              <div className="row g-3 text-dark">
                {['Emergency Units 24/7', 'Advanced Laparoscopic Setup', 'Orthopedic Inpatient Care', 'Obstetrics & Gynecology Wing', 'Urinary Problem Treatment', 'Complex Trauma Architecture'].map((item, idx) => (
                  <div className="col-sm-6" key={idx}>
                    <div className="p-2 bg-light rounded border-start border-success border-3 fw-medium small">
                      <i className="fas fa-dot-circle text-success me-2"></i> {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Metrics Layout (DRY Iterated Block) */}
            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="row g-3 text-center">
                {stats.map((st, idx) => (
                  <div className="col-6" key={idx}>
                    <div className="p-4 bg-light rounded-3 shadow-sm border">
                      <i className={`fas ${st.icon} fs-1 mb-2`}></i>
                      <span className="d-block h2 fw-bold text-dark mb-1">{st.title}</span>
                      <small className="text-muted d-block small">{st.subtitle}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          3. SERVICES SECTION
      ========================================== */}
      <section id="services" className="py-5 bg-light border-top border-bottom">
        <div className="container py-4">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }} data-aos="fade-down">
            <span className="badge bg-success bg-gradient px-3 py-2 rounded-pill mb-2">MEDICAL FACILITIES</span>
            <h2 className="fw-bold display-6 text-dark">Our Medical Services & Specialties</h2>
            <p className="text-muted small">Comprehensive highly specialized tactical treatment blueprints under one centralized interface in Alwar.</p>
          </div>

          <div className="row g-4">
            {services.map((srv, idx) => (
              <div className="col-lg-3 col-md-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 50}>
                <div className="p-4 bg-white rounded-3 shadow-sm border h-100 text-center">
                  <div className={`${srv.color} rounded-circle d-inline-flex p-3 mb-3 shadow-sm`}><i className={`fas ${srv.icon} fs-4`}></i></div>
                  <h5 className="fw-bold text-dark mb-2 small text-uppercase tracking-wide">{srv.title}</h5>
                  <p className="text-muted small mb-0">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ==========================================
            4. DOCTORS PANEL SECTION
        ========================================== */}
      <section id="doctors" className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }} data-aos="fade-up">
            <span className="badge bg-dark px-3 py-2 rounded-pill mb-2">EXPERTS PANEL</span>
            <h2 className="fw-bold display-6 text-dark">Meet Our Specialist Doctors</h2>
            <p className="text-muted small">Highly certified surgical directors and clinical physicians available on immediate call rotation setups.</p>
          </div>

          <div className="row g-4 justify-content-center">
            {doctors.map((doc, idx) => (
              <div className="col-xl-3 col-md-6" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="card h-100 border rounded-4 p-4 bg-white text-center shadow-sm d-flex flex-column justify-content-between">
                  <div>
                    <div className="bg-light text-success border rounded-circle d-inline-flex p-4 mb-3 mx-auto shadow-sm align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                      <i className="fas fa-user-md fs-2"></i>
                    </div>
                    <h5 className="fw-bold text-dark mb-1">{doc.name}</h5>
                    <span className="badge bg-light text-secondary border fw-bold mb-3 d-inline-block mx-auto small">{doc.deg}</span>
                    <p className="text-success small fw-bold mb-3"><i className="fas fa-award me-1"></i> {doc.exp}</p>

                    <div className="text-danger fw-bold small mb-3"><i className="fas fa-clock me-1"></i> Emergency Cover Active</div>
                  </div>

                  <div className="mt-auto">
                    <Link to="/doctors" className="btn btn-outline-success w-100 rounded-pill btn-sm fw-bold py-2">
                      View Details <i className="fas fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          5. TESTIMONIAL FEEDBACK BLOCK
      ========================================== */}
      <section className="py-5 bg-light border-top border-bottom">
        <div className="container py-4">
          <h2 className="fw-bold text-center text-dark mb-5" data-aos="fade-up">What Our Patients Say (सच्चे अनुभव)</h2>
          <div className="row g-4">
            {testimonials.map((testi, idx) => (
              <div className="col-md-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className={`p-4 bg-white rounded-3 shadow-sm border-start border-4 ${testi.color} h-100 d-flex flex-column justify-content-between`}>
                  <p className="text-muted fst-italic small mb-4">{testi.text}</p>
                  <div className="fw-bold small text-dark">— {testi.author} <div className="text-warning mt-1 small">★★★★★</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          6. CONTACT AND GEOLOCATION COMPONENT
      ========================================== */}
      <section id="contact" className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }} data-aos="fade-up">
            <h2 className="fw-bold display-6 text-dark">Contact Asad Hospital</h2>
            <p className="text-muted small">Connect with administrative reception arrays for instant trauma triage parameters or room allocation requests.</p>
          </div>

          <div className="row g-4 align-items-stretch">

            {/* Direct Channel Coordinates */}
            <div className="col-lg-4" data-aos="fade-right">
              <div className="p-4 bg-light text-dark rounded-4 h-100 border d-flex flex-column justify-content-between">
                <div>
                  <h4 className="fw-bold text-success mb-4">Hospital Desk</h4>

                  <div className="d-flex gap-3 mb-4 align-items-start">
                    <i className="fas fa-phone-alt fs-4 text-danger mt-1"></i>
                    <div>
                      <strong className="d-block small text-secondary">EMERGENCY OPERATIONS</strong>
                      <span className="fs-5 fw-bold d-block text-dark">+91 9587298975</span>
                      <span className="fs-5 fw-bold d-block text-dark">+91 7976573436</span>
                    </div>
                  </div>

                  <div className="d-flex gap-3 mb-4 align-items-start">
                    <i className="fas fa-map-marker-alt fs-4 text-info mt-1"></i>
                    <div>
                      <strong className="d-block small text-secondary">LOCATION ADDRESS</strong>
                      <span className="small text-muted">Near Bhagat Singh Circle, Alwar, Rajasthan - 301001</span>
                    </div>
                  </div>

                  <div className="d-flex gap-3 align-items-start">
                    <i className="fas fa-clock fs-4 text-success mt-1"></i>
                    <div>
                      <strong className="d-block small text-secondary">HOSPITAL RUNTIMES</strong>
                      <span className="small text-muted">Open 24 Hours | 365 Days Available</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top">
                  <a href="https://wa.me/919587298975" className="btn btn-success w-100 fw-bold py-2 rounded-pill shadow-sm">
                    <i className="fab fa-whatsapp me-2"></i>WhatsApp Quick Desk
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Interactive Map System */}
            <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="w-100 h-100 rounded-4 border overflow-hidden" style={{ minHeight: '320px' }}>
                <iframe
                  title="Asad Hospital Alwar Map Location"
                  src="https://maps.google.com/maps?q=Near+Bhagat+Singh+Circle,+Alwar,+Rajasthan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-100 h-100 border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Structured Appointment Ingestion Form */}
            <div className="col-lg-4" data-aos="fade-left" data-aos-delay="200">
              <div className="p-4 bg-white border rounded-4 shadow-sm h-100">
                <h4 className="fw-bold text-success mb-3">Quick Booking Form</h4>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="mb-3">
                    <input type="tel" className="form-control" placeholder="Phone Number" required />
                  </div>
                  <div className="mb-3">
                    <select className="form-select" required>
                      <option value="">Select Specialty Type</option>
                      <option>General Surgery</option>
                      <option>Laparoscopic Surgery</option>
                      <option>Orthopedics (Bone Specialist)</option>
                      <option>Maternity / Delivery Care</option>
                      <option>Urology / Urinary Problem</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" rows="3" placeholder="Brief Description of Problem"></textarea>
                  </div>
                  <button type="submit" className="btn btn-success bg-gradient text-white w-100 fw-bold py-2 rounded-pill shadow-sm">
                    <i className="fas fa-paper-plane me-1"></i> Send Booking Request
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Floating Tactical Access Controllers */}
      <a
        href="https://wa.me/919587298975"
        className="position-fixed bg-success text-white d-flex align-items-center justify-content-center rounded-circle shadow-lg text-decoration-none"
        style={{ bottom: '25px', right: '25px', width: '55px', height: '55px', zIndex: '9999' }}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp fs-2"></i>
      </a>

    </div>
  );
}