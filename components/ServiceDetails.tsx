import React from 'react';

const ServiceDetails: React.FC = () => {
  const serviceDetails = [
    {
      name: 'The Essential Cut',
      price: '$55',
      duration: '60 mins',
      description: 'Our signature offering. A precision-tailored cut including traditional neck shave and personalized styling.',
      includes: [
        'Custom haircut matched to face shape',
        'Traditional straight-razor neck shave',
        'Hot towel treatment',
        'Styling consultation',
        'Premium product application'
      ]
    },
    {
      name: 'Beard Refinery',
      price: '$40',
      duration: '45 mins',
      description: 'Sculpting and conditioning focused on facial structure, utilizing organic oils and specialized techniques.',
      includes: [
        'Beard shaping and sculpting',
        'Length and density management',
        'Organic oil conditioning',
        'Texture enhancement',
        'Growth guidance'
      ]
    },
    {
      name: 'Signature Shave',
      price: '$65',
      duration: '50 mins',
      description: 'The ultimate straight-razor ritual with triple hot towels and botanical skin calming treatments.',
      includes: [
        'Triple hot towel therapy',
        'Straight-razor shave',
        'Pre-shave oil treatment',
        'Botanical skin balm',
        'Post-shave moisturizer'
      ]
    },
    {
      name: 'Dermal Therapy',
      price: '$85',
      duration: '60 mins',
      description: 'A deep-cleansing facial designed specifically for men\'s unique skin needs and sensitivities.',
      includes: [
        'Custom skin analysis',
        'Deep cleansing treatment',
        'Exfoliation therapy',
        'Anti-aging serum application',
        'Moisturizing mask',
        'Customized skincare regimen'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-black pt-24 pb-16">
      <div className="container mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-20">
          <h1 className="text-6xl md:text-7xl font-medium mb-8 leading-tight">
            Our <span className="italic serif">Services</span>
          </h1>
          <p className="text-xl text-gray-600 font-light italic max-w-2xl">
            Each service is a carefully curated experience designed to elevate your appearance and confidence. Our artisans blend time-tested techniques with contemporary vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {serviceDetails.map((service, idx) => (
            <div key={idx} className="group">
              {/* Service Card */}
              <div className="border border-black/10 p-10 bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-medium mb-2 group-hover:text-accent transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-500 text-[10px] tracking-[0.3em] uppercase font-bold">
                      {service.duration}
                    </p>
                  </div>
                  <span className="text-3xl font-serif italic text-accent">{service.price}</span>
                </div>

                <p className="text-gray-600 mb-8 font-light leading-relaxed">
                  {service.description}
                </p>

                {/* What's Included */}
                <div className="mb-8">
                  <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-black/60 mb-4">What's Included</h4>
                  <ul className="space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-accent mt-1">✓</span>
                        <span className="text-gray-700 font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Button */}
                <a href="#booking" className="block w-full py-3 border border-black text-black text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-black hover:text-white transition-all text-center">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-5xl font-medium mb-12 leading-tight">Why Choose Luxe Barber?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: 'Expert Craftsmanship',
                desc: 'Our master barbers bring 12-18 years of experience. Each cut is a masterpiece.'
              },
              {
                title: 'Premium Products',
                desc: 'We use only the finest grooming products from around the world.'
              },
              {
                title: 'Personalized Experience',
                desc: 'Every appointment is tailored to your unique needs and preferences.'
              },
              {
                title: 'Professional Environment',
                desc: 'A sophisticated space designed for relaxation and excellence.'
              },
              {
                title: 'Attention to Detail',
                desc: 'We believe in perfection in every stroke and every treatment.'
              },
              {
                title: 'Consultation Included',
                desc: 'All services include complimentary style advice from our experts.'
              }
            ].map((item, idx) => (
              <div key={idx} className="border-l-2 border-accent pl-6">
                <h4 className="text-2xl font-medium mb-3">{item.title}</h4>
                <p className="text-gray-600 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section className="bg-black text-white p-12 md:p-16 max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl font-medium mb-12">Premium Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-accent/30 p-8">
              <h3 className="text-2xl font-medium mb-4 text-accent">Weekly Ritual</h3>
              <p className="text-gray-400 mb-6 font-light">Maintain your signature look</p>
              <p className="text-3xl font-serif mb-4">$180<span className="text-lg text-gray-400 font-sans">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> 4 Essential Cuts
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Priority Booking
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> 10% Product Discount
                </li>
              </ul>
              <button className="w-full py-3 border border-accent text-accent hover:bg-accent hover:text-black transition-all font-bold text-[10px] tracking-[0.2em] uppercase">
                Subscribe
              </button>
            </div>

            <div className="border border-accent p-8 bg-accent/5">
              <h3 className="text-2xl font-medium mb-4">Executive Elite</h3>
              <p className="text-gray-400 mb-6 font-light">Complete grooming mastery</p>
              <p className="text-3xl font-serif mb-4">$350<span className="text-lg text-gray-400 font-sans">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Unlimited Cuts & Shaves
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Monthly Dermal Therapy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Personal Barber Assignment
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> 25% Product Discount
                </li>
              </ul>
              <button className="w-full py-3 bg-accent text-black hover:shadow-lg transition-all font-bold text-[10px] tracking-[0.2em] uppercase">
                Become Elite
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-medium mb-6">Ready for Your Transformation?</h2>
          <p className="text-gray-600 mb-8 font-light text-lg">
            Schedule your first appointment today and experience the Luxe Barber difference.
          </p>
          <a href="#booking" className="inline-block px-12 py-5 bg-black text-white text-[11px] font-bold tracking-[0.3em] uppercase hover:shadow-lg transition-all">
            Reserve Your Seat
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
