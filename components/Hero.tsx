
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 w-full h-full will-change-transform scale-110 transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1512690118294-7049f76a503f?auto=format&fit=crop&q=90&w=2400" 
            alt="Premium Barbering" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/20 to-transparent z-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col lg:flex-row items-center justify-between pt-24">
        <div className="max-w-3xl text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gold-bg"></div>
            <h2 className="text-[#d4af37] font-semibold tracking-[0.5em] text-xs md:text-sm uppercase">Legacy of Excellence</h2>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 font-serif">
            The Art of <br />
            <span className="gold-text italic">Refinement</span>
          </h1>
          
          <p className="text-base md:text-xl text-gray-300 mb-12 max-w-xl leading-relaxed font-light mx-auto lg:mx-0">
            Crafting more than just a cut—we curate identities. Step into a sanctuary where master artistry meets modern luxury.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <a href="#booking" className="group relative px-12 py-5 overflow-hidden rounded-full font-bold text-black gold-bg transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-95">
              <span className="relative z-10">BOOK AN EXPERIENCE</span>
            </a>
            <a href="#services" className="px-12 py-5 border border-white/10 hover:border-[#d4af37] text-white font-bold rounded-full transition-all backdrop-blur-sm group active:scale-95">
              VIEW SERVICES
            </a>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center relative mt-12 lg:mt-0 perspective-2000">
          <div 
            className="relative w-[400px] h-[550px] glass rounded-[3rem] overflow-hidden tilt-card shadow-2xl border-white/5"
            style={{ transform: `rotateY(-5deg) translateY(${scrollY * -0.03}px)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=90&w=1000" 
              alt="Editorial Grooming" 
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <span className="text-gold-bg text-[10px] tracking-[0.3em] font-bold uppercase mb-2 block">Premium Cut</span>
              <h3 className="text-2xl font-bold font-serif italic text-white">The Royal Executive</h3>
            </div>
          </div>
          
          {/* Floating Decorative Badge */}
          <div className="absolute -top-10 -right-10 w-32 h-32 glass rounded-full flex items-center justify-center animate-float gold-border">
             <div className="text-center">
                <p className="text-[#d4af37] font-bold text-2xl font-serif leading-none">5.0</p>
                <p className="text-[8px] tracking-widest text-white/60 font-bold uppercase">Rated Excellent</p>
             </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[9px] tracking-[0.4em] text-white/60 uppercase font-bold">Discover More</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#d4af37] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
