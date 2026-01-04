
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-24 mb-32">
          <div className="max-w-md">
            <span className="text-2xl font-medium tracking-[0.4em] uppercase block mb-10">Luxe Barber</span>
            <p className="text-gray-500 text-base leading-relaxed font-light mb-12 italic">
              "We don't just cut hair; we curate the visual narrative of your personal brand. Excellence is our only standard."
            </p>
            <div className="flex gap-12">
              {['Instagram', 'LinkedIn', 'YouTube'].map((s) => (
                <a key={s} href="#" className="group relative text-[10px] tracking-[0.3em] uppercase font-bold text-gray-500 overflow-hidden">
                  <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">{s}</span>
                  <span className="absolute left-0 top-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-accent">{s}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
            <div>
              <h4 className="text-accent text-[10px] tracking-[0.5em] uppercase font-bold mb-10">Studio Map</h4>
              <ul className="space-y-6 text-[11px] tracking-widest uppercase font-bold text-gray-500">
                <li><a href="#home" className="hover:text-white transition-colors">Frontier</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">The Menu</a></li>
                <li><a href="#consultation" className="hover:text-white transition-colors">AI Studio</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Artisans</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-accent text-[10px] tracking-[0.5em] uppercase font-bold mb-10">Availability</h4>
              <ul className="space-y-6 text-xs text-gray-500 font-light">
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Mon - Thu</span> <span className="text-white">09 — 21</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Friday</span> <span className="text-white">09 — 22</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Saturday</span> <span className="text-white">10 — 20</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span className="text-accent italic font-bold">Privé Sessions</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-accent text-[10px] tracking-[0.5em] uppercase font-bold mb-10">Inquiries</h4>
              <ul className="space-y-6 text-xs text-gray-500 font-light">
                <li>123 Luxury Avenue,<br />Manhattan, NYC 10001</li>
                <li className="text-white font-medium">+1 (212) 888 7766</li>
                <li>concierge@luxebarber.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] tracking-[0.3em] uppercase font-bold text-gray-600">
          <p>© 2024 LUXE BARBER COLLECTIVE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
