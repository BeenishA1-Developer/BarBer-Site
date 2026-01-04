
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-40 bg-[#FAF9F6] text-black overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/4 h-full bg-black/[0.02] pointer-events-none"></div>
      
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 reveal">
          <div className="max-w-2xl">
            <span className="text-accent text-[10px] tracking-[0.6em] uppercase font-bold mb-6 block">Our Expertise</span>
            <h2 className="text-6xl md:text-8xl font-medium leading-[0.9] mb-8">
              Curated <br />
              <span className="italic serif">Experience</span>
            </h2>
          </div>
          <div className="max-w-xs mb-4">
            <p className="text-gray-500 font-light italic leading-relaxed">
              We transcend traditional barbering to deliver a meticulously tailored grooming ritual for the modern gentleman.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className="reveal group" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="relative mb-12 overflow-hidden aspect-[16/10]">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
                <div className="absolute top-8 left-8">
                  <span className="text-white text-5xl font-serif italic opacity-30 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-start border-b border-black/10 pb-8">
                <div>
                  <h4 className="text-3xl font-medium mb-4 group-hover:text-accent transition-colors">{service.name}</h4>
                  <p className="text-gray-500 text-sm font-light max-w-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] tracking-widest uppercase font-bold text-gray-400">{service.duration}</span>
                    <span className="w-4 h-[1px] bg-gray-200"></span>
                    <span className="text-[10px] tracking-widest uppercase font-bold text-accent">Signature Treatment</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-serif italic">{service.price}</span>
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
