import React, { useState } from 'react';

const PhotoGallery = () => {
  const photos = [
    { id: 1, src: 'images/rooms/gallery1.jpeg' },
    { id: 2, src: 'images/rooms/gallery2.jpeg' },
    { id: 3, src: 'images/rooms/gallery3.jpeg' },
    { id: 4, src: 'images/rooms/gallery4.jpeg' },
    { id: 5, src: 'images/rooms/gallery5.jpeg' },
    { id: 6, src: 'images/rooms/room9.jpeg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="container py-5">
      {/* Bootstrap Grid System */}
      <div className="row g-4">
        {photos.map((photo, index) => (
          <div key={photo.id} className="col-12 col-sm-6 col-md-4">
            <div 
              className="position-relative overflow-hidden rounded-3 shadow-sm"
              style={{ cursor: 'pointer', aspectRatio: '1/1' }}
              onClick={() => openLightbox(index)}
            >
              <img 
                src={photo.src} 
                alt="Gallery item" 
                className="w-100 h-100 object-fit-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bootstrap Modal (Lightbox) */}
      {isOpen && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
          {/* Close Button - Top Right */}
          <button 
            type="button" 
            className="btn-close btn-close-white position-absolute top-0 end-0 m-4 fs-4" 
            onClick={() => setIsOpen(false)}
            aria-label="Close"
            style={{ zIndex: 1060 }}
          ></button>

          <div className="modal-dialog modal-dialog-centered modal-xl h-100 my-0">
            <div className="modal-content bg-transparent border-0 h-100">
              <div className="modal-body d-flex align-items-center justify-content-between p-0 position-relative h-100">
                
                {/* Left Control */}
                <button 
                  className="btn btn-link text-white text-decoration-none fs-1 p-3 position-absolute start-0" 
                  onClick={prevPhoto}
                  style={{ zIndex: 1055 }}
                >
                  ‹
                </button>

                {/* Main Fullscreen Image */}
                <div className="w-100 text-center d-flex align-items-center justify-content-center p-4">
                  <img 
                    src={photos[currentIndex].src} 
                    alt="Gallery item large" 
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: '85vh', objectFit: 'contain' }}
                  />
                </div>

                {/* Right Control */}
                <button 
                  className="btn btn-link text-white text-decoration-none fs-1 p-3 position-absolute end-0" 
                  onClick={nextPhoto}
                  style={{ zIndex: 1055 }}
                >
                  ›
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;