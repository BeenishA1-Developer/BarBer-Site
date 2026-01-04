
import React, { useState, useEffect, useCallback } from 'react';

const IMAGES = [
  'https://images.unsplash.com/photo-1593702275677-f916c6c70e4d?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1592647425550-d49d78ecac5e?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1621605815841-aa897bd0761d?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1200'
];

const GalleryCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-32 overflow-hidden bg-[#0A0A0A]">
      <div className="container mx-auto px-8 md:px-16 mb-20 reveal">
        <span className="text-accent text-[10px] tracking-[0.5em] uppercase font-bold mb-4 block">Visual Narrative</span>
        <h3 className="text-5xl md:text-6xl font-medium italic">Signature Aesthetics</h3>
      </div>

      <div className="relative h-[600px] md:h-[800px] flex items-center justify-center">
        {/* Carousel Container with Perspective */}
        <div className="relative w-full h-full max-w-7xl px-4 md:px-0" style={{ perspective: '2000px' }}>
          {IMAGES.map((url, index) => {
            const offset = (index - currentIndex + IMAGES.length) % IMAGES.length;
            let transform = '';
            let opacity = 0;
            let zIndex = 0;

            if (offset === 0) {
              // Active slide
              transform = 'translate3d(0, 0, 0) scale(1)';
              opacity = 1;
              zIndex = 30;
            } else if (offset === 1 || offset === -(IMAGES.length - 1)) {
              // Right slide
              transform = 'translate3d(40%, 0, -300px) rotateY(-15deg)';
              opacity = 0.4;
              zIndex = 20;
            } else if (offset === IMAGES.length - 1 || offset === -1) {
              // Left slide
              transform = 'translate3d(-40%, 0, -300px) rotateY(15deg)';
              opacity = 0.4;
              zIndex = 20;
            } else {
              // Hidden slides
              transform = 'translate3d(0, 0, -500px)';
              opacity = 0;
              zIndex = 10;
            }

            return (
              <div
                key={index}
                className="absolute inset-0 flex items-center justify-center transition-all duration-[1000ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{
                  transform,
                  opacity,
                  zIndex,
                }}
              >
                <div className="w-full h-[400px] md:h-full max-w-4xl relative group overflow-hidden">
                  <img
                    src={url}
                    alt={`Signature Style ${index + 1}`}
                    className="w-full h-full object-cover shadow-2xl grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700"></div>
                  {/* Subtle Frame */}
                  <div className="absolute inset-4 border border-white/5 pointer-events-none z-10"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-10 left-0 w-full z-40 flex flex-col items-center gap-12">
          {/* Progress Indicators */}
          <div className="flex gap-4">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(i);
                    setTimeout(() => setIsAnimating(false), 800);
                  }
                }}
                className={`h-[1px] transition-all duration-700 ${currentIndex === i ? 'w-16 bg-accent' : 'w-8 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>

          <div className="flex gap-20">
            <button 
              onClick={prevSlide}
              className="group flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase font-bold text-gray-500 hover:text-white transition-colors"
            >
              <span className="w-10 h-[1px] bg-gray-500 group-hover:bg-white group-hover:w-14 transition-all duration-500"></span>
              Prev
            </button>
            <button 
              onClick={nextSlide}
              className="group flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase font-bold text-gray-500 hover:text-white transition-colors"
            >
              Next
              <span className="w-10 h-[1px] bg-gray-500 group-hover:bg-white group-hover:w-14 transition-all duration-500"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
