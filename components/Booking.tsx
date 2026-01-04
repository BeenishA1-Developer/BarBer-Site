
import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    service: '',
    barber: '',
    date: '',
    time: '09:00 AM'
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date || !formData.time) {
        alert("Please select a date and time.");
        return;
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form after successful booking
    setStep(1);
    setFormData({
      service: '',
      barber: '',
      date: '',
      time: '09:00 AM'
    });
  };

  return (
    <section id="booking" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-[#d4af37]/10">
          <div className="md:w-1/3 gold-bg p-12 text-black flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-6 font-serif">Reserve Your Chair</h3>
              <div className="space-y-6">
                <div className={`flex items-center gap-4 transition-all ${step >= 1 ? 'opacity-100' : 'opacity-40'}`}>
                  <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-bold">1</div>
                  <span className="font-bold text-sm tracking-widest">SERVICE</span>
                </div>
                <div className={`flex items-center gap-4 transition-all ${step >= 2 ? 'opacity-100' : 'opacity-40'}`}>
                  <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-bold">2</div>
                  <span className="font-bold text-sm tracking-widest">BARBER</span>
                </div>
                <div className={`flex items-center gap-4 transition-all ${step >= 3 ? 'opacity-100' : 'opacity-40'}`}>
                  <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-bold">3</div>
                  <span className="font-bold text-sm tracking-widest">SCHEDULE</span>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-70">NEED HELP?</p>
              <p className="text-lg font-bold underline">+1 (234) 567-890</p>
            </div>
          </div>

          <div className="md:w-2/3 p-12">
            {step === 1 && (
              <div className="animate-fade-in">
                <h4 className="text-2xl font-bold mb-8">Select a Service</h4>
                <div className="grid grid-cols-1 gap-4">
                  {['Executive Haircut', 'Beard Grooming', 'The Signature Shave', 'Complete Package'].map((s) => (
                    <button 
                      key={s}
                      onClick={() => { setFormData({...formData, service: s}); nextStep(); }}
                      className={`w-full p-6 rounded-2xl border transition-all text-left flex justify-between items-center ${formData.service === s ? 'border-[#d4af37] bg-[#d4af37]/5' : 'border-white/5 hover:border-white/20'}`}
                    >
                      <span className="font-semibold">{s}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-40" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <h4 className="text-2xl font-bold mb-8">Choose Your Master Barber</h4>
                <div className="grid grid-cols-1 gap-4">
                  {['Marco V.', 'Julian S.', 'Leo R.', 'Anyone Available'].map((b) => (
                    <button 
                      key={b}
                      onClick={() => { setFormData({...formData, barber: b}); nextStep(); }}
                      className={`w-full p-6 rounded-2xl border transition-all text-left flex justify-between items-center ${formData.barber === b ? 'border-[#d4af37] bg-[#d4af37]/5' : 'border-white/5 hover:border-white/20'}`}
                    >
                      <span className="font-semibold">{b}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-40" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  ))}
                </div>
                <button onClick={prevStep} className="mt-8 text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Back
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in">
                <h4 className="text-2xl font-bold mb-8">Confirm Details</h4>
                <div className="bg-white/5 p-8 rounded-3xl space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-500 uppercase text-[10px] tracking-widest font-bold">Service</span>
                    <span className="font-bold">{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 uppercase text-[10px] tracking-widest font-bold">Barber</span>
                    <span className="font-bold">{formData.barber}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <input 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d4af37]" 
                  />
                  <select 
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="03:30 PM">03:30 PM</option>
                  </select>
                </div>
                <button 
                  onClick={handleConfirm}
                  className="w-full py-5 gold-bg text-black font-bold rounded-2xl hover:scale-[1.02] transition-transform active:scale-95 shadow-xl"
                >
                  CONFIRM BOOKING
                </button>
                <button onClick={prevStep} className="mt-8 text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="glass max-w-lg w-full rounded-[2.5rem] p-10 border border-[#d4af37]/30 shadow-2xl relative">
            <div className="text-center mb-8">
              <div className="w-20 h-20 gold-bg rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold font-serif mb-2">Booking Confirmed</h3>
              <p className="text-gray-400">Your appointment is scheduled! See you soon.</p>
            </div>

            <div className="space-y-4 bg-white/5 rounded-2xl p-6 mb-10 border border-white/5">
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-[10px] tracking-widest uppercase font-bold text-gray-500">Service</span>
                <span className="font-bold text-[#d4af37]">{formData.service}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-[10px] tracking-widest uppercase font-bold text-gray-500">Barber</span>
                <span className="font-bold">{formData.barber}</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-[10px] tracking-widest uppercase font-bold text-gray-500">Date</span>
                <span className="font-bold">{new Date(formData.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] tracking-widest uppercase font-bold text-gray-500">Time</span>
                <span className="font-bold">{formData.time}</span>
              </div>
            </div>

            <button 
              onClick={closeModal}
              className="w-full py-4 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-bold rounded-xl transition-all duration-300"
            >
              CLOSE SUMMARY
            </button>
            
            {/* Close icon top right */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Booking;
