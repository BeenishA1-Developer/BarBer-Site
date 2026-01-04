
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'py-4' : 'py-10'}`}>
      <div className={`container mx-auto px-6 transition-all duration-700 ${isScrolled ? 'max-w-6xl' : 'max-w-full'}`}>
        <div className={`flex items-center justify-between px-8 py-3 rounded-full transition-all duration-700 ${isScrolled ? 'glass' : 'bg-transparent'}`}>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 gold-bg rounded-full flex items-center justify-center text-black font-black text-xl shadow-lg group-hover:scale-110 transition-transform">L</div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-[0.3em] gold-text leading-none">LUXE BARBER</span>
              <span className="text-[8px] tracking-[0.5em] text-white/40 uppercase font-bold">Est. 2012</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['HOME', 'SERVICES', 'AI STYLIST', 'TEAM'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                className="text-[10px] font-bold tracking-[0.3em] text-white/60 hover:text-[#d4af37] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4af37] transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="#booking" className="px-8 py-2.5 gold-bg text-black text-[10px] font-black tracking-widest rounded-full hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-0.5 active:scale-95">
              BOOK NOW
            </a>
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <div className={`h-[1px] bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`h-[1px] bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`h-[1px] bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-[-1] transition-transform duration-700 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {['HOME', 'SERVICES', 'AI STYLIST', 'TEAM', 'BOOKING'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '')}`} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-serif italic hover:text-[#d4af37] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
