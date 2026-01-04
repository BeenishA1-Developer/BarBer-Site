
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 gold-bg rounded-full flex items-center justify-center text-black font-bold text-xl">L</div>
          <span className="text-xl font-bold tracking-widest gold-text">LUXE BARBER</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-semibold tracking-wide hover:text-[#d4af37] transition-colors">HOME</a>
          <a href="#services" className="text-sm font-semibold tracking-wide hover:text-[#d4af37] transition-colors">SERVICES</a>
          <a href="#consultation" className="text-sm font-semibold tracking-wide hover:text-[#d4af37] transition-colors">AI CONSULTANT</a>
          <a href="#barbers" className="text-sm font-semibold tracking-wide hover:text-[#d4af37] transition-colors">TEAM</a>
          <a href="#booking" className="px-6 py-2 gold-bg text-black text-sm font-bold rounded-full hover:scale-105 transition-transform active:scale-95">BOOK NOW</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-t border-white/10 py-8 flex flex-col items-center gap-6">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold">HOME</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold">SERVICES</a>
          <a href="#consultation" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold">AI CONSULTANT</a>
          <a href="#barbers" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold">TEAM</a>
          <a href="#booking" onClick={() => setIsMobileMenuOpen(false)} className="px-10 py-3 gold-bg text-black font-bold rounded-full">BOOK NOW</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
