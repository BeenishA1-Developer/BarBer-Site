
import React from 'react';
import { BARBERS } from '../constants';

const Barbers: React.FC = () => {
  return (
    <section id="barbers" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-[#d4af37] font-semibold tracking-widest mb-4">THE MASTERS</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-serif">Meet Our Elite Team</h3>
          </div>
          <p className="text-gray-400 max-w-sm">
            Years of experience combined with a passion for precision. Meet the hands behind the cuts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {BARBERS.map((barber) => (
            <div key={barber.id} className="relative group overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                <img 
                  src={barber.image} 
                  alt={barber.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="glass p-6 rounded-2xl">
                  <h4 className="text-2xl font-bold mb-1">{barber.name}</h4>
                  <p className="text-[#d4af37] text-sm font-semibold mb-3 uppercase tracking-widest">{barber.specialty}</p>
                  <div className="w-full h-[1px] bg-white/10 mb-3"></div>
                  <p className="text-gray-400 text-xs">{barber.experience} Professional Experience</p>
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
