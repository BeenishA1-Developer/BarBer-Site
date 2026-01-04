
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000" 
          alt="Barber Background" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 pt-20">
        <div className="max-w-2xl">
          <h2 className="text-[#d4af37] font-semibold tracking-[0.3em] mb-4 text-sm md:text-base animate-pulse">ESTABLISHED SINCE 2012</h2>
          <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-6">
            Refine Your <br />
            <span className="gold-text italic">Signature</span> Look.
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
            Experience the pinnacle of men's grooming where tradition meets innovation. Our master barbers define sophistication through precision and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="px-10 py-4 gold-bg text-black font-bold rounded-full text-center hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">BOOK APPOINTMENT</a>
            <a href="#services" className="px-10 py-4 border border-white/20 hover:border-[#d4af37] text-white font-bold rounded-full text-center transition-all">OUR SERVICES</a>
          </div>
        </div>

        <div className="hidden lg:block perspective-1000">
          <div className="w-[450px] h-[600px] glass rounded-2xl overflow-hidden transform rotate-y-12 shadow-2xl transition-transform hover:rotate-y-0 duration-700">
            <img 
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=1000" 
              alt="Model Grooming" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-bold mb-2 font-serif">The Executive Cut</h3>
              <p className="text-[#d4af37] font-semibold">Starting at $45</p>
            </div>
          </div>
        </div>
      </div>

      {/* Side indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#d4af37] to-transparent"></div>
        <span className="text-[10px] tracking-[0.2em] text-[#d4af37]">SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
};

export default Hero;
