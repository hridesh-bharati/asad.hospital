import React, { useEffect } from 'react';  // Add useEffect here
import { Routes, Route } from 'react-router-dom';
import "./App.css"

// Saare components ko import karein
import Header from './components/Header';
import Hero from './components/HeroSection';
import About from './components/About/About';
import Footer from './components/Footer';

import "aos/dist/aos.css";
import AOS from "aos";
import GalleryPage from './components/GalleryPage';
import ContactSection from './components/ContactSection';
import ServicesPage from './components/Services/ServicesPage';
import Doctors from './components/DoctorsSection';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/doctors" element={<Doctors />} />
          
          <Route path="/contact" element={<ContactSection />} />


        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;