
import React from 'react';
import { BARBERS } from '../constants';

const Barbers: React.FC = () => {
  return (
    <section id="team" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-[#d4af37] font-bold tracking-[0.5em] mb-6 text-xs uppercase">The Artisans</h2>
          <h3 className="text-4xl md:text-6xl font-black font-serif italic mb-8">Masters of the <span className="gold-text">Craft</span></h3>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Our team consists of internationally acclaimed barbers, each bringing a unique signature to the chair.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {BARBERS.map((barber) => (
            <div key={barber.id} className="group relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 tilt-card border border-white/10">
                <img 
                  src={barber.image} 
                  alt={barber.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              
              <div className="mt-10 flex flex-col items-center">
                <h4 className="text-2xl font-bold font-serif mb-2">{barber.name}</h4>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[1px] w-6 bg-gold-bg"></div>
                  <p className="text-[#d4af37] text-[10px] font-black uppercase tracking-[0.3em]">{barber.specialty}</p>
                  <div className="h-[1px] w-6 bg-gold-bg"></div>
                </div>
                <p className="text-gray-500 text-[10px] tracking-widest uppercase">{barber.experience} Expertise</p>
              </div>
              
              {/* Floating Social Icons */}
              <div className="absolute top-8 right-8 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-10 group-hover:translate-x-0">
                 {['IG', 'TW'].map(social => (
                   <div key={social} className="w-10 h-10 glass rounded-full flex items-center justify-center text-[8px] font-bold hover:gold-bg hover:text-black transition-colors cursor-pointer border-white/10">
                     {social}
                   </div>
                 ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Barbers;
