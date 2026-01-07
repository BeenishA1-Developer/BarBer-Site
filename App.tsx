
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Barbers from './components/Barbers';
import Booking from './components/Booking';
import Footer from './components/Footer';
import GalleryCarousel from './components/GalleryCarousel';

function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        
        <Services />
        
        <Testimonials />
        
        <GalleryCarousel />

        <Barbers />

        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
