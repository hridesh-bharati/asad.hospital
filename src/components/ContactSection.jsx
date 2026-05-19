// ContactSection.jsx - Enhanced Premium Healthcare Version
import React from 'react';

export default function ContactSection() {
  // Theme Colors used conceptually:
  // Primary (Scrub Blue): #0a8494
  // Dark (Doctor Coat Navy): #0b3c5d
  // Accent (Mint Green): #14b8a6

  return (
    <div style={{ backgroundColor: '#f4f9f9' }}>
      <>
        {/* Page Title - Modern Premium Gradient Banner */}
        <section className="page-title bg-1 position-relative py-5 text-center" style={{ background: 'linear-gradient(135deg, #0b3c5d 0%, #0a8494 100%)' }}>
          <div className="overlay position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(11, 60, 93, 0.4)' }}></div>

          <div className="container position-relative" style={{ zIndex: '2' }}>
            <div className="row">
              <div className="col-md-12">
                <div className="block py-4">
                  <span className="text-uppercase tracking-wider text-white-50 small fw-bold px-3 py-1 rounded-pill mb-2 d-inline-block" style={{ backgroundColor: 'rgba(255,255,255,0.1)', letterSpacing: '1px' }}>
                    Contact Us
                  </span>
                  <h1 className="text-capitalize text-white fw-bold display-5 mt-2">
                    Get in Touch
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Cards - Premium Floating Design */}
        <section className="section contact-info py-5">
          <div className="container">
            <div className="row g-4">

              {/* Card 1: Call */}
              <div className="col-lg-4 col-md-6">
                <div className="contact-block text-center p-4 rounded-4 bg-white shadow-sm h-100 border-bottom border-3" style={{ borderColor: '#0a8494' }}>
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(10, 132, 148, 0.1)' }}>
                    <i className="fas fa-phone-alt fs-4" style={{ color: '#0a8494' }}></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: '#0b3c5d' }}>Call Us</h5>
                  <p className="mb-0 text-secondary fw-semibold mt-2">
                    Emergency: +91 9587298975 <br />
                    OPD: +91 7976573436
                  </p>
                </div>
              </div>

              {/* Card 2: Email */}
              <div className="col-lg-4 col-md-6">
                <div className="contact-block text-center p-4 rounded-4 bg-white shadow-sm h-100 border-bottom border-3" style={{ borderColor: '#14b8a6' }}>
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(20, 184, 166, 0.1)' }}>
                    <i className="fas fa-envelope-open fs-4" style={{ color: '#14b8a6' }}></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: '#0b3c5d' }}>Email Us</h5>
                  <p className="mb-0 text-secondary mt-2 fw-medium">
                    info@asadhospital.com<br />
                    support@asadhospital.com
                  </p>
                </div>
              </div>

              {/* Card 3: Location */}
              <div className="col-lg-4 col-md-12">
                <div className="contact-block text-center p-4 rounded-4 bg-white shadow-sm h-100 border-bottom border-3" style={{ borderColor: '#0b3c5d' }}>
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px', backgroundColor: 'rgba(11, 60, 93, 0.1)' }}>
                    <i className="fas fa-map-marker-alt fs-4" style={{ color: '#0b3c5d' }}></i>
                  </div>
                  <h5 className="fw-bold" style={{ color: '#0b3c5d' }}>Location</h5>
                  <p className="mb-0 text-secondary small mt-2 fw-medium">
                    Near Bhagat Singh Circle,<br />
                    Alwar, Rajasthan - 301001
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Form - Clean Form Layout with Custom Colored Button */}
        <section className="contact-form-wrap py-5">
          <div className="container">

            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-title text-center mb-5">
                  <span className="badge px-3 py-2 rounded-pill mb-2" style={{ backgroundColor: 'rgba(20, 184, 166, 0.12)', color: '#0f766e', fontWeight: '600' }}>
                    ✉️ LEAVE A MESSAGE
                  </span>
                  <h2 className="fw-bold mt-2" style={{ color: '#0b3c5d' }}>Have any Queries?</h2>
                  <div className="rounded-pill mx-auto my-3" style={{ width: '60px', height: '4px', background: '#0a8494' }}></div>
                  <p className="text-secondary">
                    अगर आपके पास कोई सवाल या सुझाव है, तो नीचे दिए गए फॉर्म को भरें। हमारी मेडिकल टीम जल्द ही आपसे संपर्क करेगी।
                  </p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="p-4 p-md-5 rounded-4 bg-white shadow-sm border-0">
                  
                  <form id="contact-form" className="contact__form" method="post" action="mail.php">
                    
                    {/* Form Message */}
                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-success contact__msg rounded-3 border-0 px-4 py-3" style={{ display: "none", backgroundColor: 'rgba(20, 184, 166, 0.15)', color: '#0f766e', fontWeight: '500' }} role="alert">
                          <i className="fas fa-check-circle me-2"></i> Your message was sent successfully.
                        </div>
                      </div>
                    </div>

                    <div className="row g-4 mb-4">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label small fw-bold text-secondary">Full Name</label>
                          <input name="name" id="name" type="text" className="form-control form-control-lg rounded-3 fs-6 bg-light border-0" placeholder="Your Full Name" style={{ padding: '12px 20px' }} required />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label small fw-bold text-secondary">Email Address</label>
                          <input name="email" id="email" type="email" className="form-control form-control-lg rounded-3 fs-6 bg-light border-0" placeholder="Your Email Address" style={{ padding: '12px 20px' }} required />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label small fw-bold text-secondary">Subject / Department</label>
                          <input name="subject" id="subject" type="text" className="form-control form-control-lg rounded-3 fs-6 bg-light border-0" placeholder="e.g., Surgery, Appointment, General" style={{ padding: '12px 20px' }} required />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label small fw-bold text-secondary">Phone Number</label>
                          <input name="phone" id="phone" type="text" className="form-control form-control-lg rounded-3 fs-6 bg-light border-0" placeholder="Your Phone Number" style={{ padding: '12px 20px' }} required />
                        </div>
                      </div>
                    </div>

                    <div className="form-group mb-4">
                      <label className="form-label small fw-bold text-secondary">Your Message</label>
                      <textarea name="message" id="message" className="form-control rounded-3 fs-6 bg-light border-0" rows="6" placeholder="Write your health concern or questions here..." style={{ padding: '15px 20px' }} required></textarea>
                    </div>

                    <div className="text-center">
                      <button className="btn btn-lg rounded-pill px-5 text-white fw-bold shadow" type="submit" style={{ background: 'linear-gradient(135deg, #0b3c5d 0%, #0a8494 100%)', border: 'none', padding: '12px 35px', transition: 'all 0.3s' }}>
                        <i className="fas fa-paper-plane me-2"></i> Send Message
                      </button>
                    </div>

                  </form>

                </div>
              </div>
            </div>

          </div>
        </section>
      </>
    </div>
  );
}