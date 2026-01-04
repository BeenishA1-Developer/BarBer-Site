
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
    <section id="consultation" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      
      <div className="container mx-auto px-6">
        <div className="glass max-w-5xl mx-auto rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-[#d4af37] font-semibold tracking-widest mb-4">SMART GROOMING</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 font-serif">AI Style Consultant</h3>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Not sure which cut suits your face shape? Describe your features or the vibe you're going for, and our AI Master Stylist will recommend the perfect look.
            </p>
            
            <form onSubmit={handleConsult} className="relative group">
              <textarea 
                className="w-full bg-black/40 border border-white/10 rounded-2xl p-6 text-white placeholder-gray-600 focus:outline-none focus:border-[#d4af37]/50 transition-all min-h-[120px] resize-none"
                placeholder="Ex: I have an oval face and I want something low maintenance but sharp for the office..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="absolute bottom-4 right-4 gold-bg text-black p-4 rounded-xl hover:scale-105 transition-transform disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="animate-spin h-6 w-6 border-2 border-black border-t-transparent rounded-full"></div>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
              </button>
            </form>
          </div>

          <div className="md:w-1/2 w-full">
            <div className="bg-white/5 rounded-3xl p-8 min-h-[300px] flex flex-col justify-center border border-white/5 relative overflow-hidden">
              {result ? (
                <div className="relative z-10 animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-[2px] bg-[#d4af37]"></div>
                    <span className="text-[10px] tracking-[0.3em] font-bold text-[#d4af37]">MASTER ADVICE</span>
                  </div>
                  <p className="text-xl italic font-serif leading-relaxed text-gray-200">
                    "{result}"
                  </p>
                </div>
              ) : (
                <div className="text-center text-gray-600 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <p className="font-semibold tracking-wide uppercase text-sm">Advice will appear here</p>
                </div>
              )}
              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 p-4 opacity-10">
                <div className="w-24 h-24 gold-bg rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStylist;
