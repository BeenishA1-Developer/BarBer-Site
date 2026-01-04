
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gold-bg rounded-full flex items-center justify-center text-black font-bold text-xl">L</div>
              <span className="text-xl font-bold tracking-widest gold-text">LUXE BARBER</span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Elevating the art of grooming since 2012. We provide an unparalleled experience for the modern gentleman.
            </p>
            <div className="flex gap-4">
              {['FB', 'IG', 'TW', 'YT'].map((s) => (
                <a key={s} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-xs font-bold hover:border-[#d4af37] hover:text-[#d4af37] transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-serif">Quick Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#consultation" className="hover:text-white transition-colors">AI Stylist</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-serif">Working Hours</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="flex justify-between"><span>Mon - Fri</span> <span className="text-white">09 AM - 09 PM</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span className="text-white">10 AM - 08 PM</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span className="text-[#d4af37]">CLOSED</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 font-serif">Contact Info</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                123 Elegance St, Manhattan, NY
              </li>
              <li className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@luxebarber.com
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
          <p>© 2024 LUXE BARBER. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
