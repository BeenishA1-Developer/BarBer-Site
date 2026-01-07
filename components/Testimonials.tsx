import React, { useState, useEffect } from 'react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'James Harrison',
      role: 'Tech Executive',
      company: 'Silicon Valley',
      content: 'The attention to detail is truly unparalleled. Every visit feels like a master-class in precision and service. They don\'t just cut hair—they craft confidence.',
      rating: 5,
      image: 'JH'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Fashion Director',
      company: 'NYC',
      content: 'A perfect blend of old-world charm and modern precision. They understand the essence of contemporary style and deliver it flawlessly every single time.',
      rating: 5,
      image: 'MC'
    },
    {
      id: 3,
      name: 'David Martinez',
      role: 'CEO',
      company: 'Fortune 500',
      content: 'Not just a haircut—an experience. The professionalism and care they bring transforms your entire appearance and elevates your presence.',
      rating: 5,
      image: 'DM'
    },
    {
      id: 4,
      name: 'Sebastian Williams',
      role: 'Fashion Consultant',
      company: 'London',
      content: 'Their artisans are true craftsmen. Every session leaves me looking and feeling like the best version of myself. Absolutely world-class.',
      rating: 5,
      image: 'SW'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-40 bg-gradient-to-b from-[#FAF9F6] to-[#F5F4F0] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20"></div>

      <div className="container mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24 reveal">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-16 h-[1px] bg-accent"></span>
            <span className="text-accent text-[10px] tracking-[0.6em] uppercase font-bold">Client Testimonials</span>
            <span className="w-16 h-[1px] bg-accent"></span>
          </div>
          <h2 className="text-6xl md:text-8xl font-medium leading-[0.9] mb-8 text-black">
            Voices of <br />
            <span className="italic serif text-accent">Excellence</span>
          </h2>
          <p className="text-gray-700 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Distinguished gentlemen share their experiences with Luxe Barber
          </p>
        </div>

        {/* Featured Testimonial - Large Carousel */}
        <div className="max-w-6xl mx-auto mb-24 reveal">
          <div className="relative bg-white border-2 border-black/5 shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Quote */}
              <div className="p-16 flex flex-col justify-center bg-gradient-to-br from-black to-[#1A1A1A] text-white">
                {/* Large Quote Mark */}
                <div className="text-accent text-8xl font-serif leading-none mb-8 opacity-30">"</div>

                <p className="text-2xl md:text-3xl font-light leading-relaxed mb-12 italic">
                  {testimonials[activeIndex].content}
                </p>

                {/* Stars */}
                <div className="flex gap-2 mb-8">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <span key={i} className="text-accent text-2xl">★</span>
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-black text-xl font-bold">{testimonials[activeIndex].image}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">{testimonials[activeIndex].name}</h4>
                    <p className="text-gray-400 text-sm">{testimonials[activeIndex].role}</p>
                    <p className="text-accent text-xs tracking-wider uppercase">{testimonials[activeIndex].company}</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className="relative h-96 md:h-auto bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="text-9xl font-serif italic text-accent/20 mb-6">5.0</div>
                  <div className="flex gap-2 justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent text-3xl">★</span>
                    ))}
                  </div>
                  <p className="text-black/60 text-sm tracking-[0.3em] uppercase font-bold">Average Rating</p>
                  <p className="text-black/40 text-xs mt-2">Based on 500+ reviews</p>
                </div>

                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-accent/20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-accent/20"></div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-16 flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-[3px] transition-all duration-500 ${activeIndex === idx ? 'w-16 bg-accent' : 'w-8 bg-white/30 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-24">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="reveal group bg-white border border-black/5 p-8 hover:shadow-2xl hover:border-accent/30 transition-all duration-500 cursor-pointer"
              style={{ transitionDelay: `${idx * 100}ms` }}
              onClick={() => setActiveIndex(idx)}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 font-light text-sm leading-relaxed mb-6 line-clamp-4">
                "{testimonial.content}"
              </p>

              {/* Client */}
              <div className="flex items-center gap-3 pt-6 border-t border-black/5">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-xs">{testimonial.image}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-black font-medium text-sm truncate">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs truncate">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* CTA */}
        <div className="mt-24 text-center reveal">
          <p className="text-gray-600 font-light mb-8 text-lg italic">
            Experience the difference that hundreds of distinguished clients trust
          </p>
          <a
            href="#booking"
            className="inline-block px-16 py-6 bg-accent text-black text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-black hover:text-accent border-2 border-accent transition-all duration-500 shadow-lg hover:shadow-2xl"
          >
            Book Your Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
