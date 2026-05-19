import React from 'react';

// Make sure these are imported in your main index.js or App.js:
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const ServicesPage = () => {
  const servicesData = [
    {
      id: 1,
      title: "General Surgery",
      description: "Advanced surgical care using modern techniques for various general surgical procedures with focus on patient safety and faster recovery.",
      icon: "bi-scissors"
    },
    {
      id: 2,
      title: "Laparoscopic Surgery",
      description: "Minimally invasive surgery with small incisions, reduced pain, minimal scarring, and significantly faster recovery time.",
      icon: "bi-activity"
    },
    {
      id: 3,
      title: "Orthopedic Care",
      description: "Comprehensive treatment for bone fractures, joint pain, sports injuries, arthritis, and trauma-related orthopedic conditions.",
      icon: "bi-suit-heart"
    },
    {
      id: 4,
      title: "Obstetrics & Gynecology",
      description: "Complete women's health services including normal delivery, C-section, high-risk pregnancy care, and gynecological treatments.",
      icon: "bi-gender-female"
    },
    {
      id: 5,
      title: "Emergency & Trauma Care",
      description: "24/7 emergency medical services with rapid response team, trauma bay, and advanced life support equipment.",
      icon: "bi-truck"
    },
    {
      id: 6,
      title: "Urinary Problem Treatment",
      description: "Specialized consultation and management of kidney stones, urinary infections, prostate issues, and male urinary disorders.",
      icon: "bi-droplet"
    },
    {
      id: 7,
      title: "ICU & Critical Care",
      description: "State-of-the-art intensive care unit with continuous monitoring, ventilators, and 24/7 critical care specialists.",
      icon: "bi-heart-pulse"
    },
    {
      id: 8,
      title: "Ambulance Services",
      description: "Fast emergency transportation with well-equipped ambulances, paramedics, and immediate medical support during transit.",
      icon: "bi-truck-front"
    }
  ];

  const features = [
    "24×7 Emergency Services",
    "Experienced Specialist Doctors",
    "Cashless TPA Facility",
    "Rajasthan MAA Yojna Accepted",
    "Haryana Ayushman Bharat Accepted",
    "Modern OT & ICU Facilities",
    "Affordable Treatment",
    "Patient-Friendly Care"
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-4 fw-bold mb-3">Our Medical Services</h1>
            <p className="lead mb-4">
              At Asad Hospital, we provide comprehensive, compassionate, and advanced medical care 
              across multiple specialties. Your health is our priority.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-danger btn-lg">
                <i className="bi bi-truck me-2"></i> 24/7 Emergency
              </button>
              <button className="btn btn-success btn-lg">
                <i className="bi bi-check-circle me-2"></i> Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="container py-5">
        <div className="row mb-5 text-center">
          <div className="col">
            <h2 className="display-5 fw-bold text-primary">Comprehensive Healthcare Services</h2>
            <p className="lead text-muted">
              From emergency care to specialized surgeries, we offer a full spectrum of medical services
            </p>
            <hr className="w-25 mx-auto border-danger border-2" />
          </div>
        </div>

        <div className="row g-4">
          {servicesData.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-3">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body p-4">
                  <div className="mb-3 text-primary fs-1">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <h5 className="card-title fw-bold mb-3">{service.title}</h5>
                  <p className="card-text text-muted small">
                    {service.description}
                  </p>
                  <button className="btn btn-link text-danger p-0">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src="https://placehold.co/600x400/0d6efd/white?text=Asad+Hospital+Facilities" 
              alt="Hospital Facilities" 
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold text-primary mb-3">Why Choose Asad Hospital?</h2>
            <hr className="w-25 border-danger border-2 mb-4" />
            <p className="lead mb-4">
              We are committed to providing exceptional healthcare with compassion, 
              transparency, and advanced medical technology.
            </p>
            <div className="row g-3">
              {features.map((feature, index) => (
                <div key={index} className="col-md-6">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <span>{feature}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <button className="btn btn-outline-primary">
                Know More About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Government Schemes Section */}
      <div className="container py-5">
        <div className="row text-center mb-5">
          <div className="col">
            <h2 className="display-5 fw-bold text-primary">Government Schemes & Cashless Facilities</h2>
            <p className="lead text-muted">
              We proudly provide treatment under various government healthcare schemes and insurance plans
            </p>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4 col-sm-6">
            <div className="card text-center h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="mb-3 text-success fs-1">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
                <h4 className="fw-bold">Rajasthan MAA Yojna</h4>
                <p className="card-text">Complete maternity and child care coverage under Rajasthan government scheme</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card text-center h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="mb-3 text-success fs-1">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
                <h4 className="fw-bold">Ayushman Bharat Yojna</h4>
                <p className="card-text">Haryana Ayushman Bharat scheme for eligible beneficiaries</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="card text-center h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="mb-3 text-success fs-1">
                  <i className="bi bi-check-circle-fill"></i>
                </div>
                <h4 className="fw-bold">All TPA Cashless Facility</h4>
                <p className="card-text">Cashless treatment available with all major TPAs and insurance partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container-fluid bg-primary text-white py-5 text-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="display-5 fw-bold mb-3">Need Immediate Medical Attention?</h2>
              <p className="lead mb-4">Our emergency services are available 24/7. Don't wait in case of a medical emergency.</p>
              <button className="btn btn-light btn-lg me-3">
                <i className="bi bi-telephone-fill me-2"></i> Call Emergency: +91 9587298975
              </button>
              <button className="btn btn-success btn-lg">
                <i className="bi bi-whatsapp me-2"></i> WhatsApp Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;