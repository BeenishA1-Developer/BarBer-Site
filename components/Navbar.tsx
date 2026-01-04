
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-8 md:px-16 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-medium tracking-[0.3em] uppercase">Luxe Barber</span>
        </div>

        <div className="hidden md:flex items-center gap-12">
          {['Services', 'Consultation', 'Team'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
          <a href="#booking" className="bg-white text-black px-8 py-2.5 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-accent hover:text-white transition-all">
            Book
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
