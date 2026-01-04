
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIStylist from './components/AIStylist';
import Barbers from './components/Barbers';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-[#d4af37] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AIStylist />
        <Barbers />
        
        {/* Gallery Section - Simple CSS 3D Scroll */}
        <section className="py-24 overflow-hidden">
          <div className="container mx-auto px-6 mb-16">
            <h2 className="text-[#d4af37] font-semibold tracking-widest mb-4">STYLE REEL</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-serif">Visual Inspiration</h3>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-12 px-6 no-scrollbar snap-x">
            {[
              'https://images.unsplash.com/photo-1593702275677-f916c6c70e4d?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1592647425550-d49d78ecac5e?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1621605815841-aa897bd0761d?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1512690118294-7049f76a503f?auto=format&fit=crop&q=80&w=600'
            ].map((url, i) => (
              <div key={i} className="min-w-[300px] md:min-w-[400px] aspect-square rounded-3xl overflow-hidden snap-center group relative perspective-1000">
                <img 
                  src={url} 
                  alt="Gallery image" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="gold-text text-4xl font-serif italic">Sharp</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Booking />
      </main>
      <Footer />

      {/* Persistent Call to Action for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a href="#booking" className="w-16 h-16 gold-bg rounded-full flex items-center justify-center text-black shadow-2xl animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;
