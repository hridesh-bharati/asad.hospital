import React from "react";
import FaqSection from "./FaqSection";
import { Link } from "react-router-dom";
// import HomeGallery from "./HomeGallery";

const doctorsData = [
  {
    name: "डॉ. साहुन खान",
    image: "images/team/team2.jpeg",
    specialty: "M.B.B.S, MS, FIAGES, FMAS",
    experience:
      "जनरल एवं लेप्रोस्कोपिक सर्जन पूर्व चिकित्सक SMS हॉस्पिटल, जयपुर सफदरजंग हॉस्पिटल, दिल्ली ",
    availability: "24 Hours Available",
  },
  {
    name: "डॉ. परवीन खान",
    image: "images/team/team1.jpeg",
    specialty: "M.B.B.S, MS, FMAS",
    experience:
      "स्त्री रोग विशेषज्ञ पूर्व चिकित्सक SMS हॉस्पिटल, जयपुर महात्मा गाँधी हॉस्पिटल, जयपुर",
    availability: "24 Hours Available",
  },
  {
    name: "डॉ. कनक अरोड़ा",
    image: "images/team/team3.png",  
    specialty: "M.B.B.S., D.N.B., (Orthopedics)",
    experience: "हड्डी रोग विशेषज्ञ",
    availability: "24 Hours Available",
  },
  {
    name: "डॉ. चन्द्रशेखर शर्मा",
    image: "images/team/team4.png",  
    specialty: "M.Ch. (Urology)",
    experience: "मूत्र रोग विशेषज्ञ",
    availability: "24 Hours Available",
  },
];

const services = [
  { icon: "fas fa-stethoscope", title: "General Surgery", desc: "Advanced abdominal, open and therapeutic visceral surgical interventions done via expert frameworks." },
  { icon: "fas fa-laptop-medical", title: "Laparoscopic Surgery", desc: "Minimally invasive keyhole surgical techniques helping patients experience minimal blood loss." },
  { icon: "fas fa-bone", title: "Orthopedic Care", desc: "Treatment of structural bone fractures, joint problems, dislocations, and accidental injuries." },
  { icon: "fas fa-baby-carriage", title: "Obstetrics & Gynecology", desc: "Comprehensive maternal healthcare ecosystem handling routine high-risk prenatal journeys." },
  { icon: "fas fa-notes-medical", title: "Emergency & Trauma", desc: "Immediate live saving care protocols and multi-trauma stabilization run 24 hours." },
  { icon: "fas fa-crutch", title: "Urinary Problem", desc: "Detailed therapeutic insights addressing urinary infections and renal stone structures." },
  { icon: "fas fa-heartbeat", title: "ICU & Critical Care", desc: "Continuous monitoring grid infrastructure setups ensuring error-free emergency support." },
  { icon: "fas fa-truck-medical", title: "Ambulance Services", desc: "Fast emergency transportation logistic support matrix mapped across nearby networks." }
];

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div>
                <div className="scheme-badges mb-2">
                  <span className="badge-scheme" data-aos="fade-right">
                    <i className="fas fa-hand-holding-heart text-success me-1"></i>
                    Rajasthan MAA Yojna
                  </span>

                  <span className="badge-scheme" data-aos="fade-right" data-aos-delay="300">
                    <i className="fas fa-shield-halved text-primary me-1"></i>
                    Haryana Ayushman Bharat
                  </span>

                  <span className="badge-scheme" data-aos="fade-right" data-aos-delay="500">
                    <i className="fas fa-credit-card text-info me-1"></i>
                    All TPA Cashless
                  </span>
                </div>

                <h1 className="mt-3" data-aos="fade-down" >
                  Complete Healthcare Solutions <span>Available 24×7</span>
                </h1>

                <p className="lead text-dark mt-3" data-aos="fade-up">
                  Your health is our ultimate priority. Providing premium
                  emergency care, trauma response, advanced laparoscopic
                  surgeries, comprehensive maternity services, and specialty
                  orthopedic/urology care.
                </p>

                <div className="mt-4 d-flex flex-wrap gap-2">
                  <Link
                    to="/hospital-appointment"
                    className="btn btn-primary-custom"
                    data-aos="fade-up"
                  >
                    <i className="bi bi-calendar2-check me-2"></i>
                    Book Appointment
                  </Link>

                  <Link
                    to="tel:+919587298975"
                    className="btn btn-emergency"
                    data-aos="fade-up"
                  >
                    <i className="bi bi-telephone-fill me-2"></i>
                    Call Emergency
                  </Link>

                  <Link
                    to="https://wa.me/919587298975"
                    className="btn btn-success"
                    data-aos="fade-up"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-whatsapp me-2"></i>
                    WhatsApp Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <img
                src="images/bg/hero.png"
                alt="Hospital Care"
                data-aos="fade-left"
                className="img-fluid rounded-4 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-card emergency-card">
                <div className="feature-icon"><i className="fas fa-ambulance"></i></div>
                <h4 className="my-3">24×7 Emergency & Trauma</h4>
                <p>Equipped with critical emergency support systems and swift trauma care management. Accidental and urgent treatment lines open 24/7.</p>
                <a href="tel:+919587298975" className="btn btn-emergency btn-sm mt-3">Call Desk Now</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-card scheme-card">
                <div className="feature-icon"><i className="fas fa-file-invoice-dollar"></i></div>
                <h4 className="my-3">Government Panel & Cashless</h4>
                <p>Get completely cashless or subsidized health treatments under Rajasthan MAA Yojna, Haryana Ayushman Bharat, and major health TPA providers.</p>
                <a href="#schemes" className="btn btn-primary-custom btn-sm mt-3">Check Schemes</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-card timing-card">
                <div className="feature-icon"><i className="fas fa-user-clock"></i></div>
                <h4 className="my-3">Hospital Availability</h4>
                <p className="mb-2">We provide non-stop clinical coverage to support families during unexpected hours.</p>
                <ul className="list-unstyled text-start border-top pt-2 mt-2" style={{ fontSize: "0.95rem" }}>
                  <li className="d-flex justify-content-between py-1"><span>Emergency/Trauma:</span> <strong className="text-danger">24 Hours</strong></li>
                  <li className="d-flex justify-content-between py-1"><span>Pharmacy & Lab:</span> <strong className="text-success">24 Hours</strong></li>
                  <li className="d-flex justify-content-between py-1"><span>Doctor Availability:</span> <strong className="text-primary">24 Hours Cover</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <img src="images/team/team2.jpeg" alt="Emergency Support" className="img-fluid rounded-4" />
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <span className="text-uppercase text-sm fw-bold" style={{ color: "var(--secondary)" }}>Welcome to Asad Hospital</span>
              <h2 className="mt-2">Providing Compassionate & Quality Healthcare Services</h2>
              <div className="divider-left"></div>

              <p className="mt-3">Asad Hospital is a dedicated multispeciality healthcare center located near Bhagat Singh Circle, Alwar. Our core mission is providing elite, highly affordable healthcare services with instant 24-hour medical and accident support systems.</p>
              <p>We combine premium diagnostic insights, cutting-edge surgical environments, and highly skilled medical professionals under one single roof to serve families across Rajasthan and Haryana seamlessly.</p>

              <h4 className="mt-4 mb-3" style={{ fontSize: "1.2rem", color: "var(--text-dark)" }}>Core Medical Provisions:</h4>

              <div className="row g-2">
                <div className="col-md-6">
                  <ul className="why-choose-list list-unstyled">
                    <li><i className="fas fa-check-circle me-2"></i>Emergency & Trauma Services</li>
                    <li><i className="fas fa-check-circle me-2"></i>General & Laparoscopic Surgery</li>
                    <li><i className="fas fa-check-circle me-2"></i>Orthopedic & Fracture Care</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="why-choose-list list-unstyled">
                    <li><i className="fas fa-check-circle me-2"></i>Obstetrics & Gynecology Care</li>
                    <li><i className="fas fa-check-circle me-2"></i>Urinary Problem Treatments</li>
                    <li><i className="fas fa-check-circle me-2"></i>Cashless Treatment Panels</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES WITH SEPERATED CIRCLE CSS CLASSES */}
      <section
        className="py-5 position-relative overflow-hidden"
        id="services"
        style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}
      >
        {/* CSS क्लास का उपयोग करके बनाए गए सर्कल्स */}
        <div className="glow-wrapper glow-teal-top-left"></div>
        <div className="glow-wrapper glow-blue-top-right"></div>
        <div className="glow-wrapper glow-purple-center-left"></div>
        <div className="glow-wrapper glow-cyan-bottom-right"></div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold text-uppercase tracking-wider mb-2" style={{ color: '#0b2545', fontSize: '2.25rem' }}>
              Our Medical Services
            </h2>
            <div className="mx-auto rounded-pill mb-3" style={{ width: '60px', height: '5px', background: 'linear-gradient(90deg, #00a896, #007bff)' }}></div>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Providing precision therapeutics and compassionate operational excellence across key medical divisions.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-3" data-aos="fade-up" data-aos-delay={index * 50}>
                <div
                  className="card h-100 border-0 p-4"
                  style={{
                    borderRadius: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: '0 10px 30px rgba(11, 37, 69, 0.04)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 168, 150, 0.15)';
                    const iconBox = e.currentTarget.querySelector('.icon-box');
                    if (iconBox) {
                      iconBox.style.background = 'linear-gradient(135deg, #00a896 0%, #007bff 100%)';
                      iconBox.style.transform = 'scale(1.05) rotate(5deg)';
                    }
                    const icon = e.currentTarget.querySelector('.icon-box i');
                    if (icon) icon.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(11, 37, 69, 0.04)';
                    const iconBox = e.currentTarget.querySelector('.icon-box');
                    if (iconBox) {
                      iconBox.style.background = 'rgba(0, 168, 150, 0.1)';
                      iconBox.style.transform = 'scale(1) rotate(0deg)';
                    }
                    const icon = e.currentTarget.querySelector('.icon-box i');
                    if (icon) icon.style.color = '#00a896';
                  }}
                >
                  <div
                    className="icon-box d-flex align-items-center justify-content-center mb-4"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      backgroundColor: 'rgba(0, 168, 150, 0.1)',
                      transition: 'all 0.4s ease'
                    }}
                  >
                    <i className={`${service.icon} fs-3`} style={{ color: '#00a896', transition: 'color 0.3s ease' }}></i>
                  </div>

                  <div className="card-body p-0">
                    <h5 className="fw-bold mb-3" style={{ color: '#0b2545', fontSize: '1.15rem' }}>
                      {service.title}
                    </h5>
                    <p className="text-muted m-0" style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS SPECIALISTS WITH CLEANED LOOK & CIRCLE CSS */}
      <section
        className="py-5 position-relative overflow-hidden"
        id="doctors"
        style={{ backgroundColor: "#f4f7fa", minHeight: "100vh" }}
      >
        {/* CSS क्लास का उपयोग करके बनाए गए सर्कल्स */}
        <div className="glow-wrapper glow-teal-top-left"></div>
        <div className="glow-wrapper glow-blue-top-right"></div>
        <div className="glow-wrapper glow-purple-center-left"></div>
        <div className="glow-wrapper glow-cyan-bottom-right"></div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="text-center mb-5">
            <h2 className="fw-bold text-uppercase tracking-wider mb-2" style={{ color: '#0b2545', fontSize: '2.2rem' }}>
              Meet Our Specialists
            </h2>
            <div className="mx-auto rounded-pill mb-3" style={{ width: '60px', height: '5px', background: 'linear-gradient(90deg, #007bff, #00d4ff)' }}></div>
          </div>

          <div className="row g-4 justify-content-center">
            {doctorsData.map((doctor, index) => (
              <div className="col-xl-3 col-lg-3 col-md-6" key={index}>
                <div
                  className="card doctor-card h-100 d-flex flex-column justify-content-between border-0 overflow-hidden"
                  style={{
                    borderRadius: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: '0 10px 30px rgba(11, 37, 69, 0.04)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 123, 255, 0.15)';
                    const img = e.currentTarget.querySelector('.doc-hover-img');
                    if (img) img.style.transform = 'scale(1.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(11, 37, 69, 0.04)';
                    const img = e.currentTarget.querySelector('.doc-hover-img');
                    if (img) img.style.transform = 'scale(1)';
                  }}
                >
                  <div>
                    <div style={{ overflow: 'hidden', position: 'relative', aspectRatio: '1/1', backgroundColor: '#e2e8f0' }}>
                      <img
                        src={doctor.image || "images/team/team3.png" + index}
                        className="w-100 h-100 object-fit-cover doc-hover-img"
                        alt={doctor.name}
                        style={{ transition: 'transform 0.5s ease' }}
                      />
                      <div className="position-absolute bottom-0 start-0 w-100" style={{ height: '30%', background: 'linear-gradient(to top, rgba(0,0,0,0.02), transparent)' }}></div>
                    </div>

                    <div className="doctor-info p-4">
                      <h4 className="fw-bold mb-1" style={{ color: '#0b2545', fontSize: '1.25rem' }}>{doctor.name}</h4>
                      <span className="specialty d-block mb-3 fw-bold text-uppercase tracking-wide" style={{ fontSize: '0.8rem', color: '#007bff' }}>
                        {doctor.specialty}
                      </span>
                      <p className="text-muted mb-0" style={{ fontSize: "0.85rem", lineHeight: "1.6" }}>
                        {doctor.experience}
                      </p>
                    </div>
                  </div>

                  <div className="doctor-availability p-3 text-center mt-auto" style={{ background: 'rgba(220, 53, 69, 0.05)', borderTop: '1px solid rgba(0, 0, 0, 0.03)' }}>
                    <small className="text-danger fw-bold" style={{ letterSpacing: '0.5px' }}>
                      <i className="fas fa-clock me-1"></i> {doctor.availability}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <HomeGallery /> */}

      {/* GOVERNMENT SCHEMES */}
      <section className="section scheme-section" id="schemes">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="zoom-in">
              <h2 className="text-white mb-3">Government Schemes & Insurance Cashless Treatment</h2>
              <p className="lead mb-5" style={{ color: "#cbd5e1" }}>We proudly extend high-quality diagnostic and treatment access via active government panels and private healthcare network assurances. Cashless facilities are provided immediately upon valid card verification.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="scheme-box"><i className="fas fa-hand-holding-medical text-success"></i>
                <h4 className="text-primary mt-2">Rajasthan MAA Yojna</h4>
                <p className="small text-muted mb-0">Complete authorized coverage parameters as per structural government wellness guidelines.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="scheme-box"><i className="fas fa-heart-pulse text-danger"></i>
                <h4 className="text-primary mt-2">Ayushman Bharat</h4>
                <p className="small text-muted mb-0">Eligible cardholders across Haryana & Rajasthan can receive cashless standard admissions seamlessly.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="scheme-box"><i className="fas fa-credit-card text-info"></i>
                <h4 className="text-primary mt-2">All TPA Cashless</h4>
                <p className="small text-muted mb-0">Seamless cashless treatment operations directly corporate supported across leading networks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;