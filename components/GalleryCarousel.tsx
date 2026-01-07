
import React, { useState, useEffect, useCallback } from 'react';

const IMAGES = [
  '/assets/service-cut.png',
  '/assets/service-beard.png',
  '/assets/service-shave.png',
  '/assets/service-facial.png',
  '/assets/hero-background.png',
  '/assets/hero-signature.png'
];

const GalleryCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));

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
    const nextIdx = (currentIndex + 1) % IMAGES.length;
    const prevIdx = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
    setLoadedImages(prev => new Set([...prev, currentIndex, nextIdx, prevIdx]));
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="py-40 overflow-hidden bg-[#080808]">
      <div className="container mx-auto px-8 md:px-16 mb-24 reveal">
        <div className="flex items-center gap-6 mb-4">
          <span className="w-12 h-[1px] bg-accent"></span>
          <span className="text-accent text-[10px] tracking-[0.6em] uppercase font-bold block">The Visual Portfolio</span>
        </div>
        <h3 className="text-6xl md:text-7xl font-medium italic text-white leading-tight">Mastery in <br />Every Detail</h3>
      </div>

      <div className="relative h-[500px] md:h-[700px] flex items-center justify-center">
        <div className="relative w-full h-full max-w-7xl" style={{ perspective: '2000px' }}>
          {IMAGES.map((url, index) => {
            const offset = (index - currentIndex + IMAGES.length) % IMAGES.length;

            let transform = '';
            let opacity = 0;
            let zIndex = 0;

            if (offset === 0) {
              transform = 'translate3d(0, 0, 0) scale(1)';
              opacity = 1;
              zIndex = 30;
            } else if (offset === 1 || offset === -(IMAGES.length - 1)) {
              transform = 'translate3d(35%, 0, -500px) rotateY(-30deg)';
              opacity = 0.3;
              zIndex = 20;
            } else if (offset === IMAGES.length - 1 || offset === -1) {
              transform = 'translate3d(-35%, 0, -500px) rotateY(30deg)';
              opacity = 0.3;
              zIndex = 20;
            } else {
              transform = 'translate3d(0, 0, -1000px)';
              opacity = 0;
              zIndex = 10;
            }

            return (
              <div
                key={index}
                className="absolute inset-0 flex items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform, opacity, zIndex }}
              >
                <div className="w-full h-[400px] md:h-[600px] max-w-4xl relative group overflow-hidden border border-white/10 bg-[#111]">
                  {loadedImages.has(index) && (
                    <img
                      src={url}
                      alt={`Grooming Gallery ${index + 1}`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[3s]"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="absolute bottom-4 left-0 w-full z-40 flex flex-col items-center gap-12">
          <div className="flex gap-4">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => !isAnimating && setCurrentIndex(i)}
                className={`h-[1px] transition-all duration-1000 ${currentIndex === i ? 'w-16 bg-accent' : 'w-8 bg-white/10'}`}
              />
            ))}
          </div>
          <div className="flex gap-24">
            <button onClick={prevSlide} className="text-[10px] tracking-[0.5em] uppercase font-bold text-gray-600 hover:text-white transition-all">Back</button>
            <button onClick={nextSlide} className="text-[10px] tracking-[0.5em] uppercase font-bold text-gray-600 hover:text-white transition-all">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
