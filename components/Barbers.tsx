
import React from 'react';
import { BARBERS } from '../constants';

const Barbers: React.FC = () => {
  return (
    <section id="team" className="py-40 bg-gradient-to-b from-[#0A0A0A] to-[#151515] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="max-w-4xl mb-32 reveal">
          <span className="text-accent text-[10px] tracking-[0.6em] uppercase font-bold mb-6 block">The Artisans</span>
          <h2 className="text-6xl md:text-8xl font-medium mb-10 leading-[0.9]">
            Masters of <br />
            <span className="italic serif text-white">Precision</span>
          </h2>
          <p className="text-gray-400 font-light text-xl italic max-w-2xl leading-relaxed">
            Our master barbers blend centuries-old techniques with contemporary aesthetic vision. Each artisan brings decades of expertise, dedication, and passion to every appointment.
          </p>
          <div className="flex gap-6 mt-10">
            <div className="flex items-start gap-3">
              <span className="text-accent text-2xl">✓</span>
              <div>
                <p className="text-white font-medium">Premium Training</p>
                <p className="text-gray-500 text-sm">International certifications & workshops</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-accent text-2xl">✓</span>
              <div>
                <p className="text-white font-medium">Personalized Service</p>
                <p className="text-gray-500 text-sm">Tailored to your unique style</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {BARBERS.map((barber, idx) => (
            <div key={barber.id} className="reveal group" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="relative aspect-[3/4] overflow-hidden bg-[#111] mb-10 shadow-2xl">
                <img 
                  src={barber.image} 
                  alt={barber.name} 
                  className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-105 grayscale hover:grayscale-0 filter brightness-95"
                />
                {/* 3D Frame Overlay */}
                <div className="absolute inset-0 border-[20px] border-black/30 group-hover:border-black/10 transition-all duration-700"></div>
                <div className="absolute inset-4 border border-white/10"></div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Hover Details */}
                <div className="absolute inset-0 bg-accent/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12">
                  <span className="text-white text-[10px] tracking-[0.4em] uppercase font-bold mb-3">Specializations</span>
                  <ul className="text-white text-sm font-light space-y-2">
                    <li>• High-precision fades & tapers</li>
                    <li>• Straight-razor shaving</li>
                    <li>• Beard sculpting & design</li>
                    <li>• Contemporary styling</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col">
                <h4 className="text-3xl font-medium mb-3 group-hover:text-accent transition-colors duration-300">{barber.name}</h4>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-accent text-[10px] tracking-[0.4em] uppercase font-bold">{barber.specialty}</span>
                  <span className="w-8 h-[1px] bg-white/10"></span>
                  <span className="text-gray-500 text-[10px] tracking-[0.2em] uppercase">{barber.experience} Exp.</span>
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
