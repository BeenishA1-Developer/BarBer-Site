
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif font-black text-white/[0.01] pointer-events-none select-none">
        SERVICES
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[#d4af37] font-bold tracking-[0.4em] mb-4 text-xs uppercase">The Menu</h2>
            <h3 className="text-4xl md:text-6xl font-black font-serif">Unrivaled <span className="italic">Expertise</span></h3>
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
            Discover a range of tailored services designed to maintain and elevate the discerning gentleman's profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className="group relative h-[500px] rounded-[2.5rem] overflow-hidden tilt-card shadow-2xl border border-white/5"
            >
              {/* Image Overlay Background */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                <div className="mb-4 flex items-baseline justify-between">
                   <span className="text-[10px] text-[#d4af37] font-bold tracking-widest">0{idx + 1}</span>
                   <span className="text-lg font-bold text-white font-serif">{service.price}</span>
                </div>
                <h4 className="text-2xl font-bold font-serif mb-4 leading-tight group-hover:text-[#d4af37] transition-colors">{service.name}</h4>
                <p className="text-gray-400 text-xs mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-3 text-[9px] font-bold tracking-widest text-white/40 uppercase">
                  <div className="w-8 h-[1px] bg-white/20"></div>
                  <span>{service.duration}</span>
                </div>
              </div>
              
              {/* Selection Indicator */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                   </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
