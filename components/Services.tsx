
import React, { useState, useEffect } from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SERVICES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="py-40 bg-gradient-to-br from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A] text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24 reveal">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-16 h-[1px] bg-accent"></span>
            <span className="text-accent text-[10px] tracking-[0.6em] uppercase font-bold">Signature Services</span>
            <span className="w-16 h-[1px] bg-accent"></span>
          </div>
          <h2 className="text-6xl md:text-8xl font-medium leading-[0.9] mb-8">
            Crafted for <br />
            <span className="italic serif text-accent">Excellence</span>
          </h2>
          <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto leading-relaxed italic">
            Four signature experiences designed to elevate your grooming ritual to an art form
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              className="reveal group relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-white/5 hover:border-accent/30 transition-all duration-700"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Image Section */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-all duration-[3s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/50 to-transparent"></div>

                {/* Number Badge */}
                <div className="absolute top-8 left-8 w-16 h-16 flex items-center justify-center border-2 border-accent/30 group-hover:border-accent transition-all duration-500">
                  <span className="text-accent text-2xl font-serif italic">0{idx + 1}</span>
                </div>

                {/* Price Tag */}
                <div className="absolute top-8 right-8 bg-accent/90 backdrop-blur-sm px-6 py-3">
                  <span className="text-black text-2xl font-serif italic font-bold">{service.price}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-medium group-hover:text-accent transition-colors duration-300">
                    {service.name}
                  </h3>
                  <div className="flex items-center gap-2 text-accent">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-light">{service.duration}</span>
                  </div>
                </div>

                <p className="text-gray-400 font-light leading-relaxed mb-8 text-lg">
                  {service.description}
                </p>

                {/* CTA Button */}
                <a
                  href="#booking"
                  className="inline-flex items-center gap-3 text-accent text-[10px] tracking-[0.4em] uppercase font-bold group-hover:gap-6 transition-all duration-500"
                >
                  Book Now
                  <span className="text-lg">→</span>
                </a>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-accent/10 group-hover:border-accent/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto reveal">
          {[
            { label: 'Master Artisans', value: '12+' },
            { label: 'Years Experience', value: '15+' },
            { label: 'Happy Clients', value: '5K+' },
            { label: 'Five Star Reviews', value: '98%' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center border-l border-accent/20 pl-6">
              <div className="text-4xl md:text-5xl font-serif italic text-accent mb-3">{stat.value}</div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
