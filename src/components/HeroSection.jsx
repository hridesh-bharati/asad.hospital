import React from "react";
import FaqSection from "./FaqSection";
import { Link } from "react-router-dom";
import HomeGallery from "./HomeGallery";

const doctorsData = [
  {
    name: "डॉ. साहुन खान",
    image: "images/team/team2.jpeg",
    specialty: "M.B.B.S, MS, FIAGES, FMAS",
    experience:
      "जनरल एवं लेप्रोस्कोपिक सर्जन पूर्व चिकित्सक SMS हॉस्पिटल, जयपुर  सफदरजंग हॉस्पिटल, दिल्ली ",
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
    image: "",
    specialty: "M.B.B.S., D.N.B., (Orthopedics)",
    experience: "हड्डी रोग विशेषज्ञ",
    availability: "24 Hours Available",
  },
  {
    name: "डॉ. चन्द्रशेखर शर्मा",
    image: "",
    specialty: "M.Ch. (Urology)",
    experience: "मूत्र रोग विशेषज्ञ",
    availability: "24 Hours Available",
  },
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
                  <span className="badge-scheme">
                    <i className="fas fa-hand-holding-heart text-success"></i>{" "}
                    Rajasthan MAA Yojna
                  </span>

                  <span className="badge-scheme">
                    <i className="fas fa-shield-halved text-primary"></i>
                    Haryana Ayushman Bharat
                  </span>

                  <span className="badge-scheme">
                    <i className="fas fa-credit-card text-info"></i>
                    All TPA Cashless
                  </span>
                </div>

                <h1 className="mt-3">
                  Complete Healthcare Solutions <span>Available 24×7</span>
                </h1>

                <p className="lead text-dark mt-3">
                  Your health is our ultimate priority. Providing premium
                  emergency care, trauma response, advanced laparoscopic
                  surgeries, comprehensive maternity services, and specialty
                  orthopedic/urology care.
                </p>


                <div className="mt-4 d-flex flex-wrap gap-2">

                  <Link
                    to="/hospital-appointment"
                    className="btn btn-primary-custom"
                  >
                    <i className="bi bi-calendar2-check me-2"></i>
                    Book Appointment
                  </Link>

                  <Link
                    to="tel:+919587298975"
                    className="btn btn-emergency"
                  >
                    <i className="bi bi-telephone-fill me-2"></i>
                    Call Emergency
                  </Link>

                  <Link
                    to="https://wa.me/919587298975"
                    className="btn btn-success"
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
                className="img-fluid rounded-4 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-card emergency-card">
                <div className="feature-icon"><i className="fas fa-ambulance"></i></div>
                <h4 className="my-3">24×7 Emergency & Trauma</h4>
                <p>Equipped with critical emergency support systems and swift trauma care management. Accidental and urgent
                  treatment lines open 24/7.</p>
                <a href="tel:+919587298975" className="btn btn-emergency btn-sm mt-3">Call Desk Now</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-card scheme-card">
                <div className="feature-icon"><i className="fas fa-file-invoice-dollar"></i></div>
                <h4 className="my-3">Government Panel & Cashless</h4>
                <p>Get completely cashless or subsidized health treatments under Rajasthan MAA Yojna, Haryana Ayushman
                  Bharat, and major health TPA providers.</p>
                <a href="#schemes" className="btn btn-primary-custom btn-sm mt-3">Check Schemes</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-card timing-card">
                <div className="feature-icon"><i className="fas fa-user-clock"></i></div>
                <h4 className="my-3">Hospital Availability</h4>
                <p className="mb-2">We provide non-stop clinical coverage to support families during unexpected hours.</p>
                <ul className="list-unstyled text-start border-top pt-2 mt-2" style={{ fontSize: "0.95rem" }}>
                  <li className="d-flex justify-content-between py-1"><span>Emergency/Trauma:</span> <strong
                    className="text-danger">24 Hours</strong></li>
                  <li className="d-flex justify-content-between py-1"><span>Pharmacy & Lab:</span> <strong
                    className="text-success">24 Hours</strong></li>
                  <li className="d-flex justify-content-between py-1"><span>Doctor Availability:</span> <strong
                    className="text-primary">24 Hours Cover</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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

              <p className="mt-3">Asad Hospital is a dedicated multispeciality healthcare center located near Bhagat Singh
                Circle, Alwar. Our core mission is providing elite, highly affordable healthcare services with instant
                24-hour medical and accident support systems.</p>
              <p>We combine premium diagnostic insights, cutting-edge surgical environments, and highly skilled medical
                professionals under one single roof to serve families across Rajasthan and Haryana seamlessly.</p>

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

      <section className="section" id="services" style={{ background: "var(--light-bg)" }}>
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Our Medical Services</h2>
            <div className="divider"></div>
            <p>Providing precision therapeutics and compassionate operational excellence across key medical divisions.</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="service-card"><i className="fas fa-stethoscope"></i>
                <h5>General Surgery</h5>
                <p>Advanced abdominal, open and therapeutic visceral surgical interventions done via expert frameworks.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-card"><i className="fas fa-laptop-medical"></i>
                <h5>Laparoscopic Surgery</h5>
                <p>Minimally invasive keyhole surgical techniques helping patients experience minimal blood loss.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-card"><i className="fas fa-bone"></i>
                <h5>Orthopedic Care</h5>
                <p>Treatment of structural bone fractures, joint problems, dislocations, and accidental injuries.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-card"><i className="fas fa-baby-carriage"></i>
                <h5>Obstetrics & Gynecology</h5>
                <p>Comprehensive maternal healthcare ecosystem handling routine high-risk prenatal journeys.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-card"><i className="fas fa-notes-medical"></i>
                <h5>Emergency & Trauma</h5>
                <p>Immediate live saving care protocols and multi-trauma stabilization run 24 hours.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-card"><i className="fas fa-crutch"></i>
                <h5>Urinary Problem</h5>
                <p>Detailed therapeutic insights addressing urinary infections and renal stone structures.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-card"><i className="fas fa-heartbeat"></i>
                <h5>ICU & Critical Care</h5>
                <p>Continuous monitoring grid infrastructure setups ensuring error-free emergency support.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-card"><i className="fas fa-truck-medical"></i>
                <h5>Ambulance Services</h5>
                <p>Fast emergency transportation logistic support matrix mapped across nearby networks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="section" id="doctors">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Meet Our Specialists</h2>
            <div className="divider"></div>
          </div>

          <div className="row g-4 justify-content-center">
            {doctorsData.map((doctor, index) => (
              <div className="col-xl-3 col-lg-3 col-md-6" key={index}>
                <div className="doctor-card h-100 d-flex flex-column justify-content-between">
                  <div>
                    <div className="doctor-img">
                      <img
                        src={doctor.image}
                        className="img-fluid w-100"
                        alt={doctor.name}
                      />
                    </div>

                    <div className="doctor-info p-3">
                      <h4>{doctor.name}</h4>

                      <span className="specialty d-block mb-2 text-primary fw-semibold">
                        {doctor.specialty}
                      </span>

                      <p
                        className="small text-muted mb-0"
                        style={{
                          fontSize: "0.85rem",
                          lineHeight: "1.5",
                        }}
                      >
                        {doctor.experience}
                      </p>
                    </div>
                  </div>

                  <div className="doctor-availability p-3 border-top text-center mt-auto">
                    <small className="text-danger fw-bold">
                      <i className="fas fa-clock me-1"></i>
                      {doctor.availability}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <HomeGallery />

      {/* GOVERNMENT SCHEMES & INSURANCE BASE SYSTEM */}
      <section className="section scheme-section" id="schemes">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="zoom-in">
              <h2 className="text-white mb-3">Government Schemes & Insurance Cashless Treatment</h2>
              {/* <div className="divider mx-auto" style={{background: "var(--white)"}}></div> */}
              <p className="lead mb-5" style={{ color: "#cbd5e1" }}>We proudly extend high-quality diagnostic and treatment access
                via active government panels and private healthcare network assurances. Cashless facilities are provided
                immediately upon valid card verification.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="scheme-box"><i className="fas fa-hand-holding-medical text-success"></i>
                <h4 className="text-primary mt-2">Rajasthan MAA Yojna</h4>
                <p className="small text-muted mb-0">Complete authorized coverage parameters as per structural government
                  wellness guidelines.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="scheme-box"><i className="fas fa-heart-pulse text-danger"></i>
                <h4 className="text-primary mt-2">Ayushman Bharat</h4>
                <p className="small text-muted mb-0">Eligible cardholders across Haryana & Rajasthan can receive cashless
                  standard admissions seamlessly.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="scheme-box"><i className="fas fa-credit-card text-info"></i>
                <h4 className="text-primary mt-2">All TPA Cashless</h4>
                <p className="small text-muted mb-0">Seamless cashless treatment operations directly corporate supported across
                  leading networks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ  */}
      <FaqSection />
    </>
  );
};

export default Home;