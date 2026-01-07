
import React, { useState, useEffect } from 'react';

interface BookingData {
  id: string;
  service: string;
  barber: string;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  at: string;
}

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [bookings, setBookings] = useState<BookingData[]>([]);

  const [formData, setFormData] = useState({
    service: '',
    barber: '',
    date: '',
    time: '09:00 AM',
    customerName: '',
    customerEmail: '',
    customerPhone: ''
  });

  useEffect(() => {
    const savedBookings = localStorage.getItem('luxeBarberBookings');
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleAdminLogin = () => {
    if (adminPassword === 'luxe123') {
      setIsAdminAuthenticated(true);
      setAdminPassword('');
    } else {
      alert('Invalid password');
    }
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date || !formData.time || !formData.customerName || !formData.customerEmail || !formData.customerPhone) {
      alert("Please fill in all fields.");
      return;
    }

    const newBooking: BookingData = {
      id: Date.now().toString(),
      service: formData.service,
      barber: formData.barber,
      date: formData.date,
      time: formData.time,
      customerName: formData.customerName,
      customerEmail: formData.customerEmail,
      customerPhone: formData.customerPhone,
      at: new Date().toLocaleString()
    };

    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem('luxeBarberBookings', JSON.stringify(updatedBookings));

    setIsModalOpen(true);
  };

  const deleteBooking = (id: string) => {
    const updatedBookings = bookings.filter(b => b.id !== id);
    setBookings(updatedBookings);
    localStorage.setItem('luxeBarberBookings', JSON.stringify(updatedBookings));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStep(1);
    setFormData({ service: '', barber: '', date: '', time: '09:00 AM', customerName: '', customerEmail: '', customerPhone: '' });
  };

  return (
    <section id="booking" className="py-40 bg-[#0F0F0F] text-white relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="max-w-5xl mx-auto reveal">
          <div className="flex flex-col md:flex-row gap-16">

            {/* Left Column: Progress & Info */}
            <div className="w-full md:w-1/3">
              <div className="sticky top-40">
                <span className="text-accent text-[10px] tracking-[0.6em] uppercase font-bold mb-6 block">Reservation</span>
                <h2 className="text-5xl font-medium leading-none mb-12">Secure <br /> <span className="italic serif text-gray-500">Your Seat</span></h2>

                <div className="space-y-8 relative">
                  {/* Connecting Line */}
                  <div className="absolute left-[11px] top-2 h-full w-[1px] bg-white/10 -z-10"></div>

                  {[
                    { step: 1, label: 'Service' },
                    { step: 2, label: 'Artisan' },
                    { step: 3, label: 'Details' },
                    { step: 4, label: 'Confirm' }
                  ].map((s) => (
                    <div key={s.step} className="flex items-center gap-6 transition-all duration-500">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${step >= s.step ? 'border-accent bg-accent text-black scale-110' : 'border-white/20 bg-[#0F0F0F] text-transparent'}`}>
                        {step > s.step && <span className="text-[10px]">✓</span>}
                      </div>
                      <span className={`text-[10px] tracking-[0.3em] uppercase font-bold transition-all duration-500 ${step === s.step ? 'text-white translate-x-2' : step > s.step ? 'text-accent' : 'text-gray-700'}`}>
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="w-full md:w-2/3">
              <div className="bg-[#151515] p-12 border border-white/5 relative shadow-2xl min-h-[500px]">

                {step === 1 && (
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-serif italic mb-8">Select Your Experience</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {['The Essential Cut', 'Beard Refinery', 'Signature Shave', 'Dermal Therapy'].map((s) => (
                        <button
                          key={s}
                          onClick={() => { setFormData({ ...formData, service: s }); nextStep(); }}
                          className={`w-full py-6 px-8 text-left border transition-all duration-300 flex justify-between items-center group ${formData.service === s ? 'border-accent bg-accent/5' : 'border-white/5 bg-[#1A1A1A] hover:border-white/20'}`}
                        >
                          <span className="text-lg font-light text-gray-200 group-hover:text-white transition-colors">{s}</span>
                          <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity text-sm tracking-widest uppercase">Select</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-serif italic mb-8">Choose Your Artisan</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {['Julian M.', 'Sebastian V.', 'Marco R.', 'Anyone Available'].map((b) => (
                        <button
                          key={b}
                          onClick={() => { setFormData({ ...formData, barber: b }); nextStep(); }}
                          className={`w-full py-6 px-8 text-left border transition-all duration-300 flex justify-between items-center group ${formData.barber === b ? 'border-accent bg-accent/5' : 'border-white/5 bg-[#1A1A1A] hover:border-white/20'}`}
                        >
                          <span className="text-lg font-light text-gray-200 group-hover:text-white transition-colors">{b}</span>
                          <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity text-sm tracking-widest uppercase">Select</span>
                        </button>
                      ))}
                    </div>
                    <div className="mt-8 flex justify-start">
                      <button onClick={prevStep} className="text-gray-500 hover:text-white transition-colors text-[10px] tracking-[0.2em] uppercase font-bold flex items-center gap-2">← Go Back</button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-serif italic mb-8">Your Details</h3>
                    <div className="space-y-6">
                      <div className="group">
                        <label className="text-[10px] tracking-widest uppercase font-bold text-gray-500 mb-3 block group-focus-within:text-accent transition-colors">Full Name</label>
                        <input
                          type="text"
                          value={formData.customerName}
                          onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                          className="w-full bg-[#1A1A1A] border border-white/5 p-4 focus:outline-none focus:border-accent text-white transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="group">
                        <label className="text-[10px] tracking-widest uppercase font-bold text-gray-500 mb-3 block group-focus-within:text-accent transition-colors">Email Address</label>
                        <input
                          type="email"
                          value={formData.customerEmail}
                          onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                          className="w-full bg-[#1A1A1A] border border-white/5 p-4 focus:outline-none focus:border-accent text-white transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="group">
                        <label className="text-[10px] tracking-widest uppercase font-bold text-gray-500 mb-3 block group-focus-within:text-accent transition-colors">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.customerPhone}
                          onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                          className="w-full bg-[#1A1A1A] border border-white/5 p-4 focus:outline-none focus:border-accent text-white transition-all duration-300"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                      <button onClick={prevStep} className="text-gray-500 hover:text-white transition-colors text-[10px] tracking-[0.2em] uppercase font-bold">← Back</button>
                      <button onClick={nextStep} className="px-8 py-4 bg-white text-black font-bold text-[11px] tracking-[0.3em] uppercase hover:bg-accent hover:scale-105 transition-all duration-300">Next Step</button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-serif italic mb-8">Finalize Appointment</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="group">
                        <label className="text-[10px] tracking-widest uppercase font-bold text-gray-500 mb-3 block">Date</label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-[#1A1A1A] border border-white/5 p-4 focus:outline-none focus:border-accent text-white scheme-dark"
                        />
                      </div>
                      <div className="group">
                        <label className="text-[10px] tracking-widest uppercase font-bold text-gray-500 mb-3 block">Time</label>
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full bg-[#1A1A1A] border border-white/5 p-4 focus:outline-none focus:border-accent text-white"
                        >
                          <option value="09:00 AM">09:00 AM</option>
                          <option value="10:30 AM">10:30 AM</option>
                          <option value="01:00 PM">01:00 PM</option>
                          <option value="03:30 PM">03:30 PM</option>
                          <option value="05:00 PM">05:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div className="bg-[#1A1A1A] border-l-2 border-accent p-8 space-y-4 mb-8">
                      <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                        <span className="text-gray-500 font-light">Service</span>
                        <span className="font-medium text-white">{formData.service}</span>
                      </div>
                      <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                        <span className="text-gray-500 font-light">Artisan</span>
                        <span className="font-medium text-white">{formData.barber}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 font-light">Guest</span>
                        <span className="font-medium text-white">{formData.customerName}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-8">
                      <button onClick={prevStep} className="text-gray-500 hover:text-white transition-colors text-[10px] tracking-[0.2em] uppercase font-bold">← Back</button>
                      <button
                        onClick={handleConfirm}
                        className="px-10 py-5 bg-accent text-black font-bold text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(163,134,82,0.3)]"
                      >
                        Confirm Reservation
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setShowAdmin(true)}
                  className="text-[9px] tracking-[0.2em] uppercase font-bold text-gray-500 hover:text-white transition-colors opacity-50 hover:opacity-100"
                >
                  Concierge Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-6 animate-fade-in">
          <div className="bg-[#151515] max-w-md w-full p-16 shadow-2xl text-center border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
            <div className="mb-6 w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
              <span className="text-accent text-3xl">✓</span>
            </div>
            <h3 className="text-3xl font-serif italic mb-4 text-white">Reservation Confirmed</h3>
            <p className="text-gray-400 text-sm mb-2 leading-relaxed font-light">We look forward to welcoming you.</p>
            <p className="text-gray-600 text-xs mb-10 uppercase tracking-widest">A confirmation has been sent to your email.</p>
            <button
              onClick={closeModal}
              className="w-full py-4 bg-white text-black hover:bg-accent transition-all text-[11px] font-bold tracking-[0.2em] uppercase"
            >
              Return Home
            </button>
          </div>
        </div>
      )}

      {/* Admin Login Modal */}
      {showAdmin && !isAdminAuthenticated && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-6 animate-fade-in">
          <div className="bg-[#111] max-w-md w-full p-10 border border-white/10 shadow-2xl relative">
            <button
              onClick={() => setShowAdmin(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white"
            >
              ✕
            </button>
            <h2 className="text-3xl font-serif italic mb-8 text-center text-accent">Admin Portal</h2>
            <div className="space-y-6">
              <div>
                <label className="text-[10px] tracking-widest uppercase font-bold text-gray-500 mb-3 block">Access Key</label>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
                  className="w-full bg-black border border-white/10 p-4 focus:outline-none focus:border-accent text-white transition-colors"
                  autoFocus
                  placeholder="Enter access key"
                />
              </div>
              <button
                onClick={handleAdminLogin}
                className="w-full py-4 bg-accent text-black font-bold text-[11px] tracking-[0.3em] uppercase hover:bg-white transition-all"
              >
                Enter Dashboard
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Admin Dashboard Modal */}
      {showAdmin && isAdminAuthenticated && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-6 animate-fade-in overflow-y-auto">
          <div className="bg-[#111] max-w-6xl w-full p-8 md:p-12 border border-white/10 shadow-2xl relative my-auto">
            <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-8">
              <h2 className="text-3xl md:text-4xl font-serif italic text-accent">Concierge Dashboard</h2>
              <button
                onClick={() => { setShowAdmin(false); setIsAdminAuthenticated(false); }}
                className="py-3 px-8 border border-white/20 text-white text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-accent hover:text-black hover:border-accent transition-all"
              >
                Logout
              </button>
            </div>

            <div className="flex gap-4 mb-8">
              <div className="bg-black/50 p-6 border-l-2 border-accent w-64">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Total Reservations</p>
                <p className="text-3xl font-bold text-white">{bookings.length}</p>
              </div>
            </div>

            {bookings.length === 0 ? (
              <div className="text-center py-24 bg-black/30 border border-white/5 rounded-lg">
                <p className="text-gray-500 text-lg font-light italic">No pending reservations found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-black/50 text-gray-400">
                      <th className="p-6 text-left text-[10px] tracking-[0.2em] uppercase font-bold">Client</th>
                      <th className="p-6 text-left text-[10px] tracking-[0.2em] uppercase font-bold">Service</th>
                      <th className="p-6 text-left text-[10px] tracking-[0.2em] uppercase font-bold">Artisan</th>
                      <th className="p-6 text-left text-[10px] tracking-[0.2em] uppercase font-bold">Details</th>
                      <th className="p-6 text-center text-[10px] tracking-[0.2em] uppercase font-bold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-6">
                          <div className="font-medium text-white">{booking.customerName}</div>
                          <div className="text-xs text-gray-500 mt-1">{booking.customerPhone}</div>
                        </td>
                        <td className="p-6 text-sm text-gray-300">{booking.service}</td>
                        <td className="p-6 text-sm text-gray-300">{booking.barber}</td>
                        <td className="p-6">
                          <div className="text-accent">{booking.time}</div>
                          <div className="text-xs text-gray-500">{new Date(booking.date).toLocaleDateString()}</div>
                        </td>
                        <td className="p-6 text-center">
                          <button
                            onClick={() => deleteBooking(booking.id)}
                            className="text-red-500 hover:text-red-400 text-xs font-bold uppercase tracking-wider transition-colors"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Booking;
