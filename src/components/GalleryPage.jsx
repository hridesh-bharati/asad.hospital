import React, { useState } from 'react';

const HospitalGallery = () => {
  // Modal ke liye states
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const galleryItems = [
    { id: 1, img: "room1.jpeg", alt: "Elevations", icon: "fa-hospital" },
    { id: 2, img: "room2.jpeg", alt: "Reception", icon: "fa-hospital-user" },
    { id: 3, img: "room3.jpeg", alt: "ICU Ward", icon: "fa-heart-pulse" },
    { id: 4, img: "room4.jpeg", alt: "OT Unit", icon: "fa-user-md" },
    { id: 5, img: "room5.jpeg", alt: "Ambulance", icon: "fa-truck-medical" },
    { id: 6, img: "room6.jpeg", alt: "Wards", icon: "fa-bed-pulse" },
    { id: 7, img: "room7.jpeg", alt: "Radiology Lab", icon: "fa-xray" },
    { id: 8, img: "room8.jpeg", alt: "Pathology Lab", icon: "fa-flask-vial" },
    { id: 9, img: "room9.jpeg", alt: "Pharmacy", icon: "fa-pills" },
    { id: 10,img: "room10.jpeg", alt: "Emergency Room", icon: "fa-kit-medical" },
    { id: 11,img: "room11.jpeg", alt: "General Wards", icon: "fa-bed" },
    { id: 12,img: "room12.jpeg", alt: "OPD Clinics", icon: "fa-stethoscope" },
    { id: 13,img: "room13.jpeg", alt: "NICU", icon: "fa-baby" },
    { id: 14, img: "room14.jpeg", alt: "Physiotherapy Room", icon: "fa-child-reaching" },
    { id: 15,img: "room15.jpeg", alt: "Deluxe Room", icon: "fa-star" },
    { id: 16,img: "room16.jpg", alt: "Waiting Lounge", icon: "fa-users" },
    { id: 17,img: "room17.jpg", alt: "Sterilization Unit", icon: "fa-hands-bubbles" }
  ];

  // Image click handle karne ka function
  const openModal = (imgSrc, title) => {
    setSelectedImg(imgSrc);
    setSelectedTitle(title);
    document.body.style.overflow = 'hidden'; // Modal khulne par piche ka page scroll na ho
  };

  // Modal band karne ka function
  const closeModal = () => {
    setSelectedImg(null);
    setSelectedTitle("");
    document.body.style.overflow = 'unset'; // Scroll wapas normal karein
  };

  return (
    <section className="py-5" id="gallery" style={{ backgroundColor: '#f8fafc', position: 'relative' }}>
      <div className="container py-4">
        
        {/* Header */}
        <div className="text-center mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold text-uppercase mb-3" style={{ fontSize: '0.8rem' }}>
            ✨ Visual Tour
          </span>
          <h2 className="fw-extrabold text-dark display-5 mb-3" style={{ letterSpacing: '-1px' }}>
            Hospital Infrastructure
          </h2>
          <p className="text-muted lead fs-6">
            Click on any image below to view it in full screen details.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="row g-4">
          {galleryItems.map((item) => {
            const imgSrc = `images/rooms/${item.img}`;
            return (
              <div className="col-xl-4 col-md-6" key={item.id}>
                <div 
                  className="card h-100 border-0 rounded-4 shadow-sm overflow-hidden"
                  style={{ 
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    background: '#ffffff'
                  }}
                  onClick={() => openModal(imgSrc, item.title)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                  }}
                >
                  {/* Image wrapper */}
                  <div className="position-relative overflow-hidden" style={{ height: '240px' }}>
                    <img 
                      src={imgSrc} 
                      alt={item.alt} 
                      className="w-100 h-100 object-fit-cover"
                    />
                    {/* Hover Overlay Icon */}
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                      style={{ 
                        background: 'rgba(15, 23, 42, 0.4)',
                        opacity: 0,
                        transition: 'opacity 0.2s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                    >
                      <div className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: '50px', height: '50px' }}>
                        <i className="fa-solid fa-magnifying-glass-plus fs-5"></i>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="card-body p-4 d-flex align-items-center gap-3">
                    <div 
                      className="d-flex align-items-center justify-content-center rounded-3 bg-primary bg-opacity-10 text-primary flex-shrink-0" 
                      style={{ width: '45px', height: '45px' }}
                    >
                      <i className={`fa-solid ${item.icon} fs-5`}></i>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ======================================================== */}
      {/* PURE REACT IMAGE MODAL (POPUP) */}
      {/* ======================================================== */}
      {selectedImg && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
          style={{ 
            zIndex: 1050, 
            backgroundColor: 'rgba(15, 23, 42, 0.9)', 
            backdropFilter: 'blur(8px)',
            animation: 'fadeIn 0.2s ease-out'
          }}
          onClick={closeModal} // Bahar click karne par band ho jayega
        >
          {/* Close Button */}
          <button 
            onClick={closeModal}
            className="btn btn-link text-white position-absolute top-0 end-0 m-4 p-2 text-decoration-none"
            style={{ fontSize: '2rem', zIndex: 1060, border: 'none', outline: 'none' }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* Modal Container */}
          <div 
            className="position-relative d-flex flex-column align-items-center p-3"
            style={{ maxWidth: '90%', maxHeight: '85%' }}
            onClick={(e) => e.stopPropagation()} // Image par click karne se modal band nahi hoga
          >
            <img 
              src={selectedImg} 
              alt={selectedTitle} 
              className="img-fluid rounded-3 shadow-lg"
              style={{ 
                maxHeight: '75vh', 
                objectFit: 'contain',
                border: '4px solid rgba(255,255,255,0.1)'
              }} 
            />
            {/* Image Title below Modal Image */}
            <h4 className="text-white text-center mt-3 fw-bold fs-5 px-3 py-2 rounded-pill" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
              {selectedTitle}
            </h4>
          </div>
        </div>
      )}

      {/* Chhoti si CSS Animation inline dynamic injection ke liye */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

    </section>
  );
};

export default HospitalGallery;