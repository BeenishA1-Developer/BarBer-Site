
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

          {/* Brand & Newsletter */}
          <div className="lg:col-span-5">
            <span className="text-3xl font-medium tracking-tighter block mb-8 text-white">LUXE <span className="text-accent italic font-serif">BARBER</span></span>
            <p className="text-gray-500 text-lg leading-relaxed font-light mb-12 max-w-md">
              Elevating the art of male grooming. We don't just cut hair; we curate the visual narrative of your personal brand.
            </p>

            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-white font-bold mb-4">The Journal</p>
              <div className="flex border-b border-white/20 pb-4 max-w-xs transition-colors focus-within:border-accent">
                <input type="email" placeholder="Your email address" className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-gray-700" />
                <button className="text-accent text-xs uppercase tracking-widest font-bold hover:text-white transition-colors">Join</button>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white text-[10px] tracking-[0.5em] uppercase font-bold mb-8 opacity-50">Exploration</h4>
              <ul className="space-y-4 text-sm text-gray-500 font-light transition-all">
                <li><a href="#home" className="hover:text-accent hover:pl-2 transition-all duration-300">The Studio</a></li>
                <li><a href="#services" className="hover:text-accent hover:pl-2 transition-all duration-300">Services Menu</a></li>
                <li><a href="#team" className="hover:text-accent hover:pl-2 transition-all duration-300">Master Artisans</a></li>
                <li><a href="#booking" className="hover:text-accent hover:pl-2 transition-all duration-300">Reservations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-[10px] tracking-[0.5em] uppercase font-bold mb-8 opacity-50">Hours</h4>
              <ul className="space-y-4 text-sm text-gray-500 font-light">
                <li className="flex justify-between w-32"><span className="text-white">Mon - Thu</span> <span>09 — 21</span></li>
                <li className="flex justify-between w-32"><span className="text-white">Friday</span> <span>09 — 22</span></li>
                <li className="flex justify-between w-32"><span className="text-white">Saturday</span> <span>10 — 20</span></li>
                <li className="flex justify-between w-32"><span className="italic text-accent">Sunday</span> <span>Closed</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-[10px] tracking-[0.5em] uppercase font-bold mb-8 opacity-50">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-500 font-light">
                <li className="leading-relaxed">123 Luxury Avenue,<br />Manhattan, NYC 10001</li>
                <li className="text-white text-lg font-serif italic">+1 (212) 888 7766</li>
                <li><a href="mailto:concierge@luxebarber.com" className="hover:text-accent transition-colors">concierge@luxebarber.com</a></li>

                <div className="flex gap-6 mt-6">
                  {['IG', 'FB', 'YT'].map((s) => (
                    <a key={s} href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:border-accent hover:text-accent text-[10px] font-bold transition-all duration-300 text-gray-500">{s}</a>
                  ))}
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-gray-700">© 2024 LUXE BARBER COLLECTIVE.</p>
          <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase font-bold text-gray-700">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
