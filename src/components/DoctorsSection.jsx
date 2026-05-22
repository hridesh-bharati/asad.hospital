import React from "react";

const TRUST_BADGES = [
  { icon: <i className="bi bi-shield-check text-primary fs-5"></i>, label: "50+ Years Combined Experience" },
  { icon: <i className="bi bi-people text-success fs-5"></i>, label: "10,000+ Happy Patients" },
  { icon: <i className="bi bi-cpu text-secondary fs-5"></i>, label: "Cutting-Edge Technology" },
];

const DOCTORS_DATA = [
  {
    name: "Dr. Sahun Khan",
    degrees: "M.B.B.S, MS, FIAGES, FMAS",
    specialty: "General & Laparoscopic Surgeon",
    specialtyIcon: "⚕️",
    image: "images/team/team2.jpeg",
    expertise: ["Laparoscopic Surgery", "Gallbladder Surgery", "Appendix Surgery", "Hernia Surgery"],
  },
  {
    name: "Dr. Parveen",
    degrees: "M.B.B.S, MS FMAS",
    specialty: "Obstetrician & Gynecologist",
    specialtyIcon: "🌸",
    image: "images/team/team1.jpeg",
    expertise: ["Normal Delivery", "Cesarean Section", "Pregnancy Care", "Women Health"],
  },
  {
    name: "Dr. Madhavi Kundnani",
    degrees: "M.S. ENT",
    specialty: "ENT Specialist (कान, नाक, गला रोग विशेषज्ञ)",
    specialtyIcon: "👂",
    image: "images/team/team3.png", // यहाँ अपनी इमेज का पाथ डालें (e.g., "images/team/madhavi.jpeg")
    expertise: ["Ear Diseases (कान के रोग)", "Nose Problems (नाक की समस्या)", "Throat Infections (गले का संक्रमण)", "Sinus Treatment"],
  },
  {
    name: "Dr. Kanakaroda",
    degrees: "M.B.B.S, D.N.B, (Orthopedics)",
    specialty: "Orthopedic Specialist",
    specialtyIcon: "🦴",
    image: "images/team/team4.png",
    expertise: ["Bone Fractures", "Joint Pain", "Trauma Injuries", "Orthopedic Problems"],
  },
  {
    name: "Dr. Chandrashekar Sharma",
    degrees: "M.Ch (Urology)",
    specialty: "Urologist",
    specialtyIcon: "💧",
    image: "images/team/team5.png",
    expertise: ["Urinary Problems", "Kidney Stone", "Urinary Infection", "Male Disorders"],
  },
];

const DoctorCard = ({ doctor }) => (
  <div className="col-12 col-md-6 col-lg-3" data-aos="fade-up">
    {/* Instagram Light-Mode Card Structure */}
    <div className="card h-100 border-0 bg-white text-dark rounded-5 overflow-hidden position-relative app-card-shadow">
      
      {/* Top Image Layer with Text Overlay */}
      <div className="position-relative overflow-hidden" style={{ height: "290px" }}>
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="w-100 h-100 object-fit-cover doctor-img" 
          loading="lazy" 
        />
        
        {/* Modern App Vignette Gradient (Light Theme Optimized) */}
        <div className="position-absolute bottom-0 start-0 w-100 h-75 bg-gradient-to-top p-4 d-flex flex-column justify-content-end">
          <span className="badge bg-white bg-opacity-75 text-dark border border-dark border-opacity-10 rounded-pill px-2.5 py-1 small align-self-start mb-2 backdrop-blur fw-semibold">
            {doctor.degrees}
          </span>
          <h4 className="fw-extrabold m-0 text-dark tracking-tight fs-5">{doctor.name}</h4>
          
          <div className="d-flex align-items-center gap-2 mt-1 text-secondary small">
            <span>{doctor.specialtyIcon}</span>
            <span className="text-truncate fw-medium">{doctor.specialty}</span>
          </div>
        </div>

        {/* Live Status Badge */}
        <div className="position-absolute top-0 start-0 m-3 d-flex align-items-center gap-2 bg-white bg-opacity-80 border border-dark border-opacity-10 rounded-pill px-3 py-1.5 small backdrop-blur shadow-sm">
          <span className="position-relative d-inline-block" style={{ width: "8px", height: "8px" }}>
            <span className="position-absolute w-100 h-100 bg-success rounded-circle animate-pulse"></span>
            <span className="position-absolute w-100 h-100 bg-success rounded-circle"></span>
          </span>
          <span className="fw-bold text-success tracking-wider" style={{ fontSize: '10px' }}>24H LIVE</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="card-body p-4 d-flex flex-column justify-content-between bg-light bg-opacity-20 border-top border-light-subtle">
        
        {/* Core Expertise Tags */}
        <div className="mb-4">
          <div className="d-flex align-items-center gap-2 text-muted text-uppercase small fw-bold tracking-widest mb-3" style={{ fontSize: '11px' }}>
            <i className="bi bi-activity text-primary"></i>
            <span>Core Focus</span>
          </div>
          <div className="d-flex flex-wrap gap-2">
            {doctor.expertise.map((exp, i) => (
              <span key={i} className="badge bg-light text-dark border border-dark border-opacity-10 rounded-3 px-2.5 py-2 text-start text-truncate max-w-100 fw-normal">
                <i className="bi bi-check-circle-fill text-success me-1"></i> {exp}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Doctors = () => {
  return (
    <section id="doctors" className="py-5 position-relative overflow-hidden" style={{ backgroundColor: "#fbfcfd" }}>
      {/* Soft Light Radial Ambient Glow */}
      <div className="position-absolute top-0 start-50 translate-middle-x bg-glow-radial" style={{ width: "700px", height: "400px", opacity: 0.6 }}></div>

      <div className="container py-4 position-relative z-1">
        
        {/* Section Header */}
        <div className="row align-items-end mb-5 g-4 px-2">
          <div className="col-12 col-md-7">
            <span className="text-primary text-uppercase tracking-widest fw-bold small" style={{ fontSize: '12px' }}>
              ✦ World Class Care
            </span>
            <h2 className="display-4 fw-black text-dark mt-2 mb-0 tracking-tight">
              Meet Our <span className="text-gradient">Specialists</span>
            </h2>
          </div>
          <div className="col-12 col-md-5 text-md-end">
            <p className="text-muted m-0 max-w-sm ms-md-auto fw-medium">
              Highly specialized medical experts available round-the-clock for active diagnostics and critical treatments.
            </p>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="row g-4 mb-5">
          {DOCTORS_DATA.map((doctor, idx) => (
            <DoctorCard key={idx} doctor={doctor} />
          ))}
        </div>

        {/* Trust Badges - Clean Flat Surface */}
        <div className="row justify-content-center bg-white border border-light-subtle rounded-5 py-4 px-3 mx-1 text-center g-4 shadow-sm">
          {TRUST_BADGES.map((badge, idx) => (
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-center gap-3" key={idx}>
              <span>{badge.icon}</span>
              <span className="fw-semibold text-dark small tracking-wide">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Minimal Custom Tuning Styles */}
      <style jsx>{`
        .fw-black { font-weight: 900; }
        .tracking-tight { letter-spacing: -0.03em; }
        .tracking-widest { letter-spacing: 0.1em; }
        .backdrop-blur { backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }
        .max-w-sm { max-width: 400px; }
        .max-w-100 { max-width: 100%; }

        /* Smooth Light UI Gradients & Glows */
        .text-gradient {
          background: linear-gradient(135deg, #0d6efd 30%, #20c997 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .bg-gradient-to-top {
          background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%);
        }
        .bg-gradient-primary {
          background: linear-gradient(135deg, #007aff 0%, #0056b3 100%);
        }
        .bg-glow-radial {
          background: radial-gradient(circle, #e6f0ff 0%, transparent 70%);
          filter: blur(50px);
        }

        /* App Smooth Micro-Shadows (Instagram feel) */
        .app-card-shadow {
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.04);
          background: #ffffff !important;
        }
        
        .doctor-img {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .card:hover .doctor-img {
          transform: scale(1.03);
        }
        
        /* Interactive iOS Style Button */
        .btn-app {
          box-shadow: 0 4px 14px rgba(0, 122, 255, 0.2);
          transition: all 0.2s ease;
        }
        .btn-app:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 122, 255, 0.35);
          filter: brightness(1.05);
        }

        /* Pulse Dot Logic */
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.8); opacity: 0; }
        }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>
    </section>
  );
};

export default Doctors;