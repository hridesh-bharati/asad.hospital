import React, { useState } from "react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    gender: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
🏥 ASAD HOSPITAL APPOINTMENT

👤 Patient Name: ${formData.name}
📞 Phone: ${formData.phone}
🎂 Age: ${formData.age}
⚧ Gender: ${formData.gender}

🏨 Department: ${formData.department}
👨‍⚕ Doctor: ${formData.doctor}

📅 Date: ${formData.date}
⏰ Time: ${formData.time}

🩺 Symptoms:
${formData.symptoms}
    `;

    const phoneNumber = "919587298975";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  // Google Form focus effect ke liye custom CSS helper inline styles
  const inputStyle = {
    backgroundColor: "#fff",
    border: "1px solid #dadce0",
    borderRadius: "4px",
    padding: "12px 16px",
    fontSize: "14px",
    color: "#202124",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <div
      className="py-5"
      style={{
        background: "#f0f4f9", // Google's light gray-blue background
        minHeight: "100vh",
        fontFamily: "'Roboto', 'Product Sans', 'Inter', sans-serif"
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">

            {/* MAIN CONTAINER (NO OVERALL OUTER CARD FOR GOOGLE FORMS LOOK) */}
            <div className="d-flex flex-column gap-3">

              {/* BRANDING HEADER (As per your design preference) */}
              <div
                className="text-white p-4 p-md-5 rounded-3 shadow-sm overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
                  borderTop: "8px solid #1a73e8" // Google form color bar top tone
                }}
              >
                <div className="d-flex align-items-center gap-3 bg-white bg-opacity-10 p-3 rounded-3 backdrop-blur">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center bg-white text-primary shadow"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <img src="logo.jpg" alt="" width={60} />
                  </div>
                  <h2 className="fw-bold mb-0 h3">
                    Book an Appointment
                  </h2>
                </div>
              </div>

              {/* FORM SECTIONS STARTS */}
              <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                
                {/* SECTION 1: PATIENT INFO CARD */}
                <div className="card border-1 border-light shadow-sm rounded-3 p-4 bg-white">
                  <h5 className="mb-4 text-dark fw-bold border-bottom pb-2" style={{ color: "#202124" }}>
                    Patient Information
                  </h5>

                  <div className="row g-4">
                    <div className="col-md-6 d-flex flex-column">
                      <label className="form-label fw-medium mb-2 small text-secondary">Patient Full Name <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        name="name"
                        required
                        style={inputStyle}
                        className="form-control shadow-none"
                        placeholder="Your answer"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 d-flex flex-column">
                      <label className="form-label fw-medium mb-2 small text-secondary">Phone Number <span className="text-danger">*</span></label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        style={inputStyle}
                        className="form-control shadow-none"
                        placeholder="Your answer"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 d-flex flex-column">
                      <label className="form-label fw-medium mb-2 small text-secondary">Age <span className="text-danger">*</span></label>
                      <input
                        type="number"
                        name="age"
                        required
                        style={inputStyle}
                        className="form-control shadow-none"
                        placeholder="Your answer"
                        value={formData.age}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 d-flex flex-column">
                      <label className="form-label fw-medium mb-2 small text-secondary">Gender <span className="text-danger">*</span></label>
                      <select
                        name="gender"
                        required
                        style={inputStyle}
                        className="form-select shadow-none"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option value="">Choose</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* SECTION 2: CLINICAL DETAILS CARD */}
                <div className="card border-1 border-light shadow-sm rounded-3 p-4 bg-white">
                  <h5 className="mb-4 text-dark fw-bold border-bottom pb-2" style={{ color: "#202124" }}>
                    Consultation Details
                  </h5>

                  <div className="row g-4">
                    <div className="col-md-6 d-flex flex-column">
                      <label className="form-label fw-medium mb-2 small text-secondary">Department <span className="text-danger">*</span></label>
                      <select
                        name="department"
                        required
                        style={inputStyle}
                        className="form-select shadow-none"
                        value={formData.department}
                        onChange={handleChange}
                      >
                        <option value="">Choose</option>
                        <option>General Surgery</option>
                        <option>Gynaecology</option>
                        <option>Orthopaedics</option>
                        <option>ENT</option>
                        <option>Urology</option>
                        <option>Chest & Pulmonology</option>
                      </select>
                    </div>

                    <div className="col-md-6 d-flex flex-column">
                      <label className="form-label fw-medium mb-2 small text-secondary">Preferred Doctor (Optional)</label>
                      <input
                        type="text"
                        name="doctor"
                        style={inputStyle}
                        className="form-control shadow-none"
                        placeholder="Your answer"
                        value={formData.doctor}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 d-flex flex-column">
                      <label className="form-label fw-medium mb-2 small text-secondary">Appointment Date <span className="text-danger">*</span></label>
                      <input
                        type="date"
                        name="date"
                        required
                        style={inputStyle}
                        className="form-control shadow-none"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 d-flex flex-column">
                      <label className="form-label fw-medium mb-2 small text-secondary">Preferred Time <span className="text-danger">*</span></label>
                      <input
                        type="time"
                        name="time"
                        required
                        style={inputStyle}
                        className="form-control shadow-none"
                        value={formData.time}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-12 d-flex flex-column">
                      <label className="form-label fw-medium mb-2 small text-secondary">Symptoms / Problems <span className="text-danger">*</span></label>
                      <textarea
                        rows="4"
                        name="symptoms"
                        required
                        style={{ ...inputStyle, resize: "none" }}
                        className="form-control shadow-none"
                        placeholder="Your answer"
                        value={formData.symptoms}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* SUBMIT BUTTON SECTION */}
                <div className="d-flex justify-content-between align-items-center mt-2 px-1">
                  <span className="small text-muted">Never submit passwords through Google Forms.</span>
                  <button
                    type="submit"
                    className="btn btn-primary px-4 py-2 fw-bold text-white border-0 shadow-none"
                    style={{ 
                      backgroundColor: "#1a73e8", 
                      borderRadius: "4px",
                      fontSize: "14px",
                      letterSpacing: "0.25px"
                    }}
                  >
                    Submit on Whatsapp
                  </button>
                </div>

              </form>

            </div> {/* END CONTAINER */}

            {/* FOOTER CALLOUT */}
            <div className="text-center mt-5 p-4 rounded-3 bg-white shadow-sm border border-light">
              <p className="text-dark fw-semibold mb-1">
                <i className="bi bi-telephone-fill text-danger me-2"></i>
                Emergency Helpline: <a href="tel:9587298975" className="text-danger text-decoration-none fw-bold fs-5 ms-1">9587298975</a>
              </p>
              <p className="small text-muted mb-0">
                ⚡ 24×7 Emergency Care & Ambulance Services Available
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}