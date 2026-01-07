
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-sm py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-8 md:px-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 border border-accent flex items-center justify-center">
            <span className="text-accent text-[10px] font-bold">LB</span>
          </div>
          <span className="text-lg font-medium tracking-[0.4em] uppercase text-white">Luxe Barber</span>
        </div>

        <div className="hidden md:flex items-center gap-12">
          {['Services', 'Consultation', 'Team'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link text-white/70 hover:text-accent transition-colors">
              {item}
            </a>
          ))}
          <a href="#booking" className="bg-accent text-white px-8 py-2 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-black transition-all duration-300">
            Book
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
