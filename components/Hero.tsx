
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
      
      card.style.transform = `rotateY(${x * 12}deg) rotateX(${y * -12}deg)`;
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
    <section id="home" className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden">
      {/* Cinematic Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Salon Background" 
          className="w-full h-full object-cover opacity-30 grayscale brightness-50"
          loading="eager"
        />
        {/* Multi-layered Gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-8 md:px-16 pt-32 lg:pt-0 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text content - High Z-index */}
          <div className="w-full lg:w-3/5 reveal relative z-30">
            <div className="flex items-center gap-6 mb-8">
              <span className="w-16 h-[1px] bg-accent"></span>
              <p className="text-accent text-[10px] tracking-[0.7em] uppercase font-bold">Heritage Grooming — NYC</p>
            </div>
            
            <h1 className="text-7xl md:text-8xl lg:text-[110px] font-medium mb-10 leading-[0.85] tracking-tighter text-white drop-shadow-2xl">
              Sovereign <br />
              <span className="italic text-accent serif">Artistry.</span>
            </h1>
            
            <div className="max-w-md mb-16">
              <p className="text-gray-300 text-xl font-light leading-relaxed italic border-l-2 border-accent/40 pl-8">
                Transcend the ordinary. We curate grooming experiences that define your personal narrative with surgical precision.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-12">
              {/* Cleaned up Button - No extra boxes */}
              <a href="#booking" className="px-12 py-5 bg-accent text-white text-[11px] font-bold tracking-[0.4em] uppercase transition-all duration-300 hover:bg-white hover:text-black">
                Reserve Seat
              </a>
              
              <a href="#services" className="group flex items-center gap-6 text-[10px] tracking-[0.5em] uppercase font-bold text-gray-400 hover:text-white transition-colors">
                The Menu
                <span className="w-10 h-[1px] bg-white/20 group-hover:w-20 group-hover:bg-accent transition-all duration-700"></span>
              </a>
            </div>
          </div>
          
          {/* Floating 3D Component - Pushed back to prevent text overlap */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end reveal z-10" style={{ transitionDelay: '500ms' }}>
            <div className="tilt-container">
              <div 
                ref={tiltRef} 
                className="tilt-card relative w-[260px] md:w-[380px] aspect-[4/5] shadow-[0_60px_100px_-20px_rgba(0,0,0,0.9)]"
              >
                {/* Image Frame */}
                <div className="absolute inset-0 overflow-hidden bg-[#0a0a0a] border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=85&w=800" 
                    alt="Signature Style" 
                    className="w-full h-full object-cover grayscale brightness-[0.8] hover:grayscale-0 transition-all duration-[2s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
                
                {/* Visual Details */}
                <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-accent/20 pointer-events-none"></div>
                <div className="absolute -bottom-4 -left-4 bg-accent/90 p-6 shadow-3xl">
                  <span className="text-white text-[9px] tracking-[0.4em] uppercase font-bold block mb-1">Authentic</span>
                  <span className="text-white text-2xl font-serif italic block">Est. 2012</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-30">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-[9px] tracking-[0.8em] uppercase font-bold text-white">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
