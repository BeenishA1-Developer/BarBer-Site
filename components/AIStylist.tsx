
import React, { useState } from 'react';
import { getStyleAdvice } from '../services/geminiService';

const AIStylist: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    const advice = await getStyleAdvice(input);
    setResult(advice);
    setIsLoading(false);
  };

  return (
    <section id="consultation" className="py-32 relative overflow-hidden bg-black">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[160px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass max-w-6xl mx-auto rounded-[4rem] p-10 md:p-20 flex flex-col lg:flex-row gap-20 items-center border-white/5 shadow-inner">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#d4af37]/20 mb-8">
               <span className="text-[#d4af37] text-[10px] tracking-[0.4em] font-bold uppercase">Intelligence meets Style</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black mb-8 font-serif leading-tight">AI <span className="italic gold-text">Persona</span> Stylist</h3>
            <p className="text-gray-400 mb-12 leading-relaxed text-lg font-light">
              Experience the future of grooming. Our neural network analyzes facial geometry and lifestyle trends to curate your perfect signature look.
            </p>
            
            <form onSubmit={handleConsult} className="relative group">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 focus-within:border-[#d4af37]/30 transition-all shadow-inner">
                <textarea 
                  className="w-full bg-transparent border-none text-white placeholder-gray-600 focus:outline-none min-h-[140px] resize-none text-lg font-light"
                  placeholder="Describe your hair type, face shape, or the vibe you desire..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <div className="flex justify-end mt-4">
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="gold-bg text-black px-10 py-4 rounded-2xl font-black text-xs tracking-widest hover:scale-105 transition-transform disabled:opacity-50 active:scale-95 shadow-xl flex items-center gap-3"
                  >
                    {isLoading ? (
                      <div className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full"></div>
                    ) : (
                      <>
                        ANALYZE STYLE
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-black/60 rounded-[3rem] p-12 min-h-[400px] flex flex-col justify-center border border-white/5 relative overflow-hidden group shadow-2xl">
              {result ? (
                <div className="relative z-10 animate-fade-in">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 gold-bg rounded-2xl flex items-center justify-center text-black font-black italic shadow-lg">S</div>
                    <div>
                      <h4 className="font-bold text-white tracking-widest text-[10px] uppercase">Stylist's Recommendation</h4>
                      <p className="text-gray-500 text-[10px]">Neural Processing Complete</p>
                    </div>
                  </div>
                  <p className="text-2xl italic font-serif leading-relaxed text-gray-100 mb-8 border-l-2 border-[#d4af37] pl-8">
                    "{result}"
                  </p>
                  <a href="#booking" className="text-[10px] tracking-[0.3em] font-bold text-[#d4af37] hover:text-white transition-colors flex items-center gap-2">
                    BOOK THIS LOOK <span className="text-xl">→</span>
                  </a>
                </div>
              ) : (
                <div className="text-center text-white/20">
                  <div className="w-24 h-24 mx-auto mb-8 border-2 border-dashed border-white/10 rounded-full flex items-center justify-center animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="font-black tracking-[0.4em] uppercase text-[10px]">Awaiting Your Profile</p>
                </div>
              )}
              {/* Subtle Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStylist;
