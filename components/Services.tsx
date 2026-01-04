
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#d4af37] font-semibold tracking-widest mb-4">OUR SERVICES</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Craftsmanship In Every Cut</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative glass rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold font-serif">{service.name}</h4>
                  <span className="text-[#d4af37] font-bold">{service.price}</span>
                </div>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{service.duration.toUpperCase()}</span>
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
