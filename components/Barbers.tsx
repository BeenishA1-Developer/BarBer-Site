
import React from 'react';
import { BARBERS } from '../constants';

const Barbers: React.FC = () => {
  return (
    <section id="team" className="py-40 bg-[#0A0A0A] relative">
      <div className="container mx-auto px-8 md:px-16">
        <div className="max-w-3xl mb-32 reveal">
          <span className="text-accent text-[10px] tracking-[0.6em] uppercase font-bold mb-6 block">The Artisans</span>
          <h2 className="text-6xl md:text-8xl font-medium mb-10 leading-[0.9]">
            Masters of <br />
            <span className="italic serif text-white">Precision</span>
          </h2>
          <p className="text-gray-500 font-light text-xl italic max-w-lg leading-relaxed">
            Our master barbers blend centuries-old techniques with contemporary aesthetic vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {BARBERS.map((barber, idx) => (
            <div key={barber.id} className="reveal group" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="relative aspect-[3/4] overflow-hidden bg-[#111] mb-10">
                <img 
                  src={barber.image} 
                  alt={barber.name} 
                  className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-110 grayscale hover:grayscale-0"
                />
                {/* 3D Frame Overlay */}
                <div className="absolute inset-0 border-[20px] border-black/20 group-hover:border-black/0 transition-all duration-700"></div>
                <div className="absolute inset-4 border border-white/5"></div>
                
                {/* Hover Details */}
                <div className="absolute inset-0 bg-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <span className="text-white text-[10px] tracking-[0.4em] uppercase font-bold mb-2">Portfolio</span>
                  <p className="text-white text-sm font-light leading-relaxed">
                    Specializing in high-precision tapers and traditional straight-razor therapy.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col">
                <h4 className="text-3xl font-medium mb-2 group-hover:text-accent transition-colors">{barber.name}</h4>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-accent text-[10px] tracking-[0.4em] uppercase font-bold">{barber.specialty}</span>
                  <span className="w-8 h-[1px] bg-white/10"></span>
                  <span className="text-gray-600 text-[10px] tracking-[0.2em] uppercase">{barber.experience} Exp.</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Barbers;
