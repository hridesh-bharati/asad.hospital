// ContactSection.jsx - WhatsApp Integrated Version
import React, { useState } from 'react';

export default function ContactSection() {

  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    phone: '',
    message: ''
  });

  // Hospital WhatsApp Number
  const whatsappNumber = "+919587298975";

  // Input Change Handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp Message String
    const whatsappMessage = `
🏥 *New Contact Form Message*

👤 *Name:* ${formData.name}

📌 *Department:* ${formData.subject}

📞 *Phone:* ${formData.phone}

📝 *Message:* 
${formData.message}
    `;

    // Encode Message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    // Optional Reset Form
    setFormData({
      name: '',
      subject: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div style={{ backgroundColor: '#f4f9f9' }}>

      {/* Page Title */}
      <section
        className="page-title bg-1 position-relative py-5 text-center"
        style={{
          background:
            'linear-gradient(135deg, #0b3c5d 0%, #0a8494 100%)'
        }}
      >
        <div
          className="overlay position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(11, 60, 93, 0.4)' }}
        ></div>

        <div className="container position-relative" style={{ zIndex: '2' }}>
          <div className="row">
            <div className="col-md-12">
              <div className="block py-4">
                <span
                  className="text-uppercase tracking-wider text-white-50 small fw-bold px-3 py-1 rounded-pill mb-2 d-inline-block"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    letterSpacing: '1px'
                  }}
                >
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

      {/* Contact Cards */}
      <section className="section contact-info py-5">
        <div className="container mx-auto">
          <div className="row g-4">

            {/* Call */}
            <div className="col-md-6">
              <div
                className="contact-block text-center p-4 rounded-4 bg-white shadow-sm h-100 border-bottom border-3"
                style={{ borderColor: '#0a8494' }}
              >
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'rgba(10, 132, 148, 0.1)'
                  }}
                >
                  <i
                    className="fas fa-phone-alt fs-4"
                    style={{ color: '#0a8494' }}
                  ></i>
                </div>

                <h5 className="fw-bold" style={{ color: '#0b3c5d' }}>
                  Call Us
                </h5>

                <p className="mb-0 text-secondary fw-semibold mt-2">
                  Emergency: +91 9587298975 <br />
                  OPD: +91 7976573436
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="col-md-6">
              <div
                className="contact-block text-center p-4 rounded-4 bg-white shadow-sm h-100 border-bottom border-3"
                style={{ borderColor: '#0b3c5d' }}
              >
                <div
                  className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'rgba(11, 60, 93, 0.1)'
                  }}
                >
                  <i
                    className="fas fa-map-marker-alt fs-4"
                    style={{ color: '#0b3c5d' }}
                  ></i>
                </div>

                <h5 className="fw-bold" style={{ color: '#0b3c5d' }}>
                  Location
                </h5>

                <p className="mb-0 text-secondary small mt-2 fw-medium">
                  Near Bhagat Singh Circle,
                  <br />
                  Alwar, Rajasthan - 301001
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-wrap py-5">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-lg-7">

              <div className="section-title text-center mb-5">

                <span
                  className="badge px-3 py-2 rounded-pill mb-2"
                  style={{
                    backgroundColor: 'rgba(20, 184, 166, 0.12)',
                    color: '#0f766e',
                    fontWeight: '600'
                  }}
                >
                  ✉️ LEAVE A MESSAGE
                </span>

                <h2
                  className="fw-bold mt-2"
                  style={{ color: '#0b3c5d' }}
                >
                  Have any Queries?
                </h2>

                <div
                  className="rounded-pill mx-auto my-3"
                  style={{
                    width: '60px',
                    height: '4px',
                    background: '#0a8494'
                  }}
                ></div>

                <p className="text-secondary">
                  अगर आपके पास कोई सवाल या सुझाव है, तो नीचे दिए गए
                  फॉर्म को भरें। हमारी मेडिकल टीम जल्द ही आपसे संपर्क करेगी।
                </p>

              </div>

            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="p-4 p-md-5 rounded-4 bg-white shadow-sm border-0">

                {/* FORM */}
                <form onSubmit={handleSubmit}>

                  <div className="row g-4 mb-4">

                    {/* Name */}
                    <div className="col-lg-6">
                      <label className="form-label small fw-bold text-secondary">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control form-control-lg rounded-3 fs-6 bg-light border-0"
                        placeholder="Your Full Name"
                        style={{ padding: '12px 20px' }}
                        required
                      />
                    </div>

                    {/* Subject */}
                    <div className="col-lg-6">
                      <label className="form-label small fw-bold text-secondary">
                        Subject / Department
                      </label>

                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-control form-control-lg rounded-3 fs-6 bg-light border-0"
                        placeholder="e.g., Surgery, Appointment"
                        style={{ padding: '12px 20px' }}
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="col-lg-6">
                      <label className="form-label small fw-bold text-secondary">
                        Phone Number
                      </label>

                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control form-control-lg rounded-3 fs-6 bg-light border-0"
                        placeholder="Your Phone Number"
                        style={{ padding: '12px 20px' }}
                        required
                      />
                    </div>

                  </div>

                  {/* Message */}
                  <div className="form-group mb-4">
                    <label className="form-label small fw-bold text-secondary">
                      Your Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control rounded-3 fs-6 bg-light border-0"
                      rows="6"
                      placeholder="Write your health concern here..."
                      style={{ padding: '15px 20px' }}
                      required
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <div className="text-center">

                    <button
                      className="btn btn-lg rounded-pill px-5 text-white fw-bold shadow"
                      type="submit"
                      style={{
                        background:
                          'linear-gradient(135deg, #0b3c5d 0%, #0a8494 100%)',
                        border: 'none',
                        padding: '12px 35px',
                        transition: 'all 0.3s'
                      }}
                    >
                      <i className="fab fa-whatsapp me-2"></i>
                      Send on WhatsApp
                    </button>

                  </div>

                </form>

              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}