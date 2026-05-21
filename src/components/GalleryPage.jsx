import React, { useState } from 'react';

const photos = [
  { 
    id: 1, 
    src: 'images/rooms/room1.jpeg', 
    title: 'हॉस्पिटल वार्ड / रिकवरी रूम (Patient Ward)', 
    desc: 'मरीजों के आराम के लिए खिड़की और पर्दों से सुसज्जित हवादार कमरा।' 
  },
  { 
    id: 2, 
    src: 'images/rooms/room16.jpeg', 
    title: 'मुख्य रिसेप्शन काउंटर (Main Reception Desk)', 
    desc: 'मरीजों के रजिस्ट्रेशन और पूछताछ के लिए अस्पताल का फ्रंट काउंटर।' 
  },
  { 
    id: 3, 
    src: 'images/rooms/room3.jpeg', 
    title: 'अस्पताल बाहरी दृश्य और एम्बुलेंस मार्ग (Hospital Exterior)', 
    desc: 'असद हॉस्पिटल का बाहरी परिसर जहाँ आपातकालीन वाहनों के लिए रास्ता है।' 
  },
  { 
    id: 4, 
    src: 'images/rooms/room4.jpeg', 
    title: 'इमरजेंसी प्रवेश द्वार (Emergency Entrance)', 
    desc: 'आपातकालीन मरीजों को तुरंत दाखिल करने के लिए मुख्य कॉरिडोर और गेट।' 
  },
  { 
    id: 5, 
    src: 'images/rooms/room5.jpeg', 
    title: 'माइनर ऑपरेशन थियेटर (Minor OT)', 
    desc: 'छोटे ऑपरेशनों और सर्जिकल प्रोसीजर के लिए डॉक्टरों की टीम के साथ तैयार ओटी।' 
  },
  { 
    id: 6, 
    src: 'images/rooms/room6.jpeg', 
    title: 'पैथोलॉजी एवं डायग्नोस्टिक लैब (Pathology Lab)', 
    desc: 'खून, यूरिन और अन्य मेडिकल जांचों के लिए उपकरणों से सुसज्जित लैब एरिया।' 
  },
  { 
    id: 7, 
    src: 'images/rooms/room7.jpeg', 
    title: 'मुख्य ऑपरेशन थियेटर (Major Operation Theater)', 
    desc: 'अत्याधुनिक सर्जिकल लाइट्स और टेबल से लैस मुख्य ओटी यूनिट।' 
  },
  { 
    id: 8, 
    src: 'images/rooms/room8.jpeg', 
    title: 'प्राइवेट / सेमी-प्राइवेट रूम (Special Patient Room)', 
    desc: 'मरीजों के ठहरने के लिए बेड, टेबल और पंखे की सुविधा वाला सिंगल रूम।' 
  },
  { 
    id: 9, 
    src: 'images/rooms/room9.jpeg', 
    title: 'डॉक्टर कंसल्टेशन चैंबर (Doctor\'s OPD Clinic)', 
    desc: 'विशेषज्ञ डॉक्टरों से परामर्श और चेकअप के लिए आरक्षित केबिन।' 
  },
  { 
    id: 10, 
    src: 'images/rooms/room10.jpeg', 
    title: 'हॉस्पिटल गैलरी / ओपीडी मार्ग (Hospital Corridor)', 
    desc: 'ओपीडी कक्षों और विभिन्न वार्डों को जोड़ने वाला आंतरिक रास्ता।' 
  },
  { 
    id: 11, 
    src: 'images/rooms/room11.jpg', 
    title: 'प्रतीक्षा क्षेत्र एवं सीढ़ियां (Waiting Lounge & Stairs)', 
    desc: 'मरीजों के परिजनों के बैठने के लिए कुर्सियां और ऊपरी मंजिल पर जाने का रास्ता।' 
  },
  { 
    id: 12, 
    src: 'images/rooms/room12.jpeg', 
    title: 'ओटी नो-एंट्री जोन (Operation Theater Door)', 
    desc: 'मुख्य ऑपरेशन थियेटर का सुरक्षित प्रवेश द्वार जहाँ बाहरी व्यक्तियों का जाना मना है।' 
  },
  { 
    id: 13, 
    src: 'images/rooms/room13.jpeg', 
    title: 'एडवांस ऑपरेशन कक्ष (Advanced OT Setup)', 
    desc: 'जटिल ऑपरेशनों के लिए संज्ञाहरण (Anesthesia) और क्रिटिकल केयर मशीनों से लैस ज़ोन।' 
  },
  { 
    id: 14, 
    src: 'images/rooms/room14.jpeg', 
    title: 'अस्पताल आंतरिक विंग (Hospital Internal Wing)', 
    desc: 'स्वच्छता और शांति के साथ बनाया गया अस्पताल का आंतरिक वार्ड सेक्शन।' 
  },
  { 
    id: 15, 
    src: 'images/rooms/room15.jpeg', 
    title: 'असद हॉस्पिटल मुख्य द्वार (Main Building Entrance)', 
    desc: 'असद हॉस्पिटल एवं ट्रामा सेंटर का फ्रंट बोर्ड और मुख्य प्रवेश मार्ग।' 
  },
  { 
    id: 17, 
    src: 'images/rooms/room17.jpg', 
    title: 'पूछताछ एवं हेल्प डेस्क (Information Desk)', 
    desc: 'परिजनों की सहायता और अस्पताल से जुड़ी जानकारी के लिए रिसेप्शन विंग।' 
  },
  { 
    id: 17, 
    src: 'images/rooms/room18.jpeg', 
    title: 'ओटी सुरक्षित क्षेत्र (OT Area - No Entry)', 
    desc: 'संक्रमण मुक्त (Sterilized) रखने के लिए विशेष रूप से डिज़ाइन किया गया ओटी का मुख्य गेट।' 
  },
  { 
    id: 18, 
    src: 'images/rooms/room19.jpeg', 
    title: 'इमरजेंसी और ट्रॉमा बेड (Emergency Trauma Bed)', 
    desc: 'गंभीर स्थिति में आने वाले मरीजों को तुरंत प्राथमिक उपचार देने का सेटअप।' 
  },
  { 
    id: 19, 
    src: 'images/rooms/room20.jpeg', 
    title: 'ट्रॉमा सेंटर फ्रंट व्यू (Trauma Center Front)', 
    desc: 'आपातकालीन और एक्सीडेंटल केस के लिए बना मुख्य ट्रॉमा सेंटर बोर्ड।' 
  },
  { 
    id: 20, 
    src: 'images/rooms/room21.jpeg', 
    title: 'आईस्यू / क्रिटिकल केयर यूनिट (Critical Care Unit)', 
    desc: 'मल्टी-पैरा मॉनिटर और जीवन रक्षक प्रणालियों से लैस विशेष निगरानी कक्ष।' 
  },
  { 
    id: 21, 
    src: 'images/rooms/room22.jpeg', 
    title: 'इमरजेंसी आईसीयू वार्ड (Intensive Care Unit - ICU)', 
    desc: 'गंभीर मरीजों की 24/7 कस्टमाइज्ड और गहन देखभाल के लिए अत्याधुनिक आईसीयू सेटअप।' 
  }
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
        
        {/* Header */}
        <div className="text-center mb-5" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-bold text-uppercase mb-3" style={{ fontSize: '0.8rem' }}>
            ✨ Visual Tour
          </span>
          <h2 className="fw-bold text-gradient display-5 mb-3" style={{ letterSpacing: '-1px' }}>
            Hospital Infrastructure
          </h2>
          <p className="text-muted lead fs-6">
            Click on any image below to view it in full screen details.
          </p>
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
                    <img src={photos[currentIndex].src} alt={photos[currentIndex].title} className="img-fluid rounded shadow-lg" style={{ maxHeight: '70vh', objectFit: 'contain', border: '3px solid rgba(255,255,255,0.2)' }} />
                    <h4 className="text-white mt-3 fw-normal">{photos[currentIndex].title}</h4>
                    <p className="text-white-50 small mt-1" style={{ maxWidth: '600px' }}>{photos[currentIndex].desc}</p>
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