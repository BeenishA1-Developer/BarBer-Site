
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
    setStep(1);
    setFormData({ service: '', barber: '', date: '', time: '09:00 AM' });
  };

  return (
    <section id="booking" className="py-32 bg-white text-black">
      <div className="container mx-auto px-8 md:px-16">
        <div className="max-w-3xl mx-auto reveal">
          <div className="text-center mb-20">
            <h2 className="text-xs tracking-[0.5em] uppercase text-accent font-bold mb-4">Reservation</h2>
            <h3 className="text-5xl md:text-6xl font-medium italic">Book Your Experience</h3>
          </div>

          <div className="flex justify-center gap-10 mb-16">
            {[1, 2, 3].map(s => (
              <div key={s} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border ${step >= s ? 'bg-black text-white border-black' : 'border-black/10 text-black/20'}`}>
                  {s}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#F8F8F8] p-10 md:p-16 border border-black/5 min-h-[400px]">
            {step === 1 && (
              <div className="space-y-6">
                <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-400 mb-8 text-center">Step 01 — Select Service</p>
                <div className="grid grid-cols-1 gap-4">
                  {['The Essential Cut', 'Beard Refinery', 'Signature Shave', 'Dermal Therapy'].map((s) => (
                    <button 
                      key={s}
                      onClick={() => { setFormData({...formData, service: s}); nextStep(); }}
                      className={`w-full py-6 px-8 text-left border transition-all flex justify-between items-center group ${formData.service === s ? 'border-accent bg-white' : 'border-black/5 bg-white hover:border-black/20'}`}
                    >
                      <span className="text-lg font-medium">{s}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent">Select</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-400 mb-8 text-center">Step 02 — Select Artisan</p>
                <div className="grid grid-cols-1 gap-4">
                  {['Julian M.', 'Sebastian V.', 'Marco R.', 'Anyone Available'].map((b) => (
                    <button 
                      key={b}
                      onClick={() => { setFormData({...formData, barber: b}); nextStep(); }}
                      className={`w-full py-6 px-8 text-left border transition-all flex justify-between items-center group ${formData.barber === b ? 'border-accent bg-white' : 'border-black/5 bg-white hover:border-black/20'}`}
                    >
                      <span className="text-lg font-medium">{b}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent">Select</span>
                    </button>
                  ))}
                </div>
                <button onClick={prevStep} className="mt-8 text-gray-400 hover:text-black transition-colors text-[10px] tracking-[0.2em] uppercase font-bold">← Back</button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-10">
                <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-400 mb-8 text-center">Step 03 — Final Schedule</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-gray-400">Date</label>
                    <input 
                      type="date" 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-white border border-black/10 p-4 focus:outline-none focus:border-accent text-sm" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-gray-400">Time</label>
                    <select 
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full bg-white border border-black/10 p-4 focus:outline-none focus:border-accent text-sm"
                    >
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="10:30 AM">10:30 AM</option>
                      <option value="01:00 PM">01:00 PM</option>
                      <option value="03:30 PM">03:30 PM</option>
                    </select>
                  </div>
                </div>
                
                <div className="bg-white border border-black/5 p-8 space-y-3">
                   <div className="flex justify-between text-sm"><span className="text-gray-400 italic">Service</span> <span>{formData.service}</span></div>
                   <div className="flex justify-between text-sm"><span className="text-gray-400 italic">Barber</span> <span>{formData.barber}</span></div>
                </div>

                <button 
                  onClick={handleConfirm}
                  className="w-full py-5 bg-black text-white font-bold text-[11px] tracking-[0.3em] uppercase hover:bg-accent transition-all"
                >
                  Confirm Appointment
                </button>
                <button onClick={prevStep} className="block text-gray-400 hover:text-black transition-colors text-[10px] tracking-[0.2em] uppercase font-bold">← Back</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm p-6">
          <div className="bg-white max-w-md w-full p-12 shadow-2xl text-center">
            <h3 className="text-3xl font-medium mb-4 italic">Thank You</h3>
            <p className="text-gray-500 text-sm mb-10 leading-relaxed font-light">Your session has been reserved. We look forward to seeing you at Luxe Barber.</p>
            <button 
              onClick={closeModal}
              className="w-full py-4 border border-black text-black hover:bg-black hover:text-white transition-all text-[11px] font-bold tracking-[0.2em] uppercase"
            >
              Close Summary
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Booking;
