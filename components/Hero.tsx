
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = tiltRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      card.style.transform = `rotateY(${x * 15}deg) rotateX(${y * -15}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#080808] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-8 md:px-16 pt-32 md:pt-0 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 reveal">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-accent"></span>
              <p className="text-accent text-[10px] tracking-[0.6em] uppercase font-bold">New York — Heritage Since 2012</p>
            </div>
            
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-medium mb-10 leading-[0.9] tracking-tight">
              Mastering <br />
              <span className="italic text-accent">Style.</span>
            </h1>
            
            <p className="text-gray-400 text-lg font-light max-w-md mb-14 leading-relaxed italic">
              "Grooming is the secret of real elegance. The best clothes, the most expensive jewelry and the finest shoes are nothing without a great haircut."
            </p>
            
            <div className="flex flex-wrap items-center gap-12">
              <a href="#booking" className="bg-accent text-white px-12 py-5 text-[11px] font-bold tracking-[0.3em] uppercase transition-all hover:bg-white hover:text-black">
                Book Appointment
              </a>
              
              <a href="#services" className="nav-link flex items-center gap-4 group">
                Menu
                <span className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-accent transition-all duration-500"></span>
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center reveal" style={{ transitionDelay: '300ms' }}>
            <div className="tilt-container">
              <div 
                ref={tiltRef} 
                className="tilt-card relative w-[320px] md:w-[450px] aspect-[4/5] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
                style={{ transition: 'transform 0.2s ease-out' }}
              >
                {/* Main 3D Card Content */}
                <div className="absolute inset-0 overflow-hidden bg-[#111]">
                  <img 
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=95&w=1200" 
                    alt="Signature Grooming" 
                    className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
                
                {/* Floating Elements for depth */}
                <div className="absolute -top-10 -right-10 w-40 h-40 border border-accent/20 translate-z-10 pointer-events-none"></div>
                <div className="absolute -bottom-6 -left-6 bg-accent p-6 translate-z-20 shadow-xl hidden md:block">
                  <span className="text-white text-[10px] tracking-[0.3em] uppercase font-bold block">Exclusive</span>
                  <span className="text-white text-3xl font-serif italic">Artistry</span>
                </div>
                
                {/* Visual Accent */}
                <div className="absolute top-1/2 -right-4 w-[1px] h-32 bg-accent/40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <span className="text-[9px] tracking-[0.5em] uppercase font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
