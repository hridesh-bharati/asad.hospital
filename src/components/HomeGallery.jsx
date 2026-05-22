import React, { useState } from 'react';

const photos = [
  { id: 1, src: 'images/rooms/room16.jpeg', title: 'हॉस्पिटल मुख्य द्वार (Main Entrance)', desc: 'असद हॉस्पिटल एवं ट्रामा सेंटर का मुख्य प्रवेश द्वार।' },
  { id: 2, src: 'images/rooms/room18.jpeg', title: 'ऑपरेशन थियेटर (Operation Theater)', desc: 'अत्याधुनिक उपकरणों से सुसज्जित नो-एंट्री ओटी जोन।' },
  { id: 3, src: 'images/rooms/room22.jpeg', title: 'इमरजेंसी एवं आईसीयू वार्ड (ICU Ward)', desc: 'मरीज की देखभाल के लिए 24/7 तैयार Medical Setup।' },
  { id: 4, src: 'images/rooms/room2.jpeg', title: 'रिसेप्शन एवं पूछताछ (Reception Desk)', desc: 'मरीजों और उनके परिजनों की सहायता के लिए मुख्य काउंटर।' },
  { id: 5, src: 'images/rooms/room1.jpeg', title: 'सामान्य वार्ड / रिकवरी रूम (General Ward)', desc: 'हवादार और साफ-सुथरा मरीजों का रिकवरी एरिया।' },
  { id: 6, src: 'images/rooms/room2.jpeg', title: 'असद रिसेप्शन काउंटर (Front Desk)', desc: 'सुविधाजनक और त्वरित रजिस्ट्रेशन प्रक्रिया केंद्र।' },
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const navigateLightbox = (step) => {
    setCurrentIndex((prev) => (prev + step + photos.length) % photos.length);
  };

  return (
    <div className="py-5 position-relative overflow-hidden" style={{ backgroundColor: '#f4f7fa', minHeight: '100vh' }}>
      
      {/* CSS क्लास आधारित बैकग्राउंड सर्कल्स (No Inlines) */}
      <div className="glow-wrapper glow-teal-top-left"></div>
      <div className="glow-wrapper glow-blue-top-right"></div>
      <div className="glow-wrapper glow-purple-center-left"></div>
      <div className="glow-wrapper glow-cyan-bottom-right"></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        
        {/* हेडर */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-uppercase tracking-wider mb-2" style={{ color: '#0b2545', letterSpacing: '1.5px', fontSize: '2.2rem' }}>
            Hospital Gallery
          </h2>
          <div className="mx-auto rounded-pill" style={{ width: '60px', height: '5px', background: 'linear-gradient(90deg, #007bff, #00d4ff)' }}></div>
        </div>

        {/* ग्रिड लेआउट */}
        <div className="row g-4">
          {photos.map((photo, index) => (
            <div key={photo.id} className="col-12 col-sm-6 col-md-4">
              <div 
                className="card h-100 border-0 overflow-hidden"
                style={{ 
                  cursor: 'pointer', 
                  borderRadius: '18px', 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.7)',
                  boxShadow: '0 10px 30px rgba(11, 37, 69, 0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onClick={() => openLightbox(index)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(13, 110, 253, 0.18)'; // Bluewise Glow Shadow
                  const img = e.currentTarget.querySelector('.gallery-img');
                  if (img) img.style.transform = 'scale(1.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(11, 37, 69, 0.05)';
                  const img = e.currentTarget.querySelector('.gallery-img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                <div style={{ aspectRatio: '16/11', overflow: 'hidden' }}>
                  <img 
                    src={photo.src} 
                    alt={photo.title} 
                    className="w-100 h-100 object-fit-cover gallery-img"
                    style={{ transition: 'transform 0.4s ease' }}
                    loading="lazy"
                  />
                </div>

                <div className="card-body p-4 bg-white">
                  <h5 className="fw-bold mb-2" style={{ color: '#0b2545', fontSize: '1.15rem' }}>{photo.title}</h5>
                  <p className="text-muted small m-0" style={{ lineHeight: '1.5' }}>{photo.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* लाइटबॉक्स मोडल */}
        {isOpen && (
          <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(11, 37, 69, 0.95)', backdropFilter: 'blur(8px)' }}>
            <button 
              type="button" 
              className="btn-close btn-close-white position-absolute top-0 end-0 m-4 fs-4" 
              onClick={() => setIsOpen(false)}
              style={{ zIndex: 1060 }}
            ></button>

            <div className="modal-dialog modal-dialog-centered modal-xl h-100 my-0">
              <div className="modal-content bg-transparent border-0 h-100">
                <div className="modal-body d-flex align-items-center justify-content-between p-0 position-relative h-100">
                  <button className="btn btn-link text-white text-decoration-none fs-1 p-3 position-absolute start-0" onClick={() => navigateLightbox(-1)} style={{ zIndex: 1055 }}>‹</button>
                  <div className="w-100 text-center d-flex flex-column align-items-center justify-content-center p-4">
                    <img src={photos[currentIndex].src} alt="Layout full view" className="img-fluid rounded shadow-lg" style={{ maxHeight: '75vh', objectFit: 'contain', border: '3px solid rgba(255,255,255,0.2)' }} />
                    <h4 className="text-white mt-3 fw-normal">{photos[currentIndex].title}</h4>
                  </div>
                  <button className="btn btn-link text-white text-decoration-none fs-1 p-3 position-absolute end-0" onClick={() => navigateLightbox(1)} style={{ zIndex: 1055 }}>›</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;