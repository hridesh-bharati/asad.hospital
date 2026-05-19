// import React from 'react';
// import { FaPhone, FaWhatsapp } from 'react-icons/fa';

// const FloatingButtons = () => {
//   const styles = {
//     position: 'fixed',
//     bottom: '20px',
//     right: '20px',
//     zIndex: 1000,
//   };

//   const phoneStyle = {
//     position: 'fixed',
//     bottom: '20px',
//     right: '20px',
//     backgroundColor: '#dc3545',
//     color: 'white',
//     width: '55px',
//     height: '55px',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '25px',
//     boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
//     transition: 'all 0.3s ease',
//     cursor: 'pointer',
//     zIndex: 1000,
//   };

//   const whatsappStyle = {
//     position: 'fixed',
//     bottom: '90px',
//     right: '20px',
//     backgroundColor: '#25d366',
//     color: 'white',
//     width: '55px',
//     height: '55px',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '25px',
//     boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
//     transition: 'all 0.3s ease',
//     cursor: 'pointer',
//     zIndex: 1000,
//   };

//   return (
//     <div style={styles}>
//       <a 
//         href="https://wa.me/919587298975" 
//         style={whatsappStyle}
//         onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
//         onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaWhatsapp />
//       </a>
//       <a 
//         href="tel:+919587298975" 
//         style={phoneStyle}
//         onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
//         onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
//       >
//         <FaPhone />
//       </a>
//     </div>
//   );
// };

// export default FloatingButtons;

import React from 'react'

export default function FloatingButtons() {
  return (
    <div>FloatingButtons</div>
  )
}
