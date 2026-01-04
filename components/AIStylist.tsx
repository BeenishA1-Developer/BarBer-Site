
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
    <section id="consultation" className="py-40 bg-[#050505] relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(163,134,82,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="max-w-6xl mx-auto reveal">
          <div className="flex flex-col lg:flex-row items-stretch bg-[#0F0F0F] border border-white/5 shadow-2xl overflow-hidden">
            <div className="lg:w-1/2 p-12 md:p-24 border-r border-white/5">
              <span className="text-accent text-[10px] tracking-[0.6em] uppercase font-bold mb-6 block">Intelligence</span>
              <h2 className="text-5xl md:text-6xl font-medium mb-10 leading-tight">Virtual <br /><span className="italic serif">Style Curator</span></h2>
              <p className="text-gray-400 font-light mb-16 text-base leading-relaxed max-w-md">
                Leverage our proprietary AI analysis to discover a look that harmonizes with your bone structure, hair texture, and lifestyle.
              </p>
              
              <form onSubmit={handleConsult} className="space-y-12">
                <div className="relative group">
                  <label className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-500 group-focus-within:text-accent transition-colors block mb-4">Input Profile Details</label>
                  <textarea 
                    className="w-full bg-transparent border-b border-white/10 py-6 text-white placeholder-gray-700 focus:outline-none focus:border-accent transition-all text-lg font-light min-h-[120px] resize-none"
                    placeholder="Describe your hair type, face shape, or desired aesthetic..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="relative group bg-white text-black px-12 py-5 text-[11px] font-bold tracking-[0.3em] uppercase overflow-hidden disabled:opacity-50"
                >
                  <span className="relative z-10">{isLoading ? 'Consulting Experts...' : 'Generate Signature Look'}</span>
                  <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
              </form>
            </div>

            <div className="lg:w-1/2 bg-black/40 backdrop-blur-3xl p-12 md:p-24 flex flex-col justify-center relative">
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-white/5"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-white/5"></div>

              {result ? (
                <div className="animate-fade-in">
                  <div className="flex items-center gap-4 mb-10">
                    <span className="w-8 h-[1px] bg-accent"></span>
                    <span className="text-[10px] tracking-[0.4em] text-accent uppercase font-bold">The Verdict</span>
                  </div>
                  <p className="text-3xl md:text-4xl font-light italic leading-relaxed text-gray-100">
                    "{result}"
                  </p>
                  <div className="mt-16 flex items-center gap-8">
                    <div className="h-[1px] flex-grow bg-white/10"></div>
                    <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-gray-600">Luxe Barber AI • v2.5</span>
                  </div>
                </div>
              ) : (
                <div className="text-center opacity-30">
                  <div className="mb-8 inline-block p-10 border border-white/5 rounded-full">
                    <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="text-[10px] tracking-[0.5em] uppercase text-gray-600 italic">Analysis Engine Standby</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStylist;
